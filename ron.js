function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum)  {
        return [];
    }
    else{
        const rArr = rangeOfNumbers(startNum, endNum - 1);
        rArr.push(endNum);
        return rArr;
    }
};

console.log(rangeOfNumbers(5, 5));