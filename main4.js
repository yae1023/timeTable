'use strict';
{
  var kodoSum = 0;
  var eigoSum = 0;

  var kikai2Sum = 0;
  var denzyo2Sum = 0;
  var bussitu2Sum = 0;

  var kiden2Sum = 0;
  var kibu2Sum = 0;
  var denbu2Sum = 0;

  const kodo = document.getElementById("kodo");
  const eigo = document.getElementById("eigo");
  const kikai2 = document.getElementById("kikai2");
  const denzyo2 = document.getElementById("denzyo2");
  const bussitu2 = document.getElementById("bussitu2");
  const kiden2 = document.getElementById("kiden2");
  const kibu2 = document.getElementById("kibu2");
  const denbu2 = document.getElementById("denbu2");

 var count_2 = 25;
  while (count_2 <= 59) {
    count_2 += 1;
    const name_2 = 'radio' + String(count_2);
    let kamokuRadio_2 = document.getElementsByName(name_2);
    let len_2 =  kamokuRadio_2.length;
    console.log(len_2);

    //単位数の合計を計算する関数
    function buttonClick_2() {
      let checkValue_2 = '';
      for (let i=0; i<len_2; i++) {
        if (kamokuRadio_2.item(i).checked) {
          checkValue_2 = kamokuRadio_2.item(i).value;
    
          switch (checkValue_2) {
            case "kodo":
              kodoSum += 1;
              break;
            case "eigo":
              eigoSum += 1;
              break;
            case "kikai2":
              kikai2Sum += 2;
              break;
            case "denzyo2":
              denzyo2Sum += 2
              break;
            case "bussitu2":
              bussitu2Sum += 2
              break;
            case "kiden2":
              kiden2Sum += 2;
              break;
            case "kibu2":
              kibu2Sum += 2;
              break;
            case "denbu2":
              denbu2Sum += 2
              break;
          }
          console.log("aaa", checkValue_2);
          console.log(kikai2Sum);

          kodo.textContent = kodoSum;
          eigo.textContent = eigoSum;
          kikai2.textContent = kikai2Sum;
          denzyo2.textContent = denzyo2Sum;
          bussitu2.textContent = bussitu2Sum;
          kiden2.textContent = kiden2Sum;
          kibu2.textContent = kibu2Sum;
          denbu2.textContent = denbu2Sum;
        }
      }
    }

    let checkButton_2 = document.getElementById('checkButton_2');

    //合計で加算され続けないようにクリックの都度リセット処理
    checkButton_2.addEventListener('click', buttonClick2_2);

    //「合計」ボタンで単位数の合計
    checkButton_2.addEventListener('click', buttonClick_2);  
  }

  // リセット処理の関数
  function buttonClick2_2() {
    kodoSum = 0;
    eigoSum = 0;
    kikai2Sum = 0;
    denzyo2Sum = 0;
    bussitu2Sum = 0;
    kibu2Sum = 0;  //機械,物質
    kiden2Sum = 0; //機械,電情
    denbu2Sum = 0; //電情,物質

    kodo.textContent = kodoSum;
    eigo.textContent = eigoSum;
    kikai2.textContent = kikai2Sum;
    denzyo2.textContent = denzyo2Sum;
    bussitu2.textContent = bussitu2Sum;
    kiden2.textContent = kiden2Sum;
    kibu2.textContent = kibu2Sum;
    denbu2.textContent = denbu2Sum;
  }

  let resetButton_2 = document.getElementById('resetButton_2');
  resetButton_2.addEventListener('click', buttonClick2_2);
}
