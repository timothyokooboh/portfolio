import{u as t,q as r}from"./query.b87c4b97.js";const n=()=>({getPortfolio:async()=>{const{data:o}=await t("portfolio",()=>r("/portfolio").findOne());return o.value}});export{n as u};
