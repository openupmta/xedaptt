(this.webpackJsonpxedaptt=this.webpackJsonpxedaptt||[]).push([[0],{36:function(e,a,t){e.exports=t(55)},41:function(e,a,t){},42:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var i=t(0),m=t.n(i),n=t(21),c=t.n(n),f=(t(41),t(42),t(15)),d=t(16),r=t(17),o=t(18),l=t(19),p=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return m.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"},m.a.createElement("div",{className:"container"},m.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Start Bootstrap"),m.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},m.a.createElement("span",{className:"navbar-toggler-icon"})),m.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},m.a.createElement("ul",{className:"navbar-nav ml-auto"},m.a.createElement("li",{className:"nav-item"},m.a.createElement(l.c,{className:"nav-link",to:"/product"},"Product")),m.a.createElement("li",{className:"nav-item"},m.a.createElement(l.b,{className:"nav-link",to:"/signup"},"Sign Up")),m.a.createElement("li",{className:"nav-item"},m.a.createElement(l.b,{className:"nav-link",to:"/login"},"Log In"))))))}}]),t}(i.Component),g=t(27),b=t(35),s=t(56),u=t(57),h=t(58),y="https://openupmta.github.io/xedaptt/",x=[{src:"/img/06.jpg",altText:"",caption:"Xe \u0111\u1ecba h\xecnh"},{src:"/img/07.png",altText:"",caption:"Xe th\u1ed1ng nh\u1ea5t"},{src:"/img/08.png",altText:"",caption:"Xe th\u0103ng b\u1eb1ng"}],v=function(e){var a=Object(i.useState)(0),t=Object(g.a)(a,2),n=t[0],c=t[1],f=Object(i.useState)(!1),d=Object(g.a)(f,2),r=d[0],o=d[1],l=x.map((function(e){return m.a.createElement(b.a,{onExiting:function(){return o(!0)},onExited:function(){return o(!1)},key:e.src},m.a.createElement("img",{src:y+e.src,alt:e.altText,style:{width:"100%",overflow:"scroll",height:"600px"}}),m.a.createElement(s.a,{captionText:e.caption,captionHeader:e.caption}))}));return m.a.createElement(u.a,{activeIndex:n,next:function(){if(!r){var e=n===x.length-1?0:n+1;c(e)}},previous:function(){if(!r){var e=0===n?x.length-1:n-1;c(e)}}},m.a.createElement(h.a,{items:x,activeIndex:n,onClickHandler:function(e){r||c(e)}}),l)},U=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("footer",{className:"py-5 bg-black"},m.a.createElement("div",{className:"container"},m.a.createElement("p",{className:"m-0 text-center text-white small"},"Copyright \xa9 Your Website 2020"))))}}]),t}(i.Component),E=t(10),j=t(11),k=t(13),O=t(12),S=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null)}}]),t}(i.Component),M=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null)}}]),t}(i.Component),C=t(6),N=t(20),L=t(4),R=t.n(L),A=t(59),w=t(60),D=t(68),P=function(e){Object(k.a)(t,e);var a=Object(O.a)(t);function t(e){var i;return Object(E.a)(this,t),(i=a.call(this,e)).renderFrom=function(){return m.a.createElement(A.a,null,m.a.createElement(w.a,null,m.a.createElement("input",{defaultValue:i.props.title,type:"text",className:"form-control",name:"title",ref:function(e){i.intermediaries=e}}),m.a.createElement(D.a,{color:"danger",onClick:i.onClickSave},"Save")))},i.renderButton=function(){return m.a.createElement(A.a,null,m.a.createElement(w.a,null,m.a.createElement(D.a,{color:"primary",onClick:i.onClickEdit},"Edit"),m.a.createElement(D.a,{color:"warning"},"Remove")))},i.display=function(){return i.state.status?i.renderButton():i.renderFrom()},i.state={status:!0},i.onClickEdit=i.onClickEdit.bind(Object(N.a)(i)),i.onClickSave=i.onClickSave.bind(Object(N.a)(i)),i}return Object(j.a)(t,[{key:"onClickEdit",value:function(){this.setState({status:!1})}},{key:"onClickSave",value:function(){this.setState({status:!0}),console.log(this.intermediaries.value)}},{key:"render",value:function(){var e=this.props.show;return m.a.createElement("div",null,m.a.createElement("section",null,m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row align-items-center"},m.a.createElement("div",{className:R()("col-lg-6",{"order-lg-2":e},{"order-lg-1":!e})},m.a.createElement("div",{className:"p-5"},m.a.createElement("img",{className:"img-fluid rounded-circle",src:this.props.image,alt:""}))),m.a.createElement("div",{className:R()("col-lg-6",{"order-lg-2":!e},{"order-lg-1":e})},m.a.createElement("div",{className:"p-5"},m.a.createElement("h2",{className:"display-4"},this.props.title),m.a.createElement("p",null," ",this.props.children)),this.display())))))}}]),t}(i.Component),T=(i.Component,t(67)),B=t(61),H=t(62),J=t(63),W=t(64),K=t(65),I=t(66),F=function(e){Object(k.a)(t,e);var a=Object(O.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"to_slug",value:function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/(\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5)/g,"a")).replace(/(\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5)/g,"e")).replace(/(\xec|\xed|\u1ecb|\u1ec9|\u0129)/g,"i")).replace(/(\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1)/g,"o")).replace(/(\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef)/g,"u")).replace(/(\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9)/g,"y")).replace(/(\u0111)/g,"d")).replace(/([^0-9a-z-\s])/g,"")).replace(/(\s+)/g,"-")).replace(/^-+/g,"")).replace(/-+$/g,"")}},{key:"render",value:function(){var e=this.props.product;return m.a.createElement(B.a,{sm:"4"},m.a.createElement(H.a,{style:{margin:"10px"}},m.a.createElement(l.b,{to:"/product-detail/1"},m.a.createElement(J.a,{top:!0,width:"100%",src:e.imageUrl,alt:"Card image cap"}),m.a.createElement(W.a,null,m.a.createElement(K.a,null,e.name),m.a.createElement(I.a,null,e.description)))))}}]),t}(i.Component),G=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(f.a)(this,t),(e=a.call(this)).state={products:[{id:"2199ad70-f38b-44b6-b291-f776f2f9f874",name:"Nanine",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"fab08a1b-23aa-4a14-8338-cc9165968b97",name:"Teodoor",description:"Legal",imageUrl:"http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"},{id:"83f1342d-b7cb-4b62-ba46-b3c8642d8a36",name:"Timmie",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.bmp/ff4444/ffffff"},{id:"f1fb5e3d-a7e4-425e-9d19-237b71264cbe",name:"Ulberto",description:"Human Resources",imageUrl:"http://dummyimage.com/300x200.png/5fa2dd/ffffff"},{id:"4e7120a6-e3f4-4a76-b7c4-06c5d899289c",name:"Corinne",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.jpg/dddddd/000000"},{id:"dfa7b166-2026-4beb-807f-d7af4592168c",name:"Wye",description:"Services",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"3e91935e-52c4-4584-b013-c31fc8dde252",name:"Mallorie",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"364d0c3e-1328-452e-b309-2b1982f7279c",name:"Malissa",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"f25306c3-aefa-44bd-82a0-7ad4bbaa8184",name:"Vanni",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"53ca8a9d-5d9a-4901-b27f-19a5cd580fe1",name:"Ludovico",description:"Business Development",imageUrl:"http://dummyimage.com/300x200.jpg/dddddd/000000"},{id:"2132baae-ae3b-46d6-a251-de1f81ca2574",name:"Walker",description:"Human Resources",imageUrl:"http://dummyimage.com/300x200.png/dddddd/000000"},{id:"afc5440f-e6a5-4042-ab59-fc1c37f09b2f",name:"Alie",description:"Sales",imageUrl:"http://dummyimage.com/300x200.jpg/dddddd/000000"},{id:"fc1f2f1d-0d28-4efc-94d8-f5754536b3fc",name:"Uriel",description:"Human Resources",imageUrl:"http://dummyimage.com/300x200.bmp/ff4444/ffffff"},{id:"cdb2c74c-7e93-4ba6-ac55-75c2e3dae509",name:"Ingunna",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"c0940261-7134-40f6-8529-2f5601694685",name:"Donall",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.png/dddddd/000000"},{id:"821334e7-4a1e-447a-b06c-46243aad2ac8",name:"Marlee",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"78b97d65-d099-4ca1-88ac-664b59016242",name:"Beale",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.png/dddddd/000000"},{id:"9b91a31c-eaab-4d72-af51-46c718fcf145",name:"Mahmud",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.bmp/ff4444/ffffff"},{id:"7e960728-798e-4263-b677-312c34d6611a",name:"Laura",description:"Sales",imageUrl:"http://dummyimage.com/300x200.png/5fa2dd/ffffff"},{id:"ec628401-6a62-41be-b1cb-254bde96bf1a",name:"Hilario",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"6afe47a2-2f24-4dcf-a070-ca2153939b9e",name:"Cecile",description:"Legal",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"7ed5dfdd-2541-46af-8d8a-7339cefc5f2a",name:"Farra",description:"Research and Development",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"0db8d6c6-5a65-4d10-ba04-7a5822da986b",name:"Martha",description:"Marketing",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"31fa5545-ba68-48c2-af0f-6a2435f5a8bf",name:"Adelbert",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"a38644c4-b2c3-47f2-8eee-a90f90292906",name:"Jacintha",description:"Sales",imageUrl:"http://dummyimage.com/300x200.png/cc0000/ffffff"},{id:"2052b52f-9673-4e3a-97c2-587729800b47",name:"Ansell",description:"Research and Development",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"db1a4039-8e4f-43fb-94e2-a428c73b3741",name:"Ky",description:"Marketing",imageUrl:"http://dummyimage.com/300x200.png/dddddd/000000"},{id:"4fbbc220-57dd-4bd0-84e8-68e14878adb2",name:"Hamil",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.png/dddddd/000000"},{id:"b88f559d-8873-4bcc-8de9-517c5172bf29",name:"Britt",description:"Business Development",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"d6e2e2a6-51cd-4793-9649-026d2eee8674",name:"Wendeline",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"76d5e486-2fbc-4088-bfc9-624728d71c59",name:"Gaelan",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"781c774c-ebb0-48af-86c8-a4090259a0ee",name:"Matias",description:"Marketing",imageUrl:"http://dummyimage.com/300x200.png/5fa2dd/ffffff"},{id:"2fc9c33b-865b-4a3b-a508-40a0a1958b49",name:"Angelita",description:"Sales",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"67078b5f-cf06-4bb2-b08e-95c892cf5399",name:"Rikki",description:"Training",imageUrl:"http://dummyimage.com/300x200.jpg/dddddd/000000"},{id:"7eea9257-aab2-4767-86ad-5473e2b72a82",name:"Jeane",description:"Training",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"96731926-a9f6-4eba-9e9a-b56268fb579a",name:"Kristin",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.png/cc0000/ffffff"},{id:"1286c6f8-31a2-427d-b040-6e84680059c1",name:"Keven",description:"Services",imageUrl:"http://dummyimage.com/300x200.png/5fa2dd/ffffff"},{id:"673146e4-64f5-460d-965a-4823d1922454",name:"Geno",description:"Marketing",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"7c74a19c-8374-41c1-bdf6-59d3c9841b89",name:"Say",description:"Marketing",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"0957b38b-8ee3-43d8-992c-4af14bc096e8",name:"Donavon",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"829a5fed-a9c1-489d-9ae5-99f510ce1956",name:"Ingeberg",description:"Services",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"25abcbbb-2865-4eb2-abb6-6447c447d1b5",name:"Broddie",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"f161ef9a-8e72-4879-99dd-931dc67ae091",name:"Tildie",description:"Sales",imageUrl:"http://dummyimage.com/300x200.bmp/ff4444/ffffff"},{id:"3e564917-c553-49d2-bd48-8c0c335d23bf",name:"Hildegaard",description:"Research and Development",imageUrl:"http://dummyimage.com/300x200.bmp/ff4444/ffffff"},{id:"9e14974e-ee73-4149-b185-626194ede98e",name:"Rusty",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"d3d6c2df-ba74-47c0-b047-c50893d83835",name:"Michele",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"778fe33e-0ea0-4c3c-8824-33b285a63292",name:"Chevalier",description:"Training",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"0c95b8c5-2af6-4370-8f80-50062b8d7a3c",name:"Kingsly",description:"Services",imageUrl:"http://dummyimage.com/300x200.png/cc0000/ffffff"},{id:"34613497-5fd4-4c1d-885e-7c7a544192b8",name:"Min",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"a423b924-1439-4934-9810-990e95027235",name:"Way",description:"Research and Development",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"dc250f2f-93b0-4ae6-b64f-111138922f0d",name:"Esmeralda",description:"Training",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"8cb8d2d5-0ebc-4f2b-ba93-922e6bf78610",name:"Lillian",description:"Sales",imageUrl:"http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"},{id:"ed297ae0-026f-41d6-9d4d-9ae6b7a8cc8f",name:"Cori",description:"Sales",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"8b30d66c-f073-432c-83f5-6f251eca5c86",name:"Kym",description:"Support",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"ed7b9bf6-0b70-43d4-a546-2186fe345458",name:"Mil",description:"Services",imageUrl:"http://dummyimage.com/300x200.bmp/ff4444/ffffff"},{id:"560044af-959a-44bd-9610-d4a94fc135fc",name:"Samson",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"171fba1d-b59a-4296-802c-21d8a4c5db4a",name:"Midge",description:"Marketing",imageUrl:"http://dummyimage.com/300x200.png/cc0000/ffffff"},{id:"85a87686-91d9-49f2-9cf5-573c042b80d3",name:"Shelby",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"908119e7-4b8c-4043-9b3a-7c110c572964",name:"Kimmie",description:"Legal",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"df1142c1-7ac9-40a3-9b6b-60faa0743957",name:"Audi",description:"Marketing",imageUrl:"http://dummyimage.com/300x200.png/cc0000/ffffff"},{id:"f84f2379-204c-4306-a917-f3b08f726487",name:"Gerardo",description:"Sales",imageUrl:"http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"},{id:"4915bbbd-6382-49e1-a648-acab7d382266",name:"Kare",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"585ce237-5a82-454d-baa2-40036cef50f3",name:"Neall",description:"Business Development",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"cc0eba16-291a-4096-8c2f-9adb02c54083",name:"Rozele",description:"Legal",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"ba12466b-a910-4b98-9ff8-3e0d1d4e0989",name:"Leisha",description:"Services",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"b5ebbea4-e3ed-4d04-8ba1-3aa9738d2d8a",name:"Scottie",description:"Marketing",imageUrl:"http://dummyimage.com/300x200.png/5fa2dd/ffffff"},{id:"ff916cfa-9fbc-417b-99f8-bdc9e6d4f21a",name:"Rebekah",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"25cb1d1a-f79e-434e-8516-47710b79f4f9",name:"Melodie",description:"Human Resources",imageUrl:"http://dummyimage.com/300x200.jpg/dddddd/000000"},{id:"cf94b9e3-5158-4258-b01b-f67fcc20629c",name:"Sidoney",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"5a9f36df-c1e8-4b09-9e32-23c160b958bf",name:"Joelle",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"06828c82-c7ee-4fd3-ad98-7d4ba8570b7a",name:"Lidia",description:"Services",imageUrl:"http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"},{id:"8eb97709-a22e-49a3-bc6b-8dbe0ba1932d",name:"Dacey",description:"Training",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"186c5215-db95-40e2-8357-6d224314f613",name:"Amaleta",description:"Sales",imageUrl:"http://dummyimage.com/300x200.png/5fa2dd/ffffff"},{id:"ea0b763d-8f18-4bff-86fd-247782b650d5",name:"Warden",description:"Services",imageUrl:"http://dummyimage.com/300x200.bmp/ff4444/ffffff"},{id:"b1455490-09e3-41c6-b7a6-e8c26d85470c",name:"Linea",description:"Business Development",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"c2e22ffe-2bbd-4326-adc4-18f9734ea7a9",name:"Maximo",description:"Research and Development",imageUrl:"http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"},{id:"9c5238ea-1057-4bc7-b06f-6e2d990160e9",name:"Minna",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"9b7b16c3-f01d-4124-99fc-794b5b17ab8d",name:"Dar",description:"Legal",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"afdde27c-2a98-4f61-993a-c2f6f443ef41",name:"Alley",description:"Legal",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"2fc7980b-c552-404d-a404-21b120b72344",name:"Janessa",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"ed0125d8-17a1-464b-9c1c-673490672c6c",name:"Forbes",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.png/dddddd/000000"},{id:"2bfff58a-8ba8-4208-808a-c17727e566e9",name:"Erhart",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"b02ea17c-2c5e-43a9-b1d0-3abfdefbeda8",name:"Joelle",description:"Support",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"b326c7cc-5c6b-43e0-bb01-ceb49a39c26f",name:"Del",description:"Research and Development",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"ef428c27-ab06-4a23-a792-32197f1d06fb",name:"Jervis",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"},{id:"e57ca0c8-8f13-44de-9af6-dbb58a39a8ef",name:"Felicdad",description:"Legal",imageUrl:"http://dummyimage.com/300x200.bmp/ff4444/ffffff"},{id:"f6b5e0be-0b6d-4189-b624-f44ff7228bed",name:"Esme",description:"Services",imageUrl:"http://dummyimage.com/300x200.png/dddddd/000000"},{id:"c339c743-9bc2-49cd-abf7-15e10a5e0365",name:"Barbi",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"0d62ce38-d236-4a3a-913d-ce1a0f1ed838",name:"Dulciana",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"c682c72d-1b44-42c4-b31e-38b24e2b128f",name:"Gonzalo",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.jpg/ff4444/ffffff"},{id:"06fe54d1-858a-475e-9cfc-65299b5b32bb",name:"Chryste",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"},{id:"ff7fc3f2-4b21-4eba-beb7-23141c7fa68d",name:"Lorilee",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"72d11bae-4f23-4ece-b024-f879517cb03e",name:"Karita",description:"Product Management",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"},{id:"4061088b-97b5-4bb0-92a9-b2fe49bb5abc",name:"Lindi",description:"Training",imageUrl:"http://dummyimage.com/300x200.bmp/cc0000/ffffff"},{id:"c670267e-55ef-44f9-a79e-39fbea9e9f29",name:"Miner",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.png/dddddd/000000"},{id:"c28c1ae5-bf98-4f25-ac56-47695b2de91a",name:"Ase",description:"Support",imageUrl:"http://dummyimage.com/300x200.bmp/dddddd/000000"},{id:"704cbc59-cc55-4c1f-b78b-dea2330c2e3a",name:"Jeniece",description:"Support",imageUrl:"http://dummyimage.com/300x200.png/ff4444/ffffff"},{id:"d7456609-c556-42ca-8f57-74524404cfbb",name:"Winn",description:"Accounting",imageUrl:"http://dummyimage.com/300x200.png/5fa2dd/ffffff"},{id:"c893a813-55ed-4fc6-836d-8cdeaf98b15c",name:"Georas",description:"Engineering",imageUrl:"http://dummyimage.com/300x200.jpg/dddddd/000000"},{id:"5c575546-fd58-4f18-b8ea-d57cb09a69ff",name:"Rockwell",description:"Support",imageUrl:"http://dummyimage.com/300x200.jpg/cc0000/ffffff"}]},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.products;return m.a.createElement(T.a,null,m.a.createElement("h2",null,"Products"),m.a.createElement(A.a,null,e.map((function(e,a){return m.a.createElement(F,{product:e,key:a})}))))}}]),t}(i.Component),z=function(e){Object(k.a)(t,e);var a=Object(O.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null)}}]),t}(i.Component),X=function(e){Object(k.a)(t,e);var a=Object(O.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null)}}]),t}(i.Component),V=function(e){Object(k.a)(t,e);var a=Object(O.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return m.a.createElement(C.c,null,m.a.createElement(C.a,{exact:!0,path:"/product"},m.a.createElement(G,null)),m.a.createElement(C.a,{exact:!0,path:"/product-detail/:id"},m.a.createElement(z,null)),m.a.createElement(C.a,{exact:!0,path:"/register"},m.a.createElement(S,null)),m.a.createElement(C.a,{exact:!0,path:"/signup"},m.a.createElement(X,null)),m.a.createElement(C.a,{exact:!0,path:"/login"},m.a.createElement(M,null)),m.a.createElement(C.a,{path:"/"},m.a.createElement(G,null)))}}]),t}(i.Component);var $=function(){return m.a.createElement(l.a,null,m.a.createElement("div",{className:"App"},m.a.createElement(p,null),m.a.createElement(v,null),m.a.createElement(V,null),m.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9c9ee2d9.chunk.js.map