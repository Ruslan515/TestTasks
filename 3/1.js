document.getElementById('game').onclick = setRandomColor; // привязываем вызов функции начала игры  к кнопке "Game" 
var masSquare = [ //массив объектов квадратов с ключами цвета и открыт\закрыт 
  {
    'color': undefined,
    'open': false
  }, //0
  {
    'color': undefined,
    'open': false
  }, //1
  {
    'color': undefined,
    'open': false
  }, //2
  {
    'color': undefined,
    'open': false
  }, //3
  {
    'color': undefined,
    'open': false
  }, //4
  {
    'color': undefined,
    'open': false
  }, //5
  {
    'color': undefined,
    'open': false
  }, //6
  {
    'color': undefined,
    'open': false
  }, //7
  {
    'color': undefined,
    'open': false
  }, //8
  {
    'color': undefined,
    'open': false
  }, //9
  {
    'color': undefined,
    'open': false
  }, //10
  {
    'color': undefined,
    'open': false
  }, //11
  {
    'color': undefined,
    'open': false
  }, //12
  {
    'color': undefined,
    'open': false
  }, //13
  {
    'color': undefined,
    'open': false
  }, //14
  {
    'color': undefined,
    'open': false
  }, //15
];

var timerID; // таймер
var idFirstOpenSq = undefined// переменная где храниться информация о позиции первого открытого квадарата
//если он undefined то значит еще ни одни квадрат из пары не окрывали иначе уже открыт 1й квадарта и нужно проверять цвета 
//2го открытого квадрата пары и 1 го

//переменные где будет храниться время таймера
var minute = 0; //минуты
var second = 0; //секунды
var mSecond = 0; //милисекунды

//функция  вывода в формате 00:00.000
function strTime() {
  //строковые переменные которые будут хранить время в формате 00:00.000
  var strMinute = '';
  var strSecond = '';
  var strMsecond = '';
  var strSum = '';

  if (mSecond < 10) {
    strMsecond = '0' + mSecond;
  } else {
    if (10 < mSecond < 100) {
      strMsecond = '' + mSecond;
    } else {
      strMsecond = mSecond;
    }
  }
  if (second < 10) {
    strSecond = '0' + second;
  } else {
    strSecond = second;
  }

  if (minute == 0) {
    strMinute = '00';
  } else {
    if (minute < 10) {
      strMinute = '0' + minute;
    } else {
      strMinute = minute;
    }
  }

  strSum = strMinute + ':' + strSecond + '.' + strMsecond;
  return strSum;
}

//функция для отсчета таймера
//подразумеваеться что пользователь уложиться в 1 час согласно поставленной задаче и принтскрину
function timer() {
  var outStr = '';
  mSecond += 20; // шаг милисекунды 
  if (mSecond >= 1000) { // если больше 1000 мсекунд
    mSecond = 0;
    second++;
    if (second >= 60) {
      second = 0;
      minute++;
    }
  }
  outStr = strTime();
  //выводим таймер
  document.getElementById('timer').innerHTML = outStr;
}



//функция которая рандомно устанавливает цвета для 8 пар квадратов
function setRandomColor() {

  idFirstOpenSq = undefined; //игра начинаеться
  

  timerID = setInterval(timer, 20); //включаем таймер с минимально возможным шагом 4

  //начинаем играть заново и значит все обнуляем
  for (i = 0; i < masSquare.length; i++) {
    masSquare[i].color = undefined;
    masSquare[i].open = false;
  }

  //перебираем в цикле каждый квадрат 
  // цикл из 8 итераций в связи с тем, что из 16 квадратов 8 пар имеют одинаковый цвет
  for (var i = 0; i < 8; i++) {
    var letters = '0123456789ABCDEF'.split(''); // строка с возомжными кодами цветов
    var colorSq = '#'; // переменная где будет храниться цвет
    //генерируем цвет в 16ом формате. цвет состоит из 6 цифр
    for (var j = 0; j < 6; j++) {
      colorSq += letters[Math.round(Math.random() * 15)]; // выбираем j-ю позицию в коде  цвета из строки с возможными кодами рандомно
    }

    var position1; // номер 1го квадрата куда будет занесен цвет. так же номер генерируем случайно 
    var position2; // номер 2го квадрата куда будет занесен цвет

    //генерируем номер для 1го квадрата пары
    do {
      position1 = Math.round(Math.random() * 15);
    } while (masSquare[position1].color != undefined); // проверяем что данный квадрат не закрашен
    //вносим цвета для 1го квадрата из пары
    masSquare[position1].color = colorSq;
    //console.log(i + ' итерация: ' + 'position1 - Квадрат # ' + position1 + ' имеет цвет: ' + colorSq);

    do {
      position2 = Math.round(Math.random() * 15); // так же  генерируем случайно номер 2го квадрата
    } while ((position1 == position2) || (masSquare[position2].color != undefined)); // проверяем что это разные кадраты и он тоже не заполнен

    //вносим цвет для 2го квадрата пары
    masSquare[position2].color = colorSq;

    // console.log(i + ' итерация: ' + 'position2 - Квадрат #' + position2 + ' имеет цвет: ' + colorSq);

    /*
    var square1 = document.getElementById(position1);
    square1.style.background = colorSq;
    var square2 = document.getElementById(position2);
    square2.style.background = colorSq;
    */
  }
}


