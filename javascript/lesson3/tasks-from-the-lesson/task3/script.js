/* eslint-disable */

/* Результатом сравнения является булевое значение */

/* Сравнение чисел */
const a = 17;
const b = 5;
a > b;
console.log('a > b:', true);
a <= b;
console.log('a <= b:', false);
a == b;
console.log('a == b:', false);
a != b;
console.log('a != b:', true);

/* Сравнение строк */
'a' < 'b';
console.log("'a' < 'b':", true);
'ab' > 'a';
console.log("'ab' > 'a':", true);

/* При сравнении переменных разных типов они преобразуются в числа */
'17' > 1;
console.log("'17' > 1:", true);

/* Строгое сравнение */
17 === 1;
console.log("17 === 1:", true);
17 === 17;
17 === '17';
17 === true;
'0' === '';
true === false;
true === true;
null === undefined;
false === 0;

/* Нестрогое сравнение */
17 == '17';
'0' == '';
0 == '';
null == undefined;
false == 0;

/* Осторожно c null и undefined */
undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;