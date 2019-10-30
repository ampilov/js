let money, time, savings;

function start () {
    money = +prompt('Ваш бюджет в месяц?','1000' );
    time = prompt('Введите дату в формате YYYY-MM-DD','2019-10-30' );
    savings = confirm('У вас есть сбережения?');

    while (isNaN(money) || money === '' || money == null ) {
        money = +prompt('Ваш бюджет в месяц?','1000' );
    }

}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: savings,

};

function chooseExpenses () {

    let num = +prompt('Сколько статей расходов у вас в месяц (введите число)','5');

    for (let i = 0; i < num; i++){

        let a = prompt('Введите обязательную статью расходов № '+(i+1)+ ' в этом месяце','Аренда квартиры');
        let b = +prompt('Во сколько обойдется?','30000');

            if (a !== '' && typeof(a) != null && typeof(a) != "number" && typeof(a) != "undefined" && typeof(a) === "string" && b !== '' && typeof(b) != null && typeof(b) != "undefined" && typeof(b) === "number" && a.length < 50 ){
                appData.expenses[a] = b;
                console.log('Успешно');}
            else {
                i = i - 1;
            }

    }
}

chooseExpenses();


appData.moneyPerDay = appData.budget/30;


alert('Ваш дневной бюджет равен '+appData.moneyPerDay+' Рублей');

function showUserIncomeLevel () {

    if (appData.moneyPerDay < 300){
        alert('Нищенский уровень дохода');
    }
    else if (appData.moneyPerDay > 300 && appData < 1000){
        alert('Низкий уровень дохода');
    }

    else if (appData.moneyPerDay > 1000 && appData < 3000){
        alert('Средний уровень дохода');
    }

    else if (appData.moneyPerDay > 3000 && appData < 5000){
        alert('Выше среднего уровень дохода');
    }

    else if (appData.moneyPerDay > 5000){
        alert('Высокий уровень дохода');
    }

    else {
        alert('Произошла ошибка');
    }

}

showUserIncomeLevel();

function checkSavings() {

    if (appData.savings === true) {
        let save = +prompt('Какова сумма ваших накоплений?', '10000');
            let percent = +prompt('Под какой процент?','7');
         appData.monthIncome = save/100/12 * percent;
         alert('Доход в месяц с вашего депозита: '+ appData.monthIncome );
    } else {
        alert('У вас нет сбережений');
    }
    
}

checkSavings();

