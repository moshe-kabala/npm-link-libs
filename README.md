# npm-link-libs
Links your local libs by adding "linkTo": ["lib1", "..."] in your package.json

# install

>npm i npm-link-libs

Or install it globally

>npm i -g npm-link-libs

# How to use it
## 1. Link lib 
Go to your local lib and run npm link ( this command link your lib to the global npm modules )
## 2. Add linked libs 
Go to the depended lib and add "linkTo": ["\<local lib name\>", "..."] to the package.json
## 3. Run the script 
>npm-link-libs

# license
MIT
