!function(){let e=document.body.querySelector(".header__burger"),d=document.body.querySelector(".header-down__body");function n(e){let d=document.querySelector(".header-down__menu"),n=document.querySelectorAll(".header-down__menu")[1],o=document.querySelectorAll(".header-down__body")[1],t=document.querySelector(".header-top__lang"),c=document.querySelector(".header-top");e<=768?d.classList.contains("done")||(d.classList.add("done"),d.append(n)):(d.classList.remove("done"),o.append(n)),e<=768?t.classList.contains("done")||(t.classList.add("done"),d.prepend(t)):(t.classList.remove("done"),c.prepend(t))}e.addEventListener("click",()=>{e.classList.toggle("active"),d.classList.toggle("active"),document.body.classList.toggle("lock")}),window.addEventListener("resize",(function(){n(window.innerWidth)})),window.addEventListener("load",(function(){n(window.innerWidth)}))}();