import{a as f,S as u,i as p}from"./assets/vendor-9PRhc7sc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function m(s){return f.defaults.baseURL="https://pixabay.com",f.get("/api/",{params:{key:"41896213-148f054eadfc6d224b6c8f8ef",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}let a;function g(s){const t=s.map(r=>`<li class="gallery-item">
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
    </li>`).join("");gallery.innerHTML=t,a?a.refresh():a=new u(".gallery a",{captionsData:"alt",captionDelay:150,animationSpeed:350,widthRatio:.9})}function d(){document.querySelector(".gallery").innerHTML=""}const h=new URL("./img/x-octagon.svg",import.meta.url).href,n=document.querySelector(".form");let l="";n.addEventListener("submit",s=>{if(s.preventDefault(),l=n.elements["search-text"].value.trim(),l==="")return p.warning({backgroundColor:"orange",message:"Sorry, there is nothing provided here to look for. Please try again!",messageColor:"#fafafa",messageSize:"16px",messageLineHeight:1.5,position:"topLeft"});d(),(void 0)(),m(l).then(t=>{if((void 0)(),n.elements["search-text"].value="",t.hits.length===0)return p.error({backgroundColor:"#ef4040",class:"error-message",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:1.5,position:"topRight",iconUrl:h});g(t.hits)}).catch(t=>{console.log(t)})});
//# sourceMappingURL=index.js.map
