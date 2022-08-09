const CarSVG = require('./CarSVG');

class CarView {
    constructor(car) {
        this.car = car;
        this.imgElement = null;
        this.carSVG = new CarSVG();
    }

    render() {
        console.log(this.carSVG.render());
        return `
        <div class="garage__carview">
            <div class="garage__carline">
                <span class="button">Select</span>
                <span class="button">Remove</span>
                <div class="garage__cartitle">${this.car.name}</div>
            </div>
            <div class="garage__carline">
                <span class="button button-small">A</span>
                <span class="button button-small">B</span>
                ${this.carSVG.render(this.car.color)}
            </div>
            <div class="garage__carline">
            <hr class="garage__line">
            </div>
        </div>
        `
    }

    update() {
        if (this.imgElement==null) {
            this.imgElement = document.querySelector('.car_img');
        }
        console.log(this.imgElement);
    }
}

module.exports = CarView;