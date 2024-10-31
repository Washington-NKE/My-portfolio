let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent= letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0]: words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i *80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i*80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

console.log(document.getElementById('toggle-button').addEventListener('click', function(){
    var moreText = document.getElementById('more-text');
    var button = this;

    if(moreText.style.display === 'none'){
        moreText.style.display = 'inline';
        button.textContent = 'Read Less!';
    } else{
        moreText.style.display = 'none';
        button.textContent = 'Read More!';
    }
}));

console.log(moreText);
//circle skill ////////////////////////////////////////

const circle = document.querySelectorAll(".circle");
circle.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;


    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++){
        pointsMarked[i].classList.add('marked');
    }
})

//mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');




//active menu ////////////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len&&window.scrollY + 97 < section[len].offsetTop){
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
    }
    
}

/*
function activeMenu() {
    let len = sections.length;
    let currentSection = null;
    console.log("Total sections:", len);

    while (--len >= 0) {
        console.log("Checking section:", len, "offsetTop:", sections[len].offsetTop);
        if (window.scrollY + 97 >= sections[len].offsetTop) {
            currentSection = len;
            break;
        }
    }

    if (currentSection !== null) {
        menuLi.forEach((sec, index) => {
            sec.classList.remove('active');
            if (index === currentSection) {
                sec.classList.add('active');
            }
        });
    } else {
        console.log("No active section found");
    }
}
*/
activeMenu();
window.addEventListener('scroll',activeMenu);


//sticky navbar ////////////////////////////////////////
const header = document.querySelector('header');
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',window.scrollY > 50)
});

//toggle icon navbar ////////////////////////////////////////
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = ()=>{
    menuIcon.classList.remove('bx-x');
    navlist.classList.remove('open');
}

//parallax ////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-items');
        }else{
            entry.target.classList.remove('show-item');
        }
    });
});


const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollScale.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll('.scroll-top');
scrollScale.forEach((el)=>observer.observe(el));
