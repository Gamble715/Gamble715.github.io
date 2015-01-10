---
layout: portfolio-item
project: "Affordably"
client: "Ourselves"
role: "Full Stack Web-Engineer"
included: "Web design and development"
image: "../images/affordably.png"
site: "http://www.affordably.me/demo#/daily"
icon: icon-desktop
groups: ["all", "web-development", "user-interface"]
---


Affordably was an app by the second startup I worked for, Guava. It's main goal was to take in the user's financial data and analyze it to figure out both fixed and discretionary exenditures. From there the app uses the user's monthly saving goal to compute a daily spending plan. If the user spent under this daily budget, the next day it would recompute and show that they could spend more if they wanted and still make their goals. Likewise, if they overspent then the budget would correct down ensuring the user can still reach his or her monthly goal.

When I arrived at Guava there was a considerable ammount of the app already finished. I was tasked with helping clean it up and conduct customer development to find new features that would be valuable to users. After many customers noted the clunky UI I took it upon myself to upgrade the piecemeal JQuery into an AngularJS powered single page application. I also spearheaded the mobile development by self teaching the Famous mobile framework an creating one code base for what would be our Android and iOS apps.

This was a great experience because I wore many hats and operated in all aspects of the startup. In the end it unfortunately failed but it was an experience I would never trade in because I learned many important lessons.

## Lessons Learned

1. #### Modularize as much code as possible from the get go.
- When I came in, most of the app's logic was in one giant library file, this made it difficult, even painful, at times when a bug would surface and we would have to sift through 2,000 lines of code to find it. Eventually we worked on breaking it up into separate methods and then separate files making it much easier to debug.
2. #### Know what to test and what to let slide.
- In a perfect world there would be 100% test coverage, there would also be enough time to write perfect code and find rediculously snug product-market fit. We all know these are not possible because of tradeoffs. The best we can do is be aware of these tradeoffs and use our judgement on what absolutely needs to be tested to ensure a high quality product and what can be overlooked to ensure an agile development cycle.
3. #### Dont rely on others to create mission critical value.
- A startup should have the main goal of creating enough value to sustain a healthy amount of growth. Depending on how aggressive you are, "healthy" can mean many different things but the main contingent is that you as the business owner are in control. We relied too heavily on a partner at the end of our startups life and it ended up costing us because we were no longer in control of our destiny.

## Technologies Used

- #### Ruby on Rails
- #### AngularJS
- #### Famous (for the mobile app)
- #### Plaid and Intuit APIs (to pull in financial data)
	- [Justin Crites](https://github.com/j4ustin) and I also wrote the first iteration of the [Plaid Ruby Gem](https://github.com/plaid/plaid-ruby).
- #### Postgres
