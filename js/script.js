let arrow_top = document.getElementsByClassName("arrow_top")[0]
let arrow_bot = document.getElementsByClassName('arrow_bottom')[0]
let up_button = document.getElementById("up_button")
let navbar = document.getElementById("navbar")
let first_section = document.getElementById("first_content")
let second_section = document.getElementById("second_content")
let third_section = document.getElementById("third_content")
let fourth_section = document.getElementById("gallery")

let section = document.getElementsByClassName("content")[0]

function scroll_function(){
    if (window.scrollY == 0 ){
        arrow_top.style.visibility = "hidden";
    }  
    else{
        arrow_top.style.visibility = "";

    } 

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        arrow_bot.style.visibility = "hidden";
    }
    else{
        arrow_bot.style.visibility = "";
    };
}

function hide_nav(){
    
    if(((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && document.body.clientWidth <= 1024){
        navbar.style.visibility = "hidden";
        up_button.style.visibility = "visible";
    }
    else{
        navbar.style.visibility = "visible";
        up_button.style.visibility = "hidden";
    };
}



window.onscroll = function () {
    scroll_function()
    hide_nav()
}

window.onresize = function () {
    hide_nav()
    scroll_function()
}

const array = ['first_section','second_section', 'third_section', 'fourth_section' ]

array.forEach((zone) => {
    
});

var rootElement = document.documentElement

function go_top() {
    rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
    });
}

up_button.addEventListener("click", go_top)


const position = document.querySelector('section')
const getOffset = (el) => {
const rect = el.getBoundingClientRect();
return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
};
}
console.log(getOffset(section));
