//---- Bài 1:
//---- a) In ra màn mình 7 số bắt đầu từ số 0.
/*
for(let i=0; i<7; ++i)
{
    console.log(i);
}
*/

//---- b) In ra màn hình n số do người dùng nhập bắt đầu từ 0.
/*
let n=Number(prompt(`Hãy nhập n: `));
for(let i=0; i<n; ++i)
{
    console.log(i);
}
*/

//---- c) In ra màn hình dãy số bắt đầu từ 3 và kết thúc trước n do người dùng nhập.
/*
let n=Number(prompt(`Hãy nhập n: `));
for(let i=3; i<n; ++i)
{
    console.log(i);
}
*/

//---- d) In ra màn hình từ c đến trước n do người dùng nhập.
/*
let n=Number(prompt(`Hãy nhập n: `));
let c=Number(prompt(`Hãy nhập c: `));
for(;c<n; ++c)
{
    console.log(c);
}
*/

//---- e) In ra màn hình dãy số cách nhau 3 đơn vị từ c đến trước n do người dùng nhập.
/*
let n=Number(prompt(`Hãy nhập n: `));
let c=Number(prompt(`Hãy nhập c: `));
for(;c<n; c+=3)
{
    console.log(c);
}
*/

//---- f) In ra màn hình dãy số cách nhau s đơn vị từ c đến trước n do người dùng nhập.
/*
let n=Number(prompt(`Hãy nhập n: `));
let c=Number(prompt(`Hãy nhập c: `));
let s=Number(prompt(`Hãy nhập s: `));
for(;c<n; c+=s)
{
    console.log(c);
}
*/

//-------------------------------------------------------------------------------
//---- Bài 2: Tính giai thừa n do người dùng nhập:
/*
let n=Number(prompt(`Hãy nhập n: `));
let S=1;
for(let i=1;i<=n;i++)
{
    S*=i;
}
alert(`Giai thừa của ${n} là ${S}`);
*/

//-------------------------------------------------------------------------------
//---- Bài 3: Hỏi tuổi người dùng xem có đủ điều kiện để xem nội dung trên 14 tuổi không:
/*
let age=Number(prompt(`Hãy nhập tuổi của bạn: `));
if(age <=14 )
{
    alert(`Bạn không đủ tuổi để xem nội dung này!`);
}
else
{
    alert(`Bạn đã đủ tuổi`);
}
*/

//-------------------------------------------------------------------------------
//---- Bài 4: Hỏi người dùng nhập vào số x kiểm tra xem nằm ở nửa trên hay nửa dưới phạm vi từ 0 - 9
/*
let x=Number(prompt(`Hãy nhập số từ 0-9: `));
if(x>=0 && x <= 4 )
{
    alert(`Lower Half of 9!`);
}
else if(x>4 && x <= 9)
{
    alert(`Higher Half of 9!`);
}
*/

//-------------------------------------------------------------------------------
//---- Bài 5: Hỏi người dùng nhập vào 2 số x và n kiểm tra xem nằm ở nửa trên hay nửa dưới n:
/*
let n=Number(prompt(`Hãy nhập n : `));
let x=Number(prompt(`Hãy nhập x trong khoảng từ 0 -> ${n}: `));
if(x>=0 && x <= (n/2) )
{
    alert(`${x} is in lower half of ${n}!`);
}
else if(x>(n/2) && x <= n)
{
    alert(`${x} is in higher half of ${n}!`);
}
*/

//-------------------------------------------------------------------------------
//---- Bài 6: Hỏi người dùng nhập vào số x kiểm tra xem là số chẵn hay số lẻ:
/*
let x=Number(prompt(`Hãy nhập x: `));
if(x===0 )
{
    alert(`${x} là số lưỡng tính "0"`);
}
else if(x == x.toFixed(0) && (x*x)%2==0)
{
    alert(`${x} là số chẵn !`);
}
else if(x == x.toFixed(0) && (x*x)%2!=0)
{
    alert(`${x} là số lẻ!`)
}
else
{
    alert(`${x} không phải số nguyên !`)
}
*/

//-------------------------------------------------------------------------------
//---- Bài 7:
// a) 6 L’s and H’s, half L’s, half H’s (L means low, H means high):
/*
let sum=6;
let L_half=0;
let H_half=0;
L_half=H_half=sum/2;
console.log(`${L_half} L`);
console.log(`${H_half} H`);
*/

// b) n L’s and H’s in total, n entered by user
/*
let n=Number(prompt(`Hãy nhập n: `));
let L_half=0;
let H_half=0;
if(n==n.toFixed(0) && n%2==0)
{
    L_half=H_half=n/2;
    console.log(`${L_half} L`);
    console.log(`${H_half} H`);
}
else
{
    H_half=Math.floor(n/2);
    L_half=n-H_half;
    console.log(`${L_half} L`);
    console.log(`${H_half} H`);
}
*/

// c) 8 1’s and 0’s in total, consecutively
/*
let total=8;
for(let i=0;i<8;++i)
{
    if(i%2==0)
    {
        console.log(`0`);
    }
    else
    {
        console.log(`1`);
    }
}
*/

// d) n 1’s and 0’s in total, consecutively, n entered by user
/*
let n=Number(prompt(`Hãy nhập n: `));
for(let i=0;i<n;++i)
{
    if(i%2==0)
    {
        console.log(`0`);
    }
    else
    {
        console.log(`1`);
    }
}
*/

//-------------------------------------------------------------------------------
//---- Bài 8:
// Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows

let weight = Number(prompt(`Cân nặng của bạn là: `));
let height = Number(prompt(`Chiều cao của bạn là: `))
let BMI = weight/(height*height);

alert(`Chỉ số BMI của bạn là ${(BMI).toFixed(2)}`);

if (BMI < 16)
{
    alert(`Bạn bị suy dinh dưỡng !`);
}
else if (BMI >= 16 && BMI < 18.5)
{
     alert(`Bạn bị gầy !`);
}
else if (BMI >= 18.5 && BMI < 25)
{
    alert(`Bạn bình thường !`);
}
else if (BMI >= 25 && BMI < 30)
{
    alert(`Bạn bị thừa cân !`);
}
else 
{
    alert(`Bạn bị béo phì !`);
}
