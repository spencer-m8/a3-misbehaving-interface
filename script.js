let randomPage;
let oldNum;
let offset = 0;

const pageInput = document.getElementById("page_input");
const pageInputForm = document.getElementById("number_input");
const pageDown = document.getElementById("page_down_button");
const pageUp = document.getElementById("page_up_button");
const imgContainer = document.getElementById("img_container")
const pageContainer = document.getElementById("page_container");

function load() {
    pageDown.disabled = true;
    document.body.style.paddingBottom = '1000000px';
}

pageInput.addEventListener('keydown', function (event) {
    console.log(event.key)
    newNum = this.value;
    offset += this.value;

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
    window.scrollBy({ top: 10, behavior: 'smooth' });
});
