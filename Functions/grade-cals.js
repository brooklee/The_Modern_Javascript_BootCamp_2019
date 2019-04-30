//students score, total possible score


// let stuScore = 72;
// let totalScore = 100;

let score = function (stuScore, totalScore) {
    let decimal = stuScore/totalScore;
    let percent = decimal * 100
    let letterGrade = ''
    console.log(percent)

    if (percent >= 90) {
        letterGrade = 'A'
        // return (`you got an A (${percent})`)
    } else if (percent  >= 80) {
        letterGrade = 'B'

    } else if (percent >= 70) {
        letterGrade = 'C'

    } else if (percent <= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return (`you got a ${letterGrade} (${percent})`)
};


let result = score(90, 100);
console.log(result)
