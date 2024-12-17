function fibs(number){
    let arr = []
    for(let i = 0; i < number + 1; i++){
        if(i == 0 || i == 1){
            arr.push(i)
        }
        else{
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
    }
    return arr;
}


function fibsRec(n, arr = [], beginning = 0){
    if(beginning == n + 1){
        return arr;
    }
    if(beginning == 0){
        arr.push(0)
        fibsRec(n, arr, beginning + 1)
        return arr;
    }
    if(beginning == 1){
        arr.push(1)
        fibsRec(n, arr, beginning + 1)
        return arr;
    }
    else{
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        fibsRec(n, arr, beginning + 1)
        return arr;
    }
}

console.log(fibs(10))
console.log(fibsRec(10))
