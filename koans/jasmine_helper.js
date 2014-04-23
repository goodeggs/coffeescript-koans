require('coffee-script/register');
if (process.env['BAIL'] != 'false') {
  require('jasmine-bail-fast');
  jasmine.getEnv().bailFast();
}