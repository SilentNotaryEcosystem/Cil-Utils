const assert = require('assert');
const commandLineArgs = require('command-line-args');
const readline = require('readline');

const factory = require('./factory');

let {fundsPk} = readCmdLineOptions();

;(async () => {
    if (!fundsPk) fundsPk = await questionAsync('Enter PK: ', true);

    const kpOwner = factory.Crypto.keyPairFromPrivate(fundsPk);
    console.log(kpOwner.address);
})()
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
    .then(_ => {
        process.exit(0);
    });


function readCmdLineOptions() {
    const optionDefinitions = [
        {name: "fundsPk", type: String, multiple: false}
    ];
    return commandLineArgs(optionDefinitions, {camelCase: true});
}

function questionAsync(prompt, password = false) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(prompt, answer => {
            rl.close();
            if (password) {
                if (process.stdout.moveCursor) process.stdout.moveCursor(0, -1);
                if (process.stdout.clearLine) process.stdout.clearLine();
            }
            resolve(answer.trim());
        });
    });
}
