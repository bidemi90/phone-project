
let time = 1
function defaulthome() {
    document.getElementById("main").innerHTML = `
<nav class="nav" id="nav">                                                     
                                                </nav>
                                                <section id="section1" class="section1">
                                                    <div id="clock" class="big-clock">

                                                    </div>
                                                    <div class="footermenu">
                                                       
                                                        <button class="home" onclick="home()">
                                                            <span class="material-symbols-outlined">
                                                                home
                                                            </span>
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
                                                 MTN
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
            <input type="text" onkeypress="searchfromcontact()" class="searchinphone" id="searchinphone" placeholder="search">
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

let usermtnbalance = 0
function dialkey() {
    document.getElementById("foot").innerHTML = `
    
    <button onclick="phone()">
        <span class="material-symbols-outlined">play_arrow</span>
    </button>
    <button>
        <span class="material-symbols-outlined">check_box_outline_blank</span>
    </button>
    <button>
        <span class="material-symbols-outlined">radio_button_unchecked</span>
    </button>

`
    let numb = document.getElementById("showtypinginphoneinput").value
    console.log(numb);

    if (numb == "*556#") {
        document.getElementById("showtypinginphone").style.display = "none"
        document.getElementById("keypaddisplay").style.display = "none"
        document.getElementById("dial").style.display = "none"
        document.getElementById("displayhisandcontast").innerHTML += `
<div class="choosesim" id="choosesim">
your  account balance is ${usermtnbalance}#
<button onclick="phone()">ok</button>
</div>`
    } else if (numb.length == 11) {
        let checkit = `${numb[0]}${numb[1]}${numb[2]}`

        if (checkit == "090" || checkit == "080" || checkit == "070" || checkit == "091" || checkit == "081") {
            console.log("good");

            let found = contactarray.findIndex((current) => current.phonenumber == numb)
            if (found >= 0) {
                call(found)
            } else {


                historyarray.push(
                    {
                        Image: "",
                        name: "Unkown",
                        phonenumber: numb
                    }
                )

                console.log(historyarray);
                document.getElementById("displayforphoneapp").innerHTML +=
                    `
           <div class="whencalling" id="whencalling">
                   <img src="" alt="">
                   <div>
                       <p>Unkown</p>
                       <p>${numb}</p>
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


        } else {
            document.getElementById("showtypinginphone").style.display = "none"
        document.getElementById("keypaddisplay").style.display = "none"
        document.getElementById("dial").style.display = "none"
        document.getElementById("displayhisandcontast").innerHTML += `
<div class="choosesim" id="choosesim">
invalid code
<button onclick="phone()">ok</button>
</div>`
        }
    }
    else if (numb.length == 18 && numb.includes("#") && numb.includes("*")) {

        let checkit = `${numb[0]}${numb[1]}${numb[2]}${numb[3]}${numb[4]}`

        let thecard = `${numb[5]}${numb[6]}${numb[7]}${numb[8]}${numb[9]}${numb[10]}${numb[11]}${numb[12]}${numb[13]}${numb[14]}${numb[15]}${numb[16]}`
        console.log(checkit);
        console.log(thecard);
        if (checkit == "*555*") {
            let checkcard = MTN.find((current) => current.card == thecard)
            if (checkcard) {
                let inusednetwork = usednetwork.find((looking) => looking == checkcard.card)
                if (!inusednetwork) {
                    usednetwork.push(checkcard.card)
                    usermtnbalance = eval(usermtnbalance + Number(checkcard.amount))
                    document.getElementById("showtypinginphone").style.display = "none"
                    document.getElementById("keypaddisplay").style.display = "none"
                    document.getElementById("dial").style.display = "none"
                    document.getElementById("displayhisandcontast").innerHTML += `
                    <div class="choosesim" id="choosesim">
                    recharge successful your balance is ${usermtnbalance}#
                    <button onclick="phone()">ok</button>
                </div>
                  `}
                if (inusednetwork) {
                    document.getElementById("showtypinginphone").style.display = "none"
                    document.getElementById("keypaddisplay").style.display = "none"
                    document.getElementById("dial").style.display = "none"
                    document.getElementById("displayhisandcontast").innerHTML = `
        <div class="choosesim" id="choosesim">
        recharge as already been used
        <button onclick="phone()">ok</button>
    </div>
      `
                }

            }
            else {
                document.getElementById("showtypinginphone").style.display = "none"
                document.getElementById("keypaddisplay").style.display = "none"
                document.getElementById("dial").style.display = "none"
                document.getElementById("displayhisandcontast").innerHTML += `
        <div class="choosesim" id="choosesim">
        invalid code
        <button onclick="phone()">ok</button>
    </div>
      `
            }
        }
        console.log(usermtnbalance);
    }
    else {
        document.getElementById("showtypinginphone").style.display = "none"
        document.getElementById("keypaddisplay").style.display = "none"
        document.getElementById("dial").style.display = "none"
        document.getElementById("displayhisandcontast").innerHTML += `
<div class="choosesim" id="choosesim">
invalid code
<button onclick="phone()">ok</button>
</div>`  
    }




}

