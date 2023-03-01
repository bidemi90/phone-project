
let time = 1
function defaulthome() {
    document.getElementById("main").innerHTML = `
<nav class="nav" id="nav">                                                     
                                                </nav>
                                                <section id="section1" class="section1">
                                                    <div id="clock" class="big-clock">

                                                    </div>
                                                    <div class="footermenu">
                                                        <button onclick="phoneinmain()" class="phone">
                                                        </button>
                                                        <button class="home" onclick="home()">
                                                            <span class="material-symbols-outlined">
                                                                home
                                                            </span>
                                                        </button>
                                                        <button class="camera" onclick="camera()">

                                                        </button>

                                                    </div>
                                                </section>
                                                <footer class="foot" id="foot">
                                                    <button onclick="back1()">
                                                        <span class="material-symbols-outlined">play_arrow</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">check_box_outline_blank</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                                    </button>
                                                </footer>
                                                `
    time = setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let month = date.getMonth();
        let day = date.getDay();
        let ddate = date.getDate();

        let amOrPm = hours < 12 ? "AM" : "PM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? "0" + hours : hours; // add leading zero if hours is less than 10
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        document.getElementById("clock").innerHTML = `<span class="bigdate">${hours}</span><br><span class="bigdate">${minutes}</span> <br>
    <span>${monthsOfYear[month]}</span>  <span>${ddate}</span><br><span>${daysOfWeek[day]}</span>`;


    }, 1000);

}
defaulthome()

function nav() {
    setInterval(() => {
        let it = new Date()
        document.getElementById("nav").innerHTML = `<div>
                                                 MTN - AIRTEL
                                                </div>
                                                <div> 
                                                <span class="material-symbols-outlined">
                                                    wifi
                                                </span>&nbsp&nbsp
                                                <span class="material-symbols-outlined">
                                                    signal_cellular_alt
                                                </span>&nbsp&nbsp
                                                <span class="material-symbols-outlined">
                                                    alarm
                                                </span>&nbsp&nbsp
                                                <span class="material-symbols-outlined">
                                                    bluetooth
                                                </span>
                                                <span class="material-symbols-outlined">
                                                    battery_5_bar
                                                </span>&nbsp&nbsp
                                                <span>${it.getHours()}:${it.getMinutes()}:${it.getSeconds()}</span></div>`
    }, 1000);
}
nav()


function back1() {
    defaulthome()
}


let apps = [
    {
        name: "calculator",
        icon: `images/icons8-calculator-100.png`
    },
    {
        name: "Calendar",
        icon: `images/icons8-google-calendar-240.png`
    },
    {
        name: "phone",
        icon: `images/icons8-phone-contact-96.png`
    },
    {
        name: "camera",
        icon: `images/icons8-prequel-app-240.png`
    },
    {
        name: "message",
        icon: `images/icons8-wechat-240.png`
    },
    {
        name: "video",
        icon: `images/icons8-pot-player-512.png`
    },
    {
        name: "contact",
        icon: `images/icons8-search-contacts-96.png`
    },
    {
        name: "card_gen",
        icon: `images/icons8-mobile-app-developer-64.png`
    },
    {
        name: "photo",
        icon: `images/icons8-google-photos-240.png`
    },
    {
        name: "tiktok",
        icon: `images/icons8-tiktok-240.png`
    },
    {
        name: "instagram",
        icon: `images/icons8-instagram-240.png`
    },
    {
        name: "play_music",
        icon: `images/icons8-music-240.png`
    },
]


function home() {
    clearInterval(time)
    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML = `<div class="section2" id="section2"></div>`
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        document.getElementById("section2").innerHTML += ` <div>
            <button onclick="${element.name}()" id="">
                <img src="${element.icon}" alt="">
            </button>
            <span id="" class="">${element.name}</span>
        </div>`
    }
    document.getElementById("foot").innerHTML = `
    
    <button onclick="back1()">
        <span class="material-symbols-outlined">play_arrow</span>
    </button>
    <button>
        <span class="material-symbols-outlined">check_box_outline_blank</span>
    </button>
    <button>
        <span class="material-symbols-outlined">radio_button_unchecked</span>
    </button>

`
}








function backtohome() {
    home()
}

