'use strict';
{
  var hissyuSum = 0;
  var kisoSum = 0;
  var kyoyoSum = 0;
  var englishSum = 0;
  var sportSum = 0;

  var kikaiSum = 0;
  var denzyoSum = 0;
  var bussituSum = 0;
  
  var kibuSum = 0;  //機械,物質
  var kidenSum = 0; //機械,電情
  var denbuSum = 0; //電情,物質
  var kidenbuSum = 0;  //機械,電情,物質

  const hissyu = document.getElementById("hissyu");
  const kiso = document.getElementById("kiso");
  const kyoyo = document.getElementById("liberal");
  const english = document.getElementById("lang");
  const sport = document.getElementById("sport");
  const kikai = document.getElementById("kikai");
  const denzyo = document.getElementById("denzyo");
  const bussitu = document.getElementById("bussitu");
  const kikabu = document.getElementById("kikabu");
  const kikaden = document.getElementById("kikaden");
  const denbu = document.getElementById("denbu");
  const kidenbu = document.getElementById("kidenbu");

 var count = 0;
  while (count <= 25) {
    count += 1;
    const name = 'radio' + String(count);
    let kamokuRadio = document.getElementsByName(name);
    let len =  kamokuRadio.length;
    console.log(len);

    //単位数の合計を計算する関数
    function buttonClick() {
      let checkValue = '';
      for (let i=0; i<len; i++) {
        if (kamokuRadio.item(i).checked) {
          checkValue = kamokuRadio.item(i).value;
    
          switch (checkValue) {
            case "hissyu":
              hissyuSum += 1;
              break;
            case "kogakukiso":
              kisoSum += 2;
              break;
            case "kyoyo":
              kyoyoSum += 1;
              break;
            case "english":
              englishSum += 1
              break;
            case "sport":
              sportSum += 1
              break;
            case "kikai":
              kikaiSum += 2;
              break;
            case "denzyo":
              denzyoSum += 2;
              break;
            case "bussitu":
              bussituSum += 2
              break;
            case "kiden":
              kidenSum += 2;
              break;
            case "kibu":
              kibuSum += 2;
              break;
            case "denbu":
              denbuSum += 2;
              break;
            case "kidenbu":
              kidenbuSum += 2;
              break;
          }
          console.log("aaa", checkValue);
          console.log(kisoSum);

          hissyu.textContent = hissyuSum;
          kiso.textContent = kisoSum;
          kyoyo.textContent = kyoyoSum;
          english.textContent = englishSum;
          sport.textContent = sportSum;

          kikai.textContent = kikaiSum;
          denzyo.textContent = denzyoSum;
          bussitu.textContent = bussituSum;

          kiden.textContent = kidenSum;
          kibu.textContent = kibuSum;
          denbu.textContent = denbuSum;
          kidenbu.textContent = kidenbuSum;
        }
      }
    }

    let checkButton = document.getElementById('checkButton');

    //合計で加算され続けないようにクリックの都度リセット処理
    checkButton.addEventListener('click', buttonClick2);

    //「合計」ボタンで単位数の合計
    checkButton.addEventListener('click', buttonClick);  
  }

  // リセット処理の関数
  function buttonClick2() {
    hissyuSum = 0;
    kisoSum = 0;
    kyoyoSum = 0;
    englishSum = 0;
    sportSum = 0;
    kikaiSum = 0;
    denzyoSum = 0;
    bussituSum = 0;
    kibuSum = 0;  //機械,物質
    kidenSum = 0; //機械,電情
    denbuSum = 0; //電情,物質
    kidenbuSum = 0;  

    hissyu.textContent = hissyuSum;
    kiso.textContent = kisoSum;
    kyoyo.textContent = kyoyoSum;
    english.textContent = englishSum;
    sport.textContent = sportSum;
    kikai.textContent = kikaiSum;
    denzyo.textContent = denzyoSum;
    bussitu.textContent = bussituSum;
    kiden.textContent = kidenSum;
    kibu.textContent = kibuSum;
    denbu.textContent = denbuSum;
    kidenbu.textContent = kidenbuSum;
  }

  let resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', buttonClick2);


  //タブメニュー用のコード
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}
