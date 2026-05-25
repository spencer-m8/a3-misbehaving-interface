const searchBtn = document.getElementById("searchButton");

searchBtn.addEventListener('click', async () => {
            const canvas = await html2canvas(searchBtn);
            searchBtn.appendChild(canvas);
});