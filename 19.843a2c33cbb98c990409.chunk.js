webpackJsonp([19],{BmJV:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule<span class="token punctuation" >,</span> ValidationErrors <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormControl <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >IpValidator</span><span class="token punctuation" >(</span>control<span class="token punctuation" >:</span> FormControl<span class="token punctuation" >)</span><span class="token punctuation" >:</span> ValidationErrors <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >.</span><span class="token function" >test</span><span class="token punctuation" >(</span>control<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span> <span class="token operator" >?</span> <span class="token keyword" >null</span> <span class="token punctuation" >:</span> <span class="token punctuation" >{</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >:</span> <span class="token keyword" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >IpValidatorMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> `<span class="token string" >"${field.formControl.value}"</span> is not a valid IP Address`<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span> validation<span class="token punctuation" >:</span> IpValidator <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> IpValidatorMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},K4Dd:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s("WT6e"),p=s("7DMc");function o(n){return/(\d{1,3}\.){3}\d{1,3}/.test(n.value)?null:{ip:!0}}var e=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation declared in ngModule)",required:!0},validators:{validation:["ip"]}},{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation through `validators.validation` property)",required:!0},validators:{validation:[o]}},{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation through `validators.expression` property)",description:"custom validation message through `validators` property",required:!0},validators:{ip:{expression:function(n){return/(\d{1,3}\.){3}\d{1,3}/.test(n.value)},message:function(n,a){return'"'+a.formControl.value+'" is not a valid IP Address'}}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),l={examples:[{title:"Custom validation",description:"\n              This demonstrates the different ways to define a custom validation, globally or for a specific field.\n            ",component:e,files:[{file:"app.component.html",content:s("Y38D"),filecontent:s("SABQ")},{file:"app.component.ts",content:s("flIM"),filecontent:s("qWH0")},{file:"app.module.ts",content:s("BmJV"),filecontent:s("oEgb")}]}]},u=function(){},c=s("INQx"),i=s("cPG/"),r=s("OGTa"),k=s("z4JO"),d=s("WhiG"),m=s("XPYZ"),f=s("CoID"),g=s("QMRz"),y=s("SSjb"),v=s("tGRr"),b=s("qwng"),C=s("UFNd"),F=s("PV5Z"),M=s("dI39"),h=s("S3hu"),w=s("UJsg"),x=s("OiLZ"),O=s("cIfd"),I=s("njCa"),N=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275bf"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[p.ControlContainer],null,null),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](6,0,null,null,5,"formly-form",[],null,null,null,h.b,h.a)),t["\u0275did"](7,966656,null,0,w.a,[x.a,O.a,I.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,w.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](9,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,7,0,s.model,s.form,s.fields,s.options)},function(n,a){n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending)})}var V=t["\u0275ccf"]("formly-app-example",e,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,A,N)),t["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)},{},{},[]),D=s("Xjw4"),E=s("9Sd6"),P=s("XHgV"),S=s("1T37"),R=s("+j5Y"),T=s("U/+3"),U=s("Mcof"),G=s("7u3n"),q=s("6sdf"),j=s("z7Rf"),B=s("ItHS"),Z=s("OE0E"),J=s("iLnc"),L=s("ApVT"),W=s("bkcK"),H=s("Uo70"),z=s("6GVX"),Y=s("gsbp"),Q=s("EPl/"),X=s("kJ/S"),$=s("j06o"),K=s("ZuzD"),_=s("sqmn"),nn=s("255V"),an=s("ixPN"),sn=s("rK2e");function tn(n){return/(\d{1,3}\.){3}\d{1,3}/.test(n.value)?null:{ip:!0}}function pn(n,a){return'"'+a.formControl.value+'" is not a valid IP Address'}s("/bvZ");var on=function(){},en=s("bfOx"),ln=s("fCQL"),un=s("ByAW"),cn=s("9N4v"),rn=s("ykPx"),kn=s("nwY2"),dn=s("TqLH"),mn=s("R2dV"),fn=s("JkuO"),gn=s("BILt"),yn=s("H69Y"),vn=s("j/TD"),bn=s("daWb"),Cn=s("Dm6n"),Fn=s("8F5j"),Mn=s("WIBo"),hn=s("MjWI");s.d(a,"ConfigModuleNgFactory",function(){return wn});var wn=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,i.a,r.a,k.a,d.a,m.a,f.a,g.a,y.a,v.a,b.a,C.a,F.a,M.a,V]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,D.NgLocalization,D.NgLocaleLocalization,[t.LOCALE_ID,[2,D["\u0275a"]]]),t["\u0275mpd"](6144,E.b,null,[D.DOCUMENT]),t["\u0275mpd"](4608,E.c,E.c,[[2,E.b]]),t["\u0275mpd"](4608,P.a,P.a,[]),t["\u0275mpd"](5120,S.d,S.b,[[3,S.d],t.NgZone,P.a]),t["\u0275mpd"](5120,S.g,S.f,[[3,S.g],P.a,t.NgZone]),t["\u0275mpd"](4608,R.i,R.i,[S.d,S.g,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](5120,R.e,R.j,[[3,R.e],D.DOCUMENT]),t["\u0275mpd"](4608,R.h,R.h,[S.g,D.DOCUMENT]),t["\u0275mpd"](5120,R.f,R.m,[[3,R.f],D.DOCUMENT]),t["\u0275mpd"](4608,R.c,R.c,[R.i,R.e,t.ComponentFactoryResolver,R.h,R.f,t.ApplicationRef,t.Injector,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](5120,R.k,R.l,[R.c]),t["\u0275mpd"](4608,T.k,T.k,[P.a]),t["\u0275mpd"](4608,T.j,T.j,[T.k,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](136192,T.d,T.b,[[3,T.d],D.DOCUMENT]),t["\u0275mpd"](5120,T.n,T.m,[[3,T.n],[2,T.l],D.DOCUMENT]),t["\u0275mpd"](5120,T.i,T.g,[[3,T.i],t.NgZone,P.a]),t["\u0275mpd"](4608,U.d,U.d,[P.a]),t["\u0275mpd"](135680,U.a,U.a,[U.d,t.NgZone]),t["\u0275mpd"](5120,G.b,G.c,[R.c]),t["\u0275mpd"](4608,q.b,q.b,[]),t["\u0275mpd"](5120,j.d,j.a,[[3,j.d],[2,B.c],Z.c,[2,D.DOCUMENT]]),t["\u0275mpd"](4608,J.a,J.a,[]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275i"],p["\u0275i"],[]),t["\u0275mpd"](4608,I.b,I.b,[I.a]),t["\u0275mpd"](4608,O.a,O.a,[]),t["\u0275mpd"](4608,x.a,x.a,[I.b,O.a]),t["\u0275mpd"](512,D.CommonModule,D.CommonModule,[]),t["\u0275mpd"](512,E.a,E.a,[]),t["\u0275mpd"](512,W.g,W.g,[]),t["\u0275mpd"](512,P.b,P.b,[]),t["\u0275mpd"](512,S.c,S.c,[]),t["\u0275mpd"](512,R.g,R.g,[]),t["\u0275mpd"](256,H.f,!0,[]),t["\u0275mpd"](512,H.n,H.n,[[2,H.f]]),t["\u0275mpd"](512,T.a,T.a,[]),t["\u0275mpd"](512,U.c,U.c,[]),t["\u0275mpd"](512,G.e,G.e,[]),t["\u0275mpd"](512,H.x,H.x,[]),t["\u0275mpd"](512,q.c,q.c,[]),t["\u0275mpd"](512,z.i,z.i,[]),t["\u0275mpd"](512,j.c,j.c,[]),t["\u0275mpd"](512,Y.c,Y.c,[]),t["\u0275mpd"](512,Q.b,Q.b,[]),t["\u0275mpd"](512,X.h,X.h,[]),t["\u0275mpd"](512,$.b,$.b,[]),t["\u0275mpd"](512,H.o,H.o,[]),t["\u0275mpd"](512,H.v,H.v,[]),t["\u0275mpd"](512,K.b,K.b,[]),t["\u0275mpd"](512,_.c,_.c,[]),t["\u0275mpd"](512,nn.a,nn.a,[]),t["\u0275mpd"](512,p["\u0275ba"],p["\u0275ba"],[]),t["\u0275mpd"](512,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,sn.a,sn.a,[]),t["\u0275mpd"](512,on,on,[]),t["\u0275mpd"](512,en.r,en.r,[[2,en.w],[2,en.o]]),t["\u0275mpd"](512,u,u,[]),t["\u0275mpd"](256,G.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,X.a,!1,[]),t["\u0275mpd"](1024,I.a,function(){return[{types:[{name:"formly-group",component:ln.a}]},{types:[{name:"input",component:un.a,wrappers:["fieldset","label"]},{name:"checkbox",component:cn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:kn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:dn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:fn.a},{name:"description",component:gn.a},{name:"validation-message",component:yn.a},{name:"fieldset",component:vn.a},{name:"addons",component:bn.a}],manipulators:[{class:Cn.a,method:"run"},{class:Fn.a,method:"run"},{class:Mn.a,method:"run"}]},{types:[{name:"formly-group",component:ln.a}]},{validators:[{name:"ip",validation:tn}],validationMessages:[{name:"ip",message:pn}]}]},[]),t["\u0275mpd"](1024,en.m,function(){return[[{path:"",component:hn.a,data:l}]]},[])])})},SABQ:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},Y38D:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},flIM:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup<span class="token punctuation" >,</span> FormControl<span class="token punctuation" >,</span> ValidationErrors <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >IpValidator</span><span class="token punctuation" >(</span>control<span class="token punctuation" >:</span> FormControl<span class="token punctuation" >)</span><span class="token punctuation" >:</span> ValidationErrors <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >.</span><span class="token function" >test</span><span class="token punctuation" >(</span>control<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span> <span class="token operator" >?</span> <span class="token keyword" >null</span> <span class="token punctuation" >:</span> <span class="token punctuation" >{</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >:</span> <span class="token keyword" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (using custom validation declared in ngModule)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        validation<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'ip\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (using custom validation through `validators.validation` property)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        validation<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>IpValidator<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (using custom validation through `validators.expression` property)\'</span><span class="token punctuation" >,</span>\n        description<span class="token punctuation" >:</span> <span class="token string" >\'custom validation message through `validators` property\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        ip<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          expression<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>c<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >.</span><span class="token function" >test</span><span class="token punctuation" >(</span>c<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n          message<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>error<span class="token punctuation" >,</span> field<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> `<span class="token string" >"${field.formControl.value}"</span> is not a valid IP Address`<span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},oEgb:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule, ValidationErrors } from '@angular/forms';\nimport { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { FormControl } from '@angular/forms';\nimport { AppComponent } from './app.component';\n\nexport function IpValidator(control: FormControl): ValidationErrors {\n  return /(\\d{1,3}\\.){3}\\d{1,3}/.test(control.value) ? null : { 'ip': true };\n}\n\nexport function IpValidatorMessage(err, field: FormlyFieldConfig) {\n  return `\"${field.formControl.value}\" is not a valid IP Address`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validators: [\n        { name: 'ip', validation: IpValidator },\n      ],\n      validationMessages: [\n        { name: 'ip', message: IpValidatorMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},qWH0:function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup, FormControl, ValidationErrors } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\nexport function IpValidator(control: FormControl): ValidationErrors {\n  return /(\\d{1,3}\\.){3}\\d{1,3}/.test(control.value) ? null : { 'ip': true };\n}\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation declared in ngModule)',\n        required: true,\n      },\n      validators: {\n        validation: ['ip'],\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation through `validators.validation` property)',\n        required: true,\n      },\n      validators: {\n        validation: [IpValidator],\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation through `validators.expression` property)',\n        description: 'custom validation message through `validators` property',\n        required: true,\n      },\n      validators: {\n        ip: {\n          expression: (c) => /(\\d{1,3}\\.){3}\\d{1,3}/.test(c.value),\n          message: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"}});