// phone app
function phone() {
    document.getElementById("section1").innerHTML = `
    <section class="phoneapp">
    <div class="displayforphoneapp" id="displayforphoneapp">
        <div class="searchinphonediv">
            <input type="text" class="searchinphone" id="searchinphone" placeholder="search">
        </div>
        <div class="divforconandhisbut" id="divforconandhisbut">
            <button onclick="showhis()">
                <span class="material-symbols-outlined">
                    history
                </span>
            </button>
            <button onclick="showcon()">
                <span class="material-symbols-outlined">
                    person
                </span>
            </button>
        </div>
        <div class="displayhisandcontast" id="displayhisandcontast">


        </div>

        <div class="showtypinginphone" id="showtypinginphone">
            <input type="text" class="showtypinginphoneinput" id="showtypinginphoneinput">
            <button class="showtypinginphonebutton" id="showtypinginphonebutton"
                onclick="showtypinginphonebutton()">
                <span class="material-symbols-outlined">
                    backspace
                </span>
            </button>
        </div>
        <div class="keypaddisplay" id="keypaddisplay">
            <button class="key" id="key" onclick="keybut(1)">1</button>
            <button class="key" id="key" onclick="keybut(2)">2</button>
            <button class="key" id="key" onclick="keybut(3)">3</button>
            <button class="key" id="key" onclick="keybut(4)">4</button>
            <button class="key" id="key" onclick="keybut(5)">5</button>
            <button class="key" id="key" onclick="keybut(6)">6</button>
            <button class="key" id="key" onclick="keybut(7)">7</button>
            <button class="key" id="key" onclick="keybut(8)">8</button>
            <button class="key" id="key" onclick="keybut(9)">9</button>
            <button class="key" id="key" onclick="keybut(s)">*</button>
            <button class="key" id="key" onclick="keybut(0)">0</button>
            <button class="key" id="key" onclick="keybut(a)">#</button>
        </div>
        <div class="dial" id="dial">
            <button class="dialkey" id="dialkey" onclick="dialkey()">
                <span class="material-symbols-outlined">
                    call
                </span>
            </button>
        </div>
        <div class="dialo" id="dialo">
            <button class="dialkeyo" id="dialkeyo" onclick="dialkeyo()">
                <span class="material-symbols-outlined">
                    keyboard_alt
                </span>
            </button>
        </div>
    </div>
</section>
    `
    document.getElementById("foot").innerHTML = `
    
    <button onclick="backtohome()">
        <span class="material-symbols-outlined">play_arrow</span>
    </button>
    <button>
        <span class="material-symbols-outlined">check_box_outline_blank</span>
    </button>
    <button>
        <span class="material-symbols-outlined">radio_button_unchecked</span>
    </button>

`

    document.getElementById("displayhisandcontast").innerHTML = ""
    for (let index = 0; index < historyarray.length; index++) {
        const element = historyarray[index];

        document.getElementById("displayhisandcontast").innerHTML +=
            `
        <div class="onecontactorhistory" onclick="onehistory(${index})">
        <img src="${element.Image}" alt="">
        <div>
            <p>${element.name}</p>
            <p>${element.phonenumber}</p>
        </div>
    </div>
        `

    }

}



let s = "*"
let a = "#"
function keybut(val) {
    document.getElementById("showtypinginphoneinput").value += val
}


function showtypinginphonebutton() {
    document.getElementById("showtypinginphoneinput").value = document.getElementById("showtypinginphoneinput").value.slice(0, -1);
}

let contactarray = [
    {
        Image: `images/facebook.png`,
        name: "Mr dan",
        phonenumber: "08012345678"
    },
    {
        Image: `images/facebook.png`,
        name: "Usman SQI",
        phonenumber: "08012345678"
    },
    {
        Image: `images/facebook.png`,
        name: "ABS",
        phonenumber: "08012345678"
    },

]
let historyarray = [
    {
        Image: `images/facebook.png`,
        name: "Mr dan",
        phonenumber: "08012345678"
    },
    {
        Image: `images/facebook.png`,
        name: "Usman SQI",
        phonenumber: "08012345678"
    },

]


function dialkey() {
    let numb = document.getElementById("showtypinginphoneinput").value
    console.log(numb);
    if (numb.length == 11) {
        if (numb.includes("#") || numb.includes("*")) {
            console.log("no");
        }

        if (numb.includes("#") || numb.includes("*")) {
            console.log("no");
        }
    }
}


function dialkeyo() {
    document.getElementById("showtypinginphone").style.display = "flex"
    document.getElementById("keypaddisplay").style.display = "flex"
    document.getElementById("dial").style.display = "flex"
    document.getElementById("dialo").style.display = "none"
}

