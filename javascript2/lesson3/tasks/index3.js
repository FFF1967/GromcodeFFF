const a = 17;
const b = 5;

// Результатом сравнения является булево

a > b; // true
a < b; // false
a <= b; // false
a >= b; // true
a == b; // false
a != b; // true

/* === */

'a' < 'b'; // true
'ab' > 'a'; // true
'aa' <= 'a'; // false
'aa' >= 'a'; // true
'a' > 'A'; // true

// При сравнении переменных разных типов

'17' > 1; // true

17 == '17'; // true

17 === 1; // false
17 === 17; // true
17 === '17'; // false
17 === true; // false
'0' === ''; // false
true === false; // false
true === true; // true
null === undefined; // flse
false === 0; // false

/* === */

0 == ''; // true
0 === ''; // false

17 == '17'; // true
'0' == ''; // false
0 == ''; // true
null == undefined; // true
false == 0; // true
undefined == null; // true
undefined == 0; // false
null == 0; // false
undefined < 0; // false
undefined > 0; // false