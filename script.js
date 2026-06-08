let randomPage;
let oldNum

const pageInput = document.getElementById("page_input");
const pageInputForm = document.getElementById("number_input");

pageInput.addEventListener('keydown', function (event) {
    console.log(event.key)
    newNum = this.value;
    if ((event.key === 'Enter') && (newNum != oldNum)) {
        randomPage = Math.floor(Math.random() * (500 - 23 + 1)) + 23;
        this.value = "" + randomPage;
        oldNum = this.value;
    }
});

pageInputForm.addEventListener('submit', function(event) {
    event.preventDefault();
});
