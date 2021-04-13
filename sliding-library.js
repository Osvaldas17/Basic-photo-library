const hiddenImgCon = document.querySelector('#hidden-img-con');
const allLibPhotosCon = document.querySelector('#all-library-photos');
const photos = document.querySelectorAll('#all-library-photos div img');
const mainImg = document.querySelector('#main-img');

function source(x) {
    const source = photos[x].src
    return source
}

photos.forEach(function (element) {
    element.addEventListener('click',() => {
        document.querySelector('#main-img').src = element.src;
        hiddenImgCon.classList.remove('d-none');
        allLibPhotosCon.classList.add('fade');
        window.scrollTo(0,0)
    });
});

function changePhoto(arrow, className,myIndex) {
    arrow.classList.add(className);
    mainImg.classList.add("fade");
    setTimeout(function () {
        mainImg.src = source(myIndex);
        arrow.classList.remove(className);
        mainImg.classList.remove("fade");
    }, 300);
}

photos.forEach(function (element, index) {
    element.addEventListener('click',() => {
        let myIndex = index
        document.querySelector('#arrow-right').addEventListener('click',() => {
            const arrowR = document.querySelector('#arrow-right');
            myIndex = (myIndex + 1) % (photos.length);
            changePhoto(arrowR,'arrow-js-l',myIndex)
        });
        document.querySelector('#arrow-left').addEventListener('click',() => {
            if (myIndex > 0) {
                const arrowL = document.querySelector('#arrow-left');
                myIndex = (myIndex - 1) % (photos.length);
                changePhoto(arrowL,'arrow-js-r',myIndex)
            } else {
                myIndex = photos.length
            }
        });
    });
});

document.querySelector('#close-window').addEventListener('click',(event) => {
    hiddenImgCon.classList.add('d-none');
    allLibPhotosCon.classList.remove('fade');
});


