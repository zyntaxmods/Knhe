let button = document.getElementById("submit").addEventListener('click', function(){
  let crush = document.getElementById("you").value;
  let kenshie = crush.toLowerCase();
  if(kenshie == "kenshie" || kenshie == "jee" || kenshie == "kenshie jee rafinian" || kenshie == "red"){
    let happy = document.getElementById("nah").src = "happy.gif";
    setTimeout(function() {
      window.location.href = "confess.html";
    }, 3000);
  }
  else{
    let iyak = document.getElementById("nah").src = "pighati.gif";
  }
})