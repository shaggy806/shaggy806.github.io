class ball extends rb{
  constructor() {
    super();
    this.pos = createVector(random(width / 1.2) + 40, random(height / 1.2) + 40)
    this.vel = createVector(0, 0)
    this.r = random(35)+5
    this.m = 10 * (this.r / 20)
    this.c = color(random(255), random(255), random(255))
    this.t = false
  }
  run() {
    if (!this.t) {
      fill(this.c)
    } else {
      fill(this.c)
      // fill(255,0,0)
      this.t = false
    }

    if (this.pos.x > width - this.r || this.pos.x < this.r) {
      this.vel.x *= -1
      this.pos.x += this.vel.x
    }
    if (this.pos.y > height - this.r || this.pos.y < this.r) {
      this.vel.y *= -1
      this.pos.y += this.vel.y
    } 
    
    this.pos.add(this.vel)
    this.vel.mult(1)
    circle(this.pos.x, this.pos.y, this.r * 2);
  }

  checkCollision(other) {
    dist = Math.sqrt((other.pos.x - this.pos.x) * (other.pos.x - this.pos.x) + (other.pos.y - this.pos.y) * (other.pos.y - this.pos.y))
    if (dist < this.r + other.r) {
      this.t = true
      let angle = Math.atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x)
      let distToMove = other.r + this.r - dist
      this.pos.x += Math.cos(angle+180)*distToMove/2
      this.pos.y += Math.sin(angle+180)*distToMove/2
      other.pos.x += Math.cos(angle)*distToMove/2
      other.pos.y += Math.sin(angle)*distToMove/2
      let normal = p5.Vector.sub(other.pos, this.pos).normalize()
      let relVel = p5.Vector.sub(this.vel, other.vel)
      let sepVel = relVel.dot(normal)
      let newSepVel = -sepVel
      let sepvelVec = p5.Vector.mult(normal, newSepVel)
      this.vel.add(sepvelVec.mult(0.9))
      other.vel.sub(sepvelVec)
    }
  }
}