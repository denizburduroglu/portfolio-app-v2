if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),a={module:{uri:o},exports:t,require:l};s[o]=Promise.all(r.map((e=>a[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/CrimsonText-Regular-72c4209c.ttf",revision:null},{url:"assets/index-0deb3289.css",revision:null},{url:"assets/index-fa0dc60d.js",revision:null},{url:"assets/Lato-Regular-f43f1c77.ttf",revision:null},{url:"assets/profile-0cb18bf4.avif",revision:null},{url:"assets/resume-83b84c11.pdf",revision:null},{url:"assets/trees_1-201f53fc.avif",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"index.html",revision:"c9b335e2a730d903f1393a4aca339550"},{url:"keyboard_icon.png",revision:"b16ca8f0e3de1a1faca614cf30c23534"},{url:"manifest.webmanifest",revision:"504f9c6a6e5bc26ead18137c8804fc42"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"keyboard_icon.png",revision:"b16ca8f0e3de1a1faca614cf30c23534"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"504f9c6a6e5bc26ead18137c8804fc42"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
