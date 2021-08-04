let geeWhizPos = [1, 2, 3, 4, -10],
    geeWhizNeg = [-1, -2, -3, -4, 10];

let createDeck = () => {
    let deck = [0, 0];
    while (deck.length < 62) {
        for (let i = 1; i < 11; i++) {
            for (let k = 0; k < 3; k++) {
                deck.push(i);
                deck.push(-i);
            }
        }
    }
    return deck;
}

let getColor = (perc) => {
    if (perc > .4) {
        return '#a1ff0a'
    } else if (perc > .3) {
        return '#deff0a'
    } else if (perc > .1) {
        return '#ffd300'
    } else if (perc > .05) {
        return '#ff8700'
    } else if (perc > 0) {
        return '#ff0000'
    }
}

let randomNumber = (n) => {
    let num = Math.floor(Math.random() * n)
    return num;
}

let total = (array) => {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}

let shuffle = (deck) => {
    let copyDeck = [...deck];
    let shuffledDeck = [];
    while (shuffledDeck.length < 62) {
        let ranNum = randomNumber(copyDeck.length);
        shuffledDeck.push(copyDeck[ranNum]);
        copyDeck.splice(ranNum, 1);
    }
    return shuffledDeck;
}

let compareArrays = (array1, array2) => {

    if (array1.length !== array2.length) {
        console.log('Arrays not the same length.')
        return false
    }

    let sortA = [...array1];
    let sortB = [...array2];

    sortA.sort();
    sortB.sort();

    for (let i = 0; i < sortA.length; i++) {
        if (sortA[i] !== sortB[i]) {
            return false
        }
    }

    return true;

}

let frequency = (array, n) => {
    // 1. Get the absolute value of each item in array.
    // 2. Set frequency variable to 0.
    let absArray = array.map(x => Math.abs(x)),
        freq = 0;
    // For each element of array check for paramater (n).
    for (let el of absArray) {
        if (el === n) {
            // Add 1 to frequency variable for everytime (n) is found.
            freq++
        }
    }

    return freq;
}

let straightCheck = (array) => {
    // 1. Get the absolute value of each item in array.
    // 2. Sort the array in ascending order.
    // 3. Filter out 0.
    let sortedAbsArray = array.map(x => Math.abs(x)).sort((a, b) => a - b).filter(x => x !== 0);
    // console.log(sortedAbsArray);

    for (let [index, el] of sortedAbsArray.entries()) {
        if (el === sortedAbsArray[sortedAbsArray.length - 1]) {
            // console.log(el, ' is the last element in the array.')
            return true;
        }
        else if (el + 1 !== sortedAbsArray[index + 1]) {
            return false;
        }
        // console.log(sortedAbsArray[index + 1], ' comes after', el);
    }
    return true
}

let pairCheck = (array) => {
    let noDups = new Set(array.map(x => Math.abs(x)));
    if (noDups.size === 3) {
        if (array.some(x => frequency(array, x) === 3)) {
            return 'Banthas Wild';
        } else {
            return 'Rule of Two';
        }
    }
    else if (noDups.size === 4) {
        return 'Twins';
    } else if (noDups.size === 2) {
        if (array.some(x => frequency(array, x) === 3)) {
            return 'Rhylet'
        } else {
            return 'Fleet/Squadron';
        }

    }
    return false;

}

let pureSabacc = (array) => {
    let zeros = array.filter(x => x === 0);

    if (zeros.length === 2) {
        return true;
    }

    return false;
}

let handCheck = (array) => {
    if (total(array) !== 0) {
        return 'Nulrhek';
    } else if (total(array) === 0 && pureSabacc(array)) {
        return 'Pure Sabacc'
    } else if (total(array) === 0 && pairCheck(array)) {
        return pairCheck(array);
    } else if (compareArrays(geeWhizNeg, array) || compareArrays(geeWhizPos, array)) {
        return 'Gee Whiz';
    } else if (total(array) === 0 && straightCheck(array)) {
        return 'Straight Khyron';
    } else if (total(array) === 0) {
        return 'Sabacc';
    } else {
        return 'Not Definded';
    }
}

let getCardImg = (num) => {
    if (num > 0 && num !== 10) {
        return `sabacc_pos_sqr_0${num}.png`
    }
    if (num === 10) {
        return `sabacc_pos_sqr_10.png`
    }
    if (num === 0) {
        return 'sabacc_sylop_01.png'
    }
    if (num < 0 && num !== -10) {
        return `sabacc_neg_tri_0${Math.abs(num)}.png`
    }
    if (num === -10) {
        return `sabacc_neg_tri_10.png`
    }
}

export {
    createDeck,
    randomNumber,
    total,
    shuffle,
    compareArrays,
    handCheck,
    getCardImg,
    getColor
};