module.exports = function toReadable (num) {
    let hundredths = [
        'zero',
        'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
        'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
    ]
    let tenths = [
        'zero', 'ten',
        'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety'
    ]
    let number = [
        'zero',
        'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ]
    if(String(num).length == 1 || String(num).length == 2  && num <= 19){
        let arrOfNumber = String(num).split('')
        if(arrOfNumber[1] === '0'){
            return `${number[num]}`
        }
        return `${number[num]}`

    }else if(String(num).length == 2 && num >= 20 && num <= 99){

        let arrOfNumber = String(num).split('')
        if(arrOfNumber[1] === '0'){
            return `${tenths[+arrOfNumber[0]]}`
        }
        return `${tenths[+arrOfNumber[0]]} ${number[+arrOfNumber[1]]}`

    }else if(String(num).length == 3){
        let arrOfNumber = String(num).split('')
        console.log(arrOfNumber)

        if(arrOfNumber[1] === '1'){
            let lastTwoNumbers = arrOfNumber[1] + arrOfNumber[2]
            return `${hundredths[+arrOfNumber[0]]} ${number[lastTwoNumbers]}`
        }else if(arrOfNumber[1] === '0' && arrOfNumber[2] === '0'){
            return `${hundredths[+arrOfNumber[0]]}`
        }else if(arrOfNumber[1] === '0'){
            return `${hundredths[+arrOfNumber[0]]} ${number[arrOfNumber[2]]}`
        }else if(arrOfNumber[2] === '0'){
            return `${hundredths[+arrOfNumber[0]]} ${tenths[arrOfNumber[1]]}`
        }

        return `${hundredths[arrOfNumber[0]]} ${tenths[arrOfNumber[1]]} ${number[arrOfNumber[2]]}`
    }
}
