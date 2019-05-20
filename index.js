#!/usr/local/bin/node
const {linkTo} = require(`${process.cwd()}/package.json`);
const util = require('util');
const exec = util.promisify(require('child_process').exec);

main();

async function main() {
    if (!linkTo) {
        console.log(`linkTo is empty. add "linkTo": ["lib1", "..."] to package.json if you need to link local libs`);
        return;
    }

    for (const lib of linkTo || []) {
        try {
            await exec(`npm link ${lib}`);
            console.log(`linked to: ${lib}`)
        } catch(e) {
            console.error(`Failed to link lib: ${lib}`, e)
            process.exit(1);
        }
    }
}