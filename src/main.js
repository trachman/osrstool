import Model from '/src/model.js';
import View from '/src/view.js';
import Controller from '/src/controller.js';

// start of code execution
const OSRS_APP = new Controller(new Model(), new View());
window.addEventListener("load", () => console.log(`Height: ${window.innerHeight}`, `Width: ${window.innerWidth}`));

window.generateCombat = () => OSRS_APP.combatLevelCalculator();
window.generateHiscores = () => OSRS_APP.hiscores();
window.generateBestInSlot = () => OSRS_APP.bestInSlot();
window.generateGrandExchange = () => OSRS_APP.grandExchange();
window.logIn = () => OSRS_APP.logIn();

// this messes around with canvas and drawing graphics
// window.generateGrandExchange = () => {
//     // OSRS_APP.grandExchange();

//     /** here just playing around with canvas */
//     let div = document.createElement("div");
//     div.className = "drawing-board";
//     let canvasElement = document.createElement("canvas");
//     canvasElement.className = "drawing";
//     canvasElement.width = 600;
//     canvasElement.height = 400; 
//     let canvas = canvasElement.getContext("2d");
//     // lets try and add some real gravity

//     // let velocity = 1;
//     // let gravity = 0.2;
//     let y = 200;
//     // let height = 350;
//     function draw() {
//         // canvas.clearRect(0, 0, 400, 400);
//         // let gradiant = canvas.createLinearGradient(0, y-50, 0, y+50);
//         // gradiant.addColorStop(1, 'magenta');
//         // gradiant.addColorStop(0, 'cyan');
//         // canvas.fillStyle = gradiant;

//         // canvas.beginPath();
//         // canvas.arc(200, y, 50, 0, Math.PI * 2);
//         // canvas.fill();
//         // canvas.closePath();

//         // // if you hit the floor bounce back
//         // if (y >= height-2) {
//         //     velocity = velocity * -1;
//         //     gravity = gravity * 1.2;
//         //     if (gravity > 3) {
//         //         return;
//         //     }
//         // } else {
//         //     velocity += gravity;
//         // }
//         // y += velocity;

//         canvas.clearRect(0, 0, 400, 400);
//         canvas.fillStyle = "blue";
//         canvas.beginPath();
//         canvas.arc(200, y, 50, 0, Math.PI * 2);
//         canvas.arc(400, y, 50, 0, Math.PI * 2);
//         canvas.fill();
//         canvas.closePath();

//         canvas.beginPath();
//         canvas.lineTo(20, 40);
//         canvas.closePath();

//         requestAnimationFrame(draw);
//     }
//     requestAnimationFrame(draw);
//     div.appendChild(canvasElement);
//     document.getElementById("root").appendChild(div);
// }

/** TODO:   
 *          1) Learn how to connect to a python backend with flask IF NEEDED
 *          2) Add a pop up so user is aware the fields will clear 
 *              when the combat calculator closes if fields are not empty
 *          3) Handle incorrect inputs (ie. letters, etc.) into the level input boxes
 *          4) Change code to include ? true : false for showing items
 */ 


/** THINGS I'VE LEARNED:
 *      window object:
 *          - window.open()
 *          - window.close()
 *          - window.innerHeight()
 *          - window.innerWidth()
 *          - window.moveTo()
 *          - window.resizeTo()
 * 
 *      MORE INFO ON --> JS Browser DOM on w3schools.com
 */