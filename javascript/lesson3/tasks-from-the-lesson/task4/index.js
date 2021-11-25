/* eslint-disable */

/* оператор || (OR) */
false || true;
console.log("false || true:", true);
false || true || false;
console.log("false || true || false:", true);
false || false || false;
console.log("false || false || false:", false);

/* оператор && (AND) */
false && true;
console.log("false && true:", false);
false && true && false;
console.log("false && true && false:", false);
true && true && true;
console.log("true && true && true:", true);

/* Логические операторы могут применятся к любым типам данных */

/* || находит первое истинное значение */
'text' || false;
console.log("'text' || false:", text);
true || 'text';
undefined || null || 0 || '' || null;

const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);

/* && находит первое ложное значение */
'text' && false;
true && 'text';
undefined && null && 0 && '' && null;

/* оператор отрицания (OR) */
!true;
!false;
!'text';
!!'text';