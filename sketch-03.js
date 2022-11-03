const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048]
};

const degToRad = (deg) => deg / 180 * Math.PI;

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const num = 12;

    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = degToRad(360) / num;
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.fillRect(-w * 0.5, -h * 0.5, w, h);
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
