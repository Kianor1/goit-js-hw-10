import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as h,i as l}from"./assets/vendor-651d7991.js";let c;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(c=t[0],c<new Date){const e=document.querySelector("[data-start]");e.disabled=!0,l.error({title:"Error",message:"Please choose a date in the future"})}else document.querySelector("[data-start]").disabled=!1}};let u;function S(){const t=document.querySelector("[data-start]");t.disabled=!0,u=setInterval(()=>{const e=new Date,o=c-e;if(console.log(o),o<=1e3)clearInterval(u),i({days:0,hours:0,minutes:0,seconds:0}),l.success({title:"Success",message:"Countdown timer reached zero"});else{const{days:n,hours:d,minutes:s,seconds:a}=q(o);i({days:n,hours:d,minutes:s,seconds:a})}},1e3)}function i({days:t,hours:e,minutes:o,seconds:n}){document.querySelector("[data-days]").textContent=r(t),document.querySelector("[data-hours]").textContent=r(e),document.querySelector("[data-minutes]").textContent=r(o),document.querySelector("[data-seconds]").textContent=r(n)}function q(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:m,seconds:f}}function r(t){return t<10?`0${t}`:t}document.addEventListener("DOMContentLoaded",()=>{h("#datetime-picker",y),document.querySelector("[data-start]").addEventListener("click",S)});
//# sourceMappingURL=commonHelpers.js.map
