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
    
    fetch('https://picsum.photos/1920/1280?random=' + imageCounter.toString())
    .then(res => {
        console.log(imageCounter);
        loader.style.display = 'none';
        try{
            slide.firstElementChild.children[slide.firstElementChild.childElementCount - 1].className = 'carousel-item';
        } catch(e){
            console.log(e);
        }
    
        output = `
        <div class="carousel-item active">
        <img src="https://picsum.photos/1920/1280?random=${imageCounter.toString()}" width="100%">
        </div>
        `;
        slide.firstElementChild.innerHTML += output;
        
        slide.firstElementChild.children[slide.firstElementChild.childElementCount - 2].className = 'carousel-item';
        
    })
}