const searchBtn = document.getElementById("searchButton");
const searchBox = document.getElementById("masthead-search-term");

let timesResized = 0;

searchBox.addEventListener('input', async () => {
    //want to resize the screenshot thing by the length of this
    const crop = 10+ searchBox.value.length * 4;
    const croppedCanvas = document.createElement('canvas');
    croppedCanvas.width = crop;
    croppedCanvas.height = crop;
    const ctx = croppedCanvas.getContext('2d');
    const canvas = await html2canvas(searchBtn);
    ctx.drawImage(canvas, crop, crop, crop, crop, 0, 0, crop, crop);
    searchBtn.replaceChildren(canvas);
    timesResized++;
});

searchBtn.addEventListener('click', async () => {
        const canvas = await html2canvas(searchBtn);
        searchBtn.appendChild(canvas);
        timesResized++;
            console.log(timesResized);

            if (timesResized > 10) {
                alert("Search complete.")
                window.open("./enter.html")
                searchBtn.innerHTML('');
        }
});

