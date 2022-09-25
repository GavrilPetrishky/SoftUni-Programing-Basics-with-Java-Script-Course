function tournamentOfChristmas(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;
    let totalMoney = 0;
    let dayWinCounter = 0;
    let dayLoseCounter = 0;
    for(let i = 1; i <= days; i++) {
        let command = input[index];
        index++;
        let winCounter = 0;
        let loseCounter = 0;
        
        let dayMoney = 0;
        while(command !== "Finish") {
            let sport = command;
            let result = input[index];
            index++;
            if(result === "win") {
                winCounter++;
                dayMoney += 20;
            } else {
                loseCounter++;
            }
            
            command = input[index];
            index++;
        }
        if(winCounter > loseCounter) {
            dayMoney = dayMoney * 1.1;
            dayWinCounter++;
        } else {
            dayLoseCounter++;
        }
        totalMoney += dayMoney;

    }
    if(dayWinCounter > dayLoseCounter) {
        totalMoney *= 1.2;
    }
    if(dayWinCounter > dayLoseCounter) {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }


}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);