function showhis() {
    document.getElementById("showtypinginphoneinput").value = ""
    document.getElementById("showtypinginphone").style.display = "none"
    document.getElementById("keypaddisplay").style.display = "none"
    document.getElementById("dial").style.display = "none"
    document.getElementById("dialo").style.display = "flex"


    document.getElementById("displayhisandcontast").innerHTML = ""
    for (let index = 0; index < historyarray.length; index++) {
        const element = historyarray[index];

        document.getElementById("displayhisandcontast").innerHTML +=
            `
        <div class="onecontactorhistory" onclick="onehistory(${index})">
        <img src="${element.Image}" alt="">
        <div>
            <p>${element.name}</p>
            <p>${element.phonenumber}</p>
        </div>
    </div>
        `

    }
}
function showcon() {
    document.getElementById("showtypinginphoneinput").value = ""
    document.getElementById("showtypinginphone").style.display = "none"
    document.getElementById("keypaddisplay").style.display = "none"
    document.getElementById("dial").style.display = "none"
    document.getElementById("dialo").style.display = "flex"

    document.getElementById("displayhisandcontast").innerHTML = ""
    for (let index = 0; index < contactarray.length; index++) {
        const element = contactarray[index];

        document.getElementById("displayhisandcontast").innerHTML +=
            `
        <div class="onecontactorhistory" onclick="onecontact(${index})">
        <img src="${element.Image}" alt="">
        <div>
            <p>${element.name}</p>
            <p>${element.phonenumber}</p>
        </div>
    </div>
        `

    }

}
function onehistory(init) {
    document.getElementById("showtypinginphoneinput").value = ""
    document.getElementById("showtypinginphone").style.display = "none"
    document.getElementById("keypaddisplay").style.display = "none"
    document.getElementById("dial").style.display = "none"
    document.getElementById("dialo").style.display = "flex"
    document.getElementById("showtypinginphoneinput").value = ""
    console.log(historyarray[init]);


    document.getElementById("displayhisandcontast").innerHTML +=
        `
        <div class="whattodowithonecotact" id="whattodowithonecotact">
        <div>
            <img src="${historyarray[init].Image}" alt="">
            <div>
                <p>${historyarray[init].name}</p>
                <p>${historyarray[init].phonenumber}</p>
            </div>
        </div>
        <div>
            <button onclick="callhis(${init})">
                <span class="material-symbols-outlined">
                    call
                </span>
            </button>
            <button onclick="cancleit()">
                <span class="material-symbols-outlined">
cancel
</span>
            </button>
            <button onclick="sendmessage()">
                <span class="material-symbols-outlined">
                    send
                </span>
            </button>
        </div>
    </div>

        `


}
function onecontact(init) {
    document.getElementById("showtypinginphoneinput").value = ""
    document.getElementById("showtypinginphone").style.display = "none"
    document.getElementById("keypaddisplay").style.display = "none"
    document.getElementById("dial").style.display = "none"
    document.getElementById("dialo").style.display = "flex"
    console.log(contactarray[init]);
    document.getElementById("showtypinginphoneinput").value = ""

    document.getElementById("displayhisandcontast").innerHTML +=
        `
<div class="whattodowithonecotact" id="whattodowithonecotact">
<div>
    <img src="${contactarray[init].Image}" alt="">
    <div>
        <p>${contactarray[init].name}</p>
        <p>${contactarray[init].phonenumber}</p>
    </div>
</div>
<div>
    <button onclick="call(${init})">
        <span class="material-symbols-outlined">
            call
        </span>
    </button>
    <button onclick="cancleitt()">
        <span class="material-symbols-outlined">
cancel
</span>
    </button>
    <button onclick="sendmessage()">
        <span class="material-symbols-outlined">
            send
        </span>
    </button>
</div>
</div>

`

}
function cancleit() {
    document.getElementById("showtypinginphoneinput").value = ""
    showhis()


}
function cancleitt() {
    document.getElementById("showtypinginphoneinput").value = ""
    showcon()


}


