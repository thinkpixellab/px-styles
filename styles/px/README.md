# pxstyles

This is a simple CSS framework for bootstrapping web projects. Still a work in
progress.

## Goals / Guiding Principles

-   Create consistency (sizing, color, spacing, breakpoints, etc.).
-   Make css more readable / typable. Make it easier to discern intent when
    reading code.
-   Make it easy to initialize a project/site.
-   Write css with less "lookup." This is especially useful when moving between
    projects regularly.
-   Simplify common css use cases. Make complex syntax more readily available.
-   Do not emit. It only contains functions and mixins. Even big actions like
    initializing a site are done through mixins.

## File Structure

-   `/utils`
    -   `config.scss`
    -   `*.scss`
-   /site
    -   \*.scss
        -   @use /utils/all.scss
-   /controls
-   -   \*.scss
        -   @use /utils/all.scss
-   defaults.scss
    -   @use /utils/all.scss
-   px.scss

## Commands

Some helpful terminal commands for building:

-   Run sassdoc: `sassdoc styles/px`
-   Run sass with a watcher: `sass --watch ./styles/site.scss ./output/output.css`

## Config / Customization

This initializes the project with required settings. The settings here actually
are required and will have null defaults. Many mixins and fucntions will produce
errors if this hasn't been called.

Most settings can be initialzied with smart defaults, but many of those defaults
(as well as helpful functions needed when a user confgures the library) derive
their values from other settings. A good example is the function `rems()` which converts a pixel value to rems based on the body font-size. That function needs
to know the body font-size in order to produce good results. As it turns out it
also helpful to have that function when declaring a type scale config setting.
So there is an ordering thing. The ensure that common order scenarios are
handled proplery, we require that px be initialized with `font-size` so that the
`rems()` function can produce reliable results.

After init, other settings are set with the config mixin.

So a typical config might look like this:

    @include px.init($accent: blue, $font-size: 16px);
    @include px.config(breakpoints, (sm: 768px, md: 1024px));
    @include px.config(font-family, circular);
    @include px.config(heading-font-family, circular);

### Config Settings vs. Parameters

Mixin and function parameters should graduate to become a setting if:

-   The value is useful outside of the mixin or setting and encourages
    consistencey (e.g. `code-font-family`)
-   The value is an important default for a common function and shouldn't be
    repeated in calls to the function (e.g. the `$spacer` value in the `sp()`function)

When creating new functions or mixins, leave things as parameters until one of
the above conditions are met.

### Accessing Settings

#### No default global variables

Decision: px will not set global variables by default. All settings will be
stored in a global \$config map. This makes it a lot easier to keep track of
settings.

    // Sample code
    @include px.init(...);
    @include px.config(...);

Future upgrade: if it is useful to have some settings exposed as global
variables (or for backwards compatibility), we could include a module that sets
common global variables from the config object. So, after all config is complete
the user would include a mixin...

#### Access settings using functions

Instead of using globals, values are accessed using domain specific functions
(where applicable) or a standard function that retrieves any setting.

Domain specific functions include:

-   `fs($name)` // gets a font-size from the type ramp
-   `sp($n)` // gets a spacing value derived from the common spacer value
-   `rems($px)` // convert px value to rems based on the sites base font-size
-   `clr($name, $shade)` // retrieves a common named color and optionally
    produce a shade of that color
-   `gray($scaler)` // gets a derived a gray value
-   `shadow($level)` // creates a box shadow
-   `@include transition($props)` // mixin that emits a transition with common defaults for dur/ease
-   `@include media-until($name)` // mixin that creates a media query at common breakpoint size

Other settings (that don't relate to a specific domain) can be accessed using
the `get($name)` function. This is actually just a wrapper for `map-get($config, $name)`.

Sample code that retrieves a bunch of common values:

    .contact-link {

        // get the font-size called md
        font-size: fs(md);

        // get the color called accent:
        color:  clr(accent);

        // get the variable for the headings font-family
        font-family: get(heading-font-family);

        // apply a transition with the default transition dur/eass
        @include transition(color)

        &:hover {
            // set the color called accent but one level darker
            color: clr(accent, -1);
        }
    }

### Robby's implementation notes

#### TODO (not ordered)

-   Implement new config approach / create functions / etc.
-   Remove all globals and put them in the \$config object. Create config.scss
    (so it can be included by other modules). Document individual properties all
    in that single place. Include required parameters (for documentation) but
    leave as null.

-   Figure out plan for naming in projects and namespacing
    -   Add px.scss as primarly loader / forwarder
    -   Maybe we load into project in something called utils
    -   Do we want to keep the utils prefix? Maybe for most things but we have
        something called "common" which does a forward into the `*` namespace?
-   Use gulp for compiling test css and running sassdoc. Or npm scripts?
-   Add asset stuff (sprite, image optimization, inline svg, etc.)
-   Add control styles back
    -   use ems
    -   different approach for settings
-   Add grid
    -   css grid?
    -   flexbox version?
-   Add atoms back as mixins
    -   spacing / responsive version?
    -   flexbox
    -   others?
-   Finish docs (not everything is well documented right now)
-   Better theme (maybe markdown based) for sassdoc
-   Vue component for previewing
-   Other enhancements:
    -   a function that takes a color and an integer and produces a consistent
        shade
    -   pseudo mixin
    -   mixins cover(url, centerx, centery), contain(url, centerx, centery)
    -   css vars?
    -   better flexbox
    -   [grassy](https://github.com/lazarljubenovic/grassy) (add using npm-- good
        way to add third party libs)
    -   add a list of good thrid party libs
    -   grid helpers
    -   list [manipulation functions](https://github.com/lazarljubenovic/grassy/blob/master/src/util/_functional-programming.scss)
    -   fix shadow()
    -   grid replacement
    -   bem helpers?
    -   transforms mixins
    -   rename "primary" as "accent"
    -   interesting css units (beyond viewport)
    -   animations (like animate.css)
    -   ues ems for controls
    -   create a vs snippets library for common things
