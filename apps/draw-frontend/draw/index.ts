type Shape = {
    type: "rect";
    x: number;
    y: number;
    width: number;
    height: number;
} | {
    type: "circle";
    centerX: number;
    centerY: number;
    radius: number;
}


export function initDraw(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return
    }
    //"rgba(181, 199, 235)"
    ctx.fillStyle = "rgba(255,255,255)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown", (e) => {
        clicked = true
        startX = e.clientX
        startY = e.clientY
    })

    canvas.addEventListener("mouseup", (e) => {
        clicked = false
        console.log(e.clientX, e.clientY)
    })

    canvas.addEventListener("mousemove", (e) => {
        if (clicked) {
            const width = e.clientX - startX;
            const height = e.clientY - startY;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255,255,255)"
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "rgba(0,0,0)"
            ctx.strokeRect(startX, startY, width, height);
        }
    })
}