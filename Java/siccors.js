function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    let imgSrc = "";

    if (playerChoice === computerChoice) {
        result = "It's a draw! Both chose " + playerChoice + ".";
        imgSrc = "../Bent/Bilder/draw.webp"; // Use your draw image path
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You win! " + playerChoice + " beats " + computerChoice + ".";
        imgSrc = "../Bent/Bilder/win.webp"; // Use your win image path
    } else {
        result = "You lose! " + computerChoice + " beats " + playerChoice + ".";
        imgSrc = "../Bent/Bilder/lose.jpg"; // Use your lose image path
    }

    document.getElementById("result").innerText = result;
    document.getElementById("image").innerHTML = `<img src="${imgSrc}" alt="Result Image" style="max-width:200px;">`;
}

