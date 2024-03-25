let a = 10
let b = "10"
console.log(a==b) //Değer aynı mı diye kontrol eder. True döner.
console.log(a===b) //Hem değer hem de değişken türü aynı mı diye kontrol eder. False döner.

console.log(++a) //11 ilk işlemden önce değer artar.
console.log(a) //11

let a2 = 10
console.log(a2++) //10
console.log(a2) //11 işlemden sonra değer artar.

let isRaining = true
isRaining
    ? console.log("It's raining") //True ise bu çıktıyı verir.
    : console.log("It's not raining") //False ise bu çıktıyı verir.
// It's raining çıktısını verir.
isRaining = false
isRaining
    ? console.log("It's raining") //True ise bu çıktıyı verir.
    : console.log("It's not raining") //False ise bu çıktıyı verir.
// It's not raining çıktısını verir.

isRaining ? console.log("It's raining") : console.log("It's not raining") //Tek satırda da yapılabilir.

//alert("Selam Canim") //Popup açar. Mesajı yazdırır.

//prompt("Bir sayı giriniz.", "Sayı yalnızda pozitif değer olabilir.") //Kullanıcıdan bir girdi istenir.

//console.log(prompt("Bir sayı giriniz.")) //Kullanıcıdan alınan değeri consol'a yazdırır.

//console.log(confirm("Emin misin?")) //Tamam seçilirse True, değilse False döner.

const date = new Date()
console.log(date) //Şuanki tarih ve saatini console'a yazdırır.
console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()) //Yıl ay günü getirir ve "-" ile birlikte yazar.
console.log(date.getMonth()) //Hangi ay (Aylar 0 indexten başlar. Ocak ayı 0. indextir.)
console.log(date.getDate()) //Ayın kaçıncı günü
console.log(date.getHours()) //Saat kaç

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    dayNumber = date.getDay()

let months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
]

let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
]

let okunabilirTarih = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hours}:${minutes}:${seconds}`//16 Mart 2024, Cumartesi, 13:11:22 formatında yazar.
console.log(okunabilirTarih)

