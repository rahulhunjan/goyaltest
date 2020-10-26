# projectram

1) initializing a git repo 
```
git init
```
2) Create new repo on [github](https://github.com)
3) add the remote on your local machine
``` 
git remote add <origin_name> <paste the repo URL>   
``` 
Generally, we use origin as origin_name

4) Pull the gitignore or readme files from remote repository(if any) 
```
git pull <origin_name> <branch_name>   
```
 If we created an empty git repo online, then there is no need of this command

5) Add the changes to git
```
 git add .
 ```    
 .[dot] means that add all the changes that we have done till now

6) Now commit your changes
```
git commit -m "<commit_message>"
```
7) You can check the status of the repo on local machine using  
```
git status
```
This will tell you on which branch you are and what changes have you done.

8) Use
``` 
git branch
```
to know about the branch on which you are

9) To make new branch, first of all add and commit your changes in the current branch, then use this command  
```
git checkout -b <branch_name>
```
10) To push the changes on the remote repo on github, use 
```
git push <origin_name> <branch_name>
```
11) To push the changes from local branch to another remote branch, use the following command 
```
git push <origin_name> <local_branch>:<remote_branch>
```
12) delete branch locally 
```
git branch -d localBranchName
```
13) delete branch remotely 
```
git push origin --delete remoteBranchName
```
14) To change the branch 
```
git checkout main
```
