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
console.log("17 === 1:", false);
17 === 17;
console.log("17 === 17:", false);
17 === '17';
console.log("17 === '17':", false);
17 === true;
console.log("17 === true:", false);
'0' === '';
console.log("'0' === '':", false);
true === false;
console.log("true === false:", false);
true === true;
console.log("true === true:", true);
null === undefined;
console.log("null === undefined:", false);
false === 0;
console.log("false === 0:", false);

/* Нестрогое сравнение */
17 == '17';
console.log("17 == '17':", true);
'0' == '';
console.log("'0' == '':", false);
0 == '';
console.log(" 0 == '':", true);
null == undefined;
false == 0;

/* Осторожно c null и undefined */
undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;