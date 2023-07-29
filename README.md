# Planetary-View

**Hello, I am Akashay Anand. an undergrad based in INDIA**
// The Tools used in this project is quite new for me. it brings me exposure tools like AWS(lambda, s3, etc.), serverless framework.   
// I am documenting my work here in README.md file.  
//For any query you can contact me at akashayanand1@gmail.com


# SERVERLESS PROJECT 🥷

*Tech Stacks: NodeJS(axios, twilio) ,Serverless framework, AWS(Lambda, IAM, etc.), NASA API*

<br/>

### Let's First understand What is serverless⁉️
> Cloud computing model that enables developers to build and run application code without worrying about the underlying infrastructure.
> **We pay for the computing time we consumed.**
 
<br/>

> Many cloud providers provide services to implement this paradigm. such as AWS Lambda, Azure Functions, and Google Cloud Functions.
<br/>

**Why I used aws instead of other cloud providers?!**
> 
> as I have AWS free tier account. I have used it in some of my other projects. I am familiar with the AWS interface and its terminology. thats why I am going with it.  
> second reason is: the aws lambda can uphold 1 million requests and 3.2 million compute seconds per month in the free tier.  

## Overview 🤖
> Created a serverless project with NodeJS runtime which fetches the apod image and metadata regarding the same from NASA API. Then format that data and transfer it to my phone number using the Twilio library.  
> To automate this process I deployed it on AWS Lambda service which runs our function on certain events(for this it is 25 minute time period).  

## Initialization 🧑🏻‍💻

* create a project folder
  * initialize serverless in it ( guide: https://www.serverless.com/framework/docs/getting-started )
* initialize npm init
* install modules ( Axios, Twilio )


**[Note]: after initializing serverless; this two file should be appeared(serverless.yml & index.js) we will be working on this only**

### Serverless.yml
> open serverless.yml file.
> YAML files are generally used for configuration. you can say it is the advanced version of XML and JSON.
> For YAML you can prefer my documentation here: ___https://github.com/Akashay-Anand/Learn-YAML___   
///


#### lets start with yaml code

* this templet may contain most of the things except __event__ & __environment__

> **Environment**
> ``` yml
> # We can directly add it as jey value paire
>     environment:
>      API_KEY: "<Your API KEY here>"
>      Twilio_Account_SID: zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
>      Twilio_Auth_Token: zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
>      Twilio_Phone_Number: +12200000000
>      Personal_Nomber: +919000000000
> ``` 
 ///

> **EVENT**  
> It defines when will a function gets invoked, its frequency...
> ``` yml
># for this two keywords are used rate & cron
>
> # rate example
>     events:
>      - schedule:
>          rate: rate(10 minutes)
>
> # cron example
>    events:
>      - schedule: cron(0 20 * * 1) # Every Monday at 8:00 PM
>
> # cron syntax breakdown
> * * * * *
> - - - - -
> | | | | |
> | | | | +----- Day of the week (0 - 6) (Sunday to Saturday, 7 is also Sunday on some systems)
> | | | +------- Month (1 - 12)
> | | +--------- Day of the month (1 - 31)
> | +----------- Hour (0 - 23)
> +------------- Minute (0 - 59)
> ```




