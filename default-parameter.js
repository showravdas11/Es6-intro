// function add(num1, num2 = 0) {

//     // option---2
//     // num2 = num2 || 0;

//     // option-1
//     // if (num2 == undefined) {
//     //     num2 = 0;
//     // }
//     const total = num1 + num2;
//     return total;
// }

// const result = add(17, 15);
// console.log(result);


// কোনো একটা ফাংশানে দুইটা প্যারামিটার দেওয়া আছে কিন্তু তাদের মান দেওয়া আছে একটি সে ক্ষেত্রে উপরের অপশন গুলা ব্যবহৃত হবে


function marks(bangla, math, english = 54) {
    const total = bangla + math + english
    return total;
}

const output = marks(75, 82);
console.log(output);

// আর ডিফল্ট মান বলতে বুঝায় মনে করেন আমি তিনটা প্যারামিটার নিলাম এবং নিচে ফাংশান কল করে আমি তাদের ভেলু দিছি দুইটা এজন্য আমি যদি কনসোল লক করে আউটপুট দেখতে চাই তাহলে আমার নান আসবে এজন্য আমি যেখানে প্যারামিটার ডিক্লেয়ার করব সেখানে আমি একটা ডিফল্ট মান সেট করে দিতে পারি সেটা যাই হোক না কেন এবং এই ডিফল্ট মান ওই ভ্যলুগুলার সাথে যুক্ত হবে 