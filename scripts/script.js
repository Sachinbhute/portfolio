const roles = ["Sachin", "Full-Stack Developer", "AI Learner", "ML Enthusiast", "Django Developer"]
let current = ""
let i = 0
let j = 0
isDeleting = false
function type() {
    current = roles[i];

    if (!isDeleting) {
        document.getElementById("name").textContent = current.slice(0, ++j);
    } else {
        document.getElementById("name").textContent = current.slice(0, --j);
    }

    if (j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
    }
    setTimeout(type, isDeleting ? 50 : 120);
}
window.onload = type;