for(let i=0;i<5;i++){
    console.log(i)
}

for(let i=0;i<5;i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

for(let i=0;i<5;i++){
    console.log(i + " * " + i  + " = " + (i*i))
}

const names = ["mehmet", "ahmet", "gökhan", "oğuzhan", "tayfun"]
for(let i = 0; i<names.length; i++ ){
   console.log("Name : "+ names[i] +" Index: "+ i);
}

let faktöriyel = 1
for(let i=0;i<4;i++){ //Faktöriyel
    faktöriyel *= i+1
}
console.log(faktöriyel)

const nums = [1,2,3,4,5,6,7,8,9]
const numsKare = []
for(let i=0;i<nums.length;i++){
    numsKare.push(nums[i]**2)
}
console.log(numsKare) //nums dizisindeki elemanların karelerini bu diziye yazdırır.

let sayac = 0 
while (sayac<=5){ //while koşulu gerçekleşene kadar içerisindekileri gerçekleştir. 
    console.log(sayac)
    sayac++
}

let sayac2 = 0
do{ //While'dan farkı koşul doğru olmasa bile do içerisinde istenen işlemi bir kere çalıştırır. Çalıştırdıktan sonra koşul kontrolü yapar.
    console.log(sayac2)
    sayac2++
}while(sayac2 <=5)

for(let name of names){ //Dizinin elemanlarını çağırır. Döngü sayısı belirtmeye gerek kalmaz. Foreach gibi.
    console.log("İsim: ",name)
}

