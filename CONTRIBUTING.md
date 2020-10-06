### ** How to Contribute **

Please only contribute if you are a super-newbie coder with experience in html, css and/or javascript.

### There are a couple of different ways you can contribute to this project:

**1)** Take a look at the issues tab and see if there's an issue that you want to resolve. Write a comment asking to be assigned. **Wait to be assigned** (please be patient - I may be at school or afk) Once assigned fork the repo, clone it to your machine and make your edits. Then when you're done make your Pull Request back to this repo.

or 

**2)** Within the experiences folder create your own page to add to the Super-Newbie's guide with tips, tricks and what you've learnt/your experience of Hacktoberfest (think like an article or blog post). You can even create your own CSS stylesheet. 

### Name your files Your-name.html and Your-name.css so they are easy for me to keep track of :)

The only prerequisite is that you add a **link back to the homepage (index.html) file at the top of your page**. Then make your Pull Request. We will then manually add a link to your page from the homepage so that everyone can read about your experiences (this can take a while if there are many submissions, please be patient).

### Setting Upstream remotes for returning contributors

When you intend to make multiple contributions to a repository it is very easy for you to get your forked repo out of sync with this original repo.

To overcome this, you have to set your upstream remote as this repository.

From the command line (UNIX based, I'm afraid I'm not too familiar with Windows these days) you can follow these instructions:
```
 git remote -v
 
 ```
 
This will list the current remotes. It should show something like this:
```

origin git@github.com:<username>/guide-to-HF.git (fetch)
origin git@github.com:<username>/guide-to-HF.git (push)

```
Then you can do this:

```

git remote add upstream git@github.com:emmalearnscode/guide-to-HF.git

```

Now if you do git remote -v again you should see:

```

origin	git@github.com:<username>/guide-to-HF.git (fetch)
origin	git@github.com:<username>>/guide-to-HF.git (push)
upstream	git@github.com:emmalearnscode/guide-to-HF.git (fetch)
upstream	git@github.com:emmalearnscode/guide-to-HF.git (push)

```

Now, before you do new work on the repo, you should pull any updates in from this original repo like this:

```

git pull upstream master

```

This takes all the changes on this repo and applies them to the fork to keep them in sync.

If anyone needs more detail to understand this, feel free to [@JacksonBates](https://twitter.com/JacksonBates)  :)

### ** RULES **: 

**-** No explicit content

**-** Any images should be optimized for web

**- Changes made to any files (except the experience folder) will be marked as invalid unless you raise an issue and get the go ahead first before making your pull request.**


