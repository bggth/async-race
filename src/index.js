const App = require('./app');   

window.onload = () => {
    let app = new App();
    app.render();
    app.view.update();
}