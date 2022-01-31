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
    let x = 20;
    
    chartValues.forEach((value) => {
        let h = value;
        ctx.fillRect(x, canvas.height / 2 - h , width, h);
        ctx.fillStyle = `hsla(${Math.random() * 360}, 50%, 50%, 1)`;
        x += width+20;
    })

})
