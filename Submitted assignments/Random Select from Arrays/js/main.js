(function selectRandomValue() {
    let array1 = [1, 2, 33, 25, 5, 63, 7, 8, 12, 10];
    let array2 = [1, 21, 3, 33, 5, 6, 77, 8, 9, 10];
    console.log('[ ' + array1 + ' ]' + "  " + '[ ' + array2 + ' ]');
    let indexOfArray1;
    let indexOfArray2;


    function generateRandomValue() {
        indexOfArray1 = Math.floor(Math.random() * 10);
        indexOfArray2 = Math.floor(Math.random() * 10);
    }
    generateRandomValue();
    if (array1[indexOfArray1] == array2[indexOfArray2]) {
        if (indexOfArray1 == 0 && indexOfArray2 == 0) {
            console.log(indexOfArray1 + " : " + array1[indexOfArray1] + "   " + indexOfArray2 + " : " + +array2[indexOfArray2]);
        } else if (indexOfArray1 == 9 && indexOfArray2 == 9) {
            console.log(indexOfArray1 + " : " + array1[indexOfArray1] + "   " + indexOfArray2 + " : " + +array2[indexOfArray2]);
        } else {
            alert("Value is same in both arrays on randomly selected indexes i.e " + indexOfArray1 + " : " + array1[indexOfArray1] + "   " + indexOfArray2 + " : " + +array2[indexOfArray2]);
            selectRandomValue();
        }
    } else {
        console.log(indexOfArray1 + " : " + array1[indexOfArray1] + "   " + indexOfArray2 + " : " + +array2[indexOfArray2]);
    }

}());