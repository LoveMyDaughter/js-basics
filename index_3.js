// Factory Function
function createCircle (radius){
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(10);
console.log(circle1);
const circle2 = createCircle(5);
console.log(circle2);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw_circle');
    }
}

const circleFunction = new Circle(1);