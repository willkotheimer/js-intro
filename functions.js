console.log("functions");

const nuggetizer = animal => {
    return `processed ${animal}`;
}

console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('chicken'));

const plusforty2 = number => {
    return 42 + (number || 0);
}

console.log(plusforty2(1));
console.log(plusforty2())

const birthyearthing = year => `In 2099 you will be ${2099 - year}`;
console.log(birthyearthing(1976));



