function rota() {
    const img = document.querySelector("img");
    img.src = "https://i.ibb.co/5cPcvJX/catte.png";

    const r = Math.floor(Math.random() * 2)
    if (r === 0) {
        img.classList.add("clickR", "r");
    } else {
        img.classList.add("clickR", "l");
    }
    img.addEventListener("animationend", doned);
}

function catteP() {
    const tcattehold = document.getElementById("tcattehold")

    for (let i = 0; i < 15; i++) {
        const tcatte = document.createElement("img")
        const r = Math.floor(Math.random() * 16)
        if (r === 15) {
            tcatte.src = "https://i.ibb.co/zs6F2R1/cotte.png";
            tcatte.style.transform = "scale(0.4)";
        } else {            
            tcatte.src = "https://i.ibb.co/5cPcvJX/catte.png";
            tcatte.style.transform = "scale(0.2)";
        }
        tcatte.classList.add("tcatte")
        tcattehold.appendChild(tcatte)
        let cursorX = 600
        let cursorY = 400
        document.addEventListener("mousemove", function(event) {
            cursorX = event.clientX * 1
            cursorY = event.clientY * 1
        });
        let posX = cursorX
        let posY = cursorY   
        tcatte.style.left = posX + "px";
        tcatte.style.top = posY + "px";
        tcatte.style.position = "absolute";
        tcatte.style.zIndex = "999";

        //moving    
        let speedX = (Math.random() - 0.5) * 30;
        let speedY = (Math.random() - 0.5) * 30;
        const gravity = 0.5;
        let lifeTime = 10000;
        //       　　　 ↓lol
        function RenderStepped() {
            posX += speedX;
            posY += speedY;
            speedY += gravity;
            tcatte.style.left = posX + "px";
            tcatte.style.top = posY + "px";
            lifeTime -= 16.67;
            if (lifeTime <= 0) {
                tcattehold.removeChild(tcatte);
                console.log("death")
            } else {
                requestAnimationFrame(RenderStepped);
            }
        }
        requestAnimationFrame(RenderStepped);
    }
}

function doned(event) {
    if (event.animationName === "rotar") {
        const img = event.target;
        img.classList.remove("clickR", "r");
    } else if (event.animationName === "rotal") {
        const img = event.target;
        img.classList.remove("clickR", "l");
    }
}
