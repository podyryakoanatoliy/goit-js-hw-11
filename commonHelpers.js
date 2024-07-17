import{i as f,S as d}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a={key:"44940230-793e0fb44ed42533ed2f4cfc1",image_type:"photo",orientation:"horizontal",safesearch:"true"};function y(r){const i=`https://pixabay.com/api/?key=${a.key}&q=${r}&image_type=${a.image_type}&orientation=${a.orientation}&safesearch=${a.safesearch}`;return fetch(i).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function l(){f.error({title:"Error",backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const c=document.querySelector(".js-markup-list");let h=new d(".js-markup-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(r){return r.map(({webformatURL:i,largeImageURL:o,tags:n,likes:e,views:t,comments:s,downloads:p})=>`
        <li class="gallery-item">
          <div class="list">
            <a class="gallery-link" href="${o}">
              <img
                class="gallery-image"
                src="${i}" 
                alt="${n}"
              />
            </a>
            <ul class="adds-list">
              <li class="info-item">
                <p class="text-item text-item-name">Likes</p>
                <p class="text-item">${e}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Views</p>
                <p class="text-item">${t}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Comments</p>
                <p class="text-item">${s}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Downloads</p>
                <p class="text-item">${p}</p>
              </li>
            </ul>
          </div>
        </li>`).join("")}function x(r){c.innerHTML="",c.insertAdjacentHTML("beforeend",g(r.hits)),h.refresh()}const m=document.querySelector(".loader"),u=document.querySelector(".my-input"),b=document.querySelector(".form-btn");b.addEventListener("click",L);function L(r){m.style.display="inline-block",r.preventDefault();let i=u.value.replace(/\s+/g,"+").toLowerCase();y(i).then(o=>{m.style.display="none",o.totalHits===0?l():x(o)}).catch(l).finally(()=>{u.value=""})}
//# sourceMappingURL=commonHelpers.js.map
