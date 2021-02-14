const slide = document.querySelector('#MySlide');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const loader = document.querySelector('#loader');


var imageCounter = 0;

nextBtn.addEventListener('click', loadImageFromAPI);

document.addEventListener("DOMContentLoaded", () => {
    loadImageFromAPI();
    //loadDataNew();
});

function loadImageFromAPI(){
    imageCounter += 1;

    try{
        // console.log(slide.firstElementChild.lastElementChild.className == 'carousel-item active');
        if (slide.firstElementChild.lastElementChild.className == 'carousel-item active')
            slide.firstElementChild.lastElementChild.classList.remove('active');
            
        // console.log(slide.firstElementChild.lastElementChild.className == 'carousel-item active');
    }catch(e){};
    
    output = `
    <div class="carousel-item">
    <img src="https://picsum.photos/1920/1280?random=${imageCounter.toString()}" width="100%">
    </div>
    `;
    slide.firstElementChild.innerHTML += output;
    // console.log(slide.firstElementChild.lastElementChild);
    if (imageCounter < 3)
        slide.firstElementChild.lastElementChild.classList.add('active');
}