// оператор || (OR)
false || true; // true
false || true || false; // true
false || false || false; // false

// оператор && (AND)
false && true; // false
false && true && false; // false
true && true && true; // true
true && true; // true

// Логические операторы могут применяться к любым типам данных

//  || находит первое истинное значение

'text' || false; // 'text'
true || 'text'; // true
undefined || null || 0 || '' || null; // null


const customAmont = null;
const defaultAmount = 17;
const amount = customAmont || defaultAmount;


// && находит первое ложное значение

'text' && false; // false
true && 'text'; // 'text'
undefined && null && 0 && '' && null; // undefined; // undefined

/* == */
!true; // false
!false; // true
!'text'; // false
!!'text'; // true

// ! -> && ->