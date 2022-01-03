window.pxstyles = {
    "modules.reading": [
        {
            "namespace": "modules",
            "group": "modules.reading",
            "name": "reading",
            "docName": "reading()",
            "type": "mixin",
            "description": "Generates classes for \"readable\" content, e.g. standard HTML that should be\nformatted to be read, rather than structured as ui.",
            "access": "public",
            "path": "reading.scss"
        }
    ],
    "site.color": [
        {
            "namespace": "site",
            "group": "site.color",
            "name": "shade",
            "docName": "shade()",
            "type": "function",
            "description": "Produce a shade (a lighter or darker version) of a color based on the value\nof $shade and an optional darkest to lightest shade range.",
            "parameter": [
                {
                    "type": "*",
                    "name": "color",
                    "default": "null",
                    "description": "The color to be shaded. If not provided, it will be\ncalculated as the middle value within $shade-range.\n"
                },
                {
                    "type": "*",
                    "name": "shade",
                    "default": "0",
                    "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter.\n"
                },
                {
                    "type": "*",
                    "name": "shade-range",
                    "default": "(black,white)",
                    "description": "The range of colors will be produced\nas a list (darkest, lightest)."
                }
            ],
            "access": "public",
            "path": "color.scss"
        },
        {
            "namespace": "site",
            "group": "site.color",
            "name": "gray",
            "docName": "gray()",
            "type": "function",
            "description": "Get a standardized shade of site's base gray.",
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
                    "description": "The alpha value of the final color that will be returned."
                }
            ],
            "access": "public",
            "path": "color.scss"
        },
        {
            "namespace": "site",
            "group": "site.color",
            "name": "primary",
            "docName": "primary()",
            "type": "function",
            "description": "Get a standardized shade of the site's primary color",
            "parameter": [
                {
                    "type": "*",
                    "name": "shade",
                    "default": "0",
                    "description": "The shading to be applied, as a value between -10, 10 (can be overriden\nwith config(shade-steps)). 0 returns the color itself. Negative values make the color darker,\npostive values make it lighter.\n"
                },
                {
                    "type": "Number",
                    "name": "alpha",
                    "default": "1",
                    "description": "The alpha value of the color to be returned. If a value other than 1\nis provided, the ooutput will be in rgba format."
                }
            ],
            "access": "public",
            "path": "color.scss"
        },
        {
            "namespace": "site",
            "group": "site.color",
            "name": "clr",
            "docName": "clr()",
            "type": "function",
            "description": "Lookup a color by name and optionally get a shade of it",
            "example": [
                {
                    "type": "scss",
                    "code": "// Add the color to the global configuration\nconfig('colors:purple', #C578DD);\n\n// Retrieve the color\nclr(purple) => #C578DD\nclr(purple, -1) => (purple but 1 level darker)\nclr(purple, $alpha: 0.5) => (purple half alpha of 0.5)"
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
                    "type": "Number",
                    "name": "alpha",
                    "default": "1",
                    "description": "The alpha value of the color to be returned. If a value other than 1\nis provided, the ooutput will be in rgba format.\n"
                }
            ],
            "access": "public",
            "path": "color.scss"
        },
        {
            "namespace": "site",
            "group": "site.color",
            "name": "yiq",
            "docName": "yiq()",
            "type": "function",
            "description": "Computes the the luminance (grayscale value) of a color in the yiq color space",
            "access": "public",
            "path": "color.scss"
        },
        {
            "namespace": "site",
            "group": "site.color",
            "name": "contrast-color",
            "docName": "contrast-color()",
            "type": "function",
            "description": "Choose a contrasting foreground based on a background color",
            "access": "public",
            "path": "color.scss"
        }
    ],
    "site.config": [
        {
            "namespace": "site",
            "group": "site.config",
            "name": "get",
            "docName": "get()",
            "type": "function",
            "description": "Retrieve a configuration setting.",
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
                    "description": "The value to return if the path doesn't exist."
                }
            ],
            "access": "public",
            "path": "config.scss"
        },
        {
            "namespace": "site",
            "group": "site.config",
            "name": "config",
            "docName": "config()",
            "type": "mixin",
            "description": "Add a configuration setting.",
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
            "path": "config.scss"
        },
        {
            "namespace": "site",
            "group": "site.config",
            "name": "default",
            "docName": "default()",
            "type": "mixin",
            "description": "Add a default configuration setting (provides the same functionality as config, but will not\noverwrite an existing setting).",
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
            "path": "config.scss"
        }
    ],
    "site.controls": [
        {
            "namespace": "site",
            "group": "site.controls",
            "name": "button",
            "docName": "button()",
            "type": "mixin",
            "description": "Generates a button style based on the site's button settings. The default button is pretty\nopinionated. All sizing is in ems (so setting the font size will scale the button). See the\nsource for more details.",
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
                    "description": "CSS map. Just about any css is valid (currently transitions can't\nbe override) including supported state specific values: hover, active, disabled. If background\nor color are set, they will be adapted for other states unless also override for those states\n"
                }
            ],
            "access": "public",
            "path": "controls.scss"
        }
    ],
    "site.grid": [
        {
            "namespace": "site",
            "group": "site.grid",
            "name": "table-grid",
            "docName": "table-grid()",
            "type": "mixin",
            "description": "Create a CSS grid that mimics a table where columns are specified and rows are added as needed.",
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
                    "description": "The gap between items"
                }
            ],
            "access": "public",
            "path": "grids.scss"
        },
        {
            "namespace": "site",
            "group": "site.grid",
            "name": "item-grid",
            "docName": "item-grid()",
            "type": "mixin",
            "description": "Create a css grid with repeating item (min/max width) and fixed height that autoflows (wraps)\nand fills the entire row",
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
                    "description": "The gap between items"
                }
            ],
            "access": "public",
            "path": "grids.scss"
        }
    ],
    "site.mediaquery": [
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "get-breakpoint",
            "docName": "get-breakpoint()",
            "type": "function",
            "description": "Get a breakpoint by name. If an number value is provided, that number will\nbe returned.",
            "parameter": [
                {
                    "type": "String | Length",
                    "name": "break",
                    "description": "The name of the breakpoint or a number that\nwill be returned"
                }
            ],
            "access": "public",
            "path": "mediaquery.scss"
        },
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "media-until",
            "docName": "media-until()",
            "type": "mixin",
            "description": "Creates a media query that applies for all browser widths **smaller** than\nthe provided breakpoint.",
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
            "path": "mediaquery.scss"
        },
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "media-after",
            "docName": "media-after()",
            "type": "mixin",
            "description": "Creates a media query that applies for all browser widths **larger** than\nthe provided breakpoint.",
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
            "path": "mediaquery.scss"
        },
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "media-between",
            "docName": "media-between()",
            "type": "mixin",
            "description": "Creates a media query that applies for all browser widths between the two\nprovided breakpoints.",
            "example": [
                {
                    "type": "scss",
                    "code": "@include media-between(sm, md) { ... } // => @media screen and (min-width: 768px) and (max-width: 1024px) { ... }"
                }
            ],
            "parameter": [
                {
                    "type": "String | Length",
                    "name": "break-from",
                    "description": "The lower limit breakpoint for the\ngenerated media query. Use a string for a named site breakpoint or a length.\n"
                },
                {
                    "type": "String | Length",
                    "name": "break-to",
                    "description": "The upper limit breakpoint for the\ngenerated media query. Use a string for a named site breakpoint or a length.\n"
                }
            ],
            "access": "public",
            "path": "mediaquery.scss"
        },
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "media-until-height",
            "docName": "media-until-height()",
            "type": "mixin",
            "description": "Creates a media query that applies for all browser heights **smaller** than\nthe provided size.",
            "example": [
                {
                    "type": "scss",
                    "code": "media-until(sm) { ... } // => @media screen and (max-height: 768px) { ... }"
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
            "path": "mediaquery.scss"
        },
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "media-after-height",
            "docName": "media-after-height()",
            "type": "mixin",
            "description": "Creates a media query that applies for all browser heights **larger** than\nthe provided size.",
            "example": [
                {
                    "type": "scss",
                    "code": "media-until(sm) { ... } // => @media screen and (min-height: 768px) { ... }"
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
            "path": "mediaquery.scss"
        },
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "media-between-height",
            "docName": "media-between-height()",
            "type": "mixin",
            "description": "Creates a media query that applies for all browser heights between the two\nprovided sizes.",
            "example": [
                {
                    "type": "scss",
                    "code": "media-between(sm, md) { ... } // => @media screen and (min-height:\n768px) and (max-height: 1024px) { ... }"
                }
            ],
            "parameter": [
                {
                    "type": "Length",
                    "name": "size-from",
                    "description": "The lower limit size for the generated media\nquery.\n"
                },
                {
                    "type": "Length",
                    "name": "size-to",
                    "description": "The upper limit size for the generated media query.\n"
                }
            ],
            "access": "public",
            "path": "mediaquery.scss"
        },
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "media-until-mobile",
            "docName": "media-until-mobile()",
            "type": "mixin",
            "description": "A convenience mixin that is equivalent to media-until($mobile-breakpoint).",
            "access": "public",
            "path": "mediaquery.scss"
        },
        {
            "namespace": "site",
            "group": "site.mediaquery",
            "name": "breakpoints-asc",
            "docName": "breakpoints-asc()",
            "type": "function",
            "description": "Returns a sorted list of site breakpoints ($breakpoints) from smallest to largest",
            "access": "public",
            "path": "mediaquery.scss"
        }
    ],
    "site.misc": [
        {
            "namespace": "site",
            "group": "site.misc",
            "name": "focus",
            "docName": "focus()",
            "type": "mixin",
            "description": "Adds a site-specific focus selector use the value defined by `focus:selector`",
            "example": [
                {
                    "type": "scss",
                    "code": ".item { @include focus() {...} }  => .item:focus-visible {...}"
                }
            ],
            "access": "public",
            "path": "misc.scss"
        }
    ],
    "site.rems": [
        {
            "namespace": "site",
            "group": "site.rems",
            "name": "rems",
            "docName": "rems()",
            "type": "function",
            "description": "Convert px to rem for a given base font size (the font size of the document root element)",
            "access": "public",
            "path": "rems.scss"
        },
        {
            "namespace": "site",
            "group": "site.rems",
            "name": "px",
            "docName": "px()",
            "type": "function",
            "description": "Convert rem to px for a given base font size (the font size of the document root element)",
            "access": "public",
            "path": "rems.scss"
        }
    ],
    "site.shadows": [
        {
            "namespace": "site",
            "group": "site.shadows",
            "name": "depth-shadow",
            "docName": "depth-shadow()",
            "type": "function",
            "description": "Creates the syntax for a multi-level shadow",
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
            "path": "shadows.scss"
        },
        {
            "namespace": "site",
            "group": "site.shadows",
            "name": "shadow",
            "docName": "shadow()",
            "type": "function",
            "description": "Returns a standardized box shadow",
            "access": "public",
            "path": "shadows.scss"
        },
        {
            "namespace": "site",
            "group": "site.shadows",
            "name": "shadow",
            "docName": "shadow()",
            "type": "mixin",
            "description": "Create a standard box-shadow",
            "access": "public",
            "path": "shadows.scss"
        },
        {
            "namespace": "site",
            "group": "site.shadows",
            "name": "shadow-effect",
            "docName": "shadow-effect()",
            "type": "mixin",
            "description": "Create a standard drop-shadow as a css filter effect (creates\nnon-rectangular shadows on any content)",
            "access": "public",
            "path": "shadows.scss"
        }
    ],
    "site.transitions": [
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "transition",
            "docName": "transition()",
            "type": "function",
            "description": "Simplified syntax for transitioning multiple individual properties on\nan element, defaulting to standardized values for duration and easing.",
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
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-cubic",
            "docName": "$ease-in-cubic",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in cubic",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-cubic",
            "docName": "$ease-out-cubic",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in cubic",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-out-cubic",
            "docName": "$ease-in-out-cubic",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in cubic",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-circ",
            "docName": "$ease-in-circ",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in circ",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-circ",
            "docName": "$ease-out-circ",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease out circ",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-out-circ",
            "docName": "$ease-in-out-circ",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in-out circ",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-expo",
            "docName": "$ease-in-expo",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in expo",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-expo",
            "docName": "$ease-out-expo",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease out expo",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-out-expo",
            "docName": "$ease-in-out-expo",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in-out expo",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-quad",
            "docName": "$ease-in-quad",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in quad",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-quad",
            "docName": "$ease-out-quad",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease out quad",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-out-quad",
            "docName": "$ease-in-out-quad",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in-out quad",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-quart",
            "docName": "$ease-in-quart",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in quart",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-quart",
            "docName": "$ease-out-quart",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease out quart",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-out-quart",
            "docName": "$ease-in-out-quart",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in-out quart",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-quint",
            "docName": "$ease-in-quint",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in quint",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-quint",
            "docName": "$ease-out-quint",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease out quint",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-out-quint",
            "docName": "$ease-in-out-quint",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in-out quint",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-sine",
            "docName": "$ease-in-sine",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in sine",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-sine",
            "docName": "$ease-out-sine",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease out sine",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-out-sine",
            "docName": "$ease-in-out-sine",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in-out sine",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-back",
            "docName": "$ease-in-back",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in back",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-back",
            "docName": "$ease-out-back",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease out back",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-in-out-back",
            "docName": "$ease-in-out-back",
            "type": "variable",
            "description": "Cubic-bezier for Penner ease in-out back",
            "access": "public",
            "path": "transitions.scss"
        },
        {
            "namespace": "site",
            "group": "site.transitions",
            "name": "ease-out-smallbounce",
            "docName": "$ease-out-smallbounce",
            "type": "variable",
            "description": "Cubic-bezier for custopm ease with a small bounce",
            "access": "public",
            "path": "transitions.scss"
        }
    ],
    "site.typography": [
        {
            "namespace": "site",
            "group": "site.typography",
            "name": "fs",
            "docName": "fs()",
            "type": "function",
            "description": "Get a font-size by name from the default typescale",
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
            "path": "typography.scss"
        },
        {
            "namespace": "site",
            "group": "site.typography",
            "name": "type-style",
            "docName": "type-style()",
            "type": "mixin",
            "description": "Generate type style based on a site base style (as defined in type-bases)",
            "access": "public",
            "path": "typography.scss"
        }
    ],
    "utils.atoms": [
        {
            "namespace": "utils",
            "group": "utils.atoms",
            "name": "atoms-flex",
            "docName": "atoms-flex()",
            "type": "mixin",
            "description": "Generate flex-box atoms.",
            "parameter": [
                {
                    "type": "*",
                    "name": "prefix",
                    "default": "''",
                    "description": "A prefix that can be applied to each of the classes\ngenerated by the mixin."
                }
            ],
            "access": "public",
            "path": "atoms.scss"
        }
    ],
    "utils.collections": [
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "map-get-default",
            "docName": "map-get-default()",
            "type": "function",
            "description": "Get a value from a map if the key exists, otherwise return a fallback",
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
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "map-deep-get",
            "docName": "map-deep-get()",
            "type": "function",
            "description": "Deep lookup for map values, each parameter represents the next level lookup",
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
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "nth-or-val",
            "docName": "nth-or-val()",
            "type": "function",
            "description": "If $list-or-val is a list, return the nth value; if the item is a value\nreturn the value; if the value is null return the default",
            "example": [
                {
                    "type": "scss",
                    "code": "nth-or-val((a, b, c), 1, d) => 1"
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
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "list-remove",
            "docName": "list-remove()",
            "type": "function",
            "description": "Return a copy of a list with the nth value removed",
            "access": "public",
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "list-replace",
            "docName": "list-replace()",
            "type": "function",
            "description": "Performas a find and replace of items within a list",
            "parameter": [
                {
                    "type": "list",
                    "name": "list",
                    "description": "The list on which the replacement will be performed"
                },
                {
                    "type": "map",
                    "name": "replacements",
                    "description": "A map of the search/replacent values, e.g. (searchForThis: newKey)\n"
                }
            ],
            "access": "public",
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "list-contains",
            "docName": "list-contains()",
            "type": "function",
            "description": "Returns true if the list contains a value, otherwise false",
            "access": "public",
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "list-sort-num",
            "docName": "list-sort-num()",
            "type": "function",
            "description": "Return a copy of a list sorted numerically",
            "access": "public",
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "list-sort",
            "docName": "list-sort()",
            "type": "function",
            "description": "Return a copy of a list sorted alphabetically",
            "access": "public",
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "map-sort-by-values",
            "docName": "map-sort-by-values()",
            "type": "function",
            "description": "Return a copy of a map sorted by the value of each entry",
            "access": "public",
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "list-map",
            "docName": "list-map()",
            "type": "function",
            "description": "Creates a new list with the results of calling a function once for every\nitem in this list. Equivalent to Array.map in JavaScript.",
            "example": [
                {
                    "type": "scss",
                    "code": "@function square($x, $i) { @return $x * $x }\nlist-map(1 2 3 4, square); // => 1 4 9 16"
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
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "list-filter",
            "docName": "list-filter()",
            "type": "function",
            "description": "Creates a new list with all items that pass the test implemented by the\nprovided function. Similar to Array.filter in JavaScript.",
            "example": [
                {
                    "type": "scss",
                    "code": "@function aboveTen($x) { @return x > 10 }\nlist-filter(2 20 30 3 4 100, aboveTen); // => (20 30 100)"
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
            "path": "collections.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.collections",
            "name": "map-collect",
            "docName": "map-collect()",
            "type": "function",
            "description": "Merge multiple maps into a single map",
            "parameter": [
                {
                    "type": "*",
                    "name": "maps...",
                    "description": "One or more maps that should be merged into a single map."
                }
            ],
            "access": "public",
            "path": "collections.scss"
        }
    ],
    "utils.flatmap": [
        {
            "namespace": "utils",
            "group": "utils.flatmap",
            "name": "flat-get",
            "docName": "flat-get()",
            "type": "function",
            "description": "A function that retrieves a \"deep\" value from a map using path syntax where key names are\nseparated by colons",
            "example": [
                {
                    "type": "scss",
                    "code": "$color: flat-get((colors: (red: #F00)), 'colors:red')\n==> #F00"
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
            "path": "flatmap.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.flatmap",
            "name": "flat-set",
            "docName": "flat-set()",
            "type": "function",
            "description": "A function that allows you to set a \"deep\" value in a map using path syntax where key names are\nseparated by colons",
            "example": [
                {
                    "type": "scss",
                    "code": "$map: flat-set((), 'colors:red', #F00) // ==> (colors: (red: #F00))"
                },
                {
                    "type": "scss",
                    "code": "$map: flat-set((colors: (red: #F00)), 'colors:blue', #00F) // ==> {colors: {red: #F00, blue: #00F}}"
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
            "path": "flatmap.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.flatmap",
            "name": "flat-default",
            "docName": "flat-default()",
            "type": "function",
            "description": "Same as flat-set, but will not overwrite a value if it already exists",
            "access": "public",
            "path": "flatmap.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.flatmap",
            "name": "flatten-map",
            "docName": "flatten-map()",
            "type": "function",
            "description": "A function that flattens a map to it's \"flat\" equivalent where every key is replaced with a deep path\n(see examples) into the original map.",
            "example": [
                {
                    "type": "scss",
                    "code": "flatten-map((colors: (red: #f00, blue: #00f)))\n==> (\"colors:red\": #f00, \"colors:blue\": #00f)"
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
            "path": "flatmap.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.flatmap",
            "name": "unflatten-map",
            "docName": "unflatten-map()",
            "type": "function",
            "description": "A function that restores a \"flat\" map (like one produced by the flatten-map function) to a\nnormal deep map.",
            "example": [
                {
                    "type": "scss",
                    "code": "unflatten-map((\"colors:red\": #f00, \"colors:blue\": #00f))\n==> (colors: (red: #f00, blue: #00f))"
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
            "path": "flatmap.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.flatmap",
            "name": "flat-merge",
            "docName": "flat-merge()",
            "type": "function",
            "description": "A function which will flatten and then merge two maps. This is not the same as a deep merge\nbecause it allows for keys in one (or both) of the maps to be complete paths. If there are\nconflicts, last in list wins.",
            "example": [
                {
                    "type": "scss",
                    "code": "flatten-map-merge((colors: (red: #f00)), ('colors:blue': #00f))\n    -> (colors: (red: #f00, blue: #00f))"
                },
                {
                    "type": "scss",
                    "code": "flat-merge(('clr:main': blue),('clr:main': red));\n    -> (clr: (main: red))"
                }
            ],
            "access": "public",
            "path": "flatmap.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.flatmap",
            "name": "flat-has-key",
            "docName": "flat-has-key()",
            "type": "function",
            "description": "Returns true if the provided map, once flattened, contains the deep path $key;",
            "example": [
                {
                    "type": "scss",
                    "code": "flat-has-key((colors: (red: #f00, blue: #00f)), 'colors:blue') => true"
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
            "path": "flatmap.scss"
        }
    ],
    "utils.json": [
        {
            "namespace": "utils",
            "group": "utils.json",
            "name": "encode",
            "docName": "encode()",
            "type": "function",
            "description": "Encode any Sass value as a JSON-ready string.",
            "parameter": [
                {
                    "type": "*",
                    "name": "value",
                    "description": "Data to be encoded for JSON exporting"
                }
            ],
            "access": "public",
            "path": "json.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.json",
            "name": "encode-list",
            "docName": "encode-list()",
            "type": "function",
            "description": "Encode each item in a Sass list, and convert to a JSON-ready\nsquare-bracketed list.",
            "parameter": [
                {
                    "type": "list",
                    "name": "list",
                    "description": "List to be encoded for JSON exporting"
                }
            ],
            "access": "public",
            "path": "json.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.json",
            "name": "encode-map",
            "docName": "encode-map()",
            "type": "function",
            "description": "Encode each key/value in a Sass map, and convert to a JSON-ready object.",
            "parameter": [
                {
                    "type": "map",
                    "name": "map",
                    "description": "Map to be encoded for JSON exporting"
                }
            ],
            "access": "public",
            "path": "json.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.json",
            "name": "encode-number",
            "docName": "encode-number()",
            "type": "function",
            "description": "Encode a number for JSON, adding proof-quotes for length values.",
            "parameter": [
                {
                    "type": "number",
                    "name": "number",
                    "description": "Number to be encoded for JSON exporting"
                }
            ],
            "access": "public",
            "path": "json.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.json",
            "name": "quotes",
            "docName": "quotes()",
            "type": "function",
            "description": "Convert any value to a double-quoted string.",
            "parameter": [
                {
                    "type": "*",
                    "name": "value",
                    "description": "The value to inspect and quote."
                }
            ],
            "access": "private",
            "path": "json.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.json",
            "name": "escape-quotes",
            "docName": "escape-quotes()",
            "type": "function",
            "description": "Return a string, with internal quotes escaped.",
            "parameter": [
                {
                    "type": "string",
                    "name": "string",
                    "description": "The string to be manipulated"
                }
            ],
            "access": "private",
            "path": "json.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.json",
            "name": "escape-backslashes",
            "docName": "escape-backslashes()",
            "type": "function",
            "description": "Return a string, with internal backslashes escaped.",
            "parameter": [
                {
                    "type": "string",
                    "name": "string",
                    "description": "The string to be manipulated"
                }
            ],
            "access": "private",
            "path": "json.scss"
        }
    ],
    "utils.math": [
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "pow",
            "docName": "pow()",
            "type": "function",
            "description": "Calculate a number raised to the power of the provided exponent.",
            "parameter": [
                {
                    "type": "*",
                    "name": "base",
                    "description": "The base number"
                },
                {
                    "type": "*",
                    "name": "exp",
                    "description": "The exponent used to raise the base"
                }
            ],
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-d",
            "docName": "round-d()",
            "type": "function",
            "description": "Round a number using the specified number of decimals.",
            "parameter": [
                {
                    "type": "number",
                    "name": "n",
                    "description": "The number to be rounded"
                },
                {
                    "type": "number",
                    "name": "dec",
                    "default": "2",
                    "description": "The number of decimals in the output"
                }
            ],
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-f",
            "docName": "round-f()",
            "type": "function",
            "description": "Round a number with the specified fraction (e.g. 4 will produce 1.0, 1.25, 1.5, etc.)",
            "parameter": [
                {
                    "type": "number",
                    "name": "n",
                    "description": "The number to be rounded"
                },
                {
                    "type": "number",
                    "name": "frac",
                    "default": "8",
                    "description": "The denominator of the fractional portion of the result"
                }
            ],
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-2",
            "docName": "round-2()",
            "type": "function",
            "description": "A shortcute for round-f($n, 2)",
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-3",
            "docName": "round-3()",
            "type": "function",
            "description": "A shortcute for round-f($n, 3)",
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-4",
            "docName": "round-4()",
            "type": "function",
            "description": "A shortcute for round-f($n, 4)",
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-5",
            "docName": "round-5()",
            "type": "function",
            "description": "A shortcute for round-f($n, 5)",
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-8",
            "docName": "round-8()",
            "type": "function",
            "description": "A shortcute for round-f($n, 8)",
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-10",
            "docName": "round-10()",
            "type": "function",
            "description": "A shortcute for round-f($n, 10)",
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "round-20",
            "docName": "round-20()",
            "type": "function",
            "description": "A shortcute for round-f($n, 20)",
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "intp",
            "docName": "intp()",
            "type": "function",
            "description": "Interpolate between two values.",
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
                    "description": "The progress between the two values, provided as a\nvalue between 0 and 1.\n"
                },
                {
                    "type": "number",
                    "name": "range",
                    "description": "The range of interpolation. This can be provided as a\nsingle value which represents the upper range from 0 or as two values which\nrepresent the lower and upper range.\n"
                }
            ],
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "ease",
            "docName": "ease()",
            "type": "function",
            "description": "Interpolate a value between 0 and 1 using the easing function with the given name",
            "parameter": [
                {
                    "type": "Number",
                    "name": "t",
                    "description": "The input value between 0 and 1"
                },
                {
                    "type": "String",
                    "name": "easing",
                    "description": "The name of the easing function that should be used for interpolation"
                }
            ],
            "return": {
                "type": "Number",
                "description": "The eased equivalent of the input (also between 0 and 1)."
            },
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "ease-in-quad",
            "docName": "ease-in-quad()",
            "type": "function",
            "description": "Interpolate a value between 0 and 1 using the Penner ease-in quad function.",
            "parameter": [
                {
                    "type": "Number",
                    "name": "t",
                    "description": "The input value between 0 and 1"
                }
            ],
            "return": {
                "type": "Number",
                "description": "The eased equivalent of the input (also between 0 and 1)."
            },
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "ease-out-quad",
            "docName": "ease-out-quad()",
            "type": "function",
            "description": "Interpolate a value between 0 and 1 using the Penner ease-out quad function.",
            "parameter": [
                {
                    "type": "Number",
                    "name": "t",
                    "description": "The input value between 0 and 1"
                }
            ],
            "return": {
                "type": "Number",
                "description": "The eased equivalent of the input (also between 0 and 1)."
            },
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "ease-in-cubic",
            "docName": "ease-in-cubic()",
            "type": "function",
            "description": "Interpolate a value between 0 and 1 using the Penner ease-in cubic function.",
            "parameter": [
                {
                    "type": "Number",
                    "name": "t",
                    "description": "The input value between 0 and 1"
                }
            ],
            "return": {
                "type": "Number",
                "description": "The eased equivalent of the input (also between 0 and 1)."
            },
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "ease-out-cubic",
            "docName": "ease-out-cubic()",
            "type": "function",
            "description": "Interpolate a value between 0 and 1 using the Penner ease-out cubic function.",
            "parameter": [
                {
                    "type": "Number",
                    "name": "t",
                    "description": "The input value between 0 and 1"
                }
            ],
            "return": {
                "type": "Number",
                "description": "The eased equivalent of the input (also between 0 and 1)."
            },
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "ease-in-quart",
            "docName": "ease-in-quart()",
            "type": "function",
            "description": "Interpolate a value between 0 and 1 using the Penner ease-in quart function.",
            "parameter": [
                {
                    "type": "Number",
                    "name": "t",
                    "description": "The input value between 0 and 1"
                }
            ],
            "return": {
                "type": "Number",
                "description": "The eased equivalent of the input (also between 0 and 1)."
            },
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "ease-out-quart",
            "docName": "ease-out-quart()",
            "type": "function",
            "description": "Interpolate a value between 0 and 1 using the Penner ease-out quart function.",
            "parameter": [
                {
                    "type": "Number",
                    "name": "t",
                    "description": "The input value between 0 and 1"
                }
            ],
            "return": {
                "type": "Number",
                "description": "The eased equivalent of the input (also between 0 and 1)."
            },
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "clamp-number",
            "docName": "clamp-number()",
            "type": "function",
            "description": "Clamp a number (keep it within the confines of min/max). Note: the weird\nname is to differentiate from the clamp() css function.",
            "parameter": [
                {
                    "type": "*",
                    "name": "number",
                    "description": "The number to be clampled"
                },
                {
                    "type": "*",
                    "name": "min",
                    "description": "Min allowed value"
                },
                {
                    "type": "*",
                    "name": "max",
                    "description": "Max allowed value"
                }
            ],
            "access": "public",
            "path": "math.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.math",
            "name": "divide",
            "docName": "divide()",
            "type": "function",
            "description": "Provides a wrapper for the standard sass divide function (math.div) to make imports a little\nsimpler. Returns the result of dividing $num1 by $num2.",
            "parameter": [
                {
                    "type": "*",
                    "name": "num1",
                    "description": "The first number in the division operation (the numerator)"
                },
                {
                    "type": "*",
                    "name": "num2",
                    "description": "The first number in the division operation (the numerator)"
                }
            ],
            "access": "public",
            "path": "math.scss"
        }
    ],
    "utils.misc": [
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "control-reset",
            "docName": "control-reset()",
            "type": "mixin",
            "description": "Completely resets the appearance of controls (input and button)",
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "placeholder",
            "docName": "placeholder()",
            "type": "mixin",
            "description": "Style the placeholder text for an text input element",
            "example": [
                {
                    "type": "scss",
                    "code": "input {\n    @include placeholder {\n        /* styles for placeholder here */\n    }\n}"
                }
            ],
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "no-select",
            "docName": "no-select()",
            "type": "mixin",
            "description": "Disable text selection on an element",
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "line-clamp",
            "docName": "line-clamp()",
            "type": "mixin",
            "description": "Use the (now broadly supported) line-clamp property to restrict the\nnumber of lines that are shown in a text element.",
            "parameter": [
                {
                    "type": "number",
                    "name": "lines",
                    "description": "The maximum number of lines to be shown"
                }
            ],
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "before",
            "docName": "before()",
            "type": "mixin",
            "description": "Shortcut for the ::before pseudo element with common defaults for content\nand display.",
            "parameter": [
                {
                    "type": "*",
                    "name": "content",
                    "default": "''",
                    "description": "The value for the content property."
                },
                {
                    "type": "*",
                    "name": "display",
                    "default": "block",
                    "description": "The value for the display property."
                }
            ],
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "after",
            "docName": "after()",
            "type": "mixin",
            "description": "Shortcut for the ::after pseudo element with common defaults for content\nand display.",
            "parameter": [
                {
                    "type": "*",
                    "name": "content",
                    "default": "''",
                    "description": "The value for the content property."
                },
                {
                    "type": "*",
                    "name": "display",
                    "default": "block",
                    "description": "The value for the display property."
                }
            ],
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "triangle",
            "docName": "triangle()",
            "type": "mixin",
            "description": "Create a triangle element using the border properties",
            "example": [
                {
                    "type": "scss",
                    "code": "TODO"
                }
            ],
            "parameter": [
                {
                    "type": "string",
                    "name": "direction",
                    "description": "The direction the arrow is pointing (up, down, left, right, etc.)"
                },
                {
                    "type": "color",
                    "name": "color",
                    "description": "The fill color for the arrow"
                },
                {
                    "type": "length",
                    "name": "height",
                    "description": "The height of the arrow"
                },
                {
                    "type": "length",
                    "name": "width",
                    "description": "The width of the arrow\n"
                }
            ],
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "map-key-replace",
            "docName": "map-key-replace()",
            "type": "function",
            "description": "Finds and replaces keys in a map",
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "css-map",
            "docName": "css-map()",
            "type": "mixin",
            "description": "Generates css from a map of properties and values. Properties can be remapped with aliases or\nignored with a start pattern.",
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
                    "description": "Properties that start with this will be ignored"
                }
            ],
            "access": "public",
            "path": "misc.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.misc",
            "name": "debug-zebra",
            "docName": "debug-zebra()",
            "type": "mixin",
            "description": "Generates a loud striped background gradient that can be used when debugging (especially helpful for scrolling)",
            "parameter": [
                {
                    "type": "*",
                    "name": "color1",
                    "default": "yellowgreen",
                    "description": "The first color in the gradient"
                },
                {
                    "type": "*",
                    "name": "color2",
                    "default": "gold",
                    "description": "The second color in the gradient"
                }
            ],
            "access": "public",
            "path": "misc.scss"
        }
    ],
    "utils.sanitize": [
        {
            "namespace": "utils",
            "group": "utils.sanitize",
            "name": "sanitize",
            "docName": "sanitize()",
            "type": "mixin",
            "description": "Outputs a modified version of [sanitize.css](https://csstools.github.io/sanitize.css/).",
            "access": "public",
            "path": "sanitize.scss"
        }
    ],
    "utils.strings": [
        {
            "namespace": "utils",
            "group": "utils.strings",
            "name": "str-replace",
            "docName": "str-replace()",
            "type": "function",
            "description": "Replace all instances of a string within another string",
            "example": [
                {
                    "type": "scss",
                    "code": "str-replace('test test test', 'test', 'pass') // => 'pass pass pass'"
                }
            ],
            "access": "public",
            "path": "strings.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.strings",
            "name": "url-encode",
            "docName": "url-encode()",
            "type": "function",
            "description": "Url encode a string (used primarily for encoding inline svg)",
            "access": "public",
            "path": "strings.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.strings",
            "name": "inline-svg",
            "docName": "inline-svg()",
            "type": "function",
            "description": "Encode an svg string for use as an inline svg (like a background image).",
            "example": [
                {
                    "type": "scss",
                    "code": "background-image: inline-svg('<svg>...</svg>'); // => background-image: url('data:image/svg+xml, ... ');"
                }
            ],
            "access": "public",
            "path": "strings.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.strings",
            "name": "list-join",
            "docName": "list-join()",
            "type": "function",
            "description": "Creates and returns a new string by concatenating all of the elements in a\nlist separated by $separator. Similiar to Javascript Array.join JavaScript",
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
            "path": "strings.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.strings",
            "name": "starts-with",
            "docName": "starts-with()",
            "type": "function",
            "description": "Returns true if a string begins withs another string. Returns false if $str is null or 0 length.",
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
            "path": "strings.scss"
        }
    ],
    "utils.typography": [
        {
            "namespace": "utils",
            "group": "utils.typography",
            "name": "google-font-subsets",
            "docName": "$google-font-subsets",
            "type": "variable",
            "description": "The font subset to loaded. Note that the latin subset is always included if\navailable and need not be specified. Also, if a client browser supports\nsupports unicode-range then this subset parameter is igored and the browser\nwill select from the subsets supported by the font to get what it needs to\nrender the text.",
            "access": "public",
            "path": "googlefont.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.typography",
            "name": "google-font",
            "docName": "google-font()",
            "type": "mixin",
            "description": "Mixin for loading google fonts.",
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
            "path": "googlefont.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.typography",
            "name": "typescale-ratios",
            "docName": "$typescale-ratios",
            "type": "variable",
            "description": "Some predefined ratios that could be helpful when generating modular type\nscales.",
            "access": "public",
            "path": "typography.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.typography",
            "name": "modular-size",
            "docName": "modular-size()",
            "type": "function",
            "description": "Generate a modular type size",
            "parameter": [
                {
                    "type": "Number",
                    "name": "base",
                    "description": "The base size used to generate the type scale (always\nexpressed in px).\n"
                },
                {
                    "type": "Number",
                    "name": "ratio",
                    "description": "The ratio to use for generating the modular type\nscale (e.g. 1.25 or 4/3)\n"
                },
                {
                    "type": "Number",
                    "name": "step",
                    "description": "The number of steps away from the base (pos/neg)\n"
                }
            ],
            "return": {
                "type": "Number",
                "description": "A single value (in px or rem) that represents a font-size\nfor the given parameters\n"
            },
            "access": "public",
            "path": "typography.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.typography",
            "name": "modular-scale",
            "docName": "modular-scale()",
            "type": "function",
            "description": "Generate a complete modular type scale, expressed as a map of type names and\nfont sizes",
            "example": [
                {
                    "type": "scss",
                    "code": "$typescale: modular-scale(16px, 4/3, sm base lg);"
                }
            ],
            "parameter": [
                {
                    "type": "Number | List",
                    "name": "bases",
                    "description": "The base size or sizes used to generate the\ntypescale\n"
                },
                {
                    "type": "Number",
                    "name": "ratio",
                    "description": "The ratio used to generate the typescale\n"
                },
                {
                    "type": "List",
                    "name": "names",
                    "description": "The names for the generated sizes (these will be the\nkeys in the map that gets returned)\n"
                },
                {
                    "type": "Bool",
                    "name": "rems",
                    "default": "true",
                    "description": "Whether or not to convert to rems. Note that rems\nwill be based on the first (or only) value in $bases\n"
                },
                {
                    "type": "Number",
                    "name": "round",
                    "default": "4",
                    "description": "The fractional rounding amount (e.g. value of 4\nmeans 1/4 so round to 0.25, 0.50, etc.)\n"
                }
            ],
            "return": {
                "type": "Map",
                "description": "A map of named type sizes, e.g. `(small: 0.75rem, -base: 1rem,\nlarge: 1.33rem)`\n"
            },
            "access": "public",
            "path": "typography.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.typography",
            "name": "font-face",
            "docName": "font-face()",
            "type": "mixin",
            "description": "Simplified syntax for generating a font-face at-rule for loading custom\nfonts.",
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
            "path": "typography.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.typography",
            "name": "font-smoothing-on",
            "docName": "font-smoothing-on()",
            "type": "mixin",
            "description": "Turn font smoothing on (makes type appear thinner and lighter on Mac and more closely\nresembles type rendering on Windows)",
            "access": "public",
            "path": "typography.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.typography",
            "name": "font-smoothing-off",
            "docName": "font-smoothing-off()",
            "type": "mixin",
            "description": "Restore font-smoothing to it's default value.",
            "access": "public",
            "path": "typography.scss"
        }
    ],
    "utils.units": [
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "strip-unit",
            "docName": "strip-unit()",
            "type": "function",
            "description": "Strip the unit from a number",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "to-number",
            "docName": "to-number()",
            "type": "function",
            "description": "Convert a number-like string value to a proper number (that can be used for\narithmetic, etc.)",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-number",
            "docName": "is-number()",
            "type": "function",
            "description": "Return true if the provided value is a number",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-rems",
            "docName": "is-rems()",
            "type": "function",
            "description": "Return true if the provided value is in rem units",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-px",
            "docName": "is-px()",
            "type": "function",
            "description": "Return true if the provided value is in px units",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-time",
            "docName": "is-time()",
            "type": "function",
            "description": "Return true if the provided value is a css duration / time",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-angle",
            "docName": "is-angle()",
            "type": "function",
            "description": "Return true if the provided value is a css angle",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-integer",
            "docName": "is-integer()",
            "type": "function",
            "description": "Return true if the provided value is an integer",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-relative-length",
            "docName": "is-relative-length()",
            "type": "function",
            "description": "Return true if the provided value is a relative length value (if you don't\nknow about vmin/vmax then look them up because they are cool).",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-absolute-length",
            "docName": "is-absolute-length()",
            "type": "function",
            "description": "Return true if the provided value is an absolute length value",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-percentage",
            "docName": "is-percentage()",
            "type": "function",
            "description": "Return true if the provided value is an absolute length value",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-length",
            "docName": "is-length()",
            "type": "function",
            "description": "Return true if the provided value is a length",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-string",
            "docName": "is-string()",
            "type": "function",
            "description": "Return true if the provided value is a string",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-map",
            "docName": "is-map()",
            "type": "function",
            "description": "Return true if the provided value is a string",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-list",
            "docName": "is-list()",
            "type": "function",
            "description": "Return true if the provided value is a string",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "is-color",
            "docName": "is-color()",
            "type": "function",
            "description": "Return true if the provided value is a color",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "if-null",
            "docName": "if-null()",
            "type": "function",
            "description": "Provide an alternate value when $value is null",
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
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "if-string",
            "docName": "if-string()",
            "type": "function",
            "description": "Choose a value based on whether another value is a string or not",
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
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "if-number",
            "docName": "if-number()",
            "type": "function",
            "description": "Choose a value based on whether another value is a string or not",
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
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "if-list",
            "docName": "if-list()",
            "type": "function",
            "description": "Choose a value based on whether another value is a string or not",
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
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "if-map",
            "docName": "if-map()",
            "type": "function",
            "description": "Choose a value based on whether another value is a string or not",
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
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "if-color",
            "docName": "if-color()",
            "type": "function",
            "description": "Choose a value based on whether another value is a color or not",
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
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "if-type",
            "docName": "if-type()",
            "type": "function",
            "description": "Choose a value based on the type of another value by provide a mapping between type and values",
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
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "get-fourpart",
            "docName": "get-fourpart()",
            "type": "function",
            "description": "Convert any valid four-part value (like those used for margin or padding) into a map with\nthe correct values for top, right, bottom, left)",
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
                    "type": "scss",
                    "code": "get-fourpart('2px 4px 8px 16px') => (top: 2px, right: 4px, bottom: 8px, left: 16px)"
                }
            ],
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "get-fourpart-left",
            "docName": "get-fourpart-left()",
            "type": "function",
            "description": "Convenience function to just retrieve the left value from get-fourpart",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "get-fourpart-top",
            "docName": "get-fourpart-top()",
            "type": "function",
            "description": "Convenience function to just retrieve the top value from get-fourpart",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "get-fourpart-bottom",
            "docName": "get-fourpart-bottom()",
            "type": "function",
            "description": "Convenience function to just retrieve the bottom value from get-fourpart",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "get-fourpart-right",
            "docName": "get-fourpart-right()",
            "type": "function",
            "description": "Convenience function to just retrieve the right value from get-fourpart",
            "parameter": [
                {
                    "type": "*",
                    "name": "value"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "get-border-width",
            "docName": "get-border-width()",
            "type": "function",
            "description": "Extract the width from a shorthand border css value",
            "example": [
                {
                    "type": "scss",
                    "code": "get-border-width('2px solid red') // => 2px"
                }
            ],
            "parameter": [
                {
                    "type": "*",
                    "name": "input"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "get-border-style",
            "docName": "get-border-style()",
            "type": "function",
            "description": "Extract the style from a shorthand border css value",
            "example": [
                {
                    "type": "scss",
                    "code": "get-border-width('2px solid red') // => solid"
                }
            ],
            "parameter": [
                {
                    "type": "*",
                    "name": "input"
                }
            ],
            "access": "public",
            "path": "units.scss"
        },
        {
            "namespace": "utils",
            "group": "utils.units",
            "name": "get-border-color",
            "docName": "get-border-color()",
            "type": "function",
            "description": "Extract the style from a shorthand border css value",
            "example": [
                {
                    "type": "scss",
                    "code": "get-border-width('2px solid red') // => red"
                }
            ],
            "parameter": [
                {
                    "type": "*",
                    "name": "input"
                }
            ],
            "access": "public",
            "path": "units.scss"
        }
    ]
};