//======================================= object ================================
let b0: { name: string, [propName: string]: any };
b0 = { name: '郭金玲', age: 18 }

let b1: { name: string, age?: number };
b1 = { name: '郭金玲', age: 18 };
b1 = { name: '郭金玲1' };

let b2: (a1: number, a2: number) => number;
b2 = function (n1: number, n2: number): number {
    return n1 + n2;
}
//======================================= array ================================
let b3: string[];
b3 = ['a', 'b'];
let b4: Array<number>;
b4 = [1, 2, 3];
//======================================= 元组 ================================
// 元组，元组就是固定长度的数组，效率会好一些
let b5: [string, number];
b5 = ['111', 122];
//======================================= 枚举 ================================
enum Gender {
    Male,
    Female
}
let i: { name: string, gender: Gender };
i = {
    name: '郭金玲',
    gender: Gender.Male
}

console.log(i.gender===Gender.Male);

let b6 : {name:string}&{age:number};
b6 = {name:'郭金玲',age:26};


// 类型的别名
type myType = 1|2|3|4|5;
let b7:myType;
b7 = 1;
