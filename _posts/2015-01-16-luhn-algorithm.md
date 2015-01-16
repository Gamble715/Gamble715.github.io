---
layout: post
title:  "Luhn Algorithm"
subtitle: "Check the validity of credit card numbers."
date:   2015-01-16
categories: javascript, exercises
image: "../../images/checkers.jpg"
permalink: "/blog/luhn"
shortUrl: "http://bit.ly/1Csnb7S"
tags: ["JavaScript", "Exercises"]
---


*To keep my coding chops fresh I go to [Codewars](http://www.codewars.com/) and run through some exercises. I will post the more interesting ones here and go step by step over how I initially tried to tackle the problem, and what ended up being the best solution.*

## The Problem

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

####Example:

Here is the algorithm:

If there are an even number of digits, double every other digit starting with the first, and if there are an odd number of digits, double every other digit starting with the second. Another way to think about it is, from the right to left, double every other digit starting with the second to last digit.

	1714 => [1*, 7, 1*, 4] => [2, 7, 2, 4]

	12345 => [1, 2*, 3, 4*, 5] => [1, 4, 3, 8, 5]

	891 => [8, 9*, 1] => [8, 18, 1]

If a resulting doubled number is greater than <span class="code">```9```</span>, replace it with either the sum of it's own digits, or <span class="code">```9```</span> subtracted from it.

	[8, 18*, 1] => [8, (1+8), 1] => [8, 9, 1]

 (or)

	[8, 18*, 1] => [8, (18-9), 1] => [8, 9, 1]

Sum all of the final digits

	[8, 9, 1] => 8+9+1 => 18

Finally, take that sum and divide it by <span class="code">```10```</span>. If the remainder equals <span class="code">```0```</span>, the original credit card number is valid.

	18 (modulus) 10 => 8.

####will return:

8 does not equal 0, so 891 is not a valid credit card number.

## My Initial Thoughts

My first intentions were:

1. Certainly I need to change the numbers into an array.
2. I need to find a way to reverse through the array so I can skip an even or odd conditional all together.
3. Minus 9 from the double digits because it is easier than splitting the digits.
4. Use the [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function to add all the elements together at the end.

I did get the answer after a lot of code wringing but it was quite a mess of array iterations and conditionals. Before submitting my  answer I thought to myself there has to be a better (cleaner) way of finding these numbers. The best answers on the next page did not dissapoint. Instead of going over the code that I wrote I want to go through a very clever answer that was posted. It certainly taught me a few things about how to deal with numbers in JavaScript, I hope you will learn a thing or two as well.

## The Solution

I was quite honestly blown away with this answer because I dont think I would have solved it this way, but after breaking it down and seeing how its author approached the problem I will certainly consider using this technique in similar future problems.

Keep in mind that this is not my code. I will be going over it, doing my best to interperate each line:

	function validate(n){
	  var sum = 0;

	  while (n > 0) {
	    var a = n % 10;
	    n = Math.floor(n / 10);

	    var b = (n % 10) * 2;
	    n = Math.floor(n / 10);

	    if (b > 9) {
	      b -= 9;
	    }

	    sum += a + b;
	  }

	  return sum % 10 == 0;
	}

So just after reading it, one thing should jump out at you: There are no arrays! My first reaction on seeing this code was, "Wow, I have to know how this works!" So let's start from the top:

	var sum = 0;

Seeing as how the algorithm calls for the summation of the numbers at the last step, this line must represent the aggragate which will eventually go into what is the return boolean of this function.

	while (n > 0) {

This is where the magic begins. Instead of iterating over the array of numbers, the author uses a <span class="code">```while```</span> loop which indicates that <span class="code">```n```</span> will be somehow diminish during the loop until it hits <span class="code">```0```</span>.

	var a = n % 10;

Instead of creating an array and working their way backwards, the author here uses the [remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25)) to find the remainder of the given number when divided by <span class="code">```10```</span>. In other words, they are singling out the digit in the ones place. Instead of using an array to find the right most digit, the author is using the decimal system, brilliant. But the magic doesnt stop there:

	n = Math.floor(n / 10);

The previous line served to capture the right most digit, this line serves to psuedo iterate by taking off the digit in the ones place alltogether. The author ensures that there are no decimals by using [<span class="code">```Math.floor()```</span>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) to round down and essentially shift the number to the right.

	var b = (n % 10) * 2;

This line looks mighty familiar. Just two lines up the author uses a similar syntax, but now that this is the second digit from right to left of the number it needs to be doubled. So now we have two numbers stored in variables, the second of which is doubled. I hope you can see what will happen next:

	n = Math.floor(n / 10);

Again the author uses the cool divide by ten and round down trick to shift the number to the right and psuedo iterate over the number.

	if (b > 9) {
	  b -= 9;
	}

Just how the example told us, if the doubled digit is more than <span class="code">```9```</span> the two digits should be added together or <span class="code">```9```</span> should be subtracted from it. The author decided to go the easier route and just subtract <span class="code">```9```</span> rather than convert the number and add the digits together (yay for me, I was right that that way was easier!)

	sum += a + b;

Just as I noted earlier, the <span class="code">```sum```</span> variable was inevitably going to be used to aggregate all of the digits. However, instead of adding them all together at the very end, the author has decided to keep a running total and add the two digits to the <span class="code">```sum```</span> at the end of the loop after they have been assigned to the <span class="code">```a```</span> and <span class="code">```b```</span> variables.

	return sum % 10 == 0;

As the last line of the function it needs to return a boolean. Again, the author uses the [remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25)) but this time instead of getting the remainder they are checking to see if it is divisable by <span class="code">```10```</span>. In plain english the line reads, "if the sum is divisable by <span class="code">```10```</span> with a remainder of <span class="code">```0```</span> return <span class="code">```true```</span>, otherwise return <span class="code">```false```</span>."

## Lesson Learned

The first thing I learned right off the bat was that there was an algorithm that can check the validity of credit card numbers. This function works so you can try it with your cards to see it in action (let's hope it doesnt return false!)

The more important lesson was like the previous [Checkerboard Exercise]({{site.baseUrl}}{{site.data.routes.blog}}/checkerboard) I over engineered my solution. At first, I thought that converting the digits into an array would make it easier for me to manipulate them. I was half right. It made it easier to manipulate given the fact that I had no other ideas on how to solve the problem. But if I think about the ways I could manipulate numbers and strings without converting them into arrays the answers that come to me would be cleaner and more efficient. It is the age old software development problem where when you have a hammer (i.e. array manipulation) everything begins to look like a nail (i.e. a problem it can solve).

*Please leave a comment if you see a mistake, or know of another way you could solve this problem!*