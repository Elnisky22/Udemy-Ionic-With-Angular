"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8001],{8001:(g,d,a)=>{a.r(d),a.d(d,{PlacesPageModule:()=>f});var h=a(177),e=a(7125),c=a(7291),n=a(9498);const P=[{path:"tabs",component:(()=>{var t;class l{constructor(){}ngOnInit(){}}return(t=l).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.VBU({type:t,selectors:[["app-places"]],standalone:!1,decls:10,vars:0,consts:[["slot","bottom,top"],["tab","discover"],["name","search"],["tab","offers"],["name","card"]],template:function(o,m){1&o&&(n.j41(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),n.nrm(3,"ion-icon",2),n.j41(4,"ion-label"),n.EFF(5,"Discover"),n.k0s()(),n.j41(6,"ion-tab-button",3),n.nrm(7,"ion-icon",4),n.j41(8,"ion-label"),n.EFF(9,"Offers"),n.k0s()()()())},dependencies:[e.iq,e.he,e.Jq,e.qW,e.p4],encapsulation:2}),l})(),children:[{path:"discover",children:[{path:"",loadChildren:()=>Promise.all([a.e(2076),a.e(835)]).then(a.bind(a,835)).then(t=>t.DiscoverPageModule)},{path:":placeId",loadChildren:()=>a.e(2076).then(a.bind(a,2188)).then(t=>t.PlaceDetailPageModule)}]},{path:"offers",children:[{path:"",loadChildren:()=>Promise.all([a.e(2076),a.e(3904)]).then(a.bind(a,3904)).then(t=>t.OffersPageModule)},{path:"new",loadChildren:()=>a.e(6159).then(a.bind(a,6159)).then(t=>t.NewOfferPageModule)},{path:"edit/:placeId",loadChildren:()=>a.e(2076).then(a.bind(a,8881)).then(t=>t.EditOfferPageModule)},{path:":placeId",loadChildren:()=>a.e(2076).then(a.bind(a,1613)).then(t=>t.OfferBookingsPageModule)}]},{path:"",redirectTo:"/places/tabs/discover",pathMatch:"full"}]},{path:"",redirectTo:"/places/tabs/discover",pathMatch:"full"}];let i=(()=>{var t;class l{}return(t=l).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[c.iI.forChild(P),c.iI]}),l})(),f=(()=>{var t;class l{}return(t=l).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[h.MD,e.bv,i]}),l})()}}]);