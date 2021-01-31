# pxstyles

This is a simple CSS framework for bootstrapping web projects. Still a work in progress.

## How to customize

## TODO (not ordered)

-   Better configuration story
-   Integration with px-shared
-   Use gulp for compiling test css and running sassdoc
-   Consider adding all config $vars into something like /styles/px/load.scss and doing proper ordering there so that px.scss can override all settings in one forward.
-   Add image optimization and basic assets files
-   Add sprite generation
-   Add control styles back
-   Add grid
-   Add atoms
-   Finish docs (not everything is well documented right now)
-   Better theme (maybe markdown based) for sassdoc
-   Vue component for previewing
-   Add support for css --vars

## Commands

Handful of helpful command lines.

-   Run sassdoc: `sassdoc styles/px`
-   Run sass with a watcher: sass --watch ./styles/site.scss ./output/output.css
