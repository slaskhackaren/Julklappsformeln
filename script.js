function calculatePresentScore() {
    // Retrieve values from input fields
    const price = parseFloat(document.getElementById("price").value);
    const optimalSum = parseFloat(document.getElementById("optimalSum").value);
    const empathy = parseFloat(document.getElementById("empathy").value);
    const usefulness = parseFloat(document.getElementById("usefulness").value);
    const surprise = parseFloat(document.getElementById("surprise").value);
    const selfishness = parseFloat(document.getElementById("selfishness").value);

    // Validate input values
    if (isNaN(price) || isNaN(optimalSum) || isNaN(empathy) || isNaN(usefulness) || isNaN(surprise) || isNaN(selfishness)) {
        document.getElementById("result").innerText = "Please enter valid numbers for all fields.";
        return;
    }

    // Calculation logic
    const exponentPart = (optimalSum - Math.abs(optimalSum - price)) / optimalSum;
    const score = (empathy * 2) - selfishness + usefulness + surprise + Math.pow(exponentPart, 2);
    const averageScore = score / 4;

    // Determine result message
    let message = `Ditt medelvärde på din julklapp är: ${averageScore.toFixed(2)}.\n`;
    if (averageScore >= 10) {
        message += "Det är med andra ord en väldigt bra julklapp!!!";
    } else if (averageScore >= 7) {
        message += "Det är med andra ord en ganska bra julklapp";
    } else if (averageScore >= 5) {
        message += "Det är med andra ord en helt ok julklapp...";
    } else if (averageScore >= 3) {
        message += "Det är med andra ord en dålig julklapp...";
    } else {
        message += "Det är med andra ord en riktigt dålig julklapp... fy skäms!";
    }

    // Display result
    document.getElementById("result").innerText = message;
}