function call(init) {
    console.log(contactarray[init]);
    historyarray.push(contactarray[init])
    console.log(contactarray);
    console.log(historyarray);
    document.getElementById("displayforphoneapp").innerHTML +=
        `
<div class="whencalling" id="whencalling">
        <img src="${contactarray[init].Image}" alt="">
        <div>
            <p>${contactarray[init].name}</p>
            <p>${contactarray[init].phonenumber}</p>
        </div>
        <div class="holdingbut">
            <button>
                <span class="material-symbols-outlined">
                    keyboard_alt
                    </span>
            </button>
            <button>
                <span class="material-symbols-outlined">
                    phone_paused
                    </span>
            </button>
            <button>
                <span class="material-symbols-outlined">
                    volume_up
                    </span>
            </button>
        </div>
        <audio controls autoplay loop src="audio/mixkit-sport-start-bleeps-918.wav"></audio>
        <button onclick="cancletheongoingcallcall()">
            <span class="material-symbols-outlined">
                call_end
                </span>
        </button>
    </div>
`

    setTimeout(() => {
        phone()
        showhis()
    }, 5000);

}
function callhis(init) {
    console.log(historyarray[init]);
    historyarray.push(historyarray[init])
    console.log(contactarray);
    console.log(historyarray);
    document.getElementById("displayforphoneapp").innerHTML +=
        `
<div class="whencalling" id="whencalling">
        <img src="${historyarray[init].Image}" alt="">
        <div>
            <p>${historyarray[init].name}</p>
            <p>${historyarray[init].phonenumber}</p>
        </div>
        <div class="holdingbut">
            <button>
                <span class="material-symbols-outlined">
                    keyboard_alt
                    </span>
            </button>
            <button>
                <span class="material-symbols-outlined">
                    phone_paused
                    </span>
            </button>
            <button>
                <span class="material-symbols-outlined">
                    volume_up
                    </span>
            </button>
        </div>
        <audio controls autoplay loop src="audio/mixkit-sport-start-bleeps-918.wav"></audio>
        <button onclick="cancletheongoingcall()">
            <span class="material-symbols-outlined">
                call_end
                </span>
        </button>
    </div>
`

    setTimeout(() => {
        phone()
        showhis()
    }, 5000);

}
function cancletheongoingcallcall() {
    phone()
    showhis()
}
function cancletheongoingcall() {
    phone()
    showhis()
}










function card_gen() {
    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML = `
    
    <div class="cardgenspace">
    <div class="cardgenspacebutton">
        <button onclick="showcardinnetwork(MTN)">
            MTN
        </button>
        <button onclick="showcardinnetwork(AIRTEL)">
            AIRTEL
        </button>
        <button onclick="showcardinnetwork(GLO)">
            GLO
        </button>
        <button onclick="showcardinnetwork(ninemobile)">
            9MOBLIE
        </button>
    </div>
    <div class="spacefortheselection">
    <select name="network" id="network">
        <option value="">choose your network</option>
        <option value="AIRTEL">AIRTEL</option>
        <option value="MTN">MTN</option>
        <option value="GLO">GLO</option>
        <option value="9 MOBLIE">9 MOBLIE</option>
    </select>
    <select name="amount" id="amount">
    <option value="100">100</option>
    <option value="200">200</option>
    <option value="500">500</option>
    <option value="1000">1000</option>
</select>
    <input type="number" placeholder="quantity" id="quantity">
    <button onclick="selectyournetwork()">
        enter
    </button>
</div>
    <div class="showfornetwork" id="showfornetwork">

    </div>
</div>

    `
    document.getElementById("foot").innerHTML = `
    
                                                    <button onclick="backtohome()">
                                                        <span class="material-symbols-outlined">play_arrow</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">check_box_outline_blank</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                                    </button>
                                                
    `

}



let MTN = []
let GLO = []
let AIRTEL = []
let ninemobile = []
let allnetwork = []
let usednetwork = []
const min = 100000000000;
const max = 999999999999;


function selectyournetwork() {
    let network = document.getElementById("network").value
    let quantity = document.getElementById("quantity").value
    let amount = document.getElementById("amount").value
    if (network == "" || quantity == "" || quantity <= 0) {
        alert("choose network and input quantity")
    }
    else {
        console.log(network);
        console.log(quantity);
        for (let index = 0; index < quantity; index++) {
            let card = Math.floor(Math.random() * (max - min + 1)) + min
            let found = allnetwork.find((init) => init == card);
            if (found) {
                quantity++
            }
            else {
                allnetwork.push({
                    card: card, amount: amount
                })
                if (network == "MTN") {
                    MTN.push(
                        { card: card, amount: amount }
                    )

                    document.getElementById("showfornetwork").innerHTML = ""
                    let numbering = 1
                    for (let index = MTN.length - 1; index >= 0; index--) {
                        const element = MTN[index].card;
                        document.getElementById("showfornetwork").innerHTML += `<p> ${numbering++}:${element}   <button onclick="copyiit(${element})">
                            copy
                        </button></p>`
                    }

                }
                else if (network == "AIRTEL") {
                    AIRTEL.push(
                        { card: card, amount: amount }
                    )

                    document.getElementById("showfornetwork").innerHTML = ""
                    let numbering = 1
                    for (let index = AIRTEL.length - 1; index >= 0; index--) {
                        const element = AIRTEL[index].card;
                        document.getElementById("showfornetwork").innerHTML += `<p> ${numbering++}:${element}   <button onclick="copyiit(${element})">
                            copy
                        </button></p>`
                    }
                }
                else if (network == "GLO") {
                    GLO.push(
                        { card: card, amount: amount }
                    )

                    document.getElementById("showfornetwork").innerHTML = ""
                    let numbering = 1
                    for (let index = GLO.length - 1; index >= 0; index--) {
                        const element = GLO[index].card;
                        document.getElementById("showfornetwork").innerHTML += `<p> ${numbering++}:${element}   <button onclick="copyiit(${element})">
                            copy
                        </button></p>`
                    }
                }
                else if (network == "9 MOBLIE") {
                    ninemobile.push(
                        { card: card, amount: amount }
                    )

                    document.getElementById("showfornetwork").innerHTML = ""
                    let numbering = 1
                    for (let index = ninemobile.length - 1; index >= 0; index--) {
                        const element = ninemobile[index].card;
                        document.getElementById("showfornetwork").innerHTML += `<p> ${numbering++}:${element}   <button onclick="copyiit(${element})">
                            copy
                        </button></p>`
                    }
                }
            }
        }
        console.log(allnetwork);
        console.log(MTN);
        console.log(AIRTEL);
        console.log(GLO);
        console.log(ninemobile);
    }



}


