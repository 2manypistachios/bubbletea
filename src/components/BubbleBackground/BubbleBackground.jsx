import React from "react";
import paper from 'paper'
import "./BubbleBackground.css";

export default class BubbleBackground extends React.Component {
  constructor() {
      super();
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      
      this.state = {
          color: "#2c57e8",
          path: {},
          droplet: {},
          view: {},
          springs: {},
          size: {},
          counter: 0,
          values: {}
      };
  }

  handleMouseEnter(e) {
      this.setState({color:"black"});
  }

  handleMouseLeave(e) {
      this.setState({color:"#2c57e8"});
  }
  
  handleMouseMove(e) {
      //console.log("Mouse Move",e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      var path = this.state.path;
      var size = this.state.size;
      var eventPoint = new Point(e.nativeEvent.offsetX,e.nativeEvent.offsetY); //find eventPoint in terms of canvas

      this.disturbWave(eventPoint);
  }

  disturbWave(eventPoint) {
      var path = this.state.path;
      var size = this.state.size;
      
      if (path.length > 1) {
          var location = path.getNearestLocation(eventPoint); //translate eventPoint to canvas path
          var segment = location.segment; //find segment in canvas path
          var point = segment.point; //find point in segment
      
          if (!point.fixed && location.distance < size.height / 4) { //if distance is less than a 4th of the canvas height
              var y = eventPoint.y;
              point.y += (y - point.y) / 6; // move point towards mouse at 60 frames / 6 speed 
              if (segment.previous && !segment.previous.fixed) { // move the left point towards mouse
                  var previous = segment.previous.point;
                  previous.y += (y - previous.y) / 24; 
              }
              if (segment.next && !segment.next.fixed) { // move the right point towards mouse
                  var next = segment.next.point;
                  next.y += (y - next.y) / 6;
              }
              this.setState({path: path}); // broadcast movement
          }
      }
  }

  updateWave(path) {
      var path = this.state.path;
      var values = this.state.values;
      var springs = this.state.springs;
      var force = 1 - values.friction * values.timeStep * values.timeStep;
      for (var i = 0, l = path.segments.length; i < l; i++) { //Spring Out
          var point = path.segments[i].point;
          var dy = (point.y - point.py) * force; //vector math of different of two points multiplied by force
          point.py = point.y;
          point.y = Math.max(point.y + dy, 0); //prevent dy from slowing down change
      }
  
      for (var j = 0, l = springs.length; j < l; j++) { //Spring In
          springs[j].update();
      }
      //console.log("Check spring creation, spring:", springs,"this", this);
      this.setState({springs: springs});
      path.smooth({ type: 'continuous' });
      path.setFillColor(this.state.color);
  }

  updateDroplet(droplet) {
      var droplet = this.state.droplet;
      var water = this.state.path;

      var view = this.state.view;
      var counter = this.state.counter;
      //console.log(counter);
      
      droplet.position.y += 6;

      if (droplet.bounds.bottom > view.size.width) {
          droplet.position.y = -droplet.bounds.width;

          this.setState({counter: 0});
      }else if (droplet.getIntersections(water).length > 1) {
          if (counter < 10) {
              this.disturbWave(droplet.position);
          }

          this.setState({counter: this.state.counter + 1});
      }

      this.setState({droplet: droplet});
  }

  componentDidMount() {
      paper.install(window);
      paper.setup('paperCanvas');
      var values = {
          friction: 0.8,
          timeStep: 0.01,
          amount: 15,
          mass: 10,
      };
      values.invMass = 1 / values.mass;

      var path, springs;
      var size = view.bounds.size.multiply([2, 1]);
      var strength = .01;

      this.setState({view: view}); //view
      this.setState((strength) => {
          var pathtest = createPath(0.1);
          return {
            path: pathtest
          };
      }); //path
      this.setState({size: size}); //size
      this.setState({values:values}); //values

      var Spring = function(a, b, strength, restLength) { //Creating Spring Object
          this.a = a;
          this.b = b;
          this.restLength = restLength || 80; //if not defined 80
          this.strength = strength || 0.55; //if not defined .55
          this.mamb = values.invMass * values.invMass; // (1/mass)^2
      };
      
      Spring.prototype.update = function() { //Spring functionality to push points together
          var delta = this.b.subtract(this.a); //vector of two concurrent points
          var dist = delta.length; //vector length
          var normDistStrength = (dist - this.restLength) / (dist * this.mamb) * this.strength; //the springy bit of springs
          delta.y *= normDistStrength * values.invMass * 0.2;
          if (!this.a.fixed) //the last and first two points don't move
              this.a.y += delta.y; //push the two points together
          if (!this.b.fixed)
              this.b.y -= delta.y;
      };
      
      var createPath = (strength) => {
          var path = new Path({
              fillColor: '#2c57e8'
          });
          springs = [];
          for (var i = 0; i <= values.amount; i++) {
              var segment = path.add(new Point(i / values.amount, 0.5).multiply(size));
              var point = segment.point;
              if (i == 0 || i == values.amount)
                  point.y += size.height;
              point.px = point.x;
              point.py = point.y;
              // The first two and last two points are fixed:
              point.fixed = i < 2 || i > values.amount - 2;
              if (i > 0) {
                  var spring = new Spring(segment.previous.point, point, strength);
                  springs.push(spring);
              }
          }
          this.setState({springs: springs});
          path.position.x -= size.width / 4;
          return path;
      }

      var droplet = new Path.Ellipse({
    center: [view.size.width/2, 40],
    size: [24, 39],
    fillColor: 'white'
      });

      this.setState({droplet:droplet});
  }

  componentWillUnmount() {
    this.app.stop();
  }
    

  render() {
      let component = this;
      //console.log(component);
      this.state.view.onFrame = (event) => {
          if (this.state.path.length > 1 && this.state.springs.length > 1) {
              this.updateWave(this.state.path);
              this.updateDroplet(this.state.droplet);
          }
      };
      return (
          <div>
              <canvas id="paperCanvas"
              resize
              onMouseEnter={this.handleMouseEnter} 
              onMouseLeave={this.handleMouseLeave}
              onMouseMove={this.handleMouseMove} 
              style={{width: '100%', height: '300px', opacity: '.7'}}></canvas>
          </div>
      );
  }
}