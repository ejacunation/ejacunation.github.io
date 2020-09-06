/*
Javascript code for controlling the carousel
tutorial: https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
*/

// define a scope to declare variables locally
(function(){

    // global carousel variables
    var
    clazz  = 'carousel-pic',
    items  = document.getElementsByClassName(clazz),
    slide  = 0,
    count  = items.length,
    moving = false,
    time   = 500; // 500ms = 0.5s

    // set initial classes
    items[count - 1].classList.add('prev');
    items[0].classList.add('active');
    items[1].classList.add('next');

    // set event listeners
    var
    next = document.getElementsByClassName('carousel-next')[0],
    prev = document.getElementsByClassName('carousel-prev')[0];
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);

    function moveNext () {
        if (!moving) {
            var previous = slide;
            if (slide >= count - 1) slide = 0;
            else ++slide;
            moveCarouselTo(slide, previous);
        }
    }
    function movePrev () {
        if (!moving) {
            var previous = slide;
            if (slide <= 0) slide = count - 1;
            else --slide;
            moveCarouselTo(slide, previous);
        }
    }
    function onMove () {
        moving = true;
        setTimeout(function () {moving = false;}, time);
    }
    function moveCarouselTo (slide, previous) {
        if (!moving) {
            onMove();

            var
            newPrev = (count + slide    - 1) % count,
            newNext = (count + slide    + 1) % count,
            oldPrev = (count + previous - 1) % count,
            oldNext = (count + previous + 1) % count;

            // reset classes on olds
            items[oldPrev ].className = clazz;
            items[previous].className = clazz;
            items[oldNext ].className = clazz;

            // add new classes on news
            items[newPrev].className = clazz + ' prev';
            items[slide  ].className = clazz + ' active';
            items[newNext].className = clazz + ' next';
        }
    }

})();
