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
function random(min, max) { // min 30, max 70
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
        content = `<article>
        <div class="home_image"><img src="img/window.svg" alt="증명사진"></div>
        <div class="home_text">
            <h2>자기소개</h2>
            <p>안녕하세요, 프론트엔드 이정우입니다. 프론트엔드 개발자로서 1년간의 경력을 보유하고 있으며 차별화된 능력과 열정으로 회사에 기여하고 싶습니다.</p>
        </div>
        </article>`;
    } else if (title == "자료실") {
        content = `<h3>경력 개요</h3>
        <p>
        현재 니트로아이 학교사업부에서 프론트엔드 개발자로 일하고 있습니다. 이곳에서의 경험을 통해 뛰어난 HTML, CSS, JavaScript 기술을 활용하여 8개의 교육청 학교 홈페이지 개발 및 유지보수에 기여하였습니다. 특히, 교육지원청 개편 사업에서 기능 개발 협의 및 전반적인 프로젝트 총괄적인 진행을 이루어낸 경험이 있으며, 팀 내외에서의 협업 능력을 통해 프로젝트의 효율적인 진행에 기여하였습니다.</p>
        <h3>기술적 강점</h3>
        <p>
        HTML, CSS, JavaScript에 대한 이해와 기술력을 보유하고 있습니다. 적절한 시멘틱 태그를 사용함으로써 가독성이 좋은 코드를 짜기 위해 노력하고 있습니다.</p>
        <h3>역량과 성과</h3>
        <p>
        융화력과 책임감이라는 두 가지 큰 장점을 지녔습니다. 팀 프로젝트에서 다양한 의견을 수렴하고 통합함으로써 회의 내용을 클라이언트와 조율하며 프로젝트를 안정적으로 이루어내었습니다. 또한, 업무에 대한 책임감을 바탕으로 시켜서 하는 업무가 아닌 더 편리한 기능을 생각하며 향후 유지보수가 더 편리할 수 있도록 기존 코드를 리뉴얼하기도 하였습니다.</p>
        <p>
        마지막으로, 제 이력서를 읽어주셔서 감사합니다. 다양한 경험을 통해 더 나은 개발자로 성장하고, 회사의 성공에 함께 기여하고 싶습니다.
        
        감사합니다.</p>`;
    } else if (title == "TimeLine") {
        content = `<div><table><thead><td>학교명</td><td>전공</td><td>졸업상태</td></thead><tbody><tr><td>한국폴리텍대학교 아산캠퍼스</td><td>정보통신시스템 학과</td><td>졸업</td></tr></tbody></table><table><thead><td>교육기관</td><td>프로그램명</td><td>기간</td></thead><tbody><tr><td>그린컴퓨터아카데미 강남</td><td>프론트엔드 웹개발</td><td>2021.11 ~ 2021.12</td></tr><tr><td>한국소프트웨어기술진흥협회</td><td>MSA Full-Stack SW 개발자양성과정</td><td>2022.03 ~ 2022.08</td></tr></tbody></table></div>`;
    } else if (title == "Portfolio") {
        content = `<!--<div><a href="/portfolio/page/index.html" target="_blank">페이지</a></div>-->
         <div><a href="../todo/todo.html" target="_blank">투두리스트</a></div>
         <div><a href="https://github.com/veloperlee/leeveloper/tree/main/team-window-theme/lee/brochure" target="_blank">민간 학교 브로슈어(git)</div>`;
    } else {
        // content = "Contact 입니다.";
        content = `<div>PHONE: 010-8335-2805</div>
        <div>E-Mail: leevelope@naver.com</div>`
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
    // console.log("생성 직후 A", modal.clientWidth);
    document.querySelector(".modal-wrap").append(modal);
    // console.log("생성 직후 B", modal.clientWidth);
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


// 브라우저닫기
// function termination(){
//     window.close();
// }


