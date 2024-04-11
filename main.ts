import inquirer from "inquirer"
let todos = []
let condition = true;
while(condition)
    {
let todoquestion = await inquirer.prompt(
    [
    {
        name:'firstquestion',
        type:'input',
        message:"what you want to add in your todos?"
    },
    {
        name:'secondquestion',
        type:'confirm',
        message:"do you add more",
        default:"false"
    }
    ]
);
    
todos.push(todoquestion.firstquestion);
condition = todoquestion.secondquestion;
console.log(todos);
    }














