# px-styles

This is a simple SCSS framework that provides basic site setup and some common functionality for web projects. The goal is to create a simple to understand boilerplate coupled with a consistent approach to styling that encourages reuse and best practices while maintaing flexibility.

## Useful Links

-   Repository: [https://github.com/thinkpixellab/px-styles](https://github.com/thinkpixellab/px-styles)
-   API Documentation: [https://thinkpixellab.github.io/px-styles](https://thinkpixellab.github.io/px-styles)
-   NPM Package: [https://www.npmjs.com/package/@thinkpixellab-public/px-styles](https://www.npmjs.com/package/@thinkpixellab-public/px-styles)

## Install

#### Install the package

First, add the package to the project using npm.

```
npm install @thinkpixellab-public/px-styles --save
```

#### Create a Shared Loader / Configuration File

A typical setup might consist of the following:

##### px-styles.scss

By convention px-styles is configured in a file in the project root called `px-styles.scss`. By placing this file in a known location all packages that use px-styles can access the same configuration by importing / using the same configuration.

Configuring px-styles consists of setting any desired configuration using the `config()` mixin and then filling in any missing configuration with a call to the `init()` mixin.

```scss
// ----------------------------------------------------------------------------
// px-styles.scss
// Github: https://github.com/thinkpixellab/px-styles
// Docs: https://thinkpixellab.github.io/px-styles/
// ----------------------------------------------------------------------------

// forward and use
@forward '@thinkpixellab-public/px-styles';
@use '@thinkpixellab-public/px-styles' as *;

// site config
@include config('colors:accent', #00dc82);
@include config('colors:page-bg', #011e26);
@include config('colors:page-fg', white);

// initialize and load defaults (required)
@include init();
```

##### include.scss

The config file can be imported directly but most projects benefit from having a single non-emitting .scss file that, in addition to px-styles config, includes other shared project-specific variables, functions and mixins. This file can be included in any other component or scss file knowing that all shared scss will be available. By convention we call this file `include.scss`.

```scss
// ----------------------------------------------------------------------------
// include.scss
// ----------------------------------------------------------------------------

// forward and use
@forward '/px-styles.scss';
@use '/px-styles.scss' as *;

// shared site stuff
@mixin my-mixin() { ... }
$my-var: 123;
```

##### global.scss

This convention is outside of the scope of px-styles but worth noting. We typically place an css that needs to be generated for the entire site in a file called global.scss. This would include all site / page setup and boilerplate as well any shared styles. A typical file might look like this:

```scss
// ----------------------------------------------------------------------------
// global.scss
// ----------------------------------------------------------------------------

@use 'include.scss' as *;

// basic site setup
@include boilerplate();

// other global css
.button {
    @include button();
}
```

### Pattern for Multiple Configurations

All of the configuration settings for px-styles exist within a single map. Because of that, two distinct "instances" of px-styles can be loaded within the same context using the following pattern:

```scss
@use '@thinkpixellab-public/px-styles' as px-one;
@use '@thinkpixellab-public/px-styles' as px-two;

// give each version a distinct map
px-one.$config: ();
px-two.$config: ();

@include px-one.config('colors:accent', blue);
@include px-one.init();
.px-one-class {
    color: px-one.accent();
}

// px-two test
@include px-two.config('colors:accent', green);
@include px-two.init();
.px-two-class {
    color: px-two.accent();
}
```

## API Documentation

API Documentation can be found in the docs folder. Just open `index.html` in a browser (it should run fine from the local file system). All of the documentation is generated dynamically using sassdoc and output to a json file (which the page uses as a data source).

Learn more about sassdoc annotations here: [SassDoc Annotations](http://sassdoc.com/annotations/).

## Goals / Guiding Principles

-   Only emit emit on demand. This library only contains functions and mixins (even big actions like initializing a site are done through mixins) so it can be included without any concern about creating bulk or having an impact on runtime performance.
-   Make it easy to initialize a project/site.
-   Simplify common css use cases. Make complex syntax easier to remember / understand.
-   Encourage consistency by making common values available via shared functions and settings for things like sizing, color, spacing, breakpoints, etc.
-   Make css easier to read, write and understand. Make it easier to infer intent from code.

## File Structure

-   `/utils` Contains utility mixins and functions that have no depependency on site configuration
-   `/site` Contains utility mixins and functions that depend on site configuration
-   `/modules` Contains purpose-built mixins that generate css related to a specific task or goal
-   `/controls` Contains mixins for generating consistent control styles
-   `defaults.scss` Contains all default values. Generally mixins and functions shouldn't declare new defaults for parameters or vars (although there is probably some remaining work to remove these). Use this to see what can be customized and to determine where a particular setting is coming from.

## Config / Customization

The library is designed to work with the new sass module infrastructure. The library is configured
in `site-config.scss` and that file can be "used" by any other file in the project. In theory that
file should only be loaded once and so it could emit CSS but for safety, the rule is that
`site-config.scss` won't emit. Instead any global scss should be in `site-global.scss`.

#### No default global variables

Decision: px does not set globals nor do modules uses configurable local variables. Globals introduce predictability issues due to ordering dependencies. Configurable module variables have to all be set at once and therefore can't easily be derived from other variables or by using functions.

Instead all configuration settings are stored in a global map that can be accessed with the get, config and default defined in /utils/config.scss.

#### Access settings using functions

Instead of using the global `get` function, some common settings can be accessed using domain specific functions (where applicable) or a standard function that retrieves any setting.

Domain specific functions include:

-   `fs($name)` - gets a font-size from the type ramp
-   `sp($n)` - gets a spacing value derived from the common spacer value
-   `rems($px)` - convert px value to rems based on the sites base font-size
-   `clr($name, $shade, $alpha)` - retrieves a common named color and optionally produce a shade of
    that color
-   `gray($scaler)` // gets a derived a gray value
-   `shadow($level)` // creates a box shadow
-   `@include transition($props)` // mixin that emits a transition with common defaults for dur/ease
-   `@include media-until($name)` // mixin that creates a media query at common breakpoint size

Sample code that retrieves a bunch of common values:

```scss
.contact-link {
    // get the font-size called md
    font-size: fs(md);

    // get the color called accent:
    color: clr(accent);

    // get the variable for the headings font-family
    font-family: get(heading-font-family);

    // apply a transition with the default transition dur/eass
    @include transition(color);

    &:hover {
        // set the color called accent but one level darker
        color: clr(accent, -1);
    }
}
```

## Build Instructions

### Docs

API documentation is generated using sassdoc. The full build process is run using gulp and output to the /docs folder. The resulting output can be browsed directly from the file system (no server required) by loading ./docs/index.html

To kickoff a docs build just run `gulp docs`

### Playground

The project is setup so that you can play with the library from a file in the root called `scratch.scss`. Run `gulp scratch` to build this file once you've created it. After building, the output will be available as `scratch.css` (note the prefix of 'css' instead of 'scss`). These files have also been added to .gitignore so you should be able to play with them freely.

Here is a sample scratch file that will load px-styles from local source:

```scss
// load px
@use 'index.scss' as *;

// initialize px
@include init();

// write css
.button {
    @include button();
}
```

## Notes

#### Possible Enhancements (not ordered)

-   Better version management. It would be great to inlude a mixin like ensure-version($version)
    that would make sure that you're using a compatible version of px-styles. Maybe package
    versioning is enough but it seems like we could do a little more to prevent breaks.

-   Make easing variables available via function or else cleanup the docs to filter them somehow
-   Better CSS Grid helpers
-   Mixin for cover(url, centerx, centery)
-   Mixin for contain(url, centerx, centery)
-   Helpers for CSS vars?
-   Transforms mixins?
-   Make use of interesting css units (beyond viewport)
-   Simple animations? (like animate.css)
-   Create a vscode snippets library for common things?
-   Add a list of good third party libs
-   Refinements to the reading mixin / config
-   z-order management
-   ~~Rename "primary" as "accent"?~~
-   ~~Rename basics() => boilerplate()~~
-   ~~Rename defaults() => init()~~
-   ~~Make sanitize a module and optionally called by the boilerplate mixin~~
-   ~~Bem helpers?~~
