    var getTea = false;
    var getStove = false;
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

    //Li
    var oolong = document.getElementById('oolong');
    var brewTea = document.getElementById('brewTea');
    var shelf = document.getElementById('shelf');
    var taste = document.getElementById('taste');
    var drink = document.getElementById('drink');
    var teaPet = document.getElementById('teaPet');

    //Qin
    var teaBook = document.getElementById('teaBook');
    var chooseTea = document.getElementById('chooseTea');
    var placeLeaves = document.getElementById('placeLeaves');
    var finalTea = document.getElementById('finalTea');
    var newSet = document.getElementById('newSet');

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

    function musicPlay(x){
        var music = document.getElementById(x);
        music.play();
    }

    //stove
    function stoveAlice() {
        stove.style.display = "block";
        askForTea.style.display = "none";
        chaHu.style.display = "none";
        chaHai.style.display = "none";
        var stove1 = document.getElementById('stove1');
        var stove2 = document.getElementById('stove2');
        var stove3 = document.getElementById('stove3');
        if (getTea == false) {
            stove1.style.display = "block";
            stove2.style.display = "none";
            stove3.style.display = "none";
        } else {
            if (getChaHu == true) {
                stove2.style.display = "block";
                stove1.style.display = "none";
                stove3.style.display = "none";
            } else {
                stove3.style.display = "block";
                stove1.style.display = "none";
                stove2.style.display = "none";
            }
        }
        getStove = true;
        process.push('- Heat the water with stove');
    }

    function teaBoxAlice() {
        stove.style.display = "none";
        askForTea.style.display = "none";
        teaBox.style.display = "block";
        warmCup.style.display = "none";
        getTea = true;
        process.push('- Get some tea leaves');
    }

    function chaHuAlice() {
        stove.style.display = "none";
        askForTea.style.display = "none";
        teaBox.style.display = "none";
        chaHu.style.display = "block";
        var chaHu1 = document.getElementById('chaHu1');
        var chaHu2 = document.getElementById('chaHu2');
        if (getStove == false) {
            chaHu1.style.display = "block";
            chaHu2.style.display = "none";
            process.push('- Add tea leaves to Cha Hu');
        } else {
            chaHu2.style.display = "block";
            chaHu1.style.display = "none";
            process.push('- Brew tea in Cha Hu');
        }
        getChaHu = true;
    }

    function warmCupAlice() {
        stove.style.display = "none";
        askForTea.style.display = "none";
        warmCup.style.display = "block";
        process.push('- Warm tea sets with boiling water');
    }

    function chaHaiAlice() {
        teaBox.style.display = "none";
        warmCup.style.display = "none";
        chaHai.style.display = "block";
        chaHu.style.display = "none";
        stove.style.display = "none";
        var chaHai1 = document.getElementById('chaHai1');
        var chaHai2 = document.getElementById('chaHai2');
        if (getStove == true) {
            chaHai1.style.display = "block";
            chaHai2.style.display = "none";
            if (getChaHu == true) {
                process.push('- Pour liquid into Cha Hai');
            } else {
                process.push('- Brew tea in Cha Hai');
            }
        } else {
            chaHai2.style.display = "block";
            chaHai1.style.display = "none";
            process.push('- Add tea leaves to Cha Hai');
        }
    }

    function pinMingBeiAlice() {
        chaHai.style.display = "none";
        chaHu.style.display = "none";
        pinMingBei.style.display = "block";
        process.push('- Fill Pin Ming Bei with tea');
    }

    function rewardAlice() {
        reward.style.display = "block";
        pinMingBei.style.display = "none";
    }

    function checkAlice() {
        reward.style.display = "none";
        pinMingBei.style.display = "none";
        check.style.display = "block";
        var yourProcess = document.getElementById('yourProcess');
        var checkProcess = document.getElementById('checkProcess');

        function addProcess(x) {
            var T = document.createElement('p');
            T.innerHTML = x;
            yourProcess.appendChild(T);
        }
        for (var i = 0; i < process.length; i++) {
            addProcess(process[i]);
        }
        var b = ["- Heat the water with stove", "- Warm tea sets with boiling water", "- Get some tea leaves", "- Brew tea in Cha Hu", "- Pour liquid into Cha Hai", "- Fill Pin Ming Bei with tea"];
        if (process.sort().toString() == b.sort().toString()) {
            var T = document.createElement('h1');
            T.innerHTML = 'Exactly! You are a master of tea!';
            yourProcess.appendChild(T);
        } else {
            var T = document.createElement('h1');
            T.innerHTML = 'Oops! You brew tea in a wrong way.';
            var T1 = document.createElement('p');
            T1.innerHTML = 'You should firstly heat the water and warm the cup. Then place tea leaves in Cha Hu and brew it. Finally you should fill the Pin Ming Bei with tea from Cha Hai.';
            yourProcess.appendChild(T);
            yourProcess.appendChild(T1);
        }
    }

    function backAlice() {
        check.style.display = "none";
        askForTea.style.display = "block";
        getTea = false;
        getStove = false;
        getChaHu = false;

        process = [];
        yourProcess.innerHTML = '';
    }

    //Li
     function oolongLi() {
        askForTea.style.display = "none";
        oolong.style.display = "block";
    }

     function brewTeaLi() {
        askForTea.style.display = "none";
        oolong.style.display = "none";
        brewTea.style.display = "block";
    }

    function shelfLi() {
        brewTea.style.display = "none";
        shelf.style.display = "block";
    }

    var haveWen = false;
    function editWen(){
        haveWen = true;
    }

    var taste1 = document.getElementById('taste1');
    var taste2 = document.getElementById('taste2');

    function tasteLi() {
        shelf.style.display = "none";
        brewTea.style.display = "none";
        taste.style.display = "block";
        if(haveWen == true){
            taste2.style.display = "block";
            taste1.style.display = "none";
        }else{
            taste1.style.display = "block";
            taste2.style.display = "none";
        }

    }

    function drinkLi() {
        taste.style.display = "none";
        drink.style.display = "block";
    }

    function teaPetLi() {
        drink.style.display = "none";
        teaPet.style.display = "block";
    }

