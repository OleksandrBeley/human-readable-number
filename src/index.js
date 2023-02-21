const oneNum = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};
const teen = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
}
const twoNum = {
    20: 'twenty', //0
    30: 'thirty', //1
    40: 'forty', //2
    50: 'fifty',//3
    60: 'sixty',//4
    70: 'seventy',//5
    80: 'eighty',//6
    90: 'ninety',//7
}
const threeNum = {
    100: 'one hundred',
    200: 'two hundred',
    300: 'three hundred',
    400: 'four hundred',
    500: 'five hundred',
    600: 'six hundred',
    700: 'seven hundred',
    800: 'eight hundred',
    900: 'nine hundred',
}
let result;
const toReadable1 = (number) => {
    if (number < 10) {
        result = oneNum[number]
    }
    else if (number > 9 && number < 100 && String(number)[0] === '1') {
        result = teen[number]
    }
    else if (number > 19 && number < 100 && String(number)[0] !== '1' && String(number)[1] !== '0') {
        result = `${twoNum[String(number)[0] + '0']} ${oneNum[String(number)[1]]}`
    }
    else if (number > 19 && number < 100 && String(number)[0] !== '1' && String(number)[1] === '0') {
        result = twoNum[number]
    }

    return result;
}
module.exports = function toReadable(number) {
    if (number < 100) {
        result = toReadable1(number)
    }
    else if (number > 99 && String(number)[2] !== '0' && String(number)[1] !== '1' && String(number)[1] !== '0') {
        let num = String(number).slice(0, 1);
        let numToNum = Number(num) * 100;
        let num2 = String(number).slice(1, 2);
        let numToNum2 = Number(num2) * 10;
        let num3 = String(number).slice(2, 3);
        let numToNum3 = Number(num3);
        result = `${threeNum[numToNum]} ${twoNum[numToNum2]} ${oneNum[numToNum3]}`;
    }
    else if (number > 99 && String(number)[1] === '1' && String(number)[2] === '0') {
        let num = String(number).slice(0, 1);
        let numToNum = Number(num) * 100;
        let num7 = String(number).slice(1, 3);
        let numToNum7 = Number(num7);
        result = `${threeNum[numToNum]} ${teen[numToNum7]}`;
    }
    else if (number > 99 && String(number)[1] === '0' && String(number)[2] === '0') {
        let num = String(number).slice(0, 1);
        let numToNum = Number(num) * 100;
        result = `${threeNum[numToNum]}`;
    }
    else if (number > 99 && String(number)[2] === '0') {
        let num = String(number).slice(0, 1);
        let numToNum = Number(num) * 100;
        let num2 = String(number).slice(1, 2);
        let numToNum2 = Number(num2) * 10;
        result = `${threeNum[numToNum]} ${twoNum[numToNum2]}`;
    }
    else if (number > 99 && String(number)[1] === '1') {
        let num = String(number).slice(0, 1);
        let numToNum = Number(num) * 100;
        let num4 = String(number).slice(1, 3);
        let numToNum4 = Number(num4);
        result = `${threeNum[numToNum]} ${teen[numToNum4]}`;
    }
    else if (number > 99 && String(number)[1] === '0') {
        let num = String(number).slice(0, 1);
        let numToNum = Number(num) * 100;
        let num5 = String(number).slice(2, 3);
        let numToNum5 = Number(num5);
        result = `${threeNum[numToNum]} ${oneNum[numToNum5]}`;
    }
    return result;
}

