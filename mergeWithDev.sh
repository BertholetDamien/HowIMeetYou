git merge --no-commit dev
git reset HEAD src/firebase-config.json
git checkout -- src/firebase-config.json
git reset HEAD .firebaserc
git checkout -- .firebaserc
git commit -m "Merged dev"
git push