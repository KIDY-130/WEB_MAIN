export function session_set() { //세션 저장
    let session_id = document.querySelector("#typeEmailX");
    let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    if (sessionStorage) {
     let en_text = encrypt_text(session_pass.value);
     sessionStorage.setItem("Session_Storage_test", session_id.value);
     sessionStorage.setItem("Session_Storage_pass", en_text);
     
    } else {
        alert("로컬 스토리지 지원 x");
    }
}
function init_logined(){
    if(sessionStorage){
        decrypt_text(); // 복호화 함수
    }
    else{
        alert("세션 스토리지 지원 x");
    }
 }
export function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_pass");
    } else {
        alert("세션 스토리지 지원 x");
    }
}
export function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_test")) {
     alert("이미 로그인 되었습니다.");
     location.href='../login/index_login.html';
    }
}
function session_del() {//세션 삭제
    if (sessionStorage) {
     sessionStorage.removeItem("Session_Storage_test");
     alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
     } else {
     alert("세션 스토리지 지원 x")
     }
}
function encrypt_text(password){
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = this.encodeByAES256(rk, b); // 실제 암호화
    return eb;
    console.log(eb);
}

function decrypt_text(){
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get();
    const b = this.decodeByAES256(rk, eb); // 실제 복호화
   console.log(b); 
}
   