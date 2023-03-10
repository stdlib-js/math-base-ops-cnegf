<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# cnegf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Negate a single-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-ops-cnegf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cnegf = require( '@stdlib/math-base-ops-cnegf' );
```

#### cnegf( z )

Negates a single-precision complex floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var realf = require( '@stdlib/complex-realf' );
var imagf = require( '@stdlib/complex-imagf' );

var z = new Complex64( -4.0, 5.0 );

var out = cnegf( z );
// returns <Complex64>

var re = realf( out );
// returns 4.0

var im = imagf( out );
// returns -5.0

z = new Complex64( 0.0, 0.0 );

out = cnegf( z );
// returns <Complex64>

re = realf( out );
// returns -0.0

im = imagf( out );
// returns -0.0

z = new Complex64( NaN, NaN );

out = cnegf( z );
// returns <Complex64>

re = realf( out );
// returns NaN

im = imagf( out );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var cnegf = require( '@stdlib/math-base-ops-cnegf' );

function randomComplex() {
    var re = discreteUniform( -50, 50 );
    var im = discreteUniform( -50, 50 );
    return new Complex64( re, im );
}

var z;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    z = randomComplex();
    o = cnegf( z );
    console.log( 'negate(%s) = %s', z.toString(), o.toString() );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/ops/cnegf.h"
```

#### stdlib_base_cnegf( z )

Negates a single-precision complex floating-point number.

```c
#include "stdlib/complex/float32.h"
#include "stdlib/complex/realf.h"
#include "stdlib/complex/imagf.h"

stdlib_complex64_t z = stdlib_complex64( 3.0f, -2.0f );
stdlib_complex64_t out = stdlib_base_cnegf( z );

float re = stdlib_realf( out );
// returns -3.0f

float im = stdlib_imagf( out );
// returns 2.0f
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` input value.

```c
stdlib_complex64_t stdlib_base_cnegf( const stdlib_complex64_t z );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/ops/cnegf.h"
#include "stdlib/complex/float32.h"
#include "stdlib/complex/reimf.h"
#include <stdio.h>

int main() {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.5f ),
        stdlib_complex64( -3.14f, 1.5f ),
        stdlib_complex64( 0.0f, -0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    stdlib_complex64_t v;
    stdlib_complex64_t y;
    float re;
    float im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        stdlib_reimf( v, &re, &im );
        printf( "z = %f + %fi\n", re, im );

        y = stdlib_base_cnegf( v );
        stdlib_reimf( y, &re, &im );
        printf( "cnegf(z) = %f + %fi\n", re, im );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-cnegf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-cnegf

[test-image]: https://github.com/stdlib-js/math-base-ops-cnegf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-ops-cnegf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-cnegf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-cnegf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-cnegf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-cnegf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-cnegf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-ops-cnegf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-ops-cnegf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-ops-cnegf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-cnegf/main/LICENSE

</section>

<!-- /.links -->
