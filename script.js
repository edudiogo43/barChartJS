const canvas = document.querySelector("canvas");
const submit = document.querySelector("#btnSubmit");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

submit.addEventListener("click", () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const textValues = document.querySelector("#txtValues").value;
    const chartValues = textValues.split(",");
    
    let width = 40;
    let x = 40;

    const reducer = (accumulator, curr) => parseFloat(accumulator) + parseFloat(curr);
    let total = chartValues.reduce(reducer);
    
    chartValues.forEach((value) => {
        let h = value;
        const posY = canvas.height / 1.6 - h;
        ctx.fillRect(x, posY, width, h);
        ctx.fillStyle = `hsla(${Math.random() * 360}, 50%, 50%, 1)`;
        x += width+20;

        // Adding legend
        ctx.font = "14px Arial";

        let percentage = (h/total) * 100;
        ctx.fillText(percentage.toFixed(2)+'%', x-60, 590);

    })

})
