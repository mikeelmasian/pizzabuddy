(function(){
  var KEY='pb-consent';
  function stored(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function save(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  function apply(v){if(window.gtag)gtag('consent','update',{analytics_storage:v==='granted'?'granted':'denied'})}
  var s=stored();
  if(s){apply(s);return}
  function show(){
    var b=document.createElement('div');
    b.setAttribute('role','region');b.setAttribute('aria-label','Cookie notice');
    b.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;max-width:560px;margin:0 auto;background:#fff;color:#4A2118;border:2px solid #FFD2BC;border-radius:18px;padding:16px;box-shadow:0 6px 18px rgba(74,33,24,.2);font:15px/1.5 system-ui,sans-serif;z-index:9999';
    b.innerHTML='<p style="margin:0 0 12px">We use Google Analytics cookies to count visits. No ads, no personal info. <a href="/privacy.html" style="color:#137A3F">Details</a></p><div style="display:flex;gap:10px;flex-wrap:wrap"><button id="pb-yes" style="background:#1F9D55;color:#fff;border:0;border-radius:999px;padding:10px 20px;font:600 15px system-ui;cursor:pointer">Accept</button><button id="pb-no" style="background:#fff;color:#4A2118;border:2px solid #FFD2BC;border-radius:999px;padding:8px 20px;font:600 15px system-ui;cursor:pointer">Decline</button></div>';
    document.body.appendChild(b);
    function done(v){save(v);apply(v);b.remove()}
    b.querySelector('#pb-yes').onclick=function(){done('granted')};
    b.querySelector('#pb-no').onclick=function(){done('denied')};
  }
  if(document.body)show();else document.addEventListener('DOMContentLoaded',show);
})();
