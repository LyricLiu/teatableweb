    var getTea = false;
    var getStove = false;
    var getDesert = false;
    var getChaHu = false;

    var askForTea = document.getElementById('askForTea');
    var stove = document.getElementById('stove');
    var teaBox = document.getElementById('teaBox');
    var chaHu = document.getElementById('chaHu');
    var warmCup = document.getElementById('warmCup');

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
    addItemAl('./item-pic/2.png', 'Cha Hu');
    addItemAl('./item-pic/1.png', 'Tea Box');
    addItemAl('./item-pic/5.png', 'Pin Ming Bei');
    addItemAl('./item-pic/4.png', 'Stove');
    addItemAl('./item-pic/3.png', 'Cha Hai');
   
//stove
function stoveAlice(){
    stove.style.display = "block";
    askForTea.style.display = "none";
    chaHu.style.display = "none";
    var stove1 = document.getElementById('stove1');
    var stove2 = document.getElementById('stove2');
    if(getTea == false){
      stove1.style.display = "block";
      stove2.style.display = "none";
    }else{
      stove2.style.display = "block";
      stove1.style.display = "none";
    }
    getStove = true;
}

function teaBoxAlice(){
    stove.style.display = "none";
    askForTea.style.display = "none";
    teaBox.style.display = "block";
    warmCup.style.display = "none";
    getTea = true;
}

function chaHuAlice(){
    stove.style.display = "none";
    askForTea.style.display = "none";
    teaBox.style.display = "none";
    chaHu.style.display = "block";
    var chaHu1 = document.getElementById('chaHu1');
    var chaHu2 = document.getElementById('chaHu2');
    if(getStove == false){
      chaHu1.style.display = "block";
      chaHu2.style.display = "none";
    }else{
      chaHu2.style.display = "block";
      chaHu1.style.display = "none";
    }
}

function warmCupAlice(){
    stove.style.display = "none";
    askForTea.style.display = "none";
    warmCup.style.display = "block";
}



