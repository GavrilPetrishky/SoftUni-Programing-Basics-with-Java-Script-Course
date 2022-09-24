function barcodeGenerator(input) {

    let start = input[0];
    let end = input[1];

    let startInterval1 = Number(start[0]);
    let endInterval1 = Number(end[0]);
    let startInterval2 = Number(start[1]);
    let endInterval2 = Number(end[1]);
    let startInterval3 = Number(start[2]);
    let endInterval3 = Number(end[2]);
    let startInterval4 = Number(start[3]);
    let endInterval4 = Number(end[3]);

    
    let result = "";
    let buff = "" ;
    for (let i = startInterval1; i <= endInterval1; i++) {
        if (i % 2 === 0) {
            continue;
        }
        for (let j = startInterval2; j <= endInterval2; j++) {
            if (j % 2 === 0) {
                continue;
            }
            for (let y = startInterval3; y <= endInterval3; y++) {
                if (y % 2 === 0) {
                    continue;
                }
                for (let x = startInterval4; x <= endInterval4; x++) {
                    if (x % 2 === 0) {
                        continue;
                    }
                    
                    result = (`${i}${j}${y}${x}`);
                    buff += result + " ";
                    
                }
            }
        }
    }

    console.log(buff);
}
barcodeGenerator(["1365",
"5877"]);