function allPos() {

  var positionInput = document.getElementById('posIn').value; // в данной переменной будем хранить введенную позицию

  //проверка корректности ввода
  if (positionInput == NaN || positionInput == '') {
    jAlert('Пустая ячейка', 'Ошибка ввода');
    //alert('Пустая ячейка');
    return 0;
  }

  var letter = positionInput[0]; // храниться позиция по букве
  letter = letter.toLowerCase(); // для единообрзия переводим в нижний регистр

  //проверка корректности ввода буквы
  if (letter.match(/[a-h]/)) {
    console.log("Letter OK"); //введена буква и продолжим работу
  } else {
    console.log("Letter Bad"); //не буква и выходим
    jAlert('Не корректный формат ввода.\n Первый элемент вводиться в виде буквы \n От a до h(латинскими буквами)!', 'Ошибка ввода');
    //alert('Не корректный формат ввода. Первый элемент вводиться в виде буквы от A-H(латинскими буквами)!');
    return;
  }

  //переводим координаты коня из Буквы в Цифру
  var letterNum = letter.charCodeAt(0) - 96;

  var numberPos = positionInput[1]; // храниться позиция по цифре
  //проверка корректности ввода цифры
  if (numberPos.match(/[1-8]/)) {
    console.log("Number OK" + ' ' + numberPos); // корректнно ввел цифру и работаем дальше
  } else {
    console.log("Number Bad");
    jAlert('Не корректный формат ввода.\n Второй элемент в виде цифры от 1 до 8!', 'Ошибка ввода');
    //alert('Не корректный формат ввода. Второй элемент в виде цифры от 1 до 8!');
    return;
  }

  // матрицы возможных ходов конем
  // первая цифра - буква на доске
  // вторая цифра - цифра на доске
  var possibleMove = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [1, -2],
    [-1, 2],
    [2, -1],
    [1, 2],
    [2, 1]
  ];

  var posMov = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [1, -2],
    [-1, 2],
    [2, -1],
    [1, 2],
    [2, 1]
  ];

  // заносим в матрицу возмоные ходы
  for (i = 0; i < possibleMove.length; i++) {
    //console.log(possibleMove[i][1]);
    posMov[i][0] = possibleMove[i][0] + letterNum;
    posMov[i][1] = possibleMove[i][1] + parseInt(numberPos);
    // console.log(numberPos);
    // console.log(posMov[i][0]);
    // console.log(posMov[i][1]);
  }

  //переводим коор-ы коня из Цифры в букву
  for (i = 0; i < possibleMove.length; i++) {
    possibleMove[i][0] = String.fromCharCode(posMov[i][0] + 96);
    possibleMove[i][1] = posMov[i][1];
    //console.log(possibleMove[i][0]);
    // console.log(possibleMove[i][1]);
  }

  //выводим рез-т
  var ResultStr = '';
  for (i = 0; i < possibleMove.length; i++) {
    if (posMov[i][0] > 0 && posMov[i][0] < 9) {
      if (possibleMove[i][1] > 0 && possibleMove[i][1] < 9) {
        console.log(possibleMove[i][0]);
        ResultStr = ResultStr + possibleMove[i][0] + possibleMove[i][1] + '\n';
      }
    }
  }
  jAlert(ResultStr, 'Возможные варианты ходов');
  //document.getElementById('result').innerHTML = ResultStr; // выводим результат в поле по идент. 'result'


}