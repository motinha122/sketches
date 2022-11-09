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
        this.vel = new Vector(u.random(-0.5,0.5),u.random(-0.5,0.5));
        this.radius = u.random(3,12);
    }

    drawCircle(ctx){
        ctx.save();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.translate(this.pos.x,this.pos.y);
        ctx.beginPath();
        ctx.arc(0,0,this.radius,0,Math.PI * 2);
        ctx.fill();
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
const circlesNum = 40;

for(let i=0; i<circlesNum; i++){
    const x = u.random(0,canvas.width);
    const y = u.random(0,canvas.height);
    circles.push(new Circle(x,y));
}

function draw(){    
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let i=0; i<circles.length; i++){
        const circle = circles[i];

        for(let j=i+1; j<circles.length; j++){
            const other = circles[j];

            ctx.beginPath();
            ctx.moveTo(circle.pos.x,circle.pos.y);
            ctx.lineTo(other.pos.x,other.pos.y);
            ctx.stroke();
        }
    }
    
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