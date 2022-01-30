String(17); //'17'
String(-17.17); //'-17.17'
String(false); //'false'
String(null); //'null'
String(1); //'1'
String(0); //'0'

/*===*/

Number('17'); //17
Number(true); //1
Number(false); //0
Number(null); //0
Number(undefined); //NaN
Number('   17   '); // 17
Number('           '); // 0
Number('       17d        '); // NaN

/*===*/

Boolean(null); // false
Boolean(undefined); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(''); // false
Boolean(' '); // true
Boolean(17); // true
Boolean('Hello'); //