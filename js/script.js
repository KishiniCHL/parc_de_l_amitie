let arrow_top = document.getElementsByClassName("arrow_top")[0]
let arrow_bot = document.getElementsByClassName('arrow_bottom')[0]
let first_section = document.getElementById("first_content")

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
    }
}


console.log(document.documentElement.scrollTop)

window.onscroll = function () {scroll_function()

}


