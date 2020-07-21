//console.log("arrays");

//SPLIT

// const bestFriend = "Trinity";

// const bestFriendArray = bestFriend.split("");
// console.log(bestFriendArray);

//JOIN
// const array2 = ["cow", "dog", "cat"];
// const string = array2.join(',');
// console.log(string);
// const string2 = string.split(',');
// console.log(string2);

//POP

const array2 = ["cow", "dog", "cat"];

const lastAnimal = array2.pop();
console.log(lastAnimal, array2);

//SHIFT

const first = array2.shift();
console.log(first, array2);

//UNSHIFT and PUSH

array2.unshift(first);
array2.push(lastAnimal);
console.log(array2);

//Write a function that takes an array and an index and prints
// out the value:

const takesarrayindex = (array1, index) => array1[index];
console.log(takesarrayindex(array2, 2));

//Write a function that takes an array of something and
//tells you if the name Greg is in the array:

const greginarray = (myArray) => {
    for (var i in myArray) {

        if (myArray[i] == 'Greg') {
            return `yes`
        }
    }
    return `no`;
}

const greginarray2 = (myArray) => myArray.includes("Greg") ? `yes` : `no`;

const thisArr = ["Will", "Max", "Rachel", "Greg"];
console.log(greginarray(thisArr));

console.log(greginarray2(thisArr));