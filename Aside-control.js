    var getTea = false;
    var getStove = false;
    var getDesert = false;

    var br1 = document.createElement('br');
var br2 = document.createElement('br');

    var teaSetBar = document.getElementById('add');

    function addItem(imgSource, imgName) {
        var item = document.createElement('div');
        var itemPic = document.createElement('img');
        var itemName = document.createElement('p');
        itemPic.setAttribute('src', imgSource);
        itemName.innerHTML = imgName;
        item.appendChild(itemPic);
        item.appendChild(itemName);
        teaSetBar.appendChild(item);
    }
    addItem('../item-pic/2.png', 'Cha Hu');
    addItem('../item-pic/1.png', 'Tea Box');
    addItem('../item-pic/5.png', 'Pin Ming Bei');
    addItem('../item-pic/4.png', 'Stove');
    addItem('../item-pic/3.png', 'Cha Hai');
   
   
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
      A.setAttribute('href', '');
      A.innerHTML = 'You turn to Cha Hu to brew the tea.'
      stoveAdd.appendChild(A);
   }