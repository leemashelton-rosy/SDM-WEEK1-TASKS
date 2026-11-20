//1.Write a JavaScript function to add two numbers and display the result
function add()
{
    var a=10;
    var b=10;
    console.log("Addition of Two Numbers",a+b);
}
add();

//2.Write a function to check whether a given number is even or odd
function even_odd(num)
{
    if(num%2==0)
    {
        console.log(num,"is Even");
    }
    else
    {
        console.log(num,"is Odd");
    }
}
even_odd(5);

//3.Write a function to find the largest of three numbers
function largest(num1,num2,num3)
{
    if(num1>num2 && num1>num3)
    {
        console.log(num1,"is largest");
    }
    else if(num2>num1 && num2>num3)
    {
        console.log(num2,"is largest");
    }
    else
    {
        console.log(num3,"is largest");
    }
}
largest(5,10,3);

//4.Create an array of 5 numbers and calculate their sum
let arr=[5,4,3,2,1];
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i];
}
console.log("Total Sum of Array is",sum);

//5.Write a JavaScript program to find the largest number in an array
let arr1=[10,25,46,98,87,105];
var large=arr1[0];
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]>large)
    {
        large=arr1[i];
    }
}
console.log(large,"is the Largest Number from the array");

//6.Write a program to reverse the elements of an array
let arr3=[1,2,3];
let res=[];
for(let i=arr3.length-1;i>=0;i--)
{
     res.push(arr3[i]);
}
console.log("Reverse of array is",res)

//7.Create a student object with name, age, course and marks. Display all its properties
var student={name:"Leema",age:20,course:"CS",marks:98};
console.log("Details of Student Object:");
console.log("Name:",student.name,"\n","Age:",student.age,"\n","Course:",student.course,"\n","Marks:",student.marks);

//8.Create a product object with product name, price and quantity. Calculate and display the total price
let product={pname:"Soap",price:60,quantity:4};
console.log("Product Name:",product.pname,"\n","Product Price:",product.price,"\n","Quantity:",product.quantity);
console.log("Total Price is",product.price * product.quantity);

//9.Create a webpage with a heading and a button. When the button is clicked, change the heading text
function fun()
{
    var btn=document.getElementById("btn");
    var btn2=document.getElementById("btn2");
    document.getElementById("btn").innerHTML="Welcome "+btn2.value;
}

//10.Create a webpage with a button that changes the background colour when clicked.
function fun2()
{
    document.body.style.backgroundColor="pink";

}