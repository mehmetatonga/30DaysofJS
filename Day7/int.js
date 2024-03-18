function deneme(){
    console.log("Deneme fonksiyonu yazıldı.")
}
deneme() //Çağırılan fonksiyon içerisindeki komutları gerçekleştirir.

function kareAlma(sayi){ //Gönderilen sayının karesini almaya yarayan fonksiyon. Karesini yazdırır.
    console.log(sayi**2)
}
kareAlma(5)

function kareAlma2(sayi){ //Gönderilen sayının karesini almaya yarayan fonksiyon. Karesinin döndürür.
    return sayi**2
}
console.log(kareAlma2(3))

function ucgendeAlan(taban, yukseklik){ //Birden çok parametre de gönderilebilir.
    let alan = taban * yukseklik / 2
    return alan
}
console.log(ucgendeAlan(5,4))

const nums = [5,6,7,8,9,10,11]
function diziToplamı(arr){ //Parametre olarak dizi de gönderilebilir.
    let toplam=0
    for (let i=0; i<arr.length; i++){
        toplam += arr[i];
    }
    return toplam
}
console.log("Dizinin toplamı = ",diziToplamı(nums))

function argumentsToplama(){ //Diziyi tanımlarken kaç parametre geleceğini belirtmeden tanımlarsak, argument kullanarak istediğimiz kadar parametre gönderebilir ve bunları işleme sokabiliriz.
    let toplam=0
    for (let i=0; i < arguments.length;i++){
        toplam+=arguments[i]
    }
    return toplam
}
console.log(argumentsToplama(1,2,3))

const sayHello = function(name){ //anonymous(parametre almaz),expression(parametre alır) function
    return `Hello ${name}`
}
console.log(sayHello("Mehmet"))

;(function(){ //Self Invoking Functions(Kendi kendini çağıran fonksiyonlar) Bu fonksiyonlardan önce noktalı virgül koy yoksa hata alırsın.
    console.log("Selam")
})()

;(function(num){ //Kendi kendini çağıran foksiyonların parametre almış hali.
    num = num ** 2
    console.log(num)
})(5)

function normalFunction(){ //Normal fonksiyon

}
const arrowFunction = () =>{ //Arrow function(Ok fonksiyonu)

}

const hello2 = name => `Hello ${name}` //Arrow functions tek satırda da yazılabilir.
console.log(hello2("Mehmet"))

const hello3 = (name, surname) => `Hello ${name} ${surname}` //Arrow functions birden çok parametre de alabilir.
console.log(hello3("Mehmet", "Ali"))

const carpim =  (x ,y) => x * y
console.log(carpim(4,6))

const arrowToplama = (...numbers) => { //Üç noktalı kullanım sayesinde birden fazla parametre gönderebilirsin.
    let toplama=0
    for(let i =0; i<numbers.length;i++){
        toplama += numbers[i]
    }
    return toplama
}
console.log(arrowToplama(2,4,5,6,10))