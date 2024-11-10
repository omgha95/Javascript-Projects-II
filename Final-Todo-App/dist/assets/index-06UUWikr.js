(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const f=document.querySelector(".DarkThemeToggle"),T=document.querySelector("body"),m=document.querySelector(".TaskList__input"),L=document.querySelector(".TaskList__form"),u=document.querySelector(".TaskList__list");document.querySelector(".TaskList__taskContent");const _=document.querySelector(".TaskList__incompleteTasksCount"),h=()=>document.querySelectorAll(".TaskList__checkbox"),v=()=>document.querySelectorAll(".TaskList__deleteIcon"),y=()=>{h().forEach((s,a)=>{s.onclick=o=>{g(o,a-1)},s.onkeydown=o=>o.key==="Enter"&&g(o,a)}),v().forEach((s,a)=>{s.onclick=()=>{O(a)}})};L.onsubmit=e=>{e.preventDefault();const t=m.value.trim();F(t)};const k=document.querySelectorAll(".TaskList__navList-button");k.forEach(e=>{e.onclick=t=>{A(t.target.textContent),k.forEach(s=>s.classList.remove("active")),t.target.classList.add("active")}});const C=document.querySelector(".TaskList__clearCompletedBtn");C.onclick=()=>w();let r=[];const S=()=>{T.classList.toggle("isDark"),localStorage.getItem("darkModeFlag")==="true"?localStorage.setItem("darkModeFlag","false"):localStorage.setItem("darkModeFlag","true")},i=e=>{localStorage.setItem("tasks",JSON.stringify(e))},c=()=>{const e=localStorage.getItem("tasks"),t=e?JSON.parse(e):[];return r.length=0,r.push(...t),r},I=()=>c().filter(t=>!t.isCompleted).length,E=()=>{const e=I();_.innerHTML=e},b=()=>{u.querySelectorAll(".TaskList__taskContent").forEach(t=>{t.addEventListener("dragstart",D),t.addEventListener("dragover",q),t.addEventListener("drop",x)})},D=e=>{e.dataTransfer.setData("text/plain",e.target.dataset.index),e.target.classList.add("dragging")},q=e=>{e.preventDefault()},x=e=>{e.preventDefault();const t=parseInt(e.dataTransfer.getData("text/plain")),s=parseInt(e.target.closest(".TaskList__taskContent").dataset.index);if(t===s)return;const a=c(),o=a[t];a.splice(t,1),a.splice(s,0,o),i(a),p(a)},p=e=>{let t="";e.forEach((s,a)=>{t+=`
    <li class="TaskList__taskContent${s.isCompleted?" isChecked":""}" 
        draggable="true" 
        data-index="${a}">
      <div class="TaskList__checkbox" tabindex="0" role="button">
        <img
          class="TaskList__checkboxImg"
          src="./images/icon-check.svg"
          alt="check mark icon"
        />
      </div>
      <div class="TaskList__valueContent">
        <p class="TaskList__value">${s.taskContent}</p>
        <img
          class="TaskList__deleteIcon"
          src="./images/icon-cross.svg"
          alt="cross-icon"
        />
      </div>
    </li>
    `}),u.innerHTML=t,E(),y(),b()},M=()=>{u.innerHTML=`<li class="TaskList__taskContent">
    <p>Hooray! You have no pending tasks. 🎉</p>
  </li>`},l=e=>{e!=null&&e.length?p(e):M()},F=e=>{const t={taskContent:e,isCompleted:!1};r.push(t),m.value="",i(r),l(r)},O=e=>{const t=c();t.splice(e,1),i(t),l(t)},g=(e,t)=>{const s=c();e.currentTarget.parentElement.classList.toggle("isChecked"),s[t].isCompleted=!s[t].isCompleted,i(s),l(s)},A=e=>{const t=c();let s;switch(e){case"Active":s=t.filter(a=>!a.isCompleted);break;case"Completed":s=t.filter(a=>a.isCompleted);break;default:s=t}l(s)},w=()=>{const t=c().filter(s=>!s.isCompleted);i(t),l(t)},N=()=>{localStorage.getItem("darkModeFlag")==="true"?document.body.classList.add("isDark"):document.body.classList.remove("isDark"),c(),l(r)};f.onclick=()=>S();window.onload=N;
