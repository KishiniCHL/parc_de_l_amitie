let arrow_top = document.getElementsByClassName("arrow_top")[0]
let arrow_bot = document.getElementsByClassName('arrow_bottom')[0]
let up_button = document.getElementById("up_button")
let navbar = document.getElementById("navbar")
let first_section = document.getElementById("first_content")
let second_section = document.getElementById("second_content")
let third_section = document.getElementById("third_content")
let fourth_section = document.getElementById("gallery")

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

var rootElement = document.documentElement

function go_top() {
    rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
    });
}

up_button.addEventListener("click", go_top)


//position des sections///

const position = document.querySelector('section')
const getOffset = (el) => {
const rect = el.getBoundingClientRect();
return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
};
}
console.log(getOffset(first_section));
console.log(getOffset(second_section));
console.log(getOffset(third_section));
console.log(getOffset(fourth_section));


//scrollto///

let arrow_scroll_bot = document.getElementsByClassName("scroll_down_nav")[0]


function top_scroll(){
    if (arrow_scroll_bot == true && left == 0 && top == 0 ){
        window.scrollTo(0,729.6000366210938)
    }
    else{

    }
};
arrow_scroll_bot.addEventListener("click",top_scroll);
