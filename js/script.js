//task 1 
function task1 (){
    let age;
    do{
         age = prompt('Назовите ваш возраст', '')

        if (age === null) {
            alert('Вы отменили ввод. Введите значение для возраста!');
        }else if(isNaN(age) || age < 0 || age.trim() === ''){
            alert('Введите положительное число для возраста')
         }

    }while(age === null || isNaN(age) || age < 0 || age.trim() === '')

    if(age <= 11){
        alert('вы являетесь ребенком')
    }
    if(age >= 12 && age <= 18){
        alert('вы являетесь подростком')
    }
    if(age >= 19 && age <= 60){
        alert('вы являетесь взрослым')
    }
    if(age >= 61 && age <= 120){
        alert('вы являетесь пенсионером')
    }
    if(age > 120){
        alert('вы нашли элексир бессмертия ?')
    }


}
// task1();

// task 2

function task2(){
    let num;
    do{
        num = prompt('Напишите цифру от 0 до 9','')
        if (num === null) {
            alert('Вы отменили ввод. Введите значение от 0 до 9!');
        }else if(isNaN(num) || num < 0 || num.trim() === ''){
            alert('Введите значение от 0 до 9!')
         }
    }while(num > 9 || num < 0 || num === null || isNaN(num) || num.trim() === '')

    switch(+num){
        case 0:
            alert(')');
            break;
        case 1:
            alert('!');
            break;
        case 2:
            alert('@');
            break;
        case 3:
            alert('#');
            break;
        case 4:
            alert('$');
            break;
        case 5:
            alert('%');
            break;
        case 6:
            alert('^');
            break;
        case 7:
            alert('&');
            break;
        case 8:
            alert('*');
            break;
        case 9:
            alert('(');
            break;
        default:
            alert('нет таких значений')
    }
}

// task2()

//task 3


function task3(){
    let bigNum;
do{
    bigNum = prompt('Напишите трехзначное число','')
    if (bigNum === null) {
        alert('Вы отменили ввод. Напишите трехзначное число!');
    }else if(isNaN(bigNum) || bigNum < 0 || bigNum.trim() === ''){
        alert('Напишите трехзначное число!')
     }
}while(bigNum > 999 || bigNum < 100 || bigNum < 0 || bigNum === null || isNaN(bigNum) || bigNum.trim() === '')

    if(bigNum[0] == bigNum[1] || bigNum[1] == bigNum[2] || bigNum[0] == bigNum[2]){
        alert('есть повторения')
    }else{
        alert('нет повторений')
    }
}

// task3()


function task5(num) {
    let arr = num.split().reverse().join()
    num == arr ? alert("это число палиндромное") : alert("это число не палиндромное")
  
}
   task5("12321")