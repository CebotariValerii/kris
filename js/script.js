//task 1 
function task1 (){
    let age;
    do{
         age = prompt('Назовите ваш возраст', '')
        console.log(age)
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
task1();

//task 2

// function task 2(){
//     const num = prompt('')
// }