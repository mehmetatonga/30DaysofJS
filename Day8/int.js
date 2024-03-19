var num = 0
let num2 = 0
const num3 = 0 //Bu üç şekilde de değişken tanımlanabilir. Ancak, const kullanıldığında değeri değiştiremezsiniz.

a = "JavaScript" //window scope
b = 10 //window scope
function letsLearnScope(){
    console.log(a,b)
    if(true){
        console.log(a,b)
    }
}
console.log(a,b)
letsLearnScope()

let isim = "Mehmet Ali" //Global Scope
let soyisim = "TONGA" //Global Scope
function globalScope(){
    if (true){
        let isim = "Aleyna" //Block, Locale Scope
        let soyisim = "Didem" //Block, Locale Scope
        console.log(isim,soyisim) //Aleyna Didem çıktısını verir.
    }
    console.log(isim,soyisim) //Mehmet Ali TONGA çıktısını verir.
}
globalScope()

const user = {
    ad: "Mehmet",
    soyad: "TONGA",
    yaş: 25,
    isMarried: false,
    skills: [
        "HTML",
        "CSS",
        "JS"
    ],
    getFullSkills: function(){
        for(let i=0;i<this.skills.length;i++){
            console.log(this.skills[i])
        }
    }
}
console.log(user)
console.log(user.ad,user.soyad,user.yaş)
for(let i=0;i<user.skills.length;i++){
    console.log(`${user.ad}'in ${user.skills[i]} bilgisi var.`);
}
user.getFullSkills() //Obje içerisinde tanımlanan fonksiyonu çalıştırır.

let newUser2 = user
newUser2.ad = " Ali" //Bu işlem iki objenin de değişmesine sebep olur.
console.log(user.ad,",",newUser2.ad) //Ali , Ali

let newUser = Object.assign({},user) //Eski nesnenin kopyası olan yeni bir nesne oluşturduk. Ve bu tanımlama sayesinde eski nesneden bağımsız hareket edebileceğiz.
newUser.ad="Ahmet"
console.log(user.ad,",",newUser.ad) //Ali , Ahmet

console.log(Object.keys(user)) //Objenin barındırdığı bütün key'leri dönderir.

console.log(Object.values(user)) //Objenin barındırdığı bütün değerleri dönderir.

console.log(Object.entries(user)) //Objenin barındırdığı hem key'leri hem değerleri array şeklinde dönderir.
for (let [key,values] of Object.entries(user)){ //Objenin içerisindeki key ve value'leri key: value şeklinde dönderir.
    console.log(key +":"+ values)
}

console.log(user.hasOwnProperty("country")) //Objenin keyleri arasında istenilen değerin olup olmadığını kontrol eder. True ya da False dönüş yapar.
console.log(user.hasOwnProperty("ad"))

Object.freeze(user) //Bu metodu uygularsan ne yeni bir property tanımlayabilirsin ne de değişiklik yapabilirsin.

Object.seal(user) //Bu metodu uygularsan yeni bir property ekleyemezsin ama mevcut olanları değiştirebilirsin.