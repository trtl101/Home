function plusOne() {
  var count = document.getElementById('count');

  number++;
  count.innerHTML = number;
       
    if(number >= 152 ){
        number += -1;
    }
}
  var number = 0;