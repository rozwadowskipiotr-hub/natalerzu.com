(function(){
    const header=document.querySelector('header');
    const toggle=document.querySelector('.menu-toggle');
    const nav=document.getElementById('primary-menu');
    if(!header||!toggle||!nav)return;
    header.classList.remove('no-js');
    const closeMenu=()=>{
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded','false');
    };
    toggle.addEventListener('click',()=>{
      const isOpen=header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded',String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click',()=>{
        if(window.matchMedia('(max-width: 560px)').matches){
          closeMenu();
        }
      });
    });
    window.matchMedia('(max-width: 560px)').addEventListener('change',event=>{
      if(!event.matches){
        closeMenu();
      }
    });
  })();
