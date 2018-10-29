const inq = require('inquirer');
inq.prompt([{
    type: 'confirm',
    name: 'test',
    message: 'Are you handsome?',
    default: true
}]).then((answers)=>{
    console.log(`结果为：${JSON.stringify(answers)}`)
})