window.pxstyles = {
    "groups": [
        {
            "name": "init",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "other",
                    "group": "init",
                    "name": "px-is-init",
                    "docName": "px-is-init()",
                    "type": "function",
                    "description": "Returns true if px-styles has been initialized, otherwise false.\n",
                    "access": "public",
                    "path": "init.scss"
                },
                {
                    "namespace": "other",
                    "group": "init",
                    "name": "ensure-init",
                    "docName": "ensure-init()",
                    "type": "mixin",
                    "description": "Throws an error if px-styles hasn't been initialized by including the init mixin hasn't been\ncalled / included. Checks are also provided for an optional minimum required version and an\noptional configuration key that must be present.\n\nThis mixin is generally not required but there may be cases where components from different\nlibraries are each loading px-styles and this help to ensure that it has been initalized and\ninitialized with a compatible configuration.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include ensure-init($require-min-version: 1.0.0); // throws an error if initialized with verion 0.9.9"
                        },
                        {
                            "type": "scss",
                            "code": "@include ensure-init($require-config-key: 'theme-projectname'); // throws an error if get('theme-projectname') isn't truthy"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "string",
                            "name": "require-min-version",
                            "default": "null",
                            "description": "A version number string consisting of three parts\nseparated by periods (e.g. 1.0.15) that represents the minimum required initialization version.\n"
                        },
                        {
                            "type": "string",
                            "name": "require-config-key",
                            "default": "null",
                            "description": "A configuration key (e.g. 'theme-projectname') that\nmust be set to a truthy value in the the config registry.\n"
                        }
                    ],
                    "access": "public",
                    "path": "init.scss"
                },
                {
                    "namespace": "other",
                    "group": "init",
                    "name": "init",
                    "docName": "init()",
                    "type": "mixin",
                    "description": "Initialize the library by filling in default values for all config values that haven't been\npreviously set using the `config` command. All defaults for all built-in modules are defined in\nthis mixin. This fixes a generalized loading problem and provides a single place to document all\npossible defaults in a single location. See the source for details.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// To initalize px-styles, first add any required configuration\n@include config('colors:accent', #00dc82);\n\n// then load the defaults by calling this mixin\n@include init();"
                        }
                    ],
                    "access": "public",
                    "path": "init.scss",
                    "defaults": [
                        {
                            "name": "'font-size-base'",
                            "value": "15px",
                            "description": "Base font size (set on the body, used for rems calculations)\n"
                        },
                        {
                            "name": "'spacer'",
                            "value": "rems(12px)",
                            "description": "Global default value for spacing functions\n"
                        },
                        {
                            "name": "'shade-steps'",
                            "value": "20",
                            "description": "The total number of available shades in the shade and color functions (value of 20 produces a range of shades from -10, 10)\n"
                        },
                        {
                            "name": "'shade-range'",
                            "value": "(black, white)",
                            "description": "The default range for color shading\n"
                        },
                        {
                            "name": "'colors:accent'",
                            "value": "#0099fd",
                            "description": "Global default primary color. Optionally include a list of three values to override shading.\n"
                        },
                        {
                            "name": "'colors:gray'",
                            "value": "(mix(#a0a0a0, accent(), 95%), accent(-9), white)",
                            "description": "Default base gray color. Optionally include a list of three values to override shading.\n"
                        },
                        {
                            "name": "'colors:select'",
                            "value": "accent(-4)",
                            "description": "Default text selection color\n"
                        },
                        {
                            "name": "'colors:page-bg'",
                            "value": "white",
                            "description": "Default page background color\n"
                        },
                        {
                            "name": "'colors:page-fg'",
                            "value": "gray(-7)",
                            "description": "Default page foreground\n"
                        },
                        {
                            "name": "'colors:contrast-light'",
                            "value": "clr(page-bg)",
                            "description": "Default light color used when computing contrast colors\n"
                        },
                        {
                            "name": "'colors:contrast-dark'",
                            "value": "clr(page-fg)",
                            "description": "Default light color used when computing contrast colors\n"
                        },
                        {
                            "name": "'colors:selection-bg'",
                            "value": "clr(select)",
                            "description": "Default background color for selected text\n"
                        },
                        {
                            "name": "'colors:selection-fg'",
                            "value": "contrast-color(clr(select))",
                            "description": "Default foreground color for selected text\n"
                        },
                        {
                            "name": "'fonts'",
                            "value": "()",
                            "description": "_boilerplate_ A list of font faces that should be loaded by the `basics` mixin. Example of the\nsyntax for this map:\n```\n@include config('fonts', (\n\n    // google font\n    Inter: (googleFont: true, weight: 500, style: normal),\n\n    // local font\n    Circular: (src: '../assets/fonts/circular', weight: 500, style: normal)\n));\n```\n"
                        },
                        {
                            "name": "'font-family'",
                            "value": "sans-serif",
                            "description": "_boilerplate_ Default / fallback font family for the site\n"
                        },
                        {
                            "name": "'font-weight'",
                            "value": "400",
                            "description": "_boilerplate_ Default / fallback font-weight for the site\n"
                        },
                        {
                            "name": "'font-smoothing'",
                            "value": "true",
                            "description": "_boilerplate_ Whether to enable font-smoothing\n"
                        },
                        {
                            "name": "'code-font-family'",
                            "value": "(Menlo, Monaco, Consolas, monospace)",
                            "description": "_boilerplate_ Default code / mono font family (used as the default font for pre and code elements)\n"
                        },
                        {
                            "name": "'code-font-size'",
                            "value": "rems(13px)",
                            "description": "_boilerplate_ Default code / mono font size (used as the default font for pre and code elements)\n"
                        },
                        {
                            "name": "'line-height'",
                            "value": "normal",
                            "description": "_boilerplate_ Default / fallback line-height for standard text\n"
                        },
                        {
                            "name": "'letter-spacing'",
                            "value": "normal",
                            "description": "_boilerplate_ Default / fallback letter spacing for the site\n"
                        },
                        {
                            "name": "'font-size-breaks'",
                            "value": "(\n    md: -1,\n)",
                            "description": "_boilerplate_ Use this to automatically adjust font size on the body (and therefore also as the\nbasis for rems units) based on media queries. The value is a map that contains media query\nbreaks and inputs into the `fs()` function for retrieving a font-size. prettier-ignore\n"
                        },
                        {
                            "name": "'type-scale'",
                            "value": "(\n    'xxs': 11px,\n    'xs': 13px,\n    'sm': 14px,\n    'base': get('font-size-base'),\n    'md': 18px,\n    'lg': 20px,\n    'xl': 24px,\n    'h4': 28px,\n    'h3': 36px,\n    'h2': 42px,\n    'h1': 54px,\n    'd2': 60px,\n    'd1': 72px,\n)",
                            "description": "A map of standard named font sizes. At least one size must be named 'base' which should\ncorrespond to base-font-size.\n"
                        },
                        {
                            "name": "'type-bases'",
                            "value": "(\n    headings: (\n        font-family: null,\n        font-weight: 700,\n        line-height: 1,\n        letter-spacing: null,\n        color: null,\n        margin-top: 0.75em,\n        margin-bottom: 0.75em,\n    ),\n    sub-headings: (\n        font-family: null,\n        font-weight: null,\n        line-height: 1.15,\n        letter-spacing: null,\n        color: null,\n        margin-bottom: 0.5em,\n    ),\n    code: (\n        font-family: get('code-font-family'),\n        font-size: get('code-font-size'),\n        font-weight: 400,\n        line-height: 1.4,\n    ),\n)",
                            "description": "A set of type style base styles. These styles are never actually generated, but other type\nstyles can be derived from them with `type-style` mixin (which takes a map of additional css\nproperties or overrides). Note: individual settings can be configured using flat map syntax.\n"
                        },
                        {
                            "name": "'type-styles'",
                            "value": "(\n    '.display1': (\n        font-size: fs(7),\n        -base: 'headings',\n    ),\n    '.display2': (\n        font-size: fs(6),\n        -base: 'headings',\n    ),\n    '.h1': (\n        font-size: fs(5),\n        -base: 'headings',\n    ),\n    '.h2': (\n        font-size: fs(4),\n        -base: 'headings',\n    ),\n    '.h3': (\n        font-size: fs(3),\n        -base: 'headings',\n    ),\n    '.h4': (\n        font-size: fs(2),\n        -base: 'headings',\n    ),\n    '.h5': (\n        font-size: fs(1),\n        -base: 'headings',\n    ),\n    '.sh1': (\n        font-size: fs(2),\n        -base: 'sub-headings',\n    ),\n    '.sh2': (\n        font-size: fs(1),\n        -base: 'sub-headings',\n    ),\n    '.sh3': (\n        font-size: fs(0),\n        -base: 'sub-headings',\n    ),\n)",
                            "description": "_boilerplate_ Full set of type styles that should be generated based. Each entry requires a\n`base` property which is a lookup into `type-bases`.\n"
                        },
                        {
                            "name": "'breakpoints'",
                            "value": "(\n    xs: 640px,\n    mobile: 768px,\n    sm: 1024px,\n    md: 1366px,\n    lg: 1600px,\n    xl: 1920px,\n)",
                            "description": "Named breakpoints that can be used by the standard mediaquery mixins\n(e.g. `media-until(md) {...}`).\n"
                        },
                        {
                            "name": "'mobile-breakpoint'",
                            "value": "'mobile'",
                            "description": "The standardized breakpoint where a mobile version of the design begins. Used by the mixin\n`@media-until-mobile() {...}`.\n"
                        },
                        {
                            "name": "'transitions'",
                            "value": "(\n    default: (\n        dur: 150ms,\n        ease: $ease-out-quart,\n    ),\n    fast: (\n        dur: 75ms,\n        ease: $ease-out-quart,\n    ),\n    slow: (\n        dur: 300ms,\n        ease: $ease-out-quart,\n    ),\n    none: (\n        dur: 0,\n        ease: null,\n    ),\n)",
                            "description": "Collection of named transitions. The keys in this map can be used as the second argument in\nthe `transition` mixin to help create consistent css transitions.  Note: individual settings\ncan be configured using flat map syntax.\n"
                        },
                        {
                            "name": "'shadows:levels'",
                            "value": "20",
                            "description": "_shadows_ Number of distinct levels for both parameters ($depth, $color) of the\nstandardized shadow function / mixin.\n"
                        },
                        {
                            "name": "'shadows:color'",
                            "value": "black",
                            "description": "_shadows_ Color or range for the standardized shadow.\n"
                        },
                        {
                            "name": "'shadows:umbra'",
                            "value": "(\n    y: ( 0px, 12px ),\n    blur: (0px, 20px),\n    spread: (0px, -7px),\n    opacity: (0.2, 0.3),\n)",
                            "description": "_shadows_ Dark portion of the key shadow in the 'depth-shadow' mixin. Note: individual properties can\nbe configured using flat-map syntax.\n"
                        },
                        {
                            "name": "'shadows:penumbra'",
                            "value": "(\n    y: (1px, 24px),\n    blur: (0px, 38px),\n    spread: (0px, 0px),\n    opacity: (0, 0.15),\n)",
                            "description": "_shadows_ Soft portion of the key shadow in the 'depth-shadow' mixin. Note: individual properties can\nbe configured using flat-map syntax.\n"
                        },
                        {
                            "name": "'shadows:ambient'",
                            "value": "(\n    y: (0px, 9px ),\n    blur: (0px, 50px),\n    spread: (0px, 8px),\n    opacity: (0.05, 0.15),\n)",
                            "description": "_shadows_ Ambient light portion of the shadow in the 'depth-shadow' mixin. Note: individual properties\ncan be configured using flat-map syntax.\n"
                        },
                        {
                            "name": "'container'",
                            "value": "(\n    width: 1200px,\n    gutter: sp(3),\n    selector: '.container',\n)",
                            "description": "_boilerplate_ Settings related to the default outer content container. Note: individual settings\ncan be configured using flat map syntax.\n"
                        },
                        {
                            "name": "'reset'",
                            "value": "(\n    sanitize: true,\n    link: true,\n    button: true,\n    lists: true,\n    headings: true,\n    paragraph: true,\n)",
                            "description": "_boilerplate_ Settings related to the default outer content container. Note: individual settings\ncan be configured using flat map syntax.\n"
                        },
                        {
                            "name": "'links'",
                            "value": "(\n    -selector: '.link',\n    color: adjust-color(accent(), $saturation: 40%),\n    text-decoration: none,\n    text-decoration-color: null,\n    hover: (\n        color: null,\n        background-color: rgba(accent(), 0.1),\n        text-decoration: underline,\n        text-decoration-color: null\n    )\n)",
                            "description": "_boilerplate_ Setings related to the default rendering of hyperlinks.\n"
                        }
                    ]
                }
            ]
        },
        {
            "name": "modules.atoms",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "modules",
                    "group": "modules.atoms",
                    "name": "atoms-flex",
                    "docName": "atoms-flex()",
                    "type": "mixin",
                    "description": "Generate atomic classes for flexbox. Full list of classes:\n\n| Class | Equivalent Css |\n| ----- | -------------- |\n| .flex | display: flex; |\n| .flex-inline | display: inline-flex; |\n| .flex-row | flex-direction: row; |\n| .flex-row-reverse | flex-direction: row-reverse; |\n| .flex-column | flex-direction: column; |\n| .flex-column-reverse | flex-direction: column-reverse; |\n| .flex-wrap | flex-wrap: wrap; |\n| .flex-wrap-column | flex-wrap: wrap; flex-direction: column; |\n| .flex-wrap-reverse | flex-wrap: wrap-reverse; |\n| .flex-nowrap | flex-wrap: nowrap; |\n| .flex-auto | flex: 1 1 auto; |\n| .flex-none | flex: none; |\n| .flex-grow-[0...4] | flex-grow: [0...4] |\n| .flex-shrink-[0...4] | flex-shrink: [0...4]; |\n| .items-start | align-items: flex-start; |\n| .items-end | align-items: flex-end; |\n| .items-center | align-items: center; |\n| .items-baseline | align-items: baseline; |\n| .items-stretch | align-items: stretch; |\n| .justify-start | justify-content: flex-start; |\n| .justify-end | justify-content: flex-end; |\n| .justify-center | justify-content: center; |\n| .justify-between | justify-content: space-between; |\n| .justify-around | justify-content: space-around; |\n| .justify-stretch | justify-content: stretch; |\n| .self-start | align-self: flex-start; |\n| .self-end | align-self: flex-end; |\n| .self-center | align-self: center; |\n| .self-baseline | align-self: baseline; |\n| .self-stretch | align-self: stretch; |\n| .order-[0...9] | order: [0...9]; |\n| .order-first | order: -99999; |\n| .order-last | order: 99999; |\n| .flex-center | display: flex; align-items: center; |\n\n",
                    "parameter": [
                        {
                            "type": "*",
                            "name": "prefix",
                            "default": "''",
                            "description": "A prefix that can be applied to each of the classes\ngenerated by the mixin."
                        }
                    ],
                    "access": "public",
                    "path": "modules/atoms.scss"
                }
            ]
        },
        {
            "name": "modules.controls",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "modules",
                    "group": "modules.controls",
                    "name": "control-focus-style",
                    "docName": "control-focus-style()",
                    "type": "function",
                    "description": "Generates one of a number of \"canned\" / common focus styles as a css map (which can be combined\nwith the css-map function to generate the correct focus visual css)\n\n\n",
                    "parameter": [
                        {
                            "type": "shadow | outline",
                            "name": "style",
                            "description": "A named style."
                        },
                        {
                            "type": "color",
                            "name": "color",
                            "default": "null"
                        }
                    ],
                    "access": "public",
                    "path": "modules/controls.scss"
                },
                {
                    "namespace": "modules",
                    "group": "modules.controls",
                    "name": "button",
                    "docName": "button()",
                    "type": "mixin",
                    "description": "Generates a button style based on the site's button settings. The default button is pretty\nopinionated. All sizing is in ems (so setting the font size will scale the button). See the\nsource for more details.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include button() => creates a standard, default button"
                        },
                        {
                            "type": "scss",
                            "code": "@include button((font-size: 12px)) => creates a smaller button with a font-size of 12px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "overrides",
                            "default": "()",
                            "description": "A map containing css key / value pairs. Just about any css is valid (currently transitions can't\nbe override) including supported state specific values: hover, active, disabled. If background\nor color are set, they will be adapted for other states unless also override for those states\n"
                        }
                    ],
                    "access": "public",
                    "path": "modules/controls.scss"
                },
                {
                    "namespace": "modules",
                    "group": "modules.controls",
                    "name": "button-outline",
                    "docName": "button-outline()",
                    "type": "mixin",
                    "description": "Generates a (somewhat opinionated) outlined button style based on the site's button settings.\nBehaves a lot like the `button` mixin so see that for more detail.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include button-outline(); // => creates a standard outline button"
                        },
                        {
                            "type": "scss",
                            "code": "@include button-outline({border-color: blue}); // => creates a blue outline button"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "overrides",
                            "default": "()",
                            "description": "A map containing css key/value pairs. Just about any css is valid\n(currently transitions can't be overriden) including supported state specific values: hover,\nactive, disabled. The outline color is derived from the border color. The properties\nborder-color and color can be specified as shades (numbers relative to the border-color or\nprimary accent color).\n\n"
                        }
                    ],
                    "access": "public",
                    "path": "modules/controls.scss"
                },
                {
                    "namespace": "modules",
                    "group": "modules.controls",
                    "name": "button-icon",
                    "docName": "button-icon()",
                    "type": "mixin",
                    "description": "Generates a simple button with very little styling that can be used to wrap an icon or text but\nincludes basic transitions for hover and active.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include button() => creates a standard, default button"
                        },
                        {
                            "type": "scss",
                            "code": "@include button((font-size: 12px)) => creates a smaller button with a font-size of 12px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "overrides",
                            "default": "()",
                            "description": "A map containing css key/value paairs. Just about any css is\nvalid.\n"
                        }
                    ],
                    "access": "public",
                    "path": "modules/controls.scss"
                },
                {
                    "namespace": "modules",
                    "group": "modules.controls",
                    "name": "scrollbar",
                    "docName": "scrollbar()",
                    "type": "mixin",
                    "description": "Customize the appearance of a scrollbar. Good support in modern webkit and chromium based\nbrowsers. Has the effect of making scrollbars always visible even if the operating system would\nnormally hide them. There is no way to make the track full transparent. Set $nested to false if\napply to all scrollbars (this will remove the parent join).\n\n",
                    "parameter": [
                        {
                            "type": "*",
                            "name": "size",
                            "description": "The overall width of the scrollbar\n"
                        },
                        {
                            "type": "*",
                            "name": "color",
                            "description": "The color of the scrollbar thumb (and background is derived from this if not\nprovided)\n"
                        },
                        {
                            "type": "*",
                            "name": "radius",
                            "default": "0",
                            "description": "The border radius of the scrollbar thumb\n"
                        },
                        {
                            "type": "*",
                            "name": "background",
                            "default": "null",
                            "description": "The color of the scrollbar track area (defaults to $color mixed\nwith 50% white if not provided)\n"
                        },
                        {
                            "type": "*",
                            "name": "padding",
                            "default": "null",
                            "description": "Padding around the scrollbar thumb (created artificially with a hack\nsince this isn't supported by the css)\n"
                        },
                        {
                            "type": "true",
                            "name": "nested",
                            "default": "null",
                            "description": "Set to false if this is using outside of a parent selector (to\napply to all scrollbars)."
                        }
                    ],
                    "access": "public",
                    "path": "modules/controls.scss"
                }
            ]
        },
        {
            "name": "modules.reading",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "modules",
                    "group": "modules.reading",
                    "name": "reading",
                    "docName": "reading()",
                    "type": "mixin",
                    "description": "Generates classes for \"readable\" content, e.g. standard HTML that should be\nformatted to be read, rather than structured as ui.\n",
                    "access": "public",
                    "path": "modules/reading.scss"
                }
            ]
        },
        {
            "name": "modules.sanitize",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "modules",
                    "group": "modules.sanitize",
                    "name": "sanitize",
                    "docName": "sanitize()",
                    "type": "mixin",
                    "description": "Outputs a modified version of [sanitize.css](https://csstools.github.io/sanitize.css/).\n",
                    "access": "public",
                    "path": "modules/sanitize.scss"
                }
            ]
        },
        {
            "name": "site.color",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.color",
                    "name": "shade",
                    "docName": "shade()",
                    "type": "function",
                    "description": "Produce a shade (a lighter or darker version) of a color based on the value\nof $shade and an optional darkest to lightest shade range.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$color: shade(red, 5, null) // => #ff8080"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "color",
                            "name": "color",
                            "default": "null",
                            "description": "The color to be shaded. If not provided, it will be\ncalculated as the middle value within $shade-range.\n"
                        },
                        {
                            "type": "number",
                            "name": "shade",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter.\n"
                        },
                        {
                            "type": "(color, color)",
                            "name": "shade-range",
                            "default": "null",
                            "description": "The range of colors will be produced\nas a list (darkest, lightest)."
                        }
                    ],
                    "access": "public",
                    "path": "site/color.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.color",
                    "name": "gray",
                    "docName": "gray()",
                    "type": "function",
                    "description": "Get a standardized shade of site's base gray.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "gray(2, 0.5) // => rgba(173, 179, 183, 0.5)"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "number",
                            "name": "shade",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter.\n"
                        },
                        {
                            "type": "number",
                            "name": "alpha",
                            "default": "1",
                            "description": "The alpha value of the final color that will be returned.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/color.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.color",
                    "name": "accent",
                    "docName": "accent()",
                    "type": "function",
                    "description": "Get a standardized shade of the site's primary accent color\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "accent(2, 0.5) // => rgba(51, 173, 253, 0.5)"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "shade",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10 (can be overriden\nwith config(shade-steps)). 0 returns the color itself. Negative values make the color darker,\npostive values make it lighter.\n"
                        },
                        {
                            "type": "number",
                            "name": "alpha",
                            "default": "1",
                            "description": "The alpha value of the color to be returned. If a value other than 1\nis provided, the output will be in rgba format.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/color.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.color",
                    "name": "clr",
                    "docName": "clr()",
                    "type": "function",
                    "description": "Lookup a color by name and optionally get a shade of it\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": ""
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "shade",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter.\n"
                        },
                        {
                            "type": "number",
                            "name": "alpha",
                            "default": "1",
                            "description": "The alpha value of the color to be returned. If a value other than 1\nis provided, the ooutput will be in rgba format.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/color.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.color",
                    "name": "yiq",
                    "docName": "yiq()",
                    "type": "function",
                    "description": "Computes the the luminance (grayscale value) of a color in the yiq color space. This can be used\nfor determining the relative contrast between two colors.\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "yiq(purple) // => 52.864"
                        }
                    ],
                    "access": "public",
                    "path": "site/color.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.color",
                    "name": "contrast-color",
                    "docName": "contrast-color()",
                    "type": "function",
                    "description": "Choose a contrasting foreground based on the contrast between a background and two foreground\noptions (a light and dark).\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "contrast-color(rgb(233, 229, 31), rgb(199, 192, 192), rgb(133, 133, 231)) // => #8585e7"
                        }
                    ],
                    "access": "public",
                    "path": "site/color.scss"
                }
            ]
        },
        {
            "name": "site.config",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.config",
                    "name": "get",
                    "docName": "get()",
                    "type": "function",
                    "description": "Retrieve a configuration setting.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$value: get('colors:mycolor', red);"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "string or list",
                            "name": "paths",
                            "description": "The path (string) list of paths (list) where the setting should\nbe found. Each path is one or more keys separated by colons (e.g. 'colors:accent' would find the\nvalue accent in the colors map). If a list of strings is provided, they will searched in order\nand the first non-null value will be returned.\n"
                        },
                        {
                            "type": "*",
                            "name": "fallback",
                            "default": "null",
                            "description": "The value to return if the path doesn't exist.\n"
                        },
                        {
                            "type": "*",
                            "name": "throw-not-found",
                            "default": "null",
                            "description": "Whether to throw an errow if the value can't be retrieved\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/config.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.config",
                    "name": "if-null-get",
                    "docName": "if-null-get()",
                    "type": "function",
                    "description": "Retrieve a configuration setting if and only if the provided $value is null.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$value: if-null-get(null, 'colors:mycolor'); // => the config value for 'colors:mycolor'"
                        },
                        {
                            "type": "scss",
                            "code": "$value: if-null-get(red, 'colors:mycolor'); // => red"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "string or list",
                            "name": "paths",
                            "description": "The value to check for null"
                        },
                        {
                            "type": "string or list",
                            "name": "paths",
                            "description": "Path for the value to retrieve if $value is null (see details for get())"
                        },
                        {
                            "type": "*",
                            "name": "throw-not-found",
                            "default": "null",
                            "description": "Whether to throw an errow if the value can't be retrieved\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/config.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.config",
                    "name": "config",
                    "docName": "config()",
                    "type": "mixin",
                    "description": "Add a configuration setting.\n\n",
                    "parameter": [
                        {
                            "type": "*",
                            "name": "path",
                            "description": "The path of the setting with keys separated by colons (e.g.\n'colors:accent' would set the value accent in the colors map).\n"
                        },
                        {
                            "type": "*",
                            "name": "val",
                            "default": "null",
                            "description": "The value to be added."
                        }
                    ],
                    "access": "public",
                    "path": "utils/config.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.config",
                    "name": "default",
                    "docName": "default()",
                    "type": "mixin",
                    "description": "Add a default configuration setting (provides the same functionality as config, but will not\noverwrite an existing setting).\n\n",
                    "parameter": [
                        {
                            "type": "*",
                            "name": "path",
                            "description": "The path of the setting with keys separated by colons (e.g. 'colors:accent'\nwould set the value accent in the colors map).\n"
                        },
                        {
                            "type": "*",
                            "name": "val",
                            "default": "null",
                            "description": "The value to be added."
                        }
                    ],
                    "access": "public",
                    "path": "utils/config.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.config",
                    "name": "scoped-config",
                    "docName": "scoped-config()",
                    "type": "mixin",
                    "description": "Handles the unique scenario of isolating an \"instance\" of px-styles from other configurations.\npx-styles can be reinitialized within the content block of this mixin without effecting other\nglobal configurations. This is pretty experimental and could have side effects. Use with caution\nfor now.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "\n// configure px with a blue accent and initialize\n @include config('colors:accent', blue);\n @include init();\n\n .px-og-class1 {\n     /* should be blue */\n     color: accent();\n }\n\n @include scoped-config() {\n      configure px with a green accent and initialize\n     @include config('colors:accent', green);\n     @include init();\n     .px-scope-class {\n         /* should be green */\n         color: accent();\n     }\n }\n\n .px-og-class2 {\n     /* should be blue */\n     color: accent();\n }"
                        }
                    ],
                    "access": "public",
                    "path": "utils/config.scss"
                }
            ]
        },
        {
            "name": "site.grid",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.grid",
                    "name": "table-grid",
                    "docName": "table-grid()",
                    "type": "mixin",
                    "description": "Create a CSS grid that mimics a table where columns are specified and rows are added as needed.\n",
                    "example": [
                        {
                            "type": "include",
                            "code": "display: grid;\ngrid-template-columns: 4;\ngrid-template-rows: auto;\ngrid-auto-rows: auto;\ngrid-gap: 10px;",
                            "description": "table-grid(4, auto, 10px); // =>"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "column definitions",
                            "name": "columns",
                            "description": "Column definitions"
                        },
                        {
                            "type": "row definition",
                            "name": "row-height",
                            "default": "auto",
                            "description": "The height of each row"
                        },
                        {
                            "type": "number",
                            "name": "gap",
                            "default": "8px",
                            "description": "The gap between items\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/grids.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.grid",
                    "name": "item-grid",
                    "docName": "item-grid()",
                    "type": "mixin",
                    "description": "Create a css grid with repeating item (min/max width) and fixed height that autoflows (wraps)\nand fills the entire row. Use this, for example, to create a grid of cards or someting along\nthose lines.\n\n",
                    "example": [
                        {
                            "type": "item",
                            "code": "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(10px, 50px));\ngrid-auto-rows: auto;\ngrid-gap: 24px;",
                            "description": "grid(10px, 50px) // =>"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "item-min-width",
                            "description": "Minimum width of the item"
                        },
                        {
                            "type": "*",
                            "name": "item-max-width",
                            "description": "Maximum width of the item"
                        },
                        {
                            "type": "*",
                            "name": "item-height",
                            "default": "auto",
                            "description": "The item height"
                        },
                        {
                            "type": "*",
                            "name": "gap",
                            "default": "24px",
                            "description": "The gap between items\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/grids.scss"
                }
            ]
        },
        {
            "name": "site.mediaquery",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "get-breakpoint",
                    "docName": "get-breakpoint()",
                    "type": "function",
                    "description": "Get a breakpoint by name. If an number value is provided, that number will\nbe returned.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-breakpoint(481px) // => 481px"
                        },
                        {
                            "type": "scss",
                            "code": "get-breakpoint(md) // => 1366px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "String | Length",
                            "name": "break",
                            "description": "The name of the breakpoint or a number that\nwill be returned\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/mediaquery.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "media-until",
                    "docName": "media-until()",
                    "type": "mixin",
                    "description": "Creates a media query that applies for all browser widths **smaller** than\nthe provided breakpoint.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Note that media-until rules should be ordered largest to smallest\n\n@include media-until(md) { ... } // => @media screen and (max-width: 1024px) { ... }\n@include media-until(sm) { ... } // => @media screen and (max-width: 768px) { ... }"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "String | Length",
                            "name": "break",
                            "description": "The breakpoint for the generated media\nquery. Use a string for a named site breakpoint or a length.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/mediaquery.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "media-after",
                    "docName": "media-after()",
                    "type": "mixin",
                    "description": "Creates a media query that applies for all browser widths **larger** than\nthe provided breakpoint.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Note that media-afters rules should be ordered smallest to largest\n\n@include media-after(sm) { ... } // => @media screen and (max-width: 768px) { ... }\n@include media-after(md) { ... } // => @media screen and (max-width: 1024px) { ... }"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "String | Length",
                            "name": "break",
                            "description": "The breakpoint for the generated media\nquery. Use a string for a named site breakpoint or a length.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/mediaquery.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "media-between",
                    "docName": "media-between()",
                    "type": "mixin",
                    "description": "Creates a media query that applies for all browser widths between the $break-from and $break-to\nbreakpoints.\n\n",
                    "example": [
                        {
                            "type": "include",
                            "code": "(max-width: 1024px) { ... }",
                            "description": "media-between(sm, md) { ... } // => @media screen and (min-width: 768px) and"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "String | Length",
                            "name": "break-from",
                            "description": "The lower limit breakpoint for the generated media query.\nUse a string for a named site breakpoint or a length.\n"
                        },
                        {
                            "type": "String | Length",
                            "name": "break-to",
                            "description": "The upper limit breakpoint for the generated media query. Use\na string for a named site breakpoint or a length.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/mediaquery.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "media-until-height",
                    "docName": "media-until-height()",
                    "type": "mixin",
                    "description": "Creates a media query that applies for all browser heights **smaller** than\nthe provided size.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-until(sm) { ... } // => @media screen and (max-height: 768px) { ... }"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "Length",
                            "name": "size",
                            "description": "The size for the generated media query.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/mediaquery.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "media-after-height",
                    "docName": "media-after-height()",
                    "type": "mixin",
                    "description": "Creates a media query that applies for all browser heights **larger** than\nthe provided size.\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-until(sm) { ... } // => @media screen and (min-height: 768px) { ... }"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "Length",
                            "name": "size",
                            "description": "The size for the generated media query.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/mediaquery.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "media-between-height",
                    "docName": "media-between-height()",
                    "type": "mixin",
                    "description": "Creates a media query that applies for all browser heights between the two provided sizes.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-between-height(sm, md) { ... } // => @media screen and (min-height: 768px) and (max-height: 1024px) { ... }"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "Length",
                            "name": "size-from",
                            "description": "The lower limit size for the generated media query.\n"
                        },
                        {
                            "type": "Length",
                            "name": "size-to",
                            "description": "The upper limit size for the generated media query.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/mediaquery.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "media-until-mobile",
                    "docName": "media-until-mobile()",
                    "type": "mixin",
                    "description": "A convenience mixin that is equivalent to media-until($mobile-breakpoint).\n",
                    "access": "public",
                    "path": "site/mediaquery.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.mediaquery",
                    "name": "breakpoints-asc",
                    "docName": "breakpoints-asc()",
                    "type": "function",
                    "description": "Returns a sorted list of site breakpoints ($breakpoints) from smallest to largest\n",
                    "access": "public",
                    "path": "site/mediaquery.scss"
                }
            ]
        },
        {
            "name": "site.misc",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.misc",
                    "name": "focus",
                    "docName": "focus()",
                    "type": "mixin",
                    "description": "Adds a site-specific focus selector use the value defined by `focus:selector`\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".item { @include focus() {...} }  => .item:focus-visible {...}"
                        }
                    ],
                    "access": "public",
                    "path": "site/misc.scss"
                }
            ]
        },
        {
            "name": "site.rems",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.rems",
                    "name": "rems",
                    "docName": "rems()",
                    "type": "function",
                    "description": "Convert px to rem for a given base font size (the font size of the document root element)\n",
                    "access": "public",
                    "path": "site/rems.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.rems",
                    "name": "px",
                    "docName": "px()",
                    "type": "function",
                    "description": "Convert rem to px for a given base font size (the font size of the document root element)\n",
                    "access": "public",
                    "path": "site/rems.scss"
                }
            ]
        },
        {
            "name": "site.shadows",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.shadows",
                    "name": "depth-shadow",
                    "docName": "depth-shadow()",
                    "type": "function",
                    "description": "Creates the syntax for a multi-level shadow\n",
                    "parameter": [
                        {
                            "type": "*",
                            "name": "depth"
                        },
                        {
                            "type": "*",
                            "name": "level"
                        },
                        {
                            "type": "*",
                            "name": "color"
                        }
                    ],
                    "access": "public",
                    "path": "site/shadows.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.shadows",
                    "name": "shadow",
                    "docName": "shadow()",
                    "type": "function",
                    "description": "Returns a standardized box shadow\n",
                    "access": "public",
                    "path": "site/shadows.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.shadows",
                    "name": "shadow",
                    "docName": "shadow()",
                    "type": "mixin",
                    "description": "Create a standard box-shadow\n",
                    "access": "public",
                    "path": "site/shadows.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.shadows",
                    "name": "shadow-effect",
                    "docName": "shadow-effect()",
                    "type": "mixin",
                    "description": "Create a standard drop-shadow as a css filter effect (creates\nnon-rectangular shadows on any content)\n",
                    "access": "public",
                    "path": "site/shadows.scss"
                }
            ]
        },
        {
            "name": "site.transitions",
            "description": "",
            "variables": [
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-cubic",
                    "docName": "$ease-in-cubic",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in cubic\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-cubic",
                    "docName": "$ease-out-cubic",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in cubic\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-out-cubic",
                    "docName": "$ease-in-out-cubic",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in cubic\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-circ",
                    "docName": "$ease-in-circ",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in circ\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-circ",
                    "docName": "$ease-out-circ",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease out circ\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-out-circ",
                    "docName": "$ease-in-out-circ",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in-out circ\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-expo",
                    "docName": "$ease-in-expo",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in expo\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-expo",
                    "docName": "$ease-out-expo",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease out expo\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-out-expo",
                    "docName": "$ease-in-out-expo",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in-out expo\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-quad",
                    "docName": "$ease-in-quad",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in quad\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-quad",
                    "docName": "$ease-out-quad",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease out quad\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-out-quad",
                    "docName": "$ease-in-out-quad",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in-out quad\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-quart",
                    "docName": "$ease-in-quart",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in quart\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-quart",
                    "docName": "$ease-out-quart",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease out quart\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-out-quart",
                    "docName": "$ease-in-out-quart",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in-out quart\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-quint",
                    "docName": "$ease-in-quint",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in quint\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-quint",
                    "docName": "$ease-out-quint",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease out quint\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-out-quint",
                    "docName": "$ease-in-out-quint",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in-out quint\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-sine",
                    "docName": "$ease-in-sine",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in sine\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-sine",
                    "docName": "$ease-out-sine",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease out sine\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-out-sine",
                    "docName": "$ease-in-out-sine",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in-out sine\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-back",
                    "docName": "$ease-in-back",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in back\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-back",
                    "docName": "$ease-out-back",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease out back\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-in-out-back",
                    "docName": "$ease-in-out-back",
                    "type": "variable",
                    "description": "Cubic-bezier for Penner ease in-out back\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "ease-out-smallbounce",
                    "docName": "$ease-out-smallbounce",
                    "type": "variable",
                    "description": "Cubic-bezier for custopm ease with a small bounce\n",
                    "access": "public",
                    "path": "site/transitions.scss"
                }
            ],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.transitions",
                    "name": "transition",
                    "docName": "transition()",
                    "type": "function",
                    "description": "Simplified syntax for transitioning multiple individual properties on\nan element, defaulting to standardized values for duration and easing.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include transition(transform opacity);"
                        },
                        {
                            "type": "scss",
                            "code": "@include transition(transform opacity, 500ms);"
                        },
                        {
                            "type": "scss",
                            "code": "@include transition(transform opacity, $ease: $ease-out-bounce A l);"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "list",
                            "name": "proplist",
                            "description": "A list of properties to be transitioned"
                        },
                        {
                            "type": "duration",
                            "name": "dur",
                            "default": "$transition-dur",
                            "description": "The duration of the transition"
                        },
                        {
                            "type": "string",
                            "name": "ease",
                            "default": "$transition-ease",
                            "description": "The easing to be used in the transition"
                        },
                        {
                            "type": "duration",
                            "name": "delay",
                            "default": "0ms",
                            "description": "The delay for the transition\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/transitions.scss"
                }
            ]
        },
        {
            "name": "site.typography",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "site",
                    "group": "site.typography",
                    "name": "fs",
                    "docName": "fs()",
                    "type": "function",
                    "description": "Get a font-size by name from the default typescale\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "config(typescale, (sm: 14px, base: 15px, lg: 18px, xl: 20px));\n\nfont-size: fs(base)   // => font-size: 15px\nfont-size: fs(sm)     // => font-size: 14px\nfont-size: fs(-1)     // => font-size: 14px\nfont-size: fs(2)      // => font-size: 20px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "String or Number",
                            "name": "name",
                            "description": "The name or offset of the size to lookup. Must be defined in the\nconfig $typescale variable.\n"
                        }
                    ],
                    "access": "public",
                    "path": "site/typography.scss"
                },
                {
                    "namespace": "site",
                    "group": "site.typography",
                    "name": "type-style",
                    "docName": "type-style()",
                    "type": "mixin",
                    "description": "Generate type style based on a site base style (as defined in type-bases)\n",
                    "access": "public",
                    "path": "site/typography.scss"
                }
            ]
        },
        {
            "name": "undefined",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "pow",
                    "docName": "pow()",
                    "type": "function",
                    "description": " Calculate a number raised to the power of the provided exponent.\n @param {*} $base The base number\n @param {*} $exp The exponent used to raise the base\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "pow(2, 3)"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "round-d",
                    "docName": "round-d()",
                    "type": "function",
                    "description": " Round a number using the specified number of decimals.\n @param {number} $n The number to be rounded\n @param {number} $dec [2] The number of decimals in the output\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$val: round-d(3.33333333, 2) // => 3.33"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "round-f",
                    "docName": "round-f()",
                    "type": "function",
                    "description": " Round a number with the specified fraction (e.g. 4 will produce 1.0, 1.25, 1.5, etc.)\n @param {number} $n The number to be rounded\n @param {number} $frac [8] The denominator of the fractional portion of the result\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$val: round-f(3.3333, 2) // => 3.5"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "intp",
                    "docName": "intp()",
                    "type": "function",
                    "description": "Interpolate between two values.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "intp(0.5, 4) // => 2"
                        },
                        {
                            "type": "scss",
                            "code": "intp(0.5, (1, 3) // => 2"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "number",
                            "name": "prog",
                            "description": "The progress between the two values, provided as a value between 0 and 1.\n"
                        },
                        {
                            "type": "number",
                            "name": "range",
                            "description": "The range of interpolation. This can be provided as a single value which\nrepresents the upper range from 0 or as two values which represent the lower and upper range.\n"
                        },
                        {
                            "type": "string",
                            "name": "ease",
                            "description": "A reference to an easing function. See the ease function for details\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "ease",
                    "docName": "ease()",
                    "type": "function",
                    "description": " Interpolate a value between 0 and 1 using the easing function with the given name\n @param {number} $t The input value between 0 and 1\n @param {String} $easing The name of the easing function that should be used for interpolation\n @return {number} The eased equivalent of the input (also between 0 and 1).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease(0.5, 'out-quad') // => 0.75"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "ease-in-quad",
                    "docName": "ease-in-quad()",
                    "type": "function",
                    "description": " Interpolate a value between 0 and 1 using the Penner ease-in quad function.\n @param {number} $t The input value between 0 and 1\n @return {number} The eased equivalent of the input (also between 0 and 1).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-quad(0.5) // => 0.25"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "ease-out-quad",
                    "docName": "ease-out-quad()",
                    "type": "function",
                    "description": " Interpolate a value between 0 and 1 using the Penner ease-out quad function.\n @param {number} $t The input value between 0 and 1\n @return {number} The eased equivalent of the input (also between 0 and 1).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-quad(0.25) // => 0.4375;"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "ease-in-cubic",
                    "docName": "ease-in-cubic()",
                    "type": "function",
                    "description": " Interpolate a value between 0 and 1 using the Penner ease-in cubic function.\n @param {number} $t The input value between 0 and 1\n @return {number} The eased equivalent of the input (also between 0 and 1).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-cubic(0.5) // => 0.125;"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "ease-out-cubic",
                    "docName": "ease-out-cubic()",
                    "type": "function",
                    "description": " Interpolate a value between 0 and 1 using the Penner ease-out cubic function.\n @param {number} $t The input value between 0 and 1\n @return {number} The eased equivalent of the input (also between 0 and 1).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-cubic(0.25) // => 0.578125"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "ease-in-quart",
                    "docName": "ease-in-quart()",
                    "type": "function",
                    "description": " Interpolate a value between 0 and 1 using the Penner ease-in quart function.\n @param {number} $t The input value between 0 and 1\n @return {number} The eased equivalent of the input (also between 0 and 1).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-quart(0.3) // => 0.0081"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "ease-out-quart",
                    "docName": "ease-out-quart()",
                    "type": "function",
                    "description": " Interpolate a value between 0 and 1 using the Penner ease-out quart function.\n @param {number} $t The input value between 0 and 1\n @return {number} The eased equivalent of the input (also between 0 and 1).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-quart(0.5) // => 0.9375"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "clamp-number",
                    "docName": "clamp-number()",
                    "type": "function",
                    "description": " Clamp a number (keep it within the confines of min/max). Note: the weird\n name is to differentiate from the clamp() css function.\n\n @param {*} $number The number to be clampled\n @param {*} $min Min allowed value\n @param {*} $max Max allowed value\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "clamp-number(4, 3, 10) // => 4 is above the min"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "divide",
                    "docName": "divide()",
                    "type": "function",
                    "description": " Provides a wrapper for the standard sass divide function (math.div) to make imports a little\n simpler. Returns the result of dividing $num1 by $num2.\n\n @param {number} $num1 The first number in the division operation (the numerator)\n @param {number} $num2 The first number in the division operation (the numerator)\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "divide(10, 2) // => 5"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                },
                {
                    "namespace": "other",
                    "group": "undefined",
                    "name": "percent",
                    "docName": "percent()",
                    "type": "function",
                    "description": " Convience function that divides two numbers and the multiples the result by 100%\n\n @param {number} $num1 The first number in the division operation (the numerator)\n @param {number} $num2 The first number in the division operation (the numerator)\n @param {number} $round The number of digits to use when rounding the output\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "percent(10, 3, 2) // => 333.33%"
                        }
                    ],
                    "access": "public",
                    "path": "utils/math.scss"
                }
            ]
        },
        {
            "name": "utils.bem",
            "description": "Provides a series of functions and mixins that make it easier to generate\n[bem](http://getbem.com/) style class names. Modified from the great thinking done\n[here](https://codepen.io/gionkunz/pen/rkswl?editors=010).\n\nUnlike many bem mixins, there is no specific mixin for creating modifier classes. Instead,\nmodifiers and pseudo classes can be included directly in the call to the block or element mixin.",
            "variables": [],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.bem",
                    "name": "-bem-name",
                    "docName": "-bem-name()",
                    "type": "function",
                    "description": "\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "-bem-name($name: true, $modifier: 'test', $pseudo: '', $prefix: '')"
                        }
                    ],
                    "access": "private",
                    "path": "utils/bem.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.bem",
                    "name": "get-block-name",
                    "docName": "get-block-name()",
                    "type": "function",
                    "description": "Extracts the block name form a selector. So if $selector is something like\n`.block__element--mod` the function would return `block`.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-block-name(`.block__element--mod`)"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "selector"
                        }
                    ],
                    "access": "public",
                    "path": "utils/bem.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.bem",
                    "name": "block",
                    "docName": "block()",
                    "type": "mixin",
                    "description": "Creates a block class selector using the bem approach to class naming. This is often unecessary\nsince elements can be nested under the block class using a normal declation.\n\n",
                    "example": [
                        {
                            "type": "Robby",
                            "code": "// An intentionally complex example:\n @include block(block, modifier) {\n    @include element(element, modifier) {\n        @media only screen and (max-width: 800px) {\n            @include element(element) { ... }\n        }\n    }\n}",
                            "description": "Sarah is getting an error with this example"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "string",
                            "name": "name",
                            "description": "The block name string"
                        },
                        {
                            "type": "string",
                            "name": "modifier",
                            "default": "''",
                            "description": "An optional modifier string. Use this to indicate that the\nblock is in a modified state (e.g. selected).\n"
                        },
                        {
                            "type": "string",
                            "name": "pseudo",
                            "default": "''",
                            "description": "An optional pseudo class that should be appended to the selector\n(e.g. hover or after)\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/bem.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.bem",
                    "name": "bem",
                    "docName": "bem()",
                    "type": "mixin",
                    "description": "Creates a element--modifier class name using the bem approach to class naming. Can be used\ninside of the block mixin or just within a class declartion. Should also work with media media\nqueries and other complex scnearios.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".block { @include bem(element) { ... } }\n// => .block__element { ... }"
                        },
                        {
                            "type": "scss",
                            "code": ".block { @include bem,(element, modifier) { ... } }\n// => block__element--modifier { ... }"
                        },
                        {
                            "type": "scss",
                            "code": ".block { @include bem(element, $pseudo:after) { ... } }\n// => block__element:after { ... }"
                        },
                        {
                            "type": "scss",
                            "code": ".block { @include bem,(element, modifier) { @include bem(child) { ... } } }\n// => .block__element--modifier { .block__child { ... } }"
                        },
                        {
                            "type": "scss",
                            "code": ".block { @include bem((element1 element2)) { ... } }\n// => .block__element1, block__element2 { ... }"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "string | list",
                            "name": "name",
                            "description": "The element name string (if a list is provided the selector will\ninclude a selector for each item in the list)\n"
                        },
                        {
                            "type": "string",
                            "name": "modifier",
                            "default": "''",
                            "description": "An optional modifier string. Use this to indicate that the\nblock is in a modified state (e.g. selected).\n"
                        },
                        {
                            "type": "string",
                            "name": "pseudo",
                            "default": "''",
                            "description": "An optional pseudo class that should be appended to the selector\n(e.g. hover or after)\n\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/bem.scss"
                }
            ]
        },
        {
            "name": "utils.collections",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "map-get-default",
                    "docName": "map-get-default()",
                    "type": "function",
                    "description": "Get a value from a map if the key exists, otherwise return a fallback\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-get-default((a:1, b:2), a, 3) => 1"
                        },
                        {
                            "type": "scss",
                            "code": "map-get-default((a:1, b:2), wontwork, 3) => 3"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "map-deep-get",
                    "docName": "map-deep-get()",
                    "type": "function",
                    "description": "Deep lookup for map values, each parameter represents the next level lookup\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-deep-get((a:1, b:2), b) // => 2"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "map",
                            "description": "Map"
                        },
                        {
                            "type": "arglist",
                            "name": "keys",
                            "description": "Key chain"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "nth-if-length",
                    "docName": "nth-if-length()",
                    "type": "function",
                    "description": " If $list has an $nth element, return that element. Otherwise return $fallback.\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "nth-if-length((a, b, c), 1) // => a"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "nth-or-val",
                    "docName": "nth-or-val()",
                    "type": "function",
                    "description": "If $list-or-val is a list, return the nth value; if the item is a value\nreturn the value; if the value is null return the default\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "nth-or-val((a, b, c), 1, d) => a"
                        },
                        {
                            "type": "scss",
                            "code": "nth-or-val(a, 1, d) => a"
                        },
                        {
                            "type": "scss",
                            "code": "nth-or-val(null, 1, d) => d"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "list-remove",
                    "docName": "list-remove()",
                    "type": "function",
                    "description": "Return a copy of a list with the nth value removed\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-remove((a, b, c), 1) // => b, c"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "list-replace",
                    "docName": "list-replace()",
                    "type": "function",
                    "description": "Performas a find and replace of items within a list\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-replace((a, b, c), (c: d)) // => a, b, d"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "list",
                            "name": "list",
                            "description": "The list on which the replacement will be performed"
                        },
                        {
                            "type": "map",
                            "name": "replacements",
                            "description": "A map of the search/replacent values, e.g. (searchForThis: newKey)"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "list-contains",
                    "docName": "list-contains()",
                    "type": "function",
                    "description": "Returns true if the list contains a value, otherwise false\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-contains((a, b, c), c) // => true"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "list-sort-num",
                    "docName": "list-sort-num()",
                    "type": "function",
                    "description": "Return a copy of a list sorted numerically\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-sort-num(2, 4, 1, 5, 3) // => 1 2 3 4 5"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "map-sort-by-values",
                    "docName": "map-sort-by-values()",
                    "type": "function",
                    "description": "Return a copy of a map sorted by the value of each entry\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-sort-by-values((a:1, b:2, d:4, c:3)) // => ((a: 1, b: 2, c: 3, d: 4))"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "list-map",
                    "docName": "list-map()",
                    "type": "function",
                    "description": "Creates a new list with the results of calling a function once for every\nitem in this list. Equivalent to Array.map in JavaScript. Must use get-function to retrieve the function used for the $fn parameter. See example.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@function square($x) { @return $x * $x }\nlist-map(1 2 3 4, get-function(square)); // => 1 4 9 16"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "List",
                            "name": "list",
                            "description": "the list to which the function is being applied\n"
                        },
                        {
                            "type": "Function",
                            "name": "fn",
                            "description": "reference to a function(item, index) that will be\napplied to every item.\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "list-filter",
                    "docName": "list-filter()",
                    "type": "function",
                    "description": "Creates a new list with all items that pass the test implemented by the\nprovided function. Similar to Array.filter in JavaScript.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@function aboveTen($x) { @return ($x > 10)}\nlist-filter(2 20 30 3 4 100, get-function(aboveTen)); // => (20 30 100)"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "List",
                            "name": "list",
                            "description": "the list being filtered"
                        },
                        {
                            "type": "Function",
                            "name": "fn",
                            "description": "reference to a filtering function\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.collections",
                    "name": "map-collect",
                    "docName": "map-collect()",
                    "type": "function",
                    "description": "Merge multiple maps into a single map\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-collect((a: 1), (b:2), (c: 3)); // => (a:1, b:2, c:3)"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "maps...",
                            "description": "One or more maps that should be merged into a single map.\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/collections.scss"
                }
            ]
        },
        {
            "name": "utils.flatmap",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.flatmap",
                    "name": "flat-get",
                    "docName": "flat-get()",
                    "type": "function",
                    "description": "A function that retrieves a \"deep\" value from a map using path syntax where key names are\nseparated by colons\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$color: flat-get((colors: (somecolor: #F00)), 'colors:somecolor')\n==> #F00"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "map",
                            "description": "An existing map that serves as the lookup source\n"
                        },
                        {
                            "type": "string",
                            "name": "path",
                            "description": "The path where the value is found, expressed as a list of keys separated\nby colons (e.g. 'colors:accent')\n"
                        },
                        {
                            "type": "*",
                            "name": "fallback",
                            "default": "null",
                            "description": "An optional fallback value that will be returned in the value isn't\nfound\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/flatmap.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.flatmap",
                    "name": "flat-set",
                    "docName": "flat-set()",
                    "type": "function",
                    "description": "A function that allows you to set a \"deep\" value in a map using path syntax where key names are\nseparated by colons\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$map: flat-set((), 'colors:somecolor', #F00) // ==> (colors: (somecolor: #F00))"
                        },
                        {
                            "type": "scss",
                            "code": "$map: flat-set((colors: (clr1: #F00)), 'colors:clr2', #00F) // ==> {colors: {clr1: #F00, clr2: #00F}}"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "map",
                            "description": "An existing map that serves as the basis for the returned value\n"
                        },
                        {
                            "type": "string",
                            "name": "path",
                            "description": "The path where the value should be set, expressed as a list of keys\nseparated by colons (e.g. 'colors:accent')\n"
                        },
                        {
                            "type": "*",
                            "name": "val",
                            "description": "The value to be set at the path\n"
                        }
                    ],
                    "return": {
                        "type": "map",
                        "description": "A new map with the value set (all intermediate objects will be created and values\noverwritten as needed)\n"
                    },
                    "access": "public",
                    "path": "utils/flatmap.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.flatmap",
                    "name": "flat-default",
                    "docName": "flat-default()",
                    "type": "function",
                    "description": "Same as flat-set, but will not overwrite a value if it already exists\n\n",
                    "example": [
                        {
                            "type": "flat",
                            "code": "",
                            "description": "default((colors: (clr1: #F00)), 'colors:clr2', #00F) // => {colors: {clr1: #F00, clr2: #00F}}"
                        },
                        {
                            "type": "scss",
                            "code": "// example with $merge-maps true (not that the result is merged)\n$map: (config: (bluecolor: blue));\n$result: flat-map($map, 'config:colors', (redcolor: red), true); => (config:(colors:(bluecolor:blue, redcolor:red)))"
                        },
                        {
                            "type": "scss",
                            "code": "// example with $merge-maps false (not that the result is replaced)\n$map: (config: (bluecolor: blue));\n$result: flat-map($map, 'config:colors', (redcolor: red), true); => (config:(colors:(redcolor:red)))"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "map",
                            "description": "The flat map that will be modified"
                        },
                        {
                            "type": "*",
                            "name": "path",
                            "description": "The path of the new value"
                        },
                        {
                            "type": "*",
                            "name": "val",
                            "description": "The new value"
                        },
                        {
                            "type": "*",
                            "name": "merge-maps",
                            "default": "false",
                            "description": "Determines what to do if the key refers to a value that is already a map. See example of both behaviors below.\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/flatmap.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.flatmap",
                    "name": "flatten-map",
                    "docName": "flatten-map()",
                    "type": "function",
                    "description": "A function that flattens a map to it's \"flat\" equivalent where every key is replaced with a deep path\n(see examples) into the original map.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "flatten-map((colors: (clr1: #f00, clr2: #00f)))\n==> (\"colors:clr1\": #f00, \"colors:clr2\": #00f)"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "map",
                            "description": "The map to be flattened\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/flatmap.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.flatmap",
                    "name": "unflatten-map",
                    "docName": "unflatten-map()",
                    "type": "function",
                    "description": "A function that restores a \"flat\" map (like one produced by the flatten-map function) to a\nnormal deep map.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "unflatten-map((\"colors:clr1\": #f00, \"colors:clr2\": #00f))\n==> (colors: (clr1: #f00, clr2: #00f))"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "map",
                            "description": "The map to be unflattened\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/flatmap.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.flatmap",
                    "name": "flat-merge",
                    "docName": "flat-merge()",
                    "type": "function",
                    "description": "A function which will flatten and then merge two maps. This is not the same as a deep merge\nbecause it allows for keys in one (or both) of the maps to be complete paths. If there are\nconflicts, last in list wins.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "flatten-map-merge((colors: (clr1: #f00)), ('colors:clr2': #00f))\n    -> (colors: (clr1: #f00, clr2: #00f))"
                        },
                        {
                            "type": "scss",
                            "code": "flat-merge(('clr:main': blue),('clr:main': red));\n    -> (clr: (main: red))"
                        }
                    ],
                    "access": "public",
                    "path": "utils/flatmap.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.flatmap",
                    "name": "flat-has-key",
                    "docName": "flat-has-key()",
                    "type": "function",
                    "description": "Returns true if the provided map, once flattened, contains the deep path $key;\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "flat-has-key((colors: (clr1: #f00, clr2: #00f)), 'colors:clr2') => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "map"
                        },
                        {
                            "type": "string",
                            "name": "key"
                        }
                    ],
                    "access": "public",
                    "path": "utils/flatmap.scss"
                }
            ]
        },
        {
            "name": "utils.json",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.json",
                    "name": "encode",
                    "docName": "encode()",
                    "type": "function",
                    "description": "Encode any sass value as a JSON-ready string.\n\n",
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value",
                            "description": "The scss data to be encoded for JSON exporting"
                        }
                    ],
                    "access": "public",
                    "path": "utils/json.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.json",
                    "name": "encode-list",
                    "docName": "encode-list()",
                    "type": "function",
                    "description": "Encode each item in a Sass list, and convert to a JSON-ready\nsquare-bracketed list.\n\n",
                    "parameter": [
                        {
                            "type": "list",
                            "name": "list",
                            "description": "List to be encoded for JSON exporting"
                        }
                    ],
                    "access": "public",
                    "path": "utils/json.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.json",
                    "name": "encode-map",
                    "docName": "encode-map()",
                    "type": "function",
                    "description": "Encode each key/value in a Sass map, and convert to a JSON-ready object.\n\n",
                    "parameter": [
                        {
                            "type": "map",
                            "name": "map",
                            "description": "Map to be encoded for JSON exporting"
                        }
                    ],
                    "access": "public",
                    "path": "utils/json.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.json",
                    "name": "encode-number",
                    "docName": "encode-number()",
                    "type": "function",
                    "description": "Encode a number for JSON, adding proof-quotes for length values.\n\n",
                    "parameter": [
                        {
                            "type": "number",
                            "name": "number",
                            "description": "Number to be encoded for JSON exporting"
                        }
                    ],
                    "access": "public",
                    "path": "utils/json.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.json",
                    "name": "quotes",
                    "docName": "quotes()",
                    "type": "function",
                    "description": "Convert any value to a double-quoted string.\n",
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value",
                            "description": "The value to inspect and quote."
                        }
                    ],
                    "access": "private",
                    "path": "utils/json.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.json",
                    "name": "escape-quotes",
                    "docName": "escape-quotes()",
                    "type": "function",
                    "description": "Return a string, with internal quotes escaped.\n",
                    "parameter": [
                        {
                            "type": "string",
                            "name": "string",
                            "description": "The string to be manipulated"
                        }
                    ],
                    "access": "private",
                    "path": "utils/json.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.json",
                    "name": "escape-backslashes",
                    "docName": "escape-backslashes()",
                    "type": "function",
                    "description": "Return a string, with internal backslashes escaped.\n",
                    "parameter": [
                        {
                            "type": "string",
                            "name": "string",
                            "description": "The string to be manipulated"
                        }
                    ],
                    "access": "private",
                    "path": "utils/json.scss"
                }
            ]
        },
        {
            "name": "utils.layout",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "aspect",
                    "docName": "aspect()",
                    "type": "mixin",
                    "description": "Creates css to force an element to maintain a particular aspect (based on width) using the\npadding bottom trick. Note: padding bottom is calculated relative to the parent width, so it's\ncommon to use this on a pseudo element and set the width on the element itself. Check out\naspect-before / aspect-after.\n\n",
                    "example": [
                        {
                            "type": "include",
                            "code": "display: block;\nwidth: 100%;\npadding-bottom: 56.25%;",
                            "description": "aspect('16:9') // produces the correct css for an aspect ratio of 16:9// =>"
                        },
                        {
                            "type": "scss",
                            "code": "@include aspect(divide(4,3))  // produces the correct css for an aspect ratio of 4:3"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "string or number",
                            "name": "aspect",
                            "description": "A number (like 1.333) or string (like '16:9') that represents the aspect\nratio\n"
                        },
                        {
                            "type": "string",
                            "name": "display",
                            "default": "block",
                            "description": "The value of the display property to be set on the element\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "aspect-before",
                    "docName": "aspect-before()",
                    "type": "mixin",
                    "description": "\n",
                    "example": [
                        {
                            "type": "include",
                            "code": "display: block;\nwidth: 100%;\npadding-bottom: 75.0187546887%;",
                            "description": "aspect-before(1.333, $display: block) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "aspect-after",
                    "docName": "aspect-after()",
                    "type": "mixin",
                    "description": "\n",
                    "example": [
                        {
                            "type": "include",
                            "code": "display: block;\nwidth: 100%;\npadding-bottom: 75.0187546887%;",
                            "description": "aspect-after(1.333, $display: block) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "first-last-radius",
                    "docName": "first-last-radius()",
                    "type": "mixin",
                    "description": "Convenience mixin to inherit the border-radius of a parent based on child position (first child\ninherits top left/right radius, last child inherits bottom left/right radius)\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include first-last-radius()"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "rel",
                    "docName": "rel()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: relative;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;",
                            "description": "rel($t: null, $r: null, $b: null, $l: null) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "abs",
                    "docName": "abs()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;",
                            "description": "abs($t: null, $r: null, $b: null, $l: null) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "fixed",
                    "docName": "fixed()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: fixed;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;",
                            "description": "fixed($t: null, $r: null, $b: null, $l: null) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "left-top",
                    "docName": "left-top()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\nleft: 0;\ntop: 0;",
                            "description": "left-top($l: 0, $t: 0) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "right-top",
                    "docName": "right-top()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\nright: 0;\ntop: 0;",
                            "description": "right-top($r: 0, $t: 0) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "left-bottom",
                    "docName": "left-bottom()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\nleft: 0;\nbottom: 0;",
                            "description": "left-bottom($l: 0, $b: 0) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "right-bottom",
                    "docName": "right-bottom()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\nleft: 0;\nbottom: 0;",
                            "description": "right-bottom($r: 0, $b: 0) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "abs-fill",
                    "docName": "abs-fill()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;",
                            "description": "abs-fill() // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "center",
                    "docName": "center()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\nleft: 50%;\ntop: 50%;\ntransform: translate(-50%, -50%);",
                            "description": "center($left: 50%, $top: 50%, $position: absolute)"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "center-x",
                    "docName": "center-x()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\nleft: 50%;\ntransform: translateX(-50%);",
                            "description": "center-x($left: 50%, $position: absolute) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.layout",
                    "name": "center-y",
                    "docName": "center-y()",
                    "type": "mixin",
                    "description": "",
                    "example": [
                        {
                            "type": "include",
                            "code": "position: absolute;\ntop: 50%;\ntransform: translateY(-50%);",
                            "description": "center-y($top: 50%, $position: absolute) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/layout.scss"
                }
            ]
        },
        {
            "name": "utils.misc",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "control-reset",
                    "docName": "control-reset()",
                    "type": "mixin",
                    "description": " Completely resets the appearance of controls (input and button)\n",
                    "example": [
                        {
                            "type": "control",
                            "code": "appearance: none;\n border: none;\noutline: none;\n -webkit-touch-callout: none;\n user-select: none;",
                            "description": "reset // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "placeholder",
                    "docName": "placeholder()",
                    "type": "mixin",
                    "description": "Style the placeholder text for a text input element\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "input {\n    @include placeholder {\n        /* styles for placeholder here */\n    }\n}"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "no-select",
                    "docName": "no-select()",
                    "type": "mixin",
                    "description": " Disable text selection on an element\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "no-select // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "line-clamp",
                    "docName": "line-clamp()",
                    "type": "mixin",
                    "description": " Use the (now broadly supported) line-clamp property to restrict the\n number of lines that are shown in a text element.\n\n @param {number} $lines The maximum number of lines to be shown\n\n",
                    "example": [
                        {
                            "type": "line",
                            "code": "display: -webkit-box;\n-webkit-line-clamp: 3;\n-webkit-box-orient: vertical;\noverflow: hidden;",
                            "description": "clamp(3) // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "before",
                    "docName": "before()",
                    "type": "mixin",
                    "description": " Shortcut for the ::before pseudo element with common defaults for content\n and display.\n\n @param {*} $content [''] The value for the content property.\n @param {*} $display [block] The value for the display property.\n\n",
                    "example": [
                        {
                            "type": "before",
                            "code": "content: \"\";\ndisplay: block;",
                            "description": "('hello, world') // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "after",
                    "docName": "after()",
                    "type": "mixin",
                    "description": " Shortcut for the ::after pseudo element with common defaults for content\n and display.\n\n @param {*} $content [''] The value for the content property.\n @param {*} $display [block] The value for the display property.\n\n",
                    "example": [
                        {
                            "type": "after",
                            "code": "content: \"\";\ndisplay: block;",
                            "description": "('goodbye, world') // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "triangle",
                    "docName": "triangle()",
                    "type": "mixin",
                    "description": " Create a triangle element using the border properties\n\n @param {string} $direction The direction the arrow is pointing (up, down, left, right, etc.)\n @param {color} $color The fill color for the arrow\n @param {length} $height The height of the arrow\n @param {length} $width  The width of the arrow\n\n @example triangle('up', 'red', 10px, 2px) // =>\nborder-style: solid;\n height: 0;\n width: 0;\n border-color: transparent transparent \"red\" transparent;\n border-width: 0 1px 10px 1px;\n",
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "checkered-background",
                    "docName": "checkered-background()",
                    "type": "mixin",
                    "description": "Sets a generated checked pattern background svg image on an element\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include checkered-background(20px, green) // => creates a green and transparent checkered background where each square is 20px x 20px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "width",
                            "default": "12px",
                            "description": "The width of an individual square in the checked pattern"
                        },
                        {
                            "type": "*",
                            "name": "color",
                            "default": "#c8c8c8",
                            "description": "The first of two colors in the check pattern"
                        },
                        {
                            "type": "*",
                            "name": "color-alt",
                            "default": "transparent",
                            "description": "The second of two colors in the check pattern\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "map-key-replace",
                    "docName": "map-key-replace()",
                    "type": "function",
                    "description": "Finds and replaces keys in a map\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$map: map-key-replace(( oldkey: 'value'), (oldkey: newkey)); // => (newkey: 'value')"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "css-map",
                    "docName": "css-map()",
                    "type": "mixin",
                    "description": "Generates css from a map of properties and values. Properties can be remapped with aliases or\nignored with a start pattern.\n\n",
                    "example": [
                        {
                            "type": "include",
                            "code": "color: blue;\nbackground-color: green;\nfont-family: sans-serif;",
                            "description": "css-map(( color: blue, background-color: green, font-family: sans-serif)); // =>"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "map",
                            "name": "map",
                            "description": "The property map used to generate the css"
                        },
                        {
                            "type": "map",
                            "name": "aliases",
                            "description": "Property aliases map (e.g (-px-accent: background-color))"
                        },
                        {
                            "type": "list",
                            "name": "map-states",
                            "description": "If provided, the specified map-type properties will be interpreted as\nsub states (e.g. (hover: (...)) becomes &:hover {...})"
                        },
                        {
                            "type": "string",
                            "name": "ignore-start-pattern",
                            "description": "Properties that start with this will be ignored\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "debug-zebra",
                    "docName": "debug-zebra()",
                    "type": "mixin",
                    "description": " Generates a loud striped background gradient that can be used when debugging (especially helpful for scrolling)\n\n @param {*} $color1 [yellowgreen] The first color in the gradient\n @param {*} $color2 [gold] The second color in the gradient\n @example debug-zebra() // =>\nbackground-image: repeating-linear-gradient(-45deg, yellowgreen 0 20px, gold 20px 40px);\n",
                    "access": "public",
                    "path": "utils/misc.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.misc",
                    "name": "once",
                    "docName": "once()",
                    "type": "mixin",
                    "description": "Mixin that ensures that the wrapped @content will only be included once per $key.\n",
                    "parameter": [
                        {
                            "type": "*",
                            "name": "key"
                        }
                    ],
                    "access": "public",
                    "path": "utils/misc.scss"
                }
            ]
        },
        {
            "name": "utils.strings",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.strings",
                    "name": "str-replace",
                    "docName": "str-replace()",
                    "type": "function",
                    "description": "Replace all instances of a string within another string\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "str-replace('test test test', 'test', 'pass') // => 'pass pass pass'"
                        }
                    ],
                    "access": "public",
                    "path": "utils/strings.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.strings",
                    "name": "url-encode",
                    "docName": "url-encode()",
                    "type": "function",
                    "description": "Url encode a string (used primarily for encoding inline svg)\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "url-encode('pixellab') // => \"www.thinkpixellab.com%25\";"
                        }
                    ],
                    "access": "public",
                    "path": "utils/strings.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.strings",
                    "name": "inline-svg",
                    "docName": "inline-svg()",
                    "type": "function",
                    "description": "Encode an svg string for use as an inline svg (like a background image).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "background-image: inline-svg('<svg>...</svg>'); // => background-image: url('data:image/svg+xml, ... ');"
                        }
                    ],
                    "access": "public",
                    "path": "utils/strings.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.strings",
                    "name": "str-split",
                    "docName": "str-split()",
                    "type": "function",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "str-split('you are here', 'a') // => \"you \" \"re here\""
                        }
                    ],
                    "access": "public",
                    "path": "utils/strings.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.strings",
                    "name": "list-join",
                    "docName": "list-join()",
                    "type": "function",
                    "description": "Creates and returns a new string by concatenating all of the elements in a\nlist separated by $separator. Similiar to Javascript Array.join JavaScript\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-join('a' 'b' 'c', ':') // => 'a:b:c'"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "List",
                            "name": "list",
                            "description": "The list to be joined"
                        },
                        {
                            "type": "String",
                            "name": "separator",
                            "description": "The separator character\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/strings.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.strings",
                    "name": "starts-with",
                    "docName": "starts-with()",
                    "type": "function",
                    "description": "Returns true if a string begins withs another string. Returns false if $str is null or 0 length.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "starts-with('abc', 'a') // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "String",
                            "name": "str",
                            "description": "A string that will be tested for the $start string"
                        },
                        {
                            "type": "String",
                            "name": "start",
                            "description": "A string that $str must start with\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/strings.scss"
                }
            ]
        },
        {
            "name": "utils.typography",
            "description": "",
            "variables": [
                {
                    "namespace": "utils",
                    "group": "utils.typography",
                    "name": "google-font-subsets",
                    "docName": "$google-font-subsets",
                    "type": "variable",
                    "description": "The font subset to loaded. Note that the latin subset is always included if\navailable and need not be specified. Also, if a client browser supports\nsupports unicode-range then this subset parameter is igored and the browser\nwill select from the subsets supported by the font to get what it needs to\nrender the text.\n",
                    "access": "public",
                    "path": "utils/googlefont.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.typography",
                    "name": "typescale-ratios",
                    "docName": "$typescale-ratios",
                    "type": "variable",
                    "description": "Some predefined ratios that could be helpful when generating modular type\nscales.\n\n",
                    "access": "public",
                    "path": "utils/typography.scss"
                }
            ],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.typography",
                    "name": "google-font",
                    "docName": "google-font()",
                    "type": "mixin",
                    "description": "Mixin for loading google fonts.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include google-font(Lato, 300);"
                        },
                        {
                            "type": "scss",
                            "code": "@include google-font(Open Sans, 400, italic)"
                        },
                        {
                            "type": "scss",
                            "code": "@include google-font(Slapo 27px, 400 200, $text: 'Lorem ipsum dolor sit amet');"
                        },
                        {
                            "type": "scss",
                            "code": "// By placing google-font includes inside a google-font include (without arguments nested includes will be merged into a single import\n@include google-font {\n    @include google-font(Material Icons);\n    @include google-font(Open Sans, 300 400 700, normal);\n    @include google-font(Open Sans, 300 400 700, italic normal);\n    @include google-font(Lato, 300 400i 700i);\n    @include google-font(Lato, 300 700, italic normal);\n}\n\n=> @import url(\"//fonts.googleapis.com/css?family=Material+Icons:400|Open+Sans:300,400,700,300i,400i,700i|Lato:300,400\")"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "string",
                            "name": "name",
                            "default": "null",
                            "description": "Name of the font (must match google)\n"
                        },
                        {
                            "type": "list or number",
                            "name": "weights",
                            "default": "400",
                            "description": "A list of weights to be loaded (or\nsingle weight)\n"
                        },
                        {
                            "type": "list or string",
                            "name": "styles",
                            "default": "normal",
                            "description": "A list of styles to be loaded (or\nsingle style)\n"
                        },
                        {
                            "type": "*",
                            "name": "text",
                            "default": "null",
                            "description": "Subsetting text\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/googlefont.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.typography",
                    "name": "modular-size",
                    "docName": "modular-size()",
                    "type": "function",
                    "description": "Generate a modular type size\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "modular-size(100px, 1.25, -1) // => 80px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "number",
                            "name": "base",
                            "description": "The base size used to generate the type scale (always\nexpressed in px).\n"
                        },
                        {
                            "type": "number",
                            "name": "ratio",
                            "description": "The ratio to use for generating the modular type\nscale (e.g. 1.25 or 4/3)\n"
                        },
                        {
                            "type": "number",
                            "name": "step",
                            "description": "The number of steps away from the base (pos/neg)\n"
                        }
                    ],
                    "return": {
                        "type": "number",
                        "description": "A single value (in px or rem) that represents a font-size\nfor the given parameters\n"
                    },
                    "access": "public",
                    "path": "utils/typography.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.typography",
                    "name": "modular-scale",
                    "docName": "modular-scale()",
                    "type": "function",
                    "description": "Generate a complete modular type scale, expressed as a map of type names and font sizes\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$typescale: modular-scale(16px, 0.75, null, (sm base lg)); // => (sm: 0.75rem, base: 1rem, lg: 1.25rem)"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "Number | List",
                            "name": "bases",
                            "description": "The base size or sizes used to generate the typescale\n"
                        },
                        {
                            "type": "number",
                            "name": "ratio",
                            "description": "The ratio used to generate the typescale\n"
                        },
                        {
                            "type": "List",
                            "name": "range",
                            "description": "Optional -- either $range or $names must be provided. A list of two values\nthat represent the range of sizes to be created (e.g. -3, 10), with the size 0 being equivalent\nto the base.\n"
                        },
                        {
                            "type": "List",
                            "name": "names",
                            "description": "Optional -- either $range or $names must be provided. The names for the\ngenerated sizes (these will be the keys in the map that gets returned)\n"
                        },
                        {
                            "type": "Bool",
                            "name": "rems",
                            "default": "true",
                            "description": "Whether or not to convert to rems. Note that rems will be based on\nthe first (or only) value in $bases\n"
                        },
                        {
                            "type": "number",
                            "name": "round",
                            "default": "4",
                            "description": "The fractional rounding amount (e.g. value of 4 means 1/4 so round to\n0.25, 0.50, etc.)\n"
                        }
                    ],
                    "return": {
                        "type": "Map",
                        "description": "A map of named type sizes, e.g. `(small: 0.75rem, -base: 1rem, large: 1.33rem)`\n"
                    },
                    "access": "public",
                    "path": "utils/typography.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.typography",
                    "name": "font-face",
                    "docName": "font-face()",
                    "type": "mixin",
                    "description": "Simplified syntax for generating a font-face at-rule for loading custom\nfonts.\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include font-face('circular','~assets/fonts/circular/circular-book', 400, null, 'woff woff2 otf');"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "String",
                            "name": "name",
                            "description": "Name of the font (as referenced in css)\n"
                        },
                        {
                            "type": "String",
                            "name": "path",
                            "description": "The url path used to load the font (do not include\nthe extension, it will be appended)\n"
                        },
                        {
                            "type": "String",
                            "name": "weight",
                            "description": "The weight associated with this variation of the\nfont\n"
                        },
                        {
                            "type": "String",
                            "name": "style",
                            "description": "(optional) The styles associated with this variation\nof the font\n"
                        },
                        {
                            "type": "String",
                            "name": "exts",
                            "default": "woff ttf",
                            "description": "(optional) The full list of extensions to\nbe loaded (added to path), no period\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/typography.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.typography",
                    "name": "font-smoothing-on",
                    "docName": "font-smoothing-on()",
                    "type": "mixin",
                    "description": "Turn font smoothing on (makes type appear thinner and lighter on Mac and more closely\nresembles type rendering on Windows)\n",
                    "example": [
                        {
                            "type": "include",
                            "code": "font-smooth: always;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;",
                            "description": "font-smoothing-on() // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/typography.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.typography",
                    "name": "font-smoothing-off",
                    "docName": "font-smoothing-off()",
                    "type": "mixin",
                    "description": "Restore font-smoothing to it's default value.\n",
                    "example": [
                        {
                            "type": "include",
                            "code": "font-smooth: initial;\n-webkit-font-smoothing: initial;\n-moz-osx-font-smoothing: initial;",
                            "description": "font-smoothing-off() // =>"
                        }
                    ],
                    "access": "public",
                    "path": "utils/typography.scss"
                }
            ]
        },
        {
            "name": "utils.units",
            "description": "",
            "variables": [],
            "items": [
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "strip-unit",
                    "docName": "strip-unit()",
                    "type": "function",
                    "description": "Strip the unit from a number\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "strip-unit(234.8) // => 234.8"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "to-number",
                    "docName": "to-number()",
                    "type": "function",
                    "description": "Convert a number-like string value to a proper number (that can be used for\narithmetic, etc.)\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "to-number('234.8') // => 234.8"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-number",
                    "docName": "is-number()",
                    "type": "function",
                    "description": "Return true if the provided value is a number\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-number(4) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-rems",
                    "docName": "is-rems()",
                    "type": "function",
                    "description": "Return true if the provided value is in rem units\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-rems(3rem) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-px",
                    "docName": "is-px()",
                    "type": "function",
                    "description": "Return true if the provided value is in px units\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-px(10px) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-time",
                    "docName": "is-time()",
                    "type": "function",
                    "description": "Return true if the provided value is a css duration / time\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-time(5000ms) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-angle",
                    "docName": "is-angle()",
                    "type": "function",
                    "description": "Return true if the provided value is a css angle\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-angle(45deg) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-integer",
                    "docName": "is-integer()",
                    "type": "function",
                    "description": "Return true if the provided value is an integer\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-integer(456) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-relative-length",
                    "docName": "is-relative-length()",
                    "type": "function",
                    "description": "Return true if the provided value is a relative length value (if you don't\nknow about vmin/vmax then look them up because they are cool).\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-relative-length(20vmin) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-absolute-length",
                    "docName": "is-absolute-length()",
                    "type": "function",
                    "description": "Return true if the provided value is an absolute length value\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-absolute-length(10cm) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-percentage",
                    "docName": "is-percentage()",
                    "type": "function",
                    "description": "Return true if the provided value is an absolute length value\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-percentage(100%) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-length",
                    "docName": "is-length()",
                    "type": "function",
                    "description": "Return true if the provided value is a length\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-length(100%) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-string",
                    "docName": "is-string()",
                    "type": "function",
                    "description": "Return true if the provided value is a string\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-string('Hello, world') // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-map",
                    "docName": "is-map()",
                    "type": "function",
                    "description": "Return true if the provided value is a map\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-map((red: #f00, blue: #00f)) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-list",
                    "docName": "is-list()",
                    "type": "function",
                    "description": "Return true if the provided value is a string\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-list((1 2 3)) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "is-color",
                    "docName": "is-color()",
                    "type": "function",
                    "description": "Return true if the provided value is a color\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-color(blue) // => true"
                        },
                        {
                            "type": "scss",
                            "code": "is-color(#444) // => true"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "if-null",
                    "docName": "if-null()",
                    "type": "function",
                    "description": "Provide an alternate value when $value is null\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-null(10, 20) // => 10"
                        },
                        {
                            "type": "scss",
                            "code": "if-null(null, 20) // => 20"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        },
                        {
                            "type": "*",
                            "name": "fallback"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "if-string",
                    "docName": "if-string()",
                    "type": "function",
                    "description": "Choose a value based on whether another value is a string or not\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-string(10, 'hello', 20) // => 20"
                        },
                        {
                            "type": "scss",
                            "code": "if-string('tree', 'hello', 20) // => 'hello'"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        },
                        {
                            "type": "*",
                            "name": "trueval"
                        },
                        {
                            "type": "*",
                            "name": "falseval"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "if-number",
                    "docName": "if-number()",
                    "type": "function",
                    "description": "Choose a value based on whether another value is a string or not\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-number(10, 'hello', 20) // => \"hello\""
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        },
                        {
                            "type": "*",
                            "name": "trueval"
                        },
                        {
                            "type": "*",
                            "name": "falseval"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "if-list",
                    "docName": "if-list()",
                    "type": "function",
                    "description": "Choose a value based on whether another value is a string or not\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-list(10, 'hello', 20) // => 20"
                        },
                        {
                            "type": "if",
                            "code": "",
                            "description": "list((10, 20), 'hello', 20) // => 'hello'"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        },
                        {
                            "type": "*",
                            "name": "trueval"
                        },
                        {
                            "type": "*",
                            "name": "falseval"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "if-map",
                    "docName": "if-map()",
                    "type": "function",
                    "description": "Choose a value based on whether another value is a string or not\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-map((10, 20), 'hello', 20) // => 20"
                        },
                        {
                            "type": "scss",
                            "code": "if-map((color: red), 'hello', 20) // => 'hello'"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        },
                        {
                            "type": "*",
                            "name": "trueval"
                        },
                        {
                            "type": "*",
                            "name": "falseval"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "if-color",
                    "docName": "if-color()",
                    "type": "function",
                    "description": "Choose a value based on whether another value is a color or not\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-color(pink, #fefe, 'not a color') // => #fefe"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        },
                        {
                            "type": "*",
                            "name": "trueval"
                        },
                        {
                            "type": "*",
                            "name": "falseval"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "if-type",
                    "docName": "if-type()",
                    "type": "function",
                    "description": "Choose a value based on the type of another value by provide a mapping between type and values\n\n",
                    "example": [
                        {
                            "type": "if",
                            "code": "",
                            "description": "type(10, (color: blue), 'fallback') // => 'fallback"
                        },
                        {
                            "type": "scss",
                            "code": ""
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        },
                        {
                            "type": "*",
                            "name": "value-map"
                        },
                        {
                            "type": "*",
                            "name": "fallback",
                            "default": "null"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "get-fourpart",
                    "docName": "get-fourpart()",
                    "type": "function",
                    "description": "Convert any valid four-part value (like those used for margin or padding) into a map with\nthe correct values for top, right, bottom, left)\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart('2px') => (top: 2px, right: 2px, bottom: 2px, left: 2px)"
                        },
                        {
                            "type": "scss",
                            "code": "get-fourpart('2px 4px') => (top: 2px, right: 4px, bottom: 2px, left: 4px)"
                        },
                        {
                            "type": "scss",
                            "code": "get-fourpart('2px 4px 8px') => (top: 2px, right: 4px, bottom: 8px, left: 4px)"
                        },
                        {
                            "type": "get",
                            "code": "",
                            "description": "fourpart('2px 4px 8px 16px') => (top: 2px, right: 4px, bottom: 8px, left: 16px)"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "get-fourpart-left",
                    "docName": "get-fourpart-left()",
                    "type": "function",
                    "description": "Convenience function to just retrieve the left value from get-fourpart\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-left(10px) // => 10px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "get-fourpart-top",
                    "docName": "get-fourpart-top()",
                    "type": "function",
                    "description": "Convenience function to just retrieve the top value from get-fourpart\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-top(10px) // => 10px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "get-fourpart-bottom",
                    "docName": "get-fourpart-bottom()",
                    "type": "function",
                    "description": "Convenience function to just retrieve the bottom value from get-fourpart\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-bottom(10px) // => 10px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "get-fourpart-right",
                    "docName": "get-fourpart-right()",
                    "type": "function",
                    "description": "Convenience function to just retrieve the right value from get-fourpart\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-right(10px) // => 10px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "value"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "get-border-width",
                    "docName": "get-border-width()",
                    "type": "function",
                    "description": "Extract the width from a shorthand border css value\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-width(2px solid red) // => 2px"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "input"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "get-border-style",
                    "docName": "get-border-style()",
                    "type": "function",
                    "description": "Extract the style from a shorthand border css value\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-style('2px solid red') // => solid"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "input"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "get-border-color",
                    "docName": "get-border-color()",
                    "type": "function",
                    "description": "Extract the style from a shorthand border css value\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-color('2px solid red') // => red"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "*",
                            "name": "input"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                },
                {
                    "namespace": "utils",
                    "group": "utils.units",
                    "name": "aspect-to-number",
                    "docName": "aspect-to-number()",
                    "type": "function",
                    "description": "Converts an aspect string (like '16:9') to a number (the equivalent of 16/9)\n\n",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$aspect: aspect-to-number('16:9') // => 1.77777778;"
                        },
                        {
                            "type": "scss",
                            "code": "$aspect: aspect-to-number(1.77778) // => 1.77778"
                        }
                    ],
                    "parameter": [
                        {
                            "type": "string | number",
                            "name": "The",
                            "description": "string representation of the aspect (should be two numbers\nseparated by a colon, e.g. '16:9'). Alternatively, if the input is a number then it will be\nreturned directly. This makes it possible to use the function as a safety where a number is\nexpected but a string could be used for convenience.\n"
                        }
                    ],
                    "access": "public",
                    "path": "utils/units.scss"
                }
            ]
        }
    ]
};