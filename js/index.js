// dream4-room

$(setTimeout(function () {

    var userInput_3 = prompt("뭔지 다시 물어봐도 될까요?\n 알려주실래요?" + "")
    if (userInput_3 == null) {
        alert("뭐가 됐든 하고 싶은 일이 있다는 건 좋은거죠.")
    } else {
        alert("꿈 꾸는 당신은 늘 멋있네요.")
    }


    var userInput = prompt("마지막 질문!\n지금 당장 하고 싶은 게 있을까요? 사소한 거라도 좋아요.\n전 집에 가고 싶어요.")
    alert("실없는 질문들이었을 수도 있겠네요.\n그래도 꿈에 대해 한 번 돌아볼 기회가 생겼잖아요?\n안 그래요?")
    alert("무슨 일을 하던지 항상 응원할게요.\n속도는 중요하지 않아요. 나아가는 데에 의의가 있는거죠.")
    alert("귀여운 고양이로 마무리하겠습니다.")
    document.getElementById("background").src = "img/cat.png";
}, 1000));