
//want to create a trace of the links clicked by the user across the page, can do graph math with this, or check if they went through a specific subsequence

//https://stackoverflow.com/questions/4727847/how-can-i-log-a-hyperlink-click

//$(thisIsAVariable) like a register!!

/*
$("a:href").each(function(){
    this.attr("href", "/log?url=" + encodeURIComponent(this.attr("hred")));
});

function log(request) {
    let target_url = request.GET["url"];
    log_link(target_url);
    return HttpRedirect(target_url);
}
    */

window.onload = function() {
    const urlObj = new URL(window.location.href);
    if (urlObj.pathname = "index.html") {
        let stage = 0;
        console.log("page load, stage:" + stage);
    }
}

document.addEventListener('keydown', (event) => {
    console.log(event);
    console.log("keydown, stage:" + stage);
})

document.addEventListener('keydown', (event) => {
    const urlObj = new URL(window.location.href);

    //raw first char of url
    let first = urlObj.pathname.charAt[0];

    //if stage is not a number it stays 0;
    if (typeof first == 'number') {
        stage = parseInt(first);
    }

    //using one js script for all of these pages, looping through
    if ((event.keyCode == 20)) {
        console.log("capslock, stage: " + stage);
        stage += 1;
        //concat to create name
        //realizing this will only work up to 9 pages as is lol
        let newPage = "" + stage + "page.html";

        //https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage
        window.location.pathname = newPage 
        window.location.
    }
})

//key stuff: most line up with the conventional character printed
//CapsLock only activates when pressed, not when it goes from pressed to unpressed (needs two pressed to trigger an event)
// Backslash is key:\\ weirdly!