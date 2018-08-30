function main(randomNum,input) {
    let resultObj = {aNum:0,bNum:0};
    let randomArr = randomNum.split("");
    let inputArr = input.split("");
    for (let i = 0 ;i<randomArr.length ; i++){
        for (let j = 0 ;j<inputArr.length ; j++){
            if (randomArr[i] === inputArr[j] && i === j){
                resultObj.aNum ++;
            }
            else if(randomArr[i] === inputArr[j] && i !== j){
                resultObj.bNum ++
            }
        }
    }
    let result = resultObj.aNum + 'A' + resultObj.bNum + 'B'
    return result;
};

module.exports = main