function choosesim(sim) {


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

function searchfromcontact() {
    
    document.getElementById("showtypinginphoneinput").value = ""
    document.getElementById("showtypinginphone").style.display = "none"
    document.getElementById("keypaddisplay").style.display = "none"
    document.getElementById("dial").style.display = "none"
    document.getElementById("dialo").style.display = "flex"


    document.getElementById("displayhisandcontast").innerHTML = ""
    for (let index = 0; index < contactarray.length; index++) {
        const element = contactarray[index];

        if (element.name.includes(document.getElementById("searchinphone").value) ) {
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
        } else {
           
        }

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
            <button onclick="sendmessagehis(${init})">
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
    <button onclick="sendmessagecon(${init})">
        <span class="material-symbols-outlined">
            send
        </span>
    </button>
</div>
</div>

`

}
function sendmessagecon(index) {
    message()
    addintomessage(index)
}
function sendmessagehis(index) {
    message()
    addintomessagehis(index)
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
    document.getElementById("photoapp").innerHTML = ""
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
    document.getElementById("foot").innerHTML = `
    
    <button onclick="gotomainphotoapp()">
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
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
    {
        src: `video/black-clover_123.mp4`,
        name: "black-clover_123.mp4"
    },
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
    document.getElementById("videoapp").innerHTML = ""
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
    document.getElementById("foot").innerHTML = `
    
    <button onclick="gotomainvideoapp()">
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
        playBtn.innerHTML = `<span class="material-symbols-outlined">
            pause_circle
            </span>`
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
        playBtn.innerHTML = `<span class="material-symbols-outlined">
            pause_circle
            </span>`
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
        playBtn.innerHTML = ` <span class="material-symbols-outlined">
        pause_circle
        </span>`;
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
function message() {

    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML = `
    <section class="messageapp">
        <div class="messageappheader" id="messageappheader">
            message
        </div>
        <div class="messageappmain" id="messageappmain">

        </div>
        <button class="addtomessagebut" id="addtomessagebut" onclick="addtomessagebut()">
            <span class="material-symbols-outlined">
                add_box
            </span>
        </button>
    </section>
    `

    for (let index = 0; index < messagearray.length; index++) {
        const element = messagearray[index];
        let me = messagearray[index].message.length - 1
        document.getElementById("messageappmain").innerHTML += `
        
        <button class="onemessage" onclick="onemessage(${index})">
        <img src="${messagearray[index].Image}" alt="">
        <div>
            <p>${messagearray[index].name}</p>
            <p>${messagearray[index].message[me].content}</p>
        </div>
    </button>
    
        `


    }
    document.getElementById("foot").innerHTML = `
    
    <button onclick="home()">
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

let messagearray = [

    {
        Image: `images/facebook.png`,
        name: "Usman SQI",
        phonenumber: "08012345678",
        message: [
            {
                from: "me",
                content: "aova bro"
            },
            {
                from: "someoneelse",
                content: "i dey ooo"
            },
            {
                from: "someoneelse",
                content: "you dey go sqi today abi"
            },
            {
                from: "me",
                content: " yes na "
            },
        ]
    },
    {
        Image: `images/facebook.png`,
        name: "Mr dan",
        phonenumber: "08012345678",
        message: [
            {
                from: "me",
                content: "hello"
            },
            {
                from: "someoneelse",
                content: "hi"
            },
            {
                from: "someoneelse",
                content: "what"
            },
            {
                from: "me",
                content: "am having bug in my code i need help "
            },
        ]
    },
]




function onemessage(index) {
    document.getElementById("messageappheader").innerHTML = `<button class="backtomessage" id="backtomessage" onclick="backtomessage()">
    <span class="material-symbols-outlined">
        arrow_back
        </span>
</button>`+ messagearray[index].name
    document.getElementById("messageappmain").innerHTML = ""
    document.getElementById("messageappmain").innerHTML = `
        <div class="contectoftheindex" id="contectoftheindex">
    </div>
  `
    document.getElementById("messageappmain").innerHTML += `
        <div class="inputdivformessage">
    <input type="text" id="inputformessage"> 
    <button onclick="sendformessage(${index})">
        <span class="material-symbols-outlined">
            send
            </span>
    </button>
  </div>
  `
    for (let i = 0; i < messagearray[index].message.length; i++) {
        const element = messagearray[index].message[i];

        if (element.from == "someoneelse") {
            document.getElementById("contectoftheindex").innerHTML +=
                `

<aside class="messageforsomeoneels" id="messageforsomeoneels">
${element.content}
</aside>

`
        } else {
            document.getElementById("contectoftheindex").innerHTML +=
                `
<aside class="messageforme" id="messageforme">
${element.content}
</aside>


`
        }
    }
    document.getElementById("addtomessagebut").style.display = "none"
    document.getElementById("foot").innerHTML = `
    
    <button onclick="message()">
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

function sendformessage(index) {
    console.log(messagearray[index].message);
    if (document.getElementById("inputformessage").value == "") {

    } else {
        messagearray[index].message.push({
            content: document.getElementById("inputformessage").value,
            from: "me"
        })
        document.getElementById("inputformessage").value = ""
        document.getElementById("contectoftheindex").innerHTML = ""
        for (let i = 0; i < messagearray[index].message.length; i++) {
            const element = messagearray[index].message[i];

            if (element.from == "someoneelse") {
                document.getElementById("contectoftheindex").innerHTML +=
                    `

<aside class="messageforsomeoneels" id="messageforsomeoneels">
${element.content}
</aside>

`
            } else {
                document.getElementById("contectoftheindex").innerHTML +=
                    `
<aside class="messageforme" id="messageforme">
${element.content}
</aside>


`
            }
        }

    }

}

function backtomessage() {
    message()
}


function addtomessagebut() {

    document.getElementById("messageappheader").innerHTML = `<button class="backtomessage" id="backtomessage" onclick="backtomessage()">
    <span class="material-symbols-outlined">
        arrow_back
        </span>
</button>`+ "contacts"


    document.getElementById("messageappmain").innerHTML = ""
    for (let index = 0; index < contactarray.length; index++) {
        const element = contactarray[index];

        document.getElementById("messageappmain").innerHTML += `
    
    <button class="onemessage" onclick="addintomessage(${index})">
    <img src="${contactarray[index].Image}" alt="">
    <div>
        <p>${contactarray[index].name}</p>
        <p>${contactarray[index].phonenumber}</p>
    </div>
</button>

    `


    }

    document.getElementById("addtomessagebut").style.display = "none"
    document.getElementById("foot").innerHTML = `
    
    <button onclick="message()">
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

function addintomessage(index) {


    console.log(contactarray[index]);

    let found = messagearray.findIndex((current) => current.phonenumber == contactarray[index].phonenumber && current.name == contactarray[index].name);

    console.log(found);



    if (found >= 0) {



        document.getElementById("messageappheader").innerHTML = `<button class="backtomessage" id="backtomessage" onclick="backtomessage()">
                <span class="material-symbols-outlined">
                    arrow_back
                    </span>
            </button>`+ messagearray[found].name
        document.getElementById("messageappmain").innerHTML = ""
        document.getElementById("messageappmain").innerHTML = `
                    <div class="contectoftheindex" id="contectoftheindex">
                </div>
              `
        document.getElementById("messageappmain").innerHTML += `
                    <div class="inputdivformessage">
                <input type="text" id="inputformessage"> 
                <button onclick="sendformessage(${found})">
                    <span class="material-symbols-outlined">
                        send
                        </span>
                </button>
              </div>
              `
        for (let i = 0; i < messagearray[found].message.length; i++) {
            const element = messagearray[found].message[i];

            if (element.from == "someoneelse") {
                document.getElementById("contectoftheindex").innerHTML +=
                    `

        <aside class="messageforsomeoneels" id="messageforsomeoneels">
            ${element.content}
        </aside>

        `
            } else {
                document.getElementById("contectoftheindex").innerHTML +=
                    `
        <aside class="messageforme" id="messageforme">
        ${element.content}
        </aside>


        `
            }
        }
        document.getElementById("addtomessagebut").style.display = "none"


    }
    else {
        messagearray.push(
            {
                Image: contactarray[index].Image,
                name: contactarray[index].name,
                phonenumber: contactarray[index].phonenumber,
                message: []
            }
        )
        console.log(messagearray);
        console.log(messagearray[2]);
        document.getElementById("messageappheader").innerHTML = `<button class="backtomessage" id="backtomessage" onclick="backtomessage()">
                <span class="material-symbols-outlined">
                    arrow_back
                    </span>
            </button>`+ messagearray[messagearray.length - 1].name
        document.getElementById("messageappmain").innerHTML = ""
        document.getElementById("messageappmain").innerHTML = `
                    <div class="contectoftheindex" id="contectoftheindex">
                </div>
              `
        document.getElementById("messageappmain").innerHTML += `
                    <div class="inputdivformessage">
                <input type="text" id="inputformessage"> 
                <button onclick="sendformessage(${messagearray.length - 1})">
                    <span class="material-symbols-outlined">
                        send
                        </span>
                </button>
              </div>
              `
        for (let i = 0; i < messagearray[messagearray.length - 1].message.length; i++) {
            const element = messagearray[messagearray.length - 1].message[i];

            if (element.from == "someoneelse") {
                document.getElementById("contectoftheindex").innerHTML +=
                    `

        <aside class="messageforsomeoneels" id="messageforsomeoneels">
            ${element.content}
        </aside>

        `
            } else {
                document.getElementById("contectoftheindex").innerHTML +=
                    `
        <aside class="messageforme" id="messageforme">
        ${element.content}
        </aside>


        `
            }
        }
        document.getElementById("addtomessagebut").style.display = "none"

    }


    console.log(messagearray);



}
function addintomessagehis(index) {


    console.log(historyarray[index]);

    let found = messagearray.findIndex((current) => current.phonenumber == historyarray[index].phonenumber && current.name == historyarray[index].name);

    console.log(found);



    if (found >= 0) {



        document.getElementById("messageappheader").innerHTML = `<button class="backtomessage" id="backtomessage" onclick="backtomessage()">
                <span class="material-symbols-outlined">
                    arrow_back
                    </span>
            </button>`+ messagearray[found].name
        document.getElementById("messageappmain").innerHTML = ""
        document.getElementById("messageappmain").innerHTML = `
                    <div class="contectoftheindex" id="contectoftheindex">
                </div>
              `
        document.getElementById("messageappmain").innerHTML += `
                    <div class="inputdivformessage">
                <input type="text" id="inputformessage"> 
                <button onclick="sendformessage(${found})">
                    <span class="material-symbols-outlined">
                        send
                        </span>
                </button>
              </div>
              `
        for (let i = 0; i < messagearray[found].message.length; i++) {
            const element = messagearray[found].message[i];

            if (element.from == "someoneelse") {
                document.getElementById("contectoftheindex").innerHTML +=
                    `

        <aside class="messageforsomeoneels" id="messageforsomeoneels">
            ${element.content}
        </aside>

        `
            } else {
                document.getElementById("contectoftheindex").innerHTML +=
                    `
        <aside class="messageforme" id="messageforme">
        ${element.content}
        </aside>


        `
            }
        }
        document.getElementById("addtomessagebut").style.display = "none"


    }
    else {
        messagearray.push(
            {
                Image: historyarray[index].Image,
                name: historyarray[index].name,
                phonenumber: historyarray[index].phonenumber,
                message: []
            }
        )

        document.getElementById("messageappheader").innerHTML = `<button class="backtomessage" id="backtomessage" onclick="backtomessage()">
                <span class="material-symbols-outlined">
                    arrow_back
                    </span>
            </button>`+ messagearray[messagearray.length - 1].name
        document.getElementById("messageappmain").innerHTML = ""
        document.getElementById("messageappmain").innerHTML = `
                    <div class="contectoftheindex" id="contectoftheindex">
                </div>
              `
        document.getElementById("messageappmain").innerHTML += `
                    <div class="inputdivformessage">
                <input type="text" id="inputformessage"> 
                <button onclick="sendformessage(${messagearray.length - 1})">
                    <span class="material-symbols-outlined">
                        send
                        </span>
                </button>
              </div>
              `
        for (let i = 0; i < messagearray[messagearray.length - 1].message.length; i++) {
            const element = messagearray[messagearray.length - 1].message[i];

            if (element.from == "someoneelse") {
                document.getElementById("contectoftheindex").innerHTML +=
                    `

        <aside class="messageforsomeoneels" id="messageforsomeoneels">
            ${element.content}
        </aside>

        `
            } else {
                document.getElementById("contectoftheindex").innerHTML +=
                    `
        <aside class="messageforme" id="messageforme">
        ${element.content}
        </aside>


        `
            }
        }
        document.getElementById("addtomessagebut").style.display = "none"

    }


    console.log(messagearray);

}

// calendar



 // Get the elements we need to interact with
 const yearSelect = document.getElementById("year");
 const prevButton = document.getElementById("prev");
 const nextButton = document.getElementById("next");
 const calendar = document.getElementById("calendarr");

 // Set the default year to the current year
 let year = new Date().getFullYear();

 // Set the default month to the current month
 let month = new Date().getMonth();


function Calendar() {

    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML = `
    
    <section class="calendarsection">
    <h1>Calendar</h1>
    <div id="calendarr" class="calendarr"></div>
    <div id="controls">
      <button id="prev"><span class="material-symbols-outlined">
          skip_previous
        </span></button>
      <select id="year"></select>
      <button id="next"><span class="material-symbols-outlined">
          skip_next
        </span></button>
    </div>
  </section> 
    
    `

    
    document.getElementById("foot").innerHTML = `
    
    <button onclick="home()">
        <span class="material-symbols-outlined">play_arrow</span>
    </button>
    <button>
        <span class="material-symbols-outlined">check_box_outline_blank</span>
    </button>
    <button>
        <span class="material-symbols-outlined">radio_button_unchecked</span>
    </button>

`

  // Get the elements we need to interact with
  const yearSelect = document.getElementById("year");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const calendar = document.getElementById("calendarr");

  // Set the default year to the current year
  let year = new Date().getFullYear();

  // Set the default month to the current month
  let month = new Date().getMonth();

  // Populate the year select with options from the current year to 10 years in the future
  for (let i = year; i <= year + 10; i++) {
    yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
  }

  // Render the initial calendar
  renderCalendar();

  // Add event listeners to the year select and navigation buttons
  yearSelect.addEventListener("change", renderCalendar);
  prevButton.addEventListener("click", () => {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    renderCalendar();
  });
  nextButton.addEventListener("click", () => {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    renderCalendar();
  });

  // Render the calendar based on the current year and month
  function renderCalendar() {
    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Create the calendar header
    const header = document.createElement("h2");
    header.textContent = `${year} - ${month + 1}`;
    calendar.innerHTML = "";
    calendar.appendChild(header);

    // Create the calendar table
    const table = document.createElement("table");

    // Create the table header row
    const headerRow = document.createElement("tr");
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
      const th = document.createElement("th");
      th.textContent = day;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Calculate the date of the first day of the month
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Create the table rows for the days
    let row = document.createElement("tr");
    for (let i = 0; i < firstDayOfMonth; i++) {
      const td = document.createElement("td");
      row.appendChild(td);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const td = document.createElement("td");
      td.textContent = i;
      row.appendChild(td);
      if (row.children.length === 7) {
        table.appendChild(row);
        row = document.createElement("tr");
      }
    }
    if (row.children.length > 0) {
      for (let i = row.children.length; i < 7; i++) {
        const td = document.createElement("td");
        row.appendChild(td);
      }
      table.appendChild(row);
    }

    calendar.appendChild(table);
  }

 
}

function camera() {
    
    document.getElementById("section1").innerHTML = ""
    document.getElementById("section1").innerHTML = `
    <section class="cameraapp">
    <div class="cameraa" id="cameraaa">
        <video src="" id="videooo" autoplay></video>
    </div>
    <div class="footerofcam">

        <button class="footerofcambut" onclick="takepic()">
            <span class="material-symbols-outlined">
                camera
            </span>
        </button>

        <canvas onclick="gotophotoapp()" class="footerofcamcan" id="canvasss">

        </canvas>
    </div>
</section>
    
    `
    document.getElementById("foot").innerHTML = `
    
    <button onclick="home()">
        <span class="material-symbols-outlined">play_arrow</span>
    </button>
    <button>
        <span class="material-symbols-outlined">check_box_outline_blank</span>
    </button>
    <button>
        <span class="material-symbols-outlined">radio_button_unchecked</span>
    </button>

`
let canvasss = document.getElementById("canvasss")
let canscreennn = document.getElementById("cameraaa")
let videooo = document.getElementById("videooo")
async function startcam() {
    let strem = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    videooo.srcObject = strem;
}startcam()


} 
function takepic() {
    canvasss.getContext("2d").drawImage(videooo, 0, 0, canvasss.width, canvasss.height)
    let theimgurl = canvasss.toDataURL("image/png")
    console.log(theimgurl);
    photoarray.push(theimgurl)
}
function gotophotoapp() {
    console.log("me");
    photo()
}
 

   
  
