# Welcome to conteNXT Backend App

Description will come here.....

# Prerequisites :star2:
 

Things to think before you start installing and running the project

**Supported operating systems**:

- Ubuntu 18.04/Debian 9.x
- CentOS/RHEL 7
- MacOS 
- Windows 10
- Docker

*Please note that this module may work on other operating systems, but these are not tested at this time.*

**Node:**

- NodeJS >= 10.x
- NPM >= 6.x - npm is a software Package Manager and Installer

**Database:**

- MongoDB >= 4.x

**General:**

- Git 

**Other dependencies:**

We provide best practices to build scalable, cost-efficient apps, leveraging powerful technologies and for that we are building application in microservices architecture. Vulnerability Management module is dependent on other microservice called Admin and you need to install in order to run this module.

Follow the instructions to install and run [**Admin**](https://bitbucket.org/splitdubai/zeetv-be/src/master/) module

# Getting Started   :sunrise_over_mountains: 

These instructions will get you a copy of the project up and running on your local machine for development.
Here, we will learn how to set up this project for the Node.js 

# Installation :hourglass:

*Below installation instructions are for Linux system, you can find the way to install in other Operating System*


## Nodejs

 *Install dependencies that are essential for the nodejs (*gcc-c++ make*).*

    $ yum install –y gcc-c++ make

 *Download the latest version of the node package manager.*

    $ curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -

 *Install the desired version of nodejs.*

    $ yum install nodejs

*Wanna check the version of the nodejs, here it is:*


    $ node -v

*Install process manager (pm2):*

    $ npm install pm2 -g

So everything was green :green_heart: ? you installed Nodejs successfully! :thumbsup: :thumbsup: :thumbsup:
## Git

The purpose of Git is to manage a project, or a set of files, as they change over time. Git stores this information in a data structure called a repository. A git repository contains, among other things, the following: A set of commit objects.

*Logged into your Linux server, first update your default packages*

    $ yum update    

*Install Git*

    $ yum install git

*Wanna confirm? run this command and get the output*

    $ git --version

## Setup 
*Clone or download this repo*

    $ git clone git@bitbucket.org:splitdubai/zeetv-be.git

*Navigate to the downloaded folder*

    $ cd zeetv-be

*Change to specific Git branch (optional)*

    $ git checkout <branchName>

*Install npm packages*

    $ npm install

## Run   :rocket:
 Before you start, please check **config/default.js** file to update configuration for MySQL, MongoDB and Redis and some more

*To start app in default development mode:*

    $ IV=<IV> ENCRYPTION_KEY=<Encryption_Key> pm2 start app.json    

*To start app in stage mode:*

    $ IV=<IV> ENCRYPTION_KEY=<Encryption_Key> pm2 start app.json --env stage

It is mandatory to pass **ENCRYPTION_KEY** and **IV** parameters as they are required for decrypting the configuration variables
It is optional to pass **SECURE** parameter to start the app in secure mode.

*Open any browser and type* **http://localhost:7085**


**Enjoy** :tada: :clap: :beers:

# Dockerization     :truck:
You can also run this app as a Docker container, have a look on step by step instructions for [**Dockerization**](https://bitbucket.org/splitdubai/zeetv-be/src/master/DOCKERIZATION.md)


# Unit Testing   :coffee: :tea:

For unit testing we are using following NPM packages:

* [**Mocha**](http://mochajs.org/)
* [**Chai**](http://chaijs.com/)

Our development environment is ready for unit testing. Make sure above defined npm packages are installed in your local system.  

    $ npm install mocha chai --save-dev

**Build**

*We shall keep all testing files in a separate /test directory*

    $ mkdir test

**Add file(s) for testing**

    $ touch test/test-pages.js

**Run**

*Let's run all the test cases inside the test folder*

    $ user_name=<username> user_password=<password> IV=<IV> ENCRYPTION_KEY=<Encryption_Key> npm test

*If you want to test only a single file, then run*

    $ user_name=<username> user_password=<password> IV=<IV> ENCRYPTION_KEY=<Encryption_Key> npm test <path-to-file/filename-to-run-test>

# Change logs  :books:

Get the details of implemented features so far, [**Check it**](https://bitbucket.org/splitdubai/zeetv-be/src/master/CHANGELOG.md)

# License    :clipboard:
  TBD

# Firebase deployment

**Steps**

*Check prod or dev configs*

*Logout from the existing account*

    $ firebase logout

*Login to specific env.* 
    
    $ firebase login

*Now deploy* 

    $ firebase deploy --only functions

*You might need*

    $ firebase functions:log if any error