function showcardinnetwork(thenetwork) {
    if (thenetwork.length == 0) {
        document.getElementById("showfornetwork").innerHTML = `<p>NO NETWORK CARD GENERATED</p>`
    } else {
        document.getElementById("showfornetwork").innerHTML = ""
        let numbering = 1
        for (let index = thenetwork.length - 1; index >= 0; index--) {
            const element = thenetwork[index].card;

            document.getElementById("showfornetwork").innerHTML += `<p> &nbsp&nbsp ${numbering++}:${element}  &nbsp&nbsp <button onclick="copyiit(${element})">
        copy
    </button></p>`
        }
    }
}

function copyiit(cyp) {
    console.log(cyp);
}

function calculator() {
    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML =
        `
    
    <section class="calculator">
    <div class="outputcal" id="output"></div>
    <div class="rowcal">
    <button class="button" onclick="appendToOutput('7')">7</button>
    <button class="button" onclick="appendToOutput('8')">8</button>
    <button class="button" onclick="appendToOutput('9')">9</button>
</div>
<div class="rowcal">

    <button class="button" onclick="appendToOutput('4')">4</button>
    <button class="button" onclick="appendToOutput('5')">5</button>
    <button class="button" onclick="appendToOutput('6')">6</button>
</div>
<div class="rowcal">

    <button class="button" onclick="appendToOutput('1')">1</button>
    <button class="button" onclick="appendToOutput('2')">2</button>
    <button class="button" onclick="appendToOutput('3')">3</button>
</div>
<div class="rowcal">
    <button class="button" onclick="appendToOutput('0')">0</button>
    <button class="button" onclick="appendToOutput('+')"><span class="material-symbols-outlined">
    add
    </span></button>
    <button class="button" onclick="backspaceincal()" ><span class="material-symbols-outlined">
    backspace
    </span></button>
</div>
<div class="rowcal">

    <button class="button" onclick="appendToOutput('/')">÷</button>
    <button class="button" onclick="appendToOutput('*')">x</button>
    <button class="button" onclick="appendToOutput('-')">-</button>
</div>
<div class="rowcal">

    <button class="button" onclick="appendToOutput('.')">.</button>
    <button class="button" onclick="clearOutput()">C</button>
    <button class="button" onclick="calculate()">=</button>
</div>


</section>


    
    `


    document.getElementById("foot").innerHTML = `
    
                                                    <button onclick="backtohome()">
                                                        <span class="material-symbols-outlined">play_arrow</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">check_box_outline_blank</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                                    </button>
                                                
    `

}
function appendToOutput(value) {
    document.getElementById('output').innerHTML += value;
}
function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

function backspaceincal() {

    document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.slice(0, -1);

}

function calculate() {
    const output = document.getElementById('output').innerHTML;
    const result = eval(output);
    document.getElementById('output').innerHTML = result;
}

// photo app

function photo() {

    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML = `
    <section class="photoapp" id="photoapp">

    </section>
 

    `
    document.getElementById("foot").innerHTML = `
    
                                                    <button onclick="backtohome()">
                                                        <span class="material-symbols-outlined">play_arrow</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">check_box_outline_blank</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                                    </button>
                                                
    `

    document.getElementById("photoapp").innerHTML += `
    <div class="nameappimg">
    photos
    </div>
    `
    for (let index = 0; index < photoarray.length; index++) {
        const element = photoarray[index];
        document.getElementById("photoapp").innerHTML += `<button onclick="theimg(${index})"><img src="${element}" alt=""></button>`
    }
}

