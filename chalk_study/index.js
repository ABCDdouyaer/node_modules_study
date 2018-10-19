const chalk = require('chalk');
const log = console.log;

log(chalk.blue('hello world'));

log(chalk.red('wang') + '|' + chalk.green('wei'));

log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk`
CPU: {red ${90}%}
RAM: {green ${100}%}
DISK: {rgb(255,131,0) ${100}%}
`);

log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
