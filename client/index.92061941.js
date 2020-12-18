import{S as e,i as a,s as t,e as s,t as n,c as l,a as r,b as c,d as i,f as o,g as u,h,n as d,j as m,k as f,l as p,m as v,o as g,p as $,q as y,r as E,u as _,v as w,w as k,x as D,y as I,z as T,A as x,B as b,C as L,D as S,E as M,H as N,F as R,G as A}from"./client.65aeaf34.js";import{c as H,a as U,h as V,L as O}from"./createOctokit.9696d708.js";function P(e,a,t){const s=e.slice();return s[5]=a[t],s}function B(e){let a,t,m,f=E.i18n.allSystemsOperational+"";return{c(){a=s("article"),t=n("✅   "),m=n(f),this.h()},l(e){a=l(e,"ARTICLE",{class:!0});var s=r(a);t=c(s,"✅   "),m=c(s,f),s.forEach(i),this.h()},h(){o(a,"class","good svelte-1uadwzk")},m(e,s){u(e,a,s),h(a,t),h(a,m)},p:d,d(e){e&&i(a)}}}function C(e){let a,t,o,p,v=E.i18n.activeIncidents+"",g=e[1],$=[];for(let a=0;a<g.length;a+=1)$[a]=F(P(e,g,a));return{c(){a=s("h2"),t=n(v),o=m();for(let e=0;e<$.length;e+=1)$[e].c();p=w()},l(e){a=l(e,"H2",{});var s=r(a);t=c(s,v),s.forEach(i),o=f(e);for(let a=0;a<$.length;a+=1)$[a].l(e);p=w()},m(e,s){u(e,a,s),h(a,t),u(e,o,s);for(let a=0;a<$.length;a+=1)$[a].m(e,s);u(e,p,s)},p(e,a){if(2&a){let t;for(g=e[1],t=0;t<g.length;t+=1){const s=P(e,g,t);$[t]?$[t].p(s,a):($[t]=F(s),$[t].c(),$[t].m(p.parentNode,p))}for(;t<$.length;t+=1)$[t].d(1);$.length=g.length}},i:d,o:d,d(e){e&&i(a),e&&i(o),k($,e),e&&i(p)}}}function z(e){let a,t;return a=new O({}),{c(){D(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,s){T(a,e,s),t=!0},p:d,i(e){t||($(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){x(a,e)}}}function F(e){let a,t,d,p,v,g,$,y,w,k,D,I,T,x,b,L=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",S=E.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"",M=E.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"";return{c(){a=s("article"),t=s("div"),d=s("div"),p=s("h4"),v=n(L),g=m(),$=s("div"),y=n(S),w=m(),k=s("div"),D=s("a"),I=n(M),x=m(),this.h()},l(e){a=l(e,"ARTICLE",{class:!0});var s=r(a);t=l(s,"DIV",{class:!0});var n=r(t);d=l(n,"DIV",{});var o=r(d);p=l(o,"H4",{});var u=r(p);v=c(u,L),u.forEach(i),g=f(o),$=l(o,"DIV",{});var h=r($);y=c(h,S),h.forEach(i),o.forEach(i),w=f(n),k=l(n,"DIV",{class:!0});var m=r(k);D=l(m,"A",{href:!0});var E=r(D);I=c(E,M),E.forEach(i),m.forEach(i),n.forEach(i),x=f(s),s.forEach(i),this.h()},h(){o(D,"href",T=`${E.path}/incident/${e[5].number}`),o(k,"class","f r"),o(t,"class","f"),o(a,"class",b="down link "+(e[5].title.includes("degraded")?"degraded":"")+" svelte-1uadwzk")},m(e,s){u(e,a,s),h(a,t),h(t,d),h(d,p),h(p,v),h(d,g),h(d,$),h($,y),h(t,w),h(t,k),h(k,D),h(D,I),h(a,x)},p(e,t){2&t&&L!==(L=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&_(v,L),2&t&&S!==(S=E.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"")&&_(y,S),2&t&&M!==(M=E.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&_(I,M),2&t&&T!==(T=`${E.path}/incident/${e[5].number}`)&&o(D,"href",T),2&t&&b!==(b="down link "+(e[5].title.includes("degraded")?"degraded":"")+" svelte-1uadwzk")&&o(a,"class",b)},d(e){e&&i(a)}}}function j(e){let a,t,n,c,h,d=!e[1].length&&!e[0]&&B();const y=[z,C],E=[];function _(e,a){return e[0]?0:e[1].length?1:-1}return~(n=_(e))&&(c=E[n]=y[n](e)),{c(){d&&d.c(),a=m(),t=s("section"),c&&c.c(),this.h()},l(e){d&&d.l(e),a=f(e),t=l(e,"SECTION",{class:!0});var s=r(t);c&&c.l(s),s.forEach(i),this.h()},h(){o(t,"class","svelte-1uadwzk")},m(e,s){d&&d.m(e,s),u(e,a,s),u(e,t,s),~n&&E[n].m(t,null),h=!0},p(e,[s]){e[1].length||e[0]?d&&(d.d(1),d=null):d?d.p(e,s):(d=B(),d.c(),d.m(a.parentNode,a));let l=n;n=_(e),n===l?~n&&E[n].p(e,s):(c&&(p(),v(E[l],1,1,(()=>{E[l]=null})),g()),~n?(c=E[n],c?c.p(e,s):(c=E[n]=y[n](e),c.c()),$(c,1),c.m(t,null)):c=null)},i(e){h||($(c),h=!0)},o(e){v(c),h=!1},d(e){d&&d.d(e),e&&i(a),e&&i(t),~n&&E[n].d()}}}function W(e,a,t){let s=!0;const n=H(),l=E.owner,r=E.repo;let c=[];return y((async()=>{try{t(1,c=(await U(`issues-${l}-${r}`,(()=>n.issues.listForRepo({owner:l,repo:r,state:"open",filter:"all",sort:"created",direction:"desc",labels:"status"})))).data),t(1,c=c.map(((e,a)=>(e.showHeading=0===a||new Date(c[a-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e))))}catch(e){V(e)}t(0,s=!1)})),[s,c]}class Y extends e{constructor(e){super(),a(this,e,W,j,t,{})}}function G(e,a,t){const s=e.slice();return s[18]=a[t],s}function q(e){let a,t=e[1],s=[];for(let a=0;a<t.length;a+=1)s[a]=K(G(e,t,a));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();a=w()},l(e){for(let a=0;a<s.length;a+=1)s[a].l(e);a=w()},m(e,t){for(let a=0;a<s.length;a+=1)s[a].m(e,t);u(e,a,t)},p(e,n){if(26&n){let l;for(t=e[1],l=0;l<t.length;l+=1){const r=G(e,t,l);s[l]?s[l].p(r,n):(s[l]=K(r),s[l].c(),s[l].m(a.parentNode,a))}for(;l<s.length;l+=1)s[l].d(1);s.length=t.length}},i:d,o:d,d(e){k(s,e),e&&i(a)}}}function J(e){let a,t;return a=new O({}),{c(){D(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,s){T(a,e,s),t=!0},p:d,i(e){t||($(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){x(a,e)}}}function K(e){let a,t,d,p,v,g,$,y,w,k,D,I,T,x,b,L,S,R,A,H,U,V,O,P,B,C,z,F=e[18].name+"",j=E.i18n.overallUptime.split("$UPTIME")[0]+"",W=("day"===e[3]?e[18].uptimeDay:"week"===e[3]?e[18].uptimeWeek:"month"===e[3]?e[18].uptimeMonth:"year"===e[3]?e[18].uptimeYear:e[18].uptime)+"",Y=E.i18n.overallUptime.split("$UPTIME")[1]+"",G=E.i18n.averageResponseTime.split("$TIME")[0]+"",q=("day"===e[3]?e[18].timeDay:"week"===e[3]?e[18].timeWeek:"month"===e[3]?e[18].timeMonth:"year"===e[3]?e[18].timeYear:e[18].time)+"",J=E.i18n.averageResponseTime.split("$TIME")[1]+"";return{c(){a=s("article"),t=s("h4"),d=s("img"),v=m(),g=s("a"),$=n(F),w=m(),k=s("div"),I=m(),T=s("span"),x=n(W),b=m(),S=m(),R=s("div"),H=m(),U=s("span"),V=n(q),O=m(),B=m(),this.h()},l(e){a=l(e,"ARTICLE",{class:!0,style:!0});var s=r(a);t=l(s,"H4",{});var n=r(t);d=l(n,"IMG",{class:!0,alt:!0,src:!0}),v=f(n),g=l(n,"A",{href:!0,class:!0});var o=r(g);$=c(o,F),o.forEach(i),n.forEach(i),w=f(s),k=l(s,"DIV",{});var u=r(k);I=f(u),T=l(u,"SPAN",{class:!0});var h=r(T);x=c(h,W),b=f(h),h.forEach(i),u.forEach(i),S=f(s),R=l(s,"DIV",{});var m=r(R);H=f(m),U=l(m,"SPAN",{class:!0});var p=r(U);V=c(p,q),O=f(p),p.forEach(i),m.forEach(i),B=f(s),s.forEach(i),this.h()},h(){o(d,"class","icon svelte-uyma2x"),o(d,"alt",""),d.src!==(p=e[18].icon)&&o(d,"src",p),o(g,"href",y=`${E.path}/history/${e[18].slug}`),o(g,"class","svelte-uyma2x"),D=new N(I),L=new N(null),o(T,"class","data svelte-uyma2x"),A=new N(H),P=new N(null),o(U,"class","data svelte-uyma2x"),o(a,"class",C=M(`${e[18].status} link`)+" svelte-uyma2x"),o(a,"style",z=`background-image: url("${e[4]}/${e[18].slug}/response-time${"day"===e[3]?"-day":"week"===e[3]?"-week":"month"===e[3]?"-month":"year"===e[3]?"-year":""}.png`)},m(e,s){u(e,a,s),h(a,t),h(t,d),h(t,v),h(t,g),h(g,$),h(a,w),h(a,k),D.m(j,k),h(k,I),h(k,T),h(T,x),h(T,b),L.m(Y,T),h(a,S),h(a,R),A.m(G,R),h(R,H),h(R,U),h(U,V),h(U,O),P.m(J,U),h(a,B)},p(e,t){2&t&&d.src!==(p=e[18].icon)&&o(d,"src",p),2&t&&F!==(F=e[18].name+"")&&_($,F),2&t&&y!==(y=`${E.path}/history/${e[18].slug}`)&&o(g,"href",y),10&t&&W!==(W=("day"===e[3]?e[18].uptimeDay:"week"===e[3]?e[18].uptimeWeek:"month"===e[3]?e[18].uptimeMonth:"year"===e[3]?e[18].uptimeYear:e[18].uptime)+"")&&_(x,W),10&t&&q!==(q=("day"===e[3]?e[18].timeDay:"week"===e[3]?e[18].timeWeek:"month"===e[3]?e[18].timeMonth:"year"===e[3]?e[18].timeYear:e[18].time)+"")&&_(V,q),2&t&&C!==(C=M(`${e[18].status} link`)+" svelte-uyma2x")&&o(a,"class",C),10&t&&z!==(z=`background-image: url("${e[4]}/${e[18].slug}/response-time${"day"===e[3]?"-day":"week"===e[3]?"-week":"month"===e[3]?"-month":"year"===e[3]?"-year":""}.png`)&&o(a,"style",z)},d(e){e&&i(a)}}}function Q(e){let a,t,d,y,_,w,k,D,I,T,x,S,M,N,R,A,H,U,V,O,P,B,C,z,F,j,W,Y,G,K,Q,X,Z,ee,ae,te,se=E.i18n.liveStatus+"";const ne=[J,q],le=[];function re(e,a){return e[0]?0:e[1].length?1:-1}return~(X=re(e))&&(Z=le[X]=ne[X](e)),{c(){a=s("div"),t=s("h2"),d=n(se),y=m(),_=s("form"),w=s("div"),k=s("input"),D=s("label"),I=n("24h"),T=m(),x=s("div"),S=s("input"),M=s("label"),N=n("7d"),R=m(),A=s("div"),H=s("input"),U=s("label"),V=n("30d"),O=m(),P=s("div"),B=s("input"),C=s("label"),z=n("1y"),F=m(),j=s("div"),W=s("input"),Y=s("label"),G=n("all"),K=m(),Q=s("section"),Z&&Z.c(),this.h()},l(e){a=l(e,"DIV",{class:!0});var s=r(a);t=l(s,"H2",{});var n=r(t);d=c(n,se),n.forEach(i),y=f(s),_=l(s,"FORM",{class:!0});var o=r(_);w=l(o,"DIV",{});var u=r(w);k=l(u,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),D=l(u,"LABEL",{for:!0,class:!0});var h=r(D);I=c(h,"24h"),h.forEach(i),u.forEach(i),T=f(o),x=l(o,"DIV",{});var m=r(x);S=l(m,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),M=l(m,"LABEL",{for:!0,class:!0});var p=r(M);N=c(p,"7d"),p.forEach(i),m.forEach(i),R=f(o),A=l(o,"DIV",{});var v=r(A);H=l(v,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),U=l(v,"LABEL",{for:!0,class:!0});var g=r(U);V=c(g,"30d"),g.forEach(i),v.forEach(i),O=f(o),P=l(o,"DIV",{});var $=r(P);B=l($,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),C=l($,"LABEL",{for:!0,class:!0});var E=r(C);z=c(E,"1y"),E.forEach(i),$.forEach(i),F=f(o),j=l(o,"DIV",{});var b=r(j);W=l(b,"INPUT",{value:!0,name:!0,type:!0,id:!0,class:!0}),Y=l(b,"LABEL",{for:!0,class:!0});var L=r(Y);G=c(L,"all"),L.forEach(i),b.forEach(i),o.forEach(i),s.forEach(i),K=f(e),Q=l(e,"SECTION",{class:!0});var q=r(Q);Z&&Z.l(q),q.forEach(i),this.h()},h(){k.__value="day",k.value=k.__value,o(k,"name","d"),o(k,"type","radio"),o(k,"id","data_day"),o(k,"class","svelte-uyma2x"),e[7][0].push(k),o(D,"for","data_day"),o(D,"class","svelte-uyma2x"),S.__value="week",S.value=S.__value,o(S,"name","d"),o(S,"type","radio"),o(S,"id","data_week"),o(S,"class","svelte-uyma2x"),e[7][0].push(S),o(M,"for","data_week"),o(M,"class","svelte-uyma2x"),H.__value="month",H.value=H.__value,o(H,"name","d"),o(H,"type","radio"),o(H,"id","data_month"),o(H,"class","svelte-uyma2x"),e[7][0].push(H),o(U,"for","data_month"),o(U,"class","svelte-uyma2x"),B.__value="year",B.value=B.__value,o(B,"name","d"),o(B,"type","radio"),o(B,"id","data_year"),o(B,"class","svelte-uyma2x"),e[7][0].push(B),o(C,"for","data_year"),o(C,"class","svelte-uyma2x"),W.__value="all",W.value=W.__value,o(W,"name","d"),o(W,"type","radio"),o(W,"id","data_all"),o(W,"class","svelte-uyma2x"),e[7][0].push(W),o(Y,"for","data_all"),o(Y,"class","svelte-uyma2x"),o(_,"class","f r svelte-uyma2x"),o(a,"class","f changed svelte-uyma2x"),o(Q,"class","svelte-uyma2x")},m(s,n){u(s,a,n),h(a,t),h(t,d),h(a,y),h(a,_),h(_,w),h(w,k),k.checked=k.__value===e[3],h(w,D),h(D,I),h(_,T),h(_,x),h(x,S),S.checked=S.__value===e[3],h(x,M),h(M,N),h(_,R),h(_,A),h(A,H),H.checked=H.__value===e[3],h(A,U),h(U,V),h(_,O),h(_,P),h(P,B),B.checked=B.__value===e[3],h(P,C),h(C,z),h(_,F),h(_,j),h(j,W),W.checked=W.__value===e[3],h(j,Y),h(Y,G),e[12](a),u(s,K,n),u(s,Q,n),~X&&le[X].m(Q,null),ee=!0,ae||(te=[b(k,"change",e[6]),b(k,"change",e[5]),b(S,"change",e[8]),b(S,"change",e[5]),b(H,"change",e[9]),b(H,"change",e[5]),b(B,"change",e[10]),b(B,"change",e[5]),b(W,"change",e[11]),b(W,"change",e[5])],ae=!0)},p(e,[a]){8&a&&(k.checked=k.__value===e[3]),8&a&&(S.checked=S.__value===e[3]),8&a&&(H.checked=H.__value===e[3]),8&a&&(B.checked=B.__value===e[3]),8&a&&(W.checked=W.__value===e[3]);let t=X;X=re(e),X===t?~X&&le[X].p(e,a):(Z&&(p(),v(le[t],1,1,(()=>{le[t]=null})),g()),~X?(Z=le[X],Z?Z.p(e,a):(Z=le[X]=ne[X](e),Z.c()),$(Z,1),Z.m(Q,null)):Z=null)},i(e){ee||($(Z),ee=!0)},o(e){v(Z),ee=!1},d(t){t&&i(a),e[7][0].splice(e[7][0].indexOf(k),1),e[7][0].splice(e[7][0].indexOf(S),1),e[7][0].splice(e[7][0].indexOf(H),1),e[7][0].splice(e[7][0].indexOf(B),1),e[7][0].splice(e[7][0].indexOf(W),1),e[12](null),t&&i(K),t&&i(Q),~X&&le[X].d(),ae=!1,L(te)}}}function X(e,a,t){let s=!0;H();const n=E.owner,l=E.repo;let{apiBaseUrl:r}=E["status-website"]||{},c=[];r||(r="https://api.github.com");const i=r.includes("api.github.com")?"https://raw.githubusercontent.com":r,o=`${i}/${n}/${l}/master/graphs`;let u=null,h="week";y((async()=>{try{const e=await fetch(`${i}/${n}/${l}/master/history/summary.json`);t(1,c=await e.json())}catch(e){V(e)}t(0,s=!1),u&&u.classList.remove("changed")}));return[s,c,u,h,o,()=>{u&&(u.classList.add("changed"),setTimeout((()=>u.classList.remove("changed")),500))},function(){h=this.__value,t(3,h)},[[]],function(){h=this.__value,t(3,h)},function(){h=this.__value,t(3,h)},function(){h=this.__value,t(3,h)},function(){h=this.__value,t(3,h)},function(e){S[e?"unshift":"push"]((()=>{u=e,t(2,u)}))}]}class Z extends e{constructor(e){super(),a(this,e,X,Q,t,{})}}function ee(e,a,t){const s=e.slice();return s[5]=a[t],s}function ae(e){let a,t,p,v,g=E.i18n.pastIncidents+"",$=e[1],y=[];for(let a=0;a<$.length;a+=1)y[a]=ne(ee(e,$,a));return{c(){a=s("h2"),t=n(g),p=m();for(let e=0;e<y.length;e+=1)y[e].c();v=w(),this.h()},l(e){a=l(e,"H2",{class:!0});var s=r(a);t=c(s,g),s.forEach(i),p=f(e);for(let a=0;a<y.length;a+=1)y[a].l(e);v=w(),this.h()},h(){o(a,"class","svelte-18y4uo2")},m(e,s){u(e,a,s),h(a,t),u(e,p,s);for(let a=0;a<y.length;a+=1)y[a].m(e,s);u(e,v,s)},p(e,a){if(2&a){let t;for($=e[1],t=0;t<$.length;t+=1){const s=ee(e,$,t);y[t]?y[t].p(s,a):(y[t]=ne(s),y[t].c(),y[t].m(v.parentNode,v))}for(;t<y.length;t+=1)y[t].d(1);y.length=$.length}},i:d,o:d,d(e){e&&i(a),e&&i(p),k(y,e),e&&i(v)}}}function te(e){let a,t;return a=new O({}),{c(){D(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,s){T(a,e,s),t=!0},p:d,i(e){t||($(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){x(a,e)}}}function se(e){let a,t,o=new Date(e[5].created_at).toLocaleDateString()+"";return{c(){a=s("h3"),t=n(o)},l(e){a=l(e,"H3",{});var s=r(a);t=c(s,o),s.forEach(i)},m(e,s){u(e,a,s),h(a,t)},p(e,a){2&a&&o!==(o=new Date(e[5].created_at).toLocaleDateString()+"")&&_(t,o)},d(e){e&&i(a)}}}function ne(e){let a,t,d,p,v,g,$,y,w,k,D,I,T,x,b,L=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",S=E.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"",M=E.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"",N=e[5].showHeading&&se(e);return{c(){N&&N.c(),a=m(),t=s("article"),d=s("div"),p=s("div"),v=s("h4"),g=n(L),$=m(),y=s("div"),w=m(),k=s("div"),D=s("a"),I=n(M),x=m(),this.h()},l(e){N&&N.l(e),a=f(e),t=l(e,"ARTICLE",{class:!0});var s=r(t);d=l(s,"DIV",{class:!0});var n=r(d);p=l(n,"DIV",{});var o=r(p);v=l(o,"H4",{});var u=r(v);g=c(u,L),u.forEach(i),$=f(o),y=l(o,"DIV",{}),r(y).forEach(i),o.forEach(i),w=f(n),k=l(n,"DIV",{class:!0});var h=r(k);D=l(h,"A",{href:!0});var m=r(D);I=c(m,M),m.forEach(i),h.forEach(i),n.forEach(i),x=f(s),s.forEach(i),this.h()},h(){o(D,"href",T=`${E.path}/incident/${e[5].number}`),o(k,"class","f r"),o(d,"class","f"),o(t,"class",b="down link "+(e[5].title.includes("degraded")?"degraded":""))},m(e,s){N&&N.m(e,s),u(e,a,s),u(e,t,s),h(t,d),h(d,p),h(p,v),h(v,g),h(p,$),h(p,y),y.innerHTML=S,h(d,w),h(d,k),h(k,D),h(D,I),h(t,x)},p(e,s){e[5].showHeading?N?N.p(e,s):(N=se(e),N.c(),N.m(a.parentNode,a)):N&&(N.d(1),N=null),2&s&&L!==(L=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&_(g,L),2&s&&S!==(S=E.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"")&&(y.innerHTML=S),2&s&&M!==(M=E.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&_(I,M),2&s&&T!==(T=`${E.path}/incident/${e[5].number}`)&&o(D,"href",T),2&s&&b!==(b="down link "+(e[5].title.includes("degraded")?"degraded":""))&&o(t,"class",b)},d(e){N&&N.d(e),e&&i(a),e&&i(t)}}}function le(e){let a,t,n,c;const o=[te,ae],h=[];function d(e,a){return e[0]?0:e[1].length?1:-1}return~(t=d(e))&&(n=h[t]=o[t](e)),{c(){a=s("section"),n&&n.c()},l(e){a=l(e,"SECTION",{});var t=r(a);n&&n.l(t),t.forEach(i)},m(e,s){u(e,a,s),~t&&h[t].m(a,null),c=!0},p(e,[s]){let l=t;t=d(e),t===l?~t&&h[t].p(e,s):(n&&(p(),v(h[l],1,1,(()=>{h[l]=null})),g()),~t?(n=h[t],n?n.p(e,s):(n=h[t]=o[t](e),n.c()),$(n,1),n.m(a,null)):n=null)},i(e){c||($(n),c=!0)},o(e){v(n),c=!1},d(e){e&&i(a),~t&&h[t].d()}}}function re(e,a,t){let s=!0;const n=H(),l=E.owner,r=E.repo;let c=[];return y((async()=>{try{t(1,c=(await U(`closed-issues-${l}-${r}`,(()=>n.issues.listForRepo({owner:l,repo:r,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"status"})))).data)}catch(e){V(e)}t(1,c=c.map(((e,a)=>(e.showHeading=0===a||new Date(c[a-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e)))),t(0,s=!1)})),[s,c]}class ce extends e{constructor(e){super(),a(this,e,re,le,t,{})}}function ie(e){let a,t=A(E["status-website"].introTitle)+"";return{c(){a=s("h1")},l(e){a=l(e,"H1",{}),r(a).forEach(i)},m(e,s){u(e,a,s),a.innerHTML=t},p:d,d(e){e&&i(a)}}}function oe(e){let a,t=A(E["status-website"].introMessage)+"";return{c(){a=s("p"),this.h()},l(e){a=l(e,"P",{class:!0}),r(a).forEach(i),this.h()},h(){o(a,"class","lead svelte-ngkazm")},m(e,s){u(e,a,s),a.innerHTML=t},p:d,d(e){e&&i(a)}}}function ue(e){let a,t,n,c,h,d,p,g,y,_;document.title=a=e[0];let k=E["status-website"]&&function(e){let a,t,s=E["status-website"].introTitle&&ie(),n=E["status-website"].introMessage&&oe();return{c(){s&&s.c(),a=m(),n&&n.c(),t=w()},l(e){s&&s.l(e),a=f(e),n&&n.l(e),t=w()},m(e,l){s&&s.m(e,l),u(e,a,l),n&&n.m(e,l),u(e,t,l)},p(e,a){E["status-website"].introTitle&&s.p(e,a),E["status-website"].introMessage&&n.p(e,a)},d(e){s&&s.d(e),e&&i(a),n&&n.d(e),e&&i(t)}}}();return h=new Y({}),p=new Z({}),y=new ce({}),{c(){t=m(),n=s("header"),k&&k.c(),c=m(),D(h.$$.fragment),d=m(),D(p.$$.fragment),g=m(),D(y.$$.fragment),this.h()},l(e){R('[data-svelte="svelte-1258swp"]',document.head).forEach(i),t=f(e),n=l(e,"HEADER",{class:!0});var a=r(n);k&&k.l(a),a.forEach(i),c=f(e),I(h.$$.fragment,e),d=f(e),I(p.$$.fragment,e),g=f(e),I(y.$$.fragment,e),this.h()},h(){o(n,"class","svelte-ngkazm")},m(e,a){u(e,t,a),u(e,n,a),k&&k.m(n,null),u(e,c,a),T(h,e,a),u(e,d,a),T(p,e,a),u(e,g,a),T(y,e,a),_=!0},p(e,[t]){(!_||1&t)&&a!==(a=e[0])&&(document.title=a),E["status-website"]&&k.p(e,t)},i(e){_||($(h.$$.fragment,e),$(p.$$.fragment,e),$(y.$$.fragment,e),_=!0)},o(e){v(h.$$.fragment,e),v(p.$$.fragment,e),v(y.$$.fragment,e),_=!1},d(e){e&&i(t),e&&i(n),k&&k.d(),e&&i(c),x(h,e),e&&i(d),x(p,e),e&&i(g),x(y,e)}}}function he(e,a,t){let s="Status";try{s=E["status-website"].name}catch(e){}return[s]}export default class extends e{constructor(e){super(),a(this,e,he,ue,t,{})}}
