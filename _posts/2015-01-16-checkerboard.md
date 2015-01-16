---
layout: post
title:  "Checkerboard exercise"
subtitle: "Generate a checkerboard given an integer."
date:   2015-01-16
categories: javaScript, exercises
image: "../../images/checkers.jpg"
permalink: "/blog/checkerboard"
shortUrl: "http://bit.ly/1Csnb7S"
tags: ["JavaScript", "Exercises"]
---


*To keep my coding chops fresh I go to [Codewars](http://www.codewars.com/) and run through some exercises. I will post the more interesting ones here and go step by step over how I initially tried to tackle the problem, and what ended up being the best solution.*

## The Problem

In JavaScript, write a method checkerboard which takes an integer size and returns a checkerboard of dimensions size x size. There are two colored squares on the checkerboard. Red squares are represented by the string [r] and black squares are represented by the string [b]. You MUST use the newline character \n to insert a newline at the end of each row.

- The top left corner should be a red square.
- Each row should have alternating squares in the row.
- The starting square on each row should also alternate.

####Example:

	checkerboard(8);

####will return:

	"[r][b][r][b][r][b][r][b]
	[b][r][b][r][b][r][b][r]
	[r][b][r][b][r][b][r][b]
	[b][r][b][r][b][r][b][r]
	[r][b][r][b][r][b][r][b]
	[b][r][b][r][b][r][b][r]
	[r][b][r][b][r][b][r][b]
	[b][r][b][r][b][r][b][r]"

## My Initial Thoughts

Two things popped into my head when I started:

1. There is a pattern where every other square must be the same.
2. Every nth square must contain a newline "\n".

While these thoughts were on the right track, the way I was thinking of implementing these rules was off base. I thought that creating an array to easily alternate and splice in the newlines was the easiest route. Unfortunately, my code quickly turned into a mess of for loops and conditionals. I am sure that I could have come to the right answer had I worked the code longer but I decided to go another route entirely.

## The Solution

After some pen and paper brainstorming I realized that arrays were not necessary at all because I am only being given an integer and it expected the function to return a string. That is when the lightbulb went on!

I remembered doing a two dimensional array problem a couple of days before and while the array aspect had proven fruitless, the double for loop to navigate it is what led me to a correct answer. Without furthur ado, here is my solution:

	function checkerboard (size) {
	  if( size <= 0 ) {
	    return "";
	  }

	  var board = "";

	  for( var x = 0; x < size; x++ ) {
	    for( var y = 0; y < size; y++ ) {
	      board += ( (x + y) % 2 == 0 ? "[r]" : "[b]");
	    }
	    board += "\n";
	  }

	  return board;
	};

So lets go through this function and see how it works, starting from the top:

	if( size <= 0 ) {
	  return "";
	}

This is a check to ensure that if 0 or a negative number is passed in as a parameter, the function will short cuircut and return an empty string. It is important that this is at the top of the function for performance reasons, otherwise the entire function would run and only at the end would it realize to return the empty string.

	var board = "";

This instantiates the board. Notice that it is a string and not an array. It is anticipating that the return statement needs a string.

	for( var x = 0; x < size; x++ ) {

This is where it gets interesting. This for loop will run as many times as there are rows in the checkerboard. Since <span class="code">```x```</span> is the horizonal axis on a graph it is semantic, which will help explain the code further down the function.

	for( var y = 0; y < size; y++ ) {

This for loop will run as many times as there are elements in the rows. By nesting the for loops I am creating a grid where I can both manipulate each row as well as each element within those rows. Again, the variable <span class="code">```y```</span> is semantic because it creates the multiple columns within the <span class="code">```x```</span> axis rows.

	board += ( (x + y) % 2 == 0 ? "[r]" : "[b]");

Here is where the real meat of the logic lies. It is much easier to explain this line if I start on the right side of the equal sign. What you are looking at is a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) which simply states that if the sum of the x and y coordinates divided by two has a remainder of 0 (i.e. is even) than use <span class="code">```"[r]"```</span> and if it is not 0 (i.e. is odd) use <span class="code">```"[b]"```</span>. The left side simply adds the result of the right side to the end of the board, thus creating an alternating <span class="code">```"[r][b]"```</span> pattern.

	board += "\n";

Notice that this line is out of the <span class="code">```y```</span> for loop's scope, which means it will only execute at the end of each <span class="code">```x```</span> loop (i.e. each row). Since both loops are using the <span class="code">```size```</span> parameter as a limit it will result in a square with equal numbered rows and columns.

	return board;

Once the loops are finished the only thing left to do is <span class="code">```return```</span> the <span class="code">```board```</span> variable from the function and voila! We have a square checkerboard with alternating red and black squares.

## Lesson Learned

As you can probably guess the biggest lesson I learned from this was that when given a problem, first break it down into what you are given and what is expected to be returned. Then think of the easiest way to convert one into the other. Sometimes it will involve changing the type to an array or object (especially when it needs to be sorted or searched), but most of the time you can use what is given to you to find the right answer without changeing the type more than once.

*Please leave a comment if you see a mistake, or know of another way you could solve this problem!*