//qin 
function teaBookQin() {
        askForTea.style.display = "none";
        teaBook.style.display = "block";
    }

function chooseTeaQin() {
        askForTea.style.display = "none";
        teaBook.style.display = "none";
        chooseTea.style.display = "block";
    }

var chooseWhat = '';

function choosePuer(){
        chooseTea.style.display = "none";
        placeLeaves.style.display = "block";
        chooseWhat = "Puer";
}

function chooseLongJin(){
        chooseTea.style.display = "none";
        placeLeaves.style.display = "block";
        chooseWhat = "LongJin";
}

function chooseOolong(){
        chooseTea.style.display = "none";
        placeLeaves.style.display = "block";
        chooseWhat = "Oolong";
}

var water1 = document.getElementById('water1');
var water2 = document.getElementById('water2');
var water3 = document.getElementById('water3');
var water4 = document.getElementById('water4');

var waterWhat = '';

function water2Qin(){
        water1.style.display = "none";
        water2.style.display = "block";
        water3.style.display = "none";
        water4.style.display = "none";
        waterWhat = 'small';

}

function water3Qin(){
        water1.style.display = "none";
        water2.style.display = "none";
        water3.style.display = "block";
        water4.style.display = "none";
        waterWhat = 'medium';

}

function water4Qin(){
        water1.style.display = "none";
        water2.style.display = "none";
        water3.style.display = "none";
        water4.style.display = "block";
        waterWhat = 'large';

}

var taste1 = document.getElementById('taste1');
var taste2 = document.getElementById('taste2');
var taste3 = document.getElementById('taste3');
var Qinsay = document.getElementById('Qinsay');


function finalTeaQin(){
    placeLeaves.style.display = "none";
    finalTea.style.display = "block";
    if(chooseWhat == "Puer"){
        taste3.style.display = "block";
    }else if(chooseWhat == "LongJin"){
        taste1.style.display = "block";
    }else{
        taste2.style.display = "block";
    }

    if(waterWhat == 'medium'){
        Qinsay.innerHTML = "'I love this taste' she say, 'you are a master of tea.'";
    }else if(waterWhat == 'large'){
        Qinsay.innerHTML = "'I love this tea' she say, 'But it's a little bit light. I think it would be better if you add less water.";
    }else{
        Qinsay.innerHTML = "'I love this tea' she say, 'But the taste is a little bit heavy. I think it would be better if you add more water to brew it.";
    }
}

function newSetQin(){
        finalTea.style.display = "none";
        newSet.style.display = "block";
}


