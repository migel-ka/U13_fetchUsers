import { expect } from "chai"; //импорт функции "стиля" expect из библиотеки chai для сравнения значений
import { fetchUsers } from '../script.js'; //подключаем функцию которую проверяем

describe('Тестирование типов данных', function() { //объявляю тест
    it('Проверка что получили массив данных', async function () { //тест на весь массив 
        const users = await fetchUsers();
        expect(users).to.be.an('array');    
      });
      it('Проверка что в объектах массива есть id и они цифры', async function () { //тест на элемент объекта в массиве 
        const users = await fetchUsers();
        users.forEach(user => {
          expect(user).to.have.property('id').that.is.a('number'); // Проверка для каждого объекта
      });
      });
      it('Проверка что в массиве есть имена и они строки', async function () { //тест на элемент объекта в массиве 
        const users = await fetchUsers();
        users.forEach(user => {
          expect(user).to.have.property('name').that.is.a('string'); // Проверка для каждого объекта
      });
      });
      it('Проверка что в объектах массива есть адреса и они объекты', async function () { //тест на элемент объекта в массиве 
        const users = await fetchUsers();
        users.forEach(user => {
          expect(user).to.have.property('address').that.is.a('object'); // Проверка для каждого объекта
      });
      });
      it('Проверка что в объектах массива есть место работы и они объекты', async function () { //тест на элемент объекта в массиве 
        const users = await fetchUsers();
        users.forEach(user => {
          expect(user).to.have.property('company').that.is.a('object'); // Проверка для каждого объекта
      });
      });
})

//Вопрос можно ли const users = await fetchUsers(); объявить один раз?