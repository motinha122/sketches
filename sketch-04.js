const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';

    const cx = 0;
    const cy = height;
    const w = width * 0.01;
    const h = height * 0.1;

    const num = 100;

    const radius = width*0.8;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360) / num;
      const angle = slice * i;

      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);
      context.lineWidth = random.range(10,50);
      context.beginPath();
      context.arc(0,0,radius*random.range(0.7,1.3),slice*random.range(1,-8),slice*random.range(1,5));
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
