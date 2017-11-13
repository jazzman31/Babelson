var process = require('process');
var fs = require('fs');
class Versionizer {
    constructor() {
        this.myArguments = process.argv.slice(2);
        console.log(`Im Versionizer! and I dont have a version of my Own!!!
        
        arguments:
                   set version 'x.x.x'
                   set name
                   set version increment ['major', 'minor', 'patch']
                   
                   all of these must end with a statement to the footprint.json path.
                   example: set version increment minor footprint@../footprint.json
        `);

        if (this.myArguments[0] === 'set') {
            if (this.myArguments[1] === 'version') {
            }
            else if (this.myArguments[1] === 'name') {
            }
            else if (this.myArguments[1] === 'version') {

                

            }
        }
        //set version

        //set name

        //writeFootPrint
        //read/analyzeFootPrint
    }

    analyzeFootPrint(path) {

    }
}
new Versionizer();