let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)

let js = "JavaScript"
let py = "Python"

console.log(js == py)

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)

let nums = [1, 2, 3]
let arr = [1, "Mehmet", true, null, []]

console.log(nums)
console.log(nums[0])
console.log(nums[1])
console.log(nums[2])

nums[1] = "Mehmet"

console.log(nums)

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]
console.log(nums1 == nums2) //false

let userOne = {
    name:"Mehmet",
    role: "Admin",
    country:"Turkey"
}
let userTwo = {
    name:"Mehmet",
    role: "Admin",
    country:"Turkey"
}
console.log(userOne === userTwo) //false

let nums11 = [1, 2, 3]
let nums22 = nums11
console.log(nums11==nums22) //true

let age=25
const gravity = 9.81
let mass = 72
const PI  = 3.14
const boilingPoint=100
const bodyTemp=37

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

const PIsayisi = Math.PI
console.log(PIsayisi)

console.log(Math.round(PIsayisi))
console.log(Math.round(9.81))

console.log(Math.floor(PIsayisi))
console.log(Math.ceil(PIsayisi))

console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10))

const randNum=Math.random()
console.log(randNum)

const randNum2=Math.floor(Math.random() * 11) //0 ile 10 arasında random sayı
console.log(randNum2)

console.log(Math.abs(-10)) //Mutlak değer

console.log(Math.sqrt(100)) //Karekök alma

console.log(Math.pow(3,2)) //ÜSt alma

let isim = "Mehmet"
let nick = "Curry"
let soyisim = "Tonga"
let fullName = isim +" "+ nick +" "+ soyisim
console.log(fullName)

let paragraf="Selam \
Ben Mehmet Ali \
Nasılsın. \
Sağol ben de iyiyim."
console.log(paragraf)

console.log(`Selam ${isim}`)

let string = "JavaScript"
console.log(string.substring(4,10))
console.log(string.substr(4,6))

let bolunecekCumle = "Mehmet Ali TONGA"
let bolunenCumle = bolunecekCumle.split(" ")
console.log(bolunenCumle)

console.log(isim.split("").reverse().join("")) //Harflerine ayır, harfleri ters çevir, harfleri birleştir.

console.log(string.includes("Java")) //True
console.log(string.includes("java")) //False

let isimSoyisim = "Mehmet Ali TONGA"
console.log(isimSoyisim.replace("Ali", "Curry"))

console.log(isimSoyisim.startsWith("Mehmet")) //True
console.log(isimSoyisim.endsWith("TONGA")) //True

console.log(isim.repeat(5))

let num = "10"
let numInt = parseInt(num)
let numInt2 = Number(num)
let numInt3 = +num
console.log(numInt , numInt2 , numInt3) // String to Integer


