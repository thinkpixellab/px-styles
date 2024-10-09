const fs = require('fs');
const sass = require('sass');
const path = require('path');

const SCSS_SOURCE_PATH = path.resolve(__dirname, './scratch.scss');
const SCSS_OUTPUT_PATH = path.resolve(__dirname, './scratch.css');
const DEFAULT_SOURCE = `
@use "../all.scss" as *;

@include config('colors.page-bg', gold);
@include boilerplate();
`;

const buildSass = () => {
    const sassResult = sass.compile(SCSS_SOURCE_PATH);

    if (sassResult.css) {
        fs.writeFileSync(SCSS_OUTPUT_PATH, sassResult.css.toString());
    }
};

// create scratch.scss if it doesn't exist
fs.access(SCSS_SOURCE_PATH, fs.constants.F_OK, err => {
    if (err) {
        // File doesn't exist, create it
        fs.writeFileSync(SCSS_SOURCE_PATH, DEFAULT_SOURCE, err => {
            if (err) {
                console.error('Error creating scratch.scss:', err);
            } else {
                console.log('scratch.scss created successfully:', SCSS_SOURCE_PATH);
            }
        });
        buildSass();
    } else {
        buildSass();
    }
});
