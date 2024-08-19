// Class Lab

//LAB1

// class Calculator{
//   constructor(_value){
//     this.value  = _value
//   }
//   add(num){
//      return this.value += num;
//   }
//   subtract(num){
//     return this.value -= num;
//   }
//   multiply(num){
//     return this.value *= num;
//   }

//   divide(num){
//      return  this.value /= num;
//   }
//   show(){
//     console.log(`Value = ${this.value}`)
//   }
// }

// const newCal = new Calculator(10)

// console.log(newCal.add(2))
// console.log(newCal.divide(2))
// newCal.show()

//LAB2 
// class Sale{
//   constructor(_name,_amount,_price){
//     this.name = _name,
//     this.amount = _amount,
//     this.price = _price
//   }

//   calPrice(){
//     return this.amount * this.price
//   }
// }

// class Beverage extends Sale{
//   constructor(_name,_amount,_price){
//     super(_name,_amount,_price)

//   }

// }

// let beverage = new Beverage('pepsi',3,19)
// console.log(beverage)


// LAB 1 ARRAY

// let arr = [1,2,3,4,5,6]
// let arr2 = {name : 'gun'}

// function isArray(arr){
//   return Array.isArray(arr)
// }

// console.log(isArray(arr2))

//LAB 1 OBJECT

// let salaries = {
//   John : 100,
//   Ann : 160,
//   Pete : 130

// };

// let value = Object.values(salaries)
// let x = value.reduce((acc,cur)=>{
//   return acc + cur
// },0)

// console.log(x)

//LAB2

// let obj = {}

// function checkEmptyObj(obj){
//   if (!(Object.keys(obj))){
//     return false
//   } else {
//     return true
//   }

// } 

// console.log(checkEmptyObj(obj))


// LAB Rest 
//LAB 1
// let calMulti = (...nums) => {
//   let sum = 1
//   for (let num of nums){
//     sum *= num
//   }
//   return sum
// }

// let result = calMulti(1,2,3,4,5,6,7,7)
// console.log(result)

//LAB 2

// let filterOutOdds = (...nums) => {
//   let result = []
//   for (let num of nums){
//     if(num % 2 == 0){
//       result.push(num)
//     }
//   }
//   return result
// }

// console.log(filterOutOdds(1,2,3,4,5,6,7,8,8))

//LAB 3
// let obj1 = {name1:'Benz',age1: 19}
// let obj2 = {name2:'June',age2: 20}

// let mergeObjects = (...obj) => {
//   let empty = {}
//   for (let i =0; i<obj.length; i++){
//     Object.assign(empty,obj[i])
//   }
//   return empty
// }

// let result = mergeObjects(obj1,obj2)
// console.log(result)

//LAB 4 
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let result = [5,...nums1,-6,-1,...nums2];
// let result2 = result.reduce((acc,cur)=> {
//     return acc + cur
// },0)

// console.log(result2)

//LAB 5
//   let editArr = (arr) => {
//     let newArr = [...arr]
//     console.log(newArr)
//     newArr[3] = newArr[3]**2
//     return newArr
//   }
// let arr = [1,23,4,6,7]
// let result = editArr(arr)
// console.log(result)

//LAB 6
// function showProfile (name,surname,...hobby){
//   // console.log(name,surname,hobby)
//   return [name, surname, ...hobby,hobby.length]
// }

// let result = showProfile('supakorn','swangareetagurl','playfootball','play guitar')
// console.log(result)


// LAB 7
// function doubleAndReturnArgs (arr,...nums) {
//   let doubleNums = nums.map((item)=> item*2)
//   console.log(doubleNums)
//   return arr.concat(...doubleNums)
// } 

// let result = doubleAndReturnArgs([1,2,3],5,5)
// console.log(result)

//LAB 9

// let arr = [1,23,4,5,6,7,8,9]


// function cloneArray (arr) {
//   let result = [...arr]
//   return result
// }

// console.log(cloneArray(arr))


//LAB 10

// let obj1 = {name: 1, age : 5}

// function cloneObject (obj) {
//   let result = {...obj}
//   return result
// }

// console.log(cloneObject(obj1))


// LAB 11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * MAYA
// console.log(second); // ** MARISA
// console.log(third); // *** CHI

//LAB12

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // *Raindrops on roses
// console.log(whiskers); // **whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // ***Bright copper kettles', 'warm woolen mittens'

//LAB 13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * 10 30 20

//LAB14

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8
// console.log(yearNeptuneDiscovered); // ** 1846


//LAB15

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *yearMarsDiscovered:1659,yearNeptuneDiscovered:1846

//LAB 16

// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // * your name is Alejandro and you like purple
// getUserData({ firstName: 'Melissa' }); // ** your name is Melissa and you like green
// getUserData({}); // *** your name is undefined and you like green


//LAB 17

// let guest = 'Jane';
// let admin = 'Pete';

// [admin, guest] = ['Jane', 'Pete']
// console.log(admin)

//LAB 18

// user = [{
//   firstName : 'supakorn',
//   age : 30
// },{ lastName: 'swangareetagurl'}]
// let [{firstName,age},{lastName}] = user;



// function getUserData() {
//   if(age > 18){
//     return `Hello ${firstName} ${lastName}`
//   } else {
//     return `you are not allowed age < 18`
//   }
// }

// console.log(getUserData(user))

// LAB 19
// let user = {
//   name: 'John',
//   years: 27
// };

// let {name,
// years : age, isAdmin = false} = user;

// console.log(isAdmin)
// console.log(name)
// console.log(age)

//LAB 21
// let arr = [1, [2, [[[3, 4], 5], 6]]];

// let [a,[b,[[[c,d],e],f]]] = arr;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

// LAB 22
// const obj = { prop: 5, prop2: 10 };

// let {prop : a, prop2 : b} = obj

// console.log(a)
// console.log(b)

//LAB 23
// let a, b;
// { a, b } = { a: 1, b: 2 };
// error
// console.log()


//LAB 24
// const [, , , a, b] = [1, 2, 3];

// มีค่าเป็น undefined เพราะวา่า a and b อยุ่ที่ index 3,4

//LAB 25
// const q = { prop: 5, prop2: [10, 100] };

// let {prop:x, prop2 : [z,y]} = q;

// console.log(x)
// console.log(z)
// console.log(y)

//LAB 26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop: x,
//   prop2: {

//     prop2: {

//       nested: [g, y, z]
//     }
//   }
// } = q

// console.log(y)
// console.log(x)

//LAB 27

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];


// for (item of names){
//   let {firstName,lastName} = item
//   console.log(`Fullname = ${firstName} ${lastName}`)
// }

//LAB 28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (item of users) {
//   let {user, age = 'unknown'} = item
//   console.log(`user :${user},age : ${age}`)
// }