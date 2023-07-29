function rotateImage() {
    const img = document.querySelector("img");
    img.src = "https://i.ibb.co/5cPcvJX/catte.png";
    //img.style.transform += "rotate(45deg)";
    img.classList.add("clickR");
    setTimeout(() => {
        img.classList.remove("clickR");
    }, 2000);
    console.log("should have done something")
}