var header = document.getElementById('menu');
var btns = document.getElementsByClassName('cho');
for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('open');
        current[0].className = current[0].className.replace(' open', '');
        this.className += ' open';
    })
}

function opentab(evt, tab) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("cards");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "flex";
    evt.currentTarget.className += " active";
}



const cardCont = document.querySelector('.cards');

const cards = [
    {
        id: 6,
        img: "<img src='./img/rice and meat.jpg' alt='Rice and meat'>",
        title: "Rice and Meat " +"$120",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 7,
        img: "<img src='./img/noodles and egg.jpg' alt='Noodles with Egg'>",
        title: "Noodles with Egg " + "$115",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 8,
        img: "<img src='./img/Fired spaghetti with suace.jpg' alt='Fired Spaghetti'>",
        title: "Fired Spaghetti " +"$110",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",
    },
    {
        id: 9,
        img: "<img src='./img/img (123).jpg' alt='Beef Steak'>",
        title: "Beef Steak " +"$80",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 10,
        img: "<img src='./img/rice chicken.jpg' alt='Rice and Chicken'>",
        title: "Rice and Chicken " +"$125",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 11,
        img: "<img src='./img/Spaghettiny noodles.jpg' alt='Macaroni with cheese'>",
        title: "Macaroni with cheese " +"$100",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 12,
        img: "<img src='./img/spaghetti with meat balls.jpg' alt='Spaghetti with Meat balls'>",
        title: "Spaghetti with Meat balls " +"$130",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },{
        id: 13,
        img: "<img src='./img/meat in sause.jpg' alt='Meat and Sauce'>",
        title: "Meat and Sauce " +"$90",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 14,
        img: "<img src='./img/rice and shrimps.jpg' alt='Rice and Shrimps'>",
        title: "Rice and Shrimps " +"$120",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 15,
        img: "<img src='./img/bf3cdd4d83679fed4658573c769ab698.jpg' alt='Shrimps, noodles and cream'>",
        title: "Shrimps, Noodles and Cream " +"$128",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 16,
        img: "<img src='./img/noodles and egg.jpg' alt='Noodles with Egg'>",
        title: "Noodles with Egg " + "$115",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 17,
        img: "<img src='./img/rice and meat.jpg' alt='Rice and meat'>",
        title: "Rice and Meat " +"$120",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 18,
        img: "<img src='./img/Fired spaghetti with suace.jpg' alt='Fired Spaghetti'>",
        title: "Fired Spaghetti " +"$110",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",
    },
    {
        id: 19,
        img: "<img src='./img/rice chicken.jpg' alt='Rice and Chicken'>",
        title: "Rice and Chicken " +"$125",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    {
        id: 20,
        img: "<img src='./img/img (123).jpg' alt='Beef Steak'>",
        title: "Beef Steak " +"$80",
        description: "Enjoy our special humburgers and have a great time with friends and loved ones.",
        button1: "Buy",

    },
    
    
    
]


const data = cards.map((card) => {
    return `
        <div class="card">
            <div class="card-img">
                ${card.img}
            </div>
            <div class="card-head">
                <h2>${card.title}</h2>
            </div>
            <div class="card-body">
                <p>${card.description}</p>
            </div>
            <div class="card-foot">
                <button>${card.button1}</button>
            </div>
        </div>
    `
}).join("")

cardCont.innerHTML = data;
