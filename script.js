let randomPage;
let oldNum;
let offset = 0;
let count = 0;
let annoyingCount = 0;
let scrollBad = false;
let annoying = false;

const pageInput = document.getElementById("page_input");
const pageInputForm = document.getElementById("number_input");
const pageDown = document.getElementById("page_down_button");
const pageUp = document.getElementById("page_up_button");
const imgContainer = document.getElementById("img_container")
const pageContainer = document.getElementById("page_container");

function load() {
    pageDown.disabled = true;
}

pageInput.addEventListener('keydown', function (event) {
    console.log(event.key)
    newNum = this.value;
    offset = this.value;

    if ((event.key === 'Enter') && (newNum != oldNum)) {
        moveTextbook(offset);
        randomPage = Math.floor(Math.random() * (500 - 23 + 1)) + 23;
        this.value = "" + randomPage;
        oldNum = this.value;
    }
});

function moveTextbook(offset) {
    imgContainer.style.transform = ` translateX(${offset}px) `;
}

pageInputForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

pageUp.addEventListener('click', () => {
    console.log("page upped");
    count++;
    window.scrollBy({ top: 10, behavior: 'smooth' });
    if (count > 4) {
        pageDown.disabled = false;   
    }
});



var canvas;

pageDown.addEventListener('click', async () => {
    scrollBad = true;
    canvas = await html2canvas(pageContainer);
    canvas.style.transform = `rotate(180deg)`;
    pageContainer.innerHTML= '';
    pageContainer.appendChild(canvas);
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
});

window.addEventListener('scroll', () => {
    if (scrollBad) {
        if (window.scrollY < 10000) {
            document.body.style.zoom = window.scrollY * 10;
        }

        if (window.pageYOffset >= 10000000) {
            document.body.style.zoom = 1;
            pageContainer.innerHTML= '';
            pageContainer.appendChild(canvas);
            scrollBad = false;
            annoying = true;
            popup();
        }
    } 

    if (annoying && (annoyingCount < 5)) {
        popup();
        annoyingCount++;
    } else if (annoying) {
        popupHome();
    }
});

function popup() {
    window.prompt("Go to page: ", "#"); 
    annoyingCount++;
}

function popup() {
    window.prompt("Go to page: ", "#"); 
    window.location.href = "error on my part - VISA-2P61-D03-S01-LL.html";
}