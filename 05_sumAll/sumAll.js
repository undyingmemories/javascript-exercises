const sumAll = function(num1, num2) {
    let sumNum = 0;
    while (num2 >= num1) {
        sumNum = num1 + 1;
        num1++;
        sumNum = num1 + sumNum;
        
    }
    return sumNum;

};
    sumAll (1,4);
// Do not edit below this line
module.exports = sumAll;
