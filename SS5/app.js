// 1.D, 2.C, 3.B, 4.A, 5.B, 6.A, 7.D, 8.B
// Bài 9
var m  = [1, 2, 3, 4, 5, 6, "hh","9", 80, 100
]
m.splice(6, 2)
console.log(m)

// Bài 10
let string =  "High knowledge, high return";
let newString = string.split(' ')
console.log(newString)
// Bài 11
class people {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address  = address
    }
 }

 class Students extends people {
    constructor(name, age, address, id, math, physical, chemistry) {
        super (name, age, address)
        this.physical = physical
        this.chemistry = chemistry
        this.math = math
    }
 }
 let dohien = new Students ("Nguyen Duc Quoc Dai", 16, "Thanh Hoa", 9, 9, 9)
 console.log(quocdai)