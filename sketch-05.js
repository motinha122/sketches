const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [2048, 2048]
};


const sketch = () => {
  return ({ context, width, height }) => {
    
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    const agents = [];

    for (let i = 0; i < 40; i++) {
      const x = random.range(0, width);
      const y = random.range(0, height);
      agents.push(new Agent(x, y));
    }
    
    let fpsInterval, now, then, elapsed;

    function startAnimation(fps) {
      fpsInterval = 1000 / fps;
      then = Date.now();
      animate();
    }

    function animate() {
      requestAnimationFrame(animate);
      now = Date.now();
      elapsed = now - then;
      if (elapsed > fpsInterval) {
        context.clearRect(0,0,width,height);
        agents.forEach(agent => {
          agent.update();
          agent.draw(context);
        });
      }
    }

    //startAnimation(60);
    
  };
};

canvasSketch(sketch, settings);

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = random.range(6, 24);
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.save();
    context.lineWidth = 4;
    context.translate(this.pos.x, this.pos.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.restore();
  }
}