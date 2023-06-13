const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require('./lib/svg');
const Text = require("./lib/text");
const {Circle, Square, Triangle} = require("./lib/shape")

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "What is the text?"
    },
    {
        type: "input",
        name: "textColor",
        message: "What is the color of the text"
    },
    {
        type: "list",
        name: "shape",
        message: "What is the shape?",
        choices: [
            "circle",
            "triangle",
            "square"
        ]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What is the color of the shape?"
    }
]).then((answers) => {
    console.log(answers)

    let shape = "";

    // CREATE THE SVG
    if(answers.shape == "circle") {
        shape = new Circle(answers.shapeColor)
    } else if (answers.shape == "triangle") {
        shape = new Triangle(answers.shapeColor)
    } else {
        shape = new Square(answers.shapeColor)
    }

    
    let text = new Text(answers.text, answers.textColor)

    console.log(text)

    // let svgTemplate =  `
    //     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    //         ${shape}
    //         ${text}
    //     </svg>
    // `

    const mySVG = new SVG(shape, text)

    console.log(mySVG.render());

    const svgCode = mySVG.render();

    fs.writeFile("./output/mySVG.svg", svgCode, function() {
        console.log("SVG created!")
    })
})