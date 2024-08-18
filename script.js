//скрипт получает список пользователей с публичного API и выводит их имена в консоль 

export async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') //получаю данные с сервера
    const users = await response.json() //переобразую в json
    users.forEach(user => { //цикл для каждого элемента массива
        console.log(user.name); //вывод тольео имени
      });   
      return (users) //возвращаю как значение функции
}
fetchUsers() //запускаю функцию