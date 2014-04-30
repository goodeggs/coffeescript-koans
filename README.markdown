# CoffeeScript Koans - koans to learn CoffeeScript #

https://github.com/goodeggs/coffeescript-koans is a port of the CoffeeScript Koans
at https://github.com/sleepyfox/coffeescript-koans to run with node rather than the
somewhat complicated setup required in that project to run in a web browser.

That project is based on Ben Hall's [Javascript Koans](https://github.com/BenHall/javascript-koans),
which in turn are based upon Edgecase's [Ruby koans](http://github.com/edgecase/ruby_koans).
The goal of the Coffeescript koans is to teach you CoffeeScript programming through testing.
I'll mercilessly plagarise the original documentation as follows:

When you first run the koans, you'll be presented with a runtime error and a
stack trace indicating where the error occurred. Your goal is to make the
error go away. As you fix each error, you should learn something about the
CoffeeScript language and functional programming in general.

Your journey towards CoffeeScript enlightenment starts in the koans/AboutExpects.coffee file.
These koans will be very simple, so don't overthink them! As you progress through
more koans, more and more CoffeeScript syntax will be introduced which will allow
you to solve more complicated problems and use more advanced techniques.

### Getting Started

Be sure you have Node.js installed and `./node_modules/.bin` in your path.

### Running the Koans

```
$ npm install
$ npm test
```

The first error will be in koans/AboutExpects.coffee, fix the first test by editing the file, and then run the tests again with

```
$ npm test
```

Rinse and repeat until all tests turn green.

Note that the koans will stop on the first failing test. If you want to run all tests regardless, run

```
$ BAIL=false npm test
```

### Inspirations & thanks

*  _Nigel Runnels-Moss (sleepyfox)_ - for the original CoffeeScript koans port from JavaScript
*  _David Laing & Greg Malcolm_ - for their Javascript/Jasmine port of the Ruby koans
*  _Edgecase_ - for the great Ruby Koans
*  _Jeremy Ashkenas and the Coffeescript crew on GitHub_ - for making CoffeeScript
*  _Douglas Crockford_ - for Javascript; the good bits
*  _Daniel P. Friedman & Matthias Felleisen_ - for 'The Little LISPer' book, where it all started

##### License

This software is licensed under the MIT license (see LICENSE for details).  Enjoy!

