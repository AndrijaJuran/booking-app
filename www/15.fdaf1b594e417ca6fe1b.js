(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ZpdU:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),i=u("ZZ/e"),b=u("VFTF"),t=function(){function l(l,n){this.bookingService=l,this.loadingCtrl=n,this.isLoading=!1}return l.prototype.ngOnInit=function(){var l=this;this.bookingSub=this.bookingService.bookings.subscribe(function(n){l.loadedBookings=n})},l.prototype.ionViewWillEnter=function(){var l=this;this.isLoading=!0,this.bookingService.fetchBookings().subscribe(function(){l.isLoading=!1})},l.prototype.onCancelBooking=function(l,n){var u=this;n.close(),this.loadingCtrl.create({message:"Otkazivanje..."}).then(function(n){n.present(),u.bookingService.cancelBooking(l).subscribe(function(){n.dismiss()})})},l.prototype.ngOnDestroy=function(){this.bookingSub&&this.bookingSub.unsubscribe()},l}(),e=function(){return function(){}}(),c=u("pMnS"),r=u("oBZk"),a=u("ZYCi"),p=u("Ip0R"),s=o.nb({encapsulation:0,styles:[[""]],data:{}});function k(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,3,"ion-col",[["offset-md","3"],["size-md","6"],["text-center",""]],null,null,null,r.bb,r.k)),o.ob(1,49152,null,0,i.t,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,1,"ion-spinner",[["color","primary"]],null,null,null,r.yb,r.H)),o.ob(3,49152,null,0,i.rb,[o.h,o.k,o.z],{color:[0,"color"]},null)],function(l,n){l(n,3,0,"primary")},null)}function g(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,3,"ion-col",[["offset-md","3"],["size-md","6"],["text-center",""]],null,null,null,r.bb,r.k)),o.ob(1,49152,null,0,i.t,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Nijedna rezervacija nije prona\u0111ena"]))],null,null)}function h(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,30,"ion-item-sliding",[],null,null,null,r.mb,r.w)),o.ob(1,49152,[["slidingBooking",4]],0,i.M,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,22,"ion-item",[["detail",""]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.yb(l,4).onClick()&&i),"click"===n&&(i=!1!==o.yb(l,6).onClick(u)&&i),i},r.nb,r.t)),o.ob(3,49152,null,0,i.H,[o.h,o.k,o.z],{detail:[0,"detail"]},null),o.ob(4,16384,null,0,a.n,[a.m,a.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.zb(5,5),o.ob(6,737280,null,0,i.Mb,[p.i,i.Ib,o.k,a.m,[2,a.n]],null,null),(l()(),o.pb(7,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,r.Eb,r.N)),o.ob(8,49152,null,0,i.yb,[o.h,o.k,o.z],null,null),(l()(),o.pb(9,0,null,0,1,"ion-img",[],null,null,null,r.ib,r.r)),o.ob(10,49152,null,0,i.D,[o.h,o.k,o.z],{src:[0,"src"]},null),(l()(),o.pb(11,0,null,0,11,"ion-label",[],null,null,null,r.ob,r.x)),o.ob(12,49152,null,0,i.N,[o.h,o.k,o.z],null,null),(l()(),o.pb(13,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),o.Fb(14,null,["",""])),(l()(),o.pb(15,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Fb(16,null,["Broj osoba: ",""])),(l()(),o.pb(17,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Fb(18,null,[" Cijena: "," kn"])),(l()(),o.pb(19,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Fb(20,null,["Od:"," "])),(l()(),o.pb(21,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Fb(22,null,["Do:",""])),(l()(),o.pb(23,0,null,0,1,"ion-label",[],null,null,null,r.ob,r.x)),o.ob(24,49152,null,0,i.N,[o.h,o.k,o.z],null,null),(l()(),o.pb(25,0,null,0,5,"ion-item-options",[],null,null,null,r.lb,r.v)),o.ob(26,49152,null,0,i.L,[o.h,o.k,o.z],null,null),(l()(),o.pb(27,0,null,0,3,"ion-item-option",[["color","danger"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.onCancelBooking(l.context.$implicit.id,o.yb(l,1))&&i),i},r.kb,r.u)),o.ob(28,49152,null,0,i.K,[o.h,o.k,o.z],{color:[0,"color"]},null),(l()(),o.pb(29,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,r.hb,r.q)),o.ob(30,49152,null,0,i.C,[o.h,o.k,o.z],{name:[0,"name"]},null)],function(l,n){l(n,3,0,"");var u=l(n,5,0,"/","places","tabs","discover",n.context.$implicit.placeId);l(n,4,0,u),l(n,6,0),l(n,10,0,n.context.$implicit.placeImage),l(n,28,0,"danger"),l(n,30,0,"trash")},function(l,n){l(n,14,0,n.context.$implicit.placeTitle),l(n,16,0,n.context.$implicit.guestNumber),l(n,18,0,n.context.$implicit.totalPrice);var u=n.context.$implicit.bookedFrom.toString().slice(0,15);l(n,20,0,u);var o=n.context.$implicit.bookedTo.toString().slice(0,15);l(n,22,0,o)})}function f(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,5,"ion-col",[["offset-md","3"],["size-md","6"]],null,null,null,r.bb,r.k)),o.ob(1,49152,null,0,i.t,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,3,"ion-list",[],null,null,null,r.pb,r.y)),o.ob(3,49152,null,0,i.O,[o.h,o.k,o.z],null,null),(l()(),o.gb(16777216,null,0,1,null,h)),o.ob(5,278528,null,0,p.j,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.loadedBookings)},null)}function d(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.gb,r.p)),o.ob(1,49152,null,0,i.B,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.Gb,r.P)),o.ob(3,49152,null,0,i.Bb,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.U,r.d)),o.ob(5,49152,null,0,i.l,[o.h,o.k,o.z],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.qb,r.A)),o.ob(7,49152,null,0,i.R,[o.h,o.k,o.z],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,r.Fb,r.O)),o.ob(9,49152,null,0,i.zb,[o.h,o.k,o.z],null,null),(l()(),o.Fb(-1,0,["Moje rezervacije"])),(l()(),o.pb(11,0,null,null,22,"ion-content",[],null,null,null,r.cb,r.l)),o.ob(12,49152,null,0,i.u,[o.h,o.k,o.z],null,null),(l()(),o.pb(13,0,null,0,20,"ion-grid",[],null,null,null,r.fb,r.o)),o.ob(14,49152,null,0,i.A,[o.h,o.k,o.z],null,null),(l()(),o.pb(15,0,null,0,10,"ion-row",[],null,null,null,r.tb,r.C)),o.ob(16,49152,null,0,i.ib,[o.h,o.k,o.z],null,null),(l()(),o.pb(17,0,null,0,8,"ion-col",[["offset","3"]],null,null,null,r.bb,r.k)),o.ob(18,49152,null,0,i.t,[o.h,o.k,o.z],{offset:[0,"offset"]},null),(l()(),o.pb(19,0,null,0,6,"ion-chip",[],null,null,null,r.ab,r.j)),o.ob(20,49152,null,0,i.s,[o.h,o.k,o.z],null,null),(l()(),o.pb(21,0,null,0,1,"ion-icon",[["color","primary"],["name","help"]],null,null,null,r.hb,r.q)),o.ob(22,49152,null,0,i.C,[o.h,o.k,o.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.pb(23,0,null,0,2,"ion-label",[],null,null,null,r.ob,r.x)),o.ob(24,49152,null,0,i.N,[o.h,o.k,o.z],null,null),(l()(),o.Fb(-1,0,["Klizni za brisanje"])),(l()(),o.pb(26,0,null,0,7,"ion-row",[],null,null,null,r.tb,r.C)),o.ob(27,49152,null,0,i.ib,[o.h,o.k,o.z],null,null),(l()(),o.gb(16777216,null,0,1,null,k)),o.ob(29,16384,null,0,p.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,g)),o.ob(31,16384,null,0,p.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,f)),o.ob(33,16384,null,0,p.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,18,0,"3"),l(n,22,0,"primary","help"),l(n,29,0,u.isLoading),l(n,31,0,!u.isLoading&&(!u.loadedBookings||u.loadedBookings.length<=0)),l(n,33,0,!u.isLoading&&u.loadedBookings&&u.loadedBookings.length>0)},null)}function m(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-bookings",[],null,null,null,d,s)),o.ob(1,245760,null,0,t,[b.a,i.Fb],null,null)],function(l,n){l(n,1,0)},null)}var z=o.lb("app-bookings",t,m,{totalPrice:"totalPrice"},{},[]),v=u("gIcY");u.d(n,"BookingsPageModuleNgFactory",function(){return w});var w=o.mb(e,[],function(l){return o.vb([o.wb(512,o.j,o.bb,[[8,[c.a,z]],[3,o.j],o.x]),o.wb(4608,p.m,p.l,[o.u,[2,p.s]]),o.wb(4608,v.v,v.v,[]),o.wb(4608,i.c,i.c,[o.z,o.g]),o.wb(4608,i.Hb,i.Hb,[i.c,o.j,o.q]),o.wb(4608,i.Lb,i.Lb,[i.c,o.j,o.q]),o.wb(1073742336,p.b,p.b,[]),o.wb(1073742336,v.t,v.t,[]),o.wb(1073742336,v.h,v.h,[]),o.wb(1073742336,i.Db,i.Db,[]),o.wb(1073742336,a.o,a.o,[[2,a.u],[2,a.m]]),o.wb(1073742336,e,e,[]),o.wb(1024,a.k,function(){return[[{path:"",component:t}]]},[])])})}}]);