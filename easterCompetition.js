function easterCompetition(input) {

    let index = 0;
    let count = Number(input[0]);
    index++;
    let maxPoints = 0;
    let winner = "";
    for(let i = 1; i <= count; i++) {
        let name = input[index];
        index++;
        let command = input[index];
        index++;
        let sumPoints = 0;
        
        while(command !== "Stop") {
            let grade = Number(command);
            sumPoints += grade;
            
            command = input[index];
            index++;
        }

        console.log(`${name} has ${sumPoints} points.`);
        if(sumPoints > maxPoints) {
            maxPoints = sumPoints;
            winner = name;
            console.log(`${name} is the new number 1!`);
        }

    }
    console.log(`${winner} won competition with ${maxPoints} points!`);

}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"]);