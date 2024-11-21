var y=Object.defineProperty;var s=(i,t)=>y(i,"name",{value:t,configurable:!0});import{b as o}from"./index-ba58a5fe.js";class c{async createRsaKeyPair(){const t=await crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["encrypt","decrypt"]);return{publicKey:window.btoa(this.ab2str(await window.crypto.subtle.exportKey("spki",t.publicKey))),privateKey:window.btoa(this.ab2str(await window.crypto.subtle.exportKey("pkcs8",t.privateKey)))}}ab2str(t){return String.fromCharCode.apply(null,new Uint8Array(t))}str2ab(t){const r=new ArrayBuffer(t.length),n=new Uint8Array(r);for(let e=0,a=t.length;e<a;e++)n[e]=t.codePointAt(e);return r}async decryptSessionKey(t,r){const n=new Uint8Array(o.Buffer.from(t,"base64")),e=await window.crypto.subtle.importKey("pkcs8",this.str2ab(window.atob(r)),{name:"RSA-OAEP",hash:"SHA-256"},!0,["decrypt"]),a=await window.crypto.subtle.decrypt({name:"RSA-OAEP"},e,n);return o.Buffer.from(a).toString("base64")}async encryptMessageSymmetrically(t,r){const n=window.crypto.getRandomValues(new Uint8Array(16)),e=await window.crypto.subtle.importKey("raw",this.str2ab(window.atob(r)),"AES-CTR",!0,["encrypt"]),a=await window.crypto.subtle.encrypt({name:"AES-CTR",counter:n,length:64},e,o.Buffer.from(t));return{encryptedValue:o.Buffer.from(a).toString("base64"),iv:o.Buffer.from(n).toString("base64")}}}s(c,"BrowserCryptoHandler");export{c as BrowserCryptoHandler};
//# sourceMappingURL=browserCryptoHandler-b5c9e946.js.map