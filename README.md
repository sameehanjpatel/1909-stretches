# Stretches

## Setup
Be sure that Jest CLI is installed
```
$ npm install -g jest-cli
```

Also run `npm install`
```
$ npm install
```


The goal of these exercises is to practice JS fundamentals buy writing functions and tests, and to acquaint you with the Node.js and Github environments. 

Fork this repo, then clone **your** fork to your machine. Make sure this git repo isn't inside another git repo!

After forking and cloning, navigate to the git repo via the command line. Once you're there run `git remote --v`. You should see something like this:

```
$ git remote --v
> origin  https://github.com/YOUR_USERNAME/1909-stretches.git (fetch)
> origin  https://github.com/YOUR_USERNAME/1909-stretches.git (push)
```

Then you'll want to run 
```
$ git remote add upstream https://github.com/russellwmoore/1909-stretches.git
```

If you run `git remote --v` now, you should see something like this:

```
$ git remote --v
> origin  https://github.com/YOUR_USERNAME/1909-stretches.git (fetch)
> origin  https://github.com/YOUR_USERNAME/1909-stretches.git (push)
> upstream  https://github.com/russellwmoore/1909-stretches.git (fetch)
> upstream  https://github.com/russellwmoore/1909-stretches.git (push)
```

This means we've added another reference to a remote repository (in this case, Russell's repository) and called it `upstream`. 

Instructors will add a new problem each evening before class and you will need to `pull` down the new material to your computer to get access to the problem. Run `git pull upstream master` in the folder of your forked repository.

```
$ git pull upstream master
```

This will take whatever has been committed on the upstream remote (in this case, Russell's repo) and merge it into your repo. 

## Solving the Problems

Go to the `questions` directory access the latest question. If the problem you are working on is called `isEqual` then you can run the tests for this problem by running:
```
$ jest isEqual
```

You can also choose to run Jest in `watch mode` so every time you save your work, the tests will re-run with the changes you've made taken into effect: 
```
$ jest --watch forEach
```

# Node
You can also run the file you are working on in it's entirety by using Node. Be sure to call your function with an input and use some `console log`s otherwise this might not be helpful:

```
$ node isEqual.js
```

# Submitting
After you've finished or time has expired, you'll need to add, commit and push your code.

```
$ git add .
$ git commit -m 'stretch solution isEqual'
$ git push origin master
```