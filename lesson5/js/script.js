document.getElementById("copyrightyear").textContent = new Date().getFullYear();


const currentyear = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

document.getElementById("currentyear").textContent = new Date().toLocaleDateString('en-US', currentyear);


const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// const banner = document.querySelector('.cooking');
// const dayOfWeek = 
// const banner = document.querySelector('.pancakes');
// banner.addEventListener('load',('pancakes') => {if (dayOfWeek == 4)});


