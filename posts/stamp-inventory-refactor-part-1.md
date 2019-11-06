---
date: 2019-11-06T06:30:53.869Z
title: Stamp Inventory Refactor - part 1!
description: >-
  Redoing a personal project - status update from (basically) the starting
  point.
tags:
  - '#stamp-inventory'
---
As the title suggests - tonight was spent making some reasonable progress towards updating my stamp inventory site!

A little background on this - I currently work for a print shop, and am the only person who makes self-inking stamps. A few years ago, when I first started learning to code, I decided I wanted to make a little site that could help me keep track of how many of each size stamp I have left in inventory, so it would be a bit easier to see when I needed to reorder things. 

At the time, I had taken a few online courses on spreadsheets and SQL, and felt like I might be able to make something that would work well. After a few failed attempts, all I was left with was frustration and a broken site. 

Finally, I managed to figure out how to hook my site up to a Google spreadsheet, and had a real working site! I was so stoked. It took a lot of hair pulling and it wasn't the absolute best, but it worked and updated properly and I showed it off to everyone I could. 

***

Fast forward a few years. I want to make stylistic changes to it, but remember the frustration and haven't touched the Google sheets API since the first time I made this work. I've finished a few courses that used MongoDB. I need new projects on my portfolio to help with the job search. 

And so, the decision to refactor my site was made!

I've been slowly attempting to work on this off and on for a few weeks - I was able to dismantle all of the jQuery and Google sheets things I wasn't going to need, and through following some FreeCodeCamp material (and my memory of my other courses) got the basics of the Express server in place. But I hadn't really made much progress on actually putting in the database and getting the site to talk to it. 

Well, tonight I finally really got down to it, and made some progress! I fleshed out the Express server part a bit, got my MongoDB cluster set up on Atlas and the connection string saved in my project, and cleaned up the last bit of the file structure. Doesn't feel like much to spell it out, but it's more direct progress than I've made since I started working on it again, so I'll take it!

Mind you, I can't get it started on my local testing site yet. 😜 But I'm fairly certain I can get that working tomorrow (🤞). I just ran out of time tonight, since I was working in the local library and they were about to close. 

***

What I still can't decide on, is how I want to do my schemas. 

We carry 5 different sizes of stamps, and for each size I keep track of the die box (the actual stamp part), and the mount (the holder for the die box). I'm also loosely keeping track of the 3 ink colors, and the gloves and 2 sheets we use to actually print the design and flash it onto the stamp. 

Do I want to keep each individual piece as it's own type, that just has a name and a quantity? This seems like it might be the best option. However, I do want to have some check boxes for if some of the accessory parts are used, and would need a way to grab the current value for those and decrease them by the same amount (or automatically decrease it by 1 or 2, for the gloves and print sheets). Seems like I should be able to do that....but I'm not sure how difficult it will turn out to be. 

I could also count each size as it's own thing, with a value for the die box and a value for the mount. This might make it easier to associate those 2 parts together, since more often than not they'll be used in the same quantity. But for some customers, we make new die boxes but reuse the mounts, so it won't always be equal in usage. And I still want a check box for the print sheets. 

Though I could maybe work in a double tap / hold functionality to the space where I show those quantities, and change them that way....wouldn't be quite as nice as changing it at the same time as the stamp option, but we do have times where people order more than one size so it wouldn't be that big of a deal to change each item separately. That make actually work really nicely, since I'm currently using a form to mark each item so anything will be better than that. 

I would also really like a nicer way to keep track of the inks....still trying to decide on the best way to do that. It's basically eye balled each time a die box gets filled, so it's not an exact, pre-filled amount that goes into each one. Which makes keeping track of how much is used a bit more difficult. 

Clearly I have some more thinking to do! First task is to get it so I can actually view the site and access the database at all. Then I can make a decision on the schema so I can start putting actual data into it! 😊
