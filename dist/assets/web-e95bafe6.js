import{W as t}from"./index-3e57cf8c.js";class o extends t{constructor(){super(...arguments),this.wakeLock=null,this._isSupported="wakeLock"in navigator}async keepAwake(){this._isSupported||this.throwUnsupportedError(),this.wakeLock&&await this.allowSleep(),this.wakeLock=await navigator.wakeLock.request("screen")}async allowSleep(){var e;this._isSupported||this.throwUnsupportedError(),(e=this.wakeLock)===null||e===void 0||e.release(),this.wakeLock=null}async isSupported(){return{isSupported:this._isSupported}}async isKeptAwake(){return this._isSupported||this.throwUnsupportedError(),{isKeptAwake:!!this.wakeLock}}throwUnsupportedError(){throw this.unavailable("Screen Wake Lock API not available in this browser.")}}export{o as KeepAwakeWeb};