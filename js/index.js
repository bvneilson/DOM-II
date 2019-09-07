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
