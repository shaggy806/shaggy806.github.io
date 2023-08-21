class box extends rb {
    constructor() {
        super();
        this.pos = createVector(random(windowWidth / 1.2) + 40, random(windowHeight / 1.2) + 40)
        this.vel = createVector(0, 0)
        this.size = 40
        this.m = 10 * (this.r / 20)
        this.c = color(random(255), random(255), random(255))
    }
    run() {
        fill(this.c)
        if (this.pos.x > windowWidth - this.size / 2 || this.pos.x < this.size / 2) {
            this.vel.x *= -1
            this.pos.x += this.vel.x
        }
        if (this.pos.y > windowHeight - this.size / 2 || this.pos.y < this.size / 2) {
            this.vel.y *= -1
            this.pos.y += this.vel.y
        }
        this.pos.add(this.vel)
        this.vel.mult(1)
        rect(this.pos.x, this.pos.y, this.size, this.size);
    }

    checkCollision(other) {
        let xDiff = this.pos.x - other.pos.x
        let yDiff = this.pos.y - other.pos.y
        if (Math.abs(xDiff) < (this.size + other.size) / 2 && Math.abs(yDiff) < (this.size + other.size) / 2) {
            if (xDiff < yDiff) {
                this.pos.x += xDiff / 4
                other.pos.x -= xDiff / 4
                let o = other.vel.x
                other.vel.x = this.vel.x
                this.vel.x = o
            } else {
                this.pos.y += yDiff / 4
                other.pos.y -= yDiff / 4
                let o = other.vel.y
                other.vel.y = this.vel.y
                this.vel.y = o
            }
        }
    }
}