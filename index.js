let blob = document.querySelector(".blob")
let hack = document.querySelector("h1")
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let interval = null

hack.addEventListener("mouseover", (e) => {
    clearInterval(interval)
    let iteration = 0

    interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split("").map((letter, idx) => {
            if (iteration > idx) {
                return e.target.dataset.name[idx]
            }
            return letters[Math.floor(Math.random() * 26)]

        }).join("")
        if (iteration >= e.target.dataset.name.length) {
            clearInterval(interval);
        }
        iteration += 1 / 6
    }, 30);

})



window.addEventListener("pointermove", (e) => {
    const { clientX, clientY } = e;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
})



