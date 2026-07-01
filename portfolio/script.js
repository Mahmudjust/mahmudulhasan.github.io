/* ===========================================
   PORTFOLIO SCRIPT
   Part 3
=========================================== */

// -----------------------------
// Mobile Navigation
// -----------------------------

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// -----------------------------
// Theme Toggle
// -----------------------------

const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light");

    if(themeBtn){
        themeBtn.textContent="☀️";
    }

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.textContent="☀️";

        localStorage.setItem("theme","light");

    }else{

        themeBtn.textContent="🌙";

        localStorage.setItem("theme","dark");

    }

});

}

// -----------------------------
// Typing Effect
// -----------------------------

const typing = document.querySelector(".typing");

const words = [

    "Full Stack Developer",

    "UI Designer",

    "JavaScript Developer",

    "Problem Solver",

    "Creative Thinker"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

// -----------------------------
// Scroll Reveal
// -----------------------------

const reveals = document.querySelectorAll(

".section,.project-card,.skill-card,.timeline-item"

);

function revealOnScroll(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            item.classList.add("active");

        }

    });

}

window.addEventListener(

"scroll",

revealOnScroll

);

revealOnScroll();

// -----------------------------
// Cursor
// -----------------------------

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    if(cursor){

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    }

});

// -----------------------------
// Navbar Shadow
// -----------------------------

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.boxShadow="none";

    }

});

// -----------------------------
// Smooth Button Hover
// -----------------------------

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

    btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

    btn.style.transform="translateY(0px)";

});

});

// -----------------------------
// Progress Animation
// -----------------------------

const progressBars = document.querySelectorAll(

".progress-fill"

);

let animated = false;

function animateProgress(){

    const trigger =

document.querySelector("#skills");

    if(!trigger) return;

    const top =

trigger.getBoundingClientRect().top;

    if(top < window.innerHeight-120 && !animated){

        progressBars.forEach(bar=>{

            const width = bar.style.width;

            bar.style.width="0";

            setTimeout(()=>{

                bar.style.width=width;

            },150);

        });

        animated=true;

    }

}

window.addEventListener(

"scroll",

animateProgress

);

animateProgress();

// -----------------------------
// Active Navigation
// -----------------------------

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-140;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("current");

if(link.getAttribute("href")==="#"+current){

link.classList.add("current");

}

});

});

// -----------------------------
// Current Link Style
// -----------------------------

const style = document.createElement("style");

style.innerHTML=`

.current{

color:var(--primary)!important;

}

.current::after{

width:100%!important;

}

`;

document.head.appendChild(style);

// -----------------------------
// Contact Form Demo
// -----------------------------

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(

"Thanks for your message! 🚀\n\nThis demo form is ready to connect to EmailJS, Formspree, Netlify Forms, or your own backend."

);

form.reset();

});

}

// -----------------------------
// Welcome
// -----------------------------

console.log(

"%cPortfolio Ready 🚀",

"color:#5b8cff;font-size:18px;font-weight:bold;"

);

console.log(

"Built with HTML, CSS & JavaScript"

);

/* ==========================================
   PART 5A
========================================== */

// Loader

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},800);

});

// Scroll Progress

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});

// Back to top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Counter Animation

const counters=document.querySelectorAll(".counter");

let counterStarted=false;

function runCounters(){

const section=document.getElementById("stats");

if(!section||counterStarted)return;

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

counterStarted=true;

counters.forEach(counter=>{

const target=+counter.dataset.target;

let value=0;

const speed=target/80;

const update=()=>{

value+=speed;

if(value<target){

counter.innerText=Math.floor(value);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

}

}

window.addEventListener("scroll",runCounters);

runCounters();
