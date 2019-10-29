let money = prompt('Ваш бюджет в месяц?','1000' );
let time = prompt('Введите дату в формате YYYY-MM-DD','2019-10-30' );

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце','30000');
let secondQuestion = prompt('Во сколько обойдется?','30000');
let thirdQuestion = prompt('Введите обязательную статью расходов в этом месяце','30000');
let fourthQuestion = prompt('Во сколько обойдется?','30000');


alert('Ваш дневной бюджет равен '+appData.budget/30+' Рублей');
