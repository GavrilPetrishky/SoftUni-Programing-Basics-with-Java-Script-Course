function building(input) {

    let index = 0;
    let floors = Number(input[index]);
    index++;
    let rooms = Number(input[index]);
    index++;

    for(let i = floors; i > 0; i--) {
        let buff = "" ;
        for(let y = 0; y < rooms; y++) {
            if(i === floors) {
                buff += `L${i}${y} `;
            } else if(i % 2 === 0) {
                buff += `O${i}${y} `;
            } else {
                buff += `A${i}${y} `;
            }
        }
        console.log(buff);
    }
}
building(["6", "4"]);