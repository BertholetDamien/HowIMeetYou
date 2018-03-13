git merge --no-commit dev
git reset HEAD src/firebase-config.json
git checkout -- src/firebase-config.json
git commit -m "merged dev"