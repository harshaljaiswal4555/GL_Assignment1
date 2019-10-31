var chances = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function NextPage() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Yes");

    if (username == "turing" && password == "0000") {
        console.log("Yes");
        window.location.href = "page.html";
        return false;
    }
    else {  
        chances--;// Decrementing by one.
        alert("You have left " + chances + " attempt;");
        // Disabling fields after 3 attempts.
        if (chances == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("signin").disabled = true;
            return false;
        }
    }
}