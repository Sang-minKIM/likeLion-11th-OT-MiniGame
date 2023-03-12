const clock = document.querySelector(".clock");
const btn = document.querySelector(".btn__start");
let seconds = 60;
let toggle = false;
let done = true;

const getSeconds = () => {
    seconds--;
    clock.innerText = `남은 시간 : ${seconds}초`;
    if (seconds === 0) {
        clearInterval(timer);
        toggle = false;
        done = true;
    }
};

let timer = setInterval(getSeconds, 1000);
clearInterval(timer);

const onClick = () => {
    if (done) {
        getPhoto();
    }
    done = false;
    if (seconds === 0) {
        seconds = 60;
    }
    if (toggle) {
        clearInterval(timer);
        btn.innerText = "시작";
        toggle = false;
    } else {
        timer = setInterval(getSeconds, 1000);
        btn.innerText = "일시중지";
        toggle = true;
    }
};

btn.addEventListener("click", onClick);