let photoarray = [

    `images/icons8-google-calendar-240 (1).png`,
    `images/icons8-instagram-240.png`,
    `images/icons8-linkedin-240.png`,
    `images/icons8-music-240.png`,
    `images/facebook.png`,
    `images/icons8-google-calendar-240 (1).png`,
    `images/icons8-instagram-240.png`,
    `images/icons8-linkedin-240.png`,
    `images/icons8-music-240.png`,
    `images/facebook.png`,
    `images/icons8-google-calendar-240 (1).png`,
    `images/icons8-instagram-240.png`,
    `images/icons8-linkedin-240.png`,
    `images/icons8-music-240.png`,
    `images/facebook.png`,
    `images/icons8-google-calendar-240 (1).png`,
    `images/icons8-instagram-240.png`,
    `images/icons8-linkedin-240.png`,
    `images/icons8-music-240.png`,
]


function theimg(theimg) {
    console.log(theimg);
    console.log(photoarray[theimg]);
    document.getElementById("photoapp").innerHTML += `
    <div class="showoneimg" id="showoneimg" >
<div>
<button onclick="gotomainphotoapp()">
    <span class="material-symbols-outlined">
        arrow_back
        </span>
</button>
<button onclick="delphoto(${theimg})">
    <span class="material-symbols-outlined">
        delete
        </span>
</button>
</div>
<img src="${photoarray[theimg]}" alt="">
</div>
    `
}
function gotomainphotoapp() {
    photo()
}
function delphoto(theimg) {
    photoarray.splice(theimg, 1)
    photo()
}
// video app
function video() {
    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML =
        `
    <section class="videoapp" id="videoapp">

    </section>
    `



    document.getElementById("foot").innerHTML = `
    
                                                    <button onclick="backtohome()">
                                                        <span class="material-symbols-outlined">play_arrow</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">check_box_outline_blank</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                                    </button>
                                                
    `



    document.getElementById("videoapp").innerHTML += `
<div class="nameappvideo">
    videos
</div>
`
    for (let index = 0; index < videoarray.length; index++) {
        const element = videoarray[index];
        document.getElementById("videoapp").innerHTML += `<button onclick="thevideo(${index})"><video    src="${element.src}"></video>
        <p>${element.name}</p></button>`
    }

}

let videoarray = [

    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    }


]

