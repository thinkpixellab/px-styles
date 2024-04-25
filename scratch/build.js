const fs = require('fs');
const sass = require('sass');
const path = require('path');

const SCSS_SOURCE_PATH = path.resolve(__dirname, './scratch.scss');
const SCSS_OUTPUT_PATH = path.resolve(__dirname, './scratch.css');

const sassResult = sass.compile(SCSS_SOURCE_PATH);

if (sassResult.css) {
    fs.writeFileSync(SCSS_OUTPUT_PATH, sassResult.css.toString());
}
