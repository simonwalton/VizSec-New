
cp -r src/app/jekyll/* ../webdeploy/
cd ../webdeploy/
git add *
git commit -a -m"Deployment"
git push origin master

