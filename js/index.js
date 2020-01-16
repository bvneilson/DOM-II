// Your code goes here
const logo = document.querySelector('.logo-heading');
console.log(logo);
logo.addEventListener("click", (event) => {
  if (logo.style.color === 'blue') {
    logo.style.color = 'black';
  } else {
      logo.style.color = 'blue';
  }
  console.log('Logo clicked!');
});

const hero = document.querySelector('.intro img');
console.log(hero);
hero.addEventListener("mouseover", (event) => {
  hero.style.transform = 'scale(1.1)';
  hero.style.transition = ".5s";
})
hero.addEventListener("mouseleave", (event) => {
  hero.style.transform = 'scale(1)';
})

const heading = document.querySelector('h2');
heading.addEventListener("mouseenter", (event) => {
  heading.textContent = "You hovered over me!";
})


const buttons = document.querySelectorAll('.destination .btn');
buttons.forEach((button) => {
  button.addEventListener("mousedown", (event) => {
    alert('Have fun on your trip!');
  })
})

const body = document.querySelector('body');
body.addEventListener("keydown", (event) => {
  alert('Nice typing!');
}, {once: true})
body.addEventListener("auxclick", (event) => {
  alert('Nice scroll wheel click!');
})

const image = document.querySelector('.img-content img');
image.addEventListener("contextmenu", (event) => {
  image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzohiHRyqDn1vYVl7Q8C4DTrqlnuCNthS5N9ZsvCKQt-zyNVT-";
})

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("copy", (event) => {
    alert('Text has been copied!');
  })
})

const introImg = document.querySelector('.intro img');
introImg.addEventListener("dblclick", (event) => {
  introImg.src = "https://www.kidgooroo.com/files/2017/12/CARTOON-BUS.png";
})

const destination = document.querySelector('.content-destination p');
destination.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("PROPAGATION");
})

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  })
})
