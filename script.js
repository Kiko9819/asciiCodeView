let codeBlock=document.getElementById('code');
let chars=document.getElementById('alpha-char');
window.addEventListener('keydown',function(e){
  if(e.key.toUpperCase()===e.key){
    codeBlock.textContent=e.keyCode+32;
  }else{
    codeBlock.textContent=e.keyCode;
  }
  chars.textContent=e.key;
});
