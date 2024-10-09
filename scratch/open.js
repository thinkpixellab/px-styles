const fs = require('fs');
const path = require('path');
const INDEX_PATH = path.resolve(__dirname, './index.html');
const opn = require('better-opn');
console.log(`INDEX_PATH: ${INDEX_PATH}`);

const DEFAULT_INDEX = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>px-styles Scratch!</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="" />
        <link rel="stylesheet" type="text/css" href="scratch.css" />
    </head>
    <body>
        <!-- INSERT HTML FOR TESTING -->
        <div>TEST</div>
    </body>
</html>`;

// create index.html if it doesn't exist
fs.access(INDEX_PATH, fs.constants.F_OK, err => {
    if (err) {
        fs.writeFileSync(INDEX_PATH, DEFAULT_INDEX, err => {
            if (err) {
                console.error('Error creating index.html:', err);
            } else {
                console.log('index.html created successfully:', INDEX_PATH);
            }
        });

        // if the file hasn't been created yet, we wait a second before loading it (this is actually
        // so that scratch.scss can be built first and the first load reflects the current css)
        opn('file://' + INDEX_PATH);
    } else {
        opn('file://' + INDEX_PATH);
    }
});
