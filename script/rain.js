class RainParticles{
    constructor(position, velocity, length){
        this.position = position
        this.velocity = velocity
        this.length = length
    }
    
    draw(ctx, finals){
        ctx.strokeStyle = "#C4DDFF"
        ctx.lineWidth = Math.round() * 2;
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(this.position.x, this.position.y)
        ctx.lineTo(finals.x, finals.y + this.length)
        ctx.stroke()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

    update(ctx, {width, height}, {position, boxWidth}){
        if (this.position.x > width || this.position.y > height || this.isCollide({position,width:boxWidth})){
            this.position.y = -20
            this.velocity.x = Math.random()
            this.velocity.y = (Math.random() * 15)
            this.position.x = Math.random() * width
            this.length = Math.random() * 15
        }

        this.draw(ctx, {
            x: this.position.x + this.velocity.x,
            y: this.position.y + this.velocity.y
        }) 
    }

    isCollide({position, width}){
        if((this.position.x >= position.x && this.position.x <= position.x + width)
            && (this.position.y + this.length >= position.y)
        ){
            return true 
        } else{
            return false
        }
    }

}