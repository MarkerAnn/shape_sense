function c(e){let t=0;const n=o=>{t=o,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>n(t+1)),n(0)}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;c(document.querySelector("#counter"));
