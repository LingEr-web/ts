let a0: string;
//=======================================字面量================================
// 也可以直接使用字面量进行声明
let a1:10;
a1 = 10;

// 可以使用|连接多种类型
let a2: "male" | "female" | "aaa";
a2 = "aaa";
a2 = "male";
a2 = "female";

let a3: boolean | number;
a3 = true;
a3 = 1;

//======================================= any ================================
// any表示任意类型，一个变量设置为any后相当于对该变量关闭了ts的类型检测
// 使用ts时，不建议使用过any类型，let a4默认为any类型（隐式的any）
let a4 : any;
a4 = 10;
a4 = "hello";
a4 = true;

//=======================================unknown================================
// 未知的类型
let a5 : unknown;
a5 = 10;
a5 = true;
a5 = "hello";


// any和unknown的区别
a0 = a4;// 可以将any类型变量赋值给任意类型变量
// a0 = a5; // unknown不可以赋值给其它类型变量

// 把unknown赋值给string的解决方法
if(typeof a5 === "string"){
   a0 = a5;
}
// 类型断言
// 用来告诉解析器变量的实际类型
a0 = a5 as string;
a0 = <string>a5;
//======================================= void ================================
function f1():void{
   return null;
}
function f2():never{
    throw new Error("错误");
}