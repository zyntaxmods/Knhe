let count = 0;
let hiya = document.getElementById("kenshie");
let button = document.getElementById("reveal").addEventListener('click', function(){
  count++
  
  
  if(count == 1){
    alert("OMG!!!")
  }
  else if (count == 2){
    alert("Too shy😣");
  }
  else if(count == 3){
    alert("Kakahiya");
  }
  else if(count == 4){
    let message = document.getElementById("msg");
  message.style.display = "block";
  const audio = document.getElementById("song");
  audio.muted = false;
  audio.play();
  }
})