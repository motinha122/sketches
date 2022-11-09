import * as u from '/utils.js';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onresize = resize;
resize();

class Vector {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Circle {
    constructor(x,y){
        this.pos = new Vector(x,y);
        this.vel = new Vector(u.random(-1,1),u.random(-1,1));
        this.radius = u.random(3,12);
    }

    drawCircle(ctx){
        ctx.save();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.translate(this.pos.x,this.pos.y);
        ctx.beginPath();
        ctx.arc(0,0,this.radius,0,Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }

    update(){
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    bounce(width,height){
        if(this.pos.x <= 0 || this.pos.x >= width){
            this.vel.x *= -1;
        }
        if(this.pos.y <= 0 || this.pos.y >= height){
            this.vel.y *= -1;
        }
    }
}

const circles = [];

for(let i=0; i<40; i++){
    const x = u.random(0,canvas.width);
    const y = u.random(0,canvas.height);
    circles.push(new Circle(x,y));
}

function draw(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    circles.forEach(circle =>{
        circle.update();
        circle.drawCircle(ctx);
        circle.bounce(canvas.width,canvas.height);
    })
}

function animate(){
    draw();
    requestAnimationFrame(animate);
}

animate();