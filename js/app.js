window.addEventListener('load', init, false);

function init() {
    const iwidthTxt = document.getElementById('iwidthTxt');
    const iheightTxt = document.getElementById('iheightTxt');
    const sltColor = document.getElementById('sltColor');
    const sltFigura = document.getElementById('sltFigura');
    const bcreate = document.getElementById('bcreate');

    const dcontainer = document.getElementById('dcontainer');


    bcreate.onclick = function btnCreateOnClick(e) {

        let width = Number(iwidthTxt.value);
        let height = Number(iheightTxt.value);
        let color = sltColor.value;
        let figura = sltFigura.value;

        switch (figura) {
            case 'square':
                let square = new Square(width, height, color, dcontainer);
                break;
            case 'circle':
                let circle = new Circle(width, height, color, dcontainer);
                break;
            case 'triangle':
                let triangle = new Triangle(width, height, color, dcontainer);
                break;
            case 'parallelogram':
                let parallelogram = new Parallelogram(width, height, color, dcontainer);
                break;
            case 'trapezoid':
                let trapezoid = new Trapezoid(width, height, color, dcontainer);
                break;
            case 'pacman':
                let pacman = new PacMan(width, height, color, dcontainer);
                break;
            case 'egg':
                let egg = new Egg(width, height, color, dcontainer);
                break

            default:
                break;
        }
    }
};