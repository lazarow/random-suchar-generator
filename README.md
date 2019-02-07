# Biblioteka generująca losowy suchar z portalu sucharry.pl

Biblioteka generuje w postaci tekstowej lowosy suchar z serwisu suchaRRy.pl.
Kod ma charakter prototypowy i pod żadnym pozorem nie powinien zostać wykorzystany do innych celów. Biblioteka została 
stworzona dla celów demonstracyjnych dla jednego z zadań.

Pobierane treści są własnością portalu sucharry.pl.

Biblioteka składa się z jednej funkcji `randomSucharGenerator` zwracającej `Promise`.

Przykład użycia:
```js
const randomSucharGenerator = require('./randomSucharGenerator');

randomSucharGenerator().then(
    suchar => {
        console.log(suchar);
    },
    error => {
        console.log(error);
    }
);
```
