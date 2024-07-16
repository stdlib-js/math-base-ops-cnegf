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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

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
import cnegf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cnegf@esm/index.mjs';
```

#### cnegf( z )

Negates a single-precision complex floating-point number.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import cnegf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cnegf@esm/index.mjs';

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

</script>
</body>
</html>
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/ops/cneg`][@stdlib/math/base/ops/cneg]</span><span class="delimiter">: </span><span class="description">negate a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/cabsf`][@stdlib/math/base/special/cabsf]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a single-precision complex floating-point number.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-cnegf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-ops-cnegf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-ops-cnegf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-ops-cnegf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-ops-cnegf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-ops-cnegf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-ops-cnegf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-cnegf/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/ops/cneg]: https://github.com/stdlib-js/math-base-ops-cneg/tree/esm

[@stdlib/math/base/special/cabsf]: https://github.com/stdlib-js/math-base-special-cabsf/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
