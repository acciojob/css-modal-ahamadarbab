//your JS code here. If required.
const modal = document.getElementById("modal")
const openBtn = document.getElementById("openModal")
const closeBtn = document.querySelector(".close-modal")

openBtn.onclick = () => {
	modal.classList.add("show");
}

closeBtn.onclick = () => {
	modal.classList.remove("show");
}

window.onclick = (e) => {
	if(e.target === modal) {
		modal.classList.remove("show");
	}
}