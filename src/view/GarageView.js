const CarView = require("./CarView");

class GarageView {
    constructor() {
        this.cars = null;
        this.carView = new CarView({name:"bmw vesta", color:"#FBB13C"});
    }

    setCars(cars) {
        this.cars = cars;
    }

    render() {
        let innerHTML = this.carView.render() + this.carView.render() + this.carView.render();

        return `<div class="garage__view">
            <div class="garage__form">
                <div class="garage__formline">
                    <input class="garage__carname"></input>
                    <span  class="button">Create</span>
                </div>
                <div class="garage__formline">
                    <input class="garage__carname"></input>
                    <span class="button">Update</span>
                </div>
                <div class="garage__formline">
                    <span class="button">Race</span>
                    <span  class="button">Reset</span>
                    <span  class="button">Generate</span>
                </div>
            </div>
            <div class="garage__title">Garage (999)</div>
            <div class="garage__page">Page (999)</div>
            <div class="garage__carlist">
                ${innerHTML}
            </div>
        </div>`;
    }

    update() {
        this.carView.update();
    }
}

module.exports = GarageView;