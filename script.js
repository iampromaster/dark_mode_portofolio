const container = document.querySelector(".container");

const cloneContainer = container.cloneNode(true);
cloneContainer.id = "dark-container"
document.body.appendChild(cloneContainer)
cloneContainer.classList.remove("active")


const toggleIcons = document.querySelectorAll(".toggle-icon")
const icons = document.querySelectorAll(".toggle-icon i")
const dackContainer = document.querySelector("#dark-container")
const darkContaierImg = document.querySelector("#dark-container .home-img img")

darkContaierImg.src = "./imgDark.png"

toggleIcons.forEach(toggle => {
  toggle.addEventListener('click', () => {

    toggle.classList.add("disabled")
    setTimeout(() => {
      toggle.classList.remove("disabled")
    }, 1500);

    icons.forEach(icon => {
      icon.classList.toggle("bx-sun")
    })

    container.classList.toggle("active")
    dackContainer.classList.toggle("active")
  })
})
