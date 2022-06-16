// 声明一个变量a并且指定类型为number,在以后的使用过程中a的值只能是数字
let a: number;
a = 10;
// a="hello"; // 此行代码会报错，因为a的类型number,不能赋值字符串
let b: string;
b = "hello";

// 声明完变量直接赋值
let c: boolean = true;
// 如果变量的声明和赋值是同时进行，ts可以自动对变量进行类型检测
// let c2:boolean = true;
let c2 = true;

// 函数接收和返回值都是number
function sum(a:number, b:number):number {
    return a + b;
}
let result = sum(123, 456);