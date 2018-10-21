import React from "react";
import "./BubbleBackground.css";

//import P5Wrapper from 'react-p5-wrapper';

class P5Wrapper extends React.Component {
  componentDidMount() {
    try {
      p5 = require('./p5.min.js');
      this.canvas = new p5(this.props.sketch, this.wrapper);
      if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
        this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
      }
    } catch(e) {
      console.error(e);
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}

function sketch (p) {
  //console.log(this.p);
  let onReady = () => {};
  let props = {};

  var Liquid = function(x, y, w, h, c, p) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.p = p;
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
    
  Liquid.prototype.display = function() {
    this.p.noStroke();
    this.p.fill(32,156,238);
    this.p.rect(this.x, this.y, this.w, this.h);
  };

  function Mover(m,x,y,p) {
    this.mass = m;
    this.position = p.createVector(x,y);
    this.velocity = p.createVector(0,0);
    this.acceleration = p.createVector(0,0);
    this.p = p;
  }
  
  // Newton's 2nd law: F = M * A
  // or A = F / M
  Mover.prototype.applyForce = function(force) {
    //var f = this.mass.div(force);
    //console.log("f",f);
    
    this.acceleration.add(p.createVector(0,1));
  };
    
  Mover.prototype.update = function() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  };
  
  Mover.prototype.display = function() {
    this.p.noStroke();
    this.p.fill(255,127);
    this.p.ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
  };
  
  // Bounce off bottom of window
  Mover.prototype.checkEdges = function() {
    if (this.position.y > (this.p.height - this.mass*8)) {
      // A little dampening when hitting the bottom
      this.velocity.y *= -0.9;
      this.position.y = (this.p.height - this.mass*8);
    }
  };

  function reset(p) {
    let unit = p.width/4;
    let max = 15;
    for (var i = 0; i < max; i++) {

      movers[i] = new Mover(p.random(0.5, 3), p.width/(max+1)+(p.width/max)*i, 0,p);
    }
  }

  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function (_props) {
    props = _props;
  }
  let movers = [];
  let liquid;
  p.setup = function() {
    const front = document.getElementById('front');
    const height = front.clientHeight;
    const width = front.clientWidth;
    p.createCanvas(width, height);
    console.log("::: displayDensity:", p.displayDensity());
    console.log("::: pixelDensity:", p.pixelDensity());
    reset(p);
    liquid = new Liquid(0, p.height/2, p.width, p.height/2, 0.1, p);
    onReady();
  }

  p.draw = function() {
    p.background(32,156,238);
    p.noStroke();
    liquid.display();
    
    for (var i = 0; i < movers.length; i++) {
    
      // Is the Mover in the liquid?
      if (liquid.contains(movers[i])) {
        // Calculate drag force
        var dragForce = liquid.calculateDrag(movers[i]);
        // Apply drag force to Mover
        movers[i].applyForce(dragForce);
      }
  
      // Gravity is scaled by mass here!
      var gravity = p.createVector(0, 0.1*movers[i].mass);
      // Apply gravity
      movers[i].applyForce(gravity);
     
      // Update and display
      movers[i].update();
      movers[i].display();
      movers[i].checkEdges();
    }
  }
};

export default class BubbleBackground extends React.Component {
  render() {
    return (
      <div id="bubblechild">
        <P5Wrapper sketch={sketch}/>
      </div>
    )
  }
};