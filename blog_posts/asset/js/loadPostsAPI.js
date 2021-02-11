// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const loader = document.getElementById('loader');
const filter = document.getElementById('filter');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    load_fromPlaceHolder();
    //loadDataNew();
});


//load post from fake api function 
function load_fromPlaceHolder() {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => { return res.json(); })
    .then((posts) => {
        let output = '';
        loader.style.display = 'none';
        filter.removeAttribute('disabled');
        posts.forEach(function(post) {
            output += `
                <div class="item">
                    <div class="image"> <img src="https://picsum.photos/300/200"> </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle"> ${post.title} </a>
                        <div class="meta">
                            <span id="bDate">${new Date(new Date().getTime()).toLocaleString('en-US')} </span>
                            <span>By: <a href="#" id="bAuthor"> ${post.userId}</a></span>
                        </div>
                        <div class="description"> <p id="bDesc"> ${post.body} </p> </div>
                        <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                    </div>
                </div>
                `;
                //same as previous code
                output += ` `; // same code as previous with few update
        });
        console.log(output);
        postDiv3.innerHTML += output;
    })
    .catch((err) => { console.log(err); })

}

filter.addEventListener('keyup', filterTasks);
function filterTasks(e){
    for(let i = 0; i < postDiv3.childElementCount; i++){
        if (postDiv3.children[i].lastElementChild.firstElementChild.textContent.indexOf(filter.value) != -1){
            postDiv3.children[i].style.display = 'flex';
        }
        else{
            postDiv3.children[i].style.display = 'none';
        }
    }
}


//async await
function load_fromPlaceHolder_new() {



}

function loadDataNew() {


}