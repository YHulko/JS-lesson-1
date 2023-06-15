let yourNumber = prompt("Задача 1: Enter number", "");
let squeNumber = yourNumber ** 2;
alert("Задача 1: Квадрат числа " + yourNumber + " рівний " + squeNumber);

/*___________________________________________________________*/
let Name = prompt("Задача 2: Введіть Ваше імя", "");
let sum = prompt("Задача 2: Введіть суму на депозит", "");
let period = prompt("Задача 2: Вкажіть на скільки місяців", "");
let dohid = +sum + +sum * 0.2;
alert(
  "Задача 2: Шановний " +
    Name +
    " ! Ви внесли " +
    sum +
    " грн. під 20 % річних на термін " +
    period +
    " місяців. За цей проміжок часу Ви заробите " +
    dohid +
    " грн."
);
/*_________________________________________________________________ */
let aNumber = prompt("Задача 3: Enter number a", "");
let bNumber = prompt("Задача 3: Enter number b", "");

alert(
  "Задача 3: Сума числа " +
    aNumber +
    " і числа  " +
    bNumber +
    " буде рівною " +
    (+aNumber + +bNumber)
);
alert(
  "Задача 3: Різниця чисел " +
    aNumber +
    " і   " +
    bNumber +
    " буде рівною " +
    (+aNumber - +bNumber)
);
alert(
  "Задача 3: Добуток чисел " +
    aNumber +
    " і   " +
    bNumber +
    " буде рівною " +
    +aNumber * +bNumber
);
alert(
  "Задача 3: Ділення числа " +
    aNumber +
    " на число   " +
    bNumber +
    " буде рівною " +
    +aNumber / +bNumber
);
