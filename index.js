// 시작줄 시간 찍기 /////////////////////////////////////////////
var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm = "AM";
    if (hours > 12) {
        var AmPm = "PM";
        hours %= 12;
    }

    Target.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    Target_apm.innerHTML = `${AmPm}`;

}
clock();
setInterval(clock, 1000); // 1초마다 실행
// 시간 줄 찍기 //////////////////////////////////////////////


// 메인 ////////////////////////////////////////////////////////////////////////

// 미디어쿼리 js -> 화면이 좁아졌을 때
function random(min, max){ // min 30, max 70
    return Math.floor(min + (Math.random() * (max - min + 1)));
}



const inner = document.querySelectorAll(".inner");


for (let i = 0; i < inner.length; i++) {

    inner[i].addEventListener('click',
        function () {
            // console.log (this);
                showModal(this.querySelector('p').textContent, 200 + (Math.random() * 100), 300 + (Math.random() * 100))
        }
    );
}


function showModal(title, x, y) {

    const modals = [...document.querySelectorAll(".modal .title > div")];
    for (const i in modals) {
        if (modals[i].textContent == title) {

            document.querySelectorAll('.modal')[i].style.display = "";
            return;
        }

    }

    let content = "";
    if (title == "내 컴퓨터") {
        content = "내 컴퓨터입니다";
    } else if (title == "자료실") {
        content = "자료실 입니다.";
    } else if (title == "TimeLine") {
        content = "TimeLine 입니다.";
    } else if (title == "Portfolio") {
        content = "Portfolio 입니다.";
    } else {
        // content = "Contact 입니다.";
        content = `<div onclick="window.open('https://www.naver.com');" style="cursor:pointer;">>클릭<</div>`
    }

    const modal = document.createElement("div");
    modal.className = "modal";
    // <div class="modal"></div>
    modal.innerHTML = `
  <div class="title"><div>${title}</div><span class="close">X</span></div>
  <div class="content">${content}</div>
  `;


    // modal.style.left = random(0, document.body.clientWidth - 200) + "px";
    // modal.style.top = random(0, document.body.clientHeight - 200) + "px";
    console.log("생성 직후 A", modal.clientWidth);
    document.querySelector(".modal-wrap").append(modal);
    console.log("생성 직후 B", modal.clientWidth);
    modal.style.left = random(0, document.body.clientWidth - 200) + "px";
    modal.style.top = random(0, document.body.clientHeight - 200) + "px";

    modal.querySelector('.close').addEventListener('click', function () {
        // modal.remove();
        modal.style.display = "none";
    });

    // Z-index 처리
    modal.addEventListener('click', function () {
        for (const i of document.querySelectorAll(".modal")) {
            i.style.zIndex = "";
        }
        modal.style.zIndex = 1;
    })

    // 마우스의 기본상태
    // 눌리지 않은 상태가 false
    let isMouseDown = false;

    // 마우스의 x,y 에 대한 좌표값 초기화 변수 배열과 비슷
    let layerMousePosition = {
        x: 0,
        y: 0,
    };
    // 쿼리를 선택하여 변수에 대입.


    const layer = modal.querySelector(".title");

    // 마우스가 눌렸을 때
    layer.addEventListener("mousedown", (event) => {
        // 눌린 순간에 마우스의 x값과 y값을 변수에 대입

        layerMousePosition.x = event.clientX;
        layerMousePosition.y = event.clientY;

        // 마우스가 눌렸기 때문에 해당 값은 true;

        isMouseDown = true;
    });



    // 마우스를 땠을 때
    document.addEventListener("mouseup", (event) => {
        // 마우스가 선택을 멈췄을 때 기본상태인 false로 처리해준다.
        isMouseDown = false;
    });

    // 마우스를 이동했을 때
    document.addEventListener("mousemove", (event) => {
        // isMouseDown이 true, 이동중이라면 retrun
        if (!isMouseDown) return;
        // 이동중이 아니라면 아래 코드 실행
        // 새로 만든 x,y 좌표값 변수에 눌린 순간의 좌표값에 지금 좌표값을 넣음.
        const X = layerMousePosition.x - event.clientX;
        const Y = layerMousePosition.y - event.clientY;

        // 눌린 순간의 좌표값에 지금 좌표값을 넣음
        layerMousePosition.x = event.clientX;
        layerMousePosition.y = event.clientY;

        // 해당 좌표값을 style의 left, top에 좌표를 대입함
        modal.style.left = (modal.offsetLeft - X) + "px";
        modal.style.top = (modal.offsetTop - Y) + "px";
    });

}

// 메인 ////////////////////////////////////////////////////////////////////////


// footer ///////////////////////////////////////////////////////////////

// start창 모달
const start = document.querySelector('.start');
const startmodal = document.querySelector('.startmodal');
start.addEventListener('click', function () {
    startmodal.classList.toggle('hide');
    start.classList.toggle('shadow');
})

// 바탕화면을 눌러도 start 창이 닫아지게
document.querySelector('#main').addEventListener('click', function () {
    startmodal.classList.add('hide');
    start.classList.remove('shadow');
})




const p = document.querySelectorAll('.btmodal>p');
const sidemodal = document.querySelectorAll('.sidemodal');
for (let i = 0; i < p.length; i++) {
    p[i].addEventListener('mouseover', function () {
        sidemodal[i].classList.add('open');
    })

    p[i].addEventListener('mouseout', function () {
        sidemodal[i].classList.remove('open');
    })
}

// footer ///////////////////////////////////////////////////////////////

// fticon 클릭시 동일한 모달창 띄우기
const fticon = document.querySelectorAll(".fticon");
for (let i = 0; i < fticon.length; i++) {
    fticon[i].addEventListener('click',
        function () {
            // console.log (this);

            showModal(this.querySelector('p').textContent, 200 + (Math.random() * 100), 300 + (Math.random() * 100))

        }
    );
}



// let modal = document.querySelectorAll('.modal');

