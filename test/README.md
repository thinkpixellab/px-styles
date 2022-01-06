# Tests

### Overview

Run tests with the command `npm test`

### Some quick notes about how to structure tests

The default tests for a given file should be in a file named `[folder].[filename].spec.scss`. For example, the file utils/math.scss would be named `utils.math.spec.scss`.

Here is boilerplate for a new test file:

```scss
@use 'px' as *;
@use 'true' as *;

@include test-module('folder.filename') {
    // Test functions using the assert-equal mixin with the first paramreter being
    // the function call and the second parameter being the expected output.

    @include test('somefunction test') {
        @include assert-equal(somefunction(param1, param2), 'expected output');
    }

    // Test mixins using the asert mixin and the output, expect mixins. Include the
    // mixin within the content block of the output mixin and the expected results
    // within the ccontent block of expect mixin.

    @include test('set-background test') {
        @include assert {
            // test
            @include output {
                @include set-background(blue);
            }
            // expect output
            @include expect {
                backround: blue;
            }
        }
    }
}
```
