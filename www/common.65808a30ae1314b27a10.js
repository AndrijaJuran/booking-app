(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6WfQ":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("mrSG"),i=function(t,e,n,i,o){return r.b(void 0,void 0,void 0,function(){var a;return r.e(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})},o=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"7ASG":function(t,e,n){"use strict";var r=n("CcnG"),i=n("oBZk"),o=n("ZZ/e"),a=n("9Uo9");n.d(e,"a",function(){return l});var c=r.nb({encapsulation:0,styles:[[".map[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background-color:transparent;opacity:0;transition:opacity 150ms ease-in}.map.visible[_ngcontent-%COMP%]{opacity:1}"]],data:{}});function u(t){return r.Hb(0,[r.Db(402653184,1,{mapElementRef:0}),(t()(),r.pb(1,0,null,null,11,"ion-header",[],null,null,null,i.gb,i.p)),r.ob(2,49152,null,0,o.B,[r.h,r.k,r.z],null,null),(t()(),r.pb(3,0,null,0,9,"ion-toolbar",[],null,null,null,i.Gb,i.P)),r.ob(4,49152,null,0,o.Bb,[r.h,r.k,r.z],null,null),(t()(),r.pb(5,0,null,0,2,"ion-title",[],null,null,null,i.Fb,i.O)),r.ob(6,49152,null,0,o.zb,[r.h,r.k,r.z],null,null),(t()(),r.Fb(7,0,["",""])),(t()(),r.pb(8,0,null,0,4,"ion-buttons",[["slot","primary"]],null,null,null,i.U,i.d)),r.ob(9,49152,null,0,o.l,[r.h,r.k,r.z],null,null),(t()(),r.pb(10,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(t,e,n){var r=!0;return"click"===e&&(r=!1!==t.component.onCancel()&&r),r},i.T,i.c)),r.ob(11,49152,null,0,o.k,[r.h,r.k,r.z],null,null),(t()(),r.Fb(12,0,["",""])),(t()(),r.pb(13,0,null,null,2,"ion-content",[],null,null,null,i.cb,i.l)),r.ob(14,49152,null,0,o.u,[r.h,r.k,r.z],null,null),(t()(),r.pb(15,0,[[1,0],["map",1]],0,0,"div",[["class","map"]],null,null,null,null,null))],null,function(t,e){var n=e.component;t(e,7,0,n.title),t(e,12,0,n.closeButtonText)})}function s(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"app-map-modal",[],null,null,null,u,c)),r.ob(1,4440064,null,0,a.a,[o.Hb,r.D],null,null)],function(t,e){t(e,1,0)},null)}var l=r.lb("app-map-modal",a.a,s,{center:"center",selectable:"selectable",closeButtonText:"closeButtonText",title:"title"},{},[])},"9Uo9":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("ZZ/e");var r=n("AytR"),i=function(){function t(t,e){this.modalCtrl=t,this.renderer=e,this.center={lat:45.089,lng:14.585},this.selectable=!0,this.closeButtonText="Odustani",this.title="Odaberi lokaciju"}return t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){var t=this;this.getGoogleMaps().then(function(e){t.googleMaps=e;var n=t.mapElementRef.nativeElement,r=new e.Map(n,{center:t.center,zoom:9});t.googleMaps.event.addListenerOnce(r,"idle",function(){t.renderer.addClass(n,"visible")}),t.selectable?t.clickListener=r.addListener("click",function(e){var n={lat:e.latLng.lat(),lng:e.latLng.lng()};t.modalCtrl.dismiss(n)}):new e.Marker({position:t.center,map:r,title:"Odabrana lokacija"}).setMap(r)}).catch(function(t){console.log(t)})},t.prototype.onCancel=function(){this.modalCtrl.dismiss()},t.prototype.ngOnDestroy=function(){this.clickListener&&this.googleMaps.event.removeListener(this.clickListener)},t.prototype.getGoogleMaps=function(){var t=window,e=t.google;return e&&e.maps?Promise.resolve(e.maps):new Promise(function(e,n){var i=document.createElement("script");i.src="https://maps.googleapis.com/maps/api/js?key="+r.a.googleMapsAPIKey,i.async=!0,i.defer=!0,document.body.appendChild(i),i.onload=function(){var r=t.google;r&&r.maps?e(r.maps):n("Google maps SDK nije dostupan.")}})},t}()},Dgxi:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var a=n[r];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var c=o(a),u=0;u<c.length;u++)i(c[u])}});for(var r=o(e),a=0;a<r.length;a++)i(r[a]);var u=document.createElement("div");u.appendChild(e);var s=u.querySelector("div");return null!==s?s.innerHTML:u.innerHTML}catch(l){return console.error(l),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var n=t.attributes[e],r=n.name;if(a.includes(r.toLowerCase())){var c=n.value;null!=c&&c.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var u=o(t);for(e=0;e<u.length;e++)i(u[e])}},o=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},PCNd:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(){}}()},Qe3P:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n("26FU"),i=n("F/XL"),o=n("t9fZ"),a=n("15JJ"),c=n("67Y/"),u=n("xMyE"),s=n("ejWc"),l=n("qXBG"),d=n("CcnG"),f=n("t/Na"),p=function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},h=function(){function t(t,e){this.authService=t,this.http=e,this._places=new r.a([])}return Object.defineProperty(t.prototype,"places",{get:function(){return this._places.asObservable()},enumerable:!0,configurable:!0}),t.prototype.fetchPlaces=function(){var t=this;return this.authService.token.pipe(Object(o.a)(1),Object(a.a)(function(e){return t.http.get("https://ionic-angular-fb9b3.firebaseio.com/offered-places.json?auth="+e)}),Object(c.a)(function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(new s.a(n,t[n].title,t[n].description,t[n].imageUrl,t[n].price,new Date(t[n].availableFrom),new Date(t[n].availableTo),t[n].userId,t[n].location));return e}),Object(u.a)(function(e){t._places.next(e)}))},t.prototype.getPlace=function(t){var e=this;return this.authService.token.pipe(Object(o.a)(1),Object(a.a)(function(n){return e.http.get("https://ionic-angular-fb9b3.firebaseio.com/offered-places/"+t+".json?auth="+n)}),Object(c.a)(function(e){return new s.a(t,e.title,e.description,e.imageUrl,e.price,new Date(e.availableFrom),new Date(e.availableTo),e.userId,e.location)}))},t.prototype.uploadImage=function(t){var e=this,n=new FormData;return n.append("image",t),this.authService.token.pipe(Object(o.a)(1),Object(a.a)(function(t){return e.http.post("https://us-central1-ionic-angular-fb9b3.cloudfunctions.net/storeImage",n,{headers:{Authorization:"Bearer "+t}})}))},t.prototype.addPlace=function(t,e,n,r,i,c,l){var d,f,h,b=this;return this.authService.userId.pipe(Object(o.a)(1),Object(a.a)(function(t){return f=t,b.authService.token}),Object(o.a)(1),Object(a.a)(function(o){if(!f)throw new Error("Nije prona\u0111en korisnik");return h=new s.a(Math.random().toString(),t,e,l,n,r,i,f,c),b.http.post("https://ionic-angular-fb9b3.firebaseio.com/offered-places.json?auth="+o,p({},h,{id:null}))}),Object(a.a)(function(t){return d=t.name,b.places}),Object(o.a)(1),Object(u.a)(function(t){h.id=d,b._places.next(t.concat(h))}))},t.prototype.deletePlace=function(t){var e=this;return console.log("Pozvana je deletePlace",t),this.authService.token.pipe(Object(o.a)(1),Object(a.a)(function(n){return e.http.delete("https://ionic-angular-fb9b3.firebaseio.com/offered-places/"+t+".json?auth="+n)}),Object(a.a)(function(){return e.places}),Object(o.a)(1),Object(u.a)(function(n){e._places.next(n.filter(function(e){return e.id!==t}))}))},t.prototype.updatePlace=function(t,e,n,r,c,l){var d,f,h=this;return this.authService.token.pipe(Object(o.a)(1),Object(a.a)(function(t){return f=t,h.places}),Object(o.a)(1),Object(a.a)(function(t){return!t||t.length<=0?h.fetchPlaces():Object(i.a)(t)}),Object(a.a)(function(i){var o=i.findIndex(function(e){return e.id===t}),a=(d=i.slice())[o];return d[o]=new s.a(a.id,e,n,a.imageUrl,r,c,l,a.userId,a.location),h.http.put("https://ionic-angular-fb9b3.firebaseio.com/offered-places/"+t+".json?auth="+f,p({},d[o],{id:null}))}),Object(u.a)(function(){h._places.next(d)}))},t.ngInjectableDef=d.S({factory:function(){return new t(d.W(l.a),d.W(f.c))},token:t,providedIn:"root"}),t}()},SF24:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r});var r=function(){var t=window.TapticEngine;t&&t.selection()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},VFTF:function(t,e,n){"use strict";var r=n("26FU"),i=n("t9fZ"),o=n("15JJ"),a=n("xMyE"),c=n("67Y/"),u=function(){return function(t,e,n,r,i,o,a,c,u,s,l){this.id=t,this.placeId=e,this.userId=n,this.placeTitle=r,this.placeImage=i,this.firstName=o,this.lastName=a,this.guestNumber=c,this.bookedFrom=u,this.bookedTo=s,this.totalPrice=l}}(),s=n("qXBG"),l=n("CcnG"),d=n("t/Na");n.d(e,"a",function(){return p});var f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},p=function(){function t(t,e){this.authService=t,this.http=e,this._bookings=new r.a([]),this.totalPrice=new r.a(159.99),this.currentTotalPrice=this.totalPrice.asObservable()}return t.prototype.changePrice=function(t){this.totalPrice.next(t)},Object.defineProperty(t.prototype,"bookings",{get:function(){return this._bookings.asObservable()},enumerable:!0,configurable:!0}),t.prototype.addBooking=function(t,e,n,r,c,s,l,d,p){var h,b,v,m=this;return this.authService.userId.pipe(Object(i.a)(1),Object(o.a)(function(t){if(!t)throw new Error("Id korisnika nije prona\u0111en!");return v=t,m.authService.token}),Object(i.a)(1),Object(o.a)(function(i){return b=new u(Math.random().toString(),t,v,e,n,r,c,s,l,d,p),m.http.post("https://ionic-angular-fb9b3.firebaseio.com/bookings.json?auth="+i,f({},b,{id:null}))}),Object(o.a)(function(t){return h=t.name,m.bookings}),Object(i.a)(1),Object(a.a)(function(t){b.id=h,m._bookings.next(t.concat(b))}))},t.prototype.cancelBooking=function(t){var e=this;return this.authService.token.pipe(Object(i.a)(1),Object(o.a)(function(n){return e.http.delete("https://ionic-angular-fb9b3.firebaseio.com/bookings/"+t+".json?auth="+n)}),Object(o.a)(function(){return e.bookings}),Object(i.a)(1),Object(a.a)(function(n){e._bookings.next(n.filter(function(e){return e.id!==t}))}))},t.prototype.fetchBookings=function(){var t,e=this;return this.authService.userId.pipe(Object(i.a)(1),Object(o.a)(function(n){if(!n)throw new Error("Korisnik nije prona\u0111en!");return t=n,e.authService.token}),Object(i.a)(1),Object(o.a)(function(n){return e.http.get('https://ionic-angular-fb9b3.firebaseio.com/bookings.json?orderBy="userId"&equalTo="'+t+'"&auth='+n)}),Object(c.a)(function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(new u(n,t[n].placeId,t[n].userId,t[n].placeTitle,t[n].placeImage,t[n].firstName,t[n].lastName,t[n].guestNumber,new Date(t[n].bookedFrom),new Date(t[n].bookedTo),t[n].totalPrice));return e}),Object(a.a)(function(t){e._bookings.next(t)}))},t.ngInjectableDef=l.S({factory:function(){return new t(l.W(s.a),l.W(d.c))},token:t,providedIn:"root"}),t}()},aEGo:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return u});var r=n("mrSG"),i=function(t,e){return null!==e.closest(t)},o=function(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},c=/^[a-z][a-z0-9+\-.]*:/,u=function(t,e,n){return r.b(void 0,void 0,void 0,function(){var i;return r.e(this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||c.test(t)?[3,2]:(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(t,n)];case 2:return[2,!1]}})})}},ejWc:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(t,e,n,r,i,o,a,c,u){this.id=t,this.title=e,this.description=n,this.imageUrl=r,this.price=i,this.availableFrom=o,this.availableTo=a,this.userId=c,this.location=u}}()},i1UR:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return s}),n.d(e,"j",function(){return l}),n.d(e,"k",function(){return a});var r=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},i=function(t){return!!t.shadowRoot&&!!t.attachShadow},o=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},a=function(t,e,n,r,o){if(t||i(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=o,a.name=n,a.value=r||""}},c=function(t,e,n){return Math.max(t,Math.min(e,n))},u=function(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}},s=function(t){return t.timeStamp||Date.now()},l=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,e){var n=t._original||t;return{_original:t,emit:p(n.emit.bind(n),e)}},p=function(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}},"qrm+":function(t,e,n){"use strict";n.r(e),n.d(e,"GESTURE_CONTROLLER",function(){return s}),n.d(e,"createGesture",function(){return p});var r,i=n("24pd"),o=(n("lSdy"),function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new a(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new c(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===n){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(u)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(u)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}()),a=function(){function t(t,e,n,r,i){this.id=e,this.name=n,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),c=function(){function t(t,e,n,r){this.id=e,this.disable=n,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),u="backdrop-no-scroll",s=new o,l=function(t,e,n,r){var i,o,a=d(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,n,a),function(){t[o](e,n,a)}},d=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(n){r=!1}return!!r},f=function(t){return t instanceof Document?t:t.ownerDocument},p=function(t){var e=!1,n=!1,r=!0,o=!1,a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),c=a.canStart,u=a.onWillStart,d=a.onStart,p=a.onEnd,m=a.notCaptured,g=a.onMove,y=a.threshold,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},S=function(t,e,n){var r=a.maxAngle*(Math.PI/180),i="x"===a.direction,o=Math.cos(r),c=e*e,u=0,s=0,l=!1,d=0;return{start:function(t,e){u=t,s=e,d=0,l=!0},detect:function(t,e){if(!l)return!1;var n=t-u,r=e-s,a=n*n+r*r;if(a<c)return!1;var f=Math.sqrt(a),p=(i?n:r)/f;return d=p>o?1:p<-o?-1:0,l=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(0,a.threshold),j=s.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),O=function(){e&&(o=!1,g&&g(w))},k=function(){return!(j&&!j.capture()||(e=!0,r=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,u?u(w).then(E):E(),0))},E=function(){d&&d(w),r=!0},I=function(){e=!1,n=!1,o=!1,r=!0,j.release()},T=function(t){var n=e,i=r;I(),i&&(h(w,t),n?p&&p(w):m&&m(w))},P=function(t,e,n,r,i){var o,a,c,u,s,d,p,h=0,b=function(r){h=Date.now()+2e3,e(r)&&(!a&&n&&(a=l(t,"touchmove",n,i)),c||(c=l(t,"touchend",m,i)),u||(u=l(t,"touchcancel",m,i)))},v=function(r){h>Date.now()||e(r)&&(!d&&n&&(d=l(f(t),"mousemove",n,i)),p||(p=l(f(t),"mouseup",g,i)))},m=function(t){y(),r&&r(t)},g=function(t){w(),r&&r(t)},y=function(){a&&a(),c&&c(),u&&u(),a=c=u=void 0},w=function(){d&&d(),p&&p(),d=p=void 0},S=function(){y(),w()},j=function(e){e?(o&&o(),s&&s(),o=s=void 0,S()):(o||(o=l(t,"touchstart",b,i)),s||(s=l(t,"mousedown",v,i)))};return{setDisabled:j,stop:S,destroy:function(){j(!0),r=n=e=void 0}}}(a.el,function(t){var e=v(t);return!(n||!r)&&(b(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=e,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!c||!1!==c(w))&&(j.release(),!!j.start()&&(n=!0,0===y?k():(S.start(w.startX,w.startY),!0))))},function(t){e?!o&&r&&(o=!0,h(w,t),Object(i.n)(O)):(h(w,t),S.detect(w.currentX,w.currentY)&&(S.isGesture()&&k()||C()))},T,{capture:!1}),C=function(){I(),P.stop(),m&&m(w)};return{setDisabled:function(t){t&&e&&T(void 0),P.setDisabled(t)},destroy:function(){j.destroy(),P.destroy()}}},h=function(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.timeStamp;b(e,t);var o=t.currentX,a=t.currentY,c=(t.timeStamp=v(e))-i;if(c>0&&c<100){var u=(a-r)/c;t.velocityX=(o-n)/c*.7+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=e}},b=function(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r},v=function(t){return t.timeStamp||Date.now()}},uoaX:function(t,e,n){"use strict";n.d(e,"a",function(){return w}),n.d(e,"b",function(){return g}),n.d(e,"c",function(){return S}),n.d(e,"d",function(){return a});var r=n("mrSG"),i=n("24pd"),o=n("bjU6"),a=function(t){return new Promise(function(e,n){Object(i.n)(function(){c(t),u(t).then(function(n){n.animation&&n.animation.destroy(),s(t),e(n)},function(e){s(t),n(e)})})})},c=function(t){var e=t.enteringEl,n=t.leavingEl;j(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),S(e,!1),n&&S(n,!1)},u=function(t){return r.b(void 0,void 0,void 0,function(){var e;return r.e(this,function(n){switch(n.label){case 0:return[4,l(t)];case 1:return[2,(e=n.sent())?d(e,t):f(t)]}})})},s=function(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=function(t){return r.b(void 0,void 0,void 0,function(){var e;return r.e(this,function(r){switch(r.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,n.e(102).then(n.bind(null,"72vL"))]:[2,void 0];case 1:return e=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,n.e(103).then(n.bind(null,"LoTI"))];case 3:e=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,e]}})})},d=function(t,e){return r.b(void 0,void 0,void 0,function(){var i;return r.e(this,function(r){switch(r.label){case 0:return[4,p(e,!0)];case 1:return r.sent(),[4,n.e(2).then(n.bind(null,"6Qsj")).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),v(e.enteringEl,e.leavingEl),[4,b(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&m(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})},f=function(t){return r.b(void 0,void 0,void 0,function(){var e,n;return r.e(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,p(t,!1)];case 1:return r.sent(),v(e,n),m(e,n),[2,{hasCompleted:!0}]}})})},p=function(t,e){return r.b(void 0,void 0,void 0,function(){var n;return r.e(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[w(t.enteringEl),w(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})},h=function(t,e){return r.b(void 0,void 0,void 0,function(){return r.e(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},b=function(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r},v=function(t,e){g(e,o.c),g(t,o.a)},m=function(t,e){g(t,o.b),g(e,o.d)},g=function(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},y=function(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()},w=function(t){return r.b(void 0,void 0,void 0,function(){var e;return r.e(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(w))];case 3:n.sent(),n.label=4;case 4:return[2]}})})},S=function(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},j=function(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")}}}]);