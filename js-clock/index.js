const palkasec = document.querySelector(".palka__sec");
const palkamin = document.querySelector(".palka__min");
const palkahour = document.querySelector(".palka__hour")

const palkasec2 = document.querySelector(".palka__sectwo");
const palkamin2 = document.querySelector(".palka__mintwo");
const palkahour2 = document.querySelector(".palka__hourtwo")

const palkasec3 = document.querySelector(".palka__secthree");
const palkamin3 = document.querySelector(".palka__minthree");
const palkahour3 = document.querySelector(".palka__hourthree")


function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const nowsec = ((sec / 60) * 360) + 90;
    palkasec.style.transform = `rotate(${nowsec}deg)`;

    const min = now.getMinutes();
    const nowmin = ((min / 60) * 360) + 90;
    palkamin.style.transform = `rotate(${nowmin}deg)`;

    const hour = now.getHours();
    const nowhour = ((hour / 12) * 360) + 90;
    palkahour.style.transform = `rotate(${nowhour}deg)`;


    setInterval(setDate, 1000);
    currentDate();
}
function currentDate() {
    const datetime = document.querySelector('.datetime');
    const date = new Date();
    const options = {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    };

    datetime.innerHTML = date.toLocaleString("en-En", options)

}



function setDateTwo() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const nw = new Date(utc + (3600000 * 8));
    const sec = nw.getSeconds();
    const nowsec = ((sec / 60) * 360) + 90;
    palkasec2.style.transform = `rotate(${nowsec}deg)`;

    const min = nw.getMinutes();
    const nowmin = ((min / 60) * 360) + 90;
    palkamin2.style.transform = `rotate(${nowmin}deg)`;

    const hour = nw.getHours();
    const nowhour = ((hour / 12) * 360) + 90;
    palkahour2.style.transform = `rotate(${nowhour}deg)`;

    setInterval(setDateTwo, 1000);
    currentDatetwo()

    function currentDatetwo() {
        const datetimetwo = document.querySelector(".datetime__two");
        const options = {
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            day: 'numeric'
        };
        datetimetwo.innerHTML = nw.toLocaleString("en-En", options);

    }
}

function setDateThree() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const nw = new Date(utc + (3600000 * 2));
    const sec = nw.getSeconds();
    const nowsec = ((sec / 60) * 360) + 90;
    palkasec3.style.transform = `rotate(${nowsec}deg)`;

    const min = nw.getMinutes();
    const nowmin = ((min / 60) * 360) + 90;
    palkamin3.style.transform = `rotate(${nowmin}deg)`;

    const hour = nw.getHours();
    const nowhour = ((hour / 12) * 360) + 90;
    palkahour3.style.transform = `rotate(${nowhour}deg)`;

    setInterval(setDateThree, 1000);
    currentDateThree()

    function currentDateThree() {
        const datetimethree = document.querySelector(".datetime__three");
        const options = {
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            day: 'numeric'
        };
        datetimethree.innerHTML = nw.toLocaleString("en-En", options);

    }
}









setDate();
setDateTwo();
setDateThree();