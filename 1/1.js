function addition() {
  var a = parseFloat(document.getElementById('a').value); // Считываем в переменную "a" первую цифру по  идентификатору 
  var b = parseFloat(document.getElementById('b').value); // Считываем в переменную "b" вторую цифру по  идентификатору 

  if (isNaN(a) == true) a = 0; // проверяем пустое ли поле. Если да, то вносим в переменную 0
  if (isNaN(b) == true) b = 0; // проверяем пустое ли поле. Если да, то вносим в переменную 0   

  var c = a + b;

  jAlert(a + " + " + b + " = " + c, 'Результат');
  // document.getElementById('result').innerHTML = a + " + " + b + " = " + c; // выводим результат в поле по идент. 'result'
}