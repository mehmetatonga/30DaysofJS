//console methods
console.log("İstenilen yazı.") //console' a yazdırılmak istenen yazıyı yazdırır.

let isim = "Ahmet"
console.log("%d, %d, %s Mehmet",10,15,isim) //substitution, c gibi değişkenlerin yerine %d ve %s kullan.

console.log("%cDUR!","font-size: 50px;color:red") //%c yaparak css yazılabilir.

console.warn("Uyarı!") //console'a uyarı düşürmek için kullanılır.

console.error("Hata!") //console'a hata düşürmek için kullanılır.

const arr =["Ahmet","Mehmet","Furkan","Hakan"]
console.table(arr) //Alınan diziyi tablo şeklinde döndürür.

console.time("Yavaş saniye") //Bir bloktaki zamanı ölçmeye başlar.
for (var i=0 ; i<1000000 ; i++) {
    var x = i+1
}
console.timeEnd("Yavaş saniye") //Ölçülen zamanı durdurur ve console'a yazar.

console.info("Selam") //console.log() ile aynı işlemi yapar.

console.assert(4<3, "Bu bir hatadır.") //Assertion işlemi. İstenilen koşul false dönüyorsa console'a hata düşer.

const countriesArr=["Türkiye","Hollanda","Amerika","Norveç","Fransa"]
console.group("Ülke Listesi") //Gruplamayı başlatır.
console.log(countriesArr)
console.log("Bu log ülke grubuna aittir.") //Gruplanmak istenen durumlar araya yazılır.
console.groupEnd() //Gruplamayı bitirir.

console.count(arr) //İçerisine girilen dizinin kaç kere çağırıldığını console'a yazdırır.

//console.clear() //console'u temizler.