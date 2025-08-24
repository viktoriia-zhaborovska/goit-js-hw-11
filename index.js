import{a as u,S as f,i as c}from"./assets/vendor-9PRhc7sc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();u.defaults.baseURL="https://pixabay.com";function p(s){return u.get("/api/",{params:{key:"41896213-148f054eadfc6d224b6c8f8ef",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const d=new f(".gallery a",{animationSpeed:350,captionsData:"alt",captionDelay:150,widthRatio:.9});function m(s){const t=s.map(r=>`<li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}">
        <ul class="photo-details">
          <li>
            <p>Likes</p>
            <p>${r.likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${r.views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${r.comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${r.downloads}</p>
          </li>
        </ul>
      </a>
    </li>`).join("");document.querySelector("ul.gallery").insertAdjacentHTML("beforeend",t),d.refresh()}function g(){document.querySelector("ul.gallery").innerHTML=""}function h(){document.querySelector(".loader").classList.add("js-loader")}function y(){document.querySelector(".loader").classList.remove("js-loader")}const L=new URL("./img/x-octagon.svg",import.meta.url).href,i=document.querySelector(".form");let n="";i.addEventListener("submit",s=>{if(s.preventDefault(),n=i.elements["search-text"].value.trim(),n==="")return c.warning({backgroundColor:"orange",message:"Sorry, there is nothing provided here to look for. Please try again!",messageColor:"#fafafa",messageSize:"16px",messageLineHeight:1.5,position:"topLeft"});g(),h(),p(n).then(t=>{if(y(),i.elements["search-text"].value="",t.hits.length===0)return c.error({backgroundColor:"#ef4040",class:"error-message",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:1.5,position:"topRight",iconUrl:L});m(t.hits)}).catch(t=>{console.log(t)})});
//# sourceMappingURL=index.js.map
