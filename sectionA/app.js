// question one: Median of Two Sorted Arrays
const arrayOne = [76, 57, 19, 87, 62, 23, 87];
const arrayTwo = [57, 10, 2, 40, 40, 35, 36, 59, 43, 7, 98, 90, 33, 11];
const arrayThree = [67, 47, 63, 40, 29, 65, 100, 7, 69, 57, 59, 36, 68, 33, 16];
const arrayFour = [7, 10, 45, 21, 71, 27, 97, 73, 25];


//first approach.
//i am merging arrayOne and arrayTwo together
 
const MergeOne = arrayOne.concat(arrayTwo)

// finding median of the merged sorted array using map()
// I used the reduce method to add up the concat. array and further divide the value by the lenght of data in the reduced array to get the median.
function median(arr){
    const reduced = arr.reduce(function (prevNum, currNum){
        return prevNum + currNum;
    })
    const medianNum = reduced / arr.length;
    return medianNum;
}
// medianOne = 46.286;



//merging arrayThree and arrayFour using the same format.
const mergeTwo = arrayThree.concat(arrayFour);
median(mergeTwo)
// medianTwo = 47.167;
