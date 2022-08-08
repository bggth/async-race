const css = require('./view.css');

const GarageView = require('./GarageView');
const WinnersView = require('./WinnersView');

class View {
    constructor() {
        this.garageView = new GarageView();
        this.winnersView = new WinnersView();
    }

    render() {
        let innerHTML = '';
        innerHTML += this.garageView.render();
        innerHTML += this.winnersView.render();
        console.log(innerHTML)
        return `
        <header class="header">
        <div class="header__logo">Async-Race</div>
        <div class="header__menu">
            <div class="header__menuitem">Garage</div>
            <div class="header__menuitem">Winners</div>
        </div>
        </header>
        <div class="main">${innerHTML}</div>`;
    }
}

module.exports = View;