    var getTea = false;
    var getStove = false;
    var getDesert = false;
    var getChaHu = false;

    var process = [];

    var askForTea = document.getElementById('askForTea');
    var stove = document.getElementById('stove');
    var teaBox = document.getElementById('teaBox');
    var chaHu = document.getElementById('chaHu');
    var warmCup = document.getElementById('warmCup');
    var chaHai = document.getElementById('chaHai');
    var pinMingBei = document.getElementById('pinMingBei');
    var reward = document.getElementById('reward');
    var check = document.getElementById('check');


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
    chaHai.style.display = "none";
    var stove1 = document.getElementById('stove1');
    var stove2 = document.getElementById('stove2');
    var stove3 = document.getElementById('stove3');
    if(getTea == false){
      stove1.style.display = "block";
      stove2.style.display = "none";
      stove3.style.display = "none";
    }else{
        if(getChaHu == true){
            stove2.style.display = "block";
            stove1.style.display = "none";
            stove3.style.display = "none";
        }else{
            stove3.style.display = "block";
            stove1.style.display = "none";
            stove2.style.display = "none";
        }
    }
    getStove = true;
    process.push('- Heat the water with stove');
}

function teaBoxAlice(){
    stove.style.display = "none";
    askForTea.style.display = "none";
    teaBox.style.display = "block";
    warmCup.style.display = "none";
    getTea = true;
    process.push('- Get some tea leaves');
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
      process.push('- Add tea leaves to Cha Hu');
    }else{
      chaHu2.style.display = "block";
      chaHu1.style.display = "none";
      process.push('- Brew tea in Cha Hu');
    }
    getChaHu = true;
}

function warmCupAlice(){
    stove.style.display = "none";
    askForTea.style.display = "none";
    warmCup.style.display = "block";
    process.push('- Warm tea sets with boiling water');
}

function chaHaiAlice(){
    teaBox.style.display = "none";
    warmCup.style.display = "none";
    chaHai.style.display = "block";
    chaHu.style.display = "none";
    stove.style.display = "none";
    var chaHai1 = document.getElementById('chaHai1');
    var chaHai2 = document.getElementById('chaHai2');
    if(getStove == true){
      chaHai1.style.display = "block";
      chaHai2.style.display = "none";
      if(getChaHu == true){
        process.push('- Pour liquid into Cha Hai');
      }else{
        process.push('- Brew tea in Cha Hai');
      }
    }else{
      chaHai2.style.display = "block";
      chaHai1.style.display = "none";
      process.push('- Add tea leaves to Cha Hai');
    }
}

function pinMingBeiAlice(){
    chaHai.style.display = "none";
    chaHu.style.display = "none";
    pinMingBei.style.display = "block";
    process.push('- Fill Pin Ming Bei with tea');
}

function rewardAlice(){
    reward.style.display = "block";
    pinMingBei.style.display = "none";
}

function checkAlice(){
    reward.style.display = "none";
    pinMingBei.style.display = "none";
    check.style.display = "block";
    var yourProcess = document.getElementById('yourProcess');
    var checkProcess = document.getElementById('checkProcess');
    function addProcess(x){
        var T = document.createElement('p');
        T.innerHTML = x;
        yourProcess.appendChild(T);
    }
    for(var i = 0; i < process.length; i++){
        addProcess(process[i]);
    }
    var b = ["- Heat the water with stove", "- Warm tea sets with boiling water", "- Get some tea leaves", "- Brew tea in Cha Hu", "- Pour liquid into Cha Hai", "- Fill Pin Ming Bei with tea"];
    if (process.sort().toString() == b.sort().toString()){
        var T = document.createElement('h1');
        T.innerHTML = 'Exactly! You are a master of tea!';
        yourProcess.appendChild(T);
    }else{
        var T = document.createElement('h1');
        T.innerHTML = 'Oops! You brew tea in a wrong way.';
        var T1 = document.createElement('p');
        T1.innerHTML = 'You should firstly heat the water and warm the cup. Then place tea leaves in Cha Hu and brew it. Finally you should fill the Pin Ming Bei with tea from Cha Hai.';
        yourProcess.appendChild(T);
        yourProcess.appendChild(T1);
    }
}



