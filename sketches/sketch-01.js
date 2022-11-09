const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2000, 2000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.fillRect(0,0,width,height);
    context.strokeStyle = 'white';
    context.lineWidth = width * 0.01;

    const w = width * 0.05;
    const h = height * 0.05;
    const gap = width * 0.03;
    const ix = width * 0.11;
    const iy = height * 0.11;
    const offset = width * 0.02;
  
    let x,y;
    let gradConst = new Array(3).fill(0).map(()=>Math.floor(Math.random()*25));

    gradConst.sort(()=>Math.random() - 0.5)

    console.log(gradConst);

    let z = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        x = ix + (w + gap) * j;
        y = iy + (h + gap) * i;
        context.strokeStyle = `rgb(${(z*gradConst[0])},${(i*gradConst[1])},${(j*gradConst[2])})`;
        context.strokeRect(x,y,w,h);
        
        if (Math.random() > 0.5) {
          context.strokeRect(x+offset,y+offset,w-offset*2,h-offset*2);
        }
        z++;
      }
      z=1;
    }
  };
};

canvasSketch(sketch, settings);
