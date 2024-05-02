# px-styles

## V4

### Breaking Changes

-   use dots instead of colons with get / config
-   clr prefers percentage instead of level
-   config items that have been removed
    -   shade levels
    -

### Todo

-   rename 'config' as 'set'
-   refine the tag stuff
-   would it be faster to store config with the dots in place instead of

## Install the Package

Just dd the package to your project using npm.

```
npm install @thinkpixellab-public/px-styles --save
```

## Load the Module

### General loading

There are different ways that px-styles can be loaded depending on which functionality you need.

#### utils (no configuration)

If you just want utilities and don't want to use site-level configuration, you can load the basic utils functionality direction.

```
@use '@thinkpixellab-public/px-styles/utils' as *
```

#### site (default)

If you want to access the site-configured utilities you can load the default library with a $-config object. (See configuration notes below).

```
@use '@thinkpixellab-public/px-styles' as * with (
    $-config: ( ... )
)
```

#### modules

You can Load individual modules after loading the configured library.

```
// load px-styles
@use '@thinkpixellab-public/px-styles' as * with (
    $-config: ( ... )
)

// load the module
@use '@thinkpixellab-public/px-styles/src/modules/boilerplate' as *;
```

Or, you can load the module directly (this accomplishes the same thing as above but the syntax is a little confusing).

```
// load the boilerplate module
@use '@thinkpixellab-public/px-styles/src/modules/boilerplate' as * with (
    $-config: ( ... )
)
```

### Create a Shared Loader / Configuration File

If you have multiple components or files that need to access a shared configuration, it might make sense to create a shared loader / configuration file. A typical setup might consist of the following:

```
// px.scss

@forward '@thinkpixellab-public/px-styles' with (
    $-config: (...)
)

// my-file.scss

@use 'px' as *;

```

Optionally, you could also create a utils only loader to make loading utils seem a bit cleaner (so you don't have to include the long package name every time). This might also encourage loading the simpler utils which require no configuration or config parsing.

```
// px-utils.scss

@forward '@thinkpixellab-public/px-styles/utils';


// my-simple-file.scss

@use 'px-utils' as *;

```

## Defauls, Config, Variables, etc.

There are so many potential sources for any given value that tt seems worth mentioning some guiding principles about where the value should come from and when and how convenient defaults should be provided (and then where those defaults come from).

-   **hardcoded values** should be used when the value is absolute and unchanging.
-   **SCSS variables** make sense when a hardcoded value would suffice but we're trying to keep the code DRY. See the node about module configuration below for a small exception to this.
-   **mixin or function parameters** should be exposed when the value changes on each use (this is probably pretty obvious).
-   **site / module "config" values** make sense when the value can/should be configured at the site level and is expected to be constant at runtime.
-   **CSS variables** (or custom properties) make sense when the value might change during runtime (either in code or based on DOM location) or when we want to otherwise expose some kind of CSS accessible configuration. There is some runtime cost to this flexibility as well as potential complexity in the CSS itself. Also, CSS variables are difficult to work with inside of a framework because the only way to manipulate them is with calc() functions (e.g. it's not possible to multiply two css variables except using calc()).

That all seems pretty straightforward, but the devil is in the details. In real world usage, things can be a bit muddier so let's address some common scenarios where there may be some ambiguity.

#### General Thoughts About Config and Defaults

A major purpose of a CSS framework like pxstyles is to simplify syntax and produce more consistent / better tested output but that needs to be balanced with flexibility.

That said, multple levels of defaults can also become a bit unruly and it can become difficult to know where a value is ultimately coming from.

A common pattern might be something like:

```scss
/* pxstyles */

// this will set a value in config for default-background only if no has been configured already
@include default('default-background', orange);

@mixin dark-background($color: null) {
    // lookup the site configured background
    $color: if-null($color, get('default-background'));

    background: darken($color, 10%);
}

/* user code (no config) */

@use '@thinkpixellab-public/px-styles' as *;
@include dark-background(); // outputs dark orange
@include dark-background(green); // outputs dark green

/* user code (with config) */

$site-config: (
    'default-background': purple,
);

@use '@thinkpixellab-public/px-styles' as * with (
    $-config: $site-config
);

@include dark-background(); // outputs dark purple
@include dark-background(green); // outputs dark green
```

This seems pretty useful, but even with just a couple of layers of redirection it can get pretty confusing to figure out where the value is coming from. And some examples might get even more complex. Imagine now that we're using the `dark-background()` mixin inside of a button mixin. The button mixin has it's own background configuration.

```scss
/* pxstyles */

@mixin button($accent: null) {
    $accent: if-null($accent, get('button.accent'));

    background-color: $accent;
    &:active {
        @include dark-background($accent);
    }
}

/* user code (with config for button accent) */

$site-config: (
    'button.background': blue,
);

@use '@thinkpixellab-public/px-styles' as * with (
    $-config: $site-config
);

.button {
    @include button(); // background will be blue / darker blue (when active)
}
```

I don't think we should go deeper than this.

#### Config in Utils vs. Site vs. Modules

In a hope to simplify the configuration of a pretty complex library, we rely on a single map that stores all config values. This can be initialized with a simple map object or maniuplated using mixins and function in `/src/site/config.scss`.

This is stated above, but worth mentioning again that the library is organized by whether the code relies on that config map. The `utils` module is configuration free. Functions and mixins may have smart defaults for parameters but there is no concept of a shared configuration. All functionaly is standalone. The `site` module relies on a shared config object. Other modules like `controls` and `typography` rely on the configured `site` module and also expose their own config.

#### Module Configuration

#### Mixin Parameter Defaults

#### Controls Mixins / Managing Opinionated Styles

#### Components and CSS Variables

#### CSS Variables in Config

No work has been done to guarantee that site/

### API Documentation

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
-   `color($name, $shade, $alpha)` - retrieves a common named color and optionally produce a shade of
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
        color: color(accent, -1);
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

## BREAKING CHANGES

-   Css maps now use periods as a separator instead of colons (so `button.background` instead of `button:backround`)
-   Any settings related to controls are now just the name of the component (e.g. `controls:button:background` is now just `button:background`)
-

This is a simple SCSS framework that provides basic site setup and some common functionality for web projects. The goal is to create a simple to understand boilerplate coupled with a consistent approach to styling that encourages reuse and best practices while maintaing flexibility.

## Useful Links

-   Repository: [https://github.com/thinkpixellab/px-styles](https://github.com/thinkpixellab/px-styles)
-   API Documentation: [https://thinkpixellab.github.io/px-styles](https://thinkpixellab.github.io/px-styles)
-   NPM Package: [https://www.npmjs.com/package/@thinkpixellab-public/px-styles](https://www.npmjs.com/package/@thinkpixellab-public/px-styles)
