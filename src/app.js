const View = require('./view/View');

class App {
    constructor() {
        this.view = new View();
    }
    render() {
        document.querySelector('body').innerHTML = this.view.render();
    }
}

module.exports = App