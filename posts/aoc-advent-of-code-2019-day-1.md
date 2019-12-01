---
title: AoC (Advent of Code) - 2019 Day 1!
description: 'Thoughts and code for day 1, & some writing fun!'
tags:
  - AoC
  - adventOfCode
date: 2019-12-01T07:24:50.832Z
---
Advent of Code is finally here, and I'm so excited!! This is such a fun code challenge, and I was really bummed when I couldn't keep up with it last year, so I'm determined to stay on it this year and follow through until the end!

<details>
<summary>**Spoilers will follow from here on out** - avoid until you've solved the problems if you want! Click the arrow to view.</summary>

This year is set in space! I think it'll be really fun to see how the story unfolds.
Day 1, thankfully, felt pretty good! 

I was able to refresh on how to use the array methods `map` and `reduce`, along with some recursion practice, which was good! One of the rare days where I felt like I knew what I was doing, which is always nice. 

I'm including these in today's post, but might start to exclude the first few lines in future posts. Basically, each day will start with reading in the input file, and parsing it as an array of either strings or numbers, or otherwise setting it up to be read. Think that will be a given once enough of these posts are done!

```javascript
// Read in the input file, get it into an array format, & store the test input as well
const fs = require('fs');

const data = fs.readFileSync('../2019 Solutions/inputs/day01input.txt').toString();

const input = data.split('\r\n').map(Number);

const testInput = [14, 1969, 100756];

// The formula needed to calculate the required amount of fuel - mass / 3, round down, -2
function formula(mass) {
  return Math.floor(mass / 3) - 2;
}

// Part 1 - perform this formula on each input value, then add all of those values together
const fuelOfMass = input.map((curr) => {
  return formula(curr);
});

const totalFuel = fuelOfMass.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(`Part 1: ${totalFuel}`);

// Part 2 - turns out, we need to process each input value through the formula until the number is as low as it can get and still be above 0, then add all of a single input's values together

const totalFuelOfMass = input.map((curr) => {
  let value = curr;
  let accumulator = [];

  do {
    value = formula(value);
    if (value > 0) {
      accumulator.push(value);
    }
  } while (value > 0);
  
  return accumulator.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
});

// then, we take all of the combined values and add those together
const newTotalFuel = totalFuelOfMass.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(`Part 2: ${newTotalFuel}`);
```

If you'd like to read the full breakdown for what today's puzzle required, you can check it out [on the main site](https://adventofcode.com/2019/day/1). You should be able to see it, even if you're not signed in. 

</details>

Part of this year's new changes on the official subreddit is a poem contest! Each day, you can submit a poem about the challenge itself, the creator, or general programming, and every few days they'll reward some people with reddit points and make a collection of their favorites for an end-of-year collection. I love poetry, so couldn't resist getting in on the fun for at least one day! Enjoy!

> Adventure awaits!
>
> Discover the cosmos
>
> Venture into the unknown
>
> Earn fifty stars to save Christmas!
>
> No one goes alone, however
>
> There's friendly folks to help
>
> Overly dramatic situations await
>
> Find Santa and bring him home!
>
> Come code with us!
>
> Outer space is calling
>
> Don't be afraid
>
> Elves will guide the way!
