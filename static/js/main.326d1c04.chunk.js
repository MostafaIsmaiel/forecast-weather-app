(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(5),n=c.n(i),r=(c(10),c(2)),d=c(0),l=function(e){var t=e.updateCity,c=e.currentLocation,a=e.lat,i=e.lng,n=Object(s.useState)(""),l=Object(r.a)(n,2),o=l[0],j=l[1];return Object(d.jsxs)("div",{className:"first-view",children:[Object(d.jsxs)("form",{className:"search-container",children:[Object(d.jsx)("i",{className:"fas fa-search"}),Object(d.jsx)("input",{type:"search",name:"search",id:"search",value:o,className:"search",placeholder:"Search for places ...",onChange:function(e){return j(e.target.value)},checked:!0}),Object(d.jsx)("button",{id:"submit",className:"submit",onClick:function(e){e.preventDefault(),o&&(t(o),j(""))},children:Object(d.jsx)("img",{src:"./images/icons/location.png",alt:"location",className:"location",title:"submit"})})]}),Object(d.jsx)("div",{className:"current-location",onClick:function(){c(a,i)},children:Object(d.jsx)("img",{src:"./images/icons/location-off.png",alt:"location off",title:"Current location"})})]})},o=function(e){var t=e.data,c=e.days,a=e.updateCity,i=e.celsius,n=e.currentLocation,o=e.lat,j=e.lng,u=t.location,h=t.current,b=t.forecast,m=c[(new Date).getDay()],O=h.last_updated,x=Object(s.useState)(""),g=Object(r.a)(x,2),f=g[0],v=g[1],p=Object(s.useState)(0),N=Object(r.a)(p,2),y=N[0],w=N[1],S=((new Date).getTime()-new Date(O).getTime())/1e3/60;return Object(s.useEffect)((function(){var e=setInterval((function(){w(S)}),2e4);return function(){return clearInterval(e)}})),Object(s.useEffect)((function(){1===h.is_day?v("day"):v("night")}),[h.is_day]),Object(d.jsxs)("section",{className:"today",children:[Object(d.jsx)(l,{updateCity:a,currentLocation:n,lat:o,lng:j}),Object(d.jsxs)("section",{className:"today-weather",children:[Object(d.jsxs)("div",{className:"current",children:[Object(d.jsx)("img",{src:"./images/weather/".concat(f,"/").concat(h.condition.code,".png"),alt:h.condition.text,title:h.condition.text,className:"today-status-img"}),Object(d.jsxs)("div",{className:"current-temp-container",children:[Object(d.jsx)("h2",{className:"current-temp",children:"".concat(i?Math.round(h.feelslike_c):Math.round(h.feelslike_f))}),Object(d.jsx)("span",{children:i?"\xb0C":"\xb0F"})]})]}),Object(d.jsxs)("div",{className:"date-container",children:[Object(d.jsx)("h3",{className:"date",children:m}),Object(d.jsxs)("h3",{className:"time",children:["Updated ",Math.trunc(y)||Math.trunc(S)," ",1===Math.trunc(y)?"minut":"minuts"," ago"]})]}),Object(d.jsxs)("div",{className:"prediction",children:[Object(d.jsxs)("div",{className:"air-status",children:[Object(d.jsx)("img",{src:"./images/icons/cloud.png",alt:h.condition.text,title:h.condition.text}),Object(d.jsx)("h4",{children:h.condition.text})]}),Object(d.jsxs)("div",{className:"weather-status",children:[Object(d.jsx)("img",{src:"./images/icons/rain.png",alt:"rain possibility",title:"rain possibility"}),Object(d.jsxs)("h4",{children:["Rain -",Object(d.jsxs)("span",{children:[" ",b.forecastday[0].day.daily_chance_of_rain,"%"]})]})]})]}),Object(d.jsx)("div",{className:"search-result",children:Object(d.jsxs)("h3",{children:[u.country,", ",u.name]})})]})]})},j=function(e){var t=e.data,c=e.days,s=e.celsius,a=t.forecastday;return Object(d.jsx)("section",{className:"next-days",children:a.map((function(e,t){var a=e.day,i=e.date_epoch,n=e.date,r=c[new Date(n).getDay()];return Object(d.jsxs)("div",{className:"day",children:[Object(d.jsx)("h4",{className:"name",children:0===t?"Today":r}),Object(d.jsx)("div",{className:"status-img",children:Object(d.jsx)("img",{src:"./images/weather/day/".concat(a.condition.code,".png"),alt:a.condition.text,title:a.condition.text})}),Object(d.jsxs)("div",{className:"temperature-degree",children:[Object(d.jsx)("h4",{className:"max",children:"".concat(s?Math.round(a.maxtemp_c):Math.round(a.maxtemp_f),"\xb0")}),Object(d.jsx)("h4",{className:"min",children:"".concat(s?Math.round(a.mintemp_c):Math.round(a.mintemp_f),"\xb0")})]})]},i)}))})},u=c(4),h=(c(12),function(e){var t=e.data,c=t.current,a=t.forecast,i=Object(s.useState)(),n=Object(r.a)(i,2),l=n[0],o=n[1],j=Object(s.useState)(),h=Object(r.a)(j,2),b=h[0],m=h[1];function O(){var e=b[0].getBoundingClientRect().width;b.forEach((function(t,c){t.classList.contains("active")&&(l.style.left="".concat(-e*c,"px"))}))}return Object(s.useEffect)((function(){o(document.querySelector(".weather-cards")),m(Array.from(document.querySelectorAll(".card")))}),[]),Object(d.jsxs)("section",{className:"today-highlights",children:[Object(d.jsx)("h2",{className:"headTitle",children:"today's higlights"}),Object(d.jsxs)("div",{className:" weather-container",children:[Object(d.jsxs)("div",{className:"weather-cards",children:[Object(d.jsxs)("div",{className:"card uv active",children:[Object(d.jsx)("h3",{className:"cardHeader",children:"UV index"}),Object(d.jsx)("div",{className:"card-container",children:Object(d.jsx)("div",{className:"circle",children:Object(d.jsx)(u.a,{value:c.uv,maxValue:12,text:"".concat(c.uv),styles:Object(u.b)({pathColor:c.uv<=2?"#55d284":c.uv<=5?"#ffdd00":c.uv<=7?"#fbd72b":c.uv<=10?"#f9484a":"#de4daa"})})})})]}),Object(d.jsxs)("div",{className:"card wind",children:[Object(d.jsx)("h3",{className:"cardHeader",children:"wind status"}),Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("div",{className:"wind-speed",children:Object(d.jsxs)("h2",{children:[c.wind_kph," ",Object(d.jsx)("span",{children:" km/h"})]})}),Object(d.jsxs)("div",{className:"wind-direction",children:[Object(d.jsx)("img",{src:"./images/icons/compass.png",alt:"wind direction",title:"wind direction"}),Object(d.jsx)("h3",{children:c.wind_dir})]})]})]}),Object(d.jsxs)("div",{className:"card sunContainer",children:[Object(d.jsx)("h3",{className:"cardHeader",children:"rise & set"}),Object(d.jsx)("div",{className:"card-container",children:Object(d.jsxs)("div",{className:"sunAction",children:[Object(d.jsxs)("div",{className:"sun rise",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"./images/icons/sunrise.png",alt:"sunrise",title:"sunrise"})}),Object(d.jsx)("div",{className:"time",children:Object(d.jsx)("h2",{children:a.forecastday[0].astro.sunrise})})]}),Object(d.jsxs)("div",{className:"sun set",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"./images/icons/sunset.png",alt:"sunset",title:"sunset"})}),Object(d.jsx)("div",{className:"time",children:Object(d.jsx)("h2",{children:a.forecastday[0].astro.sunset})})]})]})})]}),Object(d.jsxs)("div",{className:"card humidity ",children:[Object(d.jsx)("h3",{className:"cardHeader",children:"humidity"}),Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{src:"./images/icons/dew-point.png",alt:"humidity",title:"humidity"}),Object(d.jsxs)("h2",{children:[c.humidity," ",Object(d.jsx)("span",{children:"%"})]})]})]}),Object(d.jsxs)("div",{className:"card visibility ",children:[Object(d.jsx)("h3",{className:"cardHeader",children:"visibility"}),Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{src:"./images/icons/low-visibility.png",alt:"visibility",title:"visibility"}),Object(d.jsxs)("h2",{children:[c.vis_km," ",Object(d.jsx)("span",{children:"km"})]})]})]}),Object(d.jsxs)("div",{className:"card gust ",children:[Object(d.jsx)("h3",{className:"cardHeader",children:"gust status"}),Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{src:"./images/icons/gust.png",alt:"gust speed",title:"gust speed"}),Object(d.jsxs)("h2",{children:[c.gust_kph," ",Object(d.jsx)("span",{children:" km/h"})]})]})]})]}),Object(d.jsx)("div",{id:"rightArrow",className:"right-arrow",onClick:function(){var e=document.querySelector(".card.active");e.nextElementSibling&&(e.nextElementSibling.classList.add("active"),e.classList.remove("active"),O())},children:Object(d.jsx)("i",{className:"fas fa-caret-right"})}),Object(d.jsx)("div",{id:"leftArrow",className:"left-arrow",onClick:function(){var e=document.querySelector(".card.active");e.previousElementSibling&&(e.previousElementSibling.classList.add("active"),e.classList.remove("active"),O())},children:Object(d.jsx)("i",{className:"fas fa-caret-left"})})]})]})}),b=function(e){var t=e.isC,c=e.celsius,a=e.setToggle,i=e.toggle,n=e.setDark;return Object(s.useEffect)((function(){!function(){var e=document.querySelector(".toggle-mode");i?(n("dark"),e.classList.add("active")):(n(""),e.classList.remove("active"))}()}),[n,i]),Object(d.jsxs)("section",{className:"header",children:[Object(d.jsx)("h2",{className:"temperature-heading",children:"Week"}),Object(d.jsx)("div",{className:"toggle-mode",onClick:function(){a(!i)}}),Object(d.jsxs)("div",{className:"temperature",children:[Object(d.jsx)("div",{className:"celsius ".concat(c?"active":""),onClick:function(){return t(!0)},children:"\xb0C"}),Object(d.jsx)("div",{className:"fahrenheit ".concat(c?"":"active"),onClick:function(){return t(!1)},children:"\xb0F"})]})]})},m=function(e){var t=e.isError,c=e.isLoading,s=e.errorMessage;return c(!1),Object(d.jsx)("div",{className:"error",onClick:function(){t(!1)},children:Object(d.jsx)("h2",{className:"errMessage",children:s})})},O=function(e){var t=e.setIsNav,c=e.isLoading,s=e.navMessage;return c(!1),Object(d.jsx)("div",{className:"navigator",onClick:function(){t(!1)},children:Object(d.jsx)("h2",{className:"errMessage",children:s})})},x=function(){return Object(d.jsx)("section",{className:"loading-container",children:Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("img",{src:"./images/icons/loading.gif",alt:"loader",title:"loading"})})})},g=function(){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],i=c[1],n="https://weatherapi-com.p.rapidapi.com/forecast.json?q=".concat(a,"&days=5"),u=Object(s.useState)([]),g=Object(r.a)(u,2),f=g[0],v=g[1],p=Object(s.useState)(!0),N=Object(r.a)(p,2),y=N[0],w=N[1],S=Object(s.useState)(!0),C=Object(r.a)(S,2),k=C[0],_=C[1],M=Object(s.useState)(!1),L=Object(r.a)(M,2),E=L[0],T=L[1],D=Object(s.useState)(""),q=Object(r.a)(D,2),A=q[0],H=q[1],I=Object(s.useState)(!1),F=Object(r.a)(I,2),P=F[0],B=F[1],J=Object(s.useState)(""),R=Object(r.a)(J,2),U=R[0],V=R[1],W=Object(s.useState)(!0),G=Object(r.a)(W,2),z=G[0],K=G[1],Q=Object(s.useState)(""),X=Object(r.a)(Q,2),Y=X[0],Z=X[1],$=Object(s.useState)(),ee=Object(r.a)($,2),te=ee[0],ce=ee[1],se=Object(s.useState)(""),ae=Object(r.a)(se,2),ie=ae[0],ne=ae[1],re=Object(s.useState)(""),de=Object(r.a)(re,2),le=de[0],oe=de[1],je=function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,c=e.coords.longitude;ne(t),oe(c)}))};function ue(e,t){je(),_(!0),K(!1),e&&t?fetch("https://api.openweathermap.org/geo/1.0/reverse?lat=".concat(e,"&lon=").concat(t,"&limit=5&appid=d4e738da245099affa60b9e7902e2557")).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw m("")})).then((function(e){e[0].name?(i(""),i(e[0].name)):K(!0)})).catch((function(){K(!0),_(!1),V("Please enable your location"),B(!0),setTimeout((function(){B(!1)}),2e3)})):(K(!0),_(!1),V("Please enable your location"),B(!0),setTimeout((function(){B(!1)}),2e3))}return Object(s.useEffect)((function(){a&&function(e){_(!0),K(!1),fetch(e,{method:"GET",headers:{"x-rapidapi-key":"d89cc6705emsh6983c89f8aa44bcp1d3cc5jsnaa2af595bf47","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw m("")})).then((function(e){v(e),_(!1),K(!1),e.current.is_day?(Z(""),ce(!1)):(Z("dark"),ce(!0))})).catch((function(){K(!0),H("Can't find place, please try again."),T(!0),setTimeout((function(){T(!1)}),2e3)}))}(n),je()}),[a,n]),Object(d.jsxs)("main",{className:"main-container ".concat(Y),children:[z&&Object(d.jsx)(l,{updateCity:i,currentLocation:ue,lat:ie,lng:le}),E&&Object(d.jsx)(m,{isError:T,isLoading:_,errorMessage:A}),P&&Object(d.jsx)(O,{setIsNav:B,isLoading:_,navMessage:U}),Object(d.jsxs)("section",{className:"container",children:[k&&!z&&Object(d.jsx)(x,{}),!k&&!z&&Object(d.jsx)(o,{data:f,days:e,celsius:y,updateCity:i,currentLocation:ue,lat:ie,lng:le}),!k&&!z&&Object(d.jsxs)("section",{className:"forecast",children:[Object(d.jsx)(b,{isC:w,celsius:y,toggle:te,setToggle:ce,setDark:Z}),Object(d.jsx)(j,{data:f.forecast,days:e,celsius:y}),Object(d.jsx)(h,{data:f})]})]})]})};var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(g,{})})};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.326d1c04.chunk.js.map