// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const loader = document.getElementById('loader');

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
        posts.forEach(function(post) {
            output += `
                <div class="ui divided items" id="myPost">
                <div class="item">
                <div class="image"> <img src="https://picsum.photos/300/200"> </div>
                <div class="content">
                <a class="header" href="#" id="bTitle"> ${post.title} </a>
                <div class="meta">
                <span id="bDate">${post.date} </span>
                <span>By: <a href="#" id="bAuthor"> ${post.userId}</a></span>
                </div>
                <div class="description"> <p id="bDesc"> ${post.body} </p </div>
                <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                </div>
                </div>
                </div> `;
                //same as previous code
                output += ` `; // same code as previous with few update
        });
        postDiv3.innerHTML += output;
    })
    .catch((err) => { console.log(err); })

}
//async await
function load_fromPlaceHolder_new() {



}

function loadDataNew() {


}