import{g as d,j as s,C as i,_ as g,u as l}from"./index-ziIwrS_y.js";import{r as t}from"./react-PzSkSLoa.js";import{u as c}from"./styled-components-Uwec11nI.js";import{u}from"./react-redux-sD4wxRcV.js";import"./react-router-dom-Dazc1-x_.js";import"./@react-three/fiber-EuvSAQ9I.js";const m=(A,e)=>{const r={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},o=new Image;o.onload=()=>{const n=o.width>0&&o.height>0;e(A,n)},o.onerror=()=>{e(A,!1)},o.src=`data:image/webp;base64,${r[A]}`},p=c(i)`
    background: url(${({$image:A})=>d(A)}) repeat;
    opacity: 43%;
`,a=()=>{const e=u(o=>o.theme.preference)?"backgrounds/backgroundDark":"backgrounds/backgroundLight",r=t.useMemo(()=>{m("lossless",(o,n)=>n)},[]);return s.jsx(p,{$image:r?`${e}.webp`:`${e}.png`})},k=t.lazy(()=>g(()=>import("./BackgroundCanvas-fk8Bh-Z-.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),h=c(i)`
    position: absolute;
    height: 100dvh;
    width: 100dvw;
    border-radius: 0;
    background-color: ${({theme:A})=>A.colors.background};
    z-index: -999;
    overflow: hidden;
`,U=()=>{const{width:A,height:e}=l(),r=t.useMemo(()=>typeof window.webkitConvertPointFromNodeToPage=="function",[]);return s.jsx(h,{children:r?s.jsx(a,{}):s.jsx(t.Suspense,{fallback:s.jsx(a,{}),children:s.jsx(k,{width:A,height:e})})})};export{U as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BackgroundCanvas-fk8Bh-Z-.js","assets/index-ziIwrS_y.js","assets/react-PzSkSLoa.js","assets/react-router-dom-Dazc1-x_.js","assets/react-redux-sD4wxRcV.js","assets/styled-components-Uwec11nI.js","assets/@react-three/fiber-EuvSAQ9I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
