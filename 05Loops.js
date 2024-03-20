//Cycles

//While cycle

let i = 0;
while (i < 100) {
    console.log(i);
    i++;
}

//Do while cycle //DONT USE IT
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 100);

//For cycle
for (let k = 0; k < 100; k++) {
    console.log(k);
}

//Break and continue
let sum = 0
while (true) {
    sum += 1
    if (sum > 50) {
        break
    }

    for (let l = 0; l < 100; l++) {
        if (l % 2 === 0) {
            continue
        }
        console.log(l)
    }
}