//функция проверки отрыты ли все квадраты
function checkOpenSq() {
  var check = true;
  for (i = 0; i < masSquare.length; i++) {
    check = check && masSquare[i].open;
    console.log(check);
  }
  console.log(check);
  return check;
}

//создаем обработчик изменения цветов квадратов при нажатии
var sqareNum = document.getElementsByClassName('square'); // для всех объектов с классом ''square

for (i = 0; i < sqareNum.length; i++) {
  sqareNum[i].addEventListener("click", setColor);
}

function setColor() {
  numSquare = this.id; //номер квадрта по которому кликнули

  if (!masSquare[numSquare].open) { //проверяем открыт ли квадрат или нет
    document.getElementById(numSquare).style.background = masSquare[numSquare].color; //показываем пользователю какого цвета квадрат
  
    if (idFirstOpenSq == undefined) { // если открываем 1й квадрат пары
      idFirstOpenSq = numSquare; // записываем номер квадрата 
      masSquare[numSquare].open = true; // устанавливаем у данного квадрата свойство что он открыт
      console.log(masSquare[numSquare]);

    } else { // если открываем 2й квадрат пары

      if (masSquare[idFirstOpenSq].color == masSquare[numSquare].color) { // проверяем одинаковго ли цвета
        // если да, то оставлем оба квадрата в цвете
        masSquare[numSquare].open = true;
        console.log('Совпали цветом');
        console.log(masSquare[numSquare]);
        console.log(masSquare[idFirstOpenSq]);
        //и обнуляем счетчик открытых квадратов
        idFirstOpenSq = undefined;
        
        if (checkOpenSq()) { // если вскрыли последний квадрат
          var strOut = strTime();
          clearInterval(timerID); //останавливаем таймер
          setTimeout(() => {
            alert('Вы выиграли ! \n Ваше время: ' + strOut);
          }, 500); 
          return false;
        }

      } else { //если оба квадрата разного цвета , то нужно установить свойство что они закрыты и сделать их белыми 
               
        masSquare[numSquare].open = false;
        masSquare[idFirstOpenSq].open = false;
        //console.log('Не Совпали цветом!!!');
        //console.log(masSquare[numSquare]);
        //console.log(masSquare[idFirstOpenSq]);

        setTimeout(outputDelay, 300,numSquare);//закрашиваем в белый цвет квадрат по которому кликнули через 300 мс
       
        setTimeout(outputDelay, 300, idFirstOpenSq); //закрашиваем в белый цвет 1й квадрат пары по которому кликнули через 300 мс
        
        //document.getElementById(numSquare).style.background = '#fff'; //закрашиваем квадрат по которому кликнули
        //document.getElementById(idFirstOpenSq).style.background = '#fff'; //закрашиваем 1й квадрат пары
        
        //и обнуляем счетчик открытых квадратов
        idFirstOpenSq = undefined;
        
      }
    }


  }

  //console.log(this.id);
}

//функция закрашивания квадратов в белый цвет
function outputDelay(numberSq) {
 // console.log('скрывается квадрат - ' + numberSq);
  document.getElementById(numberSq).style.background = '#fff';
}