function thevideo(thevideo) {
    console.log(thevideo);
    console.log(videoarray[thevideo]);
    document.getElementById("videoapp").innerHTML += `
    <div class="showonevideo" id="showonevideo" >
<div>
<button onclick="gotomainvideoapp()">
    <span class="material-symbols-outlined">
        arrow_back
        </span>
</button>
<button onclick="delvideo(${thevideo})">
    <span class="material-symbols-outlined">
        delete
        </span>
</button>
</div>
<video controls src="${videoarray[thevideo].src}"></video>

</div>
    `
}
function gotomainvideoapp() {
    video()
}
function delvideo(thevideo) {
    videoarray.splice(thevideo, 1)
    video()
}
// music app
function play_music() {
    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML =
        `
      <section class="audioapp" id="audioapp" id="audio-player">
        <div class="audioappname">
            Audio play <audio src="" id="audio"></audio>
        </div>
        <div id="controls" class="audiocontrols">
            <p id="showaudioname" class="showaudioname"></p>
            <input type="range" id="range" min="0" value="0">
            <div>
                <button id="prev-btn"><span class="material-symbols-outlined">
                fast_rewind
                </span></button>
                <button id="play-btn"><span class="material-symbols-outlined">
                play_circle
                </span></button>
                <button id="next-btn"><span class="material-symbols-outlined">
                fast_forward
                </span></button>
            </div>
            
        </div>
        <div class=" audiobuttons-container" id="buttons-container">

            
        </div>

    </section>
    `




    let audioFiles = [
        {
            name: "Blame It On Me Official Music",
            src: `audio/Akon - Sorry, Blame It On Me Official Music Video.m4a`
        },
        {
            name: "Clean Bandit, Demi Lovato",
            src: `audio/Clean Bandit, Demi Lovato - Solo Lyrics.m4a`
        },
        {
            name: "Ed_Sheeran_&_Travis_Scott_-_Antisocial",
            src: `audio/Ed_Sheeran_&_Travis_Scott_-_Antisocial_[Official_Video](128k).m4a`
        },
        {
            name: "Eminem - Godzilla ft Juice WRLD Directed by Cole Bennett",
            src: `audio/Eminem - Godzilla ft Juice WRLD Directed by Cole Bennett (2).m4a`
        },
        {
            name: "Forever__Justin_Bieber_Ft._Post_Malone__Clever1",
            src: `audio/Forever__Justin_Bieber_Ft._Post_Malone__Clever1.m4a`
        },
    ]



    let currentAudioIndex = 0;

    const audioPlayer = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const range = document.getElementById('range');
    const buttonsContainer = document.getElementById('buttons-container');




    // Load the first audio file
    audioPlayer.src = audioFiles[currentAudioIndex].src;
    document.getElementById("showaudioname").innerHTML = audioFiles[currentAudioIndex].name


    // Create buttons for each audio file
    for (let i = 0; i < audioFiles.length; i++) {
        const button = document.createElement('button');
        button.textContent = audioFiles[i].name;
        button.addEventListener('click', () => {
            currentAudioIndex = i;
            audioPlayer.src = audioFiles[currentAudioIndex].src;
            audioPlayer.play();
            playBtn.innerHTML = `<span class="material-symbols-outlined">
            pause_circle
            </span>`;
        });
        buttonsContainer.appendChild(button);
    }


    // Play or pause the audio when the play button is clicked
    playBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();

            playBtn.innerHTML = `
            <span class="material-symbols-outlined">
pause_circle
</span>
            `;
        } else {
            audioPlayer.pause();
            playBtn.innerHTML = `
            <span class="material-symbols-outlined">
play_circle
</span>
            `;
        }
    });

    // Go to the previous audio file when the previous button is clicked
    prevBtn.addEventListener('click', () => {
        currentAudioIndex--;
        if (currentAudioIndex < 0) {
            currentAudioIndex = audioFiles.length - 1;
        }
        audioPlayer.src = audioFiles[currentAudioIndex].src;
        audioPlayer.play();
        document.getElementById("showaudioname").innerHTML = audioFiles[currentAudioIndex].name
        playBtn.textContent = 'Pause';
    });

    // Go to the next audio file when the next button is clicked
    nextBtn.addEventListener('click', () => {
        currentAudioIndex++;
        if (currentAudioIndex >= audioFiles.length) {
            currentAudioIndex = 0;
        }
        audioPlayer.src = audioFiles[currentAudioIndex].src;
        audioPlayer.play();
        document.getElementById("showaudioname").innerHTML = audioFiles[currentAudioIndex].name
        playBtn.textContent = 'Pause';
    });

    // Update the range input as the audio plays
    audioPlayer.addEventListener('timeupdate', () => {
        range.value = audioPlayer.currentTime / audioPlayer.duration * 100;

    });

    // Seek to a different position in the audio when the range input is changed
    range.addEventListener('input', () => {
        audioPlayer.currentTime = range.value / 100 * audioPlayer.duration;
    });

    // Fast-forward or rewind the audio when the range input is clicked
    range.addEventListener('mousedown', () => {
        audioPlayer.pause();

    });

    range.addEventListener('mouseup', () => {
        audioPlayer.play();
        if (audioPlayer.paused) {
            audioPlayer.play();

            playBtn.innerHTML = `
            <span class="material-symbols-outlined">
pause_circle
</span>
            `;
        } else {
            audioPlayer.pause();
            playBtn.innerHTML = `
            <span class="material-symbols-outlined">
play_circle
</span>
            `;
        }
    });

    // Go to the next audio file when the current audio file ends
    audioPlayer.addEventListener('ended', () => {
        currentAudioIndex++;
        if (currentAudioIndex >= audioFiles.length) {
            currentAudioIndex = 0;
        }
        audioPlayer.src = audioFiles[currentAudioIndex].src;
        document.getElementById("showaudioname").innerHTML = audioFiles[currentAudioIndex].name
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    });


    document.getElementById("foot").innerHTML = `
    
                                                    <button onclick="backtohome()">
                                                        <span class="material-symbols-outlined">play_arrow</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">check_box_outline_blank</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                                    </button>
                                                
    `

}

//  contact app


function contact() {


    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML =
        `
    <section class="contactapp" id="contactapp">
        <div class="nameappcotact">
            contacts
        </div>
        <div class="allcontacts" id="allcontacts">

        </div>
        <div class="addtocontactdiv" id="addtocontactdiv">
            <button onclick="addtocontact()">
                <span class="material-symbols-outlined">
                    add_circle
                </span>
            </button>
        </div>

    </section>
    `



    document.getElementById("foot").innerHTML = `
    
                                                    <button onclick="backtohome()">
                                                        <span class="material-symbols-outlined">play_arrow</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">check_box_outline_blank</span>
                                                    </button>
                                                    <button>
                                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                                    </button>
                                                
    `

    for (let index = 0; index < contactarray.length; index++) {
        const element = contactarray[index];
        document.getElementById("allcontacts").innerHTML += `
        
        <div class="onecotactincotactapp" id="onecotactincotactapp" onclick="editonecontactincontactapp(${index})">
        <img src="${element.Image}" alt="">
        <div>
            <p>${element.name}</p>
            <p>${element.phonenumber}</p>
        </div>
    </div>
    
        `
    }

}



