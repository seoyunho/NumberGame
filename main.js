var answer;
var count = 10;
var userAnswer;

function goFinish(){
    location.href='./finishgame.html';
}
function getAnswer() {
    return document.getElementById('user_answer').value;
}

function start() {
    console.log('함수 호출');
    answer = Math.floor(Math.random() * 10) + 1;
    console.log(answer);
    document.getElementById('start_game').style.display='none';
    document.getElementById('in_game').style.visibility='visible';
}

function checkNumber() {
    userAnswer = getAnswer();
    if (userAnswer == answer) {
        alert('정답!!!!');
        goFinish();
    } else if (10 >= userAnswer > answer) {
        alert('down');
        count--;
        alert(count + '번 남았습니다.')
    } else if (0 <= userAnswer < answer) {
        alert('up');
        count--;
        alert(count + '번 남았습니다.')
    } else {
        alert('1~10까지의 수를 입력해주세요');
    }
}