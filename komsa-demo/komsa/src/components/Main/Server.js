
/*
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";


export default function getServerData(){
    // 1. 웹소켓 클라이언트 객체 생성
    // const webSocket = new WebSocket(process.env.WEBSOKET_IP);
    const webSocket = new WebSocket("ws://211.180.78.170:58085");
    var res_data;

    // 2. 웹소켓 이벤트 처리
    // 2-1) 연결 이벤트 처리
    webSocket.onopen = () => {
        console.log("\n\rwebsocket connection succeed!");
    };

    // 2-2) 메세지 수신 이벤트 처리
    webSocket.onmessage = function (event) {
        console.log("\n\r서버 웹소켓에게 받은 데이터: " + event.data);

        res_data = JSON.parse(event.data);
        // res_data = res_data.replace('[', "");
        // res_data = res_data.replace(']', "");
        // res_data = res_data.replace('{', ""); 
        // res_data = res_data.replace('}', "");
        // res_data = res_data.replace(',', "");
        // res_data = res_data.split('"');

        for ( var i in res_data ) {
            console.log(res_data[i]);
        }

    }

    // 2-3) 연결 종료 이벤트 처리
    webSocket.onclose = function () {
        console.log("\n\r서버 웹소켓 연결 종료");
    }

    // 2-4) 에러 발생 이벤트 처리
    webSocket.onerror = function (event) {
        console.log("\n\r" + event);
    }

    // // 3. 버튼 클릭 이벤트 처리
    // // 3-1) 웹소켓 서버에게 메세지 보내기
    // let count = 1;
    // document.getElementById("btn_send").onclick = function () {
    //     if (webSocket.readyState === webSocket.OPEN) { // 연결 상태 확인
    //         webSocket.send(`증가하는 숫자를 보냅니다 => ${count}`); // 웹소켓 서버에게 메시지 전송
    //         count++; // 보낼때마다 숫자를 1씩 증가
    //     } else {
    //         alert("연결된 웹소켓 서버가 없습니다.");
    //     }
    // }

    // // 3-2) 웹소켓 서버와 연결 끊기
    // document.getElementById("btn_close").onclick = function () {
    //     if (webSocket.readyState === webSocket.OPEN) { // 연결 상태 확인
    //         webSocket.close(); // 연결 종료
    //     } else {
    //         alert("연결된 웹소켓 서버가 없습니다.");
    //     }
    // }

    console.log("export default function getServerData()::"+res_data)
    return res_data;
}
*/

/*
// 1. 웹소켓 클라이언트 객체 생성
// const webSocket = new WebSocket(process.env.WEBSOKET_IP);
const webSocket = new WebSocket("ws://211.180.78.170:58085");
var res_data;

// 2. 웹소켓 이벤트 처리
// 2-1) 연결 이벤트 처리
webSocket.onopen = () => {
    console.log("\n\rwebsocket connection succeed!");
};

// 2-2) 메세지 수신 이벤트 처리
webSocket.onmessage = function (event) {
    console.log("\n\r서버 웹소켓에게 받은 데이터: " + event.data);
    res_data = JSON.parse(event.data);
    // res_data = res_data.replace('[', "");
    // res_data = res_data.replace(']', "");
    // res_data = res_data.replace('{', ""); 
    // res_data = res_data.replace('}', "");
    // res_data = res_data.replace(',', "");
    // res_data = res_data.split('"');
    for ( var i in res_data ) {
        console.log(res_data[i]);
    }
}

// 2-3) 연결 종료 이벤트 처리
webSocket.onclose = function () {
    console.log("\n\r서버 웹소켓 연결 종료");
}

// 2-4) 에러 발생 이벤트 처리
webSocket.onerror = function (event) {
    console.log("\n\r" + event);
}

// // 3. 버튼 클릭 이벤트 처리
// // 3-1) 웹소켓 서버에게 메세지 보내기
// let count = 1;
// document.getElementById("btn_send").onclick = function () {
//     if (webSocket.readyState === webSocket.OPEN) { // 연결 상태 확인
//         webSocket.send(`증가하는 숫자를 보냅니다 => ${count}`); // 웹소켓 서버에게 메시지 전송
//         count++; // 보낼때마다 숫자를 1씩 증가
//     } else {
//         alert("연결된 웹소켓 서버가 없습니다.");
//     }
// }

// // 3-2) 웹소켓 서버와 연결 끊기
// document.getElementById("btn_close").onclick = function () {
//     if (webSocket.readyState === webSocket.OPEN) { // 연결 상태 확인
//         webSocket.close(); // 연결 종료
//     } else {
//         alert("연결된 웹소켓 서버가 없습니다.");
//     }
// }
*/