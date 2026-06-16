const container = document.getElementById("bubbles-container");

function createBubble() {
    const div = document.createElement("div");
    div.classList.add("bubble");
    div.style.left = `${Math.random() * 100}%`;
    const size = Math.random() * 15 + 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.animationName = "moveUp";
    div.style.animationDuration = `${Math.random() * 3 + 2}s`;
    container.appendChild(div);

    div.addEventListener("animationend", () => {
        div.remove();
    });
}

window.addEventListener("DOMContentLoaded", () => {
    setInterval(createBubble, 300);
});

    