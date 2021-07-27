function addUser() {

    player1_username = document.getElementById("player1_username").value;
    player2_username = document.getElementById("player2_username").value;

    localStorage.setItem("player1_username", player1_username);
    localStorage.setItem("player2_username", player2_username);

    window.location.replace("page.html")
}