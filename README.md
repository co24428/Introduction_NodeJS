## Set up git repo
~~~
// in case that makes several files already inside
git init
touch .gitignore // first of all, I need to ignore **/node_modules/
git add .
git commit -m "xxx"
git remote add origin [git@github.com:xxx/xxx/xxx]
git branch -M main
git push -u origin main
~~~