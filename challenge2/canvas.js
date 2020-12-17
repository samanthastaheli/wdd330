export function circles() {
    let canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var c = canvas.getContext('2d'); 
    
    c.arc(100, 75, 50, 0, 2 * Math.PI);
    c.stroke();
    c.strokeStyle = "#ffc0cb";
}