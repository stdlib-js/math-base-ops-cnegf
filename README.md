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



<section class="usage">

## Usage

```javascript
import cnegf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cnegf@deno/mod.js';
```

#### cnegf( z )

Negates a single-precision complex floating-point number.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@deno/mod.js';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@deno/mod.js';

var z1 = new Complex64( -4.0, 5.0 );

var out = cnegf( z1 );
// returns <Complex64>

var re = realf( out );
// returns 4.0

var im = imagf( out );
// returns -5.0

var z2 = new Complex64( 0.0, 0.0 );

out = cnegf( z2 );
// returns <Complex64>

re = realf( out );
// returns -0.0

im = imagf( out );
// returns -0.0

var z3 = new Complex64( NaN, NaN );

out = cnegf( z3 );
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
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import cnegf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cnegf@deno/mod.js';

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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
