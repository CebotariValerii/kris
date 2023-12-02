//task 1 
function task1 (){
    let age;
    do{
         age = prompt('Назовите ваш возраст', '')

         if(isNaN(age) || age < 0){
            alert('Введите положительное число для возраста')
         }
    }while(isNaN(age) || age < 0)
    
    
}
task1()