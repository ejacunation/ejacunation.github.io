
// use this function to change the default behaviour of a <a> div
// in case it refers to a div from the page
function redefineEvent (atag) {
    // find the target of this <a> tag
    // (remove the # at the beginning)
    let target = document.getElementById(atag.getAttribute('href').substr(1));

    // scrolling behavior for the <a> tag
    let behavior = {
        behavior : 'smooth',
        block    : 'start' ,
        inline   : 'nearest'
    };

    atag.addEventListener('click', function (evt) {
        evt.preventDefault();
        target.scrollIntoView(behavior);
    });
}
