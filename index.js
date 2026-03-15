import{a as m,S as f,i}from"./assets/vendor-Bm2N4jGG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="55034335-d102dc4a43f72748c32c038be";function p(t){return m.get("https://pixabay.com/api/",{params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const s=document.querySelector(".gallery"),o=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:c,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${n}" alt="${r}" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${a}</p>
            <p><b>Views</b> ${c}</p>
            <p><b>Comments</b> ${u}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </li>`).join("");s.innerHTML=o,y.refresh()}function b(){const t=document.querySelector(".gallery");t.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}const S={formEl:document.querySelector(".form")};S.formEl.addEventListener("submit",t=>{t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();if(s===""){i.warning({message:"Please enter a search query"});return}b(),L(),p(s).then(o=>{l(),o.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(o.hits)}).catch(o=>{l(),i.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight"}),console.log(o)}),t.currentTarget.reset()});
//# sourceMappingURL=index.js.map
