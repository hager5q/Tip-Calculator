
function calculate(){
    var bill = document.getElementById('bill').value;
    var select = document.getElementById('select').value;
    var people = document.getElementById('people').value;
    var totaltip = document.getElementById('totaltip');
    var tip = document.getElementById('tip');

    var total = (bill * select)/people ;


    if(bill === "" || select === 0){
        alert("Please enter value");
        return ;
    }

    total = Math.round(total*100 / 100 );

    totaltip.classList.add('d-block');
    tip.innerHTML = total ;

    console.log(total);
}

