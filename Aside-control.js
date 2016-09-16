    var getTea = false;
    var getStove = false;
    var getDesert = false;
    var getChaHu = false;

    var br1 = document.createElement('br');
var br2 = document.createElement('br');

    var teaSetBar = document.getElementById('add');
    var teaSetBarAl = document.getElementById('alreadyAdd');

    function addItem(imgSource, imgName) {
        var item = document.createElement('div');
        var itemPic = document.createElement('img');
        var itemName = document.createElement('p');
        itemPic.setAttribute('src', imgSource);
        itemName.innerHTML = imgName;
        item.appendChild(itemPic);
        item.appendChild(itemName);
        teaSetBar.appendChild(item);
        //teaSetBar.insertBefore(item, div);
    }

    function addItemAl(imgSource, imgName) {
        var item = document.createElement('div');
        var itemPic = document.createElement('img');
        var itemName = document.createElement('p');
        itemPic.setAttribute('src', imgSource);
        itemName.innerHTML = imgName;
        item.appendChild(itemPic);
        item.appendChild(itemName);
        teaSetBarAl.appendChild(item);
        //teaSetBar.insertBefore(item, div);
    }
    addItemAl('../item-pic/2.png', 'Cha Hu');
    addItemAl('../item-pic/1.png', 'Tea Box');
    addItemAl('../item-pic/5.png', 'Pin Ming Bei');
    addItemAl('../item-pic/4.png', 'Stove');
    addItemAl('../item-pic/3.png', 'Cha Hai');
   
//stove
   var stoveAdd = document.getElementById('stove-add');
   var A = document.createElement('a');
   var B = document.createElement('a');
   if(getTea == false){
      A.setAttribute('href', './teaBox.html');
      A.innerHTML = 'You decide to add some tea leaves.'
      B.setAttribute('href', '');
      B.innerHTML = 'You decide to warm the Cha Hu with boiling water.'
      stoveAdd.appendChild(A);
      stoveAdd.appendChild(br1);
      stoveAdd.appendChild(br2);
      stoveAdd.appendChild(B);
   }else{
      A.setAttribute('href', './chaHu.html');
      A.innerHTML = 'You turn to Cha Hu to brew the tea.'
      stoveAdd.appendChild(A);
   }

//cha Hu
var chaHuAdd = document.getElementById('chaHu-add');
var T = document.createElement('p');
var T1 = document.createElement('p');
var C = document.createElement('a');
var D = document.createElement('a');
if(getStove == false){
  T.innerHTML = "'Almost forgotten, I should boil water first.' you say,'I apologize it, I miss the step of warm cha Hu.";
  C.setAttribute('href', './stove.html');
  C.innerHTML = 'You turn to stove and boil water';
  chaHuAdd.appendChild(T);
  chaHuAdd.appendChild(C);
}else{
  T.innerHTML = "Then you fill Cha Hu with water from kettle and wash the tea set with the first tea. 'As you see, all my tea sets are pretty small. Following the warming process, the tea inside will remain hot longer as it sits’ you say, ‘and the most important, the warmth of the pot will cause the leaves to release a burst of fragrance.'";
  T1.innerHTML = "You refill the pot, 'just three minutes, and there will come our first tea.";
  C.setAttribute('href', '');
  C.innerHTML = 'Tea is ready, you pour the liquid into Drinking cup.';
  D.setAttribute('href', '');
  D.innerHTML = 'Tea is ready, you pour the liquid into Cha Hai.';
  chaHuAdd.appendChild(T);
  chaHuAdd.appendChild(T1);
  chaHuAdd.appendChild(C);
  chaHuAdd.appendChild(D);
}
