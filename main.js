let money = prompt('Ваш бюджет в месяц?','1000' );
let time = prompt('Введите дату в формате YYYY-MM-DD','2019-10-30' );

let appData = {
    budget: money,
    timeData: time,

};

let exp = prompt('Введите обязательную статью расходов в этом месяце','30000');
let optExp = prompt('Во сколько обойдется?','30000');

let expenses = {
exp: optExp
};

let optionalExpenses = {

};

let income = [];

let savings = false;


console.log(appData);
console.log(expenses);
console.log(appData);

alert('Ваш дневной бюджет равен '+appData.budget/30+' Рублей');
