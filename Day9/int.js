//Higher Order Function

const callback = (n) => {
    return n ** 2
}
function cube(callback, n){
    return callback(n) * n
}
console.log(cube(callback,3)) //Küpünü alır. Fonksiyon içinde başka bir fonksiyon çağırmış olduk.

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2*n+3*m+t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(4)(5)(6))

const numbers = [1,2,3,4,5]
let total = 0
numbers.forEach((num) => total += num) //forEach örneği
console.log("Sayilarin toplamı: ",total)

console.log(numbers.find(numbers => numbers > 3)) //İstenilen koşulu sağlayan ilk elemanı döndürür.

console.log(numbers.reduce((oldValue, currentValue)=>oldValue + currentValue , 0)) //reduce kullanarak da dizinin elemanlarıyla işlem yapılabilir.

const numbers2 = numbers.map(numbers => numbers * 2) //Map functions. Diziler üzerinde modifiyeler yapılabilir.
console.log(numbers2) //numbers2 dizim numbers dizimin 2 ye çarpılmış hali oldu.

let users = [
    {
        id: 1,
        name: "Mehmet",
        age: 24,
        gender: 1
    },
    {
        id: 2,
        name: "Ahmet",
        age: 30,
        gender: 1
    },
    {
        id: 3,
        name: "Ali",
        age: 15,
        gender: 1
    },
    {
        id: 4,
        name: "Eda",
        age: 23,
        gender: 2
    }
]
users = users.map(users=>{ //Objeler üzerinde de map fonksiyonu sayesinde modifiye yapılabilir.
    if(users.id===1){
        users.name = "Turan"
    }
    return users
})
console.log(users)

console.log(users.find(users => users.id===3)) //İstenilen koşulu sağlayan elemanı döndürür.
console.log(users.findIndex(users => users.id===3)) //İstenilen koşulu sağlayan elemanın index değerini döndürür.

console.log(users.every(user => user.gender === 1)) //Dizideki bütün elemanlar istenilen gibi mi kontrol eder.
console.log(users.some(user => user.gender === 1)) //Dizideki en az bir eleman istenilen gibi mi kontrol eder.

const woman = users.filter(user => user.gender === 2) //filter filtrelemeye yarar
const men = users.filter(users => users.gender===1)
console.log(woman)

function sayHello(){
    console.log("hello!!")
}
setTimeout(sayHello,1000) //1 saniye sonra istenilen işlevi yerine getirir.
//setInterval(sayHello,1000) //1 saniye bir istenilen işlevi yerine getirir.

const interval = setInterval(sayHello,1000)
setTimeout(()=>{
    clearInterval(interval)
    console.log("Interval işlemi iptal edildi.")
},5000) //5 saniye boyunca devam eden işlemi durdurur.

const names=["Tayfun", "Zeynep", "Hakan", "Rabia", "Aleyna", "Mehmet"]
console.log(names.sort()) //Belirtilen dizinin alfabetik sıraya göre sıralanmasını sağlar.
console.log(names.sort((a,b)=> a.localeCompare(b))) //A'dan Z'ye sıralama yapar.
console.log(names.sort((a,b)=> b.localeCompare(a))) //Z'den A'ya sıralama yapar.
const sayilar= [1,3,7,12,2,30,25,20,5]
console.log(sayilar.sort((x,y)=>y-x)) //Sayıları büyükten küçüğe sıralama işlemi.
console.log(sayilar.sort((x,y)=>x-y)) //Sayıları küçükten büyüğe sıralama işlemi.

