//destructing
const nums = [10, 20, 30];
const [number1, number2, number3] = nums //dizinin şeklini bozma (destructing)
console.log(nums[0]) //10
console.log(number1) //10
console.log(nums[1]) //20
console.log(number2) //20
console.log(nums[2]) //30
console.log(number3) //30

const takimlar = [
    ["Ahmet", "Mehmet", "Ali"],
    ["Ayşe", "Fatma", "Aleyna"]
]
const[erkekler, kadinlar] = takimlar
console.log(erkekler) //dizinin içerisindeki erkekler array'ini döndürür.
console.log(kadinlar) //dizinin içerisindeki kadinlar array'ini döndürür.

let [[erkek1, erkek2, erkek3],[kadin1, kadin2, kadin3, kadin4]] = takimlar //iki dizi iç içeyse içteki dizinin elemanlarını bu şekilde kullanabiliriz.
kadin4 = "Didem" //dizide olmayan bir elemanı bu şekilde ekleyebiliriz
console.log(kadin4) //Ahmet
console.log(erkek1) //Ahmet
console.log(kadin2) //Fatma

const countries = [
    ["Finland","Helsinki"],
    ["Sweden","Stockholm"],
    ["Norway","Oslo"],
    ["Turkey","Ankara"]
]
for (const [country,capital] of countries){
    console.log(`Ülke: ${country}, Başkent: ${capital}`)
}

const user = {
    name:"Mehmet",
    surname:"Tonga",
    age: 25,
    pets: {
        cats: ["Balım"],
        dogs: ["Duman"]
    }
}
const {surname} = user //objelerde bu yöntemi kullanırken key'in kendisini kullanmamız gerek. Öylesine bir key belirleyemeyiz.
console.log(surname) //Tonga
const {name:ad} = user //Bu şekilde key istenilen isimle değiştirilebilir.
console.log(ad) //Mehmet

function multiply(num1,num2){
    return num1*num2
}
console.log(multiply(10,20)) //200

const numbers = [10,30]
function multiply2(numbers){
    return numbers[0]*numbers[1]
}
console.log(multiply2(numbers)) //300

function multiply3([number1,number2]){
    return number1*number2
}
console.log(multiply2(numbers)) //300

const sayilar = [1,2,3,4,5,6,7,8,9,10]
let [sayi1, sayi2, sayi3, ...digerSayilar] = sayilar //rest operatörü (...) sayesinde kalan elemanları array halinde tutmaya devam eder.
console.log(sayi1,sayi2,sayi3) //1 2 3
console.log(digerSayilar) // [4, 5, 6, 7, 8, 9, 10]

const arr1 = [1, 3, 5]
const arr2 = [...arr1] //arr1 dizisini bağımsız bir şekilde kopyalar.

const deneme = [1,3,5]
console.log([6,...deneme,10]) //dizinin başına ve sonuna eleman ekleme.