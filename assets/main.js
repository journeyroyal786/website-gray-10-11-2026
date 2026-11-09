(function(){var b=document.querySelector('.burger'),n=document.querySelector('header nav');
b&&b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.tabs button').forEach(function(t){t.addEventListener('click',function(){
document.querySelectorAll('.tabs button').forEach(function(x){x.setAttribute('aria-selected',x===t)});
document.querySelectorAll('.panel').forEach(function(p){p.hidden=p.dataset.p!==t.dataset.t})})});
document.querySelectorAll('.rjform').forEach(function(f){f.addEventListener('submit',function(ev){ev.preventDefault();
var d=new FormData(f),m='Name: '+d.get('n')+'\nPhone: '+d.get('p')+'\nEmail: '+d.get('e')+'\n\n'+d.get('m');
window.open('https://wa.me/971567494755?text='+encodeURIComponent(m),'_blank')})})})();
