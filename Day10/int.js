//set
const companies = new Set() //set bu şekilde tanımlanır.
companies.add('Google') //set içerisine add ile eleman eklenebilir.
console.log(companies)

const names = new Set(["Mehmet","Ahmet","Hakan"]) //set içerisine array alabilir
console.log(names)
for(let name of names){ //set içerisindeki bütün elemanları for döngüsü ile yazdırır.
    console.log("Ad",name)
}
names.forEach(name=>console.log(name)) //set içerisindeki bütün elemanları forEach döngüsü ile yazdırır.
;[...names].map(name=>console.log(name)) //map ile array'in bütün elemanlarını yazdırmas

names.delete("Mehmet") //set içerisinden istenen elemanın çıkarılmasını sağlar.
console.log(names)

names.clear() //set içerisindeki bütün elemanları siler.
console.log(names)

const isimler=["ahmet","mehmet","ali", "veli", "ayşe","ahmet","mehmet","ahmet","mehmet","ahmet","mehmet"]
console.log(isimler)
console.log(new Set(isimler)) // set unique değerler barındırabildiği için array içerisinde tekrarlanan elemanları almadı.

let a = [1,2,3,4,5,6,7,8]
let b = [2,4,6,8]
let c = [...a , ...b ]
let C = new Set(c)
console.log(C) //İki diziyi birleştirip unique değerleri aldı.

//map
const map =new Map()
map.set("name","Mehmet")//oluşturulan map içerisine key ve eleman eklemek için set kullanılır.
map.set("1","str")
map.set(1,"num1") //istenilen veri türü key olarak kullanılabilir.
map.set(true,"bool1")
map.set(false,"bool2")
console.log(map)
console.log(map.keys) //sadece key'leri döndürür
console.log(map.values) //sadece değerleri döndürür
console.log(map.entries) //hem key'leri hem de değerleri döndürür.

let obj ={
    name: "Mehmet",
    age: 24
}
let map2 = new Map(Object.entries(obj)) //objeyi map'e çevirir.
console.log(map.get("name")) //objenin name değerini döndürür.