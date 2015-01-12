---
layout: portfolio-item
project: "IsoPods"
client: "IsoPods"
role: "Mobile Developer"
included: "Mobile development"
image: "../images/isopods.png"
site: "https://github.com/Gamble715/SlotMachine"
icon: icon-tablet
groups: '["all", "mobile"]'
tags: ["all", "mobile"]
---


IsoPods is a company that reached out to me in need of an MVP for testing their service. The idea behind IsoPods is to put soundproof rooms in airports so flyers who have especially long layovers can get some R and R before their next flight. The main idea was to build an iPad app that would take them through an explanation of what IsoPods is or just immediately allow them to sign in for a session. After they sign in they are given the door code so they can get in, a timer starts and the ipad locks. After they are finished they press a button to unlock the screen and they are presented with how much they will be charged.

Being an MVP, we decided to keep it simple and steer away from native development. Instead I built as a web app that was specifically built for an ipad in landscape view. By building it this way I could develop the backend and whn they were ready to go native I could turn the back end into an API that would feed the payment and time data to the native app.

The most interesting part of the project was the Stripe integration. I needed to make sure I securly captured the users card information without charging them right away. I found that I could send the data to Stripe and the API would give me a key. When this key was later delivered to the API for payment, it would look at my secret configuration and decode the key to find the correct card information. This allowed me to time the users stay and charge them according to its length. Needless to say there were some great lessons I learned in building this project.



## Lessons Learned

1. #### KISS is best when the client just needs to test user flows.
- Building an app should usually start with how the user will use it. That is why "design first" principles apply to so many consumer applications. Wireframing and mockups are usually the first step but from there people tend to want to jump straight into building the whole app. I found it advantageous especially in this client's case to build a super simple, yet functional prototype. While not pretty or robust, the app allowed them to let users interact with it and better hone their understanding of the use case without breaking the bank on a native mobile app.
2. #### Build the foundation in anticipation of future iterations.
- In the last point I pointed out that keeping it simple has its advantages. I also want to stress that future proofing where possible is also a good thing. I knew eventually after testing this app the client would want to create a more ronbust application ready for prime-time. I made sure to build the app in a framework and in a way that would allow future versions to use the code that has already been written. This allows for both less work and a coherent iterative process to building the service.

## Technologies Used

- #### Ruby on Rails
- #### Stripe (for payments)
- #### jQuery
- #### Postgres