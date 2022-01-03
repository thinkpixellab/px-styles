# pxstyles

This is a simple SCSS framework that provides basic site setup and some common functionality for web
projects. The goal is to create a simple to understand boilerplate coupled with a consistent
approach to styling that encourages reuse and best practices while maintaing flexibility.

## API Documentation

API Documentation can be found in the docs folder. Just open `index.html` in a browser (it should run fine from the local file system). All of the documentation is generated dynamically using sassdoc and output to a json file (which the page uses as a data source).

Learn more about sassdoc annotations here: [SassDoc Annotations](http://sassdoc.com/annotations/).

## Goals / Guiding Principles

-   Only emit emit on demand. This library only contains functions and mixins (even big actions like
    initializing a site are done through mixins) so it can be included without any concern about
    creating bulk or having an impact on runtime performance.
-   Make it easy to initialize a project/site.
-   Simplify common css use cases. Make complex syntax easier to remember / understand.
-   Encourage consistency by making common values available via shared functions and settings for
    things like sizing, color, spacing, breakpoints, etc.
-   Make css easier to read, write and understand. Make it easier to infer intent from code.

## File Structure

-   `/utils` Contains utility mixins and functions that have no depependency on site configuration
-   `/site` Contains utility mixins and functions that depend on site configuration
-   `/modules` Contains purpose-built mixins that generate css related to a specific task or goal
-   `/controls` Contains mixins for generating consistent control styles
-   `defaults.scss` Contains all default values. Generally mixins and functions shouldn't declare
    new defaults for parameters or vars (although there is probably some remaining work to remove
    these). Use this to see what can be customized and to determine where a particular setting is
    coming from.

## Config / Customization

The library is designed to work with the new sass module infrastructure. The library is configured
in `site-config.scss` and that file can be "used" by any other file in the project. In theory that
file should only be loaded once and so it could emit CSS but for safety, the rule is that
`site-config.scss` won't emit. Instead any global scss should be in `site-global.scss`.

#### No default global variables

Decision: px does not set globals nor do modules uses configurable local variables. Globals
introduce predictability issues due to ordering dependencies. Configurable module variables have to
all be set at once and therefore can't easily be derived from other variables or by using functions.

Instead all configuration settings are stored in a global map that can be accessed with the get,
config and default defined in /utils/config.scss.

#### Access settings using functions

Instead of using the global `get` function, some common settings can be accessed using domain
specific functions (where applicable) or a standard function that retrieves any setting.

Domain specific functions include:

-   `fs($name)` - gets a font-size from the type ramp
-   `sp($n)` - gets a spacing value derived from the common spacer value
-   `rems($px)` - convert px value to rems based on the sites base font-size
-   `clr($name, $shade, $alpha)` - retrieves a common named color and optionally produce a shade of that
    color
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

    npm install sassdoc -g
    npm run sassdoc

## Notes

#### Possible Enhancements (not ordered)

-   Are we actually done with flexgrid? Should we add that back?
-   Cleanup docs.
-   Possible enhancements:
    -   Bem helpers?
    -   Make easing variables available via function or else cleanup the docs to filter them somehow
    -   Better CSS Grid helpers
    -   Mixin for cover(url, centerx, centery)
    -   Mixin for contain(url, centerx, centery)
    -   Helpers for CSS vars?
    -   Fix shadow() - hard to remember how it works, and need a simple box-shadow version
    -   Transforms mixins?
    -   Rename "primary" as "accent"?
    -   Make use of interesting css units (beyond viewport)
    -   Simple animations? (like animate.css)
    -   Create a vscode snippets library for common things?
    -   Add a list of good third party libs
