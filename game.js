player1_UserID = localStorage.getItem("player1_username");
player2_UserID = localStorage.getItem("player2_username");

player1_Score = 0;
player2_Score = 0;

document.getElementById("player1_name").innerHTML = player1_UserID + ":";
document.getElementById("player2_name").innerHTML = player2_UserID + ":";

document.getElementById("player1_score").innerHTML = player1_Score;
document.getElementById("player2_score").innerHTML = player2_Score;

document.getElementById("player_question").innerHTML = "question turn :" + player1_UserID;
document.getElementById("player_answer").innerHTML = "answer turn :" + player2_UserID;

function send() {


    numb1 = document.getElementById("num1").value;
    numb2 = document.getElementById("num2").value;
    symb = "+";

    Qusetion_box = "<h5 id='display_question'>" + numb1 + symb + numb2 + "</h5>";
    answer_input = "<input id='answer_box'>";
    check_button = "<button id='check_button' onclick='check();'>check</button>";

    row = Qusetion_box + answer_input + check_button;
    document.getElementById("output").innerHTML = row;
}


question_turn = "player1";
answer_turn = "player2";

function check() {
    correct_ans = numb1 + numb2;

    if (answer_input == correct_ans) {
        if (answer_turn = "player1") {
            player1_Score = player1_Score + 1;
            document.getElementById("player1_score").innerHTML = player1_Score;
        } else {
            player2_Score = player2_Score + 1;
            document.getElementById("player2_score").innerHTML = player2_Score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
    } else {
        question_turn = "player1"
    }



    if (answer_turn == "player1") {
        answer_turn = "player2"
    } else {
        answer_turn = "player1"
    }
}