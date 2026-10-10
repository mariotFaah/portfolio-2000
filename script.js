(function(){
  function pad(n){return String(n).padStart(2,'0')}
  var clk=document.getElementById('clock');
  if(clk){var tick=function(){var d=new Date();clk.textContent=pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds())};tick();setInterval(tick,1000)}
  var cnt=document.getElementById('count');
  if(cnt){var n=1337;try{var s=localStorage.getItem('visits');n=s?parseInt(s,10)+1:1337;localStorage.setItem('visits',String(n))}catch(e){}cnt.textContent=String(n).padStart(6,'0')}
  var send=document.getElementById('send');
  if(send){send.addEventListener('click',function(){
    var nom=document.getElementById('nom'),msg=document.getElementById('msg');
    var a=nom.value.trim(),m=msg.value.trim();
    if(!a||!m){alert('Il faut un pseudo ET un message !');return}
    var div=document.createElement('div');div.className='entry';
    var b=document.createElement('b');b.textContent=a;
    div.appendChild(b);div.appendChild(document.createTextNode(' : '+m));
    document.getElementById('guest').appendChild(div);nom.value='';msg.value='';
  })}
})();
