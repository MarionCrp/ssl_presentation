!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealSearch=t()}(this,(function(){"use strict";var e,t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(e){try{return!!e()}catch(e){return!0}},o=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),i=function(e){return e&&e.Math==Math&&e},c=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n&&n)||function(){return this}()||Function("return this")(),a=function(e){return"function"==typeof e},u=r,l=a,f=/#|\.prototype\./,s=function(e,t){var n=d[p(e)];return n==v||n!=g&&(l(t)?u(t):!!t)},p=s.normalize=function(e){return String(e).replace(f,".").toLowerCase()},d=s.data={},g=s.NATIVE="N",v=s.POLYFILL="P",h=s,y=a,b=function(e){return"object"==typeof e?null!==e:y(e)},m=b,x=function(e){if(m(e))return e;throw TypeError(String(e)+" is not an object")},S=a,w=x,O=function(e){if("object"==typeof e||S(e))return e;throw TypeError("Can't set "+String(e)+" as a prototype")},E=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return w(n),O(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),j=a,R=b,T=E,I={},P=b,A=c.document,C=P(A)&&P(A.createElement),_=function(e){return C?A.createElement(e):{}},k=_,N=!o&&!r((function(){return 7!=Object.defineProperty(k("div"),"a",{get:function(){return 7}}).a})),$=c,M=a,L=function(e){return M(e)?e:void 0},F=function(e,t){return arguments.length<2?L($[e]):$[e]&&$[e][t]},D=c,U=F("navigator","userAgent")||"",z=D.process,B=D.Deno,W=z&&z.versions||B&&B.version,K=W&&W.v8;K?t=(e=K.split("."))[0]<4?1:e[0]+e[1]:U&&(!(e=U.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=U.match(/Chrome\/(\d+)/))&&(t=e[1]);var G=t&&+t,V=r,Y=!!Object.getOwnPropertySymbols&&!V((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&G&&G<41})),q=Y&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,X=a,H=F,J=q?function(e){return"symbol"==typeof e}:function(e){var t=H("Symbol");return X(t)&&Object(e)instanceof t},Q=a,Z=function(e){try{return String(e)}catch(e){return"Object"}},ee=function(e){if(Q(e))return e;throw TypeError(Z(e)+" is not a function")},te=function(e,t){var n=e[t];return null==n?void 0:ee(n)},ne=a,re=b,oe={exports:{}},ie=c,ce=function(e,t){try{Object.defineProperty(ie,e,{value:t,configurable:!0,writable:!0})}catch(n){ie[e]=t}return t},ae=ce,ue="__core-js_shared__",le=c[ue]||ae(ue,{}),fe=le;(oe.exports=function(e,t){return fe[e]||(fe[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var se=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},pe=se,de=function(e){return Object(pe(e))},ge=de,ve={}.hasOwnProperty,he=Object.hasOwn||function(e,t){return ve.call(ge(e),t)},ye=0,be=Math.random(),me=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++ye+be).toString(36)},xe=c,Se=oe.exports,we=he,Oe=me,Ee=Y,je=q,Re=Se("wks"),Te=xe.Symbol,Ie=je?Te:Te&&Te.withoutSetter||Oe,Pe=function(e){return we(Re,e)&&(Ee||"string"==typeof Re[e])||(Ee&&we(Te,e)?Re[e]=Te[e]:Re[e]=Ie("Symbol."+e)),Re[e]},Ae=b,Ce=J,_e=te,ke=function(e,t){var n,r;if("string"===t&&ne(n=e.toString)&&!re(r=n.call(e)))return r;if(ne(n=e.valueOf)&&!re(r=n.call(e)))return r;if("string"!==t&&ne(n=e.toString)&&!re(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},Ne=Pe("toPrimitive"),$e=function(e,t){if(!Ae(e)||Ce(e))return e;var n,r=_e(e,Ne);if(r){if(void 0===t&&(t="default"),n=r.call(e,t),!Ae(n)||Ce(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),ke(e,t)},Me=J,Le=function(e){var t=$e(e,"string");return Me(t)?t:String(t)},Fe=o,De=N,Ue=x,ze=Le,Be=Object.defineProperty;I.f=Fe?Be:function(e,t,n){if(Ue(e),t=ze(t),Ue(n),De)try{return Be(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var We=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},Ke=I,Ge=We,Ve=o?function(e,t,n){return Ke.f(e,t,Ge(1,n))}:function(e,t,n){return e[t]=n,e},Ye={},qe={}.toString,Xe=function(e){return qe.call(e).slice(8,-1)},He=Xe,Je="".split,Qe=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==He(e)?Je.call(e,""):Object(e)}:Object,Ze=se,et=function(e){return Qe(Ze(e))},tt=Math.ceil,nt=Math.floor,rt=function(e){var t=+e;return t!=t||0===t?0:(t>0?nt:tt)(t)},ot=rt,it=Math.max,ct=Math.min,at=rt,ut=Math.min,lt=function(e){return e>0?ut(at(e),9007199254740991):0},ft=lt,st=et,pt=function(e,t){var n=ot(e);return n<0?it(n+t,0):ct(n,t)},dt=function(e){return ft(e.length)},gt=function(e){return function(t,n,r){var o,i=st(t),c=dt(i),a=pt(r,c);if(e&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},vt={includes:gt(!0),indexOf:gt(!1)},ht={},yt=he,bt=et,mt=vt.indexOf,xt=ht,St=function(e,t){var n,r=bt(e),o=0,i=[];for(n in r)!yt(xt,n)&&yt(r,n)&&i.push(n);for(;t.length>o;)yt(r,n=t[o++])&&(~mt(i,n)||i.push(n));return i},wt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ot=St,Et=wt.concat("length","prototype");Ye.f=Object.getOwnPropertyNames||function(e){return Ot(e,Et)};var jt=b,Rt=Xe,Tt=Pe("match"),It={};It[Pe("toStringTag")]="z";var Pt="[object z]"===String(It),At=Pt,Ct=a,_t=Xe,kt=Pe("toStringTag"),Nt="Arguments"==_t(function(){return arguments}()),$t=At?_t:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),kt))?n:Nt?_t(t):"Object"==(r=_t(t))&&Ct(t.callee)?"Arguments":r},Mt=$t,Lt=function(e){if("Symbol"===Mt(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)},Ft=x,Dt=function(){var e=Ft(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},Ut={},zt=r,Bt=c.RegExp;Ut.UNSUPPORTED_Y=zt((function(){var e=Bt("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),Ut.BROKEN_CARET=zt((function(){var e=Bt("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));var Wt={exports:{}},Kt=a,Gt=le,Vt=Function.toString;Kt(Gt.inspectSource)||(Gt.inspectSource=function(e){return Vt.call(e)});var Yt,qt,Xt,Ht=Gt.inspectSource,Jt=a,Qt=Ht,Zt=c.WeakMap,en=Jt(Zt)&&/native code/.test(Qt(Zt)),tn=oe.exports,nn=me,rn=tn("keys"),on=function(e){return rn[e]||(rn[e]=nn(e))},cn=en,an=b,un=Ve,ln=he,fn=le,sn=on,pn=ht,dn="Object already initialized",gn=c.WeakMap;if(cn||fn.state){var vn=fn.state||(fn.state=new gn),hn=vn.get,yn=vn.has,bn=vn.set;Yt=function(e,t){if(yn.call(vn,e))throw new TypeError(dn);return t.facade=e,bn.call(vn,e,t),t},qt=function(e){return hn.call(vn,e)||{}},Xt=function(e){return yn.call(vn,e)}}else{var mn=sn("state");pn[mn]=!0,Yt=function(e,t){if(ln(e,mn))throw new TypeError(dn);return t.facade=e,un(e,mn,t),t},qt=function(e){return ln(e,mn)?e[mn]:{}},Xt=function(e){return ln(e,mn)}}var xn={set:Yt,get:qt,has:Xt,enforce:function(e){return Xt(e)?qt(e):Yt(e,{})},getterFor:function(e){return function(t){var n;if(!an(t)||(n=qt(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Sn=o,wn=he,On=Function.prototype,En=Sn&&Object.getOwnPropertyDescriptor,jn=wn(On,"name"),Rn={EXISTS:jn,PROPER:jn&&"something"===function(){}.name,CONFIGURABLE:jn&&(!Sn||Sn&&En(On,"name").configurable)},Tn=c,In=a,Pn=he,An=Ve,Cn=ce,_n=Ht,kn=Rn.CONFIGURABLE,Nn=xn.get,$n=xn.enforce,Mn=String(String).split("String");(Wt.exports=function(e,t,n,r){var o,i=!!r&&!!r.unsafe,c=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:t;In(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Pn(n,"name")||kn&&n.name!==u)&&An(n,"name",u),(o=$n(n)).source||(o.source=Mn.join("string"==typeof u?u:""))),e!==Tn?(i?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=n:An(e,t,n)):c?e[t]=n:Cn(t,n)})(Function.prototype,"toString",(function(){return In(this)&&Nn(this).source||_n(this)}));var Ln=F,Fn=I,Dn=o,Un=Pe("species"),zn=r,Bn=c.RegExp,Wn=zn((function(){var e=Bn(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)})),Kn=r,Gn=c.RegExp,Vn=Kn((function(){var e=Gn("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})),Yn=o,qn=c,Xn=h,Hn=function(e,t,n){var r,o;return T&&j(r=t.constructor)&&r!==n&&R(o=r.prototype)&&o!==n.prototype&&T(e,o),e},Jn=Ve,Qn=I.f,Zn=Ye.f,er=function(e){var t;return jt(e)&&(void 0!==(t=e[Tt])?!!t:"RegExp"==Rt(e))},tr=Lt,nr=Dt,rr=Ut,or=Wt.exports,ir=r,cr=he,ar=xn.enforce,ur=function(e){var t=Ln(e),n=Fn.f;Dn&&t&&!t[Un]&&n(t,Un,{configurable:!0,get:function(){return this}})},lr=Wn,fr=Vn,sr=Pe("match"),pr=qn.RegExp,dr=pr.prototype,gr=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,vr=/a/g,hr=/a/g,yr=new pr(vr)!==vr,br=rr.UNSUPPORTED_Y,mr=Yn&&(!yr||br||lr||fr||ir((function(){return hr[sr]=!1,pr(vr)!=vr||pr(hr)==hr||"/a/i"!=pr(vr,"i")})));if(Xn("RegExp",mr)){for(var xr=function(e,t){var n,r,o,i,c,a,u=this instanceof xr,l=er(e),f=void 0===t,s=[],p=e;if(!u&&l&&f&&e.constructor===xr)return e;if((l||e instanceof xr)&&(e=e.source,f&&(t="flags"in p?p.flags:nr.call(p))),e=void 0===e?"":tr(e),t=void 0===t?"":tr(t),p=e,lr&&"dotAll"in vr&&(r=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),n=t,br&&"sticky"in vr&&(o=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),fr&&(i=function(e){for(var t,n=e.length,r=0,o="",i=[],c={},a=!1,u=!1,l=0,f="";r<=n;r++){if("\\"===(t=e.charAt(r)))t+=e.charAt(++r);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:gr.test(e.slice(r+1))&&(r+=2,u=!0),o+=t,l++;continue;case">"===t&&u:if(""===f||cr(c,f))throw new SyntaxError("Invalid capture group name");c[f]=!0,i.push([f,l]),u=!1,f="";continue}u?f+=t:o+=t}return[o,i]}(e),e=i[0],s=i[1]),c=Hn(pr(e,t),u?this:dr,xr),(r||o||s.length)&&(a=ar(c),r&&(a.dotAll=!0,a.raw=xr(function(e){for(var t,n=e.length,r=0,o="",i=!1;r<=n;r++)"\\"!==(t=e.charAt(r))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),o+=t):o+="[\\s\\S]":o+=t+e.charAt(++r);return o}(e),n)),o&&(a.sticky=!0),s.length&&(a.groups=s)),e!==p)try{Jn(c,"source",""===p?"(?:)":p)}catch(e){}return c},Sr=function(e){e in xr||Qn(xr,e,{configurable:!0,get:function(){return pr[e]},set:function(t){pr[e]=t}})},wr=Zn(pr),Or=0;wr.length>Or;)Sr(wr[Or++]);dr.constructor=xr,xr.prototype=dr,or(qn,"RegExp",xr)}ur("RegExp");var Er={},jr={},Rr={}.propertyIsEnumerable,Tr=Object.getOwnPropertyDescriptor,Ir=Tr&&!Rr.call({1:2},1);jr.f=Ir?function(e){var t=Tr(this,e);return!!t&&t.enumerable}:Rr;var Pr=o,Ar=jr,Cr=We,_r=et,kr=Le,Nr=he,$r=N,Mr=Object.getOwnPropertyDescriptor;Er.f=Pr?Mr:function(e,t){if(e=_r(e),t=kr(t),$r)try{return Mr(e,t)}catch(e){}if(Nr(e,t))return Cr(!Ar.f.call(e,t),e[t])};var Lr={};Lr.f=Object.getOwnPropertySymbols;var Fr,Dr=Ye,Ur=Lr,zr=x,Br=F("Reflect","ownKeys")||function(e){var t=Dr.f(zr(e)),n=Ur.f;return n?t.concat(n(e)):t},Wr=he,Kr=Br,Gr=Er,Vr=I,Yr=c,qr=Er.f,Xr=Ve,Hr=Wt.exports,Jr=ce,Qr=function(e,t){for(var n=Kr(t),r=Vr.f,o=Gr.f,i=0;i<n.length;i++){var c=n[i];Wr(e,c)||r(e,c,o(t,c))}},Zr=h,eo=St,to=wt,no=Object.keys||function(e){return eo(e,to)},ro=I,oo=x,io=no,co=o?Object.defineProperties:function(e,t){oo(e);for(var n,r=io(t),o=r.length,i=0;o>i;)ro.f(e,n=r[i++],t[n]);return e},ao=F("document","documentElement"),uo=x,lo=co,fo=wt,so=ht,po=ao,go=_,vo=on("IE_PROTO"),ho=function(){},yo=function(e){return"<script>"+e+"</"+"script>"},bo=function(e){e.write(yo("")),e.close();var t=e.parentWindow.Object;return e=null,t},mo=function(){try{Fr=new ActiveXObject("htmlfile")}catch(e){}var e,t;mo="undefined"!=typeof document?document.domain&&Fr?bo(Fr):((t=go("iframe")).style.display="none",po.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(yo("document.F=Object")),e.close(),e.F):bo(Fr);for(var n=fo.length;n--;)delete mo.prototype[fo[n]];return mo()};so[vo]=!0;var xo=Object.create||function(e,t){var n;return null!==e?(ho.prototype=uo(e),n=new ho,ho.prototype=null,n[vo]=e):n=mo(),void 0===t?n:lo(n,t)},So=Lt,wo=Dt,Oo=Ut,Eo=oe.exports,jo=xo,Ro=xn.get,To=Wn,Io=Vn,Po=RegExp.prototype.exec,Ao=Eo("native-string-replace",String.prototype.replace),Co=Po,_o=function(){var e=/a/,t=/b*/g;return Po.call(e,"a"),Po.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),ko=Oo.UNSUPPORTED_Y||Oo.BROKEN_CARET,No=void 0!==/()??/.exec("")[1];(_o||No||ko||To||Io)&&(Co=function(e){var t,n,r,o,i,c,a,u=this,l=Ro(u),f=So(e),s=l.raw;if(s)return s.lastIndex=u.lastIndex,t=Co.call(s,f),u.lastIndex=s.lastIndex,t;var p=l.groups,d=ko&&u.sticky,g=wo.call(u),v=u.source,h=0,y=f;if(d&&(-1===(g=g.replace("y","")).indexOf("g")&&(g+="g"),y=f.slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==f.charAt(u.lastIndex-1))&&(v="(?: "+v+")",y=" "+y,h++),n=new RegExp("^(?:"+v+")",g)),No&&(n=new RegExp("^"+v+"$(?!\\s)",g)),_o&&(r=u.lastIndex),o=Po.call(d?n:u,y),d?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:_o&&o&&(u.lastIndex=u.global?o.index+o[0].length:r),No&&o&&o.length>1&&Ao.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=c=jo(null),i=0;i<p.length;i++)c[(a=p[i])[0]]=o[a[1]];return o});var $o=Co;(function(e,t){var n,r,o,i,c,a=e.target,u=e.global,l=e.stat;if(n=u?Yr:l?Yr[a]||Jr(a,{}):(Yr[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=qr(n,r))&&c.value:n[r],!Zr(u?r:a+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Qr(i,o)}(e.sham||o&&o.sham)&&Xr(i,"sham",!0),Hr(n,r,i,e)}})({target:"RegExp",proto:!0,forced:/./.exec!==$o},{exec:$o});var Mo=Rn.PROPER,Lo=Wt.exports,Fo=x,Do=Lt,Uo=r,zo=Dt,Bo="toString",Wo=RegExp.prototype,Ko=Wo.toString,Go=Uo((function(){return"/a/b"!=Ko.call({source:"a",flags:"b"})})),Vo=Mo&&Ko.name!=Bo;(Go||Vo)&&Lo(RegExp.prototype,Bo,(function(){var e=Fo(this),t=Do(e.source),n=e.flags;return"/"+t+"/"+Do(void 0===n&&e instanceof RegExp&&!("flags"in Wo)?zo.call(e):n)}),{unsafe:!0});var Yo=Wt.exports,qo=$o,Xo=r,Ho=Pe,Jo=Ve,Qo=Ho("species"),Zo=RegExp.prototype,ei=rt,ti=Lt,ni=se,ri=function(e){return function(t,n){var r,o,i=ti(ni(t)),c=ei(n),a=i.length;return c<0||c>=a?e?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):r:e?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},oi={codeAt:ri(!1),charAt:ri(!0)}.charAt,ii=de,ci=Math.floor,ai="".replace,ui=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,li=/\$([$&'`]|\d{1,2})/g,fi=x,si=a,pi=Xe,di=$o,gi=function(e,t,n,r){var o=Ho(e),i=!Xo((function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})),c=i&&!Xo((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[Qo]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return t=!0,null},n[o](""),!t}));if(!i||!c||n){var a=/./[o],u=t(o,""[e],(function(e,t,n,r,o){var c=t.exec;return c===qo||c===Zo.exec?i&&!o?{done:!0,value:a.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));Yo(String.prototype,e,u[0]),Yo(Zo,o,u[1])}r&&Jo(Zo[o],"sham",!0)},vi=r,hi=x,yi=a,bi=rt,mi=lt,xi=Lt,Si=se,wi=function(e,t,n){return t+(n?oi(e,t).length:1)},Oi=te,Ei=function(e,t,n,r,o,i){var c=n+e.length,a=r.length,u=li;return void 0!==o&&(o=ii(o),u=ui),ai.call(i,u,(function(i,u){var l;switch(u.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":l=o[u.slice(1,-1)];break;default:var f=+u;if(0===f)return i;if(f>a){var s=ci(f/10);return 0===s?i:s<=a?void 0===r[s-1]?u.charAt(1):r[s-1]+u.charAt(1):i}l=r[f-1]}return void 0===l?"":l}))},ji=function(e,t){var n=e.exec;if(si(n)){var r=n.call(e,t);return null!==r&&fi(r),r}if("RegExp"===pi(e))return di.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")},Ri=Pe("replace"),Ti=Math.max,Ii=Math.min,Pi="$0"==="a".replace(/./,"$0"),Ai=!!/./[Ri]&&""===/./[Ri]("a","$0");gi("replace",(function(e,t,n){var r=Ai?"$":"$0";return[function(e,n){var r=Si(this),o=null==e?void 0:Oi(e,Ri);return o?o.call(e,r,n):t.call(xi(r),e,n)},function(e,o){var i=hi(this),c=xi(e);if("string"==typeof o&&-1===o.indexOf(r)&&-1===o.indexOf("$<")){var a=n(t,i,c,o);if(a.done)return a.value}var u=yi(o);u||(o=xi(o));var l=i.global;if(l){var f=i.unicode;i.lastIndex=0}for(var s=[];;){var p=ji(i,c);if(null===p)break;if(s.push(p),!l)break;""===xi(p[0])&&(i.lastIndex=wi(c,mi(i.lastIndex),f))}for(var d,g="",v=0,h=0;h<s.length;h++){p=s[h];for(var y=xi(p[0]),b=Ti(Ii(bi(p.index),c.length),0),m=[],x=1;x<p.length;x++)m.push(void 0===(d=p[x])?d:String(d));var S=p.groups;if(u){var w=[y].concat(m,b,c);void 0!==S&&w.push(S);var O=xi(o.apply(void 0,w))}else O=Ei(y,c,b,m,S,o);b>=v&&(g+=c.slice(v,b)+O,v=b+y.length)}return g+c.slice(v)}]}),!!vi((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!Pi||Ai);var Ci=$t,_i=Pt?{}.toString:function(){return"[object "+Ci(this)+"]"},ki=Pt,Ni=Wt.exports,$i=_i;ki||Ni(Object.prototype,"toString",$i,{unsafe:!0})
/*!
	 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
	 * by navigatating to that slide and highlighting it.
	 *
	 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
	 */;return function(){var e,t,n,r,o,i,c;function a(){(t=document.createElement("div")).classList.add("searchbox"),t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.zIndex=10,t.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=t.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",e.getRevealElement().appendChild(t),n.addEventListener("keyup",(function(t){if(13===t.keyCode)t.preventDefault(),function(){if(i){var t=n.value;""===t?(c&&c.remove(),r=null):(c=new f("slidecontent"),r=c.apply(t),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(e.slide(r[o].h,r[o].v),o++))}(),i=!1;else i=!0}),!1),l()}function u(){t||a(),t.style.display="inline",n.focus(),n.select()}function l(){t||a(),t.style.display="none",c&&c.remove()}function f(t,n){var r=document.getElementById(t)||document.body,o=n||"EM",i=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),c=["#ff6","#a0ffff","#9f9","#f99","#f6f"],a=[],u=0,l="",f=[];this.setRegex=function(e){e=e.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),l=new RegExp("("+e+")","i")},this.getRegex=function(){return l.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(t){if(null!=t&&t&&l&&!i.test(t.nodeName)){if(t.hasChildNodes())for(var n=0;n<t.childNodes.length;n++)this.hiliteWords(t.childNodes[n]);var r,s;if(3==t.nodeType)if((r=t.nodeValue)&&(s=l.exec(r))){for(var p=t;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var d=e.getIndices(p),g=f.length,v=!1;for(n=0;n<g;n++)f[n].h===d.h&&f[n].v===d.v&&(v=!0);v||f.push(d),a[s[0].toLowerCase()]||(a[s[0].toLowerCase()]=c[u++%c.length]);var h=document.createElement(o);h.appendChild(document.createTextNode(s[0])),h.style.backgroundColor=a[s[0].toLowerCase()],h.style.fontStyle="inherit",h.style.color="#000";var y=t.splitText(s.index);y.nodeValue=y.nodeValue.substring(s[0].length),t.parentNode.insertBefore(h,y)}}},this.remove=function(){for(var e,t=document.getElementsByTagName(o);t.length&&(e=t[0]);)e.parentNode.replaceChild(e.firstChild,e)},this.apply=function(e){if(null!=e&&e)return this.remove(),this.setRegex(e),this.hiliteWords(r),f}}return{id:"search",init:function(n){(e=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(e){"F"==e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t||a(),"inline"!==t.style.display?u():l())}),!1)},open:u}}}));
