
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

document.addEventListener('keydown', (event) => {
    console.log(event);
})

document.addEventListener('keydown', (event) => {
    const urlObj = new URL(window.location.href);
    console.log(urlObj.pathname);
    
    //using one js script for all of these
    if ((event.keyCode == 20)) {
        console.log("yay")
    }
})

//key stuff: most line up with the conventional character printed
//CapsLock only activates when pressed, not when it goes from pressed to unpressed (needs two pressed to trigger an event)
// Backslash is key:\\ weirdly!