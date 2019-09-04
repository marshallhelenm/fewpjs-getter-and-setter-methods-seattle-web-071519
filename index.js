class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter/2
    }

    get circumference() {
        return this.radius * Math.PI * 2
    }

    set circumference(circ) {
        this.radius = circ/(Math.PI * 2)
    }

    get area() {
        return Math.PI * (this.radius * this.radius) 
    }

    set area(area) {
        radius = Math.sqrt(area/Math.PI)
    }

}