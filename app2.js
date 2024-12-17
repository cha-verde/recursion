function mergeSort(arr)
{
    if(arr.length == 1){
        return arr;
    }
    else{
        return merge(mergeSort(arr.slice(0, arr.length/2)), mergeSort(arr.slice(arr.length/2)))
    }

    function merge(arr1, arr2){
        let arr = []
        let i = 0;
        let j = 0;
        let limit = arr1.length + arr2.length;
        for(let k = 0; k < limit; k++){
            if(i == arr1.length){
                for(let a = j; a < arr2.length; a++){
                    arr.push(arr2[a])
                }
                return arr;
            }
            if(j == arr2.length){
                for(let a = i; a < arr1.length; a++){
                    arr.push(arr1[a])
                }
                return arr;
            }
            if(arr1[i] < arr2[j]){
                arr.push(arr1[i])
                i++;
            }
            else{
                arr.push(arr2[j])
                j++;
            }
        }  
        console.log(arr)
        return arr;    
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
