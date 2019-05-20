# npm-link
links your local libs by adding "linkTo": ["lib1", "..."] in your package.json

# install
npm i -g npm-link

# Hou to use it
1. go to your local lib and run npm link (this commond link your lib to the global npm modules)
2. go to the depending lib and adding "linkTo": ["<local lib name>", "..."] to the package.json
3. run npm-link

