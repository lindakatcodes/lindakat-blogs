---
title: Hello World - I'm Learning Vue!
description: >-
  A personal cheat sheet to help solidify my understanding of Vue's concepts as
  I learn them.
tags:
  - vue
date: 2020-03-07T03:28:56.275Z
---
I've been debating on learning a framework for a little while now, & it was recently advised to me that it would be smart to do job-wise. So I've finally decided to buckle down & learn one, & decided on Vue!

My reasoning - it's open source based; people I respect in the field rave about it & work on it; it's growing quickly; & it seemed to be a bit of a middle ground between React & Angular. Plus, I'm using a framework based on it for my personal blog! 

So I'm using this post as a basic, beginner's cheat sheet for examples of how to do things in Vue. This will be more about basic examples & what I come across, in my own words. I'm looking at how to use it, more than why it works, so I'll have it as a reference if I need it in the future.

So let's begin!

<hr>

# The Vue Instance

Any time you'd like Vue to control a part of the DOM in a project, you'll create a new instance of Vue. Basically, this is a structured grouping of information needed for a piece of your site. 

You declare the instance in your JS file, which will look something like this:

```
var app = new Vue({
```

```
  el: '#app',
```

```
  data: {
```

```
    product: 'Socks',
```

```
    description: 'A pair of warm, fuzzy socks'
```

```
  } 
```

```
})
```

Anytime you're starting a new instance, you use the keyword new. Think of the Vue instance as a big object, with lots of pieces of data (since that's essentially what you're doing - Vue holds a big options object, with all sorts of things). Here, we've got an "el", which stands for element - this is the ID you're trying to target in your HTML, the element this instance is going to be able to interact with. Then you can add some data, with whatever you'd like inside it. For these examples, it's building out a website to sell socks, so we've got a product & description listed.

Then in your HTML file, you can access the data from your instance with double braces around the key word. This is a JS expression used in HTML - it's pretty neat! And since this is a JS expression, you can also use this to tie different pieces of data together & create new values.

```
<div id="app">
```

```
  <div class="product-info">
```

```
    <h1>{{ product }}</h1>
```

```
    <p>{{ description }}</p>
```

```
  </div>
```

```
</div> 
```

<hr>

## Two quick side notes:

First - It's really easy to start using Vue - you can plug it into your projects with a script tag, like you would your style sheet or your regular JS files! 

Second - Vue is a reactive framework, which means that when you change a value in your Vue instance, anywhere it's referenced in your HTML will be updated automatically. This is almost like real magic, honestly. It's so cool.

<hr>

# Data / Attribute Binding

We can also directly bind data to an attribute in Vue. Unlike the expression
