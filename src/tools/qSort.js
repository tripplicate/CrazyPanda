let qSort = (arr) => {

    if (arr.length < 2) return arr;

    let start   = 0,
        end     = arr.length - 1,
        middle  = Math.floor(arr.length / 2),
        pivot   = arr[middle].id;


    let less    = [],
        greater = []; 

    while(start <= end){
        if(pivot > arr[start].id) less.push(arr[start]);
        if(pivot <= arr[start].id && arr[start].id != pivot) greater.push(arr[start]);

        start++;
    }

    return [...qSort(less), arr[middle], ...qSort(greater)]
}

export default qSort;