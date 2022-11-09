//Square rotated in the middle

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

//utils
const degToRad = (deg) => deg*Math.PI/180;

//main canvas 

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    
    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;

    context.translate(x,y);
    
    context.rotate(degToRad(45));
    context.fillRect(-w*0.5,-h*0.5,w,h);
  };
};

canvasSketch(sketch, settings);
