if (true) console.log('I\'m in'); // I'm in

if (true) { console.log('I\'m in'); } // undefined


if ('text') { console.log('Yes'); } // Yes

if (null) { console.log('Yes'); } else { console.log('Else'); } // Else


const age = 17;
if (age < 16) {
    console.log('Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready');
} else {
    console.log('Else');
}

// ? : ( const result = условие ? значение1 : значение2 ; )

result = amount > 17 ? 'full' : 'empty';