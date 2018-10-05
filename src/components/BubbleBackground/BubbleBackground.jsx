import React from "react";
import "./BubbleBackground.css";
import "./p5.min.js";
import P5Wrapper from 'react-p5-wrapper';

// Five moving bodies
var movers = [];

// Liquid
var liquid;

function setup(p) {
  p.createCanvas(640, 360);
  reset(p);
  // Create liquid object
  let height=100;
  let width=100;
  liquid = new Liquid(0, height/2, width, height/2, 0.1);
}

function draw(p) {
  p.background(127);
  
  // Draw water
  liquid.display(p);

  for (var i = 0; i < movers.length; i++) {
    
    // Is the Mover in the liquid?
    if (liquid.contains(movers[i])) {
      // Calculate drag force
      var dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce,p);
    }

    // Gravity is scaled by mass here!
    var gravity = p.createVector(0, 0.1*movers[i].mass);
    // Apply gravity
    movers[i].applyForce(gravity,p);
   
    // Update and display
    movers[i].update(p);
    movers[i].display(p);
    movers[i].checkEdges(p);
  }
  
}

function mousePressed(p) {
  reset(p);
}

// Restart all the Mover objects randomly
function reset(p) {
  for (var i = 0; i < 9; i++) {
    movers[i] = new Mover(Math.random(0.5, 3), 40+i*70, 0,p);
  }
}

var Liquid = function(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
};
  
// Is the Mover in the Liquid?
Liquid.prototype.contains = function(m) {
  var l = m.position;
  return l.x > this.x && l.x < this.x + this.w &&
         l.y > this.y && l.y < this.y + this.h;
};
  
// Calculate drag force
Liquid.prototype.calculateDrag = function(m) {
  // Magnitude is coefficient * speed squared
  var speed = m.velocity.mag();
  var dragMagnitude = this.c * speed * speed;

  // Direction is inverse of velocity
  var dragForce = m.velocity.copy();
  dragForce.mult(-1);
  
  // Scale according to magnitude
  // dragForce.setMag(dragMagnitude);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};
  
Liquid.prototype.display = function(p) {
  p.fill(50);
  p.rect(this.x, this.y, this.w, this.h);
};

function Mover(m,x,y,p) {
  this.mass = m;
  this.position = p.createVector(x,y);
  this.velocity = p.createVector(0,0);
  this.acceleration = p.createVector(0,0);
}

// Newton's 2nd law: F = M * A
// or A = F / M
Mover.prototype.applyForce = function(force,p) {
  var f = p.Vector.div(force,this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Mover.prototype.display = function(p) {
  p.stroke(0);
  p.strokeWeight(2);
  p.fill(255,127);
  p.ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
};

// Bounce off bottom of window
Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass*8)) {
    // A little dampening when hitting the bottom
    this.velocity.y *= -0.9;
    this.position.y = (height - this.mass*8);
  }
};

function sketch (p) {
    p.setup = function () {
      p.createCanvas(600, 400, p.WEBGL);
    };

    p.setup = setup(p);
    p.draw = draw(p);
};

export default class BubbleBackground extends React.Component {
    render() {
        return (
            <P5Wrapper sketch={sketch}/>
        )
    }
}