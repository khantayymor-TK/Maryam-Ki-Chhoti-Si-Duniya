/* ===============================
   MARYAM FRIENDSHIP WEBSITE
   PART 1C - SCRIPT JS
================================ */


// ===============================
// LOADING SCREEN
// ===============================

let percent = 0;

let loading = setInterval(() => {

    percent++;

    document.getElementById("loading-percent").innerHTML =
        percent + "%";


    if(percent >= 100){

        clearInterval(loading);

        document.getElementById("loading-screen")
        .style.display = "none";

    }


},30);




// ===============================
// PASSWORD SYSTEM
// ===============================


const correctPassword = "Maryam2025";


const unlockBtn =
document.getElementById("unlockBtn");


unlockBtn.addEventListener("click",()=>{


    let password =
    document.getElementById("password").value;


    let error =
    document.getElementById("errorText");


    if(password === correctPassword){


        error.innerHTML = "";


        document.getElementById("password-page")
        .classList.add("hidden");


        document.getElementById("bismillah-page")
        .classList.remove("hidden");



        // Play Intro Music

        let music =
        document.getElementById("introMusic");


        music.play()
        .catch(()=>{});


    }

    else{


        error.innerHTML =
        "Password ghalat hai, dobara try karein 💗";


    }


});





// ===============================
// NEXT BUTTON SYSTEM
// ===============================


let nextButtons =
document.querySelectorAll(".nextBtn");


let currentPage = 0;


let pages = [

"bismillah-page",
"welcome-page",
"friendship-page",
"date-page",
"smile-page",
"allah-page",
"dua-page",
"thanks-page",
"dream-page",
"parents-page",
"respect-page",
"courage-page",
"identity-page",
"memories-page",
"promise-page",
"hope-page",
"friend-message-page",
"gallery-page",
"music-page",
"counter-page",
"final-message-page",
"final-dua-page",
"thankyou-page",
"special-page",
"kindness-page",
"happiness-page",
"last-page",
"timeline-page",
"last-page",
"letter-page",
"last-page",
"diary-page",
"last-page"
];



nextButtons.forEach(button=>{


button.addEventListener("click",()=>{


    document
    .getElementById(pages[currentPage])
    .classList.add("hidden");



    currentPage++;


    if(currentPage < pages.length){


        document
        .getElementById(pages[currentPage])
        .classList.remove("hidden");


    }


});


});




// ===============================
// PASSWORD ENTER KEY
// ===============================


document
.getElementById("password")
.addEventListener("keypress",(e)=>{


    if(e.key === "Enter"){

        unlockBtn.click();

    }


});
// ===============================
// LIVE FRIENDSHIP TIMER
// ===============================

let friendshipDate = new Date("October 25, 2025 00:00:00");


setInterval(()=>{


let now = new Date();


let difference =
now - friendshipDate;


let days =
Math.floor(
difference / (1000*60*60*24)
);


let hours =
Math.floor(
(difference / (1000*60*60)) % 24
);


let minutes =
Math.floor(
(difference / (1000*60)) % 60
);


let seconds =
Math.floor(
(difference / 1000) % 60
);



document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;


},1000);

// ===============================
// FLOATING HEARTS
// ===============================


setInterval(()=>{


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="💗";


heart.style.left =
Math.random()*100+"%";


heart.style.animationDuration =
(3 + Math.random()*5)+"s";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);



},500);
// ===============================
// TYPING EFFECT
// ===============================

let typingElements =
document.querySelectorAll(".typing-text");


typingElements.forEach((element)=>{

    let text = element.innerHTML;

    element.innerHTML = "";

    let i = 0;


    function type(){

        if(i < text.length){

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,40);

        }

    }


    type();

});
// ===============================
// PHOTO SLIDESHOW
// ===============================

let photos = [

"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg"

];


let slideIndex = 0;


setInterval(()=>{


slideIndex++;


if(slideIndex >= photos.length){

    slideIndex = 0;

}


let image =
document.getElementById("slideImage");


if(image){

    image.src = photos[slideIndex];

}


},3000);
// ===============================
// SURPRISE CONFETTI
// ===============================

function celebrate(){


    for(let i = 0; i < 80; i++){


        let confetti =
        document.createElement("div");


        confetti.innerHTML = "🎉";


        confetti.style.position = "fixed";

        confetti.style.left =
        Math.random()*100 + "%";


        confetti.style.top =
        "-20px";


        confetti.style.fontSize =
        (15 + Math.random()*25) + "px";


        confetti.style.animation =
        "fall 3s linear";


        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },3000);


    }

}
// ===============================
// MUSIC CONTROL
// ===============================

let music =
document.getElementById("mainMusic");


function playMusic(){

    if(music){

        music.play();

    }

}



function pauseMusic(){

    if(music){

        music.pause();

    }

}
// ===============================
// SECRET LETTER OPEN
// ===============================

function openLetter(){

    let letter =
    document.getElementById("letter-text");


    if(letter){

        letter.classList.remove("hidden");

    }

}

// ===============================
// FALLING PETALS
// ===============================

setInterval(()=>{


let petal = document.createElement("div");

petal.className = "petal";

petal.innerHTML = "🌸";


petal.style.left =
Math.random()*100 + "%";


petal.style.animationDuration =
(4 + Math.random()*5) + "s";


document.body.appendChild(petal);



setTimeout(()=>{

petal.remove();

},9000);


},700);
// ===============================
// THEME SWITCH
// ===============================

function changeTheme(){

    document.body.classList.toggle("night");

}