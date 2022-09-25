function goldMine(input) {

    let index = 0;
    let locations = Number(input[index]);
    index++;

    for(let i = 1; i <= locations; i++) {
        let expectedIncome = Number(input[index]);
        index++;
        let daysMining = Number(input[index]);
        index++
        let totalMined = 0;
        let averageDayIncome = 0;
        for(let y = 1; y <= daysMining; y++) {
            let income = Number(input[index]);
            index++;
            totalMined += income;
            averageDayIncome = totalMined / daysMining;

            
        }
        if(averageDayIncome >= expectedIncome) {
            console.log(`Good job! Average gold per day: ${averageDayIncome.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedIncome - averageDayIncome).toFixed(2)} gold.`)
        }

    }

}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"]);