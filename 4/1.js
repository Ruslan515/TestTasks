var horsePosition = [0, 0] //позиция коня
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

var idHorsePosition = []; // массив где храняться позиции возможных ходов для id квадратов

//заполняем таблицу координат коня horsePostion согласно id квадрата
function fillPosHorse(idHorse) {
  horsePosition[0] = idHorse[0].charCodeAt(0) - 96;
  horsePosition[1] = idHorse[1].charCodeAt(0) - 48; // храниться позиция по цифре
 // console.log('позиция в цифрах - ' + horsePosition);

}

//вычисляет возможные ходы конем
function calculateHorsePosition() {

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
  //console.log('possibleMove: ' + possibleMove);
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
  //console.log('posMov: ' + posMov);
  // заносим в матрицу возмоные ходы исходя из текущей позиции
  for (i = 0; i < possibleMove.length; i++) {
    //console.log('possibleMove[' + i + '][1]: ' + possibleMove[i][1]);
    posMov[i][0] = possibleMove[i][0] + horsePosition[0];
    posMov[i][1] = possibleMove[i][1] + horsePosition[1];
    // console.log(numberPos);
     //console.log('возможный ход - ' + posMov[i][0]+ posMov[i][1]);
     //console.log(posMov[i][1]);
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
  var j = 0; //переменная для определения места в массиве возможных ходов id
  for (i = 0; i < possibleMove.length; i++) {
    if (posMov[i][0] > 0 && posMov[i][0] < 9) { // проверяем границы по букве
      if (possibleMove[i][1] > 0 && possibleMove[i][1] < 9) { // проверяем границы по цифре
        //console.log(possibleMove[i][0]);
        idHorsePosition[j] = possibleMove[i][0] + possibleMove[i][1]; // записываем в массив возможный ход в виде id квадрата который мы будем красить
        j++;
        ResultStr = ResultStr + possibleMove[i][0] + possibleMove[i][1] + ' ';
      }
    }
  }
  //console.log('возможные ходы:' + ResultStr);
  //console.log(idHorsePosition);
  
}


//выводим возможные ходы конем на экран
function displayResult() {
  for (i = 0; i < idHorsePosition.length; i++) {
    squareID = document.getElementById(idHorsePosition[i]); // получаем элемент по id
    squareID.style.background = '#00FF00'; // красим

  }
}

function startGame() {
  //берем все белые и черные квадраты. их определяем по id
  var whiteSq = document.getElementsByClassName('white');
  var blackSq = document.getElementsByClassName('black');
  for ( i = 0; i < whiteSq.length; i++) {
    whiteSq[i].style.background = '#fFF';  
    //console.log(whiteSq[i].style.background)  ;
    blackSq[i].style.background = '#000';
  }
  //console.log('закрасили в стартовые цвета');
}

function clickOnSquare() {
  //обнуляем все данные
  horsePosition = [0, 0];
  idHorsePosition = [];
    
  startGame(); //устанавливаем для всех квадратов их исходные цвета перед тем как начнем красить возможные ходы
  var numberID = this.id;
  this.style.background = '#40E0D0'; //красим квадрат по которому нажали
  //console.log('позиция id - ' + numberID);

  fillPosHorse(numberID); //заполняем таблицу текущей позиции
  calculateHorsePosition(); //вычисляем возможные ходы
  displayResult();//выводим результат
}



var square = document.getElementsByTagName('td'); // собираем все квадраты с тэгом 'td'
//и для всех квадратов устанавливаем функцию clickOnSquare() отработки клика по ней
for (i = 0; i < square.length; i++) {
  square[i].addEventListener("click", clickOnSquare); //будем "слушать" все нажатия на квадраты
}