function editonecontactincontactapp(i) {

    console.log(contactarray[i]);


    document.getElementById("allcontacts").innerHTML = ""

    document.getElementById("allcontacts").innerHTML += `
    
        <div class="divtoeditonecotact" id="divtoeditonecotact">
    <div class="headerofoneeditincontact">
        edit contact
    </div>
    <div class="imgofeditincontact">
        <img class="showimg" id="showimg" src="${contactarray[i].Image}" alt="">

        <label class="custom-file-upload" onclick="">
            <input onchange="pickfile(event)" class="inputimg" id="inputimg" type="file" name="" id="">
            Choose File
        </label>
    </div>
    <div class="inputsdivincontactedit">
        <input type="text" id="contactname" placeholder="Name" value="${contactarray[i].name}">
        <input type="number" id="contactphonenumber" placeholder="phone number" value="${contactarray[i].phonenumber}">
    </div>
    <div class="butdivincontactedit">
        <button onclick="subnewcontacttoarray()">
            submit
        </button>
        <button onclick="deleteoncontactincontactapp(${i})">
            delete
        </button>
        <button onclick="cancontact()">
            cancle
        </button>
    </div>
</div>

    `

    document.getElementById("addtocontactdiv").style.display = "none"


    document.getElementById("foot").innerHTML = `
    
    <button onclick="contact()">
        <span class="material-symbols-outlined">play_arrow</span>
    </button>
    <button>
        <span class="material-symbols-outlined">check_box_outline_blank</span>
    </button>
    <button>
        <span class="material-symbols-outlined">radio_button_unchecked</span>
    </button>

`

}


let reader = new FileReader()
let newimgofcontact = ""
function pickfile(ev) {
    let file = ev.target.files[0]
    console.log(file);
    reader.onload = (file) => {
        newimgofcontact = reader.result
        document.getElementById("showimg").src = reader.result
        // reader.readAsDataURL(file)
    }

    if (file) {
        let data = reader.readAsDataURL(file);
    }
}

function subnewcontacttoarray() {
    let newcontactdet =
    {
        Image: document.getElementById("showimg").src,
        name: document.getElementById("contactname").value,
        phonenumber: document.getElementById("contactphonenumber").value
    }
    console.log(newcontactdet);
    let found = contactarray.find((current) => current.name == document.getElementById("contactname").value && current.phonenumber == document.getElementById("contactphonenumber").value);

    if (found) {
        alert("contact already saved before")
        contact()
    } else {
        contactarray.push(newcontactdet)
        contact()
    }
}
function deleteoncontactincontactapp(i) {
    contactarray.splice(i, 1)
    contact()
}
function cancontact() {
    contact()
}
function addtocontact() {

    document.getElementById("foot").innerHTML = `
    
    <button onclick="contact()">
        <span class="material-symbols-outlined">play_arrow</span>
    </button>
    <button>
        <span class="material-symbols-outlined">check_box_outline_blank</span>
    </button>
    <button>
        <span class="material-symbols-outlined">radio_button_unchecked</span>
    </button>

`

    document.getElementById("allcontacts").innerHTML = ""

    document.getElementById("allcontacts").innerHTML += `

<div class="divtoeditonecotact" id="divtoeditonecotact">
<div class="headerofoneeditincontact">
save new contact
</div>
<div class="imgofeditincontact">
<img class="showimg" id="showimg" src="" alt="">

<label class="custom-file-upload" onclick="">
    <input onchange="pickfile(event)" class="inputimg" id="inputimg" type="file" name="" id="">
    Choose File
</label>
</div>
<div class="inputsdivincontactedit">
<input type="text" id="contactname" placeholder="Name" value="">
<input type="number" id="contactphonenumber" placeholder="phone number" value="">
</div>
<div class="butdivincontactedit">
<button onclick="addsubnewcontacttoarray()">
    submit
</button>

<button onclick="cancontact()">
    cancle
</button>
</div>
</div>

`

    document.getElementById("addtocontactdiv").style.display = "none"



}

function addsubnewcontacttoarray() {
    if (document.getElementById("contactphonenumber").value == "" || document.getElementById("contactname").value == "") {
        alert("enter name and phone number")
    } else {

        let newcontactdet =
        {
            Image: document.getElementById("showimg").src,
            name: document.getElementById("contactname").value,
            phonenumber: document.getElementById("contactphonenumber").value
        }
        console.log(newcontactdet);
        let found = contactarray.find((current) => current.name == document.getElementById("contactname").value && current.phonenumber == document.getElementById("contactphonenumber").value);

        if (found) {
            alert("contact already saved before")

        } else {
            contactarray.push(newcontactdet)
            contact()
        }
    }
}