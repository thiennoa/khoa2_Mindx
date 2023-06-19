// bai 1 : Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays

function findCommonElements(arr1,arr2){
    const commonElements = arr1.filter(element=>arr2.includes(element));
    return commonElements;
}

array1 = [1,2,3,4,5];
array2 = [4,5,6,7,8];
result = findCommonElements(array1,array2);
console.log(result);

// bai 2 : Find 2 elements with the greatest sum in an array

function find2MaxElements(array){
    let max1 = array[0];
    let max2 = array[1];


    if(array.length < 2){
        throw new Error("array must contain at least 2 elements");       
    }
    
    else if(max1 >= max2){
        [max1,max2]=[max2,max1];
    }
    for(let i=2 ; i < array.length; i++){
        if(array[i] >= max1){
            max2= max1;
            max1=array[i];           
        }else if (array[i] >= max2){
            max2=array[i];
        }
        
    } 
    return [max1,max2]
}

const array = [1,2,3,4,5,6,7,8,8]
console.log(find2MaxElements(array))

// bai 3 : Find pairs of elements whose sum is equal to a given number

function sumPairOfElements(arrayB3,sumPair){
    const pair = [];
    for(let i=0; i<arrayB3.length-1 ; i++){
        for(let j=i+1;j<arrayB3.length;j++){
            if(arrayB3[i]+arrayB3[j]===sumPair){
                pair.push([arrayB3[i],arrayB3[j]]);
            }
         }
        }
        return pair;
    }
    const arrayB3=[1,2,3,4,5,6,7,8,9,0,7];
    const sumPair= 14;
    console.log(sumPairOfElements(arrayB3,sumPair))


// bài 4 : Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
function removeDuplicatesUeingSet(array){
    return [...new Set(array)];
}
const arrayB4 = [1,2,2,3,3,4,4,5];
const resultB4 = removeDuplicatesUeingSet(arrayB4);
console.log(resultB4);

// not using set

function removeDuplicatesWithoutSet(array){
    const resultB42 = [];
    for(let i=0;i< array.length;i++){
        if(resultB42.indexOf(array[i]===-1)){
            resultB42.push(array[i]);
        }
    }
    return resultB4;
}

const arrayInputB4 = [1,2,2,3,3,4,4,5,5,6];
const resultB42 = removeDuplicatesWithoutSet(arrayInputB4);
console.log(resultB42);

// bài 5 : Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
function findDuplicatesElement(arr1B5,arr2B5){
    const duplicates = [];
    const combinedArray=arr1B5.concat(arr2B5);
    combinedArray.sort();
    for(let i=0;i<combinedArray.length-1;i++){
        if(combinedArray[i]==combinedArray[i+1] && !duplicates.includes(combinedArray[i])){
            duplicates.push(combinedArray[i]);
        }
    }
    return duplicates;
}

const arrayB51 = [1,2,3,4,4,5,6,7,8];
const arrayB52 = [3,4,5,6,7,8,9,10];
console.log(findDuplicatesElement(arrayB51,arrayB52))

// bài 6 : Given an array arr1. Write a function that returns a new array of elements that appear more than once in arr1. The elements in new array can only appear once in this array.

function findDuplicates(arr1) {
    const duplicates = [];
    const seen = new Set();
  
    for (const element of arr1) {
      if (seen.has(element) && !duplicates.includes(element)) {
        duplicates.push(element);
      } else {
        seen.add(element);
      }
    }
  
    return duplicates;
  }
  const arr1 = [1, 2, 2, 3, 4, 4, 5];
  const resultB6 = findDuplicates(arr1);
  console.log(resultB6);


// bài 7 : I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
//Write a function with 1 input parameter, an return a new object like this:
//{'face': 2, 'zalo': 3, 'gmail':1} // 2,3,1 are the number of occurrences of 'face', 'zalo', 'gmail' in the array

function countOccurrences(arr) {
    const counts = {};
  
    for (const element of arr) {
      if (counts[element]) {
        counts[element]++;
      } else {
        counts[element] = 1;
      }
    }
  
    return counts;
  }
  const arr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
  const resultB7 = countOccurrences(arr);
  console.log(resultB7);

// bài 8 : I have an array like this: const arr1 = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }]
//Please write a function has 2 input parameters, 1st param is an array like above array, 2nd param is the name of any property in each object of the array.

function groupObjectsByProperty(propertyName, arr) {
    const result = {};
  
    for (const obj of arr) {
      const propertyValue = obj[propertyName];
  
      if (result.hasOwnProperty(propertyValue)) {
        result[propertyValue].push(obj);
      } else {
        result[propertyValue] = [obj];
      }
    }
  
    return result;
  }
  const arrB8 = [
    { make: 'audi', model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' },
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' },
    { make: 'kia', model: 'optima', year: '2012' }
  ];
  
  const resultB8 = groupObjectsByProperty('make', arrB8);
  console.log(resultB8);


// bài 9 : I have 1 object like this: 
//		const order = {
//			'cart': [
//				{ id: 1, name: "ao dai", amount: 5, price: 100000 },
//				{ id: 2, name: "ao coc", amount: 2, price: 200000 },
//				{ id: 3, name: "quan dai", amount: 3, price: 150000 },
//				{ id: 4, name: "quan coc", amount: 4, price: 130000 },
//			],
//			'customer': 'Name',
//			'address': '12 Giai Phong Street'
//		};
//	Please use only reduce method, and only one time, and return 2 variables: totalOfMoney = 1870000, totalOfAmount = 14;
const order = {
    'cart': [
      { id: 1, name: "ao dai", amount: 5, price: 100000 },
      { id: 2, name: "ao coc", amount: 2, price: 200000 },
      { id: 3, name: "quan dai", amount: 3, price: 150000 },
      { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    'customer': 'Name',
    'address': '12 Giai Phong Street'
  };
  
  const { totalOfMoney, totalOfAmount } = order.cart.reduce(
    (accumulator, item) => {
      accumulator.totalOfMoney += item.price * item.amount;
      accumulator.totalOfAmount += item.amount;
      return accumulator;
    },
    { totalOfMoney: 0, totalOfAmount: 0 }
  );
  
  console.log(totalOfMoney); // 1870000
  console.log(totalOfAmount); // 14

// bài 10 : Write 3 methods myMap, myFilter, myReduce (suggestion: use Array.prototype, "this" keyword, and for loop).
//	3 these methods have similar in use and usage as map, filter, reduce of array in JS

// myMap
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };
  
  // myFilter
  Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
  
  // myReduce
  Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  const numbers = [1, 2, 3, 4, 5];

  // myMap
  const mappedArray = numbers.myMap((num) => num * 2);
  console.log(mappedArray); // [2, 4, 6, 8, 10]
  
  // myFilter
  const filteredArray = numbers.myFilter((num) => num % 2 === 0);
  console.log(filteredArray); // [2, 4]
  
  // myReduce
  const sum = numbers.myReduce((accumulator, num) => accumulator + num, 0);
  console.log(sum); // 15
    
  