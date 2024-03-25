const arr = Array()
const arr2 = [] //İki şekilde de dizi tanımlanabilir.

const meyveler = ["elma", "armut", "çilek", "portakal", "karpuz"]

let lastIndex = meyveler.length-1
let sonMeyve =  meyveler[lastIndex]
console.log(`Son eklenen meyve: ${sonMeyve}`) //Dizinin son elemanını yazdırma.

meyveler.push("şeftali") //Diziye yeni eleman ekleme.
lastIndex = meyveler.length-1
sonMeyve =  meyveler[lastIndex]
console.log(`Son eklenen meyve: ${sonMeyve}`)

console.log(meyveler.length) //Dizinin uzunluğu(eleman sayısı)
console.log(meyveler) //Tüm dizi
console.log(meyveler[0]) //Dizinin 0. indexindeki eleman
console.log(meyveler[2]) //Dizinin 2. indexindeki eleman

const nums = [1, 2, 3, 4, 5]
nums[0]=9
nums[1]=10
console.log(nums) //Dizinin ilk iki elemanını değiştirme

const fillArr = Array(5)
fillArr.fill(7) //Diziyi belirtilen elemanla doldurur.
console.log(fillArr)

const concatArr1 = [1, 2, 3]
const concatArr2 = [5, 6, 7]
console.log(concatArr1.concat(concatArr2)) //İki diziyi birleştirmek için kullanılır.

const indexOfArr = [1, 2, 3, 4, 5, 6] //Girilen değerin dizide kaçıncı indexte tutulduğunu dönderir. Dizide yoksa -1 döner.
console.log(indexOfArr.indexOf(1)) //0
console.log(indexOfArr.indexOf(4)) //3
console.log(indexOfArr.indexOf(10)) //-1
console.log(indexOfArr.indexOf(-2))  //-1

const markalar = ['audi', 'bmw', 'mercedes', 'volkswagen']
let index = markalar.indexOf('volkswagen') //3
if(index === -1){ //Dizi içerisinde istenen değerin olup olmadığını kontrol etmek için kullanılabilir.
   console.log('Marka dizide mevcut değil.')  
} else {
    console.log('Marka dizide mevcut.')
}

index != -1 ? console.log('Marka dizide mevcut.') : console.log('Marka dizide mevcut değil.') //Tek satırda da aynı işlem yapılabilir.(Ternary)

const includesArr = [1, 2, 3, 4, 5, 6] //Girilen değerin dizide olup olmadığına boolean değer döndürür.(True - False)
console.log(includesArr.includes(1)) //True
console.log(includesArr.includes(4)) //True
console.log(includesArr.includes(10)) //False
console.log(includesArr.includes(-2))  //False

console.log(Array.isArray(includesArr)) //Dizi mi değil mi diye kontrol eder.

console.log(markalar.toString()) //Diziyi stringe çevirir.

const joinArr = ["Ahmet", "Mehmet", "Ali", "Ayşe", "Fatma"] 
console.log(joinArr.join("-")) //Dizideki elemanların aralarına belirtilen ifadeyi ekleyerek dizi elemanlarını birleştirir.
console.log(joinArr.join(" && "))

const sliceArr = ["Ahmet", "Mehmet", "Ali", "Ayşe", "Fatma"] //Dizideki belirtilen indexten itibarenki verileri döndürür.
console.log(sliceArr.slice(1,4)) //Mehmet, Ali, Ayşe
console.log(sliceArr.slice(2)) //Ali, Ayşe, Fatma

const pushArr =  ['deneme','denemelerim', 'dünyam', 'benim', 'görevlerim']
pushArr.push('eklenecek') //Dizinin sonuna yeni bir eleman ekler
console.log(pushArr)

const popArr =  ['deneme','denemelerim', 'dünyam', 'benim', 'görevlerim']
popArr.pop() //Dizinin sonundaki elemanı çıkartır.
console.log(popArr)

const shiftArr =  ['deneme','denemelerim', 'dünyam', 'benim', 'görevlerim']
shiftArr.shift() //Dizinin başındaki elemanı çıkartır.
console.log(shiftArr)

const unshiftArr =  ['deneme','denemelerim', 'dünyam', 'benim', 'görevlerim']
unshiftArr.unshift("ilk eleman") //Dizinin başına eleman ekler.
console.log(unshiftArr)

const reverseArr = [1, 2, 3, 4, 5]
reverseArr.reverse() //Dizinin elemanlarını tersine çevirir.
console.log(reverseArr)

const sortArr =  ['deneme','denemelerim', 'dünyam', 'benim', 'görevlerim']
sortArr.sort() //Dizinin elemanlarına alfabetik sıralama uygular.
console.log(sortArr)