window.pxstyles = {
    "groups": [
        {
            "name": "utils.bem",
            "items": [
                {
                    "group": "utils.bem",
                    "type": [
                        "mixin"
                    ],
                    "name": "block",
                    "description": "Establishes a block context for the bem mixin. The bem mixins will still work with regular\nnesting but they will create deeply nested classnames (e.g. `.block .block__element` instead of\njust `.block__element`) which may create more specificity than desired.\n\n```scss\n@@include block('block') {\n    @include bem('element') {\n        ...\n    }\n}\n```",
                    "parameters": []
                },
                {
                    "group": "utils.bem",
                    "type": [
                        "function"
                    ],
                    "name": "get-block-name",
                    "description": "Extracts the block name from a selector. So if $selector is something like\n`.block__element--mod` the function would return `block`.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-block-name('.block__element--mod') => block"
                        },
                        {
                            "type": "scss",
                            "code": "get-block-name(&) => [name of block as extracted from current path]"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "selector",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.bem",
                    "type": [
                        "function"
                    ],
                    "name": "get-bem",
                    "description": "Function version of the bem mixin (see mixin for details).",
                    "parameters": []
                },
                {
                    "group": "utils.bem",
                    "type": [
                        "mixin"
                    ],
                    "name": "bem",
                    "description": "Creates a element--modifier class name using the bem approach to class naming. Can be used\ninside of the block mixin or just within a class declartion. Should also work with media media\nqueries and other complex scnearios.\n\nHere's a pretty thorough example that demonstrates why this might be useful\n\n```scss\n\n@@include block('NEW') {\n    @include element(element) {\n        content: 'Basic Element';\n    }\n    @include element(element, blue) {\n        content: 'Blue Modifier';\n\n        @include element(child-of-blue) {\n            content: 'Child (in Blue Modified)';\n\n            @include element(deep-nested-element) {\n                content: 'Deep Nested Element (RIGHT)';\n            }\n        }\n    }\n}\n\n.OLD {\n    &__element {\n        content: 'Basic Element';\n    }\n\n    &__element--blue {\n        content: 'Blue Modifier';\n    }\n\n    &__element--blue & {\n        &__child-of-blue {\n            content: 'Child in Blue Modified';\n\n            &__deep-nested-element {\n                content: 'Deep Nested Element (WRONG)';\n            }\n        }\n\n        &__deep-nested-element {\n            content: 'Deep Nested Element (ALSO WRONG)';\n        }\n\n        &__child-of-blue & {\n            &__deep-nested-element {\n                content: 'Deep Nested Element (THIS IS WRONG TOO)';\n            }\n        }\n    }\n}\n```\n\nAnd some more basic examples:",
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
                            "code": ".block { @include bem(element, $pseudo::after) { ... } }\n// => block__element::after { ... }"
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
                    "parameters": [
                        {
                            "name": "name",
                            "type": "string | list",
                            "description": "The element name string (if a list is provided the selector will\ninclude a selector for each item in the list)"
                        },
                        {
                            "name": "modifier",
                            "type": "string",
                            "default": "''",
                            "description": "An optional modifier string. Use this to indicate that the\nblock is in a modified state (e.g. selected)."
                        },
                        {
                            "name": "pseudo",
                            "type": "string",
                            "default": "''",
                            "description": "An optional pseudo class that should be appended to the selector\n(e.g. hover or after)"
                        }
                    ]
                },
                {
                    "group": "utils.bem",
                    "type": [
                        "mixin"
                    ],
                    "name": "element",
                    "description": "Wrapper for bem mixin with more contextual naming",
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "utils.collections",
            "items": [
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-get-default",
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
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-deep-get",
                    "description": "Deep lookup for map values, each parameter represents the next level lookup",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-deep-get((a:1, b:2), b) // => 2"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "Map"
                        },
                        {
                            "name": "keys",
                            "type": "arglist",
                            "description": "Key chain"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "nth-if-length",
                    "description": "If $list has an $nth element, return that element. Otherwise return $fallback.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "nth-if-length((a, b, c), 1) // => a"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "nth-or-val",
                    "description": "If $list-or-val is a list, return the nth value; if the item is a value\nreturn the value; if the value is null return the default",
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
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-remove",
                    "description": "Return a copy of a list with the nth value removed",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-remove((a, b, c), 1) // => b, c"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-replace",
                    "description": "Performas a find and replace of items within a list",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-replace((a, b, c), (c: d)) // => a, b, d"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "list",
                            "type": "list",
                            "description": "The list on which the replacement will be performed"
                        },
                        {
                            "name": "replacements",
                            "type": "map",
                            "description": "A map of the search/replacent values, e.g. (searchForThis: newKey)"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-contains",
                    "description": "Returns true if the list contains a value, otherwise false",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-contains((a, b, c), c) // => true"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-sort-num",
                    "description": "Return a copy of a list sorted numerically",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-sort-num(2, 4, 1, 5, 3) // => 1 2 3 4 5"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-sort-by-values",
                    "description": "Return a copy of a map sorted by the value of each entry",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-sort-by-values((a:1, b:2, d:4, c:3)) // => ((a: 1, b: 2, c: 3, d: 4))"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-reverse",
                    "description": "Returns a copy of a map with the items in the reverse order of the original",
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-map",
                    "description": "Creates a new list with the results of calling a function once for every\nitem in this list. Equivalent to Array.map in JavaScript. Must use get-function to retrieve the function used for the $fn parameter. See example.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@function square($x) { @return $x * $x }\nlist-map(1 2 3 4, get-function(square)); // => 1 4 9 16"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "list",
                            "type": "List",
                            "description": "the list to which the function is being applied"
                        },
                        {
                            "name": "fn",
                            "type": "Function",
                            "description": "reference to a function(item, index) that will be\napplied to every item."
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-filter",
                    "description": "Creates a new list with all items that pass the test implemented by the\nprovided function. Similar to Array.filter in JavaScript.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@function aboveTen($x) { @return ($x > 10)}\nlist-filter(2 20 30 3 4 100, get-function(aboveTen)); // => (20 30 100)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "list",
                            "type": "List",
                            "description": "the list being filtered"
                        },
                        {
                            "name": "fn",
                            "type": "Function",
                            "description": "reference to a filtering function"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-collect",
                    "description": "Merge multiple maps into a single map",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-collect((a: 1), (b:2), (c: 3)); // => (a:1, b:2, c:3)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "maps...",
                            "type": "*",
                            "description": "One or more maps that should be merged into a single map."
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-get",
                    "description": "A function that retrieves a \"deep\" value from a map using path syntax where key names are\nseparated by periods.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$color: flat-get((colors: (somecolor: #F00)), 'colors.somecolor')\n==> #F00"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "An existing map that serves as the lookup source"
                        },
                        {
                            "name": "path",
                            "type": "string",
                            "description": "The path where the value is found, expressed as a list of keys separated\nby commas (e.g. 'colors.accent')"
                        },
                        {
                            "name": "fallback",
                            "type": "*",
                            "default": "null",
                            "description": "An optional fallback value that will be returned in the value isn't\nfound"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-set",
                    "description": "A function that allows you to set a \"deep\" value in a map using path syntax where key names are\nseparated by periods.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$map: flat-set((), 'colors.somecolor', #F00) // ==> (colors: (somecolor: #F00))"
                        },
                        {
                            "type": "scss",
                            "code": "$map: flat-set((colors: (clr1: #F00)), 'colors.clr2', #00F) // ==> {colors: {clr1: #F00, clr2: #00F}}"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "An existing map that serves as the basis for the returned value"
                        },
                        {
                            "name": "path",
                            "type": "string",
                            "description": "The path where the value should be set, expressed as a list of keys\nseparated by perods (e.g. 'colors.accent')"
                        },
                        {
                            "name": "val",
                            "type": "*",
                            "description": "The value to be set at the path"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-default",
                    "description": "Same as flat-set, but will not overwrite a value if it already exists",
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
                    "parameters": [
                        {
                            "name": "map",
                            "type": "*",
                            "description": "The flat map that will be modified"
                        },
                        {
                            "name": "path",
                            "type": "*",
                            "description": "The path of the new value"
                        },
                        {
                            "name": "val",
                            "type": "*",
                            "description": "The new value"
                        },
                        {
                            "name": "merge-maps",
                            "type": "*",
                            "default": "false",
                            "description": "Determines what to do if the key refers to a value that is already a map. See example of both behaviors below."
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flatten-map",
                    "description": "A function that flattens a map to it's \"flat\" equivalent where every key is replaced with a deep path\n(see examples) into the original map.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "flatten-map((colors: (clr1: #f00, clr2: #00f)))\n==> (\"colors:clr1\": #f00, \"colors:clr2\": #00f)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "The map to be flattened"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "unflatten-map",
                    "description": "A function that restores a \"flat\" map (like one produced by the flatten-map function) to a\nnormal deep map.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "unflatten-map((\"colors:clr1\": #f00, \"colors:clr2\": #00f))\n==> (colors: (clr1: #f00, clr2: #00f))"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "The map to be unflattened"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-merge",
                    "description": "A function which will flatten and then merge two maps. This is not the same as a deep merge\nbecause it allows for keys in one (or both) of the maps to be complete paths. If there are\nconflicts, last in list wins.",
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
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-has-key",
                    "description": "Returns true if the provided map, once flattened, contains the deep path $key;",
                    "example": [
                        {
                            "type": "scss",
                            "code": "flat-has-key((colors: (clr1: #f00, clr2: #00f)), 'colors:clr2') => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": ""
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "description": ""
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "utils.color",
            "items": [
                {
                    "group": "utils.color",
                    "type": [
                        "function"
                    ],
                    "name": "color-shade",
                    "description": "Produce a shade (a lighter or darker version) of a color based on the value\nof $shade and an optional darkest to lightest shade range.",
                    "example": [
                        {
                            "type": "color",
                            "code": "",
                            "description": ": shade(red, 5, null) // => #ff8080"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "color",
                            "type": "color",
                            "default": "null",
                            "description": "The color to be shaded. If not provided, it will be\ncalculated as the middle value within $shade-range."
                        },
                        {
                            "name": "shade",
                            "type": "number",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter."
                        },
                        {
                            "name": "shade-range",
                            "type": "(color, color)",
                            "default": "null",
                            "description": "The range of colors will be produced\nas a list (darkest, lightest)."
                        }
                    ]
                },
                {
                    "group": "utils.color",
                    "type": [
                        "function"
                    ],
                    "name": "color-contrast",
                    "description": "Choose a contrasting foreground based on the contrast between a background and two foreground\noptions (a light and dark).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "contrast-color(rgb(233, 229, 31), rgb(199, 192, 192), rgb(133, 133, 231)) // => #8585e7"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.color",
                    "type": [
                        "function"
                    ],
                    "name": "yiq",
                    "description": "Computes the the luminance (grayscale value) of a color in the yiq color space. This can be used\nfor determining the relative contrast between two colors.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "yiq(purple) // => 52.864"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.color",
                    "type": [
                        "function"
                    ],
                    "name": "luminance",
                    "description": "Calculates luminance of a color based on the WCAG2 standard Luminance calculation based on:\nhttps://www.w3.org/TR/WCAG20/#relativeluminancedef",
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "utils.fonts",
            "items": [
                {
                    "group": "utils.fonts",
                    "type": [
                        "mixin"
                    ],
                    "name": "font-face",
                    "description": "Simplified syntax for generating a font-face at-rule for loading custom\nfonts.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include font-face('circular','~assets/fonts/circular/circular-book', 400, null, woff woff2 otf);"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "name",
                            "type": "String",
                            "description": "Name of the font (as referenced in css)"
                        },
                        {
                            "name": "path",
                            "type": "String",
                            "description": "The url path used to load the font (do not include\nthe extension, it will be appended)"
                        },
                        {
                            "name": "weight",
                            "type": "String",
                            "description": "The weight associated with this variation of the\nfont"
                        },
                        {
                            "name": "style",
                            "type": "String",
                            "description": "(optional) The styles associated with this variation\nof the font"
                        },
                        {
                            "name": "exts",
                            "type": "String",
                            "default": "woff ttf",
                            "description": "(optional) The full list of extensions to\nbe loaded (added to path), no period"
                        }
                    ]
                },
                {
                    "group": "utils.fonts",
                    "type": [
                        "mixin"
                    ],
                    "name": "font-smoothing-on",
                    "description": "Turn font smoothing on (makes type appear thinner and lighter on Mac and more closely\nresembles type rendering on Windows)",
                    "example": [
                        {
                            "type": "include",
                            "code": "font-smooth: always;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;",
                            "description": "font-smoothing-on() // =>"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.fonts",
                    "type": [
                        "mixin"
                    ],
                    "name": "font-smoothing-off",
                    "description": "Restore font-smoothing to it's default value.",
                    "example": [
                        {
                            "type": "include",
                            "code": "font-smooth: initial;\n-webkit-font-smoothing: initial;\n-moz-osx-font-smoothing: initial;",
                            "description": "font-smoothing-off() // =>"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.fonts",
                    "type": [
                        "mixin"
                    ],
                    "name": "google-font",
                    "description": "Mixin for loading google fonts.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "%%include google-font(Lato, 300);"
                        },
                        {
                            "type": "scss",
                            "code": "%%include google-font(Open Sans, 400, italic)"
                        },
                        {
                            "type": "scss",
                            "code": "%%include google-font(Slapo 27px, 400 200, $text: 'Lorem ipsum dolor sit amet');"
                        },
                        {
                            "type": "scss",
                            "code": "// By placing google-font includes inside a google-font include (without arguments nested includes will be merged into a single import\n%%include google-font {\n    %%include google-font(Material Icons);\n    %%include google-font(Open Sans, 300 400 700, normal);\n    %%include google-font(Open Sans, 300 400 700, italic normal);\n    %%include google-font(Lato, 300 400i 700i);\n    %%include google-font(Lato, 300 700, italic normal);\n}\n\n=> @import url(\"//fonts.googleapis.com/css?family=Material+Icons:400|Open+Sans:300,400,700,300i,400i,700i|Lato:300,400\")"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "name",
                            "type": "string",
                            "default": "null",
                            "description": "Name of the font (must match google)"
                        },
                        {
                            "name": "weights",
                            "type": "list or number",
                            "default": "400",
                            "description": "A list of weights to be loaded (or\nsingle weight)"
                        },
                        {
                            "name": "styles",
                            "type": "list or string",
                            "default": "normal",
                            "description": "A list of styles to be loaded (or\nsingle style)"
                        },
                        {
                            "name": "text",
                            "type": "*",
                            "default": "null",
                            "description": "Subsetting text"
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "utils.layout",
            "items": [
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "first-last-radius",
                    "description": "Convenience mixin to inherit the border-radius of a parent based on child position (first child\ninherits top left/right radius, last child inherits bottom left/right radius)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include first-last-radius()"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "rel",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include rel($t: null, $r: null, $b: null, $l: null) // =>\nposition: relative;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "abs",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include abs($t: null, $r: null, $b: null, $l: null) // =>\nposition: absolute;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "fixed",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include fixed($t: null, $r: null, $b: null, $l: null) // =>\nposition: fixed;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "left-top",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include left-top($l: 0, $t: 0) // =>\nposition: absolute;\nleft: 0;\ntop: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "right-top",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include right-top($r: 0, $t: 0) // =>\nposition: absolute;\nright: 0;\ntop: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "left-bottom",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include left-bottom($l: 0, $b: 0) // =>\n    position: absolute;\n    left: 0;\n    bottom: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "right-bottom",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include right-bottom($r: 0, $b: 0) // =>\n    position: absolute;\n    left: 0;\n    bottom: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "abs-fill",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include abs-fill() // =>\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "center",
                    "description": "Center the item using a mix of positioning and a transform",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include center($left: 50%, $top: 50%, $position: absolute)\nposition: absolute;\nleft: 50%;\ntop: 50%;\ntransform: translate(-50%, -50%);"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "center-x",
                    "description": "Center the item horizontally using a mix of positioning and a transform",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include center-x($left: 50%, $position: absolute) // =>\nposition: absolute;\nleft: 50%;\ntransform: translateX(-50%);"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "center-y",
                    "description": "Center the item vertically using a mix of positioning and a transform",
                    "example": [
                        {
                            "type": "scss",
                            "code": "include center-y($top: 50%, $position: absolute) // =>\nposition: absolute;\ntop: 50%;\ntransform: translateY(-50%);"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "flex-pseudo-center",
                    "description": "Adds before and after pseudo elements to a flex container to allow centering content to\nnon-perfect values for more natural looking centered layouts",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include flex-pseudo-center(33%);"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "utils.math",
            "items": [
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "pow",
                    "description": "Calculate a number raised to the power of the provided exponent. (Wrapper for math.pow)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "pow(2, 3)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "base",
                            "type": "*",
                            "description": "The base number"
                        },
                        {
                            "name": "exp",
                            "type": "*",
                            "description": "The exponent used to raise the base"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "nth-root",
                    "description": "Calculates the nth root of a number using iteration.",
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "n",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "round-d",
                    "description": "Round a number using the specified number of decimals.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$val: round-d(3.33333333, 2) // => 3.33"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "n",
                            "type": "number",
                            "description": "The number to be rounded"
                        },
                        {
                            "name": "dec",
                            "type": "number",
                            "default": "2",
                            "description": "The number of decimals in the output"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "round-f",
                    "description": "Round a number with the specified fraction (e.g. 4 will produce 1.0, 1.25, 1.5, etc.)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$val: round-f(3.3333, 2) // => 3.5"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "n",
                            "type": "number",
                            "description": "The number to be rounded"
                        },
                        {
                            "name": "frac",
                            "type": "number",
                            "default": "8",
                            "description": "The denominator of the fractional portion of the result"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "intp",
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
                    "parameters": [
                        {
                            "name": "prog",
                            "type": "number",
                            "description": "The progress between the two values, provided as a value between 0 and 1."
                        },
                        {
                            "name": "range",
                            "type": "number",
                            "description": "The range of interpolation. This can be provided as a single value which\nrepresents the upper range from 0 or as two values which represent the lower and upper range."
                        },
                        {
                            "name": "ease",
                            "type": "string",
                            "description": "A reference to an easing function. See the ease function for details"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease",
                    "description": "Interpolate a value between 0 and 1 using the easing function with the given name",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease(0.5, 'out-quad') // => 0.75"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        },
                        {
                            "name": "easing",
                            "type": "String",
                            "description": "The name of the easing function that should be used for interpolation"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-in-quad",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-in quad function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-quad(0.5) // => 0.25"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-out-quad",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-out quad function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-quad(0.25) // => 0.4375;"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-in-cubic",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-in cubic function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-cubic(0.5) // => 0.125;"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-out-cubic",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-out cubic function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-cubic(0.25) // => 0.578125"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-in-quart",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-in quart function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-quart(0.3) // => 0.0081"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-out-quart",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-out quart function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-quart(0.5) // => 0.9375"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "clamp-number",
                    "description": "Clamp a number (keep it within the confines of min/max). Note: the weird\nname is to differentiate from the clamp() css function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "clamp-number(4, 3, 10) // => 4 is above the min"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "number",
                            "type": "*",
                            "description": "The number to be clampled"
                        },
                        {
                            "name": "min",
                            "type": "*",
                            "description": "Min allowed value"
                        },
                        {
                            "name": "max",
                            "type": "*",
                            "description": "Max allowed value"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "divide",
                    "description": "Provides a wrapper for the standard sass divide function (math.div) to make imports a little\nsimpler. Returns the result of dividing $num1 by $num2.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "divide(10, 2) // => 5"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "num1",
                            "type": "number",
                            "description": "The first number in the division operation (the numerator)"
                        },
                        {
                            "name": "num2",
                            "type": "number",
                            "description": "The first number in the division operation (the numerator)"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "percent",
                    "description": "Convience function that divides two numbers and the multiples the result by 100%",
                    "example": [
                        {
                            "type": "scss",
                            "code": "percent(10, 3, 2) // => 333.33%"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "num1",
                            "type": "number",
                            "description": "The first number in the division operation (the numerator)"
                        },
                        {
                            "name": "num2",
                            "type": "number",
                            "description": "The first number in the division operation (the numerator)"
                        },
                        {
                            "name": "round",
                            "type": "number",
                            "description": "The number of digits to use when rounding the output"
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "utils.misc",
            "items": [
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "root",
                    "description": "Simple helper that places the content within a root selector (and outside of any nesting)",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "hover",
                    "description": "Helper for a hover state selector that only applies hover styles when not disabled.",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "active",
                    "description": "Helper for an active state selector that only applies hover styles when not disabled.",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "focus",
                    "description": "Adds a focus-visible state selector to the element",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".item { @include focus() {...} }  => .item:focus-visible {...}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "aria-checked",
                    "description": "Shortcut for checked state (and a reminder to use aria to manage this)",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".item { @include aria-checked() {...} }  => .item:[aria-checked] {...}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "disabled",
                    "description": "Shortcut for checked state (and a reminder to use aria to manage this)",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".item { @include disabled() {...} }  =>\n.item:disabled, .item:disabled:hover, .item:disabled:active, .item:disabled[aria-checked] {...}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "placeholder",
                    "description": "Style the placeholder text for a text input element",
                    "example": [
                        {
                            "type": "scss",
                            "code": "input {\n    %%include placeholder {\n        /* styles for placeholder here */\n    }\n}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "no-select",
                    "description": "Disable text selection on an element",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "line-clamp",
                    "description": "Use the (now broadly supported) line-clamp property to restrict the\nnumber of lines that are shown in a text element.",
                    "example": [
                        {
                            "type": "line",
                            "code": "display: -webkit-box;\n-webkit-line-clamp: 3;\n-webkit-box-orient: vertical;\noverflow: hidden;",
                            "description": "clamp(3) // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "lines",
                            "type": "number",
                            "description": "The maximum number of lines to be shown"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "before",
                    "description": "Shortcut for the ::before pseudo element with common defaults for content\nand display.",
                    "example": [
                        {
                            "type": "before",
                            "code": "content: \"\";\ndisplay: block;",
                            "description": "('hello, world') // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "content",
                            "type": "*",
                            "default": "''",
                            "description": "The value for the content property."
                        },
                        {
                            "name": "display",
                            "type": "*",
                            "default": "block",
                            "description": "The value for the display property."
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "after",
                    "description": "Shortcut for the ::after pseudo element with common defaults for content\nand display.",
                    "example": [
                        {
                            "type": "after",
                            "code": "content: \"\";\ndisplay: block;",
                            "description": "('goodbye, world') // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "content",
                            "type": "*",
                            "default": "''",
                            "description": "The value for the content property."
                        },
                        {
                            "name": "display",
                            "type": "*",
                            "default": "block",
                            "description": "The value for the display property."
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "triangle",
                    "description": "Create a triangle element using the border properties",
                    "example": [
                        {
                            "type": "scss",
                            "code": "triangle('up', 'red', 10px, 2px)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "direction",
                            "type": "string",
                            "description": "The direction the arrow is pointing (up, down, left, right, etc.)"
                        },
                        {
                            "name": "color",
                            "type": "color",
                            "description": "The fill color for the arrow"
                        },
                        {
                            "name": "height",
                            "type": "length",
                            "description": "The height of the arrow"
                        },
                        {
                            "name": "width",
                            "type": "length",
                            "description": "The width of the arrow"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "checkered-background",
                    "description": "Sets a generated checked pattern background svg image on an element",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include checkered-background(20px, green) // => creates a green and transparent checkered background where each square is 20px x 20px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "width",
                            "type": "*",
                            "default": "12px",
                            "description": "The width of an individual square in the checked pattern"
                        },
                        {
                            "name": "color",
                            "type": "*",
                            "default": "#c8c8c8",
                            "description": "The first of two colors in the check pattern"
                        },
                        {
                            "name": "color-alt",
                            "type": "*",
                            "default": "transparent",
                            "description": "The second of two colors in the check pattern"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "function"
                    ],
                    "name": "map-key-replace",
                    "description": "Finds and replaces keys in a map",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$map: map-key-replace(( oldkey: 'value'), (oldkey: newkey)); // => (newkey: 'value')"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "css-map",
                    "description": "Generates css from a map of properties and values. Properties can be remapped with aliases or\nignored with a start pattern.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include css-map-dpr(( color: blue, background-color: green, font-family: sans-serif));"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "The property map used to generate the css"
                        },
                        {
                            "name": "aliases",
                            "type": "map",
                            "description": "Property aliases map (e.g (-px-accent: background-color))"
                        },
                        {
                            "name": "map-states",
                            "type": "list",
                            "description": "If provided, the specified map-type properties will be interpreted as\nsub states (e.g. (hover: (...)) becomes &:hover {...})"
                        },
                        {
                            "name": "ignore-start-pattern",
                            "type": "string",
                            "description": "Properties that start with this will be ignored"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "debug-zebra",
                    "description": "Generates a loud striped background gradient that can be used when debugging (especially helpful for scrolling)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "debug-zebra() // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "color1",
                            "type": "*",
                            "default": "yellowgreen",
                            "description": "The first color in the gradient"
                        },
                        {
                            "name": "color2",
                            "type": "*",
                            "default": "gold",
                            "description": "The second color in the gradient"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "only-safari",
                    "description": "Rule that only includes the content when the browser is Safari",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "function"
                    ],
                    "name": "calc-add",
                    "description": "Produces a css calc expression that adds two values (or subtracts if the second value is\nnegative)",
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "utils.shadows",
            "items": [
                {
                    "group": "utils.shadows",
                    "type": [
                        "function",
                        "mixin"
                    ],
                    "name": "depth-shadow",
                    "description": "Creates the syntax for a multi-level shadow",
                    "example": [
                        {
                            "type": "scss",
                            "code": "depth-shadow(2, 0.5, purple) // => shadow: 0 1px 2px -0.5px rgba(128, 0, 128, 0.2295), 0 3.5px 4px 0px rgba(128, 0, 128, 0.03425), 0 1px 5px 1px rgba(128, 0, 128, 0.072)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "blur",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "alpha",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "color",
                            "type": "*",
                            "description": ""
                        }
                    ],
                    "merged": true
                },
                {
                    "group": "utils.shadows",
                    "type": [
                        "mixin"
                    ],
                    "name": "depth-shadow-effect",
                    "description": "Generates a depth shadow using the filter property",
                    "parameters": []
                },
                {
                    "group": "utils.shadows",
                    "type": [
                        "function",
                        "mixin"
                    ],
                    "name": "shadow",
                    "description": "Function that creates a standardized box shadow",
                    "example": [
                        {
                            "type": "scss",
                            "code": "shadow(2) // => 0 1px 2px -0.5px rgba(0, 0, 0, 0.21), 0 3.5px 4px 0px rgba(0, 0, 0, 0.015), 0 1px 5px 1px rgba(0, 0, 0, 0.06);"
                        },
                        {
                            "type": "scss",
                            "code": "shadow(2, black) // => box-shadow: 0 1px 2px -0.5px rgba(0, 0, 0, 0.21), 0 3.5px 4px 0px rgba(0, 0, 0, 0.015), 0 1px 5px 1px rgba(0, 0, 0, 0.06);"
                        }
                    ],
                    "parameters": [],
                    "merged": true
                },
                {
                    "group": "utils.shadows",
                    "type": [
                        "mixin"
                    ],
                    "name": "shadow-effect",
                    "description": "Create a standard drop-shadow as a css filter effect (creates\nnon-rectangular shadows on any content)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "shadow-effect(2, gray) // => filter: drop-shadow(0 1px 2px -0.5px rgba(0, 0, 0, 0.21), 0 3.5px 4px 0px rgba(0, 0, 0, 0.015), 0 1px 5px 1px rgba(0, 0, 0, 0.06));"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "utils.strings",
            "items": [
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "to-str",
                    "description": "Ensures that that provided value is a string.",
                    "parameters": []
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "str-replace",
                    "description": "Replace all instances of a string within another string",
                    "example": [
                        {
                            "type": "scss",
                            "code": "str-replace('test test test', 'test', 'pass') // => 'pass pass pass'"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "url-encode",
                    "description": "Url encode a string (used primarily for encoding inline svg)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "url-encode('pixellab') // => \"www.thinkpixellab.com%25\";"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "inline-svg",
                    "description": "Encode an svg string for use as an inline svg (like a background image).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "background-image: inline-svg('<svg>...</svg>'); // => background-image: url('data:image/svg+xml, ... ');"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "str-split",
                    "description": "Split a string into an array of strings based on a separator.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "str-split('you are here', 'a') // => \"you \" \"re here\""
                        }
                    ],
                    "parameters": [
                        {
                            "name": "string",
                            "type": "String",
                            "description": "the string to split"
                        },
                        {
                            "name": "separator",
                            "type": "String",
                            "description": "the character to split the string on"
                        }
                    ]
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "list-join",
                    "description": "Creates and returns a new string by concatenating all of the elements in a\nlist separated by $separator. Similiar to Javascript Array.join JavaScript",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-join('a' 'b' 'c', ':') // => 'a:b:c'"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "list",
                            "type": "List",
                            "description": "The list to be joined"
                        },
                        {
                            "name": "separator",
                            "type": "String",
                            "description": "The separator character"
                        }
                    ]
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "starts-with",
                    "description": "Returns true if a string begins withs another string. Returns false if $str is null or 0 length.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "starts-with('abc', 'a') // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "str",
                            "type": "String",
                            "description": "A string that will be tested for the $start string"
                        },
                        {
                            "name": "start",
                            "type": "String",
                            "description": "A string that $str must start with"
                        }
                    ]
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "ends-with",
                    "description": "Returns true if a string ends withs another string. Returns false if $str is null or 0 length.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "starts-with('abc', 'a') // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "str",
                            "type": "String",
                            "description": "A string that will be tested for the $start string"
                        },
                        {
                            "name": "start",
                            "type": "String",
                            "description": "A string that $str must start with"
                        }
                    ]
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "trim",
                    "description": "Trims whitespace from the beinning and end of a string",
                    "example": [
                        {
                            "type": "scss",
                            "code": "trim('  abc ') => 'abc'"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "string",
                            "type": "String",
                            "description": "the string to trim"
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "utils.transitions",
            "items": [
                {
                    "group": "utils.transitions",
                    "type": [
                        "function",
                        "mixin"
                    ],
                    "name": "transition",
                    "description": "Simplified syntax for transitioning multiple individual properties on\nan element, defaulting to standardized values for duration and easing.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "transition: transition(transform opacity);"
                        },
                        {
                            "type": "scss",
                            "code": "transition: transition(transform opacity, 0.5s);"
                        },
                        {
                            "type": "scss",
                            "code": "transition: transition(transform opacity, $ease: $ease-out-quart);"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "proplist",
                            "type": "list",
                            "description": "A list of properties to be transitioned"
                        },
                        {
                            "name": "dur",
                            "type": "duration",
                            "default": "$transition-dur",
                            "description": "The duration of the transition"
                        },
                        {
                            "name": "ease",
                            "type": "string",
                            "default": "$transition-ease",
                            "description": "The easing to be used in the transition"
                        },
                        {
                            "name": "delay",
                            "type": "duration",
                            "default": "0ms",
                            "description": "The delay for the transition"
                        }
                    ],
                    "merged": true
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vue-transition",
                    "description": "Set of mixins that generate classes for a vue transition. These dot not expose the full power of\nvue transitions but it does simplify the creation of many by using simplified naming and grouping classes\nthat are commonly defined together. The outer mixin contains the inner (vt-*) mixins.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Create a fade transition by definining just the css transition and the hidden state.\n @include vue-transition(fade) {\n\n    // define the transition\n    @include vt-transition {\n        transition: opacity 500ms;\n    }\n\n    // define the hidden state (the non-hidden state is implicty -- the normal state)\n    @include vt-hidden {\n        opacity: 0;\n    }\n};"
                        },
                        {
                            "type": "scss",
                            "code": "// Create a slide and fade transition by\n @include vue-transition(slide-x) {\n\n    // define the hidden state (the non-hidden state is implicty -- the normal state)\n    @include vt-transition {\n        transition: opacity 500ms;\n    }\n\n    // the hidden state before entering\n    @include vt-hidden-enter {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n\n    // the hidden after exiting\n    @include vt-hidden-leave {\n        transform: translateY(100px);\n        opacity: 0;\n    }\n};"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "name",
                            "type": "string",
                            "description": "The name of the transition"
                        }
                    ]
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-transition",
                    "description": "Vue transition: Defines the transition  definition for a vue transition.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-hidden",
                    "description": "Vue transition: Defines the hidden state when that state is shared as the element is added and\nalso removed from the DOM. Use in the content area of the vue-transition mixin.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-hidden-enter",
                    "description": "Vue transition: Defines the hidden state as an element is added into the DOM. Removed one frame\nafter element is inserted.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-hidden-leave",
                    "description": "Vue transition: Defines a hidden state when an element is removed from the DOM.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-active",
                    "description": "Vue transition: Defines the state as an element is actively transitioning when the state is\nshared for both enter and leave. Use in the content area of the vue-transition mixin.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-entering",
                    "description": "Vue transition: Defines the active transition state as an element is being added to the DOM. Use\nin the content area of the vue-transition mixin.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-leaving",
                    "description": "Defines the the active transition state as element is begin removed from the DOM. Use in the\ncontent area of the vue-transition mixin.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-pin",
                    "description": "Vue transition: Simple helper that pins an object as it is being removed from the DOM (to make\nroom for the incoming element). In some cases just absolute positioning is enough, but in others\nyou may need to provide additional support (like a width or height) as @content or specific\ntop/left values. It also might be better to use a grid as a container where multiple elements\ncan easily occupy the same space but still size naturally and impact the layout of other\nelments.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vue-transition-fade",
                    "description": "Creates a basic vue fade transition",
                    "example": [
                        {
                            "type": "vue",
                            "code": ".fade-enter-active .fade-leave-active {\n transition: opacity 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.fade-enter-active {\n  transition-delay: 0;\n}\n.fade-leave-active {\n  transition-delay: 0;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}",
                            "description": "transition-fade() // =>"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vue-transition-slide-fade",
                    "description": "Creates a basic vue slide and fade transition",
                    "example": [
                        {
                            "type": "include",
                            "code": ".class .slide-leave-active,\n.class .slide-enter-active {\n  transition: transform 150ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 150ms cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.class .slide-enter {\n  opacity: 0;\n  transform: translateY(100px);\n}\n.class .slide-leave-to {\n  opacity: 0;\n  transform: translateY(-100px);\n}\n.class .slide-enter-active {\n  position: relative;\n}\n.class .slide-leave-active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}",
                            "description": "vue-transition-slide-fade() // =>"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "utils.typography",
            "items": [
                {
                    "group": "utils.typography",
                    "type": [
                        "function"
                    ],
                    "name": "modular-size",
                    "description": "Generate a modular type size",
                    "example": [
                        {
                            "type": "scss",
                            "code": "modular-size(100px, 1.25, -1) // => 80px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "base",
                            "type": "number",
                            "description": "The base size used to generate the type scale (always\nexpressed in px)."
                        },
                        {
                            "name": "ratio",
                            "type": "number",
                            "description": "The ratio to use for generating the modular type\nscale (e.g. 1.25 or 4/3)"
                        },
                        {
                            "name": "step",
                            "type": "number",
                            "description": "The number of steps away from the base (pos/neg)"
                        }
                    ]
                },
                {
                    "group": "utils.typography",
                    "type": [
                        "function"
                    ],
                    "name": "modular-scale",
                    "description": "Generate a complete modular type scale, expressed as a map of type names and font sizes",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$typescale: modular-scale(16px, 0.75, null, (sm base lg)); // => (sm: 0.75rem, base: 1rem, lg: 1.25rem)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "bases",
                            "type": "Number | List",
                            "description": "The base size or sizes used to generate the typescale"
                        },
                        {
                            "name": "ratio",
                            "type": "number",
                            "description": "The ratio used to generate the typescale"
                        },
                        {
                            "name": "range",
                            "type": "List",
                            "description": "Optional -- either $range or $names must be provided. A list of two values\nthat represent the range of sizes to be created (e.g. -3, 10), with the size 0 being equivalent\nto the base."
                        },
                        {
                            "name": "names",
                            "type": "List",
                            "description": "Optional -- either $range or $names must be provided. The names for the\ngenerated sizes (these will be the keys in the map that gets returned)"
                        },
                        {
                            "name": "rems",
                            "type": "Bool",
                            "default": "true",
                            "description": "Whether or not to convert to rems. Note that rems will be based on\nthe first (or only) value in $bases"
                        },
                        {
                            "name": "round",
                            "type": "number",
                            "default": "4",
                            "description": "The fractional rounding amount (e.g. value of 4 means 1/4 so round to\n0.25, 0.50, etc.)"
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "utils.units",
            "items": [
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "strip-unit",
                    "description": "Strip the unit from a number",
                    "example": [
                        {
                            "type": "scss",
                            "code": "strip-unit(100px) // => 100"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "to-number",
                    "description": "Convert a number-like string value to a proper number (that can be used for\narithmetic, etc.)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "to-number('234.8') // => 234.8"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-number",
                    "description": "Return true if the provided value is a number",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-number(4) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-rems",
                    "description": "Return true if the provided value is in rem units",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-rems(3rem) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-px",
                    "description": "Return true if the provided value is in px units",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-px(10px) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-time",
                    "description": "Return true if the provided value is a css duration / time",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-time(5000ms) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-angle",
                    "description": "Return true if the provided value is a css angle",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-angle(45deg) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-integer",
                    "description": "Return true if the provided value is an integer",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-integer(456) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-relative-length",
                    "description": "Return true if the provided value is a relative length value (if you don't\nknow about vmin/vmax then look them up because they are cool).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-relative-length(20vmin) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-absolute-length",
                    "description": "Return true if the provided value is an absolute length value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-absolute-length(10cm) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-percentage",
                    "description": "Return true if the provided value is an absolute length value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-percentage(100%) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-length",
                    "description": "Return true if the provided value is a length",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-length(100%) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-string",
                    "description": "Return true if the provided value is a string",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-string('Hello, world') // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-map",
                    "description": "Return true if the provided value is a map",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-map((red: #f00, blue: #00f)) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-list",
                    "description": "Return true if the provided value is a string",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-list((1 2 3)) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-color",
                    "description": "Return true if the provided value is a color",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-color(blue) // => true"
                        },
                        {
                            "type": "scss",
                            "code": "is-color(#444) // => true"
                        },
                        {
                            "type": "scss",
                            "code": "is-color(5) // => false"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-null",
                    "description": "Provide an alternate value when $value is null",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "fallback",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-string",
                    "description": "Choose a value based on whether another value is a string or not",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-number",
                    "description": "Choose a value based on whether another value is a string or not",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-number(10, 'hello', 20) // => \"hello\""
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-list",
                    "description": "Choose a value based on whether another value is a string or not",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-map",
                    "description": "Choose a value based on whether another value is a string or not",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-color",
                    "description": "Choose a value based on whether another value is a color or not",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-color(pink, #fefe, 'not a color') // => #fefe"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart",
                    "description": "Convert any valid four-part value (like those used for margin or padding) into a map with\nthe correct values for top, right, bottom, left)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart(2px) => (top: 2px, right: 2px, bottom: 2px, left: 2px)"
                        },
                        {
                            "type": "scss",
                            "code": "get-fourpart(2px 4px) => (top: 2px, right: 4px, bottom: 2px, left: 4px)"
                        },
                        {
                            "type": "scss",
                            "code": "get-fourpart(2px 4px 8px) => (top: 2px, right: 4px, bottom: 8px, left: 4px)"
                        },
                        {
                            "type": "get",
                            "code": "",
                            "description": "fourpart(2px 4px 8px 16px) => (top: 2px, right: 4px, bottom: 8px, left: 16px)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart-left",
                    "description": "Convenience function to just retrieve the left value from get-fourpart",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-left(10px) // => 10px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart-top",
                    "description": "Convenience function to just retrieve the top value from get-fourpart",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-top(10px) // => 10px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart-bottom",
                    "description": "Convenience function to just retrieve the bottom value from get-fourpart",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-bottom(10px) // => 10px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart-right",
                    "description": "Convenience function to just retrieve the right value from get-fourpart",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-right(10px) // => 10px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-border-width",
                    "description": "Extract the width from a shorthand border css value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-width(2px solid red) // => 2px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "input",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-border-style",
                    "description": "Extract the style from a shorthand border css value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-style('2px solid red') // => solid"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "input",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-border-color",
                    "description": "Extract the style from a shorthand border css value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-color('2px solid red') // => red"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "input",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "aspect-to-number",
                    "description": "Converts an aspect string (like '16:9') to a number (the equivalent of 16/9)",
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
                    "parameters": [
                        {
                            "name": "aspect",
                            "type": "string | number",
                            "description": "The string representation of the aspect (should be two numbers\nseparated by a colon, e.g. '16:9'). Alternatively, if the input is a number then it will be\nreturned directly. This makes it possible to use the function as a safety where a number is\nexpected but a string could be used for convenience."
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "site.color",
            "items": [
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "shade",
                    "description": "Produce a shade (a lighter or darker version) of a color based on the value of $shade and an\noptional darkest to lightest shade range.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$color: shade(red, 5, null) // => #ff8080"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "color",
                            "type": "color",
                            "default": "null",
                            "description": "The color to be shaded. If not provided, it will be calculated as\nthe middle value within $shade-range."
                        },
                        {
                            "name": "shade",
                            "type": "number",
                            "default": "0",
                            "description": "The shading to be applied, as a percentage from -100% to 100% or as a\nshade value between -10, 10 (can be overriden with config(shade-steps)). 0 returns the color\nitself. Negative values make the color darker, postive values make it lighter."
                        },
                        {
                            "name": "shade-range",
                            "type": "(color, color)",
                            "default": "null",
                            "description": "The range of colors will be produced as a list\n(darkest, lightest)."
                        }
                    ]
                },
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "clr",
                    "description": "Lookup a color by name and optionally get a shade of it or apply alpha.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Add the color to the global configuration\nconfig('colors.purple', #C578DD);\n\n// Retrieve the color\nclr(purple) => #C578DD\nclr(purple, -1) => (#b16cc7)\nclr(purple, $alpha: 0.5) => (rgba(197, 120, 221, 0.5))"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "shade",
                            "type": "*",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter."
                        },
                        {
                            "name": "alpha",
                            "type": "number",
                            "default": "1",
                            "description": "The alpha value of the color to be returned. If a value other than 1\nis provided, the ooutput will be in rgba format."
                        }
                    ]
                },
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "gray",
                    "description": "Get a standardized shade of site's base gray.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "gray(2, 0.5) // => rgba(173, 179, 183, 0.5)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "shade",
                            "type": "number",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter."
                        },
                        {
                            "name": "alpha",
                            "type": "number",
                            "default": "1",
                            "description": "The alpha value of the final color that will be returned."
                        }
                    ]
                },
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "accent",
                    "description": "Get a standardized shade of the site's primary accent color",
                    "example": [
                        {
                            "type": "scss",
                            "code": "accent(2, 0.5) // => rgba(51, 173, 253, 0.5)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "shade",
                            "type": "*",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10 (can be overriden\nwith config(shade-steps)). 0 returns the color itself. Negative values make the color darker,\npostive values make it lighter."
                        },
                        {
                            "name": "alpha",
                            "type": "number",
                            "default": "1",
                            "description": "The alpha value of the color to be returned. If a value other than 1\nis provided, the output will be in rgba format."
                        }
                    ]
                },
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "contrast-color",
                    "description": "Choose a contrasting foreground based on the contrast between a background and two foreground\noptions (a light and dark).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "contrast-color(rgb(233, 229, 31), rgb(199, 192, 192), rgb(133, 133, 231)) // => #8585e7"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.color",
                    "type": [
                        "mixin"
                    ],
                    "name": "color-preview-classes",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "color-preview-classes()"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "site.config",
            "items": [
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "set-config-map",
                    "description": "Sets the current configuration. This can be used when a module is loaded to ensure that settings\nare shared between modules.",
                    "parameters": [
                        {
                            "name": "config",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "function"
                    ],
                    "name": "get-config-map",
                    "description": "Gets the current configuration.",
                    "parameters": []
                },
                {
                    "group": "site.config",
                    "type": [
                        "function"
                    ],
                    "name": "get",
                    "description": "Retrieve a configuration setting.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$value: get('colors.mycolor', red);"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "paths",
                            "type": "string or list",
                            "description": "The path (string) or list of paths (list) where the setting should\nbe found. Each path is one or more keys separated by colons (e.g. 'colors:accent' would find the\nvalue accent in the colors map). If a list of strings is provided, they will searched in order\nand the first non-null value will be returned."
                        },
                        {
                            "name": "fallback",
                            "type": "*",
                            "default": "null",
                            "description": "The value to return if the path doesn't exist."
                        },
                        {
                            "name": "throw-not-found",
                            "type": "*",
                            "default": "null",
                            "description": "Whether to throw an errow if the value can't be retrieved"
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "function"
                    ],
                    "name": "if-null-get",
                    "description": "Retrieve a configuration setting if and only if the provided $value is null.",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "string or list",
                            "description": "The value to check for null"
                        },
                        {
                            "name": "paths",
                            "type": "string or list",
                            "description": "Path for the value to retrieve if $value is null (see details for get())"
                        },
                        {
                            "name": "throw-not-found",
                            "type": "*",
                            "default": "null",
                            "description": "Whether to throw an errow if the value can't be retrieved"
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "config",
                    "description": "Add a configuration setting.",
                    "parameters": [
                        {
                            "name": "path",
                            "type": "*",
                            "description": "The path of the setting with keys separated by colons (e.g.\n'colors:accent' would set the value accent in the colors map)."
                        },
                        {
                            "name": "val",
                            "type": "*",
                            "default": "null",
                            "description": "The value to be added."
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "default",
                    "description": "Add a default configuration setting (provides the same functionality as config, but will not\noverwrite an existing setting).",
                    "parameters": [
                        {
                            "name": "path",
                            "type": "*",
                            "description": "The path of the setting with keys separated by colons (e.g. 'colors.accent'\nwould set the value accent in the colors map)."
                        },
                        {
                            "name": "val",
                            "type": "*",
                            "default": "null",
                            "description": "The value to be added."
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "defaults",
                    "description": "Set multiple defaults using a map where the key is the path and the value is the default value.",
                    "parameters": [
                        {
                            "name": "defaults",
                            "type": "map",
                            "description": "A map of paths and default values."
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "scoped-config",
                    "description": "Handles the unique scenario of isolating an \"instance\" of px-styles from other configurations.\npx-styles can be reinitialized within the content block of this mixin without effecting other\nglobal configurations. This is pretty experimental and could have side effects. Use with caution\nfor now.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "\n// configure px with a blue accent and initialize\n@include config('colors.accent', blue);\n@include init();\n\n.px-og-class1 {\n    /* should be blue */\n    color: accent();\n}\n\n@include scoped-config() {\n     configure px with a green accent and initialize\n    @include config('colors:accent', green);\n    @include init();\n    .px-scope-class {\n        /* should be green */\n        color: accent();\n    }\n}\n\n.px-og-class2 {\n    /* should be blue */\n    color: accent();\n}"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "site.darkmode",
            "items": [
                {
                    "group": "site.darkmode",
                    "type": [
                        "function"
                    ],
                    "name": "clr-dark",
                    "description": "Wrapper for clr with the defalt tag set to dark.",
                    "parameters": [
                        {
                            "name": "name",
                            "type": "*",
                            "description": "The name of the color to be retrieved"
                        },
                        {
                            "name": "shade",
                            "type": "*",
                            "default": "0",
                            "description": "The shade to be applied to the color"
                        },
                        {
                            "name": "alpha",
                            "type": "*",
                            "default": "1",
                            "description": "The alpha value of the color"
                        },
                        {
                            "name": "tag",
                            "type": "*",
                            "default": "dark",
                            "description": "The tag of the color (this is used to select the correct color from a list)"
                        },
                        {
                            "name": "darkify",
                            "type": "*",
                            "default": "true",
                            "description": "If the color should be darkified when a dark version hasn't been defined"
                        }
                    ]
                },
                {
                    "group": "site.darkmode",
                    "type": [
                        "function"
                    ],
                    "name": "darkify",
                    "description": "Create a darkmode version of the color based on the background color and saturation. NOTE: this needs to be refined.",
                    "parameters": [
                        {
                            "name": "color",
                            "type": "*",
                            "description": "The color to be darkified"
                        },
                        {
                            "name": "bg",
                            "type": "*",
                            "default": "#222",
                            "description": "The dark background color that color will be placed on"
                        }
                    ]
                },
                {
                    "group": "site.darkmode",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-dark",
                    "description": "Creates a media query (or custom selector) that targets dark mode. Custom selector can be\nconfigured using the setting darkmode.selector.",
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "site.grid",
            "items": [
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "table-grid",
                    "description": "Create a CSS grid that mimics a table where columns are specified and rows are added as needed.",
                    "example": [
                        {
                            "type": "include",
                            "code": "display: grid;\ngrid-template-columns: 4;\ngrid-template-rows: auto;\ngrid-auto-rows: auto;\ngrid-gap: 10px;",
                            "description": "table-grid(4, auto, 10px); // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "columns",
                            "type": "column definitions",
                            "description": "Column definitions"
                        },
                        {
                            "name": "row-height",
                            "type": "row definition",
                            "default": "auto",
                            "description": "The height of each row"
                        },
                        {
                            "name": "gap",
                            "type": "number",
                            "default": "8px",
                            "description": "The gap between items"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "item-grid",
                    "description": "Create a css grid with repeating item (min/max width) and fixed height that autoflows (wraps)\nand fills the entire row. Use this, for example, to create a grid of cards or someting along\nthose lines.",
                    "example": [
                        {
                            "type": "item",
                            "code": "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(10px, 50px));\ngrid-auto-rows: auto;\ngrid-gap: 24px;",
                            "description": "grid(10px, 50px) // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "item-min-width",
                            "type": "*",
                            "description": "Minimum width of the item"
                        },
                        {
                            "name": "item-max-width",
                            "type": "*",
                            "description": "Maximum width of the item"
                        },
                        {
                            "name": "item-height",
                            "type": "*",
                            "default": "auto",
                            "description": "The item height"
                        },
                        {
                            "name": "gap",
                            "type": "*",
                            "default": "24px",
                            "description": "The gap between items"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "card-grid-max-row",
                    "description": "Creates a grid layout that can be used for card-like content where we limit the number of cards\nto a max number per row and a minimum size. Cards will grow indefinitely in size once the\nmaximum number per row has been reached.",
                    "parameters": [
                        {
                            "name": "card-max-per-row",
                            "type": "*",
                            "default": "4",
                            "description": "The maximum number of cards in the row"
                        },
                        {
                            "name": "card-min-width",
                            "type": "*",
                            "default": "240px",
                            "description": "The minimum size of a card"
                        },
                        {
                            "name": "gap",
                            "type": "*",
                            "default": "24px",
                            "description": "Gap between cards (using grid-gap)"
                        },
                        {
                            "name": "card-height",
                            "type": "*",
                            "default": "auto",
                            "description": "The card height (leave as auto if using aspect or another mechanism to determine height)"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "grid-art",
                    "description": "Mixes definitions for grid columns, rows and areas into a single visual syntax that is easy to\nunderstand and visualize. The first row represents column size and the last column represents\nrow sizing.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include grid-art((\n  'minmax(250px, 20vw) | auto    |       ',\n  'header              | header  |  auto ',\n  'sidebar             | main    | 1fr   ',\n  'footer              | footer  | auto  '\n));"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "grid",
                            "type": "*",
                            "description": "The grid definition (see example)"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "grid-art-bem",
                    "description": "Offers the same functionality as the grid-art mixin, but also creates classes for each area in\nthe grid using the BEM naming convention",
                    "parameters": [
                        {
                            "name": "grid",
                            "type": "*",
                            "description": "The grid definition (see example)"
                        },
                        {
                            "name": "prefix",
                            "type": "*",
                            "default": "'&__'",
                            "description": "The prefix applied to the beginning of the area names"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "function"
                    ],
                    "name": "grid-art-area-names",
                    "description": "Gets the unique names of all the areas in the grid.",
                    "parameters": []
                },
                {
                    "group": "site.grid",
                    "type": [
                        "function"
                    ],
                    "name": "grid-art-spans",
                    "description": "Convert a named grid area to the grid-line syntax (e.g. 2 / 1 / 2 / 4).",
                    "parameters": [
                        {
                            "name": "grid",
                            "type": "*",
                            "description": "A variable that represents the grid-art format of the grid."
                        },
                        {
                            "name": "area-name",
                            "type": "*",
                            "description": "The name of the area that should be converted to lines"
                        },
                        {
                            "name": "separator",
                            "type": "*",
                            "default": "' / '",
                            "description": "The separator that should be used between the lines (use false or null to get a list back)"
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "site.mediaquery",
            "items": [
                {
                    "group": "site.mediaquery",
                    "type": [
                        "function"
                    ],
                    "name": "get-breakpoint",
                    "description": "Get a breakpoint by name. If an number value is provided, that number will\nbe returned.",
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
                    "parameters": [
                        {
                            "name": "break",
                            "type": "String | Length",
                            "description": "The name of the breakpoint or a number that\nwill be returned"
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-until",
                    "description": "Creates a media query that applies for all browser widths **smaller** than\nthe provided breakpoint.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Note that media-until rules should be ordered largest to smallest\n\n@include media-until(md) { background: green } // => @media screen and (max-width: 1366px) {.class {background: green;}}\n@include media-until(sm) { ... } // => @media screen and (max-width: 1024px) { ... }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "break",
                            "type": "String | Length",
                            "description": "The breakpoint for the generated media\nquery. Use a string for a named site breakpoint or a length."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-after",
                    "description": "Creates a media query that applies for all browser widths **larger** than\nthe provided breakpoint.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Note that media-afters rules should be ordered smallest to largest\n\n@include media-after(sm) { background: blue } // => @media screen and (max-width: 768px) { background: blue }\n@include media-after(md) { ... } // => @media screen and (max-width: 1024px) { ... }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "break",
                            "type": "String | Length",
                            "description": "The breakpoint for the generated media\nquery. Use a string for a named site breakpoint or a length."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-between",
                    "description": "Creates a media query that applies for all browser widths between the $break-from and $break-to\nbreakpoints.",
                    "example": [
                        {
                            "type": "include",
                            "code": "(max-width: 1024px) { background: gray }",
                            "description": "media-between(sm, md) { background: gray } // => @media screen and (min-width: 768px) and"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "break-from",
                            "type": "String | Length",
                            "description": "The lower limit breakpoint for the generated media query.\nUse a string for a named site breakpoint or a length."
                        },
                        {
                            "name": "break-to",
                            "type": "String | Length",
                            "description": "The upper limit breakpoint for the generated media query. Use\na string for a named site breakpoint or a length."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-until-height",
                    "description": "Creates a media query that applies for all browser heights **smaller** than\nthe provided size.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-until-height(sm) { ... } // => @media screen and (max-height: sm) { background: grey }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "size",
                            "type": "Length",
                            "description": "The size for the generated media query."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-after-height",
                    "description": "Creates a media query that applies for all browser heights **larger** than\nthe provided size.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-after-height(sm) { background: yellow } // => @media screen and (min-height: sm) { background: yellow }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "size",
                            "type": "Length",
                            "description": "The size for the generated media query."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-between-height",
                    "description": "Creates a media query that applies for all browser heights between the two provided sizes.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-between-height(sm, md) { ... } // => @media screen and (min-height: sm) and (max-height: md) { ... }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "size-from",
                            "type": "Length",
                            "description": "The lower limit size for the generated media query."
                        },
                        {
                            "name": "size-to",
                            "type": "Length",
                            "description": "The upper limit size for the generated media query."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-until-mobile",
                    "description": "A convenience mixin that is equivalent to media-until($mobile-breakpoint).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-until-mobile() {color: red}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-after-mobile",
                    "description": "A convenience mixin that is equivalent to media-after($mobile-breakpoint).",
                    "parameters": []
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "function"
                    ],
                    "name": "breakpoints-asc",
                    "description": "Returns a sorted list of site breakpoints from smallest to largest",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// => (xs: 640px, mobile: 768px, sm: 1024px, md: 1366px, lg: 1600px, xl: 1920px)"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "function"
                    ],
                    "name": "breakpoints-desc",
                    "description": "Returns a sorted list of site breakpoints from largest to smallest",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// => (xl: 1920px, lg: 1600px, md: 1366px, sm: 1024px, mobile: 768px, xs: 640px)"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-breakpoint-vars",
                    "description": "Generates css variables that update according to the current breakpoint. These can be accessed from\nJavaScript with code like this:\n```javascript\n    window.addEventListener('resize', () => {\n        let breakpoint = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint').trim();\n        document.querySelector('.js span').innerHTML = breakpoint;\n    });\n```",
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "site.misc",
            "items": [
                {
                    "group": "site.misc",
                    "type": [
                        "function"
                    ],
                    "name": "scale-vw",
                    "description": "Creates a css clamp value that scales in vw units from $min to $max. The vw value is calculated\nsuch that it will have the $max value when the screen is $at-width wide.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "font-size: scale-vw(18px, 36px, 1200px) => font-size: clamp(18px, 3vw, 36px)"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.misc",
                    "type": [
                        "function"
                    ],
                    "name": "scale-vh",
                    "description": "Creates a css clamp value that scales in vh units from $min to $max. The vh value is calculated\nsuch that it will have the $max value when the screen is $at-height height.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "font-size: scale-vw(18px, 36px, 1200px) => font-size: clamp(18px, 3vh, 36px)"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "container",
                    "description": "Creates a standardized container based on site container settings.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include container();"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "link",
                    "description": "Creates a standardized link based on site settings",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include link();"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "site.rems",
            "items": [
                {
                    "group": "site.rems",
                    "type": [
                        "function"
                    ],
                    "name": "rems",
                    "description": "Convert px to rem for a given base font size (the font size of the document root element)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "rems(1.5px) => 0.1rem;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.rems",
                    "type": [
                        "function"
                    ],
                    "name": "px",
                    "description": "Convert rem to px for a given base font size (the font size of the document root element)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "px(1.3rem, 10px) => 13px"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "site.variables",
            "items": [
                {
                    "group": "site.variables",
                    "type": [
                        "mixin"
                    ],
                    "name": "css-vars",
                    "description": "Generic mixin that takes a map of variables and outputs them as css variables.",
                    "parameters": [
                        {
                            "name": "vars",
                            "type": "*",
                            "description": "A map containing value pairs which will be output as css variables. Any color\nvariable that ends with -hsla will will also get h/s/l/a component variables."
                        }
                    ]
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "hsl-var",
                    "description": "Function that produces an adjusted color value using hsla syntax for hsla variables. For a given\nvalue of $name, it expects the following variables to be defined:\n\n    $--$name (the base color)\n    $--$name-h (the hue component)\n    $--$name-s (the saturation component)\n    $--$name-l (the lightness component)\n\nThese variables can be defined using the hsl-var-def mixin. T",
                    "example": [
                        {
                            "type": "scss",
                            "code": "background: hsl-var('primary', $alpha: 0.5, $s-adj: 10%, $l-adj: -10%);"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "mixin"
                    ],
                    "name": "site-vars",
                    "description": "Outputs configured site variables as css variables. Intended to be used to established variables\ntypically once per page or site.\n\nSo here's a what a typical config might look like:\n\n```scss\n@@use 'variables' as * with (\n    $-config: (\n        vars-prefix: 'theme',\n        vars: (\n            page-bg-hsla: white,\n            page-fg-hsla: black,\n            green-hsla: (\n                base: green,\n                dark: lightgreen,\n            ),\n            orange-rgb: (\n                base: rgb(208, 122, 18),\n                dark: rgb(247, 196, 133),\n            )\n        )\n    )\n);\n```\n\nNote that you can also set $-vars-prefix and $-vars directly in the use definition instead of using $-config.\n\nThen you can use the mixin to output the variables like this:\n\n```scss\n.body {\n   // light mode\n   @include site-vars();\n\n    // dark mode\n    @media (prefers-color-scheme: dark) {\n        @include site-vars('dark');\n    }\n}\n```\n\nAnd finally you can access a variable like this:\n\n```css\n.selector {\n    color: site-var('page-fg');\n}\n```",
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "site-var-exists",
                    "description": "Returns true of the given varianble exists in site variables. It's aware of the fact that a\nvalid variable may have been defined / as a color with hsla and rgb components.",
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "site-var",
                    "description": "Produces css variable syntax for a site variable. Verifies that the variable exists and produces\na warning if not found.",
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "site-var-hsla",
                    "description": "Produces css variable syntax for an hsla variable and can produce the relative complex syntax\nrequired to adjust alhpa and hsla components.",
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "site-var-rgb",
                    "description": "Produces css variable syntax for an rgb variable including an adjust alpha value.",
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "modules.atoms",
            "items": [
                {
                    "group": "modules.atoms",
                    "type": [
                        "mixin"
                    ],
                    "name": "atoms-flex",
                    "description": "Generate atomic classes for flexbox. Full list of classes:\n\n| Class | Equivalent Css |\n| ----- | -------------- |\n| .flex | display: flex; |\n| .flex-inline | display: inline-flex; |\n| .flex-row | flex-direction: row; |\n| .flex-row-reverse | flex-direction: row-reverse; |\n| .flex-column | flex-direction: column; |\n| .flex-column-reverse | flex-direction: column-reverse; |\n| .flex-wrap | flex-wrap: wrap; |\n| .flex-wrap-column | flex-wrap: wrap; flex-direction: column; |\n| .flex-wrap-reverse | flex-wrap: wrap-reverse; |\n| .flex-nowrap | flex-wrap: nowrap; |\n| .flex-auto | flex: 1 1 auto; |\n| .flex-none | flex: none; |\n| .flex-grow-[0...4] | flex-grow: [0...4] |\n| .flex-shrink-[0...4] | flex-shrink: [0...4]; |\n| .items-start | align-items: flex-start; |\n| .items-end | align-items: flex-end; |\n| .items-center | align-items: center; |\n| .items-baseline | align-items: baseline; |\n| .items-stretch | align-items: stretch; |\n| .justify-start | justify-content: flex-start; |\n| .justify-end | justify-content: flex-end; |\n| .justify-center | justify-content: center; |\n| .justify-between | justify-content: space-between; |\n| .justify-around | justify-content: space-around; |\n| .justify-stretch | justify-content: stretch; |\n| .self-start | align-self: flex-start; |\n| .self-end | align-self: flex-end; |\n| .self-center | align-self: center; |\n| .self-baseline | align-self: baseline; |\n| .self-stretch | align-self: stretch; |\n| .order-[0...9] | order: [0...9]; |\n| .order-first | order: -99999; |\n| .order-last | order: 99999; |\n| .flex-center | display: flex; align-items: center; |",
                    "example": [
                        {
                            "type": "include",
                            "code": ".classNameflex {\ndisplay: flex;\n}",
                            "description": "atoms-flex('className') // (results limited to only first in list) =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "prefix",
                            "type": "*",
                            "default": "''",
                            "description": "A prefix that can be applied to each of the classes\ngenerated by the mixin."
                        }
                    ]
                },
                {
                    "group": "modules.atoms",
                    "type": [
                        "mixin"
                    ],
                    "name": "atoms-spacers",
                    "description": "Generate atomic classes for margin and padding. Full list of classes:",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include atoms-spacers(12px) // => lots of classes"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "modules.boilerplate",
            "items": [
                {
                    "group": "modules.boilerplate",
                    "type": [
                        "mixin"
                    ],
                    "name": "boilerplate",
                    "description": "Generates boilerplate css for a site. Generally this only needs to be called once as part of the\nsite's global css. Many components and styles have a soft dependency on this (e.g. may expect\nthat a reset has been applied, etc.). This mixin relies on some shared settings from the site\nmodule, so it should be included after that module.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// This is probably the most common usage. For post parameters the default\n// values will make sense but you'll often want to provide font definitions\n// and the syntax is a little complex.\n\n@include boilerplate( $fonts: (\n\n    // google font\n    Inter: (googleFont: true, weight: (400 500 700), style: normal),\n\n    // local font\n    circular:\n        (\n            (src: '../assets/fonts/circular', weight: 400, style: normal, exts: woff2 woff ttf),\n            (src: '../assets/fonts/circular-bold', weight: 700, style: normal, exts: woff2 woff ttf )\n        ),\n    )\n\n);"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "scoped",
                            "type": "*",
                            "default": "false",
                            "description": "If true we generate all rules directly within the provides scope rather than use the :root selector."
                        },
                        {
                            "name": "sanitize",
                            "type": "*",
                            "default": "true",
                            "description": "If true, include the sanitize general site reset."
                        },
                        {
                            "name": "reset",
                            "type": "*",
                            "default": "(link,button,lists,headings,paragraph)",
                            "description": "The list of additional resets to include."
                        },
                        {
                            "name": "fonts",
                            "type": "*",
                            "default": "()",
                            "description": "The list of fonts to be loaded."
                        },
                        {
                            "name": "type-styles",
                            "type": "*",
                            "default": "null",
                            "description": "A map containing a set of type styles where the key is the name and the value is the style. Leave null to use the default config. Set to false to skip."
                        },
                        {
                            "name": "code-style",
                            "type": "*",
                            "default": "'code'",
                            "description": "A type-style to apply to code and pre elements (must be contained in the $type-styles map). Set to false to skip."
                        },
                        {
                            "name": "link-selector",
                            "type": "*",
                            "default": "'.link'",
                            "description": "A selector to use for generated .link style to. Set to false to skip."
                        },
                        {
                            "name": "container-selector",
                            "type": "*",
                            "default": "'.container'",
                            "description": "A selector to use for a generated container style to. Set to false to skip."
                        },
                        {
                            "name": "button-selector",
                            "type": "*",
                            "default": "'.button'",
                            "description": "A selector to use for a generated button style. Set to false to skip."
                        },
                        {
                            "name": "hide-selector",
                            "type": "*",
                            "default": "'.visually-hidden'",
                            "description": "A selector to use for a generated style that hides things visually but allows them to stay visible for screen readers. Set to false to skip."
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "modules.controls",
            "items": [
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "button",
                    "description": "Generates a button style based on the site's button settings. The default button is pretty\nopinionated. All sizing is in ems (so setting the font size will scale the button). See the\nsource for more details.\n\nDefaults can be configured with the key 'controls.button'.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$button: button((background-color: green))"
                        },
                        {
                            "type": "scss",
                            "code": "@include button() => creates a standard, default button"
                        },
                        {
                            "type": "scss",
                            "code": "@include button((font-size: 12px)) => creates a smaller button with a font-size of 12px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "map",
                            "default": "()",
                            "description": "A map containing css key / value pairs. Just about any css is valid\n(currently transitions can't be overriden) including supported state specific values (see\ndefaults in css-map). If background or background-color is set, it will be adapted for other\nstates unless also override for those states"
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "button-outline",
                    "description": "Generates a (somewhat opinionated) outlined button style based on the site's control / button\nsettings. Behaves a lot like the `button` mixin so see that for more detail. Global config with\n'controls.button' and 'controls.button-outline'.",
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
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "map",
                            "default": "()",
                            "description": "A map containing css key/value pairs. Just about any css is valid\n(currently transitions can't be overriden) including supported state specific values: hover,\nactive, disabled. The outline color is derived from the border color. The properties\nborder-color and color can be specified as shades (numbers relative to the border-color or\nprimary accent color)."
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "button-icon",
                    "description": "Generates a simple button with very little styling that can be used to wrap an icon or text with\nbasic transitions for hover and active.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include button-icon() => creates a button that can wrap an icon"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "map",
                            "default": "()",
                            "description": "A map containing css key/value pairs."
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "control-reset",
                    "description": "Resets the appearance of controls with some opinionated defaults (see source or\noutput for details). Typically used as part of restyling a component.",
                    "parameters": []
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "control-reset-hard",
                    "description": "Resets the style of control much more aggressively than regular control-reset. Really cleans\nthings out!",
                    "parameters": []
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "get-control-accent",
                    "description": "Extract an accent color from any of the properties in $accent-props, with a fallback value of\n'controlsaccent' (note: last property in list wins)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-control-accent()"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "accent-props...",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "{$accent",
                            "type": "*",
                            "default": "get('controls.accent'",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "control-focus-style",
                    "description": "Generates one of a number of common focus styles as a css map (which can be combined with the\ncss-map function to generate the correct focus visual css)",
                    "example": [
                        {
                            "type": "control",
                            "code": "red)",
                            "description": "focus-style('outline', red) // => (outline-offset: 0px, outline: 1px dashed"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "style",
                            "type": "shadow | outline",
                            "description": "A named style."
                        },
                        {
                            "name": "color",
                            "type": "color",
                            "default": "null",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "control-placeholder-style",
                    "description": "Generates a css map for a control's placeholder style based on the global config.",
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "map",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "mixin"
                    ],
                    "name": "toggle-helper",
                    "description": "Mixin to help create toggle components (checkbox, radiobutton, toggle, togglebutton, etc.) using\nthe common input+label structure. The basic idea behind this pattern is to use an <input> and a\n<label> component together as follows:\n\n```html\n<div class=\"my-checkbox\">\n    <input type=\"checkbox\" id=\"cb\" />\n    <label for=\"cb\">Toggle Me</label>\n</div>\n```\n\nThe label and input are bound together by the for property on the label (which refers to the\ninput by id), making the label a proxy for the input. The label can be styled much more readily\nthan the input, so the common practice is to hide the input and style the label but the css\nrules that allow us to manage states in this situation can be difficult to remember and can be a\nlittle complex. This mixin helps to generate those rules.",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".my-toggle {\n\n    // do the basic setup (hide inputs, etc.)\n    @include toggle-helper(base);\n\n    @include toggle-helper {\n        // default state\n    }\n    @include toggle-helper(checked) {\n        // checked state\n    }\n    @include toggle-helper(hover) {\n        // hover state\n    }\n}"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "state",
                            "type": "string",
                            "default": "null",
                            "description": "The name of the state (e.g. hover, checked, indeterminate, etc.) under\nwhich the css in the @content area should apply. The mixin will generate the appropriate rule\nfor that state."
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "mixin"
                    ],
                    "name": "scrollbar",
                    "description": "Customize the appearance of a scrollbar. Good support in modern webkit and chromium based\nbrowsers. Has the effect of making scrollbars always visible even if the operating system would\nnormally hide them. There is no way to make the track full transparent. Set $nested to false if\napply to all scrollbars (this will remove the parent join).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include scrollbar(100%, blue)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "size",
                            "type": "*",
                            "description": "The overall width of the scrollbar"
                        },
                        {
                            "name": "color",
                            "type": "*",
                            "description": "The color of the scrollbar thumb (and background is derived from this if not\nprovided)"
                        },
                        {
                            "name": "radius",
                            "type": "*",
                            "default": "0",
                            "description": "The border radius of the scrollbar thumb"
                        },
                        {
                            "name": "background",
                            "type": "*",
                            "default": "null",
                            "description": "The color of the scrollbar track area (defaults to $color mixed\nwith 50% white if not provided)"
                        },
                        {
                            "name": "padding",
                            "type": "*",
                            "default": "null",
                            "description": "Padding around the scrollbar thumb (created artificially with a hack\nsince this isn't supported by the css)"
                        },
                        {
                            "name": "nested",
                            "type": "true",
                            "default": "null",
                            "description": "Set to false if this is using outside of a parent selector (to\napply to all scrollbars)."
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "modules.highlightjs",
            "items": [],
            "config": [
                {
                    "group": "modules.highlightjs",
                    "key": "highlightjs.colors",
                    "description": "Default colors for syntax highlighting using highlight.js",
                    "default": "(\n    fg: #abb2bf,\n    bg: #282c34,\n    comment: #7f848e,\n    keyword: #c678dd,\n    name: #e06c75,\n    literal: #56b6c2,\n    symbol: #61aeee,\n    string: #98c379,\n    variable: #d19a66,\n    class: #e6c07b,\n)"
                }
            ]
        },
        {
            "name": "modules.json",
            "items": [
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "encode",
                    "description": "Encode any sass value as a JSON-ready string.",
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": "The scss data to be encoded for JSON exporting"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "encode-list",
                    "description": "Encode each item in a Sass list, and convert to a JSON-ready\nsquare-bracketed array.",
                    "parameters": [
                        {
                            "name": "list",
                            "type": "list",
                            "description": "List to be encoded for JSON exporting"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "encode-map",
                    "description": "Encode each key/value in a Sass map, and convert to a JSON-ready object.",
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "Map to be encoded for JSON exporting"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "encode-number",
                    "description": "Encode a number for JSON, adding proof-quotes for length values.",
                    "parameters": [
                        {
                            "name": "number",
                            "type": "number",
                            "description": "Number to be encoded for JSON exporting"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "quotes",
                    "description": "Convert any value to a double-quoted string.",
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": "The value to inspect and quote."
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "escape-quotes",
                    "description": "Return a string, with internal quotes escaped.",
                    "parameters": [
                        {
                            "name": "string",
                            "type": "string",
                            "description": "The string to be manipulated"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "escape-backslashes",
                    "description": "Return a string, with internal backslashes escaped.",
                    "parameters": [
                        {
                            "name": "string",
                            "type": "string",
                            "description": "The string to be manipulated"
                        }
                    ]
                }
            ],
            "config": []
        },
        {
            "name": "modules.reading",
            "items": [
                {
                    "group": "modules.reading",
                    "type": [
                        "mixin"
                    ],
                    "name": "reading",
                    "description": "Most of pxstyles is oriented around building UI. Use this mixin to reintroduce styles optimized\nfor \"readable\" content, e.g. standard HTML that should be formatted to be read.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include reading()"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": [
                {
                    "group": "modules.reading",
                    "key": "reading.base",
                    "description": "Font weight for <strong> text",
                    "default": "(\n    font-family: inherit,\n    font-size: inherit,\n    font-weight: inherit,\n    line-height: inherit,\n    color: inherit,\n)"
                },
                {
                    "group": "modules.reading",
                    "key": "reading.font-weight-strong",
                    "description": "Vertical spacing between block elements (set as a margin-bottom) in reading content",
                    "default": "600"
                },
                {
                    "group": "modules.reading",
                    "key": "reading.block-spacing",
                    "description": "Left padding for lists",
                    "default": "1em"
                },
                {
                    "group": "modules.reading",
                    "key": "reading.list-padding",
                    "description": "Left padding for list items",
                    "default": "1.25em"
                },
                {
                    "group": "modules.reading",
                    "key": "reading.list-item-padding",
                    "description": "Vertical spacing between list items",
                    "default": "0.25em"
                },
                {
                    "group": "modules.reading",
                    "key": "reading.list-item-spacing",
                    "description": "Link styles in reading content",
                    "default": "0.25em"
                },
                {
                    "group": "modules.reading",
                    "key": "reading.links",
                    "description": "Set of type styles for reading content",
                    "default": "flat-merge(\n    get('links'),\n    (\n        text-decoration: underline,\n)"
                },
                {
                    "group": "modules.reading",
                    "key": "reading.styles",
                    "description": "Set of type styles for reading content",
                    "default": "(\n    heading: type-style('heading'),\n    'h1': (\n        font-size: fs(5),\n        __base: heading,\n        __selector: 'h1, .h1',\n    ),\n    'h2': (\n        font-size: fs(4),\n        __selector: 'h2, .h2',\n        __base: heading,\n    ),\n    'h3': (\n        font-size: fs(3),\n        __selector: 'h3, .h3',\n        __base: heading,\n    ),\n    'h4': (\n        font-size: fs(2),\n        __selector: 'h4, .h4',\n        __base: heading,\n    ),\n    'h5': (\n        font-size: fs(1),\n        __selector: 'h5, .h5',\n        __base: heading,\n    ),\n)"
                }
            ]
        },
        {
            "name": "modules.sanitize",
            "items": [
                {
                    "group": "modules.sanitize",
                    "type": [
                        "mixin"
                    ],
                    "name": "sanitize",
                    "description": "Outputs a modified version of [sanitize.css](https://csstools.github.io/sanitize.css/).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include sanitize()"
                        }
                    ],
                    "parameters": []
                }
            ],
            "config": []
        },
        {
            "name": "modules.typography",
            "items": [
                {
                    "group": "modules.typography",
                    "type": [
                        "function"
                    ],
                    "name": "fs",
                    "description": "Get a font-size by name from the default typescale",
                    "example": [
                        {
                            "type": "scss",
                            "code": "config(typescale, (sm: 14px, base: 15px, lg: 18px, xl: 20px));\n\nfont-size: fs(base)   // => font-size: 15px\nfont-size: fs(sm)     // => font-size: 14px\nfont-size: fs(-1)     // => font-size: 14px\nfont-size: fs(2)      // => font-size: 20px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "name",
                            "type": "String or Number",
                            "description": "The name or offset of the size to lookup. Must be defined in the\nconfig $typescale variable."
                        }
                    ]
                }
            ],
            "config": [
                {
                    "group": "modules.typography",
                    "key": "typography.type-use-rems",
                    "description": "A map containing a set of type sizes where the key is the name and the value is the size",
                    "default": "true"
                },
                {
                    "group": "modules.typography",
                    "key": "typography.type-sizes",
                    "description": "A map containing a set of type sizes where the key is the name and the value is the size",
                    "default": "modular-scale(\n    $bases: get('font-size-base'),\n    $ratio: $typescale-default,\n    $names: (\n        'xxs',\n        'xs',\n        'sm',\n        'base',\n        'md',\n        'lg',\n        'xl',\n        'h4',\n        'h3',\n        'h2',\n        'h1',\n        'd3',\n        'd2',\n        'd1',\n    ),\n    $round: 1,\n    $rems: false,\n)"
                }
            ]
        }
    ],
    "api": [
        {
            "name": "modules.atoms",
            "api": [
                {
                    "group": "modules.atoms",
                    "type": [
                        "mixin"
                    ],
                    "name": "atoms-flex",
                    "description": "Generate atomic classes for flexbox. Full list of classes:\n\n| Class | Equivalent Css |\n| ----- | -------------- |\n| .flex | display: flex; |\n| .flex-inline | display: inline-flex; |\n| .flex-row | flex-direction: row; |\n| .flex-row-reverse | flex-direction: row-reverse; |\n| .flex-column | flex-direction: column; |\n| .flex-column-reverse | flex-direction: column-reverse; |\n| .flex-wrap | flex-wrap: wrap; |\n| .flex-wrap-column | flex-wrap: wrap; flex-direction: column; |\n| .flex-wrap-reverse | flex-wrap: wrap-reverse; |\n| .flex-nowrap | flex-wrap: nowrap; |\n| .flex-auto | flex: 1 1 auto; |\n| .flex-none | flex: none; |\n| .flex-grow-[0...4] | flex-grow: [0...4] |\n| .flex-shrink-[0...4] | flex-shrink: [0...4]; |\n| .items-start | align-items: flex-start; |\n| .items-end | align-items: flex-end; |\n| .items-center | align-items: center; |\n| .items-baseline | align-items: baseline; |\n| .items-stretch | align-items: stretch; |\n| .justify-start | justify-content: flex-start; |\n| .justify-end | justify-content: flex-end; |\n| .justify-center | justify-content: center; |\n| .justify-between | justify-content: space-between; |\n| .justify-around | justify-content: space-around; |\n| .justify-stretch | justify-content: stretch; |\n| .self-start | align-self: flex-start; |\n| .self-end | align-self: flex-end; |\n| .self-center | align-self: center; |\n| .self-baseline | align-self: baseline; |\n| .self-stretch | align-self: stretch; |\n| .order-[0...9] | order: [0...9]; |\n| .order-first | order: -99999; |\n| .order-last | order: 99999; |\n| .flex-center | display: flex; align-items: center; |",
                    "example": [
                        {
                            "type": "include",
                            "code": ".classNameflex {\ndisplay: flex;\n}",
                            "description": "atoms-flex('className') // (results limited to only first in list) =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "prefix",
                            "type": "*",
                            "default": "''",
                            "description": "A prefix that can be applied to each of the classes\ngenerated by the mixin."
                        }
                    ]
                },
                {
                    "group": "modules.atoms",
                    "type": [
                        "mixin"
                    ],
                    "name": "atoms-spacers",
                    "description": "Generate atomic classes for margin and padding. Full list of classes:",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include atoms-spacers(12px) // => lots of classes"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "modules.boilerplate",
            "api": [
                {
                    "group": "modules.boilerplate",
                    "type": [
                        "mixin"
                    ],
                    "name": "boilerplate",
                    "description": "Generates boilerplate css for a site. Generally this only needs to be called once as part of the\nsite's global css. Many components and styles have a soft dependency on this (e.g. may expect\nthat a reset has been applied, etc.). This mixin relies on some shared settings from the site\nmodule, so it should be included after that module.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// This is probably the most common usage. For post parameters the default\n// values will make sense but you'll often want to provide font definitions\n// and the syntax is a little complex.\n\n@include boilerplate( $fonts: (\n\n    // google font\n    Inter: (googleFont: true, weight: (400 500 700), style: normal),\n\n    // local font\n    circular:\n        (\n            (src: '../assets/fonts/circular', weight: 400, style: normal, exts: woff2 woff ttf),\n            (src: '../assets/fonts/circular-bold', weight: 700, style: normal, exts: woff2 woff ttf )\n        ),\n    )\n\n);"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "scoped",
                            "type": "*",
                            "default": "false",
                            "description": "If true we generate all rules directly within the provides scope rather than use the :root selector."
                        },
                        {
                            "name": "sanitize",
                            "type": "*",
                            "default": "true",
                            "description": "If true, include the sanitize general site reset."
                        },
                        {
                            "name": "reset",
                            "type": "*",
                            "default": "(link,button,lists,headings,paragraph)",
                            "description": "The list of additional resets to include."
                        },
                        {
                            "name": "fonts",
                            "type": "*",
                            "default": "()",
                            "description": "The list of fonts to be loaded."
                        },
                        {
                            "name": "type-styles",
                            "type": "*",
                            "default": "null",
                            "description": "A map containing a set of type styles where the key is the name and the value is the style. Leave null to use the default config. Set to false to skip."
                        },
                        {
                            "name": "code-style",
                            "type": "*",
                            "default": "'code'",
                            "description": "A type-style to apply to code and pre elements (must be contained in the $type-styles map). Set to false to skip."
                        },
                        {
                            "name": "link-selector",
                            "type": "*",
                            "default": "'.link'",
                            "description": "A selector to use for generated .link style to. Set to false to skip."
                        },
                        {
                            "name": "container-selector",
                            "type": "*",
                            "default": "'.container'",
                            "description": "A selector to use for a generated container style to. Set to false to skip."
                        },
                        {
                            "name": "button-selector",
                            "type": "*",
                            "default": "'.button'",
                            "description": "A selector to use for a generated button style. Set to false to skip."
                        },
                        {
                            "name": "hide-selector",
                            "type": "*",
                            "default": "'.visually-hidden'",
                            "description": "A selector to use for a generated style that hides things visually but allows them to stay visible for screen readers. Set to false to skip."
                        }
                    ]
                }
            ]
        },
        {
            "name": "modules.controls",
            "api": [
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "button",
                    "description": "Generates a button style based on the site's button settings. The default button is pretty\nopinionated. All sizing is in ems (so setting the font size will scale the button). See the\nsource for more details.\n\nDefaults can be configured with the key 'controls.button'.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$button: button((background-color: green))"
                        },
                        {
                            "type": "scss",
                            "code": "@include button() => creates a standard, default button"
                        },
                        {
                            "type": "scss",
                            "code": "@include button((font-size: 12px)) => creates a smaller button with a font-size of 12px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "map",
                            "default": "()",
                            "description": "A map containing css key / value pairs. Just about any css is valid\n(currently transitions can't be overriden) including supported state specific values (see\ndefaults in css-map). If background or background-color is set, it will be adapted for other\nstates unless also override for those states"
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "button-outline",
                    "description": "Generates a (somewhat opinionated) outlined button style based on the site's control / button\nsettings. Behaves a lot like the `button` mixin so see that for more detail. Global config with\n'controls.button' and 'controls.button-outline'.",
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
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "map",
                            "default": "()",
                            "description": "A map containing css key/value pairs. Just about any css is valid\n(currently transitions can't be overriden) including supported state specific values: hover,\nactive, disabled. The outline color is derived from the border color. The properties\nborder-color and color can be specified as shades (numbers relative to the border-color or\nprimary accent color)."
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "button-icon",
                    "description": "Generates a simple button with very little styling that can be used to wrap an icon or text with\nbasic transitions for hover and active.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include button-icon() => creates a button that can wrap an icon"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "map",
                            "default": "()",
                            "description": "A map containing css key/value pairs."
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "control-reset",
                    "description": "Resets the appearance of controls with some opinionated defaults (see source or\noutput for details). Typically used as part of restyling a component.",
                    "parameters": []
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "control-reset-hard",
                    "description": "Resets the style of control much more aggressively than regular control-reset. Really cleans\nthings out!",
                    "parameters": []
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "get-control-accent",
                    "description": "Extract an accent color from any of the properties in $accent-props, with a fallback value of\n'controlsaccent' (note: last property in list wins)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-control-accent()"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "accent-props...",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "{$accent",
                            "type": "*",
                            "default": "get('controls.accent'",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "control-focus-style",
                    "description": "Generates one of a number of common focus styles as a css map (which can be combined with the\ncss-map function to generate the correct focus visual css)",
                    "example": [
                        {
                            "type": "control",
                            "code": "red)",
                            "description": "focus-style('outline', red) // => (outline-offset: 0px, outline: 1px dashed"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "style",
                            "type": "shadow | outline",
                            "description": "A named style."
                        },
                        {
                            "name": "color",
                            "type": "color",
                            "default": "null",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "function"
                    ],
                    "name": "control-placeholder-style",
                    "description": "Generates a css map for a control's placeholder style based on the global config.",
                    "parameters": [
                        {
                            "name": "overrides",
                            "type": "map",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "mixin"
                    ],
                    "name": "toggle-helper",
                    "description": "Mixin to help create toggle components (checkbox, radiobutton, toggle, togglebutton, etc.) using\nthe common input+label structure. The basic idea behind this pattern is to use an <input> and a\n<label> component together as follows:\n\n```html\n<div class=\"my-checkbox\">\n    <input type=\"checkbox\" id=\"cb\" />\n    <label for=\"cb\">Toggle Me</label>\n</div>\n```\n\nThe label and input are bound together by the for property on the label (which refers to the\ninput by id), making the label a proxy for the input. The label can be styled much more readily\nthan the input, so the common practice is to hide the input and style the label but the css\nrules that allow us to manage states in this situation can be difficult to remember and can be a\nlittle complex. This mixin helps to generate those rules.",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".my-toggle {\n\n    // do the basic setup (hide inputs, etc.)\n    @include toggle-helper(base);\n\n    @include toggle-helper {\n        // default state\n    }\n    @include toggle-helper(checked) {\n        // checked state\n    }\n    @include toggle-helper(hover) {\n        // hover state\n    }\n}"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "state",
                            "type": "string",
                            "default": "null",
                            "description": "The name of the state (e.g. hover, checked, indeterminate, etc.) under\nwhich the css in the @content area should apply. The mixin will generate the appropriate rule\nfor that state."
                        }
                    ]
                },
                {
                    "group": "modules.controls",
                    "type": [
                        "mixin"
                    ],
                    "name": "scrollbar",
                    "description": "Customize the appearance of a scrollbar. Good support in modern webkit and chromium based\nbrowsers. Has the effect of making scrollbars always visible even if the operating system would\nnormally hide them. There is no way to make the track full transparent. Set $nested to false if\napply to all scrollbars (this will remove the parent join).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include scrollbar(100%, blue)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "size",
                            "type": "*",
                            "description": "The overall width of the scrollbar"
                        },
                        {
                            "name": "color",
                            "type": "*",
                            "description": "The color of the scrollbar thumb (and background is derived from this if not\nprovided)"
                        },
                        {
                            "name": "radius",
                            "type": "*",
                            "default": "0",
                            "description": "The border radius of the scrollbar thumb"
                        },
                        {
                            "name": "background",
                            "type": "*",
                            "default": "null",
                            "description": "The color of the scrollbar track area (defaults to $color mixed\nwith 50% white if not provided)"
                        },
                        {
                            "name": "padding",
                            "type": "*",
                            "default": "null",
                            "description": "Padding around the scrollbar thumb (created artificially with a hack\nsince this isn't supported by the css)"
                        },
                        {
                            "name": "nested",
                            "type": "true",
                            "default": "null",
                            "description": "Set to false if this is using outside of a parent selector (to\napply to all scrollbars)."
                        }
                    ]
                }
            ]
        },
        {
            "name": "modules.json",
            "api": [
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "encode",
                    "description": "Encode any sass value as a JSON-ready string.",
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": "The scss data to be encoded for JSON exporting"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "encode-list",
                    "description": "Encode each item in a Sass list, and convert to a JSON-ready\nsquare-bracketed array.",
                    "parameters": [
                        {
                            "name": "list",
                            "type": "list",
                            "description": "List to be encoded for JSON exporting"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "encode-map",
                    "description": "Encode each key/value in a Sass map, and convert to a JSON-ready object.",
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "Map to be encoded for JSON exporting"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "encode-number",
                    "description": "Encode a number for JSON, adding proof-quotes for length values.",
                    "parameters": [
                        {
                            "name": "number",
                            "type": "number",
                            "description": "Number to be encoded for JSON exporting"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "quotes",
                    "description": "Convert any value to a double-quoted string.",
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": "The value to inspect and quote."
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "escape-quotes",
                    "description": "Return a string, with internal quotes escaped.",
                    "parameters": [
                        {
                            "name": "string",
                            "type": "string",
                            "description": "The string to be manipulated"
                        }
                    ]
                },
                {
                    "group": "modules.json",
                    "type": [
                        "function"
                    ],
                    "name": "escape-backslashes",
                    "description": "Return a string, with internal backslashes escaped.",
                    "parameters": [
                        {
                            "name": "string",
                            "type": "string",
                            "description": "The string to be manipulated"
                        }
                    ]
                }
            ]
        },
        {
            "name": "modules.reading",
            "api": [
                {
                    "group": "modules.reading",
                    "type": [
                        "mixin"
                    ],
                    "name": "reading",
                    "description": "Most of pxstyles is oriented around building UI. Use this mixin to reintroduce styles optimized\nfor \"readable\" content, e.g. standard HTML that should be formatted to be read.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include reading()"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "modules.sanitize",
            "api": [
                {
                    "group": "modules.sanitize",
                    "type": [
                        "mixin"
                    ],
                    "name": "sanitize",
                    "description": "Outputs a modified version of [sanitize.css](https://csstools.github.io/sanitize.css/).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include sanitize()"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "modules.typography",
            "api": [
                {
                    "group": "modules.typography",
                    "type": [
                        "function"
                    ],
                    "name": "fs",
                    "description": "Get a font-size by name from the default typescale",
                    "example": [
                        {
                            "type": "scss",
                            "code": "config(typescale, (sm: 14px, base: 15px, lg: 18px, xl: 20px));\n\nfont-size: fs(base)   // => font-size: 15px\nfont-size: fs(sm)     // => font-size: 14px\nfont-size: fs(-1)     // => font-size: 14px\nfont-size: fs(2)      // => font-size: 20px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "name",
                            "type": "String or Number",
                            "description": "The name or offset of the size to lookup. Must be defined in the\nconfig $typescale variable."
                        }
                    ]
                }
            ]
        },
        {
            "name": "site.color",
            "api": [
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "shade",
                    "description": "Produce a shade (a lighter or darker version) of a color based on the value of $shade and an\noptional darkest to lightest shade range.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$color: shade(red, 5, null) // => #ff8080"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "color",
                            "type": "color",
                            "default": "null",
                            "description": "The color to be shaded. If not provided, it will be calculated as\nthe middle value within $shade-range."
                        },
                        {
                            "name": "shade",
                            "type": "number",
                            "default": "0",
                            "description": "The shading to be applied, as a percentage from -100% to 100% or as a\nshade value between -10, 10 (can be overriden with config(shade-steps)). 0 returns the color\nitself. Negative values make the color darker, postive values make it lighter."
                        },
                        {
                            "name": "shade-range",
                            "type": "(color, color)",
                            "default": "null",
                            "description": "The range of colors will be produced as a list\n(darkest, lightest)."
                        }
                    ]
                },
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "clr",
                    "description": "Lookup a color by name and optionally get a shade of it or apply alpha.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Add the color to the global configuration\nconfig('colors.purple', #C578DD);\n\n// Retrieve the color\nclr(purple) => #C578DD\nclr(purple, -1) => (#b16cc7)\nclr(purple, $alpha: 0.5) => (rgba(197, 120, 221, 0.5))"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "shade",
                            "type": "*",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter."
                        },
                        {
                            "name": "alpha",
                            "type": "number",
                            "default": "1",
                            "description": "The alpha value of the color to be returned. If a value other than 1\nis provided, the ooutput will be in rgba format."
                        }
                    ]
                },
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "gray",
                    "description": "Get a standardized shade of site's base gray.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "gray(2, 0.5) // => rgba(173, 179, 183, 0.5)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "shade",
                            "type": "number",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter."
                        },
                        {
                            "name": "alpha",
                            "type": "number",
                            "default": "1",
                            "description": "The alpha value of the final color that will be returned."
                        }
                    ]
                },
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "accent",
                    "description": "Get a standardized shade of the site's primary accent color",
                    "example": [
                        {
                            "type": "scss",
                            "code": "accent(2, 0.5) // => rgba(51, 173, 253, 0.5)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "shade",
                            "type": "*",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10 (can be overriden\nwith config(shade-steps)). 0 returns the color itself. Negative values make the color darker,\npostive values make it lighter."
                        },
                        {
                            "name": "alpha",
                            "type": "number",
                            "default": "1",
                            "description": "The alpha value of the color to be returned. If a value other than 1\nis provided, the output will be in rgba format."
                        }
                    ]
                },
                {
                    "group": "site.color",
                    "type": [
                        "function"
                    ],
                    "name": "contrast-color",
                    "description": "Choose a contrasting foreground based on the contrast between a background and two foreground\noptions (a light and dark).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "contrast-color(rgb(233, 229, 31), rgb(199, 192, 192), rgb(133, 133, 231)) // => #8585e7"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.color",
                    "type": [
                        "mixin"
                    ],
                    "name": "color-preview-classes",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "color-preview-classes()"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "site.config",
            "api": [
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "set-config-map",
                    "description": "Sets the current configuration. This can be used when a module is loaded to ensure that settings\nare shared between modules.",
                    "parameters": [
                        {
                            "name": "config",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "function"
                    ],
                    "name": "get-config-map",
                    "description": "Gets the current configuration.",
                    "parameters": []
                },
                {
                    "group": "site.config",
                    "type": [
                        "function"
                    ],
                    "name": "get",
                    "description": "Retrieve a configuration setting.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$value: get('colors.mycolor', red);"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "paths",
                            "type": "string or list",
                            "description": "The path (string) or list of paths (list) where the setting should\nbe found. Each path is one or more keys separated by colons (e.g. 'colors:accent' would find the\nvalue accent in the colors map). If a list of strings is provided, they will searched in order\nand the first non-null value will be returned."
                        },
                        {
                            "name": "fallback",
                            "type": "*",
                            "default": "null",
                            "description": "The value to return if the path doesn't exist."
                        },
                        {
                            "name": "throw-not-found",
                            "type": "*",
                            "default": "null",
                            "description": "Whether to throw an errow if the value can't be retrieved"
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "function"
                    ],
                    "name": "if-null-get",
                    "description": "Retrieve a configuration setting if and only if the provided $value is null.",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "string or list",
                            "description": "The value to check for null"
                        },
                        {
                            "name": "paths",
                            "type": "string or list",
                            "description": "Path for the value to retrieve if $value is null (see details for get())"
                        },
                        {
                            "name": "throw-not-found",
                            "type": "*",
                            "default": "null",
                            "description": "Whether to throw an errow if the value can't be retrieved"
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "config",
                    "description": "Add a configuration setting.",
                    "parameters": [
                        {
                            "name": "path",
                            "type": "*",
                            "description": "The path of the setting with keys separated by colons (e.g.\n'colors:accent' would set the value accent in the colors map)."
                        },
                        {
                            "name": "val",
                            "type": "*",
                            "default": "null",
                            "description": "The value to be added."
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "default",
                    "description": "Add a default configuration setting (provides the same functionality as config, but will not\noverwrite an existing setting).",
                    "parameters": [
                        {
                            "name": "path",
                            "type": "*",
                            "description": "The path of the setting with keys separated by colons (e.g. 'colors.accent'\nwould set the value accent in the colors map)."
                        },
                        {
                            "name": "val",
                            "type": "*",
                            "default": "null",
                            "description": "The value to be added."
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "defaults",
                    "description": "Set multiple defaults using a map where the key is the path and the value is the default value.",
                    "parameters": [
                        {
                            "name": "defaults",
                            "type": "map",
                            "description": "A map of paths and default values."
                        }
                    ]
                },
                {
                    "group": "site.config",
                    "type": [
                        "mixin"
                    ],
                    "name": "scoped-config",
                    "description": "Handles the unique scenario of isolating an \"instance\" of px-styles from other configurations.\npx-styles can be reinitialized within the content block of this mixin without effecting other\nglobal configurations. This is pretty experimental and could have side effects. Use with caution\nfor now.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "\n// configure px with a blue accent and initialize\n@include config('colors.accent', blue);\n@include init();\n\n.px-og-class1 {\n    /* should be blue */\n    color: accent();\n}\n\n@include scoped-config() {\n     configure px with a green accent and initialize\n    @include config('colors:accent', green);\n    @include init();\n    .px-scope-class {\n        /* should be green */\n        color: accent();\n    }\n}\n\n.px-og-class2 {\n    /* should be blue */\n    color: accent();\n}"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "site.darkmode",
            "api": [
                {
                    "group": "site.darkmode",
                    "type": [
                        "function"
                    ],
                    "name": "clr-dark",
                    "description": "Wrapper for clr with the defalt tag set to dark.",
                    "parameters": [
                        {
                            "name": "name",
                            "type": "*",
                            "description": "The name of the color to be retrieved"
                        },
                        {
                            "name": "shade",
                            "type": "*",
                            "default": "0",
                            "description": "The shade to be applied to the color"
                        },
                        {
                            "name": "alpha",
                            "type": "*",
                            "default": "1",
                            "description": "The alpha value of the color"
                        },
                        {
                            "name": "tag",
                            "type": "*",
                            "default": "dark",
                            "description": "The tag of the color (this is used to select the correct color from a list)"
                        },
                        {
                            "name": "darkify",
                            "type": "*",
                            "default": "true",
                            "description": "If the color should be darkified when a dark version hasn't been defined"
                        }
                    ]
                },
                {
                    "group": "site.darkmode",
                    "type": [
                        "function"
                    ],
                    "name": "darkify",
                    "description": "Create a darkmode version of the color based on the background color and saturation. NOTE: this needs to be refined.",
                    "parameters": [
                        {
                            "name": "color",
                            "type": "*",
                            "description": "The color to be darkified"
                        },
                        {
                            "name": "bg",
                            "type": "*",
                            "default": "#222",
                            "description": "The dark background color that color will be placed on"
                        }
                    ]
                },
                {
                    "group": "site.darkmode",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-dark",
                    "description": "Creates a media query (or custom selector) that targets dark mode. Custom selector can be\nconfigured using the setting darkmode.selector.",
                    "parameters": []
                }
            ]
        },
        {
            "name": "site.grid",
            "api": [
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "table-grid",
                    "description": "Create a CSS grid that mimics a table where columns are specified and rows are added as needed.",
                    "example": [
                        {
                            "type": "include",
                            "code": "display: grid;\ngrid-template-columns: 4;\ngrid-template-rows: auto;\ngrid-auto-rows: auto;\ngrid-gap: 10px;",
                            "description": "table-grid(4, auto, 10px); // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "columns",
                            "type": "column definitions",
                            "description": "Column definitions"
                        },
                        {
                            "name": "row-height",
                            "type": "row definition",
                            "default": "auto",
                            "description": "The height of each row"
                        },
                        {
                            "name": "gap",
                            "type": "number",
                            "default": "8px",
                            "description": "The gap between items"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "item-grid",
                    "description": "Create a css grid with repeating item (min/max width) and fixed height that autoflows (wraps)\nand fills the entire row. Use this, for example, to create a grid of cards or someting along\nthose lines.",
                    "example": [
                        {
                            "type": "item",
                            "code": "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(10px, 50px));\ngrid-auto-rows: auto;\ngrid-gap: 24px;",
                            "description": "grid(10px, 50px) // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "item-min-width",
                            "type": "*",
                            "description": "Minimum width of the item"
                        },
                        {
                            "name": "item-max-width",
                            "type": "*",
                            "description": "Maximum width of the item"
                        },
                        {
                            "name": "item-height",
                            "type": "*",
                            "default": "auto",
                            "description": "The item height"
                        },
                        {
                            "name": "gap",
                            "type": "*",
                            "default": "24px",
                            "description": "The gap between items"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "card-grid-max-row",
                    "description": "Creates a grid layout that can be used for card-like content where we limit the number of cards\nto a max number per row and a minimum size. Cards will grow indefinitely in size once the\nmaximum number per row has been reached.",
                    "parameters": [
                        {
                            "name": "card-max-per-row",
                            "type": "*",
                            "default": "4",
                            "description": "The maximum number of cards in the row"
                        },
                        {
                            "name": "card-min-width",
                            "type": "*",
                            "default": "240px",
                            "description": "The minimum size of a card"
                        },
                        {
                            "name": "gap",
                            "type": "*",
                            "default": "24px",
                            "description": "Gap between cards (using grid-gap)"
                        },
                        {
                            "name": "card-height",
                            "type": "*",
                            "default": "auto",
                            "description": "The card height (leave as auto if using aspect or another mechanism to determine height)"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "grid-art",
                    "description": "Mixes definitions for grid columns, rows and areas into a single visual syntax that is easy to\nunderstand and visualize. The first row represents column size and the last column represents\nrow sizing.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include grid-art((\n  'minmax(250px, 20vw) | auto    |       ',\n  'header              | header  |  auto ',\n  'sidebar             | main    | 1fr   ',\n  'footer              | footer  | auto  '\n));"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "grid",
                            "type": "*",
                            "description": "The grid definition (see example)"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "mixin"
                    ],
                    "name": "grid-art-bem",
                    "description": "Offers the same functionality as the grid-art mixin, but also creates classes for each area in\nthe grid using the BEM naming convention",
                    "parameters": [
                        {
                            "name": "grid",
                            "type": "*",
                            "description": "The grid definition (see example)"
                        },
                        {
                            "name": "prefix",
                            "type": "*",
                            "default": "'&__'",
                            "description": "The prefix applied to the beginning of the area names"
                        }
                    ]
                },
                {
                    "group": "site.grid",
                    "type": [
                        "function"
                    ],
                    "name": "grid-art-area-names",
                    "description": "Gets the unique names of all the areas in the grid.",
                    "parameters": []
                },
                {
                    "group": "site.grid",
                    "type": [
                        "function"
                    ],
                    "name": "grid-art-spans",
                    "description": "Convert a named grid area to the grid-line syntax (e.g. 2 / 1 / 2 / 4).",
                    "parameters": [
                        {
                            "name": "grid",
                            "type": "*",
                            "description": "A variable that represents the grid-art format of the grid."
                        },
                        {
                            "name": "area-name",
                            "type": "*",
                            "description": "The name of the area that should be converted to lines"
                        },
                        {
                            "name": "separator",
                            "type": "*",
                            "default": "' / '",
                            "description": "The separator that should be used between the lines (use false or null to get a list back)"
                        }
                    ]
                }
            ]
        },
        {
            "name": "site.mediaquery",
            "api": [
                {
                    "group": "site.mediaquery",
                    "type": [
                        "function"
                    ],
                    "name": "get-breakpoint",
                    "description": "Get a breakpoint by name. If an number value is provided, that number will\nbe returned.",
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
                    "parameters": [
                        {
                            "name": "break",
                            "type": "String | Length",
                            "description": "The name of the breakpoint or a number that\nwill be returned"
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-until",
                    "description": "Creates a media query that applies for all browser widths **smaller** than\nthe provided breakpoint.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Note that media-until rules should be ordered largest to smallest\n\n@include media-until(md) { background: green } // => @media screen and (max-width: 1366px) {.class {background: green;}}\n@include media-until(sm) { ... } // => @media screen and (max-width: 1024px) { ... }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "break",
                            "type": "String | Length",
                            "description": "The breakpoint for the generated media\nquery. Use a string for a named site breakpoint or a length."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-after",
                    "description": "Creates a media query that applies for all browser widths **larger** than\nthe provided breakpoint.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Note that media-afters rules should be ordered smallest to largest\n\n@include media-after(sm) { background: blue } // => @media screen and (max-width: 768px) { background: blue }\n@include media-after(md) { ... } // => @media screen and (max-width: 1024px) { ... }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "break",
                            "type": "String | Length",
                            "description": "The breakpoint for the generated media\nquery. Use a string for a named site breakpoint or a length."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-between",
                    "description": "Creates a media query that applies for all browser widths between the $break-from and $break-to\nbreakpoints.",
                    "example": [
                        {
                            "type": "include",
                            "code": "(max-width: 1024px) { background: gray }",
                            "description": "media-between(sm, md) { background: gray } // => @media screen and (min-width: 768px) and"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "break-from",
                            "type": "String | Length",
                            "description": "The lower limit breakpoint for the generated media query.\nUse a string for a named site breakpoint or a length."
                        },
                        {
                            "name": "break-to",
                            "type": "String | Length",
                            "description": "The upper limit breakpoint for the generated media query. Use\na string for a named site breakpoint or a length."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-until-height",
                    "description": "Creates a media query that applies for all browser heights **smaller** than\nthe provided size.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-until-height(sm) { ... } // => @media screen and (max-height: sm) { background: grey }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "size",
                            "type": "Length",
                            "description": "The size for the generated media query."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-after-height",
                    "description": "Creates a media query that applies for all browser heights **larger** than\nthe provided size.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-after-height(sm) { background: yellow } // => @media screen and (min-height: sm) { background: yellow }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "size",
                            "type": "Length",
                            "description": "The size for the generated media query."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-between-height",
                    "description": "Creates a media query that applies for all browser heights between the two provided sizes.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-between-height(sm, md) { ... } // => @media screen and (min-height: sm) and (max-height: md) { ... }"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "size-from",
                            "type": "Length",
                            "description": "The lower limit size for the generated media query."
                        },
                        {
                            "name": "size-to",
                            "type": "Length",
                            "description": "The upper limit size for the generated media query."
                        }
                    ]
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-until-mobile",
                    "description": "A convenience mixin that is equivalent to media-until($mobile-breakpoint).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include media-until-mobile() {color: red}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-after-mobile",
                    "description": "A convenience mixin that is equivalent to media-after($mobile-breakpoint).",
                    "parameters": []
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "function"
                    ],
                    "name": "breakpoints-asc",
                    "description": "Returns a sorted list of site breakpoints from smallest to largest",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// => (xs: 640px, mobile: 768px, sm: 1024px, md: 1366px, lg: 1600px, xl: 1920px)"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "function"
                    ],
                    "name": "breakpoints-desc",
                    "description": "Returns a sorted list of site breakpoints from largest to smallest",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// => (xl: 1920px, lg: 1600px, md: 1366px, sm: 1024px, mobile: 768px, xs: 640px)"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.mediaquery",
                    "type": [
                        "mixin"
                    ],
                    "name": "media-breakpoint-vars",
                    "description": "Generates css variables that update according to the current breakpoint. These can be accessed from\nJavaScript with code like this:\n```javascript\n    window.addEventListener('resize', () => {\n        let breakpoint = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint').trim();\n        document.querySelector('.js span').innerHTML = breakpoint;\n    });\n```",
                    "parameters": []
                }
            ]
        },
        {
            "name": "site.misc",
            "api": [
                {
                    "group": "site.misc",
                    "type": [
                        "function"
                    ],
                    "name": "scale-vw",
                    "description": "Creates a css clamp value that scales in vw units from $min to $max. The vw value is calculated\nsuch that it will have the $max value when the screen is $at-width wide.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "font-size: scale-vw(18px, 36px, 1200px) => font-size: clamp(18px, 3vw, 36px)"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.misc",
                    "type": [
                        "function"
                    ],
                    "name": "scale-vh",
                    "description": "Creates a css clamp value that scales in vh units from $min to $max. The vh value is calculated\nsuch that it will have the $max value when the screen is $at-height height.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "font-size: scale-vw(18px, 36px, 1200px) => font-size: clamp(18px, 3vh, 36px)"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "container",
                    "description": "Creates a standardized container based on site container settings.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include container();"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "link",
                    "description": "Creates a standardized link based on site settings",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include link();"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "site.rems",
            "api": [
                {
                    "group": "site.rems",
                    "type": [
                        "function"
                    ],
                    "name": "rems",
                    "description": "Convert px to rem for a given base font size (the font size of the document root element)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "rems(1.5px) => 0.1rem;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.rems",
                    "type": [
                        "function"
                    ],
                    "name": "px",
                    "description": "Convert rem to px for a given base font size (the font size of the document root element)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "px(1.3rem, 10px) => 13px"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "site.variables",
            "api": [
                {
                    "group": "site.variables",
                    "type": [
                        "mixin"
                    ],
                    "name": "css-vars",
                    "description": "Generic mixin that takes a map of variables and outputs them as css variables.",
                    "parameters": [
                        {
                            "name": "vars",
                            "type": "*",
                            "description": "A map containing value pairs which will be output as css variables. Any color\nvariable that ends with -hsla will will also get h/s/l/a component variables."
                        }
                    ]
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "hsl-var",
                    "description": "Function that produces an adjusted color value using hsla syntax for hsla variables. For a given\nvalue of $name, it expects the following variables to be defined:\n\n    $--$name (the base color)\n    $--$name-h (the hue component)\n    $--$name-s (the saturation component)\n    $--$name-l (the lightness component)\n\nThese variables can be defined using the hsl-var-def mixin. T",
                    "example": [
                        {
                            "type": "scss",
                            "code": "background: hsl-var('primary', $alpha: 0.5, $s-adj: 10%, $l-adj: -10%);"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "mixin"
                    ],
                    "name": "site-vars",
                    "description": "Outputs configured site variables as css variables. Intended to be used to established variables\ntypically once per page or site.\n\nSo here's a what a typical config might look like:\n\n```scss\n@@use 'variables' as * with (\n    $-config: (\n        vars-prefix: 'theme',\n        vars: (\n            page-bg-hsla: white,\n            page-fg-hsla: black,\n            green-hsla: (\n                base: green,\n                dark: lightgreen,\n            ),\n            orange-rgb: (\n                base: rgb(208, 122, 18),\n                dark: rgb(247, 196, 133),\n            )\n        )\n    )\n);\n```\n\nNote that you can also set $-vars-prefix and $-vars directly in the use definition instead of using $-config.\n\nThen you can use the mixin to output the variables like this:\n\n```scss\n.body {\n   // light mode\n   @include site-vars();\n\n    // dark mode\n    @media (prefers-color-scheme: dark) {\n        @include site-vars('dark');\n    }\n}\n```\n\nAnd finally you can access a variable like this:\n\n```css\n.selector {\n    color: site-var('page-fg');\n}\n```",
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "site-var-exists",
                    "description": "Returns true of the given varianble exists in site variables. It's aware of the fact that a\nvalid variable may have been defined / as a color with hsla and rgb components.",
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "site-var",
                    "description": "Produces css variable syntax for a site variable. Verifies that the variable exists and produces\na warning if not found.",
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "site-var-hsla",
                    "description": "Produces css variable syntax for an hsla variable and can produce the relative complex syntax\nrequired to adjust alhpa and hsla components.",
                    "parameters": []
                },
                {
                    "group": "site.variables",
                    "type": [
                        "function"
                    ],
                    "name": "site-var-rgb",
                    "description": "Produces css variable syntax for an rgb variable including an adjust alpha value.",
                    "parameters": []
                }
            ]
        },
        {
            "name": "utils.bem",
            "api": [
                {
                    "group": "utils.bem",
                    "type": [
                        "mixin"
                    ],
                    "name": "block",
                    "description": "Establishes a block context for the bem mixin. The bem mixins will still work with regular\nnesting but they will create deeply nested classnames (e.g. `.block .block__element` instead of\njust `.block__element`) which may create more specificity than desired.\n\n```scss\n@@include block('block') {\n    @include bem('element') {\n        ...\n    }\n}\n```",
                    "parameters": []
                },
                {
                    "group": "utils.bem",
                    "type": [
                        "function"
                    ],
                    "name": "get-block-name",
                    "description": "Extracts the block name from a selector. So if $selector is something like\n`.block__element--mod` the function would return `block`.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-block-name('.block__element--mod') => block"
                        },
                        {
                            "type": "scss",
                            "code": "get-block-name(&) => [name of block as extracted from current path]"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "selector",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.bem",
                    "type": [
                        "function"
                    ],
                    "name": "get-bem",
                    "description": "Function version of the bem mixin (see mixin for details).",
                    "parameters": []
                },
                {
                    "group": "utils.bem",
                    "type": [
                        "mixin"
                    ],
                    "name": "bem",
                    "description": "Creates a element--modifier class name using the bem approach to class naming. Can be used\ninside of the block mixin or just within a class declartion. Should also work with media media\nqueries and other complex scnearios.\n\nHere's a pretty thorough example that demonstrates why this might be useful\n\n```scss\n\n@@include block('NEW') {\n    @include element(element) {\n        content: 'Basic Element';\n    }\n    @include element(element, blue) {\n        content: 'Blue Modifier';\n\n        @include element(child-of-blue) {\n            content: 'Child (in Blue Modified)';\n\n            @include element(deep-nested-element) {\n                content: 'Deep Nested Element (RIGHT)';\n            }\n        }\n    }\n}\n\n.OLD {\n    &__element {\n        content: 'Basic Element';\n    }\n\n    &__element--blue {\n        content: 'Blue Modifier';\n    }\n\n    &__element--blue & {\n        &__child-of-blue {\n            content: 'Child in Blue Modified';\n\n            &__deep-nested-element {\n                content: 'Deep Nested Element (WRONG)';\n            }\n        }\n\n        &__deep-nested-element {\n            content: 'Deep Nested Element (ALSO WRONG)';\n        }\n\n        &__child-of-blue & {\n            &__deep-nested-element {\n                content: 'Deep Nested Element (THIS IS WRONG TOO)';\n            }\n        }\n    }\n}\n```\n\nAnd some more basic examples:",
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
                            "code": ".block { @include bem(element, $pseudo::after) { ... } }\n// => block__element::after { ... }"
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
                    "parameters": [
                        {
                            "name": "name",
                            "type": "string | list",
                            "description": "The element name string (if a list is provided the selector will\ninclude a selector for each item in the list)"
                        },
                        {
                            "name": "modifier",
                            "type": "string",
                            "default": "''",
                            "description": "An optional modifier string. Use this to indicate that the\nblock is in a modified state (e.g. selected)."
                        },
                        {
                            "name": "pseudo",
                            "type": "string",
                            "default": "''",
                            "description": "An optional pseudo class that should be appended to the selector\n(e.g. hover or after)"
                        }
                    ]
                },
                {
                    "group": "utils.bem",
                    "type": [
                        "mixin"
                    ],
                    "name": "element",
                    "description": "Wrapper for bem mixin with more contextual naming",
                    "parameters": []
                }
            ]
        },
        {
            "name": "utils.collections",
            "api": [
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-get-default",
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
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-deep-get",
                    "description": "Deep lookup for map values, each parameter represents the next level lookup",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-deep-get((a:1, b:2), b) // => 2"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "Map"
                        },
                        {
                            "name": "keys",
                            "type": "arglist",
                            "description": "Key chain"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "nth-if-length",
                    "description": "If $list has an $nth element, return that element. Otherwise return $fallback.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "nth-if-length((a, b, c), 1) // => a"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "nth-or-val",
                    "description": "If $list-or-val is a list, return the nth value; if the item is a value\nreturn the value; if the value is null return the default",
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
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-remove",
                    "description": "Return a copy of a list with the nth value removed",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-remove((a, b, c), 1) // => b, c"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-replace",
                    "description": "Performas a find and replace of items within a list",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-replace((a, b, c), (c: d)) // => a, b, d"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "list",
                            "type": "list",
                            "description": "The list on which the replacement will be performed"
                        },
                        {
                            "name": "replacements",
                            "type": "map",
                            "description": "A map of the search/replacent values, e.g. (searchForThis: newKey)"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-contains",
                    "description": "Returns true if the list contains a value, otherwise false",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-contains((a, b, c), c) // => true"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-sort-num",
                    "description": "Return a copy of a list sorted numerically",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-sort-num(2, 4, 1, 5, 3) // => 1 2 3 4 5"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-sort-by-values",
                    "description": "Return a copy of a map sorted by the value of each entry",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-sort-by-values((a:1, b:2, d:4, c:3)) // => ((a: 1, b: 2, c: 3, d: 4))"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-reverse",
                    "description": "Returns a copy of a map with the items in the reverse order of the original",
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-map",
                    "description": "Creates a new list with the results of calling a function once for every\nitem in this list. Equivalent to Array.map in JavaScript. Must use get-function to retrieve the function used for the $fn parameter. See example.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@function square($x) { @return $x * $x }\nlist-map(1 2 3 4, get-function(square)); // => 1 4 9 16"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "list",
                            "type": "List",
                            "description": "the list to which the function is being applied"
                        },
                        {
                            "name": "fn",
                            "type": "Function",
                            "description": "reference to a function(item, index) that will be\napplied to every item."
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "list-filter",
                    "description": "Creates a new list with all items that pass the test implemented by the\nprovided function. Similar to Array.filter in JavaScript.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@function aboveTen($x) { @return ($x > 10)}\nlist-filter(2 20 30 3 4 100, get-function(aboveTen)); // => (20 30 100)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "list",
                            "type": "List",
                            "description": "the list being filtered"
                        },
                        {
                            "name": "fn",
                            "type": "Function",
                            "description": "reference to a filtering function"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "map-collect",
                    "description": "Merge multiple maps into a single map",
                    "example": [
                        {
                            "type": "scss",
                            "code": "map-collect((a: 1), (b:2), (c: 3)); // => (a:1, b:2, c:3)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "maps...",
                            "type": "*",
                            "description": "One or more maps that should be merged into a single map."
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-get",
                    "description": "A function that retrieves a \"deep\" value from a map using path syntax where key names are\nseparated by periods.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$color: flat-get((colors: (somecolor: #F00)), 'colors.somecolor')\n==> #F00"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "An existing map that serves as the lookup source"
                        },
                        {
                            "name": "path",
                            "type": "string",
                            "description": "The path where the value is found, expressed as a list of keys separated\nby commas (e.g. 'colors.accent')"
                        },
                        {
                            "name": "fallback",
                            "type": "*",
                            "default": "null",
                            "description": "An optional fallback value that will be returned in the value isn't\nfound"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-set",
                    "description": "A function that allows you to set a \"deep\" value in a map using path syntax where key names are\nseparated by periods.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$map: flat-set((), 'colors.somecolor', #F00) // ==> (colors: (somecolor: #F00))"
                        },
                        {
                            "type": "scss",
                            "code": "$map: flat-set((colors: (clr1: #F00)), 'colors.clr2', #00F) // ==> {colors: {clr1: #F00, clr2: #00F}}"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "An existing map that serves as the basis for the returned value"
                        },
                        {
                            "name": "path",
                            "type": "string",
                            "description": "The path where the value should be set, expressed as a list of keys\nseparated by perods (e.g. 'colors.accent')"
                        },
                        {
                            "name": "val",
                            "type": "*",
                            "description": "The value to be set at the path"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-default",
                    "description": "Same as flat-set, but will not overwrite a value if it already exists",
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
                    "parameters": [
                        {
                            "name": "map",
                            "type": "*",
                            "description": "The flat map that will be modified"
                        },
                        {
                            "name": "path",
                            "type": "*",
                            "description": "The path of the new value"
                        },
                        {
                            "name": "val",
                            "type": "*",
                            "description": "The new value"
                        },
                        {
                            "name": "merge-maps",
                            "type": "*",
                            "default": "false",
                            "description": "Determines what to do if the key refers to a value that is already a map. See example of both behaviors below."
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flatten-map",
                    "description": "A function that flattens a map to it's \"flat\" equivalent where every key is replaced with a deep path\n(see examples) into the original map.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "flatten-map((colors: (clr1: #f00, clr2: #00f)))\n==> (\"colors:clr1\": #f00, \"colors:clr2\": #00f)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "The map to be flattened"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "unflatten-map",
                    "description": "A function that restores a \"flat\" map (like one produced by the flatten-map function) to a\nnormal deep map.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "unflatten-map((\"colors:clr1\": #f00, \"colors:clr2\": #00f))\n==> (colors: (clr1: #f00, clr2: #00f))"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "The map to be unflattened"
                        }
                    ]
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-merge",
                    "description": "A function which will flatten and then merge two maps. This is not the same as a deep merge\nbecause it allows for keys in one (or both) of the maps to be complete paths. If there are\nconflicts, last in list wins.",
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
                    "parameters": []
                },
                {
                    "group": "utils.collections",
                    "type": [
                        "function"
                    ],
                    "name": "flat-has-key",
                    "description": "Returns true if the provided map, once flattened, contains the deep path $key;",
                    "example": [
                        {
                            "type": "scss",
                            "code": "flat-has-key((colors: (clr1: #f00, clr2: #00f)), 'colors:clr2') => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": ""
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "description": ""
                        }
                    ]
                }
            ]
        },
        {
            "name": "utils.color",
            "api": [
                {
                    "group": "utils.color",
                    "type": [
                        "function"
                    ],
                    "name": "color-shade",
                    "description": "Produce a shade (a lighter or darker version) of a color based on the value\nof $shade and an optional darkest to lightest shade range.",
                    "example": [
                        {
                            "type": "color",
                            "code": "",
                            "description": ": shade(red, 5, null) // => #ff8080"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "color",
                            "type": "color",
                            "default": "null",
                            "description": "The color to be shaded. If not provided, it will be\ncalculated as the middle value within $shade-range."
                        },
                        {
                            "name": "shade",
                            "type": "number",
                            "default": "0",
                            "description": "The shading to be applied, as a value between -10, 10\n(can be overriden with config(shade-steps)). 0 returns the color itself.\nNegative values make the color darker, postive values make it lighter."
                        },
                        {
                            "name": "shade-range",
                            "type": "(color, color)",
                            "default": "null",
                            "description": "The range of colors will be produced\nas a list (darkest, lightest)."
                        }
                    ]
                },
                {
                    "group": "utils.color",
                    "type": [
                        "function"
                    ],
                    "name": "color-contrast",
                    "description": "Choose a contrasting foreground based on the contrast between a background and two foreground\noptions (a light and dark).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "contrast-color(rgb(233, 229, 31), rgb(199, 192, 192), rgb(133, 133, 231)) // => #8585e7"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.color",
                    "type": [
                        "function"
                    ],
                    "name": "yiq",
                    "description": "Computes the the luminance (grayscale value) of a color in the yiq color space. This can be used\nfor determining the relative contrast between two colors.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "yiq(purple) // => 52.864"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.color",
                    "type": [
                        "function"
                    ],
                    "name": "luminance",
                    "description": "Calculates luminance of a color based on the WCAG2 standard Luminance calculation based on:\nhttps://www.w3.org/TR/WCAG20/#relativeluminancedef",
                    "parameters": []
                }
            ]
        },
        {
            "name": "utils.fonts",
            "api": [
                {
                    "group": "utils.fonts",
                    "type": [
                        "mixin"
                    ],
                    "name": "font-face",
                    "description": "Simplified syntax for generating a font-face at-rule for loading custom\nfonts.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include font-face('circular','~assets/fonts/circular/circular-book', 400, null, woff woff2 otf);"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "name",
                            "type": "String",
                            "description": "Name of the font (as referenced in css)"
                        },
                        {
                            "name": "path",
                            "type": "String",
                            "description": "The url path used to load the font (do not include\nthe extension, it will be appended)"
                        },
                        {
                            "name": "weight",
                            "type": "String",
                            "description": "The weight associated with this variation of the\nfont"
                        },
                        {
                            "name": "style",
                            "type": "String",
                            "description": "(optional) The styles associated with this variation\nof the font"
                        },
                        {
                            "name": "exts",
                            "type": "String",
                            "default": "woff ttf",
                            "description": "(optional) The full list of extensions to\nbe loaded (added to path), no period"
                        }
                    ]
                },
                {
                    "group": "utils.fonts",
                    "type": [
                        "mixin"
                    ],
                    "name": "font-smoothing-on",
                    "description": "Turn font smoothing on (makes type appear thinner and lighter on Mac and more closely\nresembles type rendering on Windows)",
                    "example": [
                        {
                            "type": "include",
                            "code": "font-smooth: always;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;",
                            "description": "font-smoothing-on() // =>"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.fonts",
                    "type": [
                        "mixin"
                    ],
                    "name": "font-smoothing-off",
                    "description": "Restore font-smoothing to it's default value.",
                    "example": [
                        {
                            "type": "include",
                            "code": "font-smooth: initial;\n-webkit-font-smoothing: initial;\n-moz-osx-font-smoothing: initial;",
                            "description": "font-smoothing-off() // =>"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.fonts",
                    "type": [
                        "mixin"
                    ],
                    "name": "google-font",
                    "description": "Mixin for loading google fonts.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "%%include google-font(Lato, 300);"
                        },
                        {
                            "type": "scss",
                            "code": "%%include google-font(Open Sans, 400, italic)"
                        },
                        {
                            "type": "scss",
                            "code": "%%include google-font(Slapo 27px, 400 200, $text: 'Lorem ipsum dolor sit amet');"
                        },
                        {
                            "type": "scss",
                            "code": "// By placing google-font includes inside a google-font include (without arguments nested includes will be merged into a single import\n%%include google-font {\n    %%include google-font(Material Icons);\n    %%include google-font(Open Sans, 300 400 700, normal);\n    %%include google-font(Open Sans, 300 400 700, italic normal);\n    %%include google-font(Lato, 300 400i 700i);\n    %%include google-font(Lato, 300 700, italic normal);\n}\n\n=> @import url(\"//fonts.googleapis.com/css?family=Material+Icons:400|Open+Sans:300,400,700,300i,400i,700i|Lato:300,400\")"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "name",
                            "type": "string",
                            "default": "null",
                            "description": "Name of the font (must match google)"
                        },
                        {
                            "name": "weights",
                            "type": "list or number",
                            "default": "400",
                            "description": "A list of weights to be loaded (or\nsingle weight)"
                        },
                        {
                            "name": "styles",
                            "type": "list or string",
                            "default": "normal",
                            "description": "A list of styles to be loaded (or\nsingle style)"
                        },
                        {
                            "name": "text",
                            "type": "*",
                            "default": "null",
                            "description": "Subsetting text"
                        }
                    ]
                }
            ]
        },
        {
            "name": "utils.layout",
            "api": [
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "first-last-radius",
                    "description": "Convenience mixin to inherit the border-radius of a parent based on child position (first child\ninherits top left/right radius, last child inherits bottom left/right radius)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include first-last-radius()"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "rel",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include rel($t: null, $r: null, $b: null, $l: null) // =>\nposition: relative;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "abs",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include abs($t: null, $r: null, $b: null, $l: null) // =>\nposition: absolute;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "fixed",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include fixed($t: null, $r: null, $b: null, $l: null) // =>\nposition: fixed;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "left-top",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include left-top($l: 0, $t: 0) // =>\nposition: absolute;\nleft: 0;\ntop: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "right-top",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include right-top($r: 0, $t: 0) // =>\nposition: absolute;\nright: 0;\ntop: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "left-bottom",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include left-bottom($l: 0, $b: 0) // =>\n    position: absolute;\n    left: 0;\n    bottom: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "right-bottom",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include right-bottom($r: 0, $b: 0) // =>\n    position: absolute;\n    left: 0;\n    bottom: 0;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "abs-fill",
                    "description": "",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include abs-fill() // =>\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "center",
                    "description": "Center the item using a mix of positioning and a transform",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include center($left: 50%, $top: 50%, $position: absolute)\nposition: absolute;\nleft: 50%;\ntop: 50%;\ntransform: translate(-50%, -50%);"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "center-x",
                    "description": "Center the item horizontally using a mix of positioning and a transform",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include center-x($left: 50%, $position: absolute) // =>\nposition: absolute;\nleft: 50%;\ntransform: translateX(-50%);"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "center-y",
                    "description": "Center the item vertically using a mix of positioning and a transform",
                    "example": [
                        {
                            "type": "scss",
                            "code": "include center-y($top: 50%, $position: absolute) // =>\nposition: absolute;\ntop: 50%;\ntransform: translateY(-50%);"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.layout",
                    "type": [
                        "mixin"
                    ],
                    "name": "flex-pseudo-center",
                    "description": "Adds before and after pseudo elements to a flex container to allow centering content to\nnon-perfect values for more natural looking centered layouts",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include flex-pseudo-center(33%);"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "utils.math",
            "api": [
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "pow",
                    "description": "Calculate a number raised to the power of the provided exponent. (Wrapper for math.pow)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "pow(2, 3)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "base",
                            "type": "*",
                            "description": "The base number"
                        },
                        {
                            "name": "exp",
                            "type": "*",
                            "description": "The exponent used to raise the base"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "nth-root",
                    "description": "Calculates the nth root of a number using iteration.",
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "n",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "round-d",
                    "description": "Round a number using the specified number of decimals.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$val: round-d(3.33333333, 2) // => 3.33"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "n",
                            "type": "number",
                            "description": "The number to be rounded"
                        },
                        {
                            "name": "dec",
                            "type": "number",
                            "default": "2",
                            "description": "The number of decimals in the output"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "round-f",
                    "description": "Round a number with the specified fraction (e.g. 4 will produce 1.0, 1.25, 1.5, etc.)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$val: round-f(3.3333, 2) // => 3.5"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "n",
                            "type": "number",
                            "description": "The number to be rounded"
                        },
                        {
                            "name": "frac",
                            "type": "number",
                            "default": "8",
                            "description": "The denominator of the fractional portion of the result"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "intp",
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
                    "parameters": [
                        {
                            "name": "prog",
                            "type": "number",
                            "description": "The progress between the two values, provided as a value between 0 and 1."
                        },
                        {
                            "name": "range",
                            "type": "number",
                            "description": "The range of interpolation. This can be provided as a single value which\nrepresents the upper range from 0 or as two values which represent the lower and upper range."
                        },
                        {
                            "name": "ease",
                            "type": "string",
                            "description": "A reference to an easing function. See the ease function for details"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease",
                    "description": "Interpolate a value between 0 and 1 using the easing function with the given name",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease(0.5, 'out-quad') // => 0.75"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        },
                        {
                            "name": "easing",
                            "type": "String",
                            "description": "The name of the easing function that should be used for interpolation"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-in-quad",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-in quad function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-quad(0.5) // => 0.25"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-out-quad",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-out quad function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-quad(0.25) // => 0.4375;"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-in-cubic",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-in cubic function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-cubic(0.5) // => 0.125;"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-out-cubic",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-out cubic function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-cubic(0.25) // => 0.578125"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-in-quart",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-in quart function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-in-quart(0.3) // => 0.0081"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "ease-out-quart",
                    "description": "Interpolate a value between 0 and 1 using the Penner ease-out quart function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "ease-out-quart(0.5) // => 0.9375"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "t",
                            "type": "number",
                            "description": "The input value between 0 and 1"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "clamp-number",
                    "description": "Clamp a number (keep it within the confines of min/max). Note: the weird\nname is to differentiate from the clamp() css function.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "clamp-number(4, 3, 10) // => 4 is above the min"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "number",
                            "type": "*",
                            "description": "The number to be clampled"
                        },
                        {
                            "name": "min",
                            "type": "*",
                            "description": "Min allowed value"
                        },
                        {
                            "name": "max",
                            "type": "*",
                            "description": "Max allowed value"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "divide",
                    "description": "Provides a wrapper for the standard sass divide function (math.div) to make imports a little\nsimpler. Returns the result of dividing $num1 by $num2.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "divide(10, 2) // => 5"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "num1",
                            "type": "number",
                            "description": "The first number in the division operation (the numerator)"
                        },
                        {
                            "name": "num2",
                            "type": "number",
                            "description": "The first number in the division operation (the numerator)"
                        }
                    ]
                },
                {
                    "group": "utils.math",
                    "type": [
                        "function"
                    ],
                    "name": "percent",
                    "description": "Convience function that divides two numbers and the multiples the result by 100%",
                    "example": [
                        {
                            "type": "scss",
                            "code": "percent(10, 3, 2) // => 333.33%"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "num1",
                            "type": "number",
                            "description": "The first number in the division operation (the numerator)"
                        },
                        {
                            "name": "num2",
                            "type": "number",
                            "description": "The first number in the division operation (the numerator)"
                        },
                        {
                            "name": "round",
                            "type": "number",
                            "description": "The number of digits to use when rounding the output"
                        }
                    ]
                }
            ]
        },
        {
            "name": "utils.misc",
            "api": [
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "root",
                    "description": "Simple helper that places the content within a root selector (and outside of any nesting)",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "hover",
                    "description": "Helper for a hover state selector that only applies hover styles when not disabled.",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "active",
                    "description": "Helper for an active state selector that only applies hover styles when not disabled.",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "focus",
                    "description": "Adds a focus-visible state selector to the element",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".item { @include focus() {...} }  => .item:focus-visible {...}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "aria-checked",
                    "description": "Shortcut for checked state (and a reminder to use aria to manage this)",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".item { @include aria-checked() {...} }  => .item:[aria-checked] {...}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "disabled",
                    "description": "Shortcut for checked state (and a reminder to use aria to manage this)",
                    "example": [
                        {
                            "type": "scss",
                            "code": ".item { @include disabled() {...} }  =>\n.item:disabled, .item:disabled:hover, .item:disabled:active, .item:disabled[aria-checked] {...}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "placeholder",
                    "description": "Style the placeholder text for a text input element",
                    "example": [
                        {
                            "type": "scss",
                            "code": "input {\n    %%include placeholder {\n        /* styles for placeholder here */\n    }\n}"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "no-select",
                    "description": "Disable text selection on an element",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "line-clamp",
                    "description": "Use the (now broadly supported) line-clamp property to restrict the\nnumber of lines that are shown in a text element.",
                    "example": [
                        {
                            "type": "line",
                            "code": "display: -webkit-box;\n-webkit-line-clamp: 3;\n-webkit-box-orient: vertical;\noverflow: hidden;",
                            "description": "clamp(3) // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "lines",
                            "type": "number",
                            "description": "The maximum number of lines to be shown"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "before",
                    "description": "Shortcut for the ::before pseudo element with common defaults for content\nand display.",
                    "example": [
                        {
                            "type": "before",
                            "code": "content: \"\";\ndisplay: block;",
                            "description": "('hello, world') // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "content",
                            "type": "*",
                            "default": "''",
                            "description": "The value for the content property."
                        },
                        {
                            "name": "display",
                            "type": "*",
                            "default": "block",
                            "description": "The value for the display property."
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "after",
                    "description": "Shortcut for the ::after pseudo element with common defaults for content\nand display.",
                    "example": [
                        {
                            "type": "after",
                            "code": "content: \"\";\ndisplay: block;",
                            "description": "('goodbye, world') // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "content",
                            "type": "*",
                            "default": "''",
                            "description": "The value for the content property."
                        },
                        {
                            "name": "display",
                            "type": "*",
                            "default": "block",
                            "description": "The value for the display property."
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "triangle",
                    "description": "Create a triangle element using the border properties",
                    "example": [
                        {
                            "type": "scss",
                            "code": "triangle('up', 'red', 10px, 2px)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "direction",
                            "type": "string",
                            "description": "The direction the arrow is pointing (up, down, left, right, etc.)"
                        },
                        {
                            "name": "color",
                            "type": "color",
                            "description": "The fill color for the arrow"
                        },
                        {
                            "name": "height",
                            "type": "length",
                            "description": "The height of the arrow"
                        },
                        {
                            "name": "width",
                            "type": "length",
                            "description": "The width of the arrow"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "checkered-background",
                    "description": "Sets a generated checked pattern background svg image on an element",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include checkered-background(20px, green) // => creates a green and transparent checkered background where each square is 20px x 20px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "width",
                            "type": "*",
                            "default": "12px",
                            "description": "The width of an individual square in the checked pattern"
                        },
                        {
                            "name": "color",
                            "type": "*",
                            "default": "#c8c8c8",
                            "description": "The first of two colors in the check pattern"
                        },
                        {
                            "name": "color-alt",
                            "type": "*",
                            "default": "transparent",
                            "description": "The second of two colors in the check pattern"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "function"
                    ],
                    "name": "map-key-replace",
                    "description": "Finds and replaces keys in a map",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$map: map-key-replace(( oldkey: 'value'), (oldkey: newkey)); // => (newkey: 'value')"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "css-map",
                    "description": "Generates css from a map of properties and values. Properties can be remapped with aliases or\nignored with a start pattern.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "@include css-map-dpr(( color: blue, background-color: green, font-family: sans-serif));"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "map",
                            "type": "map",
                            "description": "The property map used to generate the css"
                        },
                        {
                            "name": "aliases",
                            "type": "map",
                            "description": "Property aliases map (e.g (-px-accent: background-color))"
                        },
                        {
                            "name": "map-states",
                            "type": "list",
                            "description": "If provided, the specified map-type properties will be interpreted as\nsub states (e.g. (hover: (...)) becomes &:hover {...})"
                        },
                        {
                            "name": "ignore-start-pattern",
                            "type": "string",
                            "description": "Properties that start with this will be ignored"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "debug-zebra",
                    "description": "Generates a loud striped background gradient that can be used when debugging (especially helpful for scrolling)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "debug-zebra() // =>"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "color1",
                            "type": "*",
                            "default": "yellowgreen",
                            "description": "The first color in the gradient"
                        },
                        {
                            "name": "color2",
                            "type": "*",
                            "default": "gold",
                            "description": "The second color in the gradient"
                        }
                    ]
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "mixin"
                    ],
                    "name": "only-safari",
                    "description": "Rule that only includes the content when the browser is Safari",
                    "parameters": []
                },
                {
                    "group": "utils.misc",
                    "type": [
                        "function"
                    ],
                    "name": "calc-add",
                    "description": "Produces a css calc expression that adds two values (or subtracts if the second value is\nnegative)",
                    "parameters": []
                }
            ]
        },
        {
            "name": "utils.shadows",
            "api": [
                {
                    "group": "utils.shadows",
                    "type": [
                        "function",
                        "mixin"
                    ],
                    "name": "depth-shadow",
                    "description": "Creates the syntax for a multi-level shadow",
                    "example": [
                        {
                            "type": "scss",
                            "code": "depth-shadow(2, 0.5, purple) // => shadow: 0 1px 2px -0.5px rgba(128, 0, 128, 0.2295), 0 3.5px 4px 0px rgba(128, 0, 128, 0.03425), 0 1px 5px 1px rgba(128, 0, 128, 0.072)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "blur",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "alpha",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "color",
                            "type": "*",
                            "description": ""
                        }
                    ],
                    "merged": true
                },
                {
                    "group": "utils.shadows",
                    "type": [
                        "mixin"
                    ],
                    "name": "depth-shadow-effect",
                    "description": "Generates a depth shadow using the filter property",
                    "parameters": []
                },
                {
                    "group": "utils.shadows",
                    "type": [
                        "function",
                        "mixin"
                    ],
                    "name": "shadow",
                    "description": "Function that creates a standardized box shadow",
                    "example": [
                        {
                            "type": "scss",
                            "code": "shadow(2) // => 0 1px 2px -0.5px rgba(0, 0, 0, 0.21), 0 3.5px 4px 0px rgba(0, 0, 0, 0.015), 0 1px 5px 1px rgba(0, 0, 0, 0.06);"
                        },
                        {
                            "type": "scss",
                            "code": "shadow(2, black) // => box-shadow: 0 1px 2px -0.5px rgba(0, 0, 0, 0.21), 0 3.5px 4px 0px rgba(0, 0, 0, 0.015), 0 1px 5px 1px rgba(0, 0, 0, 0.06);"
                        }
                    ],
                    "parameters": [],
                    "merged": true
                },
                {
                    "group": "utils.shadows",
                    "type": [
                        "mixin"
                    ],
                    "name": "shadow-effect",
                    "description": "Create a standard drop-shadow as a css filter effect (creates\nnon-rectangular shadows on any content)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "shadow-effect(2, gray) // => filter: drop-shadow(0 1px 2px -0.5px rgba(0, 0, 0, 0.21), 0 3.5px 4px 0px rgba(0, 0, 0, 0.015), 0 1px 5px 1px rgba(0, 0, 0, 0.06));"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "utils.strings",
            "api": [
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "to-str",
                    "description": "Ensures that that provided value is a string.",
                    "parameters": []
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "str-replace",
                    "description": "Replace all instances of a string within another string",
                    "example": [
                        {
                            "type": "scss",
                            "code": "str-replace('test test test', 'test', 'pass') // => 'pass pass pass'"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "url-encode",
                    "description": "Url encode a string (used primarily for encoding inline svg)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "url-encode('pixellab') // => \"www.thinkpixellab.com%25\";"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "inline-svg",
                    "description": "Encode an svg string for use as an inline svg (like a background image).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "background-image: inline-svg('<svg>...</svg>'); // => background-image: url('data:image/svg+xml, ... ');"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "str-split",
                    "description": "Split a string into an array of strings based on a separator.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "str-split('you are here', 'a') // => \"you \" \"re here\""
                        }
                    ],
                    "parameters": [
                        {
                            "name": "string",
                            "type": "String",
                            "description": "the string to split"
                        },
                        {
                            "name": "separator",
                            "type": "String",
                            "description": "the character to split the string on"
                        }
                    ]
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "list-join",
                    "description": "Creates and returns a new string by concatenating all of the elements in a\nlist separated by $separator. Similiar to Javascript Array.join JavaScript",
                    "example": [
                        {
                            "type": "scss",
                            "code": "list-join('a' 'b' 'c', ':') // => 'a:b:c'"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "list",
                            "type": "List",
                            "description": "The list to be joined"
                        },
                        {
                            "name": "separator",
                            "type": "String",
                            "description": "The separator character"
                        }
                    ]
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "starts-with",
                    "description": "Returns true if a string begins withs another string. Returns false if $str is null or 0 length.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "starts-with('abc', 'a') // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "str",
                            "type": "String",
                            "description": "A string that will be tested for the $start string"
                        },
                        {
                            "name": "start",
                            "type": "String",
                            "description": "A string that $str must start with"
                        }
                    ]
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "ends-with",
                    "description": "Returns true if a string ends withs another string. Returns false if $str is null or 0 length.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "starts-with('abc', 'a') // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "str",
                            "type": "String",
                            "description": "A string that will be tested for the $start string"
                        },
                        {
                            "name": "start",
                            "type": "String",
                            "description": "A string that $str must start with"
                        }
                    ]
                },
                {
                    "group": "utils.strings",
                    "type": [
                        "function"
                    ],
                    "name": "trim",
                    "description": "Trims whitespace from the beinning and end of a string",
                    "example": [
                        {
                            "type": "scss",
                            "code": "trim('  abc ') => 'abc'"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "string",
                            "type": "String",
                            "description": "the string to trim"
                        }
                    ]
                }
            ]
        },
        {
            "name": "utils.transitions",
            "api": [
                {
                    "group": "utils.transitions",
                    "type": [
                        "function",
                        "mixin"
                    ],
                    "name": "transition",
                    "description": "Simplified syntax for transitioning multiple individual properties on\nan element, defaulting to standardized values for duration and easing.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "transition: transition(transform opacity);"
                        },
                        {
                            "type": "scss",
                            "code": "transition: transition(transform opacity, 0.5s);"
                        },
                        {
                            "type": "scss",
                            "code": "transition: transition(transform opacity, $ease: $ease-out-quart);"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "proplist",
                            "type": "list",
                            "description": "A list of properties to be transitioned"
                        },
                        {
                            "name": "dur",
                            "type": "duration",
                            "default": "$transition-dur",
                            "description": "The duration of the transition"
                        },
                        {
                            "name": "ease",
                            "type": "string",
                            "default": "$transition-ease",
                            "description": "The easing to be used in the transition"
                        },
                        {
                            "name": "delay",
                            "type": "duration",
                            "default": "0ms",
                            "description": "The delay for the transition"
                        }
                    ],
                    "merged": true
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vue-transition",
                    "description": "Set of mixins that generate classes for a vue transition. These dot not expose the full power of\nvue transitions but it does simplify the creation of many by using simplified naming and grouping classes\nthat are commonly defined together. The outer mixin contains the inner (vt-*) mixins.",
                    "example": [
                        {
                            "type": "scss",
                            "code": "// Create a fade transition by definining just the css transition and the hidden state.\n @include vue-transition(fade) {\n\n    // define the transition\n    @include vt-transition {\n        transition: opacity 500ms;\n    }\n\n    // define the hidden state (the non-hidden state is implicty -- the normal state)\n    @include vt-hidden {\n        opacity: 0;\n    }\n};"
                        },
                        {
                            "type": "scss",
                            "code": "// Create a slide and fade transition by\n @include vue-transition(slide-x) {\n\n    // define the hidden state (the non-hidden state is implicty -- the normal state)\n    @include vt-transition {\n        transition: opacity 500ms;\n    }\n\n    // the hidden state before entering\n    @include vt-hidden-enter {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n\n    // the hidden after exiting\n    @include vt-hidden-leave {\n        transform: translateY(100px);\n        opacity: 0;\n    }\n};"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "name",
                            "type": "string",
                            "description": "The name of the transition"
                        }
                    ]
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-transition",
                    "description": "Vue transition: Defines the transition  definition for a vue transition.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-hidden",
                    "description": "Vue transition: Defines the hidden state when that state is shared as the element is added and\nalso removed from the DOM. Use in the content area of the vue-transition mixin.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-hidden-enter",
                    "description": "Vue transition: Defines the hidden state as an element is added into the DOM. Removed one frame\nafter element is inserted.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-hidden-leave",
                    "description": "Vue transition: Defines a hidden state when an element is removed from the DOM.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-active",
                    "description": "Vue transition: Defines the state as an element is actively transitioning when the state is\nshared for both enter and leave. Use in the content area of the vue-transition mixin.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-entering",
                    "description": "Vue transition: Defines the active transition state as an element is being added to the DOM. Use\nin the content area of the vue-transition mixin.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-leaving",
                    "description": "Defines the the active transition state as element is begin removed from the DOM. Use in the\ncontent area of the vue-transition mixin.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vt-pin",
                    "description": "Vue transition: Simple helper that pins an object as it is being removed from the DOM (to make\nroom for the incoming element). In some cases just absolute positioning is enough, but in others\nyou may need to provide additional support (like a width or height) as @content or specific\ntop/left values. It also might be better to use a grid as a container where multiple elements\ncan easily occupy the same space but still size naturally and impact the layout of other\nelments.",
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vue-transition-fade",
                    "description": "Creates a basic vue fade transition",
                    "example": [
                        {
                            "type": "vue",
                            "code": ".fade-enter-active .fade-leave-active {\n transition: opacity 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.fade-enter-active {\n  transition-delay: 0;\n}\n.fade-leave-active {\n  transition-delay: 0;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}",
                            "description": "transition-fade() // =>"
                        }
                    ],
                    "parameters": []
                },
                {
                    "group": "utils.transitions",
                    "type": [
                        "mixin"
                    ],
                    "name": "vue-transition-slide-fade",
                    "description": "Creates a basic vue slide and fade transition",
                    "example": [
                        {
                            "type": "include",
                            "code": ".class .slide-leave-active,\n.class .slide-enter-active {\n  transition: transform 150ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 150ms cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.class .slide-enter {\n  opacity: 0;\n  transform: translateY(100px);\n}\n.class .slide-leave-to {\n  opacity: 0;\n  transform: translateY(-100px);\n}\n.class .slide-enter-active {\n  position: relative;\n}\n.class .slide-leave-active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}",
                            "description": "vue-transition-slide-fade() // =>"
                        }
                    ],
                    "parameters": []
                }
            ]
        },
        {
            "name": "utils.typography",
            "api": [
                {
                    "group": "utils.typography",
                    "type": [
                        "function"
                    ],
                    "name": "modular-size",
                    "description": "Generate a modular type size",
                    "example": [
                        {
                            "type": "scss",
                            "code": "modular-size(100px, 1.25, -1) // => 80px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "base",
                            "type": "number",
                            "description": "The base size used to generate the type scale (always\nexpressed in px)."
                        },
                        {
                            "name": "ratio",
                            "type": "number",
                            "description": "The ratio to use for generating the modular type\nscale (e.g. 1.25 or 4/3)"
                        },
                        {
                            "name": "step",
                            "type": "number",
                            "description": "The number of steps away from the base (pos/neg)"
                        }
                    ]
                },
                {
                    "group": "utils.typography",
                    "type": [
                        "function"
                    ],
                    "name": "modular-scale",
                    "description": "Generate a complete modular type scale, expressed as a map of type names and font sizes",
                    "example": [
                        {
                            "type": "scss",
                            "code": "$typescale: modular-scale(16px, 0.75, null, (sm base lg)); // => (sm: 0.75rem, base: 1rem, lg: 1.25rem)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "bases",
                            "type": "Number | List",
                            "description": "The base size or sizes used to generate the typescale"
                        },
                        {
                            "name": "ratio",
                            "type": "number",
                            "description": "The ratio used to generate the typescale"
                        },
                        {
                            "name": "range",
                            "type": "List",
                            "description": "Optional -- either $range or $names must be provided. A list of two values\nthat represent the range of sizes to be created (e.g. -3, 10), with the size 0 being equivalent\nto the base."
                        },
                        {
                            "name": "names",
                            "type": "List",
                            "description": "Optional -- either $range or $names must be provided. The names for the\ngenerated sizes (these will be the keys in the map that gets returned)"
                        },
                        {
                            "name": "rems",
                            "type": "Bool",
                            "default": "true",
                            "description": "Whether or not to convert to rems. Note that rems will be based on\nthe first (or only) value in $bases"
                        },
                        {
                            "name": "round",
                            "type": "number",
                            "default": "4",
                            "description": "The fractional rounding amount (e.g. value of 4 means 1/4 so round to\n0.25, 0.50, etc.)"
                        }
                    ]
                }
            ]
        },
        {
            "name": "utils.units",
            "api": [
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "strip-unit",
                    "description": "Strip the unit from a number",
                    "example": [
                        {
                            "type": "scss",
                            "code": "strip-unit(100px) // => 100"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "to-number",
                    "description": "Convert a number-like string value to a proper number (that can be used for\narithmetic, etc.)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "to-number('234.8') // => 234.8"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-number",
                    "description": "Return true if the provided value is a number",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-number(4) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-rems",
                    "description": "Return true if the provided value is in rem units",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-rems(3rem) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-px",
                    "description": "Return true if the provided value is in px units",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-px(10px) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-time",
                    "description": "Return true if the provided value is a css duration / time",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-time(5000ms) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-angle",
                    "description": "Return true if the provided value is a css angle",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-angle(45deg) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-integer",
                    "description": "Return true if the provided value is an integer",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-integer(456) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-relative-length",
                    "description": "Return true if the provided value is a relative length value (if you don't\nknow about vmin/vmax then look them up because they are cool).",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-relative-length(20vmin) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-absolute-length",
                    "description": "Return true if the provided value is an absolute length value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-absolute-length(10cm) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-percentage",
                    "description": "Return true if the provided value is an absolute length value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-percentage(100%) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-length",
                    "description": "Return true if the provided value is a length",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-length(100%) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-string",
                    "description": "Return true if the provided value is a string",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-string('Hello, world') // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-map",
                    "description": "Return true if the provided value is a map",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-map((red: #f00, blue: #00f)) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-list",
                    "description": "Return true if the provided value is a string",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-list((1 2 3)) // => true"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "is-color",
                    "description": "Return true if the provided value is a color",
                    "example": [
                        {
                            "type": "scss",
                            "code": "is-color(blue) // => true"
                        },
                        {
                            "type": "scss",
                            "code": "is-color(#444) // => true"
                        },
                        {
                            "type": "scss",
                            "code": "is-color(5) // => false"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-null",
                    "description": "Provide an alternate value when $value is null",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "fallback",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-string",
                    "description": "Choose a value based on whether another value is a string or not",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-number",
                    "description": "Choose a value based on whether another value is a string or not",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-number(10, 'hello', 20) // => \"hello\""
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-list",
                    "description": "Choose a value based on whether another value is a string or not",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-map",
                    "description": "Choose a value based on whether another value is a string or not",
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
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "if-color",
                    "description": "Choose a value based on whether another value is a color or not",
                    "example": [
                        {
                            "type": "scss",
                            "code": "if-color(pink, #fefe, 'not a color') // => #fefe"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "trueval",
                            "type": "*",
                            "description": ""
                        },
                        {
                            "name": "falseval",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart",
                    "description": "Convert any valid four-part value (like those used for margin or padding) into a map with\nthe correct values for top, right, bottom, left)",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart(2px) => (top: 2px, right: 2px, bottom: 2px, left: 2px)"
                        },
                        {
                            "type": "scss",
                            "code": "get-fourpart(2px 4px) => (top: 2px, right: 4px, bottom: 2px, left: 4px)"
                        },
                        {
                            "type": "scss",
                            "code": "get-fourpart(2px 4px 8px) => (top: 2px, right: 4px, bottom: 8px, left: 4px)"
                        },
                        {
                            "type": "get",
                            "code": "",
                            "description": "fourpart(2px 4px 8px 16px) => (top: 2px, right: 4px, bottom: 8px, left: 16px)"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart-left",
                    "description": "Convenience function to just retrieve the left value from get-fourpart",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-left(10px) // => 10px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart-top",
                    "description": "Convenience function to just retrieve the top value from get-fourpart",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-top(10px) // => 10px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart-bottom",
                    "description": "Convenience function to just retrieve the bottom value from get-fourpart",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-bottom(10px) // => 10px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-fourpart-right",
                    "description": "Convenience function to just retrieve the right value from get-fourpart",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-fourpart-right(10px) // => 10px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "value",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-border-width",
                    "description": "Extract the width from a shorthand border css value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-width(2px solid red) // => 2px"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "input",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-border-style",
                    "description": "Extract the style from a shorthand border css value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-style('2px solid red') // => solid"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "input",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "get-border-color",
                    "description": "Extract the style from a shorthand border css value",
                    "example": [
                        {
                            "type": "scss",
                            "code": "get-border-color('2px solid red') // => red"
                        }
                    ],
                    "parameters": [
                        {
                            "name": "input",
                            "type": "*",
                            "description": ""
                        }
                    ]
                },
                {
                    "group": "utils.units",
                    "type": [
                        "function"
                    ],
                    "name": "aspect-to-number",
                    "description": "Converts an aspect string (like '16:9') to a number (the equivalent of 16/9)",
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
                    "parameters": [
                        {
                            "name": "aspect",
                            "type": "string | number",
                            "description": "The string representation of the aspect (should be two numbers\nseparated by a colon, e.g. '16:9'). Alternatively, if the input is a number then it will be\nreturned directly. This makes it possible to use the function as a safety where a number is\nexpected but a string could be used for convenience."
                        }
                    ]
                }
            ]
        },
        null
    ],
    "config": [
        {
            "group": "modules.highlightjs",
            "key": "highlightjs.colors",
            "description": "Default colors for syntax highlighting using highlight.js",
            "default": "(\n    fg: #abb2bf,\n    bg: #282c34,\n    comment: #7f848e,\n    keyword: #c678dd,\n    name: #e06c75,\n    literal: #56b6c2,\n    symbol: #61aeee,\n    string: #98c379,\n    variable: #d19a66,\n    class: #e6c07b,\n)"
        },
        {
            "group": "modules.reading",
            "key": "reading.base",
            "description": "Font weight for <strong> text",
            "default": "(\n    font-family: inherit,\n    font-size: inherit,\n    font-weight: inherit,\n    line-height: inherit,\n    color: inherit,\n)"
        },
        {
            "group": "modules.reading",
            "key": "reading.font-weight-strong",
            "description": "Vertical spacing between block elements (set as a margin-bottom) in reading content",
            "default": "600"
        },
        {
            "group": "modules.reading",
            "key": "reading.block-spacing",
            "description": "Left padding for lists",
            "default": "1em"
        },
        {
            "group": "modules.reading",
            "key": "reading.list-padding",
            "description": "Left padding for list items",
            "default": "1.25em"
        },
        {
            "group": "modules.reading",
            "key": "reading.list-item-padding",
            "description": "Vertical spacing between list items",
            "default": "0.25em"
        },
        {
            "group": "modules.reading",
            "key": "reading.list-item-spacing",
            "description": "Link styles in reading content",
            "default": "0.25em"
        },
        {
            "group": "modules.reading",
            "key": "reading.links",
            "description": "Set of type styles for reading content",
            "default": "flat-merge(\n    get('links'),\n    (\n        text-decoration: underline,\n)"
        },
        {
            "group": "modules.reading",
            "key": "reading.styles",
            "description": "Set of type styles for reading content",
            "default": "(\n    heading: type-style('heading'),\n    'h1': (\n        font-size: fs(5),\n        __base: heading,\n        __selector: 'h1, .h1',\n    ),\n    'h2': (\n        font-size: fs(4),\n        __selector: 'h2, .h2',\n        __base: heading,\n    ),\n    'h3': (\n        font-size: fs(3),\n        __selector: 'h3, .h3',\n        __base: heading,\n    ),\n    'h4': (\n        font-size: fs(2),\n        __selector: 'h4, .h4',\n        __base: heading,\n    ),\n    'h5': (\n        font-size: fs(1),\n        __selector: 'h5, .h5',\n        __base: heading,\n    ),\n)"
        },
        {
            "group": "modules.typography",
            "key": "typography.type-use-rems",
            "description": "A map containing a set of type sizes where the key is the name and the value is the size",
            "default": "true"
        },
        {
            "group": "modules.typography",
            "key": "typography.type-sizes",
            "description": "A map containing a set of type sizes where the key is the name and the value is the size",
            "default": "modular-scale(\n    $bases: get('font-size-base'),\n    $ratio: $typescale-default,\n    $names: (\n        'xxs',\n        'xs',\n        'sm',\n        'base',\n        'md',\n        'lg',\n        'xl',\n        'h4',\n        'h3',\n        'h2',\n        'h1',\n        'd3',\n        'd2',\n        'd1',\n    ),\n    $round: 1,\n    $rems: false,\n)"
        }
    ]
};