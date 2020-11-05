function myFunction(a, b) {
    if ((a < 0 || b < 0) || (a < b)) {
        console.log('Wynik jest nieprawidłowy');
    } else {
        console.log('Wynik dodawania wynosi ' + (a + b));
        console.log('Wynik odejmowania wynosi ' + (a - b));
        console.log('Wynik mnożenia wynosi ' + (a * b));
    }
}

myFunction(6, 5);