function pop_up() {
    window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
}

function show_clock() {
    let currentDate = new Date(); // 현재 시스템 날짜 객체 생성
    let divClock = document.getElementById('divClock');
    let msg = "현재시간: ";

    if (currentDate.getHours() > 12) {  // 12시보다 크면 오후, 아니면 오전
        msg += "오후 ";
        msg += (currentDate.getHours() - 12) + "시 ";
    } else {
        msg += "오전 ";
        msg += currentDate.getHours() + "시 ";
    }

    msg += currentDate.getMinutes() + "분 ";
    msg += currentDate.getSeconds() + "초";

    divClock.innerText = msg;

    if (currentDate.getMinutes() > 58) { // 정각 1분 전 빨강색 출력
        divClock.style.color = "red";
    } else {
        divClock.style.color = "black"; // 이 줄 추가하면 평소엔 검정으로
    }

    setTimeout(show_clock, 1000); // 1초마다 갱신
}

function over(obj) {
    obj.src = "image/logo.png";
}

function out(obj) {
    obj.src = "image/wish.jpg";
}


// 상대경로 : 내가 추가한거 > js/js_popup.js 이런 거
// 절대경로 : 도메인 링크 주소 > http://127.0.0.1:5500/popup/popup.html
// "../" : 한 단계 상위 폴더로 나간다는 의미 → js 안에서 popup 상위 폴더로 나가게 해줌
