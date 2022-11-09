const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //draw();
}

window.onresize = resize;
resize();

function draw(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;

    const cx = canvas.width/2;
    const cy = canvas.height/2;

    const w = canvas.width/3;
    const h = canvas.width/3;

    const x = cx - w/2; 
    const y = cy - h/2;

    ctx.strokeRect(x,y,w,h);
}

draw();