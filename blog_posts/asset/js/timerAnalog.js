const timerDemo = document.querySelector('#timerDemo');
const hourHand = document.querySelector('#hourHand');
const minuteHand = document.querySelector('#minuteHand');
const secondHand = document.querySelector('#secondHand');

onload = 
function startTime() {
    var today = new Date();
    //retrieve date
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // 360 / number of stops
    hourHand.style.transform = `rotate(${h * 30}deg)`;
    minuteHand.style.transform = `rotate(${m * 6}deg)`;
    secondHand.style.transform = `rotate(${s * 6}deg)`;
    setTimeout(startTime, 1000);
}