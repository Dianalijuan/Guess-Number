//完整的猜数游戏
var async = require('async');
let readline = require('readline');

var getRandomNum =function(callback){
    let randomNum = '';
    for(var i=0;i<4;i++){
        randomNum += Math.floor(Math.random()*10)
    }
    callback(null,randomNum)

}

var getInput =function(randomNum,callback){

    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('请输入您猜的四位数字： ')
    rl.on('line', function (input) {
        callback(null,input,randomNum)
    })
}

var getResult =function(input,randomNum,callback){
    console.log('randomNum: '+randomNum);
    console.log('input: ' + input);
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
    callback(null,result)
}
async.waterfall([getRandomNum,getInput,getResult],function(err,result){

    if (err) {
        console.log(err);
    }

    console.log("result: "+result);
})
