var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;'use strict';var aQa=function(a,b){return g.Pb(a,b)},bQa=function(a,b){b=b instanceof g.Ic?b:g.Oc(b,/^data:image\//i.test(b));
a.src=g.Jc(b)},cQa=function(a){if(a instanceof g.Xh)return a;
if("function"==typeof a.Eg)return a.Eg(!1);if(g.La(a)){var b=0,c=new g.Xh;c.i=function(){for(;;){if(b>=a.length)throw g.ci;if(b in a)return a[b++];b++}};
c.next=c.i.bind(c);return c}throw Error("Not implemented");},dQa=function(a,b,c){if(g.La(a))try{g.Cb(a,b,c)}catch(d){if(d!==g.ci)throw d;
}else{a=cQa(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.ci)throw d;}}},B6=function(a){g.rk(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ra()).toString(36));
return a},C6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.wk(a.l,b,c)},eQa=function(a,b){var c=[];
dQa(b,function(d){try{var e=g.lr.prototype.l.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.kr(e)&&c.push(d)},a);
return c},fQa=function(a,b){eQa(a,b).forEach(function(c){g.lr.prototype.remove.call(this,c)},a)},gQa=function(a){if(a.V){if(a.V.locationOverrideToken)return{locationOverrideToken:a.V.locationOverrideToken};
if(null!=a.V.latitudeE7&&null!=a.V.longitudeE7)return{latitudeE7:a.V.latitudeE7,longitudeE7:a.V.longitudeE7}}return null},hQa=function(a,b){g.jb(a,b)||a.push(b)},D6=function(a){var b=0,c;
for(c in a)b++;return b},iQa=function(a){try{return g.B.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},E6=function(a){if(g.B.JSON)try{return g.B.JSON.parse(a)}catch(b){}return iQa(a)},jQa=function(a,b,c,d){var e=new g.fk(null,void 0);
a&&g.gk(e,a);b&&g.hk(e,b);c&&g.ik(e,c);d&&(e.J=d);return e},F6=function(a,b){g.Pu[a]=!0;
var c=g.Nu();c&&c.publish.apply(c,arguments);g.Pu[a]=!1},G6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.ei;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",kQa(this,a.capabilities||""),lQa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},kQa=function(a,b){a.capabilities.clear();
g.To(b.split(","),g.Pa(aQa,mQa)).forEach(function(c){a.capabilities.add(c)})},lQa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},H6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},I6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},nQa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},oQa=function(a){return new H6(a)},pQa=function(a){return Array.isArray(a)?g.Se(a,oQa):[]},J6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},K6=function(a){return Array.isArray(a)?"["+g.Se(a,J6).join(",")+"]":"null"},L6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},qQa=function(a){return g.Se(a,function(b){return{key:b.id,
name:b.name}})},M6=function(a,b){return g.fb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},N6=function(a,b){return g.fb(a,function(c){return I6(c,b)})},rQa=function(){var a=(0,g.qz)();
a&&fQa(a,a.i.Eg(!0))},O6=function(){var a=g.tz("yt-remote-connected-devices")||[];
g.zb(a);return a},sQa=function(a){if(g.kb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Se(a,function(d,e){return 0==e?d:d.substring(c.length)})},tQa=function(a){g.sz("yt-remote-connected-devices",a,86400)},Q6=function(){if(P6)return P6;
var a=g.tz("yt-remote-device-id");a||(a=L6(),g.sz("yt-remote-device-id",a,31536E3));for(var b=O6(),c=1,d=a;g.jb(b,d);)c++,d=a+"#"+c;return P6=d},R6=function(){var a=O6(),b=Q6();
g.jb(a,b);g.wz()&&g.Bb(a,b);a=sQa(a);if(g.kb(a))try{g.xt("remote_sid")}catch(c){}else try{g.vt("remote_sid",a.join(","),-1)}catch(c){}},uQa=function(){return g.tz("yt-remote-session-browser-channel")},vQa=function(){return g.tz("yt-remote-local-screens")||[]},wQa=function(){g.sz("yt-remote-lounge-token-expiration",!0,86400)},xQa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Se(vQa(),function(d){return d.loungeToken}),c=g.Se(a,function(d){return d.loungeToken});
g.Fm(c,function(d){return!g.jb(b,d)})&&wQa();
g.sz("yt-remote-local-screens",a,31536E3)},yQa=function(a,b){g.sz("yt-remote-session-browser-channel",a);
g.sz("yt-remote-session-screen-id",b);a=O6();b=Q6();g.jb(a,b)||a.push(b);tQa(a);R6()},S6=function(a){a||(g.vz("yt-remote-session-screen-id"),g.vz("yt-remote-session-video-id"));
R6();a=O6();g.ob(a,Q6());tQa(a)},zQa=function(){if(!T6){var a=g.vr();
a&&(T6=new g.fr(a))}},AQa=function(){zQa();
return T6?!!T6.get("yt-remote-use-staging-server"):!1},U6=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},BQa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},CQa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},V6=function(a){a.length?DQa(a.shift(),function(){V6(a)}):W6()},EQa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},DQa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Fj(d,g.Al(a));(document.head||document.documentElement).appendChild(d)},FQa=function(){var a=U6(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20210721091621/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20210721091621/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},W6=function(){var a=CQa();
a&&a(!1,"No cast extension found")},X6=function(){if(GQa){var a=2,b=CQa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;DQa("//web.archive.org/web/20210721091621/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",W6,c)}},HQa=function(){X6();
var a=FQa();a.push("//web.archive.org/web/20210721091621/https://www.gstatic.com/eureka/clank/cast_sender.js");V6(a)},JQa=function(){X6();
var a=FQa();a.push.apply(a,g.la(IQa.map(EQa)));a.push("//web.archive.org/web/20210721091621/https://www.gstatic.com/eureka/clank/cast_sender.js");V6(a)},Y6=function(a,b,c){g.E.call(this);
this.G=null!=c?(0,g.C)(a,c):a;this.Nf=b;this.C=(0,g.C)(this.CO,this);this.i=!1;this.l=0;this.u=this.Hb=null;this.B=[]},Z6=function(a,b,c){g.E.call(this);
this.B=null!=c?a.bind(c):a;this.Nf=b;this.u=null;this.i=!1;this.l=0;this.Hb=null},$6=function(a){a.Hb=g.nh(function(){a.Hb=null;
a.i&&!a.l&&(a.i=!1,$6(a))},a.Nf);
var b=a.u;a.u=null;a.B.apply(null,b)},a7=function(){},b7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},d7=function(a){c7.dispatchEvent(new KQa(c7,a))},KQa=function(a,b){g.mf.call(this,"statevent",a);
this.stat=b},e7=function(a,b,c,d){this.i=a;
this.l=b;this.L=c;this.J=d||1;this.C=45E3;this.B=new g.xk(this);this.u=new g.mh;this.u.setInterval(250)},MQa=function(a,b,c){a.Es=1;
a.Am=B6(b.clone());a.Up=c;a.G=!0;LQa(a,null)},f7=function(a,b,c,d,e){a.Es=1;
a.Am=B6(b.clone());a.Up=null;a.G=c;e&&(a.KL=!1);LQa(a,d)},LQa=function(a,b){a.qs=Date.now();
g7(a);a.Pn=a.Am.clone();C6(a.Pn,"t",a.J);a.Dw=0;a.We=a.i.bC(a.i.gw()?b:null);0<a.WA&&(a.rz=new Z6((0,g.C)(a.JM,a,a.We),a.WA));a.B.Qa(a.We,"readystatechange",a.DO);b=a.Bo?g.Wb(a.Bo):{};a.Up?(a.gA="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.We.send(a.Pn,a.gA,a.Up,b)):(a.gA="GET",a.KL&&!g.mg&&(b.Connection="close"),a.We.send(a.Pn,a.gA,null,b));a.i.nj(1)},PQa=function(a,b,c){for(var d=!0;!a.Oo&&a.Dw<c.length;){var e=NQa(a,c);
if(e==h7){4==b&&(a.tm=4,d7(15),d=!1);break}else if(e==OQa){a.tm=4;d7(16);d=!1;break}else i7(a,e)}4==b&&0==c.length&&(a.tm=1,d7(17),d=!1);a.Bj=a.Bj&&d;d||(j7(a),k7(a))},NQa=function(a,b){var c=a.Dw,d=b.indexOf("\n",c);
if(-1==d)return h7;c=Number(b.substring(c,d));if(isNaN(c))return OQa;d+=1;if(d+c>b.length)return h7;b=b.substr(d,c);a.Dw=d+c;return b},RQa=function(a,b){a.qs=Date.now();
g7(a);var c=b?window.location.hostname:"";a.Pn=a.Am.clone();g.rk(a.Pn,"DOMAIN",c);g.rk(a.Pn,"t",a.J);try{a.Fj=new ActiveXObject("htmlfile")}catch(m){j7(a);a.tm=7;d7(22);k7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in l7)f=l7[f];else if(f in QQa)f=l7[f]=QQa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
l7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.md(g.ic("b/12014412"),d);a.Fj.open();a.Fj.write(g.fd(c));a.Fj.close();a.Fj.parentWindow.m=(0,g.C)(a.NU,a);a.Fj.parentWindow.d=(0,g.C)(a.cL,a,!0);a.Fj.parentWindow.rpcClose=(0,g.C)(a.cL,a,!1);c=a.Fj.createElement("DIV");a.Fj.parentWindow.document.body.appendChild(c);d=g.Nc(a.Pn.toString());d=g.vd(g.Jc(d));d=g.md(g.ic("b/12014412"),'<iframe src="'+d+'"></iframe>');g.od(c,d);a.i.nj(1)},g7=function(a){a.vF=Date.now()+
a.C;
SQa(a,a.C)},SQa=function(a,b){if(null!=a.Ls)throw Error("WatchDog timer not null");
a.Ls=b7((0,g.C)(a.UU,a),b)},m7=function(a){a.Ls&&(g.B.clearTimeout(a.Ls),a.Ls=null)},k7=function(a){a.i.gf()||a.Oo||a.i.Pw(a)},j7=function(a){m7(a);
g.jf(a.rz);a.rz=null;a.u.stop();g.zk(a.B);if(a.We){var b=a.We;a.We=null;b.abort();b.dispose()}a.Fj&&(a.Fj=null)},i7=function(a,b){try{a.i.VK(a,b),a.i.nj(4)}catch(c){}},UQa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;TQa(a,b,function(h){h?c(!0):g.B.setTimeout(function(){UQa(a,b,c,d,f)},f)})}},TQa=function(a,b,c){var d=new Image;
d.onload=function(){try{n7(d),c(!0)}catch(e){}};
d.onerror=function(){try{n7(d),c(!1)}catch(e){}};
d.onabort=function(){try{n7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{n7(d),c(!1)}catch(e){}};
g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
bQa(d,a)},n7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},VQa=function(a){this.i=a;
this.l=new a7},WQa=function(a){var b=o7(a.i,a.Lt,"/mail/images/cleardot.gif");
B6(b);UQa(b.toString(),5E3,(0,g.C)(a.xP,a),3,2E3);a.nj(1)},q7=function(a){var b=a.i.L;
if(null!=b)d7(5),b?(d7(11),p7(a.i,a,!1)):(d7(12),p7(a.i,a,!0));else if(a.hh=new e7(a,void 0,void 0,void 0),a.hh.Bo=a.XA,b=a.i,b=o7(b,b.gw()?a.ut:null,a.YA),d7(5),!g.ie||g.ce(10))C6(b,"TYPE","xmlhttp"),f7(a.hh,b,!1,a.ut,!1);else{C6(b,"TYPE","html");var c=a.hh;a=!!a.ut;c.Es=3;c.Am=B6(b.clone());RQa(c,a)}},r7=function(a,b,c){this.Pa=1;
this.i=[];this.u=[];this.B=new a7;this.J=a||null;this.L=null!=b?b:null;this.C=c||!1},XQa=function(a,b){this.i=a;
this.map=b;this.context=null},YQa=function(a,b,c,d){g.mf.call(this,"timingevent",a);
this.size=b;this.Xv=d},ZQa=function(a){g.mf.call(this,"serverreachability",a)},bRa=function(a){$Qa(a);
if(3==a.Pa){var b=a.ov++,c=a.xx.clone();g.rk(c,"SID",a.l);g.rk(c,"RID",b);g.rk(c,"TYPE","terminate");s7(a,c);b=new e7(a,a.l,b,void 0);b.Es=2;b.Am=B6(c.clone());bQa(new Image,b.Am.toString());b.qs=Date.now();g7(b)}aRa(a)},cRa=function(a){a.YP(1,0);
a.xx=o7(a,null,a.ZA);t7(a)},$Qa=function(a){a.Fm&&(a.Fm.abort(),a.Fm=null);
a.Ae&&(a.Ae.cancel(),a.Ae=null);a.ql&&(g.B.clearTimeout(a.ql),a.ql=null);u7(a);a.Og&&(a.Og.cancel(),a.Og=null);a.Mm&&(g.B.clearTimeout(a.Mm),a.Mm=null)},dRa=function(a,b){if(0==a.Pa)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new XQa(a.GR++,b));2!=a.Pa&&3!=a.Pa||t7(a)},eRa=function(a){var b=0;
a.Ae&&b++;a.Og&&b++;return b},t7=function(a){a.Og||a.Mm||(a.Mm=b7((0,g.C)(a.aL,a),0),a.wr=0)},gRa=function(a,b){if(1==a.Pa){if(!b){a.ov=Math.floor(1E5*Math.random());
b=a.ov++;var c=new e7(a,"",b,void 0);c.Bo=a.Tj;var d=v7(a),e=a.xx.clone();g.rk(e,"RID",b);g.rk(e,"CVER","1");s7(a,e);MQa(c,e,d);a.Og=c;a.Pa=2}}else 3==a.Pa&&(b?fRa(a,b):0==a.i.length||a.Og||fRa(a))},fRa=function(a,b){if(b)if(6<a.Po){a.i=a.u.concat(a.i);
a.u.length=0;var c=a.ov-1;b=v7(a)}else c=b.L,b=b.Up;else c=a.ov++,b=v7(a);var d=a.xx.clone();g.rk(d,"SID",a.l);g.rk(d,"RID",c);g.rk(d,"AID",a.Nr);s7(a,d);c=new e7(a,a.l,c,a.wr+1);c.Bo=a.Tj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Og=c;MQa(c,d,b)},s7=function(a,b){a.If&&(a=a.If.zI())&&g.Eb(a,function(c,d){g.rk(b,d,c)})},v7=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Po&&0<b){var d=a.i[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={xq:e.xq},f++){e.xq=a.i[f].i;var h=a.i[f].map;e.xq=6>=a.Po?f:e.xq-d;try{g.Eb(h,function(l){return function(m,n){c.push("req"+l.xq+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.xq+"_type="+encodeURIComponent("_badmap"))}}a.u=a.u.concat(a.i.splice(0,b));
return c.join("&")},hRa=function(a){a.Ae||a.ql||(a.G=1,a.ql=b7((0,g.C)(a.ZK,a),0),a.Tq=0)},w7=function(a){if(a.Ae||a.ql||3<=a.Tq)return!1;
a.G++;a.ql=b7((0,g.C)(a.ZK,a),iRa(a,a.Tq));a.Tq++;return!0},p7=function(a,b,c){a.eA=c;
a.Uj=b.Uk;a.C||cRa(a)},u7=function(a){null!=a.Xo&&(g.B.clearTimeout(a.Xo),a.Xo=null)},iRa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},x7=function(a,b){if(2==b||9==b){var c=null;
a.If&&(c=null);var d=(0,g.C)(a.QV,a);c||(c=new g.fk("//web.archive.org/web/20210721091621/https://www.google.com/images/cleardot.gif"),B6(c));TQa(c.toString(),1E4,d)}else d7(2);jRa(a,b)},jRa=function(a,b){a.Pa=0;
a.If&&a.If.PH(b);aRa(a);$Qa(a)},aRa=function(a){a.Pa=0;
a.Uj=-1;if(a.If)if(0==a.u.length&&0==a.i.length)a.If.OB();else{g.rb(a.u);var b=g.rb(a.i);a.u.length=0;a.i.length=0;a.If.OB(b)}},o7=function(a,b,c){var d=g.sk(c);
if(""!=d.i)b&&g.hk(d,b+"."+d.i),g.ik(d,d.u);else{var e=window.location;d=jQa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.ju&&g.Eb(a.ju,function(f,h){g.rk(d,h,f)});
g.rk(d,"VER",a.Po);s7(a,d);return d},kRa=function(){},lRa=function(){this.i=[];
this.l=[]},mRa=function(a,b){this.action=a;
this.params=b||{}},y7=function(a,b){g.E.call(this);
this.i=new g.J(this.FU,0,this);g.F(this,this.i);this.Nf=5E3;this.l=0;if("function"===typeof a)b&&(a=(0,g.C)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.C)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},z7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.xa=a;this.G=b;this.u=new g.er;this.l=new y7(this.vV,this);this.i=null;this.ea=!1;this.C=null;this.V="";this.L=this.B=0;this.J=[];this.ya=c;this.Y=d;this.Aa=e},nRa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.eA,sessionId:a.i.l,arrayId:a.i.Nr}},oRa=function(a,b){a.L=b||0;
a.l.stop();A7(a);a.i&&(3==a.i.getState()&&gRa(a.i),bRa(a.i));a.L=0},B7=function(a){return!!a.i&&3==a.i.getState()},A7=function(a){if(a.i){var b=a.Y(),c=a.i.Tj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Tj=c}},C7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.l=!0;a=a||document.location.href;var b=Number(g.ki(4,a))||"";b&&(this.port=":"+b);this.domain=g.li(a)||"";a=g.Xc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Gc(a,"10.0")&&(this.l=!1))},D7=function(a,b){var c=a.i;
a.l&&(c="https://"+a.domain+a.port+a.i);return g.wi(c+b,{})},E7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Pa(a.B,d,!0),onError:g.Pa(a.u,e),onTimeout:g.Pa(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.jt(b,a)},sRa=function(){var a=pRa;
qRa();F7.push(a);rRa()},G7=function(a,b){qRa();
var c=tRa(a,String(b));g.kb(F7)?uRa(c):(rRa(),g.Cb(F7,function(d){d(c)}))},qRa=function(){F7||(F7=g.Ha("yt.mdx.remote.debug.handlers_")||[],g.Ga("yt.mdx.remote.debug.handlers_",F7,void 0))},uRa=function(a){var b=(H7+1)%50;
H7=b;I7[b]=a;J7||(J7=49==b)},rRa=function(){var a=F7;
if(I7[0]){var b=J7?H7:-1;do{b=(b+1)%50;var c=I7[b];g.Cb(a,function(d){d(c)})}while(b!=H7);
I7=Array(50);H7=-1;J7=!1}},tRa=function(a,b){var c=(Date.now()-vRa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},K7=function(a){g.P.call(this);
this.G=a;this.screens=[]},wRa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},xRa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.To(a.screens,function(f){return!!M6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=wRa(a,b[d])||c;return c},yRa=function(a,b){var c=a.screens.length;
a.screens=g.To(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},L7=function(a,b,c,d,e){g.P.call(this);
this.u=a;this.J=b;this.B=c;this.G=d;this.C=e;this.l=0;this.i=null;this.Hb=NaN},N7=function(a){K7.call(this,"LocalScreenService");
this.l=a;this.i=NaN;M7(this);this.info("Initializing with "+K6(this.screens))},zRa=function(a){if(a.screens.length){var b=g.Se(a.screens,function(d){return d.id}),c=D7(a.l,"/pairing/get_lounge_token_batch");
E7(a.l,c,{screen_ids:b.join(",")},(0,g.C)(a.xQ,a),(0,g.C)(a.wQ,a))}},M7=function(a){if(g.gs("deprecate_pair_servlet_enabled"))return xRa(a,[]);
var b=pQa(vQa());b=g.To(b,function(c){return!c.uuid});
return xRa(a,b)},O7=function(a,b){xQa(g.Se(a.screens,nQa));
b&&wQa()},Q7=function(a,b){g.P.call(this);
this.G=b;b=(b=g.tz("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.G(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.jb(b,h)}this.i=c;this.C=a;this.u=this.B=NaN;this.l=null;P7("Initialized with "+g.Qh(this.i))},R7=function(a,b,c){var d=D7(a.C,"/pairing/get_screen_availability");
E7(a.C,d,{lounge_token:b.token},(0,g.C)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.C)(function(){c(!1)},a))},S7=function(a,b){a:if(D6(b)!=D6(a.i))var c=!1;
else{c=g.Mb(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(P7("Updated online screens: "+g.Qh(a.i)),a.i=b,a.Z("screenChange"));ARa(a)},T7=function(a){isNaN(a.u)||g.et(a.u);
a.u=g.ct((0,g.C)(a.rE,a),0<a.B&&a.B<g.Ra()?2E4:1E4)},P7=function(a){G7("OnlineScreenService",a)},BRa=function(a){var b={};
g.Cb(a.G(),function(c){c.token?b[c.token]=c.id:this.Wd("Requesting availability of screen w/o lounge token.")});
return b},ARa=function(a){a=g.Mb(g.Fb(a.i,function(b){return b}));
g.zb(a);a.length?g.sz("yt-remote-online-screen-ids",a.join(","),60):g.vz("yt-remote-online-screen-ids")},U7=function(a,b){b=void 0===b?!1:b;
K7.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.l=null;this.u=[];this.C={};CRa(this)},ERa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.Ch(),l=c?N6(h,c):null;c&&(a.J||l)||(l=N6(h,b));if(l){l.uuid=b;var m=V7(a,l);R7(a.i,m,function(n){e(n?m:null)})}else c?DRa(a,c,(0,g.C)(function(n){var p=V7(this,new H6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));R7(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},FRa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},GRa=function(a,b,c){R7(a.i,b,c)},DRa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.jt(D7(a.B,"/pairing/get_lounge_token_batch"),e)},HRa=function(a){a.screens=a.l.Ch();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+K6(a.screens))},CRa=function(a){W7(a);
a.l=new N7(a.B);a.l.subscribe("screenChange",(0,g.C)(a.GQ,a));HRa(a);a.J||(a.u=pQa(g.tz("yt-remote-automatic-screen-cache")||[]));W7(a);a.info("Initializing automatic screens: "+K6(a.u));a.i=new Q7(a.B,(0,g.C)(a.Ch,a,!0));a.i.subscribe("screenChange",(0,g.C)(function(){this.Z("onlineScreenChange")},a))},V7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=N6(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||IRa(a));W7(a);a.C[b.uuid]=b.id;g.sz("yt-remote-device-id-map",a.C,31536E3);return b},IRa=function(a){a=g.To(a.u,function(b){return"shortLived"!=b.idType});
g.sz("yt-remote-automatic-screen-cache",g.Se(a,nQa))},W7=function(a){a.C=g.tz("yt-remote-device-id-map")||{}},X7=function(a,b,c){g.P.call(this);
this.Aa=c;this.u=a;this.i=b;this.B=null},Y7=function(a,b){a.B=b;
a.Z("sessionScreen",a.B)},JRa=function(a,b){a.B&&(a.B.token=b,V7(a.u,a.B));
a.Z("sessionScreen",a.B)},Z7=function(a,b){G7(a.Aa,b)},$7=function(a,b,c){X7.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.l=null;this.Y=(0,g.C)(this.IO,this);this.ya=(0,g.C)(this.XU,this);this.ea=g.ct(function(){KRa(d,null)},12E4);
this.J=this.C=this.G=this.L=0;this.xa=!1;this.V="unknown"},a8=function(a,b){g.et(a.J);
a.J=0;0==b?LRa(a):a.J=g.ct(function(){LRa(a)},b)},LRa=function(a){MRa(a,"getLoungeToken");
g.et(a.C);a.C=g.ct(function(){NRa(a,null)},3E4)},MRa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Qh(void 0));
var c={};c.type=b;a.l?a.l.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ia,(0,g.C)(function(){Z7(this,"Failed to send message: "+b+".")},a)):Z7(a,"Sending yt message without session: "+g.Qh(c))},b8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.OI(b,function(c){Y7(a,c)},function(){return a.gg()},5)):a.gg(Error("Waiting for session status timed out."))},PRa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new H6(b);ORa(a,d,function(e){e?(a.xa=!0,V7(a.u,d),Y7(a,d),a.V="unknown",a8(a,c)):(g.ls(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.gg())},5)},KRa=function(a,b){g.et(a.ea);
a.ea=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?PRa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.ls(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),b8(a,b.screenId))):(g.ls(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),b8(a,b.screenId)):b8(a,b.screenId):a.gg(Error("Waiting for session status timed out."))},NRa=function(a,b){g.et(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.V=c,a8(a,3E4)):(JRa(a,b.loungeToken),a.xa=!1,a.V="unknown",a8(a,b.loungeTokenRefreshIntervalMs))},ORa=function(a,b,c,d){g.et(a.G);
a.G=0;GRa(a.u,b,function(e){e||0>d?c(e):a.G=g.ct(function(){ORa(a,b,c,d-1)},300)})},QRa=function(a){g.et(a.L);
a.L=0;g.et(a.G);a.G=0;g.et(a.ea);a.ea=0;g.et(a.C);a.C=0;g.et(a.J);a.J=0},c8=function(a,b,c,d){X7.call(this,a,b,"DialSession");
this.config_=d;this.l=this.L=null;this.ya="";this.Ia=c;this.Ja=null;this.ea=g.Ia;this.V=NaN;this.Da=(0,g.C)(this.JO,this);this.C=g.Ia;this.J=this.G=0;this.Y=!1;this.xa="unknown"},d8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.l)?0:b.getDialAppInfo))},RRa=function(a){a.C=a.u.rG(a.ya,a.i.label,a.i.friendlyName,d8(a),function(b,c){a.C=g.Ia;
a.Y=!0;Y7(a,b);"shortLived"==b.idType&&0<c&&e8(a,c)},function(b){a.C=g.Ia;
a.gg(b)})},SRa=function(a){var b={};
b.pairingCode=a.ya;b.theme=a.Ia;AQa()&&(b.env_useStageMdx=1);return g.ui(b)},f8=function(a){return new Promise(function(b){a.ya=L6();
if(a.Ja){var c=new chrome.cast.DialLaunchResponse(!0,SRa(a));b(c);RRa(a)}else a.ea=function(){g.et(a.V);a.ea=function(){};
a.V=NaN;var d=new chrome.cast.DialLaunchResponse(!0,SRa(a));b(d);RRa(a)},a.V=g.ct(function(){a.ea()},100)})},URa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new H6(b);return(new Promise(function(e){TRa(a,d,function(f){f?(a.Y=!0,V7(a.u,d),Y7(a,d),e8(a,c)):g.ls(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):f8(a)})},VRa=function(a,b){var c=a.L.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){ERa(a.u,c,b,d,function(f){f&&f.token&&Y7(a,f);e(f)},function(f){Z7(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):f8(a)})},TRa=function(a,b,c,d){g.et(a.G);
a.G=0;GRa(a.u,b,function(e){e||0>d?c(e):a.G=g.ct(function(){TRa(a,b,c,d-1)},300)})},e8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
d8(a)&&(g.et(a.J),a.J=0,0==b?WRa(a):a.J=g.ct(function(){WRa(a)},b))},WRa=function(a){d8(a)&&a.l.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.xa=c,e8(a,3E4)):(a.Y=!1,a.xa="unknown",JRa(a,b.loungeToken),e8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.xa="noLoungeTokenResponse";e8(a,3E4)})},XRa=function(a){g.et(a.G);
a.G=0;g.et(a.J);a.J=0;a.C();a.C=function(){};
g.et(a.V)},g8=function(a,b){X7.call(this,a,b,"ManualSession");
this.l=g.ct((0,g.C)(this.Or,this,null),150)},h8=function(a,b){g.P.call(this);
this.config_=b;this.l=a;this.J=b.appId||"233637DE";this.B=b.theme||"cl";this.L=b.disableCastApi||!1;this.V=b.forceMirroring||!1;this.i=null;this.G=!1;this.u=[];this.C=(0,g.C)(this.QT,this)},YRa=function(a,b){return b?g.fb(a.u,function(c){return I6(b,c.label)},a):null},i8=function(a){G7("Controller",a)},pRa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},j8=function(a){return a.G||!!a.u.length||!!a.i},k8=function(a,b,c){b!=a.i&&(g.jf(a.i),(a.i=b)?(c?a.Z("yt-remote-cast2-receiver-resumed",
b.i):a.Z("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.C)(a.YK,a,b)),b.subscribe("sessionFailed",function(){return ZRa(a,b)}),b.getScreen()?a.Z("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.Or(null)):a.Z("yt-remote-cast2-session-change",null))},ZRa=function(a,b){a.i==b&&a.Z("yt-remote-cast2-session-failed")},$Ra=function(a){var b=a.l.qG(),c=a.i&&a.i.i;
a=g.Se(b,function(d){c&&I6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=YRa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},eSa=function(a,b,c,d){d.disableCastApi?l8("Cannot initialize because disabled by Mdx config."):aSa()?bSa(b,d)&&(m8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?cSa(a,c):(window.__onGCastApiAvailable=function(e,f){e?cSa(a,c):(n8("Failed to load cast API: "+f),o8(!1),m8(!1),g.vz("yt-remote-cast-available"),g.vz("yt-remote-cast-receiver"),
dSa(),c(!1))},d.loadCastApiSetupScript?g.xz("https://web.archive.org/web/20210721091621/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=U6()&&HQa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?W6():89<=U6()?JQa():(X6(),V6(IQa.map(EQa))))):l8("Cannot initialize because not running Chrome")},dSa=function(){l8("dispose");
var a=p8();a&&a.dispose();g.Ga("yt.mdx.remote.cloudview.instance_",null,void 0);fSa(!1);g.Su(q8);q8.length=0},r8=function(){return!!g.tz("yt-remote-cast-installed")},gSa=function(){var a=g.tz("yt-remote-cast-receiver");
return a?a.friendlyName:null},hSa=function(){l8("clearCurrentReceiver");
g.vz("yt-remote-cast-receiver")},iSa=function(){return r8()?p8()?p8().getCastSession():(n8("getCastSelector: Cast is not initialized."),null):(n8("getCastSelector: Cast API is not installed!"),null)},t8=function(){r8()?p8()?s8()?(l8("Requesting cast selector."),p8().requestSession()):(l8("Wait for cast API to be ready to request the session."),q8.push(g.Ru("yt-remote-cast2-api-ready",t8))):n8("requestCastSelector: Cast is not initialized."):n8("requestCastSelector: Cast API is not installed!")},u8=
function(a,b){s8()?p8().setConnectedScreenStatus(a,b):n8("setConnectedScreenStatus called before ready.")},aSa=function(){var a=0<=g.Xc.search(/ (CrMo|Chrome|CriOS)\//);
return g.ej||a},jSa=function(a,b){p8().init(a,b)},bSa=function(a,b){var c=!1;
p8()||(a=new h8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.sz("yt-remote-cast-available",d);F6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){l8("onReceiverSelected: "+d.friendlyName);
g.sz("yt-remote-cast-receiver",d);F6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){l8("onReceiverResumed: "+d.friendlyName);
g.sz("yt-remote-cast-receiver",d);F6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){l8("onSessionChange: "+J6(d));
d||g.vz("yt-remote-cast-receiver");F6("yt-remote-cast2-session-change",d)}),g.Ga("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
l8("cloudview.createSingleton_: "+c);return c},p8=function(){return g.Ha("yt.mdx.remote.cloudview.instance_")},cSa=function(a,b){o8(!0);
m8(!1);jSa(a,function(c){c?(fSa(!0),g.Tu("yt-remote-cast2-api-ready")):(n8("Failed to initialize cast API."),o8(!1),g.vz("yt-remote-cast-available"),g.vz("yt-remote-cast-receiver"),dSa());b(c)})},l8=function(a){G7("cloudview",a)},n8=function(a){G7("cloudview",a)},o8=function(a){l8("setCastInstalled_ "+a);
g.sz("yt-remote-cast-installed",a)},s8=function(){return!!g.Ha("yt.mdx.remote.cloudview.apiReady_")},fSa=function(a){l8("setApiReady_ "+a);
g.Ga("yt.mdx.remote.cloudview.apiReady_",a,void 0)},m8=function(a){g.Ga("yt.mdx.remote.cloudview.initializing_",a,void 0)},v8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.G=this.J=0;this.trackData=null;this.hasNext=this.qk=!1;this.L=this.C=this.i=this.B=0;this.u=NaN;this.l=!1;this.reset(a)},w8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.qk=!1;a.hasNext=!1;a.J=0;a.G=g.Ra();a.B=0;a.i=0;a.C=0;a.L=0;a.u=NaN;a.l=!1},x8=function(a){return a.xc()?(g.Ra()-a.G)/1E3:0},y8=function(a,b){a.J=b;
a.G=g.Ra()},z8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ra()-a.G)/1E3+a.J;
case -1E3:return 0}return a.J},A8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&w8(a)},B8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Xb(a.trackData);b.hasPrevious=a.qk;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.G;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.L;b.liveIngestionTime=a.u;return b},D8=function(a,b){g.P.call(this);
this.Pa=0;this.u=a;this.C=[];this.B=new lRa;this.l=this.i=null;this.L=(0,g.C)(this.qS,this);this.G=(0,g.C)(this.zv,this);this.J=(0,g.C)(this.pS,this);this.V=(0,g.C)(this.xS,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.GE,this),kSa(this))):c=3;0!=c&&(b?this.GE(c):g.ct((0,g.C)(function(){this.GE(c)},this),0));
(a=iSa())&&C8(this,a);this.subscribe("yt-remote-cast2-session-change",this.V)},E8=function(a){return new v8(a.u.getPlayerContextData())},kSa=function(a){g.Cb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled".split(" "),function(b){this.C.push(this.u.subscribe(b,g.Pa(this.NT,b),this))},a)},lSa=function(a){g.Cb(a.C,function(b){this.u.unsubscribeByKey(b)},a);
a.C.length=0},F8=function(a){return 1==a.getState()},G8=function(a,b){var c=a.B;
50>c.i.length+c.l.length&&a.B.l.push(b)},I8=function(a,b,c){var d=E8(a);
y8(d,c);-1E3!=d.playerState&&(d.playerState=b);H8(a,d)},J8=function(a,b,c){a.u.sendMessage(b,c)},H8=function(a,b){lSa(a);
a.u.setPlayerContextData(B8(b));kSa(a)},C8=function(a,b){a.l&&(a.l.removeUpdateListener(a.L),a.l.removeMediaListener(a.G),a.zv(null));
a.l=b;a.l&&(G7("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.L),a.l.addMediaListener(a.G),a.l.media.length&&a.zv(a.l.media[0]))},mSa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=E8(a);b.contentId!=d.videoId&&G7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;y8(d,a.i.getEstimatedTime());H8(a,d)}else G7("CP","No cast media video. Ignoring state update.")},K8=function(a,b,c){return(0,g.C)(function(d){this.Wd("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Wd("Retrying "+b+" using MDx browser channel."),J8(this,b,c))},a)},L8=function(a,b,c){g.P.call(this);
this.C=NaN;this.xa=!1;this.L=this.J=this.ea=this.Y=NaN;this.V=[];this.B=this.G=this.u=this.fc=this.i=null;this.Aa=a;this.V.push(g.iu(window,"beforeunload",(0,g.C)(this.sQ,this)));this.l=[];this.fc=new v8;this.Da=b.id;this.ya=b.idType;this.i=nSa(this,c);this.i.subscribe("handlerOpened",this.uS,this);this.i.subscribe("handlerClosed",this.rS,this);this.i.subscribe("handlerError",this.sS,this);this.i.subscribe("handlerMessage",this.tS,this);this.i.Gz(b.token);this.subscribe("remoteQueueChange",function(){var d=
this.fc.videoId;g.wz()&&g.sz("yt-remote-session-video-id",d)},this)},oSa=function(a){return g.fb(a.l,function(b){return"LOUNGE_SCREEN"==b.type})},M8=function(a){G7("conn",a)},nSa=function(a,b){return new z7(D7(a.Aa,"/bc"),b,!1,function(){return a.vG()},"shortLived"==a.ya)},N8=function(a,b){a.Z("proxyStateChange",b)},pSa=function(a){a.C=g.ct((0,g.C)(function(){M8("Connecting timeout");
this.lr(1)},a),2E4)},O8=function(a){g.et(a.C);
a.C=NaN},P8=function(a){g.et(a.Y);
a.Y=NaN},qSa=function(a){Q8(a);
a.ea=g.ct((0,g.C)(function(){R8(this,"getNowPlaying")},a),2E4)},Q8=function(a){g.et(a.ea);
a.ea=NaN},sSa=function(a,b){var c=null;
if(b){var d=oSa(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ga("yt.mdx.remote.remoteClient_",c,void 0);b&&(O8(a),P8(a));c=B7(a.i)&&isNaN(a.C);b==c?b&&(N8(a,1),R8(a,"getSubtitlesTrack")):b?(a.NI()&&a.fc.reset(),N8(a,1),R8(a,"getNowPlaying"),rSa(a)):a.lr(1)},tSa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.fc.videoId&&(g.Sb(b.params)?a.fc.trackData=null:a.fc.trackData=b.params,a.Z("remotePlayerChange"))},uSa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.fc.listId=b.params.listId||a.fc.listId;A8(a.fc,c,d);a.Z("remoteQueueChange")},wSa=function(a,b){b.params=b.params||{};
uSa(a,b);vSa(a,b);a.Z("autoplayDismissed")},vSa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
y8(a.fc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.fc.playerState&&(c=-1E3);a.fc.playerState=c;c=Number(b.params.loadedTime);a.fc.L=isNaN(c)?0:c;a.fc.yj(Number(b.params.duration));c=a.fc;var d=Number(b.params.liveIngestionTime);c.u=d;c.l=isNaN(d)?!1:!0;c=a.fc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.fc.playerState?qSa(a):Q8(a);a.Z("remotePlayerChange")},xSa=function(a,b){if(-1E3!=a.fc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.fc.playerState=c;b=parseInt(b.params.currentTime,10);y8(a.fc,isNaN(b)?0:b);a.Z("remotePlayerChange")}},ySa=function(a,b){var c="true"==b.params.muted;
a.fc.volume=parseInt(b.params.volume,10);a.fc.muted=c;a.Z("remotePlayerChange")},zSa=function(a,b){a.G=b.params.videoId;
a.Z("nowAutoplaying",parseInt(b.params.timeout,10))},ASa=function(a,b){var c="true"==b.params.hasNext;
a.fc.qk="true"==b.params.hasPrevious;a.fc.hasNext=c;a.Z("previousNextChange")},rSa=function(a){g.et(a.L);
a.L=g.ct((0,g.C)(a.lr,a,1),864E5)},R8=function(a,b,c){c?M8("Sending: action="+b+", params="+g.Qh(c)):M8("Sending: action="+b);
a.i.sendMessage(b,c)},S8=function(a){K7.call(this,"ScreenServiceProxy");
this.Ie=a;this.i=[];this.i.push(this.Ie.$_s("screenChange",(0,g.C)(this.NO,this)));this.i.push(this.Ie.$_s("onlineScreenChange",(0,g.C)(this.uT,this)))},ESa=function(a,b){zQa();
if(!T6||!T6.get("yt-remote-disable-remote-module-for-dev")){b=g.N("MDX_CONFIG")||b;rQa();R6();T8||(T8=new C7(b?b.loungeApiHost:void 0),AQa()&&(T8.i="/api/loungedev"));U8||(U8=g.Ha("yt.mdx.remote.deferredProxies_")||[],g.Ga("yt.mdx.remote.deferredProxies_",U8,void 0));BSa();var c=V8();if(!c){var d=new U7(T8,b?b.disableAutomaticScreenCache||!1:!1);g.Ga("yt.mdx.remote.screenService_",d,void 0);c=V8();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});eSa(a,d,function(f){f?W8()&&u8(W8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){F6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ha("yt.mdx.remote.initialized_")&&(g.Ga("yt.mdx.remote.initialized_",!0,void 0),X8("Initializing: "+g.Qh(b)),Y8.push(g.Ru("yt-remote-cast2-availability-change",function(){F6("yt-remote-receiver-availability-change")})),
Y8.push(g.Ru("yt-remote-cast2-receiver-selected",function(){Z8(null);
F6("yt-remote-auto-connect","cast-selector-receiver")})),Y8.push(g.Ru("yt-remote-cast2-receiver-resumed",function(){F6("yt-remote-receiver-resumed","cast-selector-receiver")})),Y8.push(g.Ru("yt-remote-cast2-session-change",CSa)),Y8.push(g.Ru("yt-remote-connection-change",function(f){f?u8(W8(),"YouTube TV"):$8()||(u8(null,null),hSa())})),Y8.push(g.Ru("yt-remote-cast2-session-failed",function(){F6("yt-remote-connection-failed")})),a=a9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.gs("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),X8(" -- with channel params: "+g.Qh(a)),a?(g.sz("yt-remote-session-app",a.app),g.sz("yt-remote-session-name",a.name)):(g.vz("yt-remote-session-app"),g.vz("yt-remote-session-name")),g.Ga("yt.mdx.remote.channelParams_",a,void 0),c.start(),W8()||DSa())}},FSa=function(){var a=V8().Ie.$_gos();
var b=b9();b&&c9()&&(M6(a,b)||a.push(b));return qQa(a)},d9=function(){var a=GSa();
!a&&r8()&&gSa()&&(a={key:"cast-selector-receiver",name:gSa()});return a},GSa=function(){var a=FSa(),b=b9();
b||(b=$8());return g.fb(a,function(c){return b&&I6(b,c.key)?!0:!1})},b9=function(){var a=W8();
if(!a)return null;var b=V8().Ch();return N6(b,a)},CSa=function(a){X8("remote.onCastSessionChange_: "+J6(a));
if(a){var b=b9();if(b&&b.id==a.id){if(u8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))e9&&(e9.token=a),(b=c9())&&b.Gz(a)}else b&&f9(),g9(a,1)}else c9()&&f9()},f9=function(){s8()?p8().stopSession():n8("stopSession called before API ready.");
var a=c9();a&&(a.disconnect(1),h9(null))},i9=function(){var a=c9();
return!!a&&3!=a.getProxyState()},X8=function(a){G7("remote",a)},V8=function(){if(!j9){var a=g.Ha("yt.mdx.remote.screenService_");
j9=a?new S8(a):null}return j9},W8=function(){return g.Ha("yt.mdx.remote.currentScreenId_")},HSa=function(a){g.Ga("yt.mdx.remote.currentScreenId_",a,void 0)},ISa=function(){return g.Ha("yt.mdx.remote.connectData_")},Z8=function(a){g.Ga("yt.mdx.remote.connectData_",a,void 0)},c9=function(){return g.Ha("yt.mdx.remote.connection_")},h9=function(a){var b=c9();
Z8(null);a||HSa("");g.Ga("yt.mdx.remote.connection_",a,void 0);U8&&(g.Cb(U8,function(c){c(a)}),U8.length=0);
b&&!a?F6("yt-remote-connection-change",!1):!b&&a&&F6("yt-remote-connection-change",!0)},$8=function(){var a=g.wz();
if(!a)return null;var b=V8();if(!b)return null;b=b.Ch();return N6(b,a)},g9=function(a,b){W8();
b9()&&b9();k9?e9=a:(HSa(a.id),a=new L8(T8,a,a9()),a.connect(b,ISa()),a.subscribe("beforeDisconnect",function(c){F6("yt-remote-before-disconnect",c)}),a.subscribe("beforeDispose",function(){c9()&&(c9(),h9(null))}),a.subscribe("browserChannelAuthError",function(){var c=b9();
c&&"shortLived"==c.idType&&(s8()?p8().handleBrowserChannelAuthError():n8("refreshLoungeToken called before API ready."))}),h9(a))},DSa=function(){var a=$8();
a?(X8("Resume connection to: "+J6(a)),g9(a,0)):(S6(),hSa(),X8("Skipping connecting because no session screen found."))},BSa=function(){var a=a9();
if(g.Sb(a)){a=Q6();var b=g.tz("yt-remote-session-name")||"",c=g.tz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ga("yt.mdx.remote.channelParams_",a,void 0)}},a9=function(){return g.Ha("yt.mdx.remote.channelParams_")||{}},l9=function(a,b,c){g.E.call(this);
var d=this;this.l=a;this.I=b;this.Pb=c;this.events=new g.fN(this);this.ea=this.events.N(this.I,"onVolumeChange",function(e){JSa(d,e)});
this.C=!1;this.suggestion=null;this.G=new g.nK(64);this.i=new g.J(this.VL,500,this);this.u=new g.J(this.WL,1E3,this);this.L=new Y6(this.iW,0,this);this.B={};this.V=new g.J(this.DM,1E3,this);this.J=new Z6(this.seekTo,1E3,this);this.Y=g.Ia;g.F(this,this.events);this.events.N(b,"onCaptionsTrackListChanged",this.eT);this.events.N(b,"captionschanged",this.nS);this.events.N(b,"captionssettingschanged",this.cM);this.events.N(b,"videoplayerreset",this.cz);this.events.N(b,"mdxautoplaycancel",function(){d.Pb.iI()});
a=this.Pb;a.isDisposed();a.subscribe("proxyStateChange",this.UK,this);a.subscribe("remotePlayerChange",this.Gv,this);a.subscribe("remoteQueueChange",this.cz,this);a.subscribe("previousNextChange",this.RK,this);a.subscribe("nowAutoplaying",this.LK,this);a.subscribe("autoplayDismissed",this.oK,this);g.F(this,this.i);g.F(this,this.u);g.F(this,this.L);g.F(this,this.V);g.F(this,this.J);this.cM();this.cz();this.Gv()},JSa=function(a,b){if(m9(a)){a.Pb.unsubscribe("remotePlayerChange",a.Gv,a);
var c=Math.round(b.volume);b=!!b.muted;var d=E8(a.Pb);if(c!==d.volume||b!==d.muted)a.Pb.setVolume(c,b),a.V.start();a.Pb.subscribe("remotePlayerChange",a.Gv,a)}},KSa=function(a){a.Rb(0);
a.i.stop();a.Lb(new g.nK(64))},n9=function(a,b){if(m9(a)&&!a.C){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.Zb(c,b));a.Pb.uG(a.I.getVideoData(1).videoId,c);a.B=E8(a.Pb).trackData}},o9=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Pb.playVideo(c.videoId,b,d,e,c.playerParams,c.La,gQa(c));a.Lb(new g.nK(1))},LSa=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{iJ:1});
c&&c.length?(a.I.setOption("captions","track",b),a.C=!1):(a.I.loadModule("captions"),a.C=!0)}else a.I.setOption("captions","track",{})},m9=function(a){return E8(a.Pb).videoId===a.I.getVideoData(1).videoId},p9=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-manual-pairing-popup-dialog",U:{role:"dialog"},T:[{D:"div",K:"ytp-mdx-manual-pairing-popup-dialog-inner-content",T:[{D:"div",K:"ytp-mdx-manual-pairing-popup-title",ra:"Connecting to your TV on web using a code will be going away soon"},{D:"div",K:"ytp-mdx-manual-pairing-popup-buttons",T:[{D:"button",Ea:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],ra:"Learn more"},{D:"button",Ea:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],ra:"OK"}]}]}]});this.i=new g.TL(this,250);this.learnMoreButton=
this.Ca("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.Ca("ytp-mdx-manual-pairing-popup-ok");g.F(this,this.i);this.N(this.learnMoreButton,"click",this.l);this.N(this.okButton,"click",this.u)},q9=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",U:{role:"dialog"},T:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",T:[{D:"div",K:"ytp-mdx-popup-title",ra:"You're signed out"},{D:"div",K:"ytp-mdx-popup-description",ra:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",K:"ytp-mdx-privacy-popup-buttons",T:[{D:"button",Ea:["ytp-button","ytp-mdx-privacy-popup-cancel"],ra:"Cancel"},{D:"button",Ea:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],ra:"Confirm"}]}]}]});this.i=new g.TL(this,250);this.cancelButton=this.Ca("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Ca("ytp-mdx-privacy-popup-confirm");g.F(this,this.i);this.N(this.cancelButton,"click",this.l);this.N(this.confirmButton,"click",this.u)},r9=function(a){g.V.call(this,{D:"div",
K:"ytp-remote",T:[{D:"div",K:"ytp-remote-display-status",T:[{D:"div",K:"ytp-remote-display-status-icon",T:[g.Dra()]},{D:"div",K:"ytp-remote-display-status-text",ra:"{{statustext}}"}]}]});this.api=a;this.i=new g.TL(this,250);g.F(this,this.i);this.N(a,"presentingplayerstatechange",this.l);MSa(this,a.ub())},MSa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.NI("Error on $RECEIVER_NAME",c):b.xc()||g.U(b,4)?g.NI("Playing on $RECEIVER_NAME",c):g.NI("Connected to $RECEIVER_NAME",c);a.Ra("statustext",b);a.i.show()}else a.i.hide()},s9=function(a,b){g.eQ.call(this,"Play on",0,a,b);
this.I=a;this.Mn={};this.N(a,"onMdxReceiversChange",this.C);this.N(a,"presentingplayerstatechange",this.C);this.C()},t9=function(a){g.oN.call(this,a);
this.lj={key:L6(),name:"This computer"};this.Sh=null;this.subscriptions=[];this.fE=this.Pb=null;this.Mn=[this.lj];this.Hm=this.lj;this.md=new g.nK(64);this.HJ=0;this.kf=-1;this.Sr=null;this.Mv=this.Dy=!1;this.Wl=this.gs=null;if(!g.EF(this.player.S())&&!g.FF(this.player.S())){a=this.player;var b=g.TM(a);b&&(b=b.Vm())&&(b=new s9(a,b),g.F(this,b));b=new r9(a);g.F(this,b);g.cN(a,b.element,4);this.gs=new q9;g.F(this,this.gs);g.cN(a,this.gs.element,4);g.S(this.player.S().experiments,"pair_servlet_deprecation_warning_enabled")&&
!g.S(this.player.S().experiments,"deprecate_pair_servlet_enabled")&&(this.Sr=new p9,g.F(this,this.Sr),g.cN(a,this.Sr.element,4));this.Mv=!!$8();this.Dy=!!g.tz("yt-remote-manual-pairing-warning-shown")}},u9=function(a){a.Wl&&(a.player.removeEventListener("presentingplayerstatechange",a.Wl),a.Wl=null)},NSa=function(a,b,c){a.md=c;
a.player.Z("presentingplayerstatechange",new g.AI(c,b))},OSa=function(a,b,c){var d=!1;
1===b?d=!a.Mv:2===b&&(d=!a.Dy);d&&g.CI(c,8)&&(a.player.pauseVideo(),u9(a))},v9=function(a,b){if(b.key!==a.Hm.key)if(b.key===a.lj.key)f9();
else{if(a.Sr&&!a.Dy&&b!==a.lj&&"cast-selector-receiver"!==b.key&&g.WF(a.player.S()))PSa(a);else{var c;(c=!g.S(a.player.S().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.Mv||!a.gs);(c?0:g.WF(a.player.S())||g.$F(a.player.S()))&&QSa(a)}a.Hm=b;if(!a.player.S().X("disable_mdx_connection_in_mdx_module_for_music_web")||!g.FF(a.player.S())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&g.S(a.player.S().experiments,"should_clear_video_data_on_player_cued_unstarted"))a=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=f.ib(l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.La,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=gQa(c))&&(a.locationInfo=c)}X8("Connecting to: "+
g.Qh(b));"cast-selector-receiver"==b.key?(Z8(a||null),b=a||null,s8()?p8().setLaunchParams(b):n8("setLaunchParams called before ready.")):!a&&i9()&&W8()==b.key?F6("yt-remote-connection-change",!0):(f9(),Z8(a||null),a=V8().Ch(),(b=N6(a,b.key))&&g9(b,1))}}},QSa=function(a){a.player.ub().xc()?a.player.pauseVideo():(a.Wl=function(b){OSa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.Wl));
a.gs&&a.gs.Yc();c9()||(k9=!0)},PSa=function(a){a.player.ub().xc()?a.player.pauseVideo():(a.Wl=function(b){OSa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.Wl));
a.Sr&&a.Sr.Yc();c9()||(k9=!0)},QQa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},l7={"'":"\\'"},mQa={iX:"atp",Z6:"ska",P5:"que",Z3:"mus",Y6:"sus",j0:"dsp",j6:"seq",C3:"mic",h_:"dpa",wX:"cds",X3:"mlm"},T6,P6="",GQa=BQa("loadCastFramework")||BQa("loadCastApplicationFramework"),IQa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Sa(Y6,g.E);g.k=Y6.prototype;g.k.BO=function(a){this.B=arguments;this.i=!1;this.Hb?this.u=g.Ra()+this.Nf:this.Hb=g.nh(this.C,this.Nf)};
g.k.stop=function(){this.Hb&&(g.B.clearTimeout(this.Hb),this.Hb=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.l};
g.k.resume=function(){this.l&&(--this.l,!this.l&&this.i&&(this.i=!1,this.G.apply(null,this.B)))};
g.k.va=function(){this.stop();Y6.Vd.va.call(this)};
g.k.CO=function(){this.Hb&&(g.B.clearTimeout(this.Hb),this.Hb=null);this.u?(this.Hb=g.nh(this.C,this.u-g.Ra()),this.u=null):this.l?this.i=!0:(this.i=!1,this.G.apply(null,this.B))};g.v(Z6,g.E);g.k=Z6.prototype;g.k.pG=function(a){this.u=arguments;this.Hb||this.l?this.i=!0:$6(this)};
g.k.stop=function(){this.Hb&&(g.B.clearTimeout(this.Hb),this.Hb=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.l++};
g.k.resume=function(){this.l--;this.l||!this.i||this.Hb||(this.i=!1,$6(this))};
g.k.va=function(){g.E.prototype.va.call(this);this.stop()};a7.prototype.stringify=function(a){return g.B.JSON.stringify(a,void 0)};
a7.prototype.parse=function(a){return g.B.JSON.parse(a,void 0)};var c7=new g.Lf;g.v(KQa,g.mf);g.k=e7.prototype;g.k.Bo=null;g.k.Bj=!1;g.k.Ls=null;g.k.vF=null;g.k.qs=null;g.k.Es=null;g.k.Am=null;g.k.Pn=null;g.k.Up=null;g.k.We=null;g.k.Dw=0;g.k.Fj=null;g.k.gA=null;g.k.tm=null;g.k.qt=-1;g.k.KL=!0;g.k.Oo=!1;g.k.WA=0;g.k.rz=null;var OQa={},h7={};g.k=e7.prototype;g.k.setTimeout=function(a){this.C=a};
g.k.DO=function(a){a=a.target;var b=this.rz;b&&3==g.Pi(a)?b.pG():this.JM(a)};
g.k.JM=function(a){try{if(a==this.We)a:{var b=g.Pi(this.We),c=this.We.l,d=this.We.getStatus();if(g.ie&&!g.ce(10)||g.mg&&!g.be("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Wk&&!g.Ui(this.We))break a;this.Oo||4!=b||7==c||(8==c||0>=d?this.i.nj(3):this.i.nj(2));m7(this);var e=this.We.getStatus();this.qt=e;var f=g.Ui(this.We);(this.Bj=200==e)?(4==b&&j7(this),this.G?(PQa(this,b,f),g.Wk&&this.Bj&&3==b&&(this.B.Qa(this.u,"tick",this.dV),this.u.start())):i7(this,f),this.Bj&&!this.Oo&&(4==b?this.i.Pw(this):
(this.Bj=!1,g7(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.tm=3,d7(13)):(this.tm=0,d7(14)),j7(this),k7(this))}}catch(h){this.We&&g.Ui(this.We)}finally{}};
g.k.dV=function(){var a=g.Pi(this.We),b=g.Ui(this.We);this.Dw<b.length&&(m7(this),PQa(this,a,b),this.Bj&&4!=a&&g7(this))};
g.k.NU=function(a){b7((0,g.C)(this.MU,this,a),0)};
g.k.MU=function(a){this.Oo||(m7(this),i7(this,a),g7(this))};
g.k.cL=function(a){b7((0,g.C)(this.LU,this,a),0)};
g.k.LU=function(a){this.Oo||(j7(this),this.Bj=a,this.i.Pw(this),this.i.nj(4))};
g.k.cancel=function(){this.Oo=!0;j7(this)};
g.k.UU=function(){this.Ls=null;var a=Date.now();0<=a-this.vF?(2!=this.Es&&this.i.nj(3),j7(this),this.tm=2,d7(18),k7(this)):SQa(this,this.vF-a)};
g.k.getLastError=function(){return this.tm};g.k=VQa.prototype;g.k.XA=null;g.k.hh=null;g.k.sz=!1;g.k.XL=null;g.k.wx=null;g.k.nD=null;g.k.YA=null;g.k.Pa=null;g.k.Uk=-1;g.k.ut=null;g.k.Lt=null;g.k.connect=function(a){this.YA=a;a=o7(this.i,null,this.YA);d7(3);this.XL=Date.now();var b=this.i.J;null!=b?(this.ut=b[0],(this.Lt=b[1])?(this.Pa=1,WQa(this)):(this.Pa=2,q7(this))):(C6(a,"MODE","init"),this.hh=new e7(this,void 0,void 0,void 0),this.hh.Bo=this.XA,f7(this.hh,a,!1,null,!0),this.Pa=0)};
g.k.xP=function(a){if(a)this.Pa=2,q7(this);else{d7(4);var b=this.i;b.Uj=b.Fm.Uk;x7(b,9)}a&&this.nj(2)};
g.k.bC=function(a){return this.i.bC(a)};
g.k.abort=function(){this.hh&&(this.hh.cancel(),this.hh=null);this.Uk=-1};
g.k.gf=function(){return!1};
g.k.VK=function(a,b){this.Uk=a.qt;if(0==this.Pa)if(b){try{var c=this.l.parse(b)}catch(d){a=this.i;a.Uj=this.Uk;x7(a,2);return}this.ut=c[0];this.Lt=c[1]}else a=this.i,a.Uj=this.Uk,x7(a,2);else if(2==this.Pa)if(this.sz)d7(7),this.nD=Date.now();else if("11111"==b){if(d7(6),this.sz=!0,this.wx=Date.now(),a=this.wx-this.XL,!g.ie||g.ce(10)||500>a)this.Uk=200,this.hh.cancel(),d7(12),p7(this.i,this,!0)}else d7(8),this.wx=this.nD=Date.now(),this.sz=!1};
g.k.Pw=function(){this.Uk=this.hh.qt;if(this.hh.Bj)0==this.Pa?this.Lt?(this.Pa=1,WQa(this)):(this.Pa=2,q7(this)):2==this.Pa&&((!g.ie||g.ce(10)?!this.sz:200>this.nD-this.wx)?(d7(11),p7(this.i,this,!1)):(d7(12),p7(this.i,this,!0)));else{0==this.Pa?d7(9):2==this.Pa&&d7(10);var a=this.i;this.hh.getLastError();a.Uj=this.Uk;x7(a,2)}};
g.k.gw=function(){return this.i.gw()};
g.k.isActive=function(){return this.i.isActive()};
g.k.nj=function(a){this.i.nj(a)};g.k=r7.prototype;g.k.Tj=null;g.k.ju=null;g.k.Og=null;g.k.Ae=null;g.k.ZA=null;g.k.xx=null;g.k.CH=null;g.k.Qw=null;g.k.ov=0;g.k.GR=0;g.k.If=null;g.k.Mm=null;g.k.ql=null;g.k.Xo=null;g.k.Fm=null;g.k.eA=null;g.k.Nr=-1;g.k.GJ=-1;g.k.Uj=-1;g.k.wr=0;g.k.Tq=0;g.k.Po=8;g.Sa(YQa,g.mf);g.Sa(ZQa,g.mf);g.k=r7.prototype;g.k.connect=function(a,b,c,d,e){d7(0);this.ZA=b;this.ju=c||{};d&&void 0!==e&&(this.ju.OSID=d,this.ju.OAID=e);this.C?(b7((0,g.C)(this.VH,this,a),100),cRa(this)):this.VH(a)};
g.k.VH=function(a){this.Fm=new VQa(this);this.Fm.XA=this.Tj;this.Fm.l=this.B;this.Fm.connect(a)};
g.k.gf=function(){return 0==this.Pa};
g.k.getState=function(){return this.Pa};
g.k.aL=function(a){this.Mm=null;gRa(this,a)};
g.k.ZK=function(){this.ql=null;this.Ae=new e7(this,this.l,"rpc",this.G);this.Ae.Bo=this.Tj;this.Ae.WA=0;var a=this.CH.clone();g.rk(a,"RID","rpc");g.rk(a,"SID",this.l);g.rk(a,"CI",this.eA?"0":"1");g.rk(a,"AID",this.Nr);s7(this,a);if(!g.ie||g.ce(10))g.rk(a,"TYPE","xmlhttp"),f7(this.Ae,a,!0,this.Qw,!1);else{g.rk(a,"TYPE","html");var b=this.Ae,c=!!this.Qw;b.Es=3;b.Am=B6(a.clone());RQa(b,c)}};
g.k.VK=function(a,b){if(0!=this.Pa&&(this.Ae==a||this.Og==a))if(this.Uj=a.qt,this.Og==a&&3==this.Pa)if(7<this.Po){try{var c=this.B.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.ql){if(this.Ae)if(this.Ae.qs+3E3<this.Og.qs)u7(this),this.Ae.cancel(),this.Ae=null;else break a;w7(this);d7(19)}}else this.GJ=a[1],0<this.GJ-this.Nr&&37500>a[2]&&this.eA&&0==this.Tq&&!this.Xo&&(this.Xo=b7((0,g.C)(this.kS,this),6E3));else x7(this,11)}else null!=b&&x7(this,11);else if(this.Ae==
a&&u7(this),!g.tc(b))for(a=this.B.parse(b),b=0;b<a.length;b++)c=a[b],this.Nr=c[0],c=c[1],2==this.Pa?"c"==c[0]?(this.l=c[1],this.Qw=c[2],c=c[3],null!=c?this.Po=c:this.Po=6,this.Pa=3,this.If&&this.If.RH(),this.CH=o7(this,this.gw()?this.Qw:null,this.ZA),hRa(this)):"stop"==c[0]&&x7(this,7):3==this.Pa&&("stop"==c[0]?x7(this,7):"noop"!=c[0]&&this.If&&this.If.QH(c),this.Tq=0)};
g.k.kS=function(){null!=this.Xo&&(this.Xo=null,this.Ae.cancel(),this.Ae=null,w7(this),d7(20))};
g.k.Pw=function(a){if(this.Ae==a){u7(this);this.Ae=null;var b=2}else if(this.Og==a)this.Og=null,b=1;else return;this.Uj=a.qt;if(0!=this.Pa)if(a.Bj)if(1==b){b=Date.now()-a.qs;var c=c7;c.dispatchEvent(new YQa(c,a.Up?a.Up.length:0,b,this.wr));t7(this);this.u.length=0}else hRa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Uj)){if(d=1==b)this.Og||this.Mm||1==this.Pa||2<=this.wr?d=!1:(this.Mm=b7((0,g.C)(this.aL,this,a),iRa(this,this.wr)),this.wr++,d=!0);d=!(d||2==b&&w7(this))}if(d)switch(c){case 1:x7(this,
5);break;case 4:x7(this,10);break;case 3:x7(this,6);break;case 7:x7(this,12);break;default:x7(this,2)}}};
g.k.YP=function(a){if(!g.jb(arguments,this.Pa))throw Error("Unexpected channel state: "+this.Pa);};
g.k.QV=function(a){a?d7(2):(d7(1),jRa(this,8))};
g.k.bC=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Di;a.L=!1;return a};
g.k.isActive=function(){return!!this.If&&this.If.isActive(this)};
g.k.nj=function(a){var b=c7;b.dispatchEvent(new ZQa(b,a))};
g.k.gw=function(){return!(!g.ie||g.ce(10))};
g.k=kRa.prototype;g.k.RH=function(){};
g.k.QH=function(){};
g.k.PH=function(){};
g.k.OB=function(){};
g.k.zI=function(){return{}};
g.k.isActive=function(){return!0};g.k=lRa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.l.length};
g.k.clear=function(){this.i=[];this.l=[]};
g.k.contains=function(a){return g.jb(this.i,a)||g.jb(this.l,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.iKa)(b,a);0<=c?(g.nb(b,c),b=!0):b=!1;return b||g.ob(this.l,a)};
g.k.Rg=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};g.Sa(y7,g.E);g.k=y7.prototype;g.k.FU=function(){this.Nf=Math.min(3E5,2*this.Nf);this.u();this.l&&this.start()};
g.k.start=function(){var a=this.Nf+15E3*Math.random();g.Hq(this.i,a);this.l=Date.now()+a};
g.k.stop=function(){this.i.stop();this.l=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Nf=5E3};g.Sa(z7,kRa);g.k=z7.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.Sf=function(a){return this.u.Sf(a)};
g.k.Z=function(a,b){return this.u.Z.apply(this.u,arguments)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.jf(this.u),oRa(this),g.jf(this.l),this.l=null,this.Y=function(){return""})};
g.k.isDisposed=function(){return this.ea};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.V="";this.l.stop();this.C=a||null;this.B=b||0;a=this.xa+"/test";b=this.xa+"/bind";var d=new r7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.i;e&&(e.If=null);d.If=this;this.i=d;A7(this);if(this.i){d=g.N("ID_TOKEN");var f=this.i.Tj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Tj=f}e?(3!=e.getState()&&0==eRa(e)||e.getState(),this.i.connect(a,b,this.G,e.l,e.Nr)):c?this.i.connect(a,
b,this.G,c.sessionId,c.arrayId):this.i.connect(a,b,this.G)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Zb(a,b);this.l.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):B7(this)&&(A7(this),dRa(this.i,a))};
g.k.RH=function(){this.l.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)dRa(this.i,a[b])}this.Z("handlerOpened")};
g.k.PH=function(a){var b=2==a&&401==this.i.Uj;4==a||b||this.l.start();this.Z("handlerError",a,b)};
g.k.OB=function(a){if(!this.l.isActive())this.Z("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.J.push(d)}};
g.k.zI=function(){var a={v:2};this.V&&(a.gsessionid=this.V);0!=this.B&&(a.ui=""+this.B);0!=this.L&&(a.ui=""+this.L);this.C&&g.Zb(a,this.C);return a};
g.k.QH=function(a){"S"==a[0]?this.V=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),bRa(this.i)):this.Z("handlerMessage",new mRa(a[0],a[1]))};
g.k.Gz=function(a){(this.G.loungeIdToken=a)||this.l.stop();if(this.Aa&&this.i){var b=this.i.Tj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Tj=b}};
g.k.vV=function(){this.l.isActive();0==eRa(this.i)&&this.connect(this.C,this.B)};C7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
C7.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
C7.prototype.C=function(a){a(Error("request timed out"))};var vRa=Date.now(),F7=null,I7=Array(50),H7=-1,J7=!1;g.Sa(K7,g.P);K7.prototype.Ch=function(){return this.screens};
K7.prototype.contains=function(a){return!!M6(this.screens,a)};
K7.prototype.get=function(a){return a?N6(this.screens,a):null};
K7.prototype.info=function(a){G7(this.G,a)};g.v(L7,g.P);g.k=L7.prototype;g.k.start=function(){!this.i&&isNaN(this.Hb)&&this.jL()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Hb)||(g.et(this.Hb),this.Hb=NaN)};
g.k.va=function(){this.stop();g.P.prototype.va.call(this)};
g.k.jL=function(){this.Hb=NaN;this.i=g.jt(D7(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.C)(this.FO,this),onError:(0,g.C)(this.EO,this),onTimeout:(0,g.C)(this.GO,this)})};
g.k.FO=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.G;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.Z("pairingComplete",new H6(a),b)};
g.k.EO=function(a){this.i=null;a.status&&404==a.status?this.l>=RSa.length?this.Z("pairingFailed",Error("DIAL polling timed out")):(a=RSa[this.l],this.Hb=g.ct((0,g.C)(this.jL,this),a),this.l++):this.Z("pairingFailed",Error("Server error "+a.status))};
g.k.GO=function(){this.i=null;this.Z("pairingFailed",Error("Server not responding"))};
var RSa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Sa(N7,K7);g.k=N7.prototype;g.k.start=function(){M7(this)&&this.Z("screenChange");!g.tz("yt-remote-lounge-token-expiration")&&zRa(this);g.et(this.i);this.i=g.ct((0,g.C)(this.start,this),1E4)};
g.k.add=function(a,b){M7(this);wRa(this,a);O7(this,!1);this.Z("screenChange");b(a);a.token||zRa(this)};
g.k.remove=function(a,b){var c=M7(this);yRa(this,a)&&(O7(this,!1),c=!0);b(a);c&&this.Z("screenChange")};
g.k.cA=function(a,b,c,d){var e=M7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,O7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.Z("screenChange")};
g.k.va=function(){g.et(this.i);N7.Vd.va.call(this)};
g.k.xQ=function(a){M7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}O7(this,!b);b&&G7(this.G,"Missed "+b+" lounge tokens.")};
g.k.wQ=function(a){G7(this.G,"Requesting lounge tokens failed: "+a)};g.v(Q7,g.P);g.k=Q7.prototype;g.k.start=function(){var a=parseInt(g.tz("yt-remote-fast-check-period")||"0",10);(this.B=g.Ra()-144E5<a?0:a)?T7(this):(this.B=g.Ra()+3E5,g.sz("yt-remote-fast-check-period",this.B),this.rE())};
g.k.isEmpty=function(){return g.Sb(this.i)};
g.k.update=function(){P7("Updating availability on schedule.");var a=this.G(),b=g.Fb(this.i,function(c,d){return c&&!!N6(a,d)},this);
S7(this,b)};
g.k.va=function(){g.et(this.u);this.u=NaN;this.l&&(this.l.abort(),this.l=null);g.P.prototype.va.call(this)};
g.k.rE=function(){g.et(this.u);this.u=NaN;this.l&&this.l.abort();var a=BRa(this);if(D6(a)){var b=D7(this.C,"/pairing/get_screen_availability");this.l=E7(this.C,b,{lounge_token:g.Mb(a).join(",")},(0,g.C)(this.lU,this,a),(0,g.C)(this.kU,this))}else S7(this,{}),T7(this)};
g.k.lU=function(a,b){this.l=null;var c=g.Mb(BRa(this));if(g.Ab(c,g.Mb(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;S7(this,c);T7(this)}else this.Wd("Changing Screen set during request."),this.rE()};
g.k.kU=function(a){this.Wd("Screen availability failed: "+a);this.l=null;T7(this)};
g.k.Wd=function(a){G7("OnlineScreenService",a)};g.Sa(U7,K7);g.k=U7.prototype;g.k.start=function(){this.l.start();this.i.start();this.screens.length&&(this.Z("screenChange"),this.i.isEmpty()||this.Z("onlineScreenChange"))};
g.k.add=function(a,b,c){this.l.add(a,b,c)};
g.k.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.k.cA=function(a,b,c,d){this.l.contains(a)?this.l.cA(a,b,c,d):(a="Updating name of unknown screen: "+a.name,G7(this.G,a),d(Error(a)))};
g.k.Ch=function(a){return a?this.screens:g.qb(this.screens,g.To(this.u,function(b){return!this.contains(b)},this))};
g.k.qG=function(){return g.To(this.Ch(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.rG=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new L7(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.jf(l);e(V7(h,m),n)});
l.subscribe("pairingFailed",function(m){g.jf(l);f(m)});
l.start();return(0,g.C)(l.stop,l)};
g.k.HO=function(a,b,c,d){g.jt(D7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.C)(function(e,f){e=new H6(f.screen||{});if(!e.name||FRa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);FRa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(V7(this,e))},this),
onError:(0,g.C)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.C)(function(){d(Error("pairing request timed out."))},this)})};
g.k.va=function(){g.jf(this.l);g.jf(this.i);U7.Vd.va.call(this)};
g.k.GQ=function(){HRa(this);this.Z("screenChange");this.i.update()};
U7.prototype.dispose=U7.prototype.dispose;g.Sa(X7,g.P);g.k=X7.prototype;g.k.getScreen=function(){return this.B};
g.k.gg=function(a){this.isDisposed()||(a&&(Z7(this,""+a),this.Z("sessionFailed")),this.B=null,this.Z("sessionScreen",null))};
g.k.info=function(a){G7(this.Aa,a)};
g.k.sG=function(){return null};
g.k.EE=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.C)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.C)(function(){Z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.va=function(){this.EE("");X7.Vd.va.call(this)};g.v($7,X7);g.k=$7.prototype;g.k.DE=function(a){if(this.l){if(this.l==a)return;Z7(this,"Overriding cast session with new session object");QRa(this);this.xa=!1;this.V="unknown";this.l.removeUpdateListener(this.Y);this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ya)}this.l=a;this.l.addUpdateListener(this.Y);this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.ya);MRa(this,"getMdxSessionStatus")};
g.k.Or=function(a){this.info("launchWithParams no-op for Cast: "+g.Qh(a))};
g.k.stop=function(){this.l?this.l.stop((0,g.C)(function(){this.gg()},this),(0,g.C)(function(){this.gg(Error("Failed to stop receiver app."))},this)):this.gg(Error("Stopping cast device without session."))};
g.k.EE=function(){};
g.k.va=function(){this.info("disposeInternal");QRa(this);this.l&&(this.l.removeUpdateListener(this.Y),this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ya));this.l=null;X7.prototype.va.call(this)};
g.k.XU=function(a,b){if(!this.isDisposed())if(b)if(b=E6(b),g.Ma(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Qh(b)),a){case "mdxSessionStatus":KRa(this,b);break;case "loungeToken":NRa(this,b);break;default:Z7(this,"Unknown youtube message: "+a)}else Z7(this,"Unable to parse message.");else Z7(this,"No data in message.")};
g.k.OI=function(a,b,c,d){g.et(this.L);this.L=0;ERa(this.u,this.i.label,a,this.i.friendlyName,(0,g.C)(function(e){e?b(e):0<=d?(Z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.L=g.ct((0,g.C)(this.OI,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.sG=function(){return this.l};
g.k.IO=function(a){this.isDisposed()||a||(Z7(this,"Cast session died."),this.gg())};g.v(c8,X7);g.k=c8.prototype;g.k.DE=function(a){this.l=a;this.l.addUpdateListener(this.Da)};
g.k.Or=function(a){this.Ja=a;this.ea()};
g.k.stop=function(){XRa(this);this.l?this.l.stop((0,g.C)(this.gg,this,null),(0,g.C)(this.gg,this,"Failed to stop DIAL device.")):this.gg()};
g.k.va=function(){XRa(this);this.l&&this.l.removeUpdateListener(this.Da);this.l=null;X7.prototype.va.call(this)};
g.k.JO=function(a){this.isDisposed()||a||(Z7(this,"DIAL session died."),this.C(),this.C=g.Ia,this.gg())};g.v(g8,X7);g8.prototype.stop=function(){this.gg()};
g8.prototype.DE=function(){};
g8.prototype.Or=function(){g.et(this.l);this.l=NaN;var a=N6(this.u.Ch(),this.i.label);a?Y7(this,a):this.gg(Error("No such screen"))};
g8.prototype.va=function(){g.et(this.l);this.l=NaN;X7.prototype.va.call(this)};g.v(h8,g.P);g.k=h8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.J);this.L||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.V?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.C)(this.TT,this);c=new chrome.cast.ApiConfig(c,(0,g.C)(this.WK,this),e,d,a);c.customDialLaunchCallback=(0,g.C)(this.GS,this);chrome.cast.initialize(c,(0,g.C)(function(){this.isDisposed()||
(chrome.cast.addReceiverActionListener(this.C),sRa(),this.l.subscribe("onlineScreenChange",(0,g.C)(this.tG,this)),this.u=$Ra(this),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.C)(function(f){this.Wd("Failed to set initial custom receivers: "+g.Qh(f))},this)),this.Z("yt-remote-cast2-availability-change",j8(this)),b(!0))},this),(0,g.C)(function(f){this.Wd("Failed to initialize API: "+g.Qh(f));
b(!1)},this))};
g.k.AV=function(a,b){i8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)i8("Unsetting old screen status: "+this.i.i.friendlyName),k8(this,null)}if(a&&b){if(!this.i){c=N6(this.l.Ch(),a);if(!c){i8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){i8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=YRa(this,c);a||(i8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.C)(function(d){this.Wd("Failed to set initial custom receivers: "+g.Qh(d))},this)));
i8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);k8(this,new g8(this.l,a),!0)}this.i.EE(b)}else i8("setConnectedScreenStatus: no screen.")};
g.k.BV=function(a){this.isDisposed()?this.Wd("Setting connection data on disposed cast v2"):this.i?this.i.Or(a):this.Wd("Setting connection data without a session")};
g.k.LO=function(){this.isDisposed()?this.Wd("Stopping session on disposed cast v2"):this.i?(this.i.stop(),k8(this,null)):i8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.C)(this.WK,this),(0,g.C)(this.oU,this))};
g.k.va=function(){this.l.unsubscribe("onlineScreenChange",(0,g.C)(this.tG,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=pRa,b=g.Ha("yt.mdx.remote.debug.handlers_");g.ob(b||[],a);g.jf(this.i);g.P.prototype.va.call(this)};
g.k.Wd=function(a){G7("Controller",a)};
g.k.YK=function(a,b){this.i==a&&(b||k8(this,null),this.Z("yt-remote-cast2-session-change",b))};
g.k.QT=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),i8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)i8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{i8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.Z("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:k8(this,
new g8(this.l,a));break;case chrome.cast.ReceiverType.DIAL:k8(this,new c8(this.l,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:k8(this,new $7(this.l,a,this.config_));break;default:this.Wd("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.Wd("Stopping receiver w/o session: "+a.friendlyName)}else this.Wd("onReceiverAction_ called without receiver.")};
g.k.GS=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Wd("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.Wd("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return i8("Reselecting dial screen."),
this.Z("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Wd('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);k8(this,new c8(this.l,b,this.B,this.config_))}b=this.i;b.L=a;b.L.appState==chrome.cast.DialAppState.RUNNING?(a=b.L.extraData||{},c=a.screenId||null,d8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=URa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.L.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.ls(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=VRa(b,c)):a=VRa(b,c)):a=f8(b);return a};
g.k.WK=function(a){var b=this;if(!this.isDisposed()){i8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)i8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),k8(this,new $7(this.l,c,this.config_),!0);else{this.Wd("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=N6(this.l.Ch(),
d.label);e&&I6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(i8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.jf(this.i),this.i=new $7(this.l,c,this.config_),this.i.subscribe("sessionScreen",(0,g.C)(this.YK,this,this.i)),this.i.subscribe("sessionFailed",function(){return ZRa(b,b.i)}),this.i.Or(null));
this.i.DE(a)}}};
g.k.KO=function(){return this.i?this.i.sG():null};
g.k.oU=function(a){this.isDisposed()||(this.Wd("Failed to estabilish a session: "+g.Qh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&k8(this,null),this.Z("yt-remote-cast2-session-failed"))};
g.k.TT=function(a){i8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=j8(this);this.G=a==chrome.cast.ReceiverAvailability.AVAILABLE;j8(this)!=b&&this.Z("yt-remote-cast2-availability-change",j8(this))}};
g.k.tG=function(){this.isDisposed()||(this.u=$Ra(this),i8("Updating custom receivers: "+g.Qh(this.u)),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.C)(function(){this.Wd("Failed to set custom receivers.")},this)),this.Z("yt-remote-cast2-availability-change",j8(this)))};
h8.prototype.setLaunchParams=h8.prototype.BV;h8.prototype.setConnectedScreenStatus=h8.prototype.AV;h8.prototype.stopSession=h8.prototype.LO;h8.prototype.getCastSession=h8.prototype.KO;h8.prototype.requestSession=h8.prototype.requestSession;h8.prototype.init=h8.prototype.init;h8.prototype.dispose=h8.prototype.dispose;var q8=[];g.k=v8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";w8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.qk=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.G=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.L=a.loadedTime,this.u=a.liveIngestionTime,this.l=
!isNaN(this.u))};
g.k.xc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.yj=function(a){this.C=isNaN(a)?0:a};
g.k.getDuration=function(){return this.l?this.C+x8(this):this.C};
g.k.clone=function(){return new v8(B8(this))};g.v(D8,g.P);g.k=D8.prototype;g.k.getState=function(){return this.Pa};
g.k.play=function(){F8(this)?(this.i?this.i.play(null,g.Ia,K8(this,"play")):J8(this,"play"),I8(this,1,z8(E8(this))),this.Z("remotePlayerChange")):G8(this,this.play)};
g.k.pause=function(){F8(this)?(this.i?this.i.pause(null,g.Ia,K8(this,"pause")):J8(this,"pause"),I8(this,2,z8(E8(this))),this.Z("remotePlayerChange")):G8(this,this.pause)};
g.k.seekTo=function(a){if(F8(this)){if(this.i){var b=E8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.xc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ia,K8(this,"seekTo",{newTime:a}))}else J8(this,"seekTo",{newTime:a});I8(this,3,a);this.Z("remotePlayerChange")}else G8(this,g.Pa(this.seekTo,a))};
g.k.stop=function(){if(F8(this)){this.i?this.i.stop(null,g.Ia,K8(this,"stopVideo")):J8(this,"stopVideo");var a=E8(this);a.index=-1;a.videoId="";w8(a);H8(this,a);this.Z("remotePlayerChange")}else G8(this,this.stop)};
g.k.setVolume=function(a,b){if(F8(this)){var c=E8(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.C)(function(){G7("CP","set receiver volume: "+d)},this),(0,g.C)(function(){this.Wd("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.C)(function(){G7("CP","set receiver muted: "+b)},this),(0,g.C)(function(){this.Wd("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);J8(this,"setVolume",e)}c.muted=b;c.volume=a;H8(this,c)}else G8(this,g.Pa(this.setVolume,a,b))};
g.k.uG=function(a,b){if(F8(this)){var c=E8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Qh(b.style),g.Zb(a,c.trackData));J8(this,"setSubtitlesTrack",a);H8(this,c)}else G8(this,g.Pa(this.uG,a,b))};
g.k.setAudioTrack=function(a,b){F8(this)?(b=b.getLanguageInfo().getId(),J8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=E8(this),a.audioTrackId=b,H8(this,a)):G8(this,g.Pa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=E8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);A8(l,a,c||0);void 0!==b&&(y8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.Qh(h));J8(this,"setPlaylist",m);d||H8(this,l)};
g.k.mz=function(a,b){if(F8(this)){if(a&&b){var c=E8(this);A8(c,a,b);H8(this,c)}J8(this,"previous")}else G8(this,g.Pa(this.mz,a,b))};
g.k.nextVideo=function(a,b){if(F8(this)){if(a&&b){var c=E8(this);A8(c,a,b);H8(this,c)}J8(this,"next")}else G8(this,g.Pa(this.nextVideo,a,b))};
g.k.iI=function(){F8(this)?J8(this,"dismissAutoplay"):G8(this,this.iI)};
g.k.dispose=function(){if(3!=this.Pa){var a=this.Pa;this.Pa=3;this.Z("proxyStateChange",a,this.Pa)}g.P.prototype.dispose.call(this)};
g.k.va=function(){lSa(this);this.u=null;this.B.clear();C8(this,null);g.P.prototype.va.call(this)};
g.k.GE=function(a){if((a!=this.Pa||2==a)&&3!=this.Pa&&0!=a){var b=this.Pa;this.Pa=a;this.Z("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,0===b.i.length&&(b.i=b.l,b.i.reverse(),b.l=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.NT=function(a,b){this.Z(a,b)};
g.k.qS=function(a){if(!a)this.zv(null),C8(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=E8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)G7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,H8(this,b)}};
g.k.zv=function(a){G7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.J);if(this.i=a)this.i.addUpdateListener(this.J),mSa(this),this.Z("remotePlayerChange")};
g.k.pS=function(a){a?(mSa(this),this.Z("remotePlayerChange")):this.zv(null)};
g.k.ZE=function(){J8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.xS=function(){var a=iSa();a&&C8(this,a)};
g.k.Wd=function(a){G7("CP",a)};g.v(L8,g.P);g.k=L8.prototype;
g.k.connect=function(a,b,c){c=void 0===c?!1:c;if(b){var d=b.listId,e=b.videoId,f=b.videoIds,h=b.playerParams,l=b.clickTrackingParams,m=b.index,n={videoId:e},p=b.currentTime,r=b.locationInfo;b=b.loopMode;void 0!==p&&(n.currentTime=5>=p?0:p);h&&(n.playerParams=h);r&&(n.locationInfo=r);l&&(n.clickTrackingParams=l);d&&(n.listId=d);f&&0<f.length&&(n.videoIds=f.join(","));void 0!==m&&(n.currentIndex=m);c&&(n.loopMode=b||"LOOP_MODE_OFF");d&&(this.fc.listId=d);this.fc.videoId=e;this.fc.index=m||0;this.fc.state=
3;y8(this.fc,p);this.B="UNSUPPORTED";c=c?"setInitialState":"setPlaylist";M8("Connecting with "+c+" and params: "+g.Qh(n));this.i.connect({method:c,params:g.Qh(n)},a,uQa())}else M8("Connecting without params"),this.i.connect({},a,uQa());pSa(this)};
g.k.Gz=function(a){this.i.Gz(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ga("yt.mdx.remote.remoteClient_",null,void 0),this.Z("beforeDispose"),N8(this,3));g.P.prototype.dispose.call(this)};
g.k.va=function(){O8(this);Q8(this);P8(this);g.et(this.J);this.J=NaN;g.et(this.L);this.L=NaN;this.u=null;g.ju(this.V);this.V.length=0;this.i.dispose();g.P.prototype.va.call(this);this.B=this.G=this.l=this.fc=this.i=null};
g.k.sQ=function(){this.lr(2)};
g.k.uS=function(){M8("Channel opened");this.xa&&(this.xa=!1,P8(this),this.Y=g.ct((0,g.C)(function(){M8("Timing out waiting for a screen.");this.lr(1)},this),15E3));
yQa(nRa(this.i),this.Da)};
g.k.rS=function(){M8("Channel closed");isNaN(this.C)?S6(!0):S6();this.dispose()};
g.k.sS=function(a,b){S6();isNaN(this.Gu())?(b&&"shortLived"==this.ya&&this.Z("browserChannelAuthError",a),M8("Channel error: "+a+" without reconnection"),this.dispose()):(this.xa=!0,M8("Channel error: "+a+" with reconnection in "+this.Gu()+" ms"),N8(this,2))};
g.k.sJ=function(a){if(!this.l||0===this.l.length)return!1;for(var b=g.q(this.l),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.tS=function(a){a.params?M8("Received: action="+a.action+", params="+g.Qh(a.params)):M8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=E6(a.params.devices);this.l=g.Se(a,function(c){return new G6(c)});
a=!!g.fb(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
sSa(this,a);a=this.sJ("mlm");this.Z("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.pb(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
sSa(this,!1);break;case "remoteConnected":var b=new G6(E6(a.params.device));g.fb(this.l,function(c){return b?c.id==b.id:!1})||hQa(this.l,b);
break;case "remoteDisconnected":b=new G6(E6(a.params.device));g.pb(this.l,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":uSa(this,a);break;case "nowPlaying":wSa(this,a);break;case "onStateChange":vSa(this,a);break;case "onAdStateChange":xSa(this,a);break;case "onVolumeChanged":ySa(this,a);break;case "onSubtitlesTrackChanged":tSa(this,a);break;case "nowAutoplaying":zSa(this,a);break;case "autoplayDismissed":this.Z("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.Z("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.Z("autoplayModeChange",this.B);"DISABLED"==this.B&&this.Z("autoplayDismissed");break;case "onHasPreviousNextChanged":ASa(this,a);break;case "requestAssistedSignIn":this.Z("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.Z("loopModeChange",a.params.loopMode);break;default:M8("Unrecognized action: "+a.action)}};
g.k.qV=function(){if(this.u){var a=this.u;this.u=null;this.fc.videoId!=a&&R8(this,"getNowPlaying")}};
g.k.nQ=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Gu())?B7(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.lr=function(a){M8("Disconnecting with "+a);g.Ga("yt.mdx.remote.remoteClient_",null,void 0);O8(this);this.Z("beforeDisconnect",a);1==a&&S6();oRa(this.i,a);this.dispose()};
g.k.lQ=function(){var a=this.fc;this.u&&(a=this.fc.clone(),A8(a,this.u,a.index));return B8(a)};
g.k.CV=function(a){var b=new v8(a);b.videoId&&b.videoId!=this.fc.videoId&&(this.u=b.videoId,g.et(this.J),this.J=g.ct((0,g.C)(this.qV,this),5E3));var c=[];this.fc.listId==b.listId&&this.fc.videoId==b.videoId&&this.fc.index==b.index||c.push("remoteQueueChange");this.fc.playerState==b.playerState&&this.fc.volume==b.volume&&this.fc.muted==b.muted&&z8(this.fc)==z8(b)&&g.Qh(this.fc.trackData)==g.Qh(b.trackData)||c.push("remotePlayerChange");this.fc.reset(a);g.Cb(c,function(d){this.Z(d)},this)};
g.k.NI=function(){var a=this.i.G.id,b=g.fb(this.l,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Gu=function(){var a=this.i;return a.l.isActive()?a.l.l-Date.now():NaN};
g.k.iQ=function(){return this.B||"UNSUPPORTED"};
g.k.jQ=function(){return this.G||""};
g.k.MO=function(){if(!isNaN(this.Gu())){var a=this.i.l;g.Iq(a.i);a.start()}};
g.k.zV=function(a,b){R8(this,a,b);rSa(this)};
g.k.vG=function(){var a=g.wt("SID","")||"",b=g.wt("SAPISID","")||"",c=g.wt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.fe(g.Ya(a),2);b=g.fe(g.Ya(b),2);c=g.fe(g.Ya(c),2);return g.fe(g.Ya(a+","+b+","+c),2)};
L8.prototype.subscribe=L8.prototype.subscribe;L8.prototype.unsubscribeByKey=L8.prototype.Sf;L8.prototype.getProxyState=L8.prototype.nQ;L8.prototype.disconnect=L8.prototype.lr;L8.prototype.getPlayerContextData=L8.prototype.lQ;L8.prototype.setPlayerContextData=L8.prototype.CV;L8.prototype.getOtherConnectedRemoteId=L8.prototype.NI;L8.prototype.getReconnectTimeout=L8.prototype.Gu;L8.prototype.getAutoplayMode=L8.prototype.iQ;L8.prototype.getAutoplayVideoId=L8.prototype.jQ;L8.prototype.reconnect=L8.prototype.MO;
L8.prototype.sendMessage=L8.prototype.zV;L8.prototype.getXsrfToken=L8.prototype.vG;L8.prototype.isCapabilitySupportedOnConnectedDevices=L8.prototype.sJ;g.v(S8,K7);g.k=S8.prototype;g.k.Ch=function(a){return this.Ie.$_gs(a)};
g.k.contains=function(a){return!!this.Ie.$_c(a)};
g.k.get=function(a){return this.Ie.$_g(a)};
g.k.start=function(){this.Ie.$_st()};
g.k.add=function(a,b,c){this.Ie.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Ie.$_r(a,b,c)};
g.k.cA=function(a,b,c,d){this.Ie.$_un(a,b,c,d)};
g.k.va=function(){for(var a=0,b=this.i.length;a<b;++a)this.Ie.$_ubk(this.i[a]);this.i.length=0;this.Ie=null;K7.prototype.va.call(this)};
g.k.NO=function(){this.Z("screenChange")};
g.k.uT=function(){this.Z("onlineScreenChange")};
U7.prototype.$_st=U7.prototype.start;U7.prototype.$_gspc=U7.prototype.HO;U7.prototype.$_gsppc=U7.prototype.rG;U7.prototype.$_c=U7.prototype.contains;U7.prototype.$_g=U7.prototype.get;U7.prototype.$_a=U7.prototype.add;U7.prototype.$_un=U7.prototype.cA;U7.prototype.$_r=U7.prototype.remove;U7.prototype.$_gs=U7.prototype.Ch;U7.prototype.$_gos=U7.prototype.qG;U7.prototype.$_s=U7.prototype.subscribe;U7.prototype.$_ubk=U7.prototype.Sf;var e9=null,k9=!1,T8=null,U8=null,j9=null,Y8=[];g.v(l9,g.E);g.k=l9.prototype;g.k.va=function(){g.E.prototype.va.call(this);this.i.stop();this.u.stop();this.L.stop();this.Y();var a=this.Pb;a.unsubscribe("proxyStateChange",this.UK,this);a.unsubscribe("remotePlayerChange",this.Gv,this);a.unsubscribe("remoteQueueChange",this.cz,this);a.unsubscribe("previousNextChange",this.RK,this);a.unsubscribe("nowAutoplaying",this.LK,this);a.unsubscribe("autoplayDismissed",this.oK,this);this.Pb=this.l=null};
g.k.ej=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Pb.Pa)if(m9(this)){if(!E8(this.Pb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":E8(this.Pb).xc()?this.Pb.pause():this.Pb.play();break;case "control_play":this.Pb.play();break;case "control_pause":this.Pb.pause();break;case "control_seek":this.J.pG(c[0],c[1]);break;case "control_subtitles_set_track":n9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.I.getCurrentTime();o9(this,0===c?void 0:c);break;case "control_seek":o9(this,c[0]);break;case "control_subtitles_set_track":n9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.nS=function(a){this.L.BO(a)};
g.k.iW=function(a){this.ej("control_subtitles_set_track",g.Sb(a)?null:a)};
g.k.cM=function(){var a=this.I.getOption("captions","track");g.Sb(a)||n9(this,a)};
g.k.Rb=function(a){this.l.Rb(a,this.I.getVideoData().lengthSeconds)};
g.k.eT=function(){g.Sb(this.B)||LSa(this,this.B);this.C=!1};
g.k.UK=function(a,b){this.u.stop();2===b&&this.WL()};
g.k.Gv=function(){if(m9(this)){this.i.stop();var a=E8(this.Pb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.l.kf=1;break;case 1082:case 1083:this.l.kf=0;break;default:this.l.kf=-1}switch(a.playerState){case 1081:case 1:this.Lb(new g.nK(8));this.VL();break;case 1085:case 3:this.Lb(new g.nK(9));break;case 1083:case 0:this.Lb(new g.nK(2));this.J.stop();this.Rb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Lb(new g.nK(4));break;case 2:this.Lb(new g.nK(4));this.Rb(z8(a));
break;case -1:this.Lb(new g.nK(64));break;case -1E3:this.Lb(new g.nK(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=E8(this.Pb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,LSa(this,a));a=E8(this.Pb);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.V.isActive()||this.DM()}else KSa(this)};
g.k.RK=function(){this.I.Z("mdxpreviousnextchange")};
g.k.cz=function(){m9(this)||KSa(this)};
g.k.LK=function(a){isNaN(a)||this.I.Z("mdxnowautoplaying",a)};
g.k.oK=function(){this.I.Z("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){m9(this)&&this.Pb.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===E8(this.Pb).playerState?o9(this,a):b&&this.Pb.seekTo(a)};
g.k.DM=function(){var a=this;if(m9(this)){var b=E8(this.Pb);this.events.hc(this.ea);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.ea=this.events.N(this.I,"onVolumeChange",function(c){JSa(a,c)})}};
g.k.VL=function(){this.i.stop();if(!this.Pb.isDisposed()){var a=E8(this.Pb);a.xc()&&this.Lb(new g.nK(8));this.Rb(z8(a));this.i.start()}};
g.k.WL=function(){this.u.stop();this.i.stop();var a=this.Pb.u.getReconnectTimeout();2==this.Pb.Pa&&!isNaN(a)&&this.u.start()};
g.k.Lb=function(a){this.u.stop();var b=this.G;if(!g.sK(b,a)){var c=g.U(a,2);c!==g.U(this.G,2)&&this.I.xs(c);this.G=a;NSa(this.l,b,a)}};g.v(p9,g.V);p9.prototype.Yc=function(){this.i.show()};
p9.prototype.Bb=function(){this.i.hide()};
p9.prototype.l=function(){g.UJ("https://web.archive.org/web/20210721091621/https://support.google.com/youtube/answer/7640706")};
p9.prototype.u=function(){F6("mdx-manual-pairing-popup-ok");this.Bb()};g.v(q9,g.V);q9.prototype.Yc=function(){this.i.show()};
q9.prototype.Bb=function(){this.i.hide()};
q9.prototype.l=function(){F6("mdx-privacy-popup-cancel");this.Bb()};
q9.prototype.u=function(){F6("mdx-privacy-popup-confirm");this.Bb()};g.v(r9,g.V);r9.prototype.l=function(a){MSa(this,a.state)};g.v(s9,g.eQ);s9.prototype.C=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.Mn=g.Db(a,this.i,this),g.fQ(this,g.Se(a,this.i)),a=this.I.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Ph(a),this.enable(!0)):this.enable(!1)};
s9.prototype.i=function(a){return a.key};
s9.prototype.Vi=function(a){return"cast-selector-receiver"===a?"Cast...":this.Mn[a].name};
s9.prototype.wf=function(a){g.eQ.prototype.wf.call(this,a);this.I.setOption("remote","currentReceiver",this.Mn[a]);this.yb.Bb()};g.v(t9,g.oN);g.k=t9.prototype;
g.k.create=function(){var a=this.player.S(),b=g.CF(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.S(a.experiments,"mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:g.S(a.experiments,"enable_dial_short_lived_lounge_token"),enableCastLoungeToken:g.S(a.experiments,"enable_cast_short_lived_lounge_token")};ESa(b,a);this.subscriptions.push(g.Ru("yt-remote-before-disconnect",this.mS,this));this.subscriptions.push(g.Ru("yt-remote-connection-change",this.UT,this));this.subscriptions.push(g.Ru("yt-remote-receiver-availability-change",
this.TK,this));this.subscriptions.push(g.Ru("yt-remote-auto-connect",this.ST,this));this.subscriptions.push(g.Ru("yt-remote-receiver-resumed",this.RT,this));this.subscriptions.push(g.Ru("mdx-privacy-popup-confirm",this.gV,this));this.subscriptions.push(g.Ru("mdx-privacy-popup-cancel",this.fV,this));this.subscriptions.push(g.Ru("mdx-manual-pairing-popup-ok",this.rR,this));this.TK()};
g.k.load=function(){this.player.cancelPlayback();g.oN.prototype.load.call(this);this.Sh=new l9(this,this.player,this.Pb);var a=(a=ISa())?a.currentTime:0;var b=i9()?new D8(c9(),void 0):null;0==a&&b&&(a=z8(E8(b)));0!==a&&this.Rb(a);NSa(this,this.md,this.md);this.player.Lk(6)};
g.k.unload=function(){this.player.Z("mdxautoplaycanceled");this.Hm=this.lj;g.kf(this.Sh,this.Pb);this.Pb=this.Sh=null;g.oN.prototype.unload.call(this);this.player.Lk(5);u9(this)};
g.k.va=function(){g.Su(this.subscriptions);g.oN.prototype.va.call(this)};
g.k.Ck=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.Sh.ej.apply(this.Sh,[a].concat(g.la(c)))};
g.k.getAdState=function(){return this.kf};
g.k.oQ=function(){return this.loaded?this.Sh.suggestion:null};
g.k.qk=function(){return this.Pb?E8(this.Pb).qk:!1};
g.k.hasNext=function(){return this.Pb?E8(this.Pb).hasNext:!1};
g.k.Rb=function(a,b){this.HJ=a||0;this.player.Z("progresssync",a,b);this.player.Ma("onVideoProgress",a)};
g.k.getCurrentTime=function(){return this.HJ};
g.k.getProgressState=function(){var a=E8(this.Pb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:g.S(this.player.S().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.hf():!a.isAdPlaying()&&this.player.hf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.l?a.u+x8(a):a.u,isAtLiveHead:1>=(a.l?a.i+x8(a):a.i)-this.getCurrentTime(),loaded:a.L,seekableEnd:a.l?a.i+x8(a):a.i,
seekableStart:0<a.B?a.B+x8(a):a.B}};
g.k.nextVideo=function(){this.Pb&&this.Pb.nextVideo()};
g.k.mz=function(){this.Pb&&this.Pb.mz()};
g.k.mS=function(a){1===a&&(this.fE=this.Pb?E8(this.Pb):null)};
g.k.UT=function(){var a=i9()?new D8(c9(),void 0):null;if(a){var b=this.Hm;this.loaded&&this.unload();this.Pb=a;this.fE=null;b.key!==this.lj.key&&(this.Hm=b,this.load())}else g.jf(this.Pb),this.Pb=null,this.loaded&&(this.unload(),(a=this.fE)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,z8(a)));this.player.Z("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.TK=function(){var a=[this.lj],b=a.concat,c=FSa();r8()&&g.tz("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Mn=b.call(a,c);a=d9()||this.lj;v9(this,a);this.player.Ma("onMdxReceiversChange")};
g.k.ST=function(){var a=d9();v9(this,a)};
g.k.RT=function(){this.Hm=d9()};
g.k.gV=function(){this.Mv=!0;u9(this);k9=!1;e9&&g9(e9,1);e9=null};
g.k.fV=function(){this.Mv=!1;u9(this);v9(this,this.lj);this.Hm=this.lj;k9=!1;e9=null;this.player.playVideo()};
g.k.rR=function(){this.Dy=!0;u9(this);g.sz("yt-remote-manual-pairing-warning-shown",!0,2592E3);k9=!1;e9&&g9(e9,1);e9=null};
g.k.Ze=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Mn;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?t8():v9(this,b)),this.loaded?this.Hm:this.lj;case "quickCast":return 2===this.Mn.length&&"cast-selector-receiver"===this.Mn[1].key?(b&&t8(),!0):!1}};
g.k.ZE=function(){this.Pb.ZE()};
g.k.Gi=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.zN.remote=t9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 09:16:21 Jul 21, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:53:56 Sep 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.209
  PetaboxLoader3.resolve: 139.649 (2)
  load_resource: 456.303 (2)
  exclusion.robots: 0.225
  esindex: 0.018
  CDXLines.iter: 20.282 (3)
  captures_list: 373.936
  PetaboxLoader3.datanode: 179.139 (5)
  LoadShardBlock: 73.362 (3)
  cdx.remote: 0.121
*/