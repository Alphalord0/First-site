var header = document.getElementById('menu');
var btns = document.getElementsByClassName('tab');
for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    })
}


















"user strict"
const comment=[];

const userId = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null,
}


 
    const userdata = JSON.parse(localStorage.getItem('comments'));
 
    const users = userdata;
    users.map((item)=>comment.push(item));


const userComment =  document.querySelector('.usercomment');
const publishBtn = document.querySelector('#publish');
const comments = document.querySelector('.comments');
const userName = document.querySelector('.user');


userComment.addEventListener("input", e => {
    if(!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    }else{
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
})


function addPost() {
    console.log("It works!")
    if(!userComment.value) return;
    userId.name = userName.value;
    if(userId.name === "Anonymous") {
        userId.identity = false;
        userId.image = "./img/img (105).jpg";
    }else{
        userId.identity = true;
        userId.image = "./img/img (116).jpg"
    }

    userId.message = userComment.value;
    userId.date = new Date().toLocaleString();

    comment.push(userId);
    
        userComment.value = "";


        let commentsNum = document.querySelectorAll('.parents').length;
        document.getElementById('comment').textContent = commentsNum
        localStorage.setItem('comments', JSON.stringify(comment));
        location.reload();

}


let published =   comment.map((userId)=>(  `
    <div class="parents">
        <img src="${userId.image}">
        <div class="space">
            <h1>${userId.name}</h1>
            <p>${userId.message}</p>
            <div class="engagements"><i name="svg" class="fa fa-thumbs-up"></i><i id="svg" class="fa fa-share-nodes"></i></div>
            <span class="date">${userId.date}</span>
        </div>
    </div>`
    )).join("")
  
  
comments.innerHTML += published;



publishBtn.addEventListener("click", addPost)










