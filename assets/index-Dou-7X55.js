(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="176",od=0,Zl=1,ad=2,jh=1,Kh=2,Jn=3,Dn=0,qt=1,an=2,bi=0,Cs=1,Jl=2,Ql=3,eu=4,cd=5,qi=100,ld=101,ud=102,hd=103,fd=104,dd=200,pd=201,md=202,gd=203,oc=204,ac=205,_d=206,xd=207,vd=208,yd=209,Md=210,Sd=211,Td=212,Ed=213,bd=214,cc=0,lc=1,uc=2,Ds=3,hc=4,fc=5,dc=6,pc=7,$h=0,Ad=1,wd=2,Ai=0,Rd=1,Cd=2,Pd=3,Zh=4,Id=5,Ld=6,Dd=7,tu="attached",Ud="detached",Jh=300,Us=301,Ns=302,mc=303,gc=304,ta=306,hn=1e3,Si=1001,Yo=1002,Yt=1003,Qh=1004,hr=1005,cn=1006,No=1007,si=1008,Vn=1009,ef=1010,tf=1011,vr=1012,ml=1013,wi=1014,ln=1015,Cr=1016,gl=1017,_l=1018,yr=1020,nf=35902,sf=1021,rf=1022,Qt=1023,Mr=1026,Sr=1027,xl=1028,na=1029,of=1030,vl=1031,yl=1033,Fo=33776,Bo=33777,Oo=33778,zo=33779,_c=35840,xc=35841,vc=35842,yc=35843,Mc=36196,Sc=37492,Tc=37496,Ec=37808,bc=37809,Ac=37810,wc=37811,Rc=37812,Cc=37813,Pc=37814,Ic=37815,Lc=37816,Dc=37817,Uc=37818,Nc=37819,Fc=37820,Bc=37821,ko=36492,Oc=36494,zc=36495,af=36283,kc=36284,Vc=36285,Hc=36286,Tr=2300,Er=2301,ha=2302,nu=2400,iu=2401,su=2402,Nd=2500,Fd=0,cf=1,Gc=2,Bd=3200,Od=3201,lf=0,zd=1,yi="",It="srgb",Kt="srgb-linear",jo="linear",nt="srgb",es=7680,ru=519,kd=512,Vd=513,Hd=514,uf=515,Gd=516,Wd=517,Xd=518,qd=519,Wc=35044,ou="300 es",zn=2e3,Ko=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const dr=Math.PI/180,Fs=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Oe(s,e,t){return Math.max(e,Math.min(t,s))}function Ml(s,e){return(s%e+e)%e}function Yd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function jd(s,e,t){return s!==e?(t-s)/(e-s):0}function pr(s,e,t){return(1-t)*s+t*e}function Kd(s,e,t,n){return pr(s,e,1-Math.exp(-t*n))}function $d(s,e=1){return e-Math.abs(Ml(s,e*2)-e)}function Zd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Jd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Qd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ep(s,e){return s+Math.random()*(e-s)}function tp(s){return s*(.5-Math.random())}function np(s){s!==void 0&&(au=s);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(s){return s*dr}function sp(s){return s*Fs}function rp(s){return(s&s-1)===0&&s!==0}function op(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ap(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lp={DEG2RAD:dr,RAD2DEG:Fs,generateUUID:Ln,clamp:Oe,euclideanModulo:Ml,mapLinear:Yd,inverseLerp:jd,lerp:pr,damp:Kd,pingpong:$d,smoothstep:Zd,smootherstep:Jd,randInt:Qd,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:op,floorPowerOfTwo:ap,setQuaternionFromProperEuler:cp,normalize:et,denormalize:Pn};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,i,r,o,a,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],y=i[4],_=i[7],S=i[2],A=i[5],b=i[8];return r[0]=o*x+a*v+c*S,r[3]=o*m+a*y+c*A,r[6]=o*p+a*_+c*b,r[1]=l*x+u*v+h*S,r[4]=l*m+u*y+h*A,r[7]=l*p+u*_+h*b,r[2]=f*x+d*v+g*S,r[5]=f*m+d*y+g*A,r[8]=f*p+d*_+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Ne;function hf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function up(){const s=br("canvas");return s.style.display="block",s}const cu={};function Vo(s){s in cu||(cu[s]=!0,console.warn(s))}function hp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function fp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lu=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){const s={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?jo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Kt]:{primaries:e,whitePoint:n,transfer:jo,toXYZ:lu,fromXYZ:uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:lu,fromXYZ:uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const ke=pp();function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class mp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=br("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gp=0;class Sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(da(i[o].image)):r.push(da(i[o]))}else r=da(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class wt extends Zi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Si,i=Si,r=cn,o=si,a=Qt,c=Vn,l=wt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ln(),this.name="",this.source=new Sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Jh;wt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(d+1)/2,S=(p+1)/2,A=(u+f)/4,b=(h+x)/4,R=(g+m)/4;return y>_&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=b/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=R/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=b/r,i=R/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends Zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Sl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends xp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ff extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),A=Math.atan2(S,p*v);m=Math.sin(m*A)/S,a=Math.sin(a*A)/S}const _=a*v;if(c=c*m+f*_,l=l*m+d*_,u=u*m+g*_,h=h*m+x*_,m===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new I,hu=new Hn;class ct{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Vr.subVectors(this.max,js),ns.subVectors(e.a,js),is.subVectors(e.b,js),ss.subVectors(e.c,js),ui.subVectors(is,ns),hi.subVectors(ss,is),Ii.subVectors(ns,ss);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Ii.z,Ii.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Ii.z,0,-Ii.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Ii.y,Ii.x,0];return!ma(t,ns,is,ss,Vr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,ns,is,ss,Vr))?!1:(Hr.crossVectors(ui,hi),t=[Hr.x,Hr.y,Hr.z],ma(t,ns,is,ss,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,kr=new ct,ns=new I,is=new I,ss=new I,ui=new I,hi=new I,Ii=new I,js=new I,Vr=new I,Hr=new I,Li=new I;function ma(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Li.fromArray(s,r);const a=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),c=e.dot(Li),l=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const yp=new ct,Ks=new I,ga=new I;class jt{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(ga)),this.expandByPoint(Ks.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new I,_a=new I,Gr=new I,fi=new I,xa=new I,Wr=new I,va=new I;class Vs{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_a.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=fi.dot(this.direction),c=-fi.dot(Gr),l=fi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_a).addScaledVector(Gr,f),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,r){xa.subVectors(t,e),Wr.subVectors(n,e),va.crossVectors(xa,Wr);let o=this.direction.dot(va),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const c=a*this.direction.dot(Wr.crossVectors(fi,Wr));if(c<0)return null;const l=a*this.direction.dot(xa.cross(fi));if(l<0||c+l>o)return null;const u=-a*fi.dot(va);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(e,t,n,i,r,o,a,c,l,u,h,f,d,g,x,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,f,d,g,x,m)}set(e,t,n,i,r,o,a,c,l,u,h,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,Sp)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),di.crossVectors(n,nn),di.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),di.crossVectors(n,nn)),di.normalize(),Xr.crossVectors(nn,di),i[0]=di.x,i[4]=Xr.x,i[8]=nn.x,i[1]=di.y,i[5]=Xr.y,i[9]=nn.y,i[2]=di.z,i[6]=Xr.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],S=n[15],A=i[0],b=i[4],R=i[8],T=i[12],M=i[1],C=i[5],L=i[9],D=i[13],B=i[2],H=i[6],G=i[10],K=i[14],W=i[3],ne=i[7],le=i[11],me=i[15];return r[0]=o*A+a*M+c*B+l*W,r[4]=o*b+a*C+c*H+l*ne,r[8]=o*R+a*L+c*G+l*le,r[12]=o*T+a*D+c*K+l*me,r[1]=u*A+h*M+f*B+d*W,r[5]=u*b+h*C+f*H+d*ne,r[9]=u*R+h*L+f*G+d*le,r[13]=u*T+h*D+f*K+d*me,r[2]=g*A+x*M+m*B+p*W,r[6]=g*b+x*C+m*H+p*ne,r[10]=g*R+x*L+m*G+p*le,r[14]=g*T+x*D+m*K+p*me,r[3]=v*A+y*M+_*B+S*W,r[7]=v*b+y*C+_*H+S*ne,r[11]=v*R+y*L+_*G+S*le,r[15]=v*T+y*D+_*K+S*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*u-r*c*u)+m*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*l-x*f*l+x*c*d-a*m*d-h*c*p+a*f*p,y=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,_=u*x*l-g*h*l+g*a*d-o*x*d-u*a*p+o*h*p,S=g*h*c-u*x*c-g*a*f+o*x*f+u*a*m-o*h*m,A=t*v+n*y+i*_+r*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(x*f*r-h*m*r-x*i*d+n*m*d+h*i*p-n*f*p)*b,e[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*b,e[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*d-n*c*d)*b,e[4]=y*b,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*b,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*b,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*d+t*c*d)*b,e[8]=_*b,e[9]=(g*h*r-u*x*r-g*n*d+t*x*d+u*n*p-t*h*p)*b,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*b,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*b,e[12]=S*b,e[13]=(u*x*i-g*h*i+g*n*f-t*x*f-u*n*m+t*h*m)*b,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,v=c*l,y=c*u,_=c*h,S=n.x,A=n.y,b=n.z;return i[0]=(1-(x+p))*S,i[1]=(d+_)*S,i[2]=(g-y)*S,i[3]=0,i[4]=(d-_)*A,i[5]=(1-(f+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+y)*b,i[9]=(m-v)*b,i[10]=(1-(f+x))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=rs.set(i[0],i[1],i[2]).length();const o=rs.set(i[4],i[5],i[6]).length(),a=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const l=1/r,u=1/o,h=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=zn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===zn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*l,d=(n+i)*u;let g,x;if(a===zn)g=(o+r)*h,x=-2*h;else if(a===Ko)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new I,En=new ve,Mp=new I(0,0,0),Sp=new I(1,1,1),di=new I,Xr=new I,nn=new I,fu=new ve,du=new Hn;class yn{constructor(e=0,t=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tp=0;const pu=new I,os=new Hn,jn=new ve,qr=new I,$s=new I,Ep=new I,bp=new Hn,mu=new I(1,0,0),gu=new I(0,1,0),_u=new I(0,0,1),xu={type:"added"},Ap={type:"removed"},as={type:"childadded",child:null},ya={type:"childremoved",child:null};class ht extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new I,t=new yn,n=new Hn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Ne}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt($s,qr,this.up):jn.lookAt(qr,$s,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),os.setFromRotationMatrix(jn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new I(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new I,Kn=new I,Ma=new I,$n=new I,cs=new I,ls=new I,vu=new I,Sa=new I,Ta=new I,Ea=new I,ba=new Ke,Aa=new Ke,wa=new Ke;class Lt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),Kn.subVectors(n,t),Ma.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Kn),c=bn.dot(Ma),l=Kn.dot(Kn),u=Kn.dot(Ma),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ba.setScalar(0),Aa.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,n),wa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ba,r.x),o.addScaledVector(Aa,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Kn.subVectors(e,t),bn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),bn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Lt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;cs.subVectors(i,n),ls.subVectors(r,n),Sa.subVectors(e,n);const c=cs.dot(Sa),l=ls.dot(Sa);if(c<=0&&l<=0)return t.copy(n);Ta.subVectors(e,i);const u=cs.dot(Ta),h=ls.dot(Ta);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(cs,o);Ea.subVectors(e,r);const d=cs.dot(Ea),g=ls.dot(Ea);if(g>=0&&d<=g)return t.copy(r);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ls,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return vu.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(vu,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=Ml(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return ke.toWorkingColorSpace(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ke.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Oe(Nt.r*255,0,255))*65536+Math.round(Oe(Nt.g*255,0,255))*256+Math.round(Oe(Nt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,r=Nt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=It){ke.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Yr);const n=pr(pi.h,Yr.h,t),i=pr(pi.s,Yr.s,t),r=pr(pi.l,Yr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Re;Re.NAMES=df;let wp=0;class kn extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Cs,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oc&&(n.blendSrc=this.blendSrc),this.blendDst!==ac&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class In extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new I,jr=new Le;let Rp=0;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}}class pf extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mf extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cp=0;const gn=new ve,Ca=new ht,us=new I,sn=new ct,Zs=new ct,Tt=new I;class Rt extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?mf:pf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new un(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ct);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(sn.min,Zs.min),sn.expandByPoint(Tt),Tt.addVectors(sn.max,Zs.max),sn.expandByPoint(Tt)):(sn.expandByPoint(Zs.min),sn.expandByPoint(Zs.max))}sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Tt.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(e,l),Tt.add(us)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new I,c[R]=new I;const l=new I,u=new I,h=new I,f=new Le,d=new Le,g=new Le,x=new I,m=new I;function p(R,T,M){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(x),a[T].add(x),a[M].add(x),c[R].add(m),c[T].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,T=v.length;R<T;++R){const M=v[R],C=M.start,L=M.count;for(let D=C,B=C+L;D<B;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new I,_=new I,S=new I,A=new I;function b(R){S.fromBufferAttribute(i,R),A.copy(S);const T=a[R];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(A,T);const C=_.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,C)}for(let R=0,T=v.length;R<T;++R){const M=v[R],C=M.start,L=M.count;for(let D=C,B=C+L;D<B;D+=3)b(e.getX(D+0)),b(e.getX(D+1)),b(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new ve,Di=new Vs,Kr=new jt,Mu=new I,$r=new I,Zr=new I,Jr=new I,Pa=new I,Qr=new I,Su=new I,eo=new I;class ut extends ht{constructor(e=new Rt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Pa.fromBufferAttribute(h,e),o?Qr.addScaledVector(Pa,u):Qr.addScaledVector(Pa.sub(t),u))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(Kr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Kr,Mu)===null||Di.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(yu.copy(r).invert(),Di.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,S=y;_<S;_+=3){const A=a.getX(_),b=a.getX(_+1),R=a.getX(_+2);i=to(this,p,e,n,l,u,h,A,b,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);i=to(this,o,e,n,l,u,h,v,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,S=y;_<S;_+=3){const A=_,b=_+1,R=_+2;i=to(this,p,e,n,l,u,h,A,b,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=m,y=m+1,_=m+2;i=to(this,o,e,n,l,u,h,v,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Pp(s,e,t,n,i,r,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Dn,a),c===null)return null;eo.copy(a),eo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(eo);return l<t.near||l>t.far?null:{distance:l,point:eo.clone(),object:s}}function to(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,$r),s.getVertexPosition(c,Zr),s.getVertexPosition(l,Jr);const u=Pp(s,e,t,n,$r,Zr,Jr,Su);if(u){const h=new I;Lt.getBarycoord(Su,$r,Zr,Jr,h),i&&(u.uv=Lt.getInterpolatedAttribute(i,a,c,l,h,new Le)),r&&(u.uv1=Lt.getInterpolatedAttribute(r,a,c,l,h,new Le)),o&&(u.normal=Lt.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};Lt.getNormal($r,Zr,Jr,f.normal),u.face=f,u.barycoord=h}return u}class Pr extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(h,2));function g(x,m,p,v,y,_,S,A,b,R,T){const M=_/b,C=S/R,L=_/2,D=S/2,B=A/2,H=b+1,G=R+1;let K=0,W=0;const ne=new I;for(let le=0;le<G;le++){const me=le*C-D;for(let De=0;De<H;De++){const $e=De*M-L;ne[x]=$e*v,ne[m]=me*y,ne[p]=B,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=A>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(De/b),h.push(1-le/R),K+=1}}for(let le=0;le<R;le++)for(let me=0;me<b;me++){const De=f+me+H*le,$e=f+me+H*(le+1),Y=f+(me+1)+H*(le+1),ee=f+(me+1)+H*le;c.push(De,$e,ee),c.push($e,Y,ee),W+=6}a.addGroup(d,W,T),d+=W,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=Bs(s[t]);for(const i in n)e[i]=n[i]}return e}function Ip(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const Lp={clone:Bs,merge:Ht};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _f extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new I,Tu=new Le,Eu=new Le;class Wt extends _f{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Tu,Eu),t.subVectors(Eu,Tu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,fs=1;class Np extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(hs,fs,e,t);i.layers=this.layers,this.add(i);const r=new Wt(hs,fs,e,t);r.layers=this.layers,this.add(r);const o=new Wt(hs,fs,e,t);o.layers=this.layers,this.add(o);const a=new Wt(hs,fs,e,t);a.layers=this.layers,this.add(a);const c=new Wt(hs,fs,e,t);c.layers=this.layers,this.add(c);const l=new Wt(hs,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xf extends wt{constructor(e=[],t=Us,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fp extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pr(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:bi});r.uniforms.tEquirect.value=t;const o=new ut(i,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=cn),new Np(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ki extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bp={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class El{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new El(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Op extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new I;class bl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bu=new I,Au=new Ke,wu=new Ke,kp=new I,Ru=new ve,no=new I,La=new jt,Cu=new ve,Da=new Vs;class Vp extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tu,this.bindMatrix=new ve,this.bindMatrixInverse=new ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ct),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),e.ray.intersectsSphere(La)!==!1&&(Cu.copy(i).invert(),Da.copy(e.ray).applyMatrix4(Cu),!(this.boundingBox!==null&&Da.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Da)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Au.fromBufferAttribute(i.attributes.skinIndex,e),wu.fromBufferAttribute(i.attributes.skinWeight,e),bu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=wu.getComponent(r);if(o!==0){const a=Au.getComponent(r);Ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(kp.copy(bu).applyMatrix4(Ru),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vf extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mr extends wt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Yt,u=Yt,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pu=new ve,Hp=new ve;class Al{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Hp;Pu.multiplyMatrices(a,t[r]),Pu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mr(t,e,e,Qt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vf),this.bones.push(o),this.boneInverses.push(new ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Xc extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new ve,Iu=new ve,io=[],Lu=new ct,Gp=new ve,Js=new ut,Qs=new jt;class Wp extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Lu.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Qs.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ds),Iu.multiplyMatrices(n,ds),Js.matrixWorld=Iu,Js.raycast(e,io);for(let o=0,a=io.length;o<a;o++){const c=io[o];c.instanceId=r,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mr(new Float32Array(i*this.count),i,this.count,xl,ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ua=new I,Xp=new I,qp=new Ne;class ti{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ua.subVectors(n,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qp.getNormalMatrix(e),i=this.coplanarPoint(Ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new jt,so=new I;class Ir{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],v=i[13],y=i[14],_=i[15];if(n[0].setComponents(c-r,f-l,m-d,_-p).normalize(),n[1].setComponents(c+r,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+u,m+g,_+v).normalize(),n[3].setComponents(c-o,f-u,m-g,_-v).normalize(),n[4].setComponents(c-a,f-h,m-x,_-y).normalize(),t===zn)n[5].setComponents(c+a,f+h,m+x,_+y).normalize();else if(t===Ko)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(so.x=i.normal.x>0?e.max.x:e.min.x,so.y=i.normal.y>0?e.max.y:e.min.y,so.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Fn=new ve,Bn=new Ir;class wl{constructor(){this.coordinateSystem=zn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Bn.setFromProjectionMatrix(Fn,this.coordinateSystem),Bn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Bn.setFromProjectionMatrix(Fn,this.coordinateSystem),Bn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Bn.setFromProjectionMatrix(Fn,this.coordinateSystem),Bn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Bn.setFromProjectionMatrix(Fn,this.coordinateSystem),Bn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Bn.setFromProjectionMatrix(Fn,this.coordinateSystem),Bn.containsPoint(e))return!0}return!1}clone(){return new wl}}function Na(s,e){return s-e}function Yp(s,e){return s.z-e.z}function jp(s,e){return e.z-s.z}class Kp{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Jt=new ve,$p=new Re(1,1,1),Du=new Ir,Zp=new wl,ro=new ct,Ni=new jt,er=new I,Uu=new I,Jp=new I,Fa=new Kp,Ft=new ut,oo=[];function Qp(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Fi(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class em extends ut{constructor(e,t,n=t*2,i){super(new Rt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new mr(t,e,e,Qt,ln);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new mr(t,e,e,na,wi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new mr(t,e,e,Qt,ln);n.colorSpace=ke.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),h=new mt(u,c,l);t.setAttribute(r,h)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new mt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ct);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Jt),this.getBoundingBoxAt(r,ro).applyMatrix4(Jt),e.union(ro)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Jt),this.getBoundingSphereAt(r,Ni).applyMatrix4(Jt),e.union(Ni)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Na),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Jt.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&($p.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Na),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const h=t.getAttribute(u),f=n.getAttribute(u);Qp(h,f,c);const d=h.itemSize;for(let g=h.count,x=l;g<x;g++){const m=c+g;for(let p=0;p<d;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)r.setX(u+f,c+o.getX(f));for(let f=o.count,d=h;f<d;f++)r.setX(u+f,c);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){const{indexStart:u,vertexStart:h,reservedIndexCount:f}=l,d=r.index,g=d.array,x=e-h;for(let m=u;m<u+f;m++)g[m]=g[m]+x;d.array.copyWithin(t,u,u+f),d.addUpdateRange(t,f),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:u,reservedVertexCount:h}=l,f=r.attributes;for(const d in f){const g=f[d],{array:x,itemSize:m}=g;x.copyWithin(e*m,u*m,(u+h)*m),g.addUpdateRange(e*m,h*m)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new ct,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let u=c;o&&(u=o.getX(u)),r.expandByPoint(er.fromBufferAttribute(a,u))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new jt;this.getBoundingBoxAt(e,ro),ro.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=i.start,u=i.start+i.count;l<u;l++){let h=l;o&&(h=o.getX(h)),er.fromBufferAttribute(a,h),c=Math.max(c,r.center.distanceToSquared(er))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Na);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);Fi(this._multiDrawCounts,i),Fi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Fi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Fi(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Fi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Rt,this._initializeGeometry(r));const o=this.geometry;r.index&&Fi(r.index.array,o.index.array);for(const a in r.attributes)Fi(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Ft.material=this.material,Ft.geometry.index=o.index,Ft.geometry.attributes=o.attributes,Ft.geometry.boundingBox===null&&(Ft.geometry.boundingBox=new ct),Ft.geometry.boundingSphere===null&&(Ft.geometry.boundingSphere=new jt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=i[l];Ft.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Ft.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ft.geometry.boundingBox),this.getBoundingSphereAt(l,Ft.geometry.boundingSphere),Ft.raycast(e,oo);for(let h=0,f=oo.length;h<f;h++){const d=oo[h];d.object=this,d.batchId=a,t.push(d)}oo.length=0}Ft.material=null,Ft.geometry.index=null,Ft.geometry.attributes={},Ft.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data,x=n.isArrayCamera?Zp:Du;f&&!n.isArrayCamera&&(Jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Du.setFromProjectionMatrix(Jt,e.coordinateSystem));let m=0;if(this.sortObjects){Jt.copy(this.matrixWorld).invert(),er.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Jt),Uu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Jt);for(let y=0,_=c.length;y<_;y++)if(c[y].visible&&c[y].active){const S=c[y].geometryIndex;this.getMatrixAt(y,Jt),this.getBoundingSphereAt(S,Ni).applyMatrix4(Jt);let A=!1;if(f&&(A=!x.intersectsSphere(Ni,n)),!A){const b=h[S],R=Jp.subVectors(Ni.center,er).dot(Uu);Fa.push(b.start,b.count,R,y)}}const p=Fa.list,v=this.customSort;v===null?p.sort(r.transparent?jp:Yp):v.call(this,p,n);for(let y=0,_=p.length;y<_;y++){const S=p[y];l[m]=S.start*a,u[m]=S.count,g[m]=S.index,m++}Fa.reset()}else for(let p=0,v=c.length;p<v;p++)if(c[p].visible&&c[p].active){const y=c[p].geometryIndex;let _=!1;if(f&&(this.getMatrixAt(p,Jt),this.getBoundingSphereAt(y,Ni).applyMatrix4(Jt),_=!x.intersectsSphere(Ni,n)),!_){const S=h[y];l[m]=S.start*a,u[m]=S.count,g[m]=p,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,o){this.onBeforeRender(e,null,i,r,o)}}class yf extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $o=new I,Zo=new I,Nu=new ve,tr=new Vs,ao=new jt,Ba=new I,Fu=new I;class Lr extends ht{constructor(e=new Rt,t=new yf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$o.fromBufferAttribute(t,i-1),Zo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$o.distanceTo(Zo);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;Nu.copy(i).invert(),tr.copy(e.ray).applyMatrix4(Nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){const p=u.getX(x),v=u.getX(x+1),y=co(this,e,tr,c,p,v,x);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=co(this,e,tr,c,x,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){const p=co(this,e,tr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=co(this,e,tr,c,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function co(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if($o.fromBufferAttribute(a,i),Zo.fromBufferAttribute(a,r),t.distanceSqToSegment($o,Zo,Ba,Fu)>n)return;Ba.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ba);if(!(l<e.near||l>e.far))return{distance:l,point:Fu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Bu=new I,Ou=new I;class Rl extends Lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bu.fromBufferAttribute(t,i),Ou.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bu.distanceTo(Ou);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cl extends Lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ia extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zu=new ve,qc=new Vs,lo=new jt,uo=new I;class Dr extends ht{constructor(e=new Rt,t=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;zu.copy(i).invert(),qc.copy(e.ray).applyMatrix4(zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=l.getX(g);uo.fromBufferAttribute(h,m),ku(uo,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)uo.fromBufferAttribute(h,g),ku(uo,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ku(s,e,t,n,i,r,o){const a=qc.distanceSqToPoint(s);if(a<t){const c=new I;qc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mf extends wt{constructor(e,t,n=wi,i,r,o,a=Yt,c=Yt,l,u=Mr){if(u!==Mr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ur extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let y=0;y<l;y++){const _=y*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,_=v+l*(p+1),S=v+1+l*(p+1),A=v+1+l*p;d.push(y,_,A),d.push(_,S,A)}this.setIndex(d),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pl extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const A=S/t;h.x=-e*Math.cos(i+A*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+A*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(A+_,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=u[p][v+1],_=u[p][v],S=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&d.push(y,_,A),(p!==n-1||c<Math.PI)&&d.push(_,S,A)}this.setIndex(d),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sa extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends sa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tm extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nm extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ho(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function im(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function sm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Sf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Nr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rm extends Nr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case iu:r=e,a=2*t-n;break;case su:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case iu:o=e,c=2*n-t;break;case su:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+v*o[l+S]+y*o[c+S]+_*o[h+S];return r}}class om extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class am extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new am(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new om(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&im(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ha,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Er;class Hs extends Nn{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Tr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Tf extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Tf.prototype.ValueTypeName="color";class Os extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Os.prototype.ValueTypeName="number";class cm extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Hn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class zs extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new cm(this.times,this.values,this.getValueSize(),e)}}zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Nn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Tr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}ks.prototype.ValueTypeName="vector";class lm{constructor(e="",t=-1,n=[],i=Nd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(hm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=sm(c);c=Vu(c,1,u),l=Vu(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Os(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,x){if(d.length!==0){const m=[],p=[];Sf(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new Os(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(ks,d+".position",f,"pos",i),n(zs,d+".quaternion",f,"rot",i),n(ks,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function um(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Os;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return Tf;case"quaternion":return zs;case"bool":case"boolean":return Hs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function hm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=um(s.type);if(s.times===void 0){const t=[],n=[];Sf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class fm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const dm=new fm;class Ws{constructor(e){this.manager=e!==void 0?e:dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class pm extends Error{constructor(e,t){super(e),this.response=t}}class Ef extends Ws{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Zn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let A=0,b=u.length;A<b;A++){const R=u[A];R.onProgress&&R.onProgress(S)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new pm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ti.add(e,l);const u=Zn[e];delete Zn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Zn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Zn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mm extends Ws{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=br("img");function c(){u(),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class bf extends Ws{constructor(e){super(e)}load(e,t,n,i){const r=new wt,o=new mm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ra extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Oa=new ve,Hu=new I,Gu=new I;class Il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gu),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gm extends Il{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _m extends ra{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wu=new ve,nr=new I,za=new I;class xm extends Il{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),za.copy(n.position),za.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(za),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu)}}class vm extends ra{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ll extends _f{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ym extends Il{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Af extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new ym}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mm extends ra{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Sm extends Ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ti.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(e,c),r.manager.itemStart(e)}}class Tm extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xu(){return performance.now()}const Dl="\\[\\]\\.:\\/",bm=new RegExp("["+Dl+"]","g"),Ul="[^"+Dl+"]",Am="[^"+Dl.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",Ul),Rm=/(WCOD+)?/.source.replace("WCOD",Am),Cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),Pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),Im=new RegExp("^"+wm+Rm+Cm+Pm+"$"),Lm=["material","materials","bones","map"];class Dm{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(e){const t=Im.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Lm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Dm;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qu=new ve;class Um{constructor(e,t,n=0,i=1/0){this.ray=new Vs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qu),this}intersectObject(e,t=!0,n=[]){return Yc(e,this,n,t),n.sort(Yu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Yc(e[i],this,n,t);return n.sort(Yu),n}}function Yu(s,e){return s.distance-e.distance}function Yc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Yc(r[o],e,t,!0)}}const ju=new I,fo=new I;class ci{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ju.subVectors(e,this.start),fo.subVectors(this.end,this.start);const n=fo.dot(fo);let r=fo.dot(ju)/n;return t&&(r=Oe(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Nm extends Zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ku(s,e,t,n){const i=Fm(n);switch(t){case sf:return s*e;case xl:return s*e/i.components*i.byteLength;case na:return s*e/i.components*i.byteLength;case of:return s*e*2/i.components*i.byteLength;case vl:return s*e*2/i.components*i.byteLength;case rf:return s*e*3/i.components*i.byteLength;case Qt:return s*e*4/i.components*i.byteLength;case yl:return s*e*4/i.components*i.byteLength;case Fo:case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oo:case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xc:case yc:return Math.max(s,16)*Math.max(e,8)/4;case _c:case vc:return Math.max(s,8)*Math.max(e,8)/2;case Mc:case Sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ko:case Oc:case zc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case af:case kc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vc:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fm(s){switch(s){case Vn:case ef:return{byteLength:1,components:1};case vr:case tf:case Cr:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case wi:case ml:case ln:return{byteLength:4,components:1};case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bm(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ag=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Om,alphahash_pars_fragment:zm,alphamap_fragment:km,alphamap_pars_fragment:Vm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:jm,beginnormal_vertex:Km,bsdfs:$m,iridescence_fragment:Zm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:tg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:og,common:ag,cube_uv_reflection_fragment:cg,defaultnormal_vertex:lg,displacementmap_pars_vertex:ug,displacementmap_vertex:hg,emissivemap_fragment:fg,emissivemap_pars_fragment:dg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:gg,envmap_common_pars_fragment:_g,envmap_pars_fragment:xg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Pg,envmap_vertex:yg,fog_vertex:Mg,fog_pars_vertex:Sg,fog_fragment:Tg,fog_pars_fragment:Eg,gradientmap_pars_fragment:bg,lightmap_pars_fragment:Ag,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Lg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Ug,lights_physical_fragment:Ng,lights_physical_pars_fragment:Fg,lights_fragment_begin:Bg,lights_fragment_maps:Og,lights_fragment_end:zg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Gg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:$g,morphcolor_vertex:Zg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:e_,normal_fragment_begin:t_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:u_,opaque_fragment:h_,packing:f_,premultiplied_alpha_fragment:d_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:__,roughnessmap_pars_fragment:x_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:T_,skinning_pars_vertex:E_,skinning_vertex:b_,skinnormal_vertex:A_,specularmap_fragment:w_,specularmap_pars_fragment:R_,tonemapping_fragment:C_,tonemapping_pars_fragment:P_,transmission_fragment:I_,transmission_pars_fragment:L_,uv_pars_fragment:D_,uv_pars_vertex:U_,uv_vertex:N_,worldpos_vertex:F_,background_vert:B_,background_frag:O_,backgroundCube_vert:z_,backgroundCube_frag:k_,cube_vert:V_,cube_frag:H_,depth_vert:G_,depth_frag:W_,distanceRGBA_vert:X_,distanceRGBA_frag:q_,equirect_vert:Y_,equirect_frag:j_,linedashed_vert:K_,linedashed_frag:$_,meshbasic_vert:Z_,meshbasic_frag:J_,meshlambert_vert:Q_,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:cx,meshtoon_vert:lx,meshtoon_frag:ux,points_vert:hx,points_frag:fx,shadow_vert:dx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},te={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},On={basic:{uniforms:Ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ht([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ht([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ht([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ht([te.points,te.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ht([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ht([te.common,te.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ht([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ht([te.sprite,te.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ht([te.common,te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ht([te.lights,te.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};On.physical={uniforms:Ht([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const po={r:0,b:0,g:0},Bi=new yn,_x=new ve;function xx(s,e,t,n,i,r,o){const a=new Re(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1;const S=g(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),_=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===ta)?(u===void 0&&(u=new ut(new Pr(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Bs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Bi.copy(_.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(Bi)),u.material.toneMapped=ke.getTransfer(S.colorSpace)!==nt,(h!==S||f!==S.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ut(new Ur(2,2),new ai({name:"BackgroundMaterial",uniforms:Bs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ke.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(po,gf(s)),n.buffers.color.setClear(po.r,po.g,po.b,_,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m,dispose:v}}function vx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,C,L,D,B){let H=!1;const G=h(D,L,C);r!==G&&(r=G,l(r.object)),H=d(M,D,L,B),H&&g(M,D,L,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(M,C,L,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,C,L){const D=L.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let H=B[C.id];H===void 0&&(H={},B[C.id]=H);let G=H[D];return G===void 0&&(G=f(c()),H[D]=G),G}function f(M){const C=[],L=[],D=[];for(let B=0;B<t;B++)C[B]=0,L[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:D,object:M,attributes:{},index:null}}function d(M,C,L,D){const B=r.attributes,H=C.attributes;let G=0;const K=L.getAttributes();for(const W in K)if(K[W].location>=0){const le=B[W];let me=H[W];if(me===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function g(M,C,L,D){const B={},H=C.attributes;let G=0;const K=L.getAttributes();for(const W in K)if(K[W].location>=0){let le=H[W];le===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const me={};me.attribute=le,le&&le.data&&(me.data=le.data),B[W]=me,G++}r.attributes=B,r.attributesNum=G,r.index=D}function x(){const M=r.newAttributes;for(let C=0,L=M.length;C<L;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const L=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;L[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),B[M]!==C&&(s.vertexAttribDivisor(M,C),B[M]=C)}function v(){const M=r.newAttributes,C=r.enabledAttributes;for(let L=0,D=C.length;L<D;L++)C[L]!==M[L]&&(s.disableVertexAttribArray(L),C[L]=0)}function y(M,C,L,D,B,H,G){G===!0?s.vertexAttribIPointer(M,C,L,B,H):s.vertexAttribPointer(M,C,L,D,B,H)}function _(M,C,L,D){x();const B=D.attributes,H=L.getAttributes(),G=C.defaultAttributeValues;for(const K in H){const W=H[K];if(W.location>=0){let ne=B[K];if(ne===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const le=ne.normalized,me=ne.itemSize,De=e.get(ne);if(De===void 0)continue;const $e=De.buffer,Y=De.type,ee=De.bytesPerElement,pe=Y===s.INT||Y===s.UNSIGNED_INT||ne.gpuType===ml;if(ne.isInterleavedBufferAttribute){const ie=ne.data,Me=ie.stride,We=ne.offset;if(ie.isInstancedInterleavedBuffer){for(let Ee=0;Ee<W.locationSize;Ee++)p(W.location+Ee,ie.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)m(W.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let Ee=0;Ee<W.locationSize;Ee++)y(W.location+Ee,me/W.locationSize,Y,le,Me*ee,(We+me/W.locationSize*Ee)*ee,pe)}else{if(ne.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)p(W.location+ie,ne.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<W.locationSize;ie++)m(W.location+ie);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let ie=0;ie<W.locationSize;ie++)y(W.location+ie,me/W.locationSize,Y,le,me*ee,me/W.locationSize*ie*ee,pe)}}else if(G!==void 0){const le=G[K];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(W.location,le);break;case 3:s.vertexAttrib3fv(W.location,le);break;case 4:s.vertexAttrib4fv(W.location,le);break;default:s.vertexAttrib1fv(W.location,le)}}}}v()}function S(){R();for(const M in n){const C=n[M];for(const L in C){const D=C[L];for(const B in D)u(D[B].object),delete D[B];delete C[L]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const L in C){const D=C[L];for(const B in D)u(D[B].object),delete D[B];delete C[L]}delete n[M.id]}function b(M){for(const C in n){const L=n[C];if(L[M.id]===void 0)continue;const D=L[M.id];for(const B in D)u(D[B].object),delete D[B];delete L[M.id]}}function R(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function yx(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Qt&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Vn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ln&&!R)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:A}}function Sx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ti,a=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,y=v*4;let _=p.clippingState||null;c.value=_,_=u(g,f,y,d);for(let S=0;S!==y;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Tx(s){let e=new WeakMap;function t(o,a){return a===mc?o.mapping=Us:a===gc&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===mc||a===gc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fp(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ws=4,$u=[.125,.215,.35,.446,.526,.582],Yi=20,ka=new Ll,Zu=new Re;let Va=null,Ha=0,Ga=0,Wa=!1;const Wi=(1+Math.sqrt(5))/2,ps=1/Wi,Ju=[new I(-Wi,ps,0),new I(Wi,ps,0),new I(-ps,0,Wi),new I(ps,0,Wi),new I(0,Wi,-ps),new I(0,Wi,ps),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ex=new I;class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Ex}=r;Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Ha,Ga),this._renderer.xr.enabled=Wa,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Cr,format:Qt,colorSpace:Kt,depthBuffer:!1},i=eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(r)),this._blurMaterial=Ax(r,e,t)}return i}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,i,r){const c=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Zu),h.toneMapping=Ai,h.autoClear=!1;const g=new In({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),x=new ut(new Pr,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Zu),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):y===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));const _=this._cubeSize;mo(i,y*_,v>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(x,c),h.render(e,c)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Us||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;mo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ju[(i-r-1)%Ju.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let v=0;for(let b=0;b<Yi;++b){const R=b/x,T=Math.exp(-R*R/2);p.push(T),b===0?v+=T:b<m&&(v+=2*T)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const _=this._sizeLods[i],S=3*_*(i>y-ws?i-y+ws:0),A=4*(this._cubeSize-_);mo(t,S,A,3*_,2*_),c.setRenderTarget(t),c.render(h,ka)}}function bx(s){const e=[],t=[],n=[];let i=s;const r=s-ws+1+$u.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ws?c=$u[o-s+ws-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,R=A>2?0:-1,T=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];v.set(T,x*g*A),y.set(f,m*g*A);const M=[A,A,A,A,A,A];_.set(M,p*g*A)}const S=new Rt;S.setAttribute("position",new mt(v,x)),S.setAttribute("uv",new mt(y,m)),S.setAttribute("faceIndex",new mt(_,p)),e.push(S),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eh(s,e,t){const n=new $i(s,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ax(s,e,t){const n=new Float32Array(Yi),i=new I(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function th(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function nh(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===mc||c===gc,u=c===Us||c===Ns;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qu(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Qu(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Vo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cx(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){const S=v[y+0],A=v[y+1],b=v[y+2];f.push(S,A,A,b,b,S)}}else if(g!==void 0){const v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const S=y+0,A=y+1,b=y+2;f.push(S,A,A,b,b,S)}}else return;const m=new(hf(f)?mf:pf)(f,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Px(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ix(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Lx(s,e,t){const n=new WeakMap,i=new Ke;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let S=a.attributes.position.count*_,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*A*4*h),R=new ff(b,S,A,h);R.type=ln,R.needsUpdate=!0;const T=_*4;for(let C=0;C<h;C++){const L=p[C],D=v[C],B=y[C],H=S*A*4*C;for(let G=0;G<L.count;G++){const K=G*T;g===!0&&(i.fromBufferAttribute(L,G),b[H+K+0]=i.x,b[H+K+1]=i.y,b[H+K+2]=i.z,b[H+K+3]=0),x===!0&&(i.fromBufferAttribute(D,G),b[H+K+4]=i.x,b[H+K+5]=i.y,b[H+K+6]=i.z,b[H+K+7]=0),m===!0&&(i.fromBufferAttribute(B,G),b[H+K+8]=i.x,b[H+K+9]=i.y,b[H+K+10]=i.z,b[H+K+11]=B.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new Le(S,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Dx(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Rf=new wt,ih=new Mf(1,1),Cf=new ff,Pf=new vp,If=new xf,sh=[],rh=[],oh=new Float32Array(16),ah=new Float32Array(9),ch=new Float32Array(4);function Xs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=sh[i];if(r===void 0&&(r=new Float32Array(i),sh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function oa(s,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ux(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function Fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function Bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function Ox(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ch.set(n),s.uniformMatrix2fv(this.addr,!1,ch),St(t,n)}}function zx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ah.set(n),s.uniformMatrix3fv(this.addr,!1,ah),St(t,n)}}function kx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;oh.set(n),s.uniformMatrix4fv(this.addr,!1,oh),St(t,n)}}function Vx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function Gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function Wx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function Xx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function Yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function jx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function Kx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ih.compareFunction=uf,r=ih):r=Rf,t.setTexture2D(e||r,i)}function $x(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pf,i)}function Zx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||If,i)}function Jx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cf,i)}function Qx(s){switch(s){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Bx;case 35674:return Ox;case 35675:return zx;case 35676:return kx;case 5124:case 35670:return Vx;case 35667:case 35671:return Hx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function e0(s,e){s.uniform1fv(this.addr,e)}function t0(s,e){const t=Xs(e,this.size,2);s.uniform2fv(this.addr,t)}function n0(s,e){const t=Xs(e,this.size,3);s.uniform3fv(this.addr,t)}function i0(s,e){const t=Xs(e,this.size,4);s.uniform4fv(this.addr,t)}function s0(s,e){const t=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function r0(s,e){const t=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function o0(s,e){const t=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function a0(s,e){s.uniform1iv(this.addr,e)}function c0(s,e){s.uniform2iv(this.addr,e)}function l0(s,e){s.uniform3iv(this.addr,e)}function u0(s,e){s.uniform4iv(this.addr,e)}function h0(s,e){s.uniform1uiv(this.addr,e)}function f0(s,e){s.uniform2uiv(this.addr,e)}function d0(s,e){s.uniform3uiv(this.addr,e)}function p0(s,e){s.uniform4uiv(this.addr,e)}function m0(s,e,t){const n=this.cache,i=e.length,r=oa(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Rf,r[o])}function g0(s,e,t){const n=this.cache,i=e.length,r=oa(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Pf,r[o])}function _0(s,e,t){const n=this.cache,i=e.length,r=oa(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||If,r[o])}function x0(s,e,t){const n=this.cache,i=e.length,r=oa(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Cf,r[o])}function v0(s){switch(s){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return c0;case 35668:case 35672:return l0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return f0;case 36295:return d0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}class y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}}class M0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v0(t.type)}}class S0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function lh(s,e){s.seq.push(e),s.map[e.id]=e}function T0(s,e,t){const n=s.name,i=n.length;for(Xa.lastIndex=0;;){const r=Xa.exec(n),o=Xa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){lh(t,l===void 0?new y0(a,s,e):new M0(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new S0(a),lh(t,h)),t=h}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);T0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function uh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const E0=37297;let b0=0;function A0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const hh=new Ne;function w0(s){ke._getMatrix(hh,ke.workingColorSpace,s);const e=`mat3( ${hh.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(s)){case jo:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+A0(s.getShaderSource(e),o)}else return i}function R0(s,e){const t=w0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function C0(s,e){let t;switch(e){case Rd:t="Linear";break;case Cd:t="Reinhard";break;case Pd:t="Cineon";break;case Zh:t="ACESFilmic";break;case Ld:t="AgX";break;case Dd:t="Neutral";break;case Id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const go=new I;function P0(){ke.getLuminanceCoefficients(go);const s=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function L0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function fr(s){return s!==""}function dh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(s){return s.replace(U0,F0)}const N0=new Map;function F0(s,e){let t=Be[e];if(t===void 0){const n=N0.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}const B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(s){return s.replace(B0,O0)}function O0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function k0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function H0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $h:e="ENVMAP_BLENDING_MULTIPLY";break;case Ad:e="ENVMAP_BLENDING_MIX";break;case wd:e="ENVMAP_BLENDING_ADD";break}return e}function G0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function W0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=z0(t),l=k0(t),u=V0(t),h=H0(t),f=G0(t),d=I0(t),g=L0(r),x=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ai?C0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,R0("linearToOutputTexel",t.outputColorSpace),P0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=jc(o),o=dh(o,t),o=ph(o,t),a=jc(a),a=dh(a,t),a=ph(a,t),o=mh(o),a=mh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,_=v+p+a,S=uh(i,i.VERTEX_SHADER,y),A=uh(i,i.FRAGMENT_SHADER,_);i.attachShader(x,S),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function b(C){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(x).trim(),D=i.getShaderInfoLog(S).trim(),B=i.getShaderInfoLog(A).trim();let H=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,A);else{const K=fh(i,S,"vertex"),W=fh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+K+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||B==="")&&(G=!1);G&&(C.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(S),i.deleteShader(A),R=new Ho(i,x),T=D0(i,x)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,E0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}let X0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Y0(e),t.set(e,n)),n}}class Y0{constructor(e){this.id=X0++,this.code=e,this.usedTimes=0}}function j0(s,e,t,n,i,r,o){const a=new Tl,c=new q0,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,M,C,L,D){const B=L.fog,H=D.geometry,G=T.isMeshStandardMaterial?L.environment:null,K=(T.isMeshStandardMaterial?t:e).get(T.envMap||G),W=K&&K.mapping===ta?K.image.height:null,ne=g[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,me=le!==void 0?le.length:0;let De=0;H.morphAttributes.position!==void 0&&(De=1),H.morphAttributes.normal!==void 0&&(De=2),H.morphAttributes.color!==void 0&&(De=3);let $e,Y,ee,pe;if(ne){const Qe=On[ne];$e=Qe.vertexShader,Y=Qe.fragmentShader}else $e=T.vertexShader,Y=T.fragmentShader,c.update(T),ee=c.getVertexShaderID(T),pe=c.getFragmentShaderID(T);const ie=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),We=D.isInstancedMesh===!0,Ee=D.isBatchedMesh===!0,lt=!!T.map,it=!!T.matcap,Ve=!!K,U=!!T.aoMap,dn=!!T.lightMap,Xe=!!T.bumpMap,He=!!T.normalMap,xe=!!T.displacementMap,rt=!!T.emissiveMap,_e=!!T.metalnessMap,P=!!T.roughnessMap,E=T.anisotropy>0,z=T.clearcoat>0,j=T.dispersion>0,Z=T.iridescence>0,q=T.sheen>0,ge=T.transmission>0,re=E&&!!T.anisotropyMap,Te=z&&!!T.clearcoatMap,be=z&&!!T.clearcoatNormalMap,J=z&&!!T.clearcoatRoughnessMap,he=Z&&!!T.iridescenceMap,Ae=Z&&!!T.iridescenceThicknessMap,Pe=q&&!!T.sheenColorMap,fe=q&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Fe=!!T.specularColorMap,st=!!T.specularIntensityMap,N=ge&&!!T.transmissionMap,oe=ge&&!!T.thicknessMap,X=!!T.gradientMap,$=!!T.alphaMap,ce=T.alphaTest>0,ae=!!T.alphaHash,Ue=!!T.extensions;let ft=Ai;T.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ft=s.toneMapping);const Dt={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:Y,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&D._colorsTexture!==null,instancing:We,instancingColor:We&&D.instanceColor!==null,instancingMorph:We&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Kt,alphaToCoverage:!!T.alphaToCoverage,map:lt,matcap:it,envMap:Ve,envMapMode:Ve&&K.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:dn,bumpMap:Xe,normalMap:He,displacementMap:f&&xe,emissiveMap:rt,normalMapObjectSpace:He&&T.normalMapType===zd,normalMapTangentSpace:He&&T.normalMapType===lf,metalnessMap:_e,roughnessMap:P,anisotropy:E,anisotropyMap:re,clearcoat:z,clearcoatMap:Te,clearcoatNormalMap:be,clearcoatRoughnessMap:J,dispersion:j,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:st,transmission:ge,transmissionMap:N,thicknessMap:oe,gradientMap:X,opaque:T.transparent===!1&&T.blending===Cs&&T.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:ae,combine:T.combine,mapUv:lt&&x(T.map.channel),aoMapUv:U&&x(T.aoMap.channel),lightMapUv:dn&&x(T.lightMap.channel),bumpMapUv:Xe&&x(T.bumpMap.channel),normalMapUv:He&&x(T.normalMap.channel),displacementMapUv:xe&&x(T.displacementMap.channel),emissiveMapUv:rt&&x(T.emissiveMap.channel),metalnessMapUv:_e&&x(T.metalnessMap.channel),roughnessMapUv:P&&x(T.roughnessMap.channel),anisotropyMapUv:re&&x(T.anisotropyMap.channel),clearcoatMapUv:Te&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(T.sheenRoughnessMap.channel),specularMapUv:Ge&&x(T.specularMap.channel),specularColorMapUv:Fe&&x(T.specularColorMap.channel),specularIntensityMapUv:st&&x(T.specularIntensityMap.channel),transmissionMapUv:N&&x(T.transmissionMap.channel),thicknessMapUv:oe&&x(T.thicknessMap.channel),alphaMapUv:$&&x(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(He||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(lt||$),fog:!!B,useFog:T.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Me,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:lt&&T.map.isVideoTexture===!0&&ke.getTransfer(T.map.colorSpace)===nt,decodeVideoTextureEmissive:rt&&T.emissiveMap.isVideoTexture===!0&&ke.getTransfer(T.emissiveMap.colorSpace)===nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===an,flipSided:T.side===qt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)M.push(C),M.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(v(M,T),y(M,T),M.push(s.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function v(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){const M=g[T.type];let C;if(M){const L=On[M];C=Lp.clone(L.uniforms)}else C=T.uniforms;return C}function S(T,M){let C;for(let L=0,D=u.length;L<D;L++){const B=u[L];if(B.cacheKey===M){C=B,++C.usedTimes;break}}return C===void 0&&(C=new W0(s,M,T,r),u.push(C)),C}function A(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function b(T){c.remove(T)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:R}}function K0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function $0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _h(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||$0),n.length>1&&n.sort(f||_h),i.length>1&&i.sort(f||_h)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Z0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new xh,s.set(n,[o])):i>=r.length?(o=new xh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function J0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Q0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ev=0;function tv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nv(s){const e=new J0,t=Q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new ve,o=new ve;function a(l){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,S=0,A=0,b=0;l.sort(tv);for(let T=0,M=l.length;T<M;T++){const C=l[T],L=C.color,D=C.intensity,B=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=L.r*D,h+=L.g*D,f+=L.b*D;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],D);b++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=C.shadow.matrix,v++}n.directional[d]=G,d++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(L).multiplyScalar(D),G.distance=B,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;const K=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,K.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=K.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=H,_++}x++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(L).multiplyScalar(D),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const K=C.shadow,W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(D),G.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==S||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=S,R.numLightProbes=b,n.version=ev++)}function c(l,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function vh(s){const e=new nv(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function iv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new vh(s),e.set(i,[a])):r>=o.length?(a=new vh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ov(s,e,t){let n=new Ir;const i=new Le,r=new Le,o=new Ke,a=new tm({depthPacking:Od}),c=new nm,l={},u=t.maxTextureSize,h={[Dn]:qt,[qt]:Dn,[an]:an},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(A,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),L=s.state;L.setBlending(bi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=p!==Jn&&this.type===Jn,B=p===Jn&&this.type!==Jn;for(let H=0,G=A.length;H<G;H++){const K=A[H],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ne=W.getFrameExtents();if(i.multiply(ne),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ne.x),i.x=r.x*ne.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ne.y),i.y=r.y*ne.y,W.mapSize.y=r.y)),W.map===null||D===!0||B===!0){const me=this.type!==Jn?{minFilter:Yt,magFilter:Yt}:{};W.map!==null&&W.map.dispose(),W.map=new $i(i.x,i.y,me),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const le=W.getViewportCount();for(let me=0;me<le;me++){const De=W.getViewport(me);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),L.viewport(o),W.updateMatrices(K,me),n=W.getFrustum(),_(b,R,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Jn&&v(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,M,C)};function v(A,b){const R=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $i(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,R,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,R,d,x,null)}function y(A,b,R,T){let M=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const L=M.uuid,D=b.uuid;let B=l[L];B===void 0&&(B={},l[L]=B);let H=B[D];H===void 0&&(H=M.clone(),B[D]=H,b.addEventListener("dispose",S)),M=H}if(M.visible=b.visible,M.wireframe=b.wireframe,T===Jn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=s.properties.get(M);L.light=R}return M}function _(A,b,R,T,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const D=e.update(A),B=A.material;if(Array.isArray(B)){const H=D.groups;for(let G=0,K=H.length;G<K;G++){const W=H[G],ne=B[W.materialIndex];if(ne&&ne.visible){const le=y(A,ne,T,M);A.onBeforeShadow(s,A,b,R,D,le,W),s.renderBufferDirect(R,null,D,le,A,W),A.onAfterShadow(s,A,b,R,D,le,W)}}}else if(B.visible){const H=y(A,B,T,M);A.onBeforeShadow(s,A,b,R,D,H,null),s.renderBufferDirect(R,null,D,H,A,null),A.onAfterShadow(s,A,b,R,D,H,null)}}const L=A.children;for(let D=0,B=L.length;D<B;D++)_(L[D],b,R,T,M)}function S(A){A.target.removeEventListener("dispose",S);for(const R in l){const T=l[R],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const av={[cc]:lc,[uc]:dc,[hc]:pc,[Ds]:fc,[lc]:cc,[dc]:uc,[pc]:hc,[fc]:Ds};function cv(s,e){function t(){let N=!1;const oe=new Ke;let X=null;const $=new Ke(0,0,0,0);return{setMask:function(ce){X!==ce&&!N&&(s.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){N=ce},setClear:function(ce,ae,Ue,ft,Dt){Dt===!0&&(ce*=ft,ae*=ft,Ue*=ft),oe.set(ce,ae,Ue,ft),$.equals(oe)===!1&&(s.clearColor(ce,ae,Ue,ft),$.copy(oe))},reset:function(){N=!1,X=null,$.set(-1,0,0,0)}}}function n(){let N=!1,oe=!1,X=null,$=null,ce=null;return{setReversed:function(ae){if(oe!==ae){const Ue=e.get("EXT_clip_control");ae?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),oe=ae;const ft=ce;ce=null,this.setClear(ft)}},getReversed:function(){return oe},setTest:function(ae){ae?ie(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ae){X!==ae&&!N&&(s.depthMask(ae),X=ae)},setFunc:function(ae){if(oe&&(ae=av[ae]),$!==ae){switch(ae){case cc:s.depthFunc(s.NEVER);break;case lc:s.depthFunc(s.ALWAYS);break;case uc:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case hc:s.depthFunc(s.EQUAL);break;case fc:s.depthFunc(s.GEQUAL);break;case dc:s.depthFunc(s.GREATER);break;case pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ae}},setLocked:function(ae){N=ae},setClear:function(ae){ce!==ae&&(oe&&(ae=1-ae),s.clearDepth(ae),ce=ae)},reset:function(){N=!1,X=null,$=null,ce=null,oe=!1}}}function i(){let N=!1,oe=null,X=null,$=null,ce=null,ae=null,Ue=null,ft=null,Dt=null;return{setTest:function(Qe){N||(Qe?ie(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!N&&(s.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,Mn,Xn){(X!==Qe||$!==Mn||ce!==Xn)&&(s.stencilFunc(Qe,Mn,Xn),X=Qe,$=Mn,ce=Xn)},setOp:function(Qe,Mn,Xn){(ae!==Qe||Ue!==Mn||ft!==Xn)&&(s.stencilOp(Qe,Mn,Xn),ae=Qe,Ue=Mn,ft=Xn)},setLocked:function(Qe){N=Qe},setClear:function(Qe){Dt!==Qe&&(s.clearStencil(Qe),Dt=Qe)},reset:function(){N=!1,oe=null,X=null,$=null,ce=null,ae=null,Ue=null,ft=null,Dt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,S=null,A=null,b=new Re(0,0,0),R=0,T=!1,M=null,C=null,L=null,D=null,B=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=K>=2);let ne=null,le={};const me=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),$e=new Ke().fromArray(me),Y=new Ke().fromArray(De);function ee(N,oe,X,$){const ce=new Uint8Array(4),ae=s.createTexture();s.bindTexture(N,ae),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<X;Ue++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(oe+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return ae}const pe={};pe[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(s.DEPTH_TEST),o.setFunc(Ds),Xe(!1),He(Zl),ie(s.CULL_FACE),U(bi);function ie(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function Me(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function We(N,oe){return h[N]!==oe?(s.bindFramebuffer(N,oe),h[N]=oe,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=oe),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ee(N,oe){let X=d,$=!1;if(N){X=f.get(oe),X===void 0&&(X=[],f.set(oe,X));const ce=N.textures;if(X.length!==ce.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Ue=ce.length;ae<Ue;ae++)X[ae]=s.COLOR_ATTACHMENT0+ae;X.length=ce.length,$=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,$=!0);$&&s.drawBuffers(X)}function lt(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const it={[qi]:s.FUNC_ADD,[ld]:s.FUNC_SUBTRACT,[ud]:s.FUNC_REVERSE_SUBTRACT};it[hd]=s.MIN,it[fd]=s.MAX;const Ve={[dd]:s.ZERO,[pd]:s.ONE,[md]:s.SRC_COLOR,[oc]:s.SRC_ALPHA,[Md]:s.SRC_ALPHA_SATURATE,[vd]:s.DST_COLOR,[_d]:s.DST_ALPHA,[gd]:s.ONE_MINUS_SRC_COLOR,[ac]:s.ONE_MINUS_SRC_ALPHA,[yd]:s.ONE_MINUS_DST_COLOR,[xd]:s.ONE_MINUS_DST_ALPHA,[Sd]:s.CONSTANT_COLOR,[Td]:s.ONE_MINUS_CONSTANT_COLOR,[Ed]:s.CONSTANT_ALPHA,[bd]:s.ONE_MINUS_CONSTANT_ALPHA};function U(N,oe,X,$,ce,ae,Ue,ft,Dt,Qe){if(N===bi){x===!0&&(Me(s.BLEND),x=!1);return}if(x===!1&&(ie(s.BLEND),x=!0),N!==cd){if(N!==m||Qe!==T){if((p!==qi||_!==qi)&&(s.blendEquation(s.FUNC_ADD),p=qi,_=qi),Qe)switch(N){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jl:s.blendFunc(s.ONE,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,y=null,S=null,A=null,b.set(0,0,0),R=0,m=N,T=Qe}return}ce=ce||oe,ae=ae||X,Ue=Ue||$,(oe!==p||ce!==_)&&(s.blendEquationSeparate(it[oe],it[ce]),p=oe,_=ce),(X!==v||$!==y||ae!==S||Ue!==A)&&(s.blendFuncSeparate(Ve[X],Ve[$],Ve[ae],Ve[Ue]),v=X,y=$,S=ae,A=Ue),(ft.equals(b)===!1||Dt!==R)&&(s.blendColor(ft.r,ft.g,ft.b,Dt),b.copy(ft),R=Dt),m=N,T=!1}function dn(N,oe){N.side===an?Me(s.CULL_FACE):ie(s.CULL_FACE);let X=N.side===qt;oe&&(X=!X),Xe(X),N.blending===Cs&&N.transparent===!1?U(bi):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const $=N.stencilWrite;a.setTest($),$&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function He(N){N!==od?(ie(s.CULL_FACE),N!==C&&(N===Zl?s.cullFace(s.BACK):N===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),C=N}function xe(N){N!==L&&(G&&s.lineWidth(N),L=N)}function rt(N,oe,X){N?(ie(s.POLYGON_OFFSET_FILL),(D!==oe||B!==X)&&(s.polygonOffset(oe,X),D=oe,B=X)):Me(s.POLYGON_OFFSET_FILL)}function _e(N){N?ie(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function P(N){N===void 0&&(N=s.TEXTURE0+H-1),ne!==N&&(s.activeTexture(N),ne=N)}function E(N,oe,X){X===void 0&&(ne===null?X=s.TEXTURE0+H-1:X=ne);let $=le[X];$===void 0&&($={type:void 0,texture:void 0},le[X]=$),($.type!==N||$.texture!==oe)&&(ne!==X&&(s.activeTexture(X),ne=X),s.bindTexture(N,oe||pe[N]),$.type=N,$.texture=oe)}function z(){const N=le[ne];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(N){$e.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),$e.copy(N))}function fe(N){Y.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function Ge(N,oe){let X=l.get(oe);X===void 0&&(X=new WeakMap,l.set(oe,X));let $=X.get(N);$===void 0&&($=s.getUniformBlockIndex(oe,N.name),X.set(N,$))}function Fe(N,oe){const $=l.get(oe).get(N);c.get(oe)!==$&&(s.uniformBlockBinding(oe,$,N.__bindingPointIndex),c.set(oe,$))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ne=null,le={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,S=null,A=null,b=new Re(0,0,0),R=0,T=!1,M=null,C=null,L=null,D=null,B=null,$e.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Me,bindFramebuffer:We,drawBuffers:Ee,useProgram:lt,setBlending:U,setMaterial:dn,setFlipSided:Xe,setCullFace:He,setLineWidth:xe,setPolygonOffset:rt,setScissorTest:_e,activeTexture:P,bindTexture:E,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:he,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:be,texStorage3D:J,texSubImage2D:q,texSubImage3D:ge,compressedTexSubImage2D:re,compressedTexSubImage3D:Te,scissor:Pe,viewport:fe,reset:st}}function lv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return d?new OffscreenCanvas(P,E):br("canvas")}function x(P,E,z){let j=1;const Z=_e(P);if((Z.width>z||Z.height>z)&&(j=z/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(j*Z.width),ge=Math.floor(j*Z.height);h===void 0&&(h=g(q,ge));const re=E?g(q,ge):h;return re.width=q,re.height=ge,re.getContext("2d").drawImage(P,0,0,q,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ge+")."),re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,E,z,j,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=E;if(E===s.RED&&(z===s.FLOAT&&(q=s.R32F),z===s.HALF_FLOAT&&(q=s.R16F),z===s.UNSIGNED_BYTE&&(q=s.R8)),E===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.R8UI),z===s.UNSIGNED_SHORT&&(q=s.R16UI),z===s.UNSIGNED_INT&&(q=s.R32UI),z===s.BYTE&&(q=s.R8I),z===s.SHORT&&(q=s.R16I),z===s.INT&&(q=s.R32I)),E===s.RG&&(z===s.FLOAT&&(q=s.RG32F),z===s.HALF_FLOAT&&(q=s.RG16F),z===s.UNSIGNED_BYTE&&(q=s.RG8)),E===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RG8UI),z===s.UNSIGNED_SHORT&&(q=s.RG16UI),z===s.UNSIGNED_INT&&(q=s.RG32UI),z===s.BYTE&&(q=s.RG8I),z===s.SHORT&&(q=s.RG16I),z===s.INT&&(q=s.RG32I)),E===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGB8UI),z===s.UNSIGNED_SHORT&&(q=s.RGB16UI),z===s.UNSIGNED_INT&&(q=s.RGB32UI),z===s.BYTE&&(q=s.RGB8I),z===s.SHORT&&(q=s.RGB16I),z===s.INT&&(q=s.RGB32I)),E===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),z===s.UNSIGNED_INT&&(q=s.RGBA32UI),z===s.BYTE&&(q=s.RGBA8I),z===s.SHORT&&(q=s.RGBA16I),z===s.INT&&(q=s.RGBA32I)),E===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),E===s.RGBA){const ge=Z?jo:ke.getTransfer(j);z===s.FLOAT&&(q=s.RGBA32F),z===s.HALF_FLOAT&&(q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(q=ge===nt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(P,E){let z;return P?E===null||E===wi||E===yr?z=s.DEPTH24_STENCIL8:E===ln?z=s.DEPTH32F_STENCIL8:E===vr&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wi||E===yr?z=s.DEPTH_COMPONENT24:E===ln?z=s.DEPTH_COMPONENT32F:E===vr&&(z=s.DEPTH_COMPONENT16),z}function S(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){const E=P.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&u.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),M(E)}function R(P){const E=n.get(P);if(E.__webglInit===void 0)return;const z=P.source,j=f.get(z);if(j){const Z=j[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(P),Object.keys(j).length===0&&f.delete(z)}n.remove(P)}function T(P){const E=n.get(P);s.deleteTexture(E.__webglTexture);const z=P.source,j=f.get(z);delete j[E.__cacheKey],o.memory.textures--}function M(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let Z=0;Z<E.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)s.deleteFramebuffer(E.__webglFramebuffer[j]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=P.textures;for(let j=0,Z=z.length;j<Z;j++){const q=n.get(z[j]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(P)}let C=0;function L(){C=0}function D(){const P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function B(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function H(P,E){const z=n.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,P,E);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+E)}function G(P,E){const z=n.get(P);if(P.version>0&&z.__version!==P.version){Y(z,P,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+E)}function K(P,E){const z=n.get(P);if(P.version>0&&z.__version!==P.version){Y(z,P,E);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+E)}function W(P,E){const z=n.get(P);if(P.version>0&&z.__version!==P.version){ee(z,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+E)}const ne={[hn]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[Yo]:s.MIRRORED_REPEAT},le={[Yt]:s.NEAREST,[Qh]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[No]:s.LINEAR_MIPMAP_NEAREST,[si]:s.LINEAR_MIPMAP_LINEAR},me={[kd]:s.NEVER,[qd]:s.ALWAYS,[Vd]:s.LESS,[uf]:s.LEQUAL,[Hd]:s.EQUAL,[Xd]:s.GEQUAL,[Gd]:s.GREATER,[Wd]:s.NOTEQUAL};function De(P,E){if(E.type===ln&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===No||E.magFilter===hr||E.magFilter===si||E.minFilter===cn||E.minFilter===No||E.minFilter===hr||E.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ne[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ne[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ne[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,le[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,le[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yt||E.minFilter!==hr&&E.minFilter!==si||E.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function $e(P,E){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const j=E.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const q=B(E);if(q!==P.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[q].usedTimes++;const ge=Z[P.__cacheKey];ge!==void 0&&(Z[P.__cacheKey].usedTimes--,ge.usedTimes===0&&T(E)),P.__cacheKey=q,P.__webglTexture=Z[q].texture}return z}function Y(P,E,z){let j=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=s.TEXTURE_3D);const Z=$e(P,E),q=E.source;t.bindTexture(j,P.__webglTexture,s.TEXTURE0+z);const ge=n.get(q);if(q.version!==ge.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const re=ke.getPrimaries(ke.workingColorSpace),Te=E.colorSpace===yi?null:ke.getPrimaries(E.colorSpace),be=E.colorSpace===yi||re===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let J=x(E.image,!1,i.maxTextureSize);J=rt(E,J);const he=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type);let Pe=y(E.internalFormat,he,Ae,E.colorSpace,E.isVideoTexture);De(j,E);let fe;const Ge=E.mipmaps,Fe=E.isVideoTexture!==!0,st=ge.__version===void 0||Z===!0,N=q.dataReady,oe=S(E,J);if(E.isDepthTexture)Pe=_(E.format===Sr,E.type),st&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Pe,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Pe,J.width,J.height,0,he,Ae,null));else if(E.isDataTexture)if(Ge.length>0){Fe&&st&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,Ge[0].width,Ge[0].height);for(let X=0,$=Ge.length;X<$;X++)fe=Ge[X],Fe?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,fe.width,fe.height,he,Ae,fe.data):t.texImage2D(s.TEXTURE_2D,X,Pe,fe.width,fe.height,0,he,Ae,fe.data);E.generateMipmaps=!1}else Fe?(st&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,J.width,J.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,he,Ae,J.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,J.width,J.height,0,he,Ae,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Pe,Ge[0].width,Ge[0].height,J.depth);for(let X=0,$=Ge.length;X<$;X++)if(fe=Ge[X],E.format!==Qt)if(he!==null)if(Fe){if(N)if(E.layerUpdates.size>0){const ce=Ku(fe.width,fe.height,E.format,E.type);for(const ae of E.layerUpdates){const Ue=fe.data.subarray(ae*ce/fe.data.BYTES_PER_ELEMENT,(ae+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,ae,fe.width,fe.height,1,he,Ue)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,J.depth,he,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Pe,fe.width,fe.height,J.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,J.depth,he,Ae,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Pe,fe.width,fe.height,J.depth,0,he,Ae,fe.data)}else{Fe&&st&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,Ge[0].width,Ge[0].height);for(let X=0,$=Ge.length;X<$;X++)fe=Ge[X],E.format!==Qt?he!==null?Fe?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,fe.width,fe.height,he,Ae,fe.data):t.texImage2D(s.TEXTURE_2D,X,Pe,fe.width,fe.height,0,he,Ae,fe.data)}else if(E.isDataArrayTexture)if(Fe){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Pe,J.width,J.height,J.depth),N)if(E.layerUpdates.size>0){const X=Ku(J.width,J.height,E.format,E.type);for(const $ of E.layerUpdates){const ce=J.data.subarray($*X/J.data.BYTES_PER_ELEMENT,($+1)*X/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,he,Ae,ce)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,Ae,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,J.width,J.height,J.depth,0,he,Ae,J.data);else if(E.isData3DTexture)Fe?(st&&t.texStorage3D(s.TEXTURE_3D,oe,Pe,J.width,J.height,J.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,Ae,J.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,J.width,J.height,J.depth,0,he,Ae,J.data);else if(E.isFramebufferTexture){if(st)if(Fe)t.texStorage2D(s.TEXTURE_2D,oe,Pe,J.width,J.height);else{let X=J.width,$=J.height;for(let ce=0;ce<oe;ce++)t.texImage2D(s.TEXTURE_2D,ce,Pe,X,$,0,he,Ae,null),X>>=1,$>>=1}}else if(Ge.length>0){if(Fe&&st){const X=_e(Ge[0]);t.texStorage2D(s.TEXTURE_2D,oe,Pe,X.width,X.height)}for(let X=0,$=Ge.length;X<$;X++)fe=Ge[X],Fe?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,he,Ae,fe):t.texImage2D(s.TEXTURE_2D,X,Pe,he,Ae,fe);E.generateMipmaps=!1}else if(Fe){if(st){const X=_e(J);t.texStorage2D(s.TEXTURE_2D,oe,Pe,X.width,X.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Ae,J)}else t.texImage2D(s.TEXTURE_2D,0,Pe,he,Ae,J);m(E)&&p(j),ge.__version=q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ee(P,E,z){if(E.image.length!==6)return;const j=$e(P,E),Z=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);const q=n.get(Z);if(Z.version!==q.__version||j===!0){t.activeTexture(s.TEXTURE0+z);const ge=ke.getPrimaries(ke.workingColorSpace),re=E.colorSpace===yi?null:ke.getPrimaries(E.colorSpace),Te=E.colorSpace===yi||ge===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const be=E.isCompressedTexture||E.image[0].isCompressedTexture,J=E.image[0]&&E.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!be&&!J?he[$]=x(E.image[$],!0,i.maxCubemapSize):he[$]=J?E.image[$].image:E.image[$],he[$]=rt(E,he[$]);const Ae=he[0],Pe=r.convert(E.format,E.colorSpace),fe=r.convert(E.type),Ge=y(E.internalFormat,Pe,fe,E.colorSpace),Fe=E.isVideoTexture!==!0,st=q.__version===void 0||j===!0,N=Z.dataReady;let oe=S(E,Ae);De(s.TEXTURE_CUBE_MAP,E);let X;if(be){Fe&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ge,Ae.width,Ae.height);for(let $=0;$<6;$++){X=he[$].mipmaps;for(let ce=0;ce<X.length;ce++){const ae=X[ce];E.format!==Qt?Pe!==null?Fe?N&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,ae.width,ae.height,Pe,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ge,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,ae.width,ae.height,Pe,fe,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ge,ae.width,ae.height,0,Pe,fe,ae.data)}}}else{if(X=E.mipmaps,Fe&&st){X.length>0&&oe++;const $=_e(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(J){Fe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Pe,fe,he[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,he[$].width,he[$].height,0,Pe,fe,he[$].data);for(let ce=0;ce<X.length;ce++){const Ue=X[ce].image[$].image;Fe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Ue.width,Ue.height,Pe,fe,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ge,Ue.width,Ue.height,0,Pe,fe,Ue.data)}}else{Fe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pe,fe,he[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Pe,fe,he[$]);for(let ce=0;ce<X.length;ce++){const ae=X[ce];Fe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Pe,fe,ae.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ge,Pe,fe,ae.image[$])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),q.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function pe(P,E,z,j,Z,q){const ge=r.convert(z.format,z.colorSpace),re=r.convert(z.type),Te=y(z.internalFormat,ge,re,z.colorSpace),be=n.get(E),J=n.get(z);if(J.__renderTarget=E,!be.__hasExternalTextures){const he=Math.max(1,E.width>>q),Ae=Math.max(1,E.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,Te,he,Ae,E.depth,0,ge,re,null):t.texImage2D(Z,q,Te,he,Ae,0,ge,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),He(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,J.__webglTexture,0,Xe(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,J.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(P,E,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const j=E.depthTexture,Z=j&&j.isDepthTexture?j.type:null,q=_(E.stencilBuffer,Z),ge=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=Xe(E);He(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,q,E.width,E.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,q,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,q,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,P)}else{const j=E.textures;for(let Z=0;Z<j.length;Z++){const q=j[Z],ge=r.convert(q.format,q.colorSpace),re=r.convert(q.type),Te=y(q.internalFormat,ge,re,q.colorSpace),be=Xe(E);z&&He(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Te,E.width,E.height):He(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,Te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Te,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const Z=j.__webglTexture,q=Xe(E);if(E.depthTexture.format===Mr)He(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Sr)He(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function We(P){const E=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=j}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=P.texture.mipmaps;j&&j.length>0?Me(E.__webglFramebuffer[0],P):Me(E.__webglFramebuffer,P)}else if(z){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=s.createRenderbuffer(),ie(E.__webglDepthbuffer[j],P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ie(E.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(P,E,z){const j=n.get(P);E!==void 0&&pe(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&We(P)}function lt(P){const E=P.texture,z=n.get(P),j=n.get(E);P.addEventListener("dispose",b);const Z=P.textures,q=P.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=E.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let Te=0;Te<E.mipmaps.length;Te++)z.__webglFramebuffer[re][Te]=s.createFramebuffer()}else z.__webglFramebuffer[re]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)z.__webglFramebuffer[re]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ge)for(let re=0,Te=Z.length;re<Te;re++){const be=n.get(Z[re]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&He(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const Te=Z[re];z.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[re]);const be=r.convert(Te.format,Te.colorSpace),J=r.convert(Te.type),he=y(Te.internalFormat,be,J,Te.colorSpace,P.isXRRenderTarget===!0),Ae=Xe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,he,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,z.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),De(s.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)pe(z.__webglFramebuffer[re][Te],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te);else pe(z.__webglFramebuffer[re],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,Te=Z.length;re<Te;re++){const be=Z[re],J=n.get(be);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),De(s.TEXTURE_2D,be),pe(z.__webglFramebuffer,P,be,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),m(be)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),De(re,E),E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)pe(z.__webglFramebuffer[Te],P,E,s.COLOR_ATTACHMENT0,re,Te);else pe(z.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,re,0);m(E)&&p(re),t.unbindTexture()}P.depthBuffer&&We(P)}function it(P){const E=P.textures;for(let z=0,j=E.length;z<j;z++){const Z=E[z];if(m(Z)){const q=v(P),ge=n.get(Z).__webglTexture;t.bindTexture(q,ge),p(q),t.unbindTexture()}}}const Ve=[],U=[];function dn(P){if(P.samples>0){if(He(P)===!1){const E=P.textures,z=P.width,j=P.height;let Z=s.COLOR_BUFFER_BIT;const q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(P),re=E.length>1;if(re)for(let be=0;be<E.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Te=P.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let be=0;be<E.length;be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[be]);const J=n.get(E[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,z,j,0,0,z,j,Z,s.NEAREST),c===!0&&(Ve.length=0,U.length=0,Ve.push(s.COLOR_ATTACHMENT0+be),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ve.push(q),U.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let be=0;be<E.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ge.__webglColorRenderbuffer[be]);const J=n.get(E[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,J,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Xe(P){return Math.min(i.maxSamples,P.samples)}function He(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function rt(P,E){const z=P.colorSpace,j=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Kt&&z!==yi&&(ke.getTransfer(z)===nt?(j!==Qt||Z!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function _e(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Ee,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=He}function uv(s,e){function t(n,i=yi){let r;const o=ke.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===gl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return s.BYTE;if(n===tf)return s.SHORT;if(n===vr)return s.UNSIGNED_SHORT;if(n===ml)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Cr)return s.HALF_FLOAT;if(n===sf)return s.ALPHA;if(n===rf)return s.RGB;if(n===Qt)return s.RGBA;if(n===Mr)return s.DEPTH_COMPONENT;if(n===Sr)return s.DEPTH_STENCIL;if(n===xl)return s.RED;if(n===na)return s.RED_INTEGER;if(n===of)return s.RG;if(n===vl)return s.RG_INTEGER;if(n===yl)return s.RGBA_INTEGER;if(n===Fo||n===Bo||n===Oo||n===zo)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===xc||n===vc||n===yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===Sc||n===Tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mc||n===Sc)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ec||n===bc||n===Ac||n===wc||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ec)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Oc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===af||n===kc||n===Vc||n===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new wt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:hv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends Zi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const x=new dv,m=t.getContextAttributes();let p=null,v=null;const y=[],_=[],S=new Le;let A=null;const b=new Wt;b.viewport=new Ke;const R=new Wt;R.viewport=new Ke;const T=[b,R],M=new Tm;let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=y[Y];return ee===void 0&&(ee=new Ia,y[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=y[Y];return ee===void 0&&(ee=new Ia,y[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=y[Y];return ee===void 0&&(ee=new Ia,y[Y]=ee),ee.getHandSpace()};function D(Y){const ee=_.indexOf(Y.inputSource);if(ee===-1)return;const pe=y[ee];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||o),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",H);for(let Y=0;Y<y.length;Y++){const ee=_[Y];ee!==null&&(_[Y]=null,y[Y].disconnect(ee))}C=null,L=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,v=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",B),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(S),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ie=null,Me=null;m.depth&&(Me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?Sr:Mr,ie=m.stencil?yr:wi);const We={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(We),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new $i(f.textureWidth,f.textureHeight,{format:Qt,type:Vn,depthTexture:new Mf(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new $i(d.framebufferWidth,d.framebufferHeight,{format:Qt,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(Y){for(let ee=0;ee<Y.removed.length;ee++){const pe=Y.removed[ee],ie=_.indexOf(pe);ie>=0&&(_[ie]=null,y[ie].disconnect(pe))}for(let ee=0;ee<Y.added.length;ee++){const pe=Y.added[ee];let ie=_.indexOf(pe);if(ie===-1){for(let We=0;We<y.length;We++)if(We>=_.length){_.push(pe),ie=We;break}else if(_[We]===null){_[We]=pe,ie=We;break}if(ie===-1)break}const Me=y[ie];Me&&Me.connect(pe)}}const G=new I,K=new I;function W(Y,ee,pe){G.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);const ie=G.distanceTo(K),Me=ee.projectionMatrix.elements,We=pe.projectionMatrix.elements,Ee=Me[14]/(Me[10]-1),lt=Me[14]/(Me[10]+1),it=(Me[9]+1)/Me[5],Ve=(Me[9]-1)/Me[5],U=(Me[8]-1)/Me[0],dn=(We[8]+1)/We[0],Xe=Ee*U,He=Ee*dn,xe=ie/(-U+dn),rt=xe*-U;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(rt),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const _e=Ee+xe,P=lt+xe,E=Xe-rt,z=He+(ie-rt),j=it*lt/P*_e,Z=Ve*lt/P*_e;Y.projectionMatrix.makePerspective(E,z,j,Z,_e,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ee=Y.near,pe=Y.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),M.near=R.near=b.near=ee,M.far=R.far=b.far=pe,(C!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,L=M.far),b.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,M.layers.mask=b.layers.mask|R.layers.mask;const ie=Y.parent,Me=M.cameras;ne(M,ie);for(let We=0;We<Me.length;We++)ne(Me[We],ie);Me.length===2?W(M,b,R):M.projectionMatrix.copy(b.projectionMatrix),le(Y,M,ie)};function le(Y,ee,pe){pe===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let me=null;function De(Y,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ie=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let Ee=0;Ee<pe.length;Ee++){const lt=pe[Ee];let it=null;if(d!==null)it=d.getViewport(lt);else{const U=h.getViewSubImage(f,lt);it=U.viewport,Ee===0&&(e.setRenderTargetTextures(v,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(v))}let Ve=T[Ee];Ve===void 0&&(Ve=new Wt,Ve.layers.enable(Ee),Ve.viewport=new Ke,T[Ee]=Ve),Ve.matrix.fromArray(lt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(lt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),Ee===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(Ve)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ee=h.getDepthInformation(pe[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,i.renderState)}}for(let pe=0;pe<y.length;pe++){const ie=_[pe],Me=y[pe];ie!==null&&Me!==void 0&&Me.update(ie,ee,l||o)}me&&me(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const $e=new wf;$e.setAnimationLoop(De),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const Oi=new yn,mv=new ve;function gv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Oi.copy(_),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _v(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=i[v.id];_===void 0&&(g(v),_=u(v),i[v.id]=_,v.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(v,S);const A=e.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function u(v){const y=h();v.__bindingPointIndex=y;const _=s.createBuffer(),S=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,S,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],_=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,b=_.length;A<b;A++){const R=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,M=R.length;T<M;T++){const C=R[T];if(d(C,A,T,S)===!0){const L=C.__offset,D=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let H=0;H<D.length;H++){const G=D[H],K=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,L+B,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,y,_,S){const A=v.value,b=y+"_"+_;if(S[b]===void 0)return typeof A=="number"||typeof A=="boolean"?S[b]=A:S[b]=A.clone(),!0;{const R=S[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return S[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(v){const y=v.uniforms;let _=0;const S=16;for(let b=0,R=y.length;b<R;b++){const T=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,C=T.length;M<C;M++){const L=T[M],D=Array.isArray(L.value)?L.value:[L.value];for(let B=0,H=D.length;B<H;B++){const G=D[B],K=x(G),W=_%S,ne=W%K.boundary,le=W+ne;_+=ne,le!==0&&S-le<K.storage&&(_+=S-le),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=K.storage}}}const A=_%S;return A>0&&(_+=S-A),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class xv{constructor(e={}){const{canvas:t=up(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=It;let A=0,b=0,R=null,T=-1,M=null;const C=new Ke,L=new Ke;let D=null;const B=new Re(0);let H=0,G=t.width,K=t.height,W=1,ne=null,le=null;const me=new Ke(0,0,G,K),De=new Ke(0,0,G,K);let $e=!1;const Y=new Ir;let ee=!1,pe=!1;const ie=new ve,Me=new ve,We=new I,Ee=new Ke,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Ve(){return R===null?W:1}let U=n;function dn(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rr}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",ae,!1),U===null){const F="webgl2";if(U=dn(F,w),U===null)throw dn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Xe,He,xe,rt,_e,P,E,z,j,Z,q,ge,re,Te,be,J,he,Ae,Pe,fe,Ge,Fe,st,N;function oe(){Xe=new Rx(U),Xe.init(),Fe=new uv(U,Xe),He=new Mx(U,Xe,e,Fe),xe=new cv(U,Xe),He.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),rt=new Ix(U),_e=new K0,P=new lv(U,Xe,xe,_e,He,Fe,rt),E=new Tx(_),z=new wx(_),j=new Bm(U),st=new vx(U,j),Z=new Cx(U,j,rt,st),q=new Dx(U,Z,j,rt),Pe=new Lx(U,He,P),J=new Sx(_e),ge=new j0(_,E,z,Xe,He,st,J),re=new gv(_,_e),Te=new Z0,be=new iv(Xe),Ae=new xx(_,E,z,xe,q,d,c),he=new ov(_,q,He),N=new _v(U,rt,He,xe),fe=new yx(U,Xe,rt),Ge=new Px(U,Xe,rt),rt.programs=ge.programs,_.capabilities=He,_.extensions=Xe,_.properties=_e,_.renderLists=Te,_.shadowMap=he,_.state=xe,_.info=rt}oe();const X=new pv(_,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(G,K,!1))},this.getSize=function(w){return w.set(G,K)},this.setSize=function(w,F,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,K=F,t.width=Math.floor(w*W),t.height=Math.floor(F*W),k===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(G*W,K*W).floor()},this.setDrawingBufferSize=function(w,F,k){G=w,K=F,W=k,t.width=Math.floor(w*k),t.height=Math.floor(F*k),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,F,k,V){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,F,k,V),xe.viewport(C.copy(me).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,F,k,V){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,F,k,V),xe.scissor(L.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){xe.setScissorTest($e=w)},this.setOpaqueSort=function(w){ne=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,k=!0){let V=0;if(w){let O=!1;if(R!==null){const Q=R.texture.format;O=Q===yl||Q===vl||Q===na}if(O){const Q=R.texture.type,se=Q===Vn||Q===wi||Q===vr||Q===yr||Q===gl||Q===_l,ue=Ae.getClearColor(),de=Ae.getClearAlpha(),Ie=ue.r,Ce=ue.g,ye=ue.b;se?(g[0]=Ie,g[1]=Ce,g[2]=ye,g[3]=de,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Ie,x[1]=Ce,x[2]=ye,x[3]=de,U.clearBufferiv(U.COLOR,0,x))}else V|=U.COLOR_BUFFER_BIT}F&&(V|=U.DEPTH_BUFFER_BIT),k&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ae.dispose(),Te.dispose(),be.dispose(),_e.dispose(),E.dispose(),z.dispose(),q.dispose(),st.dispose(),N.dispose(),ge.dispose(),X.dispose(),X.removeEventListener("sessionstart",Wl),X.removeEventListener("sessionend",Xl),Ci.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=rt.autoReset,F=he.enabled,k=he.autoUpdate,V=he.needsUpdate,O=he.type;oe(),rt.autoReset=w,he.enabled=F,he.autoUpdate=k,he.needsUpdate=V,he.type=O}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){const F=w.target;F.removeEventListener("dispose",Ue),ft(F)}function ft(w){Dt(w),_e.remove(w)}function Dt(w){const F=_e.get(w).programs;F!==void 0&&(F.forEach(function(k){ge.releaseProgram(k)}),w.isShaderMaterial&&ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,k,V,O,Q){F===null&&(F=lt);const se=O.isMesh&&O.matrixWorld.determinant()<0,ue=ed(w,F,k,V,O);xe.setMaterial(V,se);let de=k.index,Ie=1;if(V.wireframe===!0){if(de=Z.getWireframeAttribute(k),de===void 0)return;Ie=2}const Ce=k.drawRange,ye=k.attributes.position;let qe=Ce.start*Ie,Ze=(Ce.start+Ce.count)*Ie;Q!==null&&(qe=Math.max(qe,Q.start*Ie),Ze=Math.min(Ze,(Q.start+Q.count)*Ie)),de!==null?(qe=Math.max(qe,0),Ze=Math.min(Ze,de.count)):ye!=null&&(qe=Math.max(qe,0),Ze=Math.min(Ze,ye.count));const gt=Ze-qe;if(gt<0||gt===1/0)return;st.setup(O,V,ue,k,de);let dt,Ye=fe;if(de!==null&&(dt=j.get(de),Ye=Ge,Ye.setIndex(dt)),O.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*Ve()),Ye.setMode(U.LINES)):Ye.setMode(U.TRIANGLES);else if(O.isLine){let Se=V.linewidth;Se===void 0&&(Se=1),xe.setLineWidth(Se*Ve()),O.isLineSegments?Ye.setMode(U.LINES):O.isLineLoop?Ye.setMode(U.LINE_LOOP):Ye.setMode(U.LINE_STRIP)}else O.isPoints?Ye.setMode(U.POINTS):O.isSprite&&Ye.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Se=O._multiDrawStarts,Ct=O._multiDrawCounts,Je=O._multiDrawCount,Sn=de?j.get(de).bytesPerElement:1,Qi=_e.get(V).currentProgram.getUniforms();for(let tn=0;tn<Je;tn++)Qi.setValue(U,"_gl_DrawID",tn),Ye.render(Se[tn]/Sn,Ct[tn])}else if(O.isInstancedMesh)Ye.renderInstances(qe,gt,O.count);else if(k.isInstancedBufferGeometry){const Se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ct=Math.min(k.instanceCount,Se);Ye.renderInstances(qe,gt,Ct)}else Ye.render(qe,gt)};function Qe(w,F,k){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=qt,w.needsUpdate=!0,zr(w,F,k),w.side=Dn,w.needsUpdate=!0,zr(w,F,k),w.side=an):zr(w,F,k)}this.compile=function(w,F,k=null){k===null&&(k=w),p=be.get(k),p.init(F),y.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==k&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const Q=O.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const ue=Q[se];Qe(ue,k,O),V.add(ue)}else Qe(Q,k,O),V.add(Q)}),p=y.pop(),V},this.compileAsync=function(w,F,k=null){const V=this.compile(w,F,k);return new Promise(O=>{function Q(){if(V.forEach(function(se){_e.get(se).currentProgram.isReady()&&V.delete(se)}),V.size===0){O(w);return}setTimeout(Q,10)}Xe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Mn=null;function Xn(w){Mn&&Mn(w)}function Wl(){Ci.stop()}function Xl(){Ci.start()}const Ci=new wf;Ci.setAnimationLoop(Xn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(w){Mn=w,X.setAnimationLoop(w),w===null?Ci.stop():Ci.start()},X.addEventListener("sessionstart",Wl),X.addEventListener("sessionend",Xl),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,F,R),p=be.get(w,y.length),p.init(F),y.push(p),Me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Me),pe=this.localClippingEnabled,ee=J.init(this.clippingPlanes,pe),m=Te.get(w,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&la(Q,F,-1/0,_.sortObjects)}la(w,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ne,le),it=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,it&&Ae.addToRenderList(m,w),this.info.render.frame++,ee===!0&&J.beginShadows();const k=p.state.shadowsArray;he.render(k,w,F),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const Q=F.cameras;if(O.length>0)for(let se=0,ue=Q.length;se<ue;se++){const de=Q[se];Yl(V,O,w,de)}it&&Ae.render(w);for(let se=0,ue=Q.length;se<ue;se++){const de=Q[se];ql(m,w,de,de.viewport)}}else O.length>0&&Yl(V,O,w,F),it&&Ae.render(w),ql(m,w,F);R!==null&&b===0&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,F),st.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ee===!0&&J.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function la(w,F,k,V){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){V&&Ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);const se=q.update(w),ue=w.material;ue.visible&&m.push(w,se,ue,k,Ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const se=q.update(w),ue=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ee.copy(w.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ee.copy(se.boundingSphere.center)),Ee.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(ue)){const de=se.groups;for(let Ie=0,Ce=de.length;Ie<Ce;Ie++){const ye=de[Ie],qe=ue[ye.materialIndex];qe&&qe.visible&&m.push(w,se,qe,k,Ee.z,ye)}}else ue.visible&&m.push(w,se,ue,k,Ee.z,null)}}const Q=w.children;for(let se=0,ue=Q.length;se<ue;se++)la(Q[se],F,k,V)}function ql(w,F,k,V){const O=w.opaque,Q=w.transmissive,se=w.transparent;p.setupLightsView(k),ee===!0&&J.setGlobalState(_.clippingPlanes,k),V&&xe.viewport(C.copy(V)),O.length>0&&Or(O,F,k),Q.length>0&&Or(Q,F,k),se.length>0&&Or(se,F,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Yl(w,F,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new $i(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Cr:Vn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const Q=p.state.transmissionRenderTarget[V.id],se=V.viewport||C;Q.setSize(se.z*_.transmissionResolutionScale,se.w*_.transmissionResolutionScale);const ue=_.getRenderTarget();_.setRenderTarget(Q),_.getClearColor(B),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),it&&Ae.render(k);const de=_.toneMapping;_.toneMapping=Ai;const Ie=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ee===!0&&J.setGlobalState(_.clippingPlanes,V),Or(w,k,V),P.updateMultisampleRenderTarget(Q),P.updateRenderTargetMipmap(Q),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ye=0,qe=F.length;ye<qe;ye++){const Ze=F[ye],gt=Ze.object,dt=Ze.geometry,Ye=Ze.material,Se=Ze.group;if(Ye.side===an&&gt.layers.test(V.layers)){const Ct=Ye.side;Ye.side=qt,Ye.needsUpdate=!0,jl(gt,k,V,dt,Ye,Se),Ye.side=Ct,Ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(P.updateMultisampleRenderTarget(Q),P.updateRenderTargetMipmap(Q))}_.setRenderTarget(ue),_.setClearColor(B,H),Ie!==void 0&&(V.viewport=Ie),_.toneMapping=de}function Or(w,F,k){const V=F.isScene===!0?F.overrideMaterial:null;for(let O=0,Q=w.length;O<Q;O++){const se=w[O],ue=se.object,de=se.geometry,Ie=se.group;let Ce=se.material;Ce.allowOverride===!0&&V!==null&&(Ce=V),ue.layers.test(k.layers)&&jl(ue,F,k,de,Ce,Ie)}}function jl(w,F,k,V,O,Q){w.onBeforeRender(_,F,k,V,O,Q),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,F,k,V,w,Q),O.transparent===!0&&O.side===an&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,_.renderBufferDirect(k,F,V,O,w,Q),O.side=Dn,O.needsUpdate=!0,_.renderBufferDirect(k,F,V,O,w,Q),O.side=an):_.renderBufferDirect(k,F,V,O,w,Q),w.onAfterRender(_,F,k,V,O,Q)}function zr(w,F,k){F.isScene!==!0&&(F=lt);const V=_e.get(w),O=p.state.lights,Q=p.state.shadowsArray,se=O.state.version,ue=ge.getParameters(w,O.state,Q,F,k),de=ge.getProgramCacheKey(ue);let Ie=V.programs;V.environment=w.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(w.isMeshStandardMaterial?z:E).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",Ue),Ie=new Map,V.programs=Ie);let Ce=Ie.get(de);if(Ce!==void 0){if(V.currentProgram===Ce&&V.lightsStateVersion===se)return $l(w,ue),Ce}else ue.uniforms=ge.getUniforms(w),w.onBeforeCompile(ue,_),Ce=ge.acquireProgram(ue,de),Ie.set(de,Ce),V.uniforms=ue.uniforms;const ye=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ye.clippingPlanes=J.uniform),$l(w,ue),V.needsLights=nd(w),V.lightsStateVersion=se,V.needsLights&&(ye.ambientLightColor.value=O.state.ambient,ye.lightProbe.value=O.state.probe,ye.directionalLights.value=O.state.directional,ye.directionalLightShadows.value=O.state.directionalShadow,ye.spotLights.value=O.state.spot,ye.spotLightShadows.value=O.state.spotShadow,ye.rectAreaLights.value=O.state.rectArea,ye.ltc_1.value=O.state.rectAreaLTC1,ye.ltc_2.value=O.state.rectAreaLTC2,ye.pointLights.value=O.state.point,ye.pointLightShadows.value=O.state.pointShadow,ye.hemisphereLights.value=O.state.hemi,ye.directionalShadowMap.value=O.state.directionalShadowMap,ye.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ye.spotShadowMap.value=O.state.spotShadowMap,ye.spotLightMatrix.value=O.state.spotLightMatrix,ye.spotLightMap.value=O.state.spotLightMap,ye.pointShadowMap.value=O.state.pointShadowMap,ye.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ce,V.uniformsList=null,Ce}function Kl(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Ho.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function $l(w,F){const k=_e.get(w);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function ed(w,F,k,V,O){F.isScene!==!0&&(F=lt),P.resetTextureUnits();const Q=F.fog,se=V.isMeshStandardMaterial?F.environment:null,ue=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Kt,de=(V.isMeshStandardMaterial?z:E).get(V.envMap||se),Ie=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ye=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,Ze=!!k.morphAttributes.color;let gt=Ai;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=_.toneMapping);const dt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ye=dt!==void 0?dt.length:0,Se=_e.get(V),Ct=p.state.lights;if(ee===!0&&(pe===!0||w!==M)){const kt=w===M&&V.id===T;J.setState(V,w,kt)}let Je=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Ct.state.version||Se.outputColorSpace!==ue||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==de||V.fog===!0&&Se.fog!==Q||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==J.numPlanes||Se.numIntersection!==J.numIntersection)||Se.vertexAlphas!==Ie||Se.vertexTangents!==Ce||Se.morphTargets!==ye||Se.morphNormals!==qe||Se.morphColors!==Ze||Se.toneMapping!==gt||Se.morphTargetsCount!==Ye)&&(Je=!0):(Je=!0,Se.__version=V.version);let Sn=Se.currentProgram;Je===!0&&(Sn=zr(V,F,O));let Qi=!1,tn=!1,Ys=!1;const at=Sn.getUniforms(),pn=Se.uniforms;if(xe.useProgram(Sn.program)&&(Qi=!0,tn=!0,Ys=!0),V.id!==T&&(T=V.id,tn=!0),Qi||M!==w){xe.buffers.depth.getReversed()?(ie.copy(w.projectionMatrix),fp(ie),dp(ie),at.setValue(U,"projectionMatrix",ie)):at.setValue(U,"projectionMatrix",w.projectionMatrix),at.setValue(U,"viewMatrix",w.matrixWorldInverse);const Zt=at.map.cameraPosition;Zt!==void 0&&Zt.setValue(U,We.setFromMatrixPosition(w.matrixWorld)),He.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,tn=!0,Ys=!0)}if(O.isSkinnedMesh){at.setOptional(U,O,"bindMatrix"),at.setOptional(U,O,"bindMatrixInverse");const kt=O.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),at.setValue(U,"boneTexture",kt.boneTexture,P))}O.isBatchedMesh&&(at.setOptional(U,O,"batchingTexture"),at.setValue(U,"batchingTexture",O._matricesTexture,P),at.setOptional(U,O,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",O._indirectTexture,P),at.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",O._colorsTexture,P));const mn=k.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Pe.update(O,k,Sn),(tn||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,at.setValue(U,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pn.envMap.value=de,pn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(pn.envMapIntensity.value=F.environmentIntensity),tn&&(at.setValue(U,"toneMappingExposure",_.toneMappingExposure),Se.needsLights&&td(pn,Ys),Q&&V.fog===!0&&re.refreshFogUniforms(pn,Q),re.refreshMaterialUniforms(pn,V,W,K,p.state.transmissionRenderTarget[w.id]),Ho.upload(U,Kl(Se),pn,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ho.upload(U,Kl(Se),pn,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(U,"center",O.center),at.setValue(U,"modelViewMatrix",O.modelViewMatrix),at.setValue(U,"normalMatrix",O.normalMatrix),at.setValue(U,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const kt=V.uniformsGroups;for(let Zt=0,ua=kt.length;Zt<ua;Zt++){const Pi=kt[Zt];N.update(Pi,Sn),N.bind(Pi,Sn)}}return Sn}function td(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function nd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,F,k){const V=_e.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_e.get(w.texture).__webglTexture=F,_e.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const k=_e.get(w);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const id=U.createFramebuffer();this.setRenderTarget=function(w,F=0,k=0){R=w,A=F,b=k;let V=!0,O=null,Q=!1,se=!1;if(w){const de=_e.get(w);if(de.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(de.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(de.__hasExternalTextures)P.rebindTextures(w,_e.get(w.texture).__webglTexture,_e.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ye=w.depthTexture;if(de.__boundDepthTexture!==ye){if(ye!==null&&_e.has(ye)&&(w.width!==ye.image.width||w.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(se=!0);const Ce=_e.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?O=Ce[F][k]:O=Ce[F],Q=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?O=_e.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[k]:O=Ce,C.copy(w.viewport),L.copy(w.scissor),D=w.scissorTest}else C.copy(me).multiplyScalar(W).floor(),L.copy(De).multiplyScalar(W).floor(),D=$e;if(k!==0&&(O=id),xe.bindFramebuffer(U.FRAMEBUFFER,O)&&V&&xe.drawBuffers(w,O),xe.viewport(C),xe.scissor(L),xe.setScissorTest(D),Q){const de=_e.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,k)}else if(se){const de=_e.get(w.texture),Ie=F;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.__webglTexture,k,Ie)}else if(w!==null&&k!==0){const de=_e.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,k)}T=-1},this.readRenderTargetPixels=function(w,F,k,V,O,Q,se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue){xe.bindFramebuffer(U.FRAMEBUFFER,ue);try{const de=w.texture,Ie=de.format,Ce=de.type;if(!He.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-V&&k>=0&&k<=w.height-O&&U.readPixels(F,k,V,O,Fe.convert(Ie),Fe.convert(Ce),Q)}finally{const de=R!==null?_e.get(R).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(w,F,k,V,O,Q,se){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue)if(F>=0&&F<=w.width-V&&k>=0&&k<=w.height-O){xe.bindFramebuffer(U.FRAMEBUFFER,ue);const de=w.texture,Ie=de.format,Ce=de.type;if(!He.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,Q.byteLength,U.STREAM_READ),U.readPixels(F,k,V,O,Fe.convert(Ie),Fe.convert(Ce),0);const qe=R!==null?_e.get(R).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,qe);const Ze=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await hp(U,Ze,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Q),U.deleteBuffer(ye),U.deleteSync(Ze),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,k=0){const V=Math.pow(2,-k),O=Math.floor(w.image.width*V),Q=Math.floor(w.image.height*V),se=F!==null?F.x:0,ue=F!==null?F.y:0;P.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,se,ue,O,Q),xe.unbindTexture()};const sd=U.createFramebuffer(),rd=U.createFramebuffer();this.copyTextureToTexture=function(w,F,k=null,V=null,O=0,Q=null){Q===null&&(O!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=O,O=0):Q=0);let se,ue,de,Ie,Ce,ye,qe,Ze,gt;const dt=w.isCompressedTexture?w.mipmaps[Q]:w.image;if(k!==null)se=k.max.x-k.min.x,ue=k.max.y-k.min.y,de=k.isBox3?k.max.z-k.min.z:1,Ie=k.min.x,Ce=k.min.y,ye=k.isBox3?k.min.z:0;else{const mn=Math.pow(2,-O);se=Math.floor(dt.width*mn),ue=Math.floor(dt.height*mn),w.isDataArrayTexture?de=dt.depth:w.isData3DTexture?de=Math.floor(dt.depth*mn):de=1,Ie=0,Ce=0,ye=0}V!==null?(qe=V.x,Ze=V.y,gt=V.z):(qe=0,Ze=0,gt=0);const Ye=Fe.convert(F.format),Se=Fe.convert(F.type);let Ct;F.isData3DTexture?(P.setTexture3D(F,0),Ct=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),Ct=U.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),Ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Je=U.getParameter(U.UNPACK_ROW_LENGTH),Sn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Qi=U.getParameter(U.UNPACK_SKIP_PIXELS),tn=U.getParameter(U.UNPACK_SKIP_ROWS),Ys=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,dt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ye);const at=w.isDataArrayTexture||w.isData3DTexture,pn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const mn=_e.get(w),kt=_e.get(F),Zt=_e.get(mn.__renderTarget),ua=_e.get(kt.__renderTarget);xe.bindFramebuffer(U.READ_FRAMEBUFFER,Zt.__webglFramebuffer),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let Pi=0;Pi<de;Pi++)at&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.get(w).__webglTexture,O,ye+Pi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.get(F).__webglTexture,Q,gt+Pi)),U.blitFramebuffer(Ie,Ce,se,ue,qe,Ze,se,ue,U.DEPTH_BUFFER_BIT,U.NEAREST);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||_e.has(w)){const mn=_e.get(w),kt=_e.get(F);xe.bindFramebuffer(U.READ_FRAMEBUFFER,sd),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,rd);for(let Zt=0;Zt<de;Zt++)at?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mn.__webglTexture,O,ye+Zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mn.__webglTexture,O),pn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,Q,gt+Zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,Q),O!==0?U.blitFramebuffer(Ie,Ce,se,ue,qe,Ze,se,ue,U.COLOR_BUFFER_BIT,U.NEAREST):pn?U.copyTexSubImage3D(Ct,Q,qe,Ze,gt+Zt,Ie,Ce,se,ue):U.copyTexSubImage2D(Ct,Q,qe,Ze,Ie,Ce,se,ue);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ct,Q,qe,Ze,gt,se,ue,de,Ye,Se,dt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,Q,qe,Ze,gt,se,ue,de,Ye,dt.data):U.texSubImage3D(Ct,Q,qe,Ze,gt,se,ue,de,Ye,Se,dt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Q,qe,Ze,se,ue,Ye,Se,dt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Q,qe,Ze,dt.width,dt.height,Ye,dt.data):U.texSubImage2D(U.TEXTURE_2D,Q,qe,Ze,se,ue,Ye,Se,dt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Sn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Qi),U.pixelStorei(U.UNPACK_SKIP_ROWS,tn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ys),Q===0&&F.generateMipmaps&&U.generateMipmap(Ct),xe.unbindTexture()},this.copyTextureToTexture3D=function(w,F,k=null,V=null,O=0){return Vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,k,V,O)},this.initRenderTarget=function(w){_e.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,xe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}function yh(s,e){if(e===Fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Gc||e===cf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Gc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Lf extends Ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Bv(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=gr.extractUrlBase(e);o=gr.resolveURL(l,this.path)}else o=gr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ef(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Df){try{o[ze.KHR_BINARY_GLTF]=new Ov(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Zv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ze.KHR_MATERIALS_UNLIT:o[h]=new Mv;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new zv(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[h]=new kv;break;case ze.KHR_MESH_QUANTIZATION:o[h]=new Vv;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function vv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yv{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Re(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Kt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Af(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new vm(u),l.distance=h;break;case"spot":l=new _m(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ei(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Mv{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,n){const i=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}}class Sv{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Tv{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(a,a)}return Promise.all(r)}}class Ev{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class bv{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Av{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class wv{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Rv{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Kt),Promise.all(r)}}class Cv{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Pv{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(r)}}class Iv{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Lv{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Dv{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Uv{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Nv{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Fv{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class Bv{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const g of h){const x=new ve,m=new I,p=new Hn,v=new I(1,1,1),y=new Wp(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,x.compose(m,p,v));for(const _ in c)if(_==="_COLOR_0"){const S=c[_];y.instanceColor=new Xc(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);ht.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Df="glTF",ir=12,Mh={JSON:1313821514,BIN:5130562};class Ov{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ir),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Df)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ir,r=new DataView(e,ir);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Mh.JSON){const l=new Uint8Array(e,ir+o,a);this.content=n.decode(l)}else if(c===Mh.BIN){const l=ir+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Kc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Kc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Is[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(d)},a,l,Kt,f)})})}}class kv{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vv{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Uf extends Nr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,x=g-l,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+h;for(let _=0;_!==a;_++){const S=o[x+_+a],A=o[x+_+c]*u,b=o[g+_+a],R=o[g+_]*u;r[_]=v*S+y*A+m*b+p*R}return r}}const Hv=new Hn;class Gv extends Uf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Hv.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sh={9728:Yt,9729:cn,9984:Qh,9985:No,9986:hr,9987:si},Th={33071:Si,33648:Yo,10497:hn},qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wv={CUBICSPLINE:void 0,LINEAR:Er,STEP:Tr},Ya={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new sa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),s.DefaultMaterial}function zi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Yv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jv(s){let e;const t=s.extensions&&s.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ja(t.attributes):e=s.indices+":"+ja(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ja(s.targets[n]);return e}function ja(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function $c(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $v=new ve;class Zv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new bf(this.options.manager):this.textureLoader=new Sm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ef(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return zi(r,a,i),ei(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(gr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=qa[i.type],a=Is[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new mt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=qa[i.type],l=Is[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(x=new l(a,p*d,i.count*d/u),y=new zp(x,d/u),t.cache.add(v,y)),m=new bl(y,c,f%d/u,g)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),m=new mt(x,c,g);if(i.sparse!==void 0){const p=qa.SCALAR,v=Is[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,S=new v(o[1],y,i.sparse.count*p),A=new l(o[2],_,i.sparse.count*c);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,R=S.length;b<R;b++){const T=S[b];if(m.setX(T,A[b*c]),c>=2&&m.setY(T,A[b*c+1]),c>=3&&m.setZ(T,A[b*c+2]),c>=4&&m.setW(T,A[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Sh[f.magFilter]||cn,u.minFilter=Sh[f.minFilter]||si,u.wrapS=Th[f.wrapS]||hn,u.wrapT=Th[f.wrapT]||hn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Yt&&u.minFilter!==cn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new wt(x);m.needsUpdate=!0,f(m)}),t.load(gr.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ei(h,o),h.userData.mimeType=o.mimeType||Kv(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ia,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new yf,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return sa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ze.KHR_MATERIALS_UNLIT]){const h=i[ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Kt),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=an);const u=r.alphaMode||Ya.OPAQUE;if(u===Ya.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ya.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==In&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==In&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==In){const h=r.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],Kt)}return r.emissiveTexture!==void 0&&o!==In&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ei(h,r),t.associations.set(h,{materials:e}),r.extensions&&zi(i,h,r),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Eh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=jv(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Eh(new Rt,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Xv(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const x=u[d],m=o[d];let p;const v=l[d];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Vp(x,v):new ut(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=yh(p.geometry,cf):m.mode===xn.TRIANGLE_FAN&&(p.geometry=yh(p.geometry,Gc));else if(m.mode===xn.LINES)p=new Rl(x,v);else if(m.mode===xn.LINE_STRIP)p=new Lr(x,v);else if(m.mode===xn.LINE_LOOP)p=new Cl(x,v);else if(m.mode===xn.POINTS)p=new Dr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Yv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ei(p,r),m.extensions&&zi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&zi(i,h[0],r),h[0];const f=new Ki;r.extensions&&zi(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(lp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ll(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new ve;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Al(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,y=f.length;v<y;v++){const _=f[v],S=d[v],A=g[v],b=x[v],R=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const T=n._createAnimationTracks(_,S,A,b,R);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new lm(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,$v)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new vf:l.length>1?u=new Ki:l.length===1?u=l[0]:u=new ht,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ei(u,r),r.extensions&&zi(n,u,r),r.matrix!==void 0){const h=new ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ki;n.name&&(r.name=i.createUniqueName(n.name)),ei(r,n),n.extensions&&zi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof kn||f instanceof wt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];gi[r.path]===gi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(gi[r.path]){case gi.weights:l=Os;break;case gi.rotation:l=zs;break;case gi.translation:case gi.scale:l=ks;break;default:switch(n.itemSize){case 1:l=Os;break;case 2:case 3:default:l=ks;break}break}const u=i.interpolation!==void 0?Wv[i.interpolation]:Er,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+gi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$c(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof zs?Gv:Uf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jv(s,e,t){const n=e.attributes,i=new ct;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const u=$c(Is[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const x=$c(Is[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new jt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Eh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Kc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ke.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ke.workingColorSpace}" not supported.`),ei(s,e),Jv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qv(s,e.targets,t):s})}const ms=new yn(0,0,0,"YXZ"),gs=new I,Qv={type:"change"},ey={type:"lock"},ty={type:"unlock"},bh=.002,Ah=Math.PI/2;class ny extends Nm{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=iy.bind(this),this._onPointerlockChange=sy.bind(this),this._onPointerlockError=ry.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;gs.setFromMatrixColumn(t.matrix,0),gs.crossVectors(t.up,gs),t.position.addScaledVector(gs,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;gs.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(gs,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function iy(s){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;ms.setFromQuaternion(e.quaternion),ms.y-=s.movementX*bh*this.pointerSpeed,ms.x-=s.movementY*bh*this.pointerSpeed,ms.x=Math.max(Ah-this.maxPolarAngle,Math.min(Ah-this.minPolarAngle,ms.x)),e.quaternion.setFromEuler(ms),this.dispatchEvent(Qv)}function sy(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(ey),this.isLocked=!0):(this.dispatchEvent(ty),this.isLocked=!1)}function ry(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Nf=0,oy=1,ay=2,wh=2,Ka=1.25,Rh=1,Ot=32,vt=Ot/4,Ff=65535,Go=Math.pow(2,-24),Fl=Symbol("SKIP_GENERATION"),Bf={strategy:Nf,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Fl]:!1};function pt(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function Ch(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function Ph(s,e){e.set(s)}function Ih(s,e,t){let n,i;for(let r=0;r<3;r++){const o=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[o],i=e[o],t[o]=n>i?n:i}}function _o(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],r=e[s+2*n+1],o=i-r,a=i+r;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function sr(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}function yt(s,e){return e[s+15]===Ff}function zt(s,e){return e[s+6]}function Xt(s,e){return e[s+14]}function bt(s){return s+vt}function At(s,e){const t=e[s+6];return s+t*vt}function Bl(s,e){return e[s+7]}function $a(s,e,t,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,x=-1/0,m=-1/0;const p=s.offset||0;for(let v=(e-p)*6,y=(e+t-p)*6;v<y;v+=6){const _=s[v+0],S=s[v+1],A=_-S,b=_+S;A<r&&(r=A),b>c&&(c=b),_<h&&(h=_),_>g&&(g=_);const R=s[v+2],T=s[v+3],M=R-T,C=R+T;M<o&&(o=M),C>l&&(l=C),R<f&&(f=R),R>x&&(x=R);const L=s[v+4],D=s[v+5],B=L-D,H=L+D;B<a&&(a=B),H>u&&(u=H),L<d&&(d=L),L>m&&(m=L)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=f,i[2]=d,i[3]=g,i[4]=x,i[5]=m}const Qn=32,cy=(s,e)=>s.candidate-e.candidate,_i=new Array(Qn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),xo=new Float32Array(6);function ly(s,e,t,n,i,r){let o=-1,a=0;if(r===Nf)o=Ch(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===oy)o=Ch(s),o!==-1&&(a=uy(t,n,i,o));else if(r===ay){const c=sr(s);let l=Ka*i;const u=t.offset||0,h=(n-u)*6,f=(n+i-u)*6;for(let d=0;d<3;d++){const g=e[d],p=(e[d+3]-g)/Qn;if(i<Qn/4){const v=[..._i];v.length=i;let y=0;for(let S=h;S<f;S+=6,y++){const A=v[y];A.candidate=t[S+2*d],A.count=0;const{bounds:b,leftCacheBounds:R,rightCacheBounds:T}=A;for(let M=0;M<3;M++)T[M]=1/0,T[M+3]=-1/0,R[M]=1/0,R[M+3]=-1/0,b[M]=1/0,b[M+3]=-1/0;_o(S,t,b)}v.sort(cy);let _=i;for(let S=0;S<_;S++){const A=v[S];for(;S+1<_&&v[S+1].candidate===A.candidate;)v.splice(S+1,1),_--}for(let S=h;S<f;S+=6){const A=t[S+2*d];for(let b=0;b<_;b++){const R=v[b];A>=R.candidate?_o(S,t,R.rightCacheBounds):(_o(S,t,R.leftCacheBounds),R.count++)}}for(let S=0;S<_;S++){const A=v[S],b=A.count,R=i-A.count,T=A.leftCacheBounds,M=A.rightCacheBounds;let C=0;b!==0&&(C=sr(T)/c);let L=0;R!==0&&(L=sr(M)/c);const D=Rh+Ka*(C*b+L*R);D<l&&(o=d,l=D,a=A.candidate)}}else{for(let _=0;_<Qn;_++){const S=_i[_];S.count=0,S.candidate=g+p+_*p;const A=S.bounds;for(let b=0;b<3;b++)A[b]=1/0,A[b+3]=-1/0}for(let _=h;_<f;_+=6){let b=~~((t[_+2*d]-g)/p);b>=Qn&&(b=Qn-1);const R=_i[b];R.count++,_o(_,t,R.bounds)}const v=_i[Qn-1];Ph(v.bounds,v.rightCacheBounds);for(let _=Qn-2;_>=0;_--){const S=_i[_],A=_i[_+1];Ih(S.bounds,A.rightCacheBounds,S.rightCacheBounds)}let y=0;for(let _=0;_<Qn-1;_++){const S=_i[_],A=S.count,b=S.bounds,T=_i[_+1].rightCacheBounds;A!==0&&(y===0?Ph(b,xo):Ih(b,xo,xo)),y+=A;let M=0,C=0;y!==0&&(M=sr(xo)/c);const L=i-y;L!==0&&(C=sr(T)/c);const D=Rh+Ka*(M*y+C*L);D<l&&(o=d,l=D,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function uy(s,e,t,n){let i=0;const r=s.offset;for(let o=e,a=e+t;o<a;o++)i+=s[(o-r)*6+n*2];return i/t}class Za{constructor(){this.boundingData=new Float32Array(6)}}function hy(s,e,t,n,i,r){let o=n,a=n+i-1;const c=r.pos,l=r.axis*2,u=t.offset||0;for(;;){for(;o<=a&&t[(o-u)*6+l]<c;)o++;for(;o<=a&&t[(a-u)*6+l]>=c;)a--;if(o<a){for(let h=0;h<e;h++){let f=s[o*e+h];s[o*e+h]=s[a*e+h],s[a*e+h]=f}for(let h=0;h<6;h++){const f=o-u,d=a-u,g=t[f*6+h];t[f*6+h]=t[d*6+h],t[d*6+h]=g}o++,a--}else return o}}let Of,Wo,Zc,zf;const fy=Math.pow(2,32);function Jc(s){return"count"in s?1:1+Jc(s.left)+Jc(s.right)}function dy(s,e,t){return Of=new Float32Array(t),Wo=new Uint32Array(t),Zc=new Uint16Array(t),zf=new Uint8Array(t),Qc(s,e)}function Qc(s,e){const t=s/4,n=s/2,i="count"in e,r=e.boundingData;for(let o=0;o<6;o++)Of[t+o]=r[o];if(i)return e.buffer?(zf.set(new Uint8Array(e.buffer),s),s+e.buffer.byteLength):(Wo[t+6]=e.offset,Zc[n+14]=e.count,Zc[n+15]=Ff,s+Ot);{const{left:o,right:a,splitAxis:c}=e,l=s+Ot;let u=Qc(l,o);const h=s/Ot,d=u/Ot-h;if(d>fy)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Wo[t+6]=d,Wo[t+7]=c,Qc(u,a)}}function py(s,e,t,n,i,r){const{maxDepth:o,verbose:a,maxLeafSize:c,strategy:l,onProgress:u}=i,h=s.primitiveBuffer,f=s.primitiveBufferStride,d=new Float32Array(6);let g=!1;const x=new Za;return $a(e,t,n,x.boundingData,d),p(x,t,n,d),x;function m(v){u&&u((v-r.offset)/r.count)}function p(v,y,_,S=null,A=0){if(!g&&A>=o&&(g=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),_<=c||A>=o)return m(y+_),v.offset=y,v.count=_,v;const b=ly(v.boundingData,S,e,y,_,l);if(b.axis===-1)return m(y+_),v.offset=y,v.count=_,v;const R=hy(h,f,e,y,_,b);if(R===y||R===y+_)m(y+_),v.offset=y,v.count=_;else{v.splitAxis=b.axis;const T=new Za,M=y,C=R-y;v.left=T,$a(e,M,C,T.boundingData,d),p(T,M,C,d,A+1);const L=new Za,D=R,B=_-C;v.right=L,$a(e,D,B,L.boundingData,d),p(L,D,B,d,A+1)}return v}}function my(s,e){const t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=s.getRootRanges(e.range),i=n[0],r=n[n.length-1],o={offset:i.offset,count:r.offset+r.count-i.offset},a=new Float32Array(6*o.count);a.offset=o.offset,s.computePrimitiveBounds(o.offset,o.count,a),s._roots=n.map(c=>{const l=py(s,a,c.offset,c.count,e,o),u=Jc(l),h=new t(Ot*u);return dy(0,l,h),h})}class Ol{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class gy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ot=new gy;let Ei,Rs;const _s=[],vo=new Ol(()=>new ct);function _y(s,e,t,n,i,r){Ei=vo.getPrimitive(),Rs=vo.getPrimitive(),_s.push(Ei,Rs),ot.setBuffer(s._roots[e]);const o=el(0,s.geometry,t,n,i,r);ot.clearBuffer(),vo.releasePrimitive(Ei),vo.releasePrimitive(Rs),_s.pop(),_s.pop();const a=_s.length;return a>0&&(Rs=_s[a-1],Ei=_s[a-2]),o}function el(s,e,t,n,i=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=ot;let u=s*2;if(yt(u,c)){const g=zt(s,l),x=Xt(u,c);return pt(s,a,Ei),n(g,x,!1,o,r+s/vt,Ei)}else{let L=function(B){const{uint16Array:H,uint32Array:G}=ot;let K=B*2;for(;!yt(K,H);)B=bt(B),K=B*2;return zt(B,G)},D=function(B){const{uint16Array:H,uint32Array:G}=ot;let K=B*2;for(;!yt(K,H);)B=At(B,G),K=B*2;return zt(B,G)+Xt(K,H)};var f=L,d=D;const g=bt(s),x=At(s,l);let m=g,p=x,v,y,_,S;if(i&&(_=Ei,S=Rs,pt(m,a,_),pt(p,a,S),v=i(_),y=i(S),y<v)){m=x,p=g;const B=v;v=y,y=B,_=S}_||(_=Ei,pt(m,a,_));const A=yt(m*2,c),b=t(_,A,v,o+1,r+m/vt);let R;if(b===wh){const B=L(m),G=D(m)-B;R=n(B,G,!0,o+1,r+m/vt,_)}else R=b&&el(m,e,t,n,i,r,o+1);if(R)return!0;S=Rs,pt(p,a,S);const T=yt(p*2,c),M=t(S,T,y,o+1,r+p/vt);let C;if(M===wh){const B=L(p),G=D(p)-B;C=n(B,G,!0,o+1,r+p/vt,S)}else C=M&&el(p,e,t,n,i,r,o+1);return!!C}}const _r=new ot.constructor,Jo=new ot.constructor,xi=new Ol(()=>new ct),xs=new ct,vs=new ct,Ja=new ct,Qa=new ct;let ec=!1;function xy(s,e,t,n){if(ec)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ec=!0;const i=s._roots,r=e._roots;let o,a=0,c=0;const l=new ve().copy(t).invert();for(let u=0,h=i.length;u<h;u++){_r.setBuffer(i[u]),c=0;const f=xi.getPrimitive();pt(0,_r.float32Array,f),f.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(Jo.setBuffer(r[d]),o=An(0,0,t,l,n,a,c,0,0,f),Jo.clearBuffer(),c+=r[d].byteLength/Ot,!o);d++);if(xi.releasePrimitive(f),_r.clearBuffer(),a+=i[u].byteLength/Ot,o)break}return ec=!1,o}function An(s,e,t,n,i,r=0,o=0,a=0,c=0,l=null,u=!1){let h,f;u?(h=Jo,f=_r):(h=_r,f=Jo);const d=h.float32Array,g=h.uint32Array,x=h.uint16Array,m=f.float32Array,p=f.uint32Array,v=f.uint16Array,y=s*2,_=e*2,S=yt(y,x),A=yt(_,v);let b=!1;if(A&&S)u?b=i(zt(e,p),Xt(e*2,v),zt(s,g),Xt(s*2,x),c,o+e/vt,a,r+s/vt):b=i(zt(s,g),Xt(s*2,x),zt(e,p),Xt(e*2,v),a,r+s/vt,c,o+e/vt);else if(A){const R=xi.getPrimitive();pt(e,m,R),R.applyMatrix4(t);const T=bt(s),M=At(s,g);pt(T,d,xs),pt(M,d,vs);const C=R.intersectsBox(xs),L=R.intersectsBox(vs);b=C&&An(e,T,n,t,i,o,r,c,a+1,R,!u)||L&&An(e,M,n,t,i,o,r,c,a+1,R,!u),xi.releasePrimitive(R)}else{const R=bt(e),T=At(e,p);pt(R,m,Ja),pt(T,m,Qa);const M=l.intersectsBox(Ja),C=l.intersectsBox(Qa);if(M&&C)b=An(s,R,t,n,i,r,o,a,c+1,l,u)||An(s,T,t,n,i,r,o,a,c+1,l,u);else if(M)if(S)b=An(s,R,t,n,i,r,o,a,c+1,l,u);else{const L=xi.getPrimitive();L.copy(Ja).applyMatrix4(t);const D=bt(s),B=At(s,g);pt(D,d,xs),pt(B,d,vs);const H=L.intersectsBox(xs),G=L.intersectsBox(vs);b=H&&An(R,D,n,t,i,o,r,c,a+1,L,!u)||G&&An(R,B,n,t,i,o,r,c,a+1,L,!u),xi.releasePrimitive(L)}else if(C)if(S)b=An(s,T,t,n,i,r,o,a,c+1,l,u);else{const L=xi.getPrimitive();L.copy(Qa).applyMatrix4(t);const D=bt(s),B=At(s,g);pt(D,d,xs),pt(B,d,vs);const H=L.intersectsBox(xs),G=L.intersectsBox(vs);b=H&&An(T,D,n,t,i,o,r,c,a+1,L,!u)||G&&An(T,B,n,t,i,o,r,c,a+1,L,!u),xi.releasePrimitive(L)}}return b}const Lh=new ct,ys=new Float32Array(6);class vy{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Bf,...e},my(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let h=e,f=e+t;h<f;h++){this.writePrimitiveBounds(h,ys,0);const[d,g,x,m,p,v]=ys;d<r&&(r=d),m>c&&(c=m),g<o&&(o=g),p>l&&(l=p),x<a&&(a=x),v>u&&(u=v)}return n[i+0]=r,n[i+1]=o,n[i+2]=a,n[i+3]=c,n[i+4]=l,n[i+5]=u,n}computePrimitiveBounds(e,t,n){const i=n.offset||0;for(let r=e,o=e+t;r<o;r++){this.writePrimitiveBounds(r,ys,0);const[a,c,l,u,h,f]=ys,d=(a+u)/2,g=(c+h)/2,x=(l+f)/2,m=(u-a)/2,p=(h-c)/2,v=(f-l)/2,y=(r-i)*6;n[y+0]=d,n[y+1]=m+(Math.abs(d)+m)*Go,n[y+2]=g,n[y+3]=p+(Math.abs(g)+p)*Go,n[y+4]=x,n[y+5]=v+(Math.abs(x)+v)*Go}return n}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let n=0,i=t.length;n<i;n++)t[n]+=e;else{const n=this._roots;for(let i=0;i<n.length;i++){const r=n[i],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/Ot;for(let l=0;l<c;l++){const u=vt*l,h=2*u;yt(h,a)&&(o[u+6]+=e)}}}}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){const l=a*2,u=yt(l,r);if(u){const h=i[a+6],f=r[l+14];e(c,u,new Float32Array(n,a*4,6),h,f)}else{const h=bt(a),f=At(a,i),d=Bl(a,i);e(c,u,new Float32Array(n,a*4,6),d)||(o(h,c+1),o(f,c+1))}}}refit(){const e=this._roots;for(let t=0,n=e.length;t<n;t++){const i=e[t],r=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),c=i.byteLength/Ot;for(let l=c-1;l>=0;l--){const u=l*vt,h=u*2;if(yt(h,o)){const d=zt(u,r),g=Xt(h,o);this.writePrimitiveRangeBounds(d,g,ys,0),a.set(ys,u)}else{const d=bt(u),g=At(u,r);for(let x=0;x<3;x++){const m=a[d+x],p=a[d+x+3],v=a[g+x],y=a[g+x+3];a[u+x]=m<v?m:v,a[u+x+3]=p>y?p:y}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{pt(0,new Float32Array(n),Lh),e.union(Lh)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=e;if(i&&r){const h=i;i=(f,d,g,x,m)=>h(f,d,g,x,m)?!0:a(f,d,this,r,g,x,o)}else i||(r?i=(h,f,d,g)=>a(h,f,this,r,d,g,o):i=(h,f,d)=>d);let c=!1,l=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(c=_y(this,h,n,i,t,l),c)break;l+=d.byteLength/Ot}return c}bvhcast(e,t,n){let{intersectsRanges:i}=n;return xy(this,e,t,i)}}function yy(){return typeof SharedArrayBuffer<"u"}function zl(s){return s.index?s.index.count:s.attributes.position.count}function aa(s){return zl(s)/3}function My(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function Sy(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=My(t,n);s.setIndex(new mt(i,1));for(let r=0;r<t;r++)i[r]=r}}function Ty(s,e,t){const n=zl(s)/t,i=e||s.drawRange,r=i.start/t,o=(i.start+i.count)/t,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function Ey(s,e){return s.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function Dh(s,e,t){const n=Ty(s,e,t),i=Ey(s,t);if(!i.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,c=zl(s)/t,l=[];for(const f of i){const{offset:d,count:g}=f,x=d,m=isFinite(g)?g:c-d,p=d+m;x<a&&p>o&&(l.push({pos:Math.max(o,x),isStart:!0}),l.push({pos:Math.min(a,p),isStart:!1}))}l.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let u=0,h=null;for(const f of l){const d=f.pos;u!==0&&d!==h&&r.push({offset:h,count:d-h}),u+=f.isStart?1:-1,h=d}return r}function by(s,e){const t=s[s.length-1],n=t.offset+t.count>2**16,i=s.reduce((l,u)=>l+u.count,0),r=n?4:2,o=e?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let l=0;l<s.length;l++){const{offset:u,count:h}=s[l];for(let f=0;f<h;f++)a[c+f]=u+f;c+=h}return a}class Ay extends vy{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!yy())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Bf,...t},t[Fl]||this.init(t)}init(e){const{geometry:t,primitiveStride:n}=this;if(e.indirect){const i=Dh(t,e.range,n),r=by(i,e.useSharedArrayBuffer);this._indirectBuffer=r}else Sy(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ct))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Dh(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class li{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){const c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){const a=t[r],c=e.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}li.prototype.setFromBox=(function(){const s=new I;return function(t,n){const i=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);const h=t.dot(s);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const wy=(function(){const s=new I,e=new I,t=new I;return function(i,r,o){const a=i.start,c=s,l=r.start,u=e;t.subVectors(a,l),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const h=t.dot(u),f=u.dot(c),d=u.dot(u),g=t.dot(c),m=c.dot(c)*d-f*f;let p,v;m!==0?p=(h*f-g*d)/m:p=0,v=(h+p*f)/d,o.x=p,o.y=v}})(),kl=(function(){const s=new Le,e=new I,t=new I;return function(i,r,o,a){wy(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=r.start:h=r.end;const f=e,d=t;if(i.closestPointToPoint(h,!0,e),r.closestPointToPoint(u,!0,t),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}})(),Ry=(function(){const s=new I,e=new I,t=new ti,n=new ci;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;const x=o.getPlane(t);if(Math.abs(x.distanceToPoint(c))<=a){const p=x.projectPoint(c,e);if(o.containsPoint(p))return!0}return!1}})(),Cy=["x","y","z"],ni=1e-15,Uh=ni*ni;function _n(s){return Math.abs(s)<ni}class Un extends Lt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new li),this.points=[this.a,this.b,this.c],this.plane=new ti,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ci,this.needsUpdate=!0}intersectsSphere(e){return Ry(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);const l=r[1],u=o[1];l.subVectors(e,t),u.setFromPoints(l,i);const h=r[2],f=o[2];h.subVectors(t,n),f.setFromPoints(h,i);const d=r[3],g=o[3];d.subVectors(n,e),g.setFromPoints(d,i);const x=l.length(),m=h.length(),p=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<ni?m<ni||p<ni?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<ni?p<ni?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<ni&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}Un.prototype.closestPointToSegment=(function(){const s=new I,e=new I,t=new ci;return function(i,r=null,o=null){const{start:a,end:c}=i,l=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;t.start.copy(l[f]),t.end.copy(l[d]),kl(t,i,s,e),u=s.distanceToSquared(e),u<h&&(h=u,r&&r.copy(s),o&&o.copy(e))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(h)}})();Un.prototype.intersectsTriangle=(function(){const s=new Un,e=new li,t=new li,n=new I,i=new I,r=new I,o=new I,a=new ci,c=new ci,l=new I,u=new Le,h=new Le;function f(y,_,S,A){const b=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?b.copy(y.plane.normal):b.copy(_.plane.normal);const R=y.satBounds,T=y.satAxes;for(let L=1;L<4;L++){const D=R[L],B=T[L];if(e.setFromPoints(B,_.points),D.isSeparated(e)||(o.copy(b).cross(B),e.setFromPoints(o,y.points),t.setFromPoints(o,_.points),e.isSeparated(t)))return!1}const M=_.satBounds,C=_.satAxes;for(let L=1;L<4;L++){const D=M[L],B=C[L];if(e.setFromPoints(B,y.points),D.isSeparated(e)||(o.crossVectors(b,B),e.setFromPoints(o,y.points),t.setFromPoints(o,_.points),e.isSeparated(t)))return!1}return S&&(A||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function d(y,_,S,A,b,R,T,M,C,L,D){let B=T/(T-M);L.x=A+(b-A)*B,D.start.subVectors(_,y).multiplyScalar(B).add(y),B=T/(T-C),L.y=A+(R-A)*B,D.end.subVectors(S,y).multiplyScalar(B).add(y)}function g(y,_,S,A,b,R,T,M,C,L,D){if(b>0)d(y.c,y.a,y.b,A,_,S,C,T,M,L,D);else if(R>0)d(y.b,y.a,y.c,S,_,A,M,T,C,L,D);else if(M*C>0||T!=0)d(y.a,y.b,y.c,_,S,A,T,M,C,L,D);else if(M!=0)d(y.b,y.a,y.c,S,_,A,M,T,C,L,D);else if(C!=0)d(y.c,y.a,y.b,A,_,S,C,T,M,L,D);else return!0;return!1}function x(y,_,S,A){const b=_.degenerateSegment,R=y.plane.distanceToPoint(b.start),T=y.plane.distanceToPoint(b.end);return _n(R)?_n(T)?f(y,_,S,A):(S&&(S.start.copy(b.start),S.end.copy(b.start)),y.containsPoint(b.start)):_n(T)?(S&&(S.start.copy(b.end),S.end.copy(b.end)),y.containsPoint(b.end)):y.plane.intersectLine(b,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),y.containsPoint(n)):!1}function m(y,_,S){const A=_.a;return _n(y.plane.distanceToPoint(A))&&y.containsPoint(A)?(S&&(S.start.copy(A),S.end.copy(A)),!0):!1}function p(y,_,S){const A=y.degenerateSegment,b=_.a;return A.closestPointToPoint(b,!0,n),b.distanceToSquared(n)<Uh?(S&&(S.start.copy(b),S.end.copy(b)),!0):!1}function v(y,_,S,A){if(y.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){const b=y.degenerateSegment,R=_.degenerateSegment,T=i,M=r;b.delta(T),R.delta(M);const C=n.subVectors(R.start,b.start),L=T.x*M.y-T.y*M.x;if(_n(L))return!1;const D=(C.x*M.y-C.y*M.x)/L,B=-(T.x*C.y-T.y*C.x)/L;if(D<0||D>1||B<0||B>1)return!1;const H=b.start.z+T.z*D,G=R.start.z+M.z*B;return _n(H-G)?(S&&(S.start.copy(b.start).addScaledVector(T,D),S.end.copy(b.start).addScaledVector(T,D)),!0):!1}else return _.isDegenerateIntoPoint?p(y,_,S):x(_,y,S,A);else{if(y.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(y.a)<Uh?(S&&(S.start.copy(y.a),S.end.copy(y.a)),!0):!1:_.isDegenerateIntoSegment?p(_,y,S):m(_,y,S);if(_.isDegenerateIntoPoint)return m(y,_,S);if(_.isDegenerateIntoSegment)return x(y,_,S,A)}}return function(_,S=null,A=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(s.copy(_),s.update(),_=s);const b=v(this,_,S,A);if(b!==void 0)return b;const R=this.plane,T=_.plane;let M=T.distanceToPoint(this.a),C=T.distanceToPoint(this.b),L=T.distanceToPoint(this.c);_n(M)&&(M=0),_n(C)&&(C=0),_n(L)&&(L=0);const D=M*C,B=M*L;if(D>0&&B>0)return!1;let H=R.distanceToPoint(_.a),G=R.distanceToPoint(_.b),K=R.distanceToPoint(_.c);_n(H)&&(H=0),_n(G)&&(G=0),_n(K)&&(K=0);const W=H*G,ne=H*K;if(W>0&&ne>0)return!1;i.copy(R.normal),r.copy(T.normal);const le=i.cross(r);let me=0,De=Math.abs(le.x);const $e=Math.abs(le.y);$e>De&&(De=$e,me=1),Math.abs(le.z)>De&&(me=2);const ee=Cy[me],pe=this.a[ee],ie=this.b[ee],Me=this.c[ee],We=_.a[ee],Ee=_.b[ee],lt=_.c[ee];if(g(this,pe,ie,Me,D,B,M,C,L,u,a))return f(this,_,S,A);if(g(_,We,Ee,lt,W,ne,H,G,K,h,c))return f(this,_,S,A);if(u.y<u.x){const it=u.y;u.y=u.x,u.x=it,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(h.y<h.x){const it=h.y;h.y=h.x,h.x=it,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<h.x||h.y<u.x?!1:(S&&(h.x>u.x?S.start.copy(c.start):S.start.copy(a.start),h.y<u.y?S.end.copy(c.end):S.end.copy(a.end)),!0)}})();Un.prototype.distanceToPoint=(function(){const s=new I;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();Un.prototype.distanceToTriangle=(function(){const s=new I,e=new I,t=["a","b","c"],n=new ci,i=new ci;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l,!0))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=t[h],g=o[d];this.closestPointToPoint(g,s),f=g.distanceToSquared(s),f<u&&(u=f,a&&a.copy(s),c&&c.copy(g));const x=this[d];o.closestPointToPoint(x,s),f=x.distanceToSquared(s),f<u&&(u=f,a&&a.copy(x),c&&c.copy(s))}for(let h=0;h<3;h++){const f=t[h],d=t[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){const x=t[g],m=t[(g+1)%3];i.set(o[x],o[m]),kl(n,i,s,e);const p=s.distanceToSquared(e);p<u&&(u=p,a&&a.copy(s),c&&c.copy(e))}}return Math.sqrt(u)}})();class $t{constructor(e,t,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new ve,this.invMatrix=new ve,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new li),this.alignedSatBounds=new Array(3).fill().map(()=>new li),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}$t.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*l|2*u|4*h,d=i[f];d.x=l?n.x:t.x,d.y=u?n.y:t.y,d.z=h?n.z:t.z,d.applyMatrix4(e)}const r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){const u=o[l],h=r[l],f=1<<l,d=i[f];u.subVectors(a,d),h.setFromPoints(u,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();$t.prototype.intersectsBox=(function(){const s=new li;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(s.setFromBox(l,t),u.isSeparated(s))return!1}return!0}})();$t.prototype.intersectsTriangle=(function(){const s=new Un,e=new Array(3),t=new li,n=new li,i=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let f=0;f<3;f++){const d=a[f],g=c[f];if(t.setFromPoints(g,e),d.isSeparated(t))return!1}const l=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){const d=l[f],g=u[f];if(t.setFromPoints(g,h),d.isSeparated(t))return!1}for(let f=0;f<3;f++){const d=c[f];for(let g=0;g<4;g++){const x=u[g];if(i.crossVectors(d,x),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}})();$t.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();$t.prototype.distanceToPoint=(function(){const s=new I;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();$t.prototype.distanceToBox=(function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new ci),t=new Array(12).fill().map(()=>new ci),n=new I,i=new I;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const u=a*a,h=o.min,f=o.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];i.copy(p).clamp(h,f);const v=p.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(p),l&&l.copy(i),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const y=(m+1)%3,_=(m+2)%3,S=p<<y|v<<_,A=1<<m|p<<y|v<<_,b=d[S],R=d[A];e[x].set(b,R);const M=s[m],C=s[y],L=s[_],D=t[x],B=D.start,H=D.end;B[M]=h[M],B[C]=p?h[C]:f[C],B[L]=v?h[L]:f[C],H[M]=f[M],H[C]=p?h[C]:f[C],H[L]=v?h[L]:f[C],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){i.x=m?f.x:h.x,i.y=p?f.y:h.y,i.z=v?f.z:h.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(i),y<u))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=e[m];for(let v=0;v<12;v++){const y=t[v];kl(p,y,n,i);const _=n.distanceToSquared(i);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(i),_<u))return Math.sqrt(_)}}return Math.sqrt(g)}})();class Py extends Ol{constructor(){super(()=>new Un)}}const vn=new Py,rr=new I,tc=new I;function Iy(s,e,t={},n=0,i=1/0){const r=n*n,o=i*i;let a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>(rr.copy(e).clamp(u.min,u.max),rr.distanceToSquared(e)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,rr);const f=e.distanceToSquared(rr);return f<a&&(tc.copy(rr),a=f,c=h),f<r}}),a===1/0)return null;const l=Math.sqrt(a);return t.point?t.point.copy(tc):t.point=tc.clone(),t.distance=l,t.faceIndex=c,t}const yo=parseInt(Rr)>=169,Ly=parseInt(Rr)<=161,ki=new I,Vi=new I,Hi=new I,Mo=new Le,So=new Le,To=new Le,Nh=new I,Fh=new I,Bh=new I,or=new I;function Dy(s,e,t,n,i,r,o,a){let c;if(r===qt?c=s.intersectTriangle(n,t,e,!0,i):c=s.intersectTriangle(e,t,n,r!==an,i),c===null)return null;const l=s.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function Oh(s,e,t,n,i,r,o,a,c,l,u){ki.fromBufferAttribute(e,r),Vi.fromBufferAttribute(e,o),Hi.fromBufferAttribute(e,a);const h=Dy(s,ki,Vi,Hi,or,c,l,u);if(h){if(n){Mo.fromBufferAttribute(n,r),So.fromBufferAttribute(n,o),To.fromBufferAttribute(n,a),h.uv=new Le;const d=Lt.getInterpolation(or,ki,Vi,Hi,Mo,So,To,h.uv);yo||(h.uv=d)}if(i){Mo.fromBufferAttribute(i,r),So.fromBufferAttribute(i,o),To.fromBufferAttribute(i,a),h.uv1=new Le;const d=Lt.getInterpolation(or,ki,Vi,Hi,Mo,So,To,h.uv1);yo||(h.uv1=d),Ly&&(h.uv2=h.uv1)}if(t){Nh.fromBufferAttribute(t,r),Fh.fromBufferAttribute(t,o),Bh.fromBufferAttribute(t,a),h.normal=new I;const d=Lt.getInterpolation(or,ki,Vi,Hi,Nh,Fh,Bh,h.normal);h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1),yo||(h.normal=d)}const f={a:r,b:o,c:a,normal:new I,materialIndex:0};if(Lt.getNormal(ki,Vi,Hi,f.normal),h.face=f,h.faceIndex=r,yo){const d=new I;Lt.getBarycoord(or,ki,Vi,Hi,d),h.barycoord=d}}return h}function zh(s){return s&&s.isMaterial?s.side:s}function ca(s,e,t,n,i,r,o){const a=n*3;let c=a+0,l=a+1,u=a+2;const{index:h,groups:f}=s;s.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:d,normal:g,uv:x,uv1:m}=s.attributes;if(Array.isArray(e)){const p=n*3;for(let v=0,y=f.length;v<y;v++){const{start:_,count:S,materialIndex:A}=f[v];if(p>=_&&p<_+S){const b=zh(e[A]),R=Oh(t,d,g,x,m,c,l,u,b,r,o);if(R)if(R.faceIndex=n,R.face.materialIndex=A,i)i.push(R);else return R}}}else{const p=zh(e),v=Oh(t,d,g,x,m,c,l,u,p,r,o);if(v)if(v.faceIndex=n,v.face.materialIndex=0,i)i.push(v);else return v}return null}function xt(s,e,t,n){const i=s.a,r=s.b,o=s.c;let a=e,c=e+1,l=e+2;t&&(a=t.getX(a),c=t.getX(c),l=t.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Uy(s,e,t,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++)ca(c,e,t,u,r,o,a)}function Ny(s,e,t,n,i,r,o){const{geometry:a,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=ca(a,e,t,h,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function Fy(s,e,t,n,i,r,o){const{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let u=s,h=e+s;u<h;u++){let f;if(f=u,xt(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,r))return!0}return!1}function By(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,o,a,c,l=0;const u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const x=f*2;if(yt(x,a)){const m=zt(f,o),p=Xt(x,a);let v=1/0,y=1/0,_=1/0,S=-1/0,A=-1/0,b=-1/0;for(let R=3*m,T=3*(m+p);R<T;R++){let M=n[R];const C=i.getX(M),L=i.getY(M),D=i.getZ(M);C<v&&(v=C),C>S&&(S=C),L<y&&(y=L),L>A&&(A=L),D<_&&(_=D),D>b&&(b=D)}return c[f+0]!==v||c[f+1]!==y||c[f+2]!==_||c[f+3]!==S||c[f+4]!==A||c[f+5]!==b?(c[f+0]=v,c[f+1]=y,c[f+2]=_,c[f+3]=S,c[f+4]=A,c[f+5]=b,!0):!1}else{const m=bt(f),p=At(f,o);let v=g,y=!1,_=!1;if(e){if(!v){const M=m/vt+d/Ot,C=p/vt+d/Ot;y=e.has(M),_=e.has(C),v=!y&&!_}}else y=!0,_=!0;const S=v||y,A=v||_;let b=!1;S&&(b=h(m,d,v));let R=!1;A&&(R=h(p,d,v));const T=b||R;if(T)for(let M=0;M<3;M++){const C=m+M,L=p+M,D=c[C],B=c[C+3],H=c[L],G=c[L+3];c[f+M]=D<H?D:H,c[f+M+3]=B>G?B:G}return T}}}function Ri(s,e,t,n,i){let r,o,a,c,l,u;const h=1/t.direction.x,f=1/t.direction.y,d=1/t.direction.z,g=t.origin.x,x=t.origin.y,m=t.origin.z;let p=e[s],v=e[s+3],y=e[s+1],_=e[s+3+1],S=e[s+2],A=e[s+3+2];return h>=0?(r=(p-g)*h,o=(v-g)*h):(r=(v-g)*h,o=(p-g)*h),f>=0?(a=(y-x)*f,c=(_-x)*f):(a=(_-x)*f,c=(y-x)*f),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),d>=0?(l=(S-m)*d,u=(A-m)*d):(l=(A-m)*d,u=(S-m)*d),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=i&&o>=n)}function Oy(s,e,t,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++){let f=l?l[u]:u;ca(c,e,t,f,r,o,a)}}function zy(s,e,t,n,i,r,o){const{geometry:a,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=ca(a,e,t,c?c[h]:h,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function ky(s,e,t,n,i,r,o){const{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let u=s,h=e+s;u<h;u++){let f;if(f=t.resolveTriangleIndex(u),xt(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,r))return!0}return!1}function Vy(s,e,t,n,i,r,o){ot.setBuffer(s._roots[e]),tl(0,s,t,n,i,r,o),ot.clearBuffer()}function tl(s,e,t,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ot,u=s*2;if(yt(u,c)){const f=zt(s,l),d=Xt(u,c);Uy(e,t,n,f,d,i,r,o)}else{const f=bt(s);Ri(f,a,n,r,o)&&tl(f,e,t,n,i,r,o);const d=At(s,l);Ri(d,a,n,r,o)&&tl(d,e,t,n,i,r,o)}}const Hy=["x","y","z"];function Gy(s,e,t,n,i,r){ot.setBuffer(s._roots[e]);const o=nl(0,s,t,n,i,r);return ot.clearBuffer(),o}function nl(s,e,t,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:c}=ot;let l=s*2;if(yt(l,a)){const h=zt(s,c),f=Xt(l,a);return Ny(e,t,n,h,f,i,r)}else{const h=Bl(s,c),f=Hy[h],g=n.direction[f]>=0;let x,m;g?(x=bt(s),m=At(s,c)):(x=At(s,c),m=bt(s));const v=Ri(x,o,n,i,r)?nl(x,e,t,n,i,r):null;if(v){const S=v.point[f];if(g?S<=o[m+h]:S>=o[m+h+3])return v}const _=Ri(m,o,n,i,r)?nl(m,e,t,n,i,r):null;return v&&_?v.distance<=_.distance?v:_:v||_||null}}const Eo=new ct,Ms=new Un,Ss=new Un,ar=new ve,kh=new $t,bo=new $t;function Wy(s,e,t,n){ot.setBuffer(s._roots[e]);const i=il(0,s,t,n);return ot.clearBuffer(),i}function il(s,e,t,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ot;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),kh.set(t.boundingBox.min,t.boundingBox.max,n),i=kh),yt(c,o)){const u=e.geometry,h=u.index,f=u.attributes.position,d=t.index,g=t.attributes.position,x=zt(s,a),m=Xt(c,o);if(ar.copy(n).invert(),t.boundsTree)return pt(s,r,bo),bo.matrix.copy(ar),bo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>bo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let y=x*3,_=(m+x)*3;y<_;y+=3)if(xt(Ss,y,h,f),Ss.needsUpdate=!0,v.intersectsTriangle(Ss))return!0;return!1}});{const p=aa(t);for(let v=x*3,y=(m+x)*3;v<y;v+=3){xt(Ms,v,h,f),Ms.a.applyMatrix4(ar),Ms.b.applyMatrix4(ar),Ms.c.applyMatrix4(ar),Ms.needsUpdate=!0;for(let _=0,S=p*3;_<S;_+=3)if(xt(Ss,_,d,g),Ss.needsUpdate=!0,Ms.intersectsTriangle(Ss))return!0}}}else{const u=bt(s),h=At(s,a);return pt(u,r,Eo),!!(i.intersectsBox(Eo)&&il(u,e,t,n,i)||(pt(h,r,Eo),i.intersectsBox(Eo)&&il(h,e,t,n,i)))}}const Ao=new ve,nc=new $t,cr=new $t,Xy=new I,qy=new I,Yy=new I,jy=new I;function Ky(s,e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),nc.set(e.boundingBox.min,e.boundingBox.max,t),nc.needsUpdate=!0;const a=s.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,h=e.index,f=vn.getPrimitive(),d=vn.getPrimitive();let g=Xy,x=qy,m=null,p=null;i&&(m=Yy,p=jy);let v=1/0,y=null,_=null;return Ao.copy(t).invert(),cr.matrix.copy(Ao),s.shapecast({boundsTraverseOrder:S=>nc.distanceToBox(S),intersectsBounds:(S,A,b)=>b<v&&b<o?(A&&(cr.min.copy(S.min),cr.max.copy(S.max),cr.needsUpdate=!0),!0):!1,intersectsRange:(S,A)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:R=>cr.distanceToBox(R),intersectsBounds:(R,T,M)=>M<v&&M<o,intersectsRange:(R,T)=>{for(let M=R,C=R+T;M<C;M++){xt(d,3*M,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let L=S,D=S+A;L<D;L++){xt(f,3*L,l,c),f.needsUpdate=!0;const B=f.distanceToTriangle(d,g,m);if(B<v&&(x.copy(g),p&&p.copy(m),v=B,y=L,_=M),B<r)return!0}}}});{const b=aa(e);for(let R=0,T=b;R<T;R++){xt(d,3*R,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let M=S,C=S+A;M<C;M++){xt(f,3*M,l,c),f.needsUpdate=!0;const L=f.distanceToTriangle(d,g,m);if(L<v&&(x.copy(g),p&&p.copy(m),v=L,y=M,_=R),L<r)return!0}}}}}),vn.releasePrimitive(f),vn.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Ao),x.applyMatrix4(Ao),i.distance=x.sub(i.point).length(),i.faceIndex=_),n)}function $y(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,o,a,c,l=0;const u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const x=f*2;if(yt(x,a)){const m=zt(f,o),p=Xt(x,a);let v=1/0,y=1/0,_=1/0,S=-1/0,A=-1/0,b=-1/0;for(let R=m,T=m+p;R<T;R++){const M=3*s.resolveTriangleIndex(R);for(let C=0;C<3;C++){let L=M+C;L=n?n[L]:L;const D=i.getX(L),B=i.getY(L),H=i.getZ(L);D<v&&(v=D),D>S&&(S=D),B<y&&(y=B),B>A&&(A=B),H<_&&(_=H),H>b&&(b=H)}}return c[f+0]!==v||c[f+1]!==y||c[f+2]!==_||c[f+3]!==S||c[f+4]!==A||c[f+5]!==b?(c[f+0]=v,c[f+1]=y,c[f+2]=_,c[f+3]=S,c[f+4]=A,c[f+5]=b,!0):!1}else{const m=bt(f),p=At(f,o);let v=g,y=!1,_=!1;if(e){if(!v){const M=m/vt+d/Ot,C=p/vt+d/Ot;y=e.has(M),_=e.has(C),v=!y&&!_}}else y=!0,_=!0;const S=v||y,A=v||_;let b=!1;S&&(b=h(m,d,v));let R=!1;A&&(R=h(p,d,v));const T=b||R;if(T)for(let M=0;M<3;M++){const C=m+M,L=p+M,D=c[C],B=c[C+3],H=c[L],G=c[L+3];c[f+M]=D<H?D:H,c[f+M+3]=B>G?B:G}return T}}}function Zy(s,e,t,n,i,r,o){ot.setBuffer(s._roots[e]),sl(0,s,t,n,i,r,o),ot.clearBuffer()}function sl(s,e,t,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ot,u=s*2;if(yt(u,c)){const f=zt(s,l),d=Xt(u,c);Oy(e,t,n,f,d,i,r,o)}else{const f=bt(s);Ri(f,a,n,r,o)&&sl(f,e,t,n,i,r,o);const d=At(s,l);Ri(d,a,n,r,o)&&sl(d,e,t,n,i,r,o)}}const Jy=["x","y","z"];function Qy(s,e,t,n,i,r){ot.setBuffer(s._roots[e]);const o=rl(0,s,t,n,i,r);return ot.clearBuffer(),o}function rl(s,e,t,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:c}=ot;let l=s*2;if(yt(l,a)){const h=zt(s,c),f=Xt(l,a);return zy(e,t,n,h,f,i,r)}else{const h=Bl(s,c),f=Jy[h],g=n.direction[f]>=0;let x,m;g?(x=bt(s),m=At(s,c)):(x=At(s,c),m=bt(s));const v=Ri(x,o,n,i,r)?rl(x,e,t,n,i,r):null;if(v){const S=v.point[f];if(g?S<=o[m+h]:S>=o[m+h+3])return v}const _=Ri(m,o,n,i,r)?rl(m,e,t,n,i,r):null;return v&&_?v.distance<=_.distance?v:_:v||_||null}}const wo=new ct,Ts=new Un,Es=new Un,lr=new ve,Vh=new $t,Ro=new $t;function eM(s,e,t,n){ot.setBuffer(s._roots[e]);const i=ol(0,s,t,n);return ot.clearBuffer(),i}function ol(s,e,t,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ot;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Vh.set(t.boundingBox.min,t.boundingBox.max,n),i=Vh),yt(c,o)){const u=e.geometry,h=u.index,f=u.attributes.position,d=t.index,g=t.attributes.position,x=zt(s,a),m=Xt(c,o);if(lr.copy(n).invert(),t.boundsTree)return pt(s,r,Ro),Ro.matrix.copy(lr),Ro.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Ro.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let y=x,_=m+x;y<_;y++)if(xt(Es,3*e.resolveTriangleIndex(y),h,f),Es.needsUpdate=!0,v.intersectsTriangle(Es))return!0;return!1}});{const p=aa(t);for(let v=x,y=m+x;v<y;v++){const _=e.resolveTriangleIndex(v);xt(Ts,3*_,h,f),Ts.a.applyMatrix4(lr),Ts.b.applyMatrix4(lr),Ts.c.applyMatrix4(lr),Ts.needsUpdate=!0;for(let S=0,A=p*3;S<A;S+=3)if(xt(Es,S,d,g),Es.needsUpdate=!0,Ts.intersectsTriangle(Es))return!0}}}else{const u=bt(s),h=At(s,a);return pt(u,r,wo),!!(i.intersectsBox(wo)&&ol(u,e,t,n,i)||(pt(h,r,wo),i.intersectsBox(wo)&&ol(h,e,t,n,i)))}}const Co=new ve,ic=new $t,ur=new $t,tM=new I,nM=new I,iM=new I,sM=new I;function rM(s,e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),ic.set(e.boundingBox.min,e.boundingBox.max,t),ic.needsUpdate=!0;const a=s.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,h=e.index,f=vn.getPrimitive(),d=vn.getPrimitive();let g=tM,x=nM,m=null,p=null;i&&(m=iM,p=sM);let v=1/0,y=null,_=null;return Co.copy(t).invert(),ur.matrix.copy(Co),s.shapecast({boundsTraverseOrder:S=>ic.distanceToBox(S),intersectsBounds:(S,A,b)=>b<v&&b<o?(A&&(ur.min.copy(S.min),ur.max.copy(S.max),ur.needsUpdate=!0),!0):!1,intersectsRange:(S,A)=>{if(e.boundsTree){const b=e.boundsTree;return b.shapecast({boundsTraverseOrder:R=>ur.distanceToBox(R),intersectsBounds:(R,T,M)=>M<v&&M<o,intersectsRange:(R,T)=>{for(let M=R,C=R+T;M<C;M++){const L=b.resolveTriangleIndex(M);xt(d,3*L,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let D=S,B=S+A;D<B;D++){const H=s.resolveTriangleIndex(D);xt(f,3*H,l,c),f.needsUpdate=!0;const G=f.distanceToTriangle(d,g,m);if(G<v&&(x.copy(g),p&&p.copy(m),v=G,y=D,_=M),G<r)return!0}}}})}else{const b=aa(e);for(let R=0,T=b;R<T;R++){xt(d,3*R,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let M=S,C=S+A;M<C;M++){const L=s.resolveTriangleIndex(M);xt(f,3*L,l,c),f.needsUpdate=!0;const D=f.distanceToTriangle(d,g,m);if(D<v&&(x.copy(g),p&&p.copy(m),v=D,y=M,_=R),D<r)return!0}}}}}),vn.releasePrimitive(f),vn.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Co),x.applyMatrix4(Co),i.distance=x.sub(i.point).length(),i.faceIndex=_),n)}function Hh(s,e,t){return s===null?null:(s.point.applyMatrix4(e.matrixWorld),s.distance=s.point.distanceTo(t.ray.origin),s.object=e,s)}const Po=new $t,Io=new Vs,Gh=new I,Wh=new ve,Xh=new I,sc=["getX","getY","getZ"];class Qo extends Ay{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,r=e._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:o}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));const a=new Qo(t,{...n,[Fl]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const u=new mt(e.index,1,!1);t.setIndex(u)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a;function c(l){for(let u=0;u<l.length;u++){const h=l[u],f=new Uint32Array(h),d=new Uint16Array(h);for(let g=0,x=h.byteLength/Ot;g<x;g++){const m=vt*g,p=2*m;yt(p,d)||(f[m+6]=f[m+6]/vt-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),t={...t,maxLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){const i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,l=(r?r[e]:e)*3;let u=l+0,h=l+1,f=l+2;a&&(u=a[u],h=a[h],f=a[f]);for(let d=0;d<3;d++){const g=o[sc[d]](u),x=o[sc[d]](h),m=o[sc[d]](f);let p=g;x<p&&(p=x),m<p&&(p=m);let v=g;x>v&&(v=x),m>v&&(v=m),t[n+d]=p,t[n+d+3]=v}return t}computePrimitiveBounds(e,t,n){const i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=o.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=o.array,u=o.offset||0;let h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);const f=["getX","getY","getZ"],d=n.offset;for(let g=e,x=e+t;g<x;g++){const p=(r?r[g]:g)*3,v=(g-d)*6;let y=p+0,_=p+1,S=p+2;a&&(y=a[y],_=a[_],S=a[S]),c||(y=y*h+u,_=_*h+u,S=S*h+u);for(let A=0;A<3;A++){let b,R,T;c?(b=o[f[A]](y),R=o[f[A]](_),T=o[f[A]](S)):(b=l[y+A],R=l[_+A],T=l[S+A]);let M=b;R<M&&(M=R),T<M&&(M=T);let C=b;R>C&&(C=R),T>C&&(C=T);const L=(C-M)/2,D=A*2;n[v+D+0]=M+L,n[v+D+1]=L+(Math.abs(M)+L)*Go}}return n}raycastObject3D(e,t,n=[]){const{material:i}=e;if(i===void 0)return;Wh.copy(e.matrixWorld).invert(),Io.copy(t.ray).applyMatrix4(Wh),Xh.setFromMatrixScale(e.matrixWorld),Gh.copy(Io.direction).multiply(Xh);const r=Gh.length(),o=t.near/r,a=t.far/r;if(t.firstHitOnly===!0){let c=this.raycastFirst(Io,i,o,a);c=Hh(c,e,t),c&&n.push(c)}else{const c=this.raycast(Io,i,o,a);for(let l=0,u=c.length;l<u;l++){const h=Hh(c[l],e,t);h&&n.push(h)}}return n}refit(e=null){return(this.indirect?$y:By)(this,e)}raycast(e,t=Dn,n=0,i=1/0){const r=this._roots,o=[],a=this.indirect?Zy:Vy;for(let c=0,l=r.length;c<l;c++)a(this,c,t,e,o,n,i);return o}raycastFirst(e,t=Dn,n=0,i=1/0){const r=this._roots;let o=null;const a=this.indirect?Qy:Gy;for(let c=0,l=r.length;c<l;c++){const u=a(this,c,t,e,n,i);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(e,t){let n=!1;const i=this._roots,r=this.indirect?eM:Wy;for(let o=0,a=i.length;o<a&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){const t=vn.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?ky:Fy});return vn.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const o=vn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);xt(o,x*3,a,c)}:g=>{xt(o,g*3,a,c)},u=vn.getPrimitive(),h=e.geometry.index,f=e.geometry.attributes.position,d=e.indirect?g=>{const x=e.resolveTriangleIndex(g);xt(u,x*3,h,f)}:g=>{xt(u,g*3,h,f)};if(r){if(!(e instanceof Qo))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(x,m,p,v,y,_,S,A)=>{for(let b=p,R=p+v;b<R;b++){d(b),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let T=x,M=x+m;T<M;T++)if(l(T),o.needsUpdate=!0,r(o,u,T,b,y,_,S,A))return!0}return!1};if(i){const x=i;i=function(m,p,v,y,_,S,A,b){return x(m,p,v,y,_,S,A,b)?!0:g(m,p,v,y,_,S,A,b)}}else i=g}return super.bvhcast(e,t,{intersectsRanges:i})}intersectsBox(e,t){return Po.set(e.min,e.max,t),Po.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Po.intersectsBox(n),intersectsTriangle:n=>Po.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,o=1/0){return(this.indirect?rM:Ky)(this,e,t,n,i,r,o)}closestPointToPoint(e,t={},n=0,i=1/0){return Iy(this,e,t,n,i)}}const As={Mesh:ut.prototype.raycast,Line:Lr.prototype.raycast,LineSegments:Rl.prototype.raycast,LineLoop:Cl.prototype.raycast,Points:Dr.prototype.raycast,BatchedMesh:em.prototype.raycast},Pt=new ut,Lo=[];function oM(s,e){if(this.isBatchedMesh)aM.call(this,s,e);else{const{geometry:t}=this;if(t.boundsTree)t.boundsTree.raycastObject3D(this,s,e);else{let n;if(this instanceof ut)n=As.Mesh;else if(this instanceof Rl)n=As.LineSegments;else if(this instanceof Cl)n=As.LineLoop;else if(this instanceof Lr)n=As.Line;else if(this instanceof Dr)n=As.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,s,e)}}}function aM(s,e){if(this.boundsTrees){const t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Pt.material=this.material,Pt.geometry=this.geometry;const o=Pt.geometry.boundsTree,a=Pt.geometry.drawRange;Pt.geometry.boundingSphere===null&&(Pt.geometry.boundingSphere=new jt);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const u=n[c].geometryIndex;if(Pt.geometry.boundsTree=t[u],this.getMatrixAt(c,Pt.matrixWorld).premultiply(r),!Pt.geometry.boundsTree){this.getBoundingBoxAt(u,Pt.geometry.boundingBox),this.getBoundingSphereAt(u,Pt.geometry.boundingSphere);const h=i[u];Pt.geometry.setDrawRange(h.start,h.count)}Pt.raycast(s,Lo);for(let h=0,f=Lo.length;h<f;h++){const d=Lo[h];d.object=this,d.batchId=c,e.push(d)}Lo.length=0}Pt.geometry.boundsTree=o,Pt.geometry.drawRange=a,Pt.material=null,Pt.geometry=null}else As.BatchedMesh.call(this,s,e)}function cM(s={}){const{type:e=Qo}=s;return this.boundsTree=new e(this,s),this.boundsTree}function lM(){this.boundsTree=null}Rt.prototype.computeBoundsTree=cM;Rt.prototype.disposeBoundsTree=lM;ut.prototype.raycast=oM;const en=new Op;en.background=new Re(8900331);en.fog=new El(12179696,6e-4);const we=new Wt(75,innerWidth/innerHeight,1,5e3);we.position.set(68.6,29.1,-279.6);we.lookAt(68.6+-.061,29.1+-.056,-279.6+.997);const fn=new xv({antialias:!0});fn.setPixelRatio(Math.min(devicePixelRatio,2));fn.setSize(innerWidth,innerHeight);fn.shadowMap.enabled=!0;fn.shadowMap.type=Kh;fn.toneMapping=Zh;fn.toneMappingExposure=1.2;document.body.appendChild(fn.domElement);en.add(new Mm(8952251,.25));const Wn=new Af(16773324,3);Wn.position.set(600,300,100);Wn.castShadow=!0;Wn.shadow.mapSize.set(2048,2048);Wn.shadow.camera.near=1;Wn.shadow.camera.far=2e3;Wn.shadow.camera.left=-600;Wn.shadow.camera.right=600;Wn.shadow.camera.top=600;Wn.shadow.camera.bottom=-600;en.add(Wn);const Ji=new bf,uM=Ji.load("./Water_1_M_Normal.jpg",s=>{s.wrapS=s.wrapT=hn}),hM=Ji.load("./Water_2_M_Normal.jpg",s=>{s.wrapS=s.wrapT=hn}),fM=Ji.load("./Water Texture 002/Water_002_NORM.jpg",s=>{s.wrapS=s.wrapT=hn}),dM=Ji.load("./Water Texture 002/Water_002_ROUGH.jpg",s=>{s.wrapS=s.wrapT=hn}),pM=Ji.load("./Rock_Color.png",s=>{s.wrapS=s.wrapT=hn}),mM=Ji.load("./Rock_Normal.png",s=>{s.wrapS=s.wrapT=hn}),gM=Ji.load("./Rock_Roughness.png",s=>{s.wrapS=s.wrapT=hn}),kf=new ai({side:an,uniforms:{time:{value:0},normalMap1:{value:uM},normalMap2:{value:hM},rockColorMap:{value:pM},rockNormalMap:{value:mM},rockRoughnessMap:{value:gM},waterDetailMap:{value:fM},waterRoughnessMap:{value:dM},sunDir:{value:new I(600,300,100).normalize()},sunColor:{value:new Re(1,.98,.9)}},vertexColors:!0,vertexShader:`
    attribute float wetRock;
    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec3 vColor;
    varying float vWetRock;

    void main() {
      vUv = uv;
      vColor = color.rgb;
      vWetRock = wetRock;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPos = worldPos.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform float time;
    uniform sampler2D normalMap1;
    uniform sampler2D normalMap2;
    uniform sampler2D rockColorMap;
    uniform sampler2D rockNormalMap;
    uniform sampler2D rockRoughnessMap;
    uniform sampler2D waterDetailMap;
    uniform sampler2D waterRoughnessMap;
    uniform vec3 sunDir;
    uniform vec3 sunColor;

    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec3 vColor;
    varying float vWetRock;

    void main() {
      if (!gl_FrontFacing) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
      float waterMask = smoothstep(0.1, 0.5, vColor.r + vColor.g + vColor.b);

      // Water normal maps
      vec2 uv1 = vWorldPos.xz * 0.08 + vec2(0.0, time * -0.4);
      vec2 uv2 = vWorldPos.xz * 0.06 + vec2(time * -0.05, time * -0.25);
      vec3 nt1 = texture2D(normalMap1, uv1).rgb * 2.0 - 1.0;
      vec3 nt2 = texture2D(normalMap2, uv2).rgb * 2.0 - 1.0;
      vec3 tn  = normalize(nt1 + nt2);

      // Rock textures
      vec2 rockUv = vWorldPos.zx * 0.05;
      vec3 rockSample = texture2D(rockColorMap, rockUv).rgb;
      float rockLuma = dot(rockSample, vec3(0.299, 0.587, 0.114));
      vec3 rockAlbedo = mix(vec3(rockLuma), rockSample, 0.2);
      vec3 rockNorm   = texture2D(rockNormalMap, rockUv).rgb * 2.0 - 1.0;
      float rockRough = texture2D(rockRoughnessMap, rockUv).r;

      // Slope-based whiteness — steep = whitewater, flat = calm
      float slope = 1.0 - abs(vWorldNormal.y);
      float slopeFoam = smoothstep(0.001, 0.02, slope) * waterMask;

      // Foam from normal map turbulence
      float foam = smoothstep(0.0, 0.6, (nt1.z + nt2.z) * 0.5) * waterMask;

      // Water 002 detail — only on calm water
      vec2 detailUv = vWorldPos.zx * 0.12 + vec2(time * -0.3, 0.0);
      vec3 wd = texture2D(waterDetailMap, detailUv).rgb * 2.0 - 1.0;
      vec3 calmWaterNorm = normalize(tn + wd * (1.0 - slopeFoam) * 1.2);

      // Blended normal
      vec3 N = normalize(mix(
        vWorldNormal + rockNorm * 0.6,
        vWorldNormal + calmWaterNorm * 2.5,
        waterMask
      ));

      // Lighting
      float diff = max(dot(N, sunDir), 0.0);
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      vec3 halfVec = normalize(sunDir + viewDir);
      float spec = pow(max(dot(N, halfVec), 0.0), 128.0);

      // Rock color with lighting
      vec3 rockLit = rockAlbedo * (0.18 + 0.82 * diff) * sunColor
                   + sunColor * spec * 0.05 * (1.0 - rockRough);

      // Slope drives base color: flat = teal, steep = white
      // Normal map adds subtle surface churn on top
      vec3 waterColor = mix(vec3(0.08, 0.45, 0.42), vec3(1.0, 1.0, 1.0), slopeFoam);
      waterColor = mix(waterColor, vec3(1.0, 1.0, 1.0), foam * 0.25 * slopeFoam);
      float waterRough = texture2D(waterRoughnessMap, uv1).r;
      float waterSpec = mix(spec * (1.0 - waterRough) * 1.2, spec * 0.9, slopeFoam);
      vec3 waterLit = waterColor * (0.4 + 0.6 * diff) + vec3(waterSpec);

      // Wet rock — exponential falloff: full effect at boundary, drops fast further out
      float wetF = smoothstep(0.0, 0.88, vWetRock);
      wetF = wetF * wetF * wetF;
      rockLit *= 1.0 - wetF * 0.60 * (1.0 - waterMask);

      vec3 color = mix(rockLit, waterLit, waterMask);

      gl_FragColor = vec4(color, 1.0);
    }
  `}),qs=2e3,Fr=5e3,Rn=new Float32Array(qs*3),Mi=new Float32Array(qs*3),ea=new Float32Array(qs),_M=new Float32Array(qs).fill(-999),Vl=new Rt;Vl.setAttribute("position",new mt(Rn,3));const xM=new ia({color:14545136,size:.08,transparent:!0,opacity:.3,depthWrite:!1,sizeAttenuation:!0}),Vf=new Dr(Vl,xM);Vf.frustumCulled=!1;en.add(Vf);const Xi=new Float32Array(Fr*3),Gi=new Float32Array(Fr*3),Xo=new Float32Array(Fr),Hl=new Rt;Hl.setAttribute("position",new mt(Xi,3));const vM=new ia({color:15267060,size:.14,transparent:!0,opacity:.1,depthWrite:!1,sizeAttenuation:!0}),Hf=new Dr(Hl,vM);Hf.frustumCulled=!1;en.add(Hf);let on=[],vi=0,al=null;function yM(s){on=s,vi=s.length/6;const e=8,t=new Map;for(let o=0;o<vi;o++){const a=Math.floor(on[o*6]/e),c=Math.floor(on[o*6+2]/e),l=a*1e5+c;t.set(l,(t.get(l)||0)+1)}const n=new Float32Array(vi);let i=0;for(let o=0;o<vi;o++){const a=Math.floor(on[o*6]/e),c=Math.floor(on[o*6+2]/e);let l=0;for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++)l+=t.get((a+f)*1e5+(c+d))||0;const u=on[o*6+5],h=l>3?l*l*(1+u*4):0;n[o]=h,i+=h}al=new Float32Array(vi);let r=0;for(let o=0;o<vi;o++)r+=n[o]/i,al[o]=r;for(let o=0;o<qs;o++)ea[o]=Math.random()*1.2;for(let o=0;o<Fr;o++)Xo[o]=Math.random()*2}function Gf(){const s=Math.random();let e=0,t=vi-1;for(;e<t;){const n=e+t>>1;al[n]<s?e=n+1:t=n}return e}let qh=0;function Yh(s){const e=Gf()*6,t=on[e]+(Math.random()-.5)*.8,n=on[e+1]+Math.random()*.2,i=on[e+2]+(Math.random()-.5)*.8,r=on[e+5];Rn[s*3]=t,Rn[s*3+1]=n,Rn[s*3+2]=i;const o=r*(Math.random()*3+1.5);Mi[s*3]=(Math.random()-.5)*1,Mi[s*3+1]=r*(Math.random()*2.5+1),Mi[s*3+2]=o+(Math.random()-.5)*.6,ea[s]=4,_M[s]=n-.3}function MM(s){if(vi!==0){qh++;for(let e=0;e<qs;e++){if(ea[e]-=s,ea[e]<=0){Yh(e);continue}if(Rn[e*3]+=Mi[e*3]*s,Rn[e*3+1]+=Mi[e*3+1]*s,Rn[e*3+2]+=Mi[e*3+2]*s,Mi[e*3+1]-=7*s,Mi[e*3+1]<0&&Gt&&qh%5===e%5){Bt.set(new I(Rn[e*3],Rn[e*3+1]+3,Rn[e*3+2]),ji);const t=Bt.intersectObject(Gt,!0);t.length>0&&Rn[e*3+1]<=t[0].point.y+.15&&Yh(e)}}Vl.attributes.position.needsUpdate=!0;for(let e=0;e<Fr;e++)if(Xo[e]-=s,Xo[e]<=0){const t=Gf()*6;Xi[e*3]=on[t]+(Math.random()-.5)*2.5,Xi[e*3+1]=on[t+1]+Math.random()*.3,Xi[e*3+2]=on[t+2]+(Math.random()-.5)*2.5,Gi[e*3]=(Math.random()-.5)*.6,Gi[e*3+1]=Math.random()*1.5+.3,Gi[e*3+2]=Math.random()*1.5+.5,Xo[e]=Math.random()*2+1}else Xi[e*3]+=Gi[e*3]*s,Xi[e*3+1]+=Gi[e*3+1]*s,Xi[e*3+2]+=Gi[e*3+2]*s,Gi[e*3+1]-=4*s;Hl.attributes.position.needsUpdate=!0}}function SM(s,e=5,t=.72){const n=s.index,i=s.attributes.color;if(!n||!i)return;const r=i.count,o=n.count/3,a=new Uint8Array(r);for(let u=0;u<r;u++)a[u]=i.getX(u)+i.getY(u)+i.getZ(u)>.3?1:0;const c=new Float32Array(r);for(let u=0;u<o;u++){const h=n.getX(u*3),f=n.getX(u*3+1),d=n.getX(u*3+2);(a[h]||a[f]||a[d])&&(a[h]||(c[h]=1),a[f]||(c[f]=1),a[d]||(c[d]=1))}const l=new Float32Array(r);for(let u=0;u<e;u++){l.set(c);for(let h=0;h<o;h++){const f=n.getX(h*3),d=n.getX(h*3+1),g=n.getX(h*3+2);if(a[f]||a[d]||a[g])continue;const x=Math.max(c[f],c[d],c[g]);if(x===0)continue;const m=x*t;m>l[f]&&(l[f]=m),m>l[d]&&(l[d]=m),m>l[g]&&(l[g]=m)}c.set(l)}s.setAttribute("wetRock",new mt(c,1))}let Gt=null;const TM=new Lf;TM.load("./GREATFALLS.glb",({scene:s})=>{s.traverse(a=>{a.isMesh&&(a.geometry.computeVertexNormals(),SM(a.geometry),a.geometry.computeBoundsTree(),a.material=kf,a.castShadow=!1,a.receiveShadow=!1)}),Gt=s,en.add(s);const e=new ct().setFromObject(s),t=new I,n=new I;e.getSize(t),e.getCenter(n);const i=new ut(new Ur(t.x,t.z),new In({color:0}));i.rotation.x=-Math.PI/2,i.position.set(n.x,e.min.y-1,n.z),en.add(i);let r=null;if(s.traverse(a=>{a.isMesh&&!r&&(r=a)}),r&&r.geometry.index){const a=r.geometry,c=a.attributes.position,l=a.index;r.updateWorldMatrix(!0,!1);const u=new Map;for(let m=0;m<l.count;m+=3){const p=l.getX(m),v=l.getX(m+1),y=l.getX(m+2);for(const[_,S]of[[p,v],[v,y],[y,p]]){const A=_<S?`${_}_${S}`:`${S}_${_}`;u.set(A,(u.get(A)||0)+1)}}const h=[],f=[],d=new I,g=e.min.y-1;for(const[m,p]of u){if(p!==1)continue;const[v,y]=m.split("_").map(Number);d.fromBufferAttribute(c,v).applyMatrix4(r.matrixWorld);const _=d.x,S=d.y,A=d.z;d.fromBufferAttribute(c,y).applyMatrix4(r.matrixWorld);const b=d.x,R=d.y,T=d.z,M=h.length/3;h.push(_,S,A,b,R,T,_,g,A,b,g,T),f.push(M,M+2,M+1,M+1,M+2,M+3)}const x=new Rt;x.setAttribute("position",new un(h,3)),x.setIndex(f),en.add(new ut(x,new In({color:0,side:an})))}const o=[];if(r){const a=r.geometry.attributes.position,c=r.geometry.attributes.color,l=r.geometry.attributes.normal;if(c&&l){const u=new I;for(let h=0;h<a.count;h+=4){const f=c.getX(h)+c.getY(h)+c.getZ(h),d=Math.abs(l.getY(h));if(f>.5&&d<.92){u.fromBufferAttribute(a,h).applyMatrix4(r.matrixWorld);const g=1-d;let x=-l.getX(h),m=-l.getZ(h);const p=Math.sqrt(x*x+m*m);p>0&&(x/=p,m/=p),o.push(u.x,u.y,u.z,x,m,g)}}}}yM(o),Wf(),document.getElementById("loading").style.display="none",Gl.style.display="flex"});let je=null,ii=!1,wn=0;const EM=new sa({color:2250171,roughness:.25,metalness:.1}),bM=new Lf;function Wf(){if(!je||!Gt)return;Bt.set(new I(je.position.x,je.position.y+20,je.position.z),ji);const s=Bt.intersectObject(Gt,!0);s.length>0&&(je.position.y=s[0].point.y+.6)}bM.load("./Kayaker.glb",({scene:s})=>{s.traverse(e=>{e.isMesh&&(e.material=EM)}),s.scale.setScalar(1),s.position.set(16,-1,-242),s.rotation.y=Math.PI/2,en.add(s),je=s,Wf()});const Br=new ny(we,fn.domElement),Gl=document.getElementById("overlay"),Ar=document.getElementById("mode");document.getElementById("clip-fade");let oi=!1;const Xf=new I,qf=new Hn,cl=new I,Yf=new Hn;let ll=!1,ul=0;const AM=2.8;document.getElementById("go").addEventListener("click",()=>{if(Gl.style.display="none",Xf.copy(we.position),qf.copy(we.quaternion),je){const s=new I(-Math.sin(wn),0,-Math.cos(wn));cl.copy(je.position).addScaledVector(s,6).add(new I(0,2.5,0));const e=je.position.clone().add(new I(0,1.5,0));wr.copy(e);const t=new ve().lookAt(cl,e,new I(0,1,0));Yf.setFromRotationMatrix(t)}ll=!0,ul=0});Br.addEventListener("lock",()=>{oi=!0,Gl.style.display="none",Ar.textContent=Ls?"WALK":"FLY"});Br.addEventListener("unlock",()=>{oi=!1,Ls=!1,je?(wr.set(je.position.x,je.position.y+1.5,je.position.z),ii=!0,Ar.textContent="PLAY"):Ar.textContent="ORBIT"});function wM(){Br.unlock()}const Et=new Set;window.addEventListener("keydown",s=>{if(Et.add(s.code),s.code==="KeyG"&&oi&&PM(),s.code==="KeyF"&&ii&&(ii=!1,Br.lock()),s.code==="Escape"&&oi&&wM(),s.code==="Escape"&&!oi&&(ii=!ii,ii&&je&&wr.set(je.position.x,je.position.y+1.5,je.position.z),Ar.textContent=ii?"PLAY":"ORBIT"),s.code==="KeyP"){const e=we.position,t=new I;we.getWorldDirection(t),console.log(`position: (${e.x.toFixed(1)}, ${e.y.toFixed(1)}, ${e.z.toFixed(1)})  direction: (${t.x.toFixed(3)}, ${t.y.toFixed(3)}, ${t.z.toFixed(3)})`)}});window.addEventListener("keyup",s=>Et.delete(s.code));const bs=new yn(0,0,0,"YXZ"),rn=new I,Cn=new I,Do=new I,hl=new I(0,1,0);let xr=-1,fl=0,dl=0,jf=innerWidth/2,Kf=innerHeight/2;window.addEventListener("mousemove",s=>{jf=s.clientX,Kf=s.clientY});fn.domElement.addEventListener("mousedown",s=>{oi||(xr=s.button,fl=s.clientX,dl=s.clientY,s.button===1&&s.preventDefault())});fn.domElement.addEventListener("contextmenu",s=>s.preventDefault());window.addEventListener("mouseup",()=>{xr=-1});window.addEventListener("mousemove",s=>{if(oi||xr===-1)return;const e=s.clientX-fl,t=s.clientY-dl;fl=s.clientX,dl=s.clientY,xr===1&&(we.getWorldDirection(rn),Cn.crossVectors(rn,hl).normalize(),Do.crossVectors(Cn,rn).normalize(),s.metaKey?we.position.addScaledVector(rn,t*.4):s.shiftKey?(we.position.addScaledVector(Cn,-e*.2),we.position.addScaledVector(Do,t*.2)):(bs.setFromQuaternion(we.quaternion),bs.y-=e*.004,bs.x-=t*.004,bs.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,bs.x)),we.quaternion.setFromEuler(bs))),xr===2&&(we.getWorldDirection(rn),Cn.crossVectors(rn,hl).normalize(),Do.crossVectors(Cn,rn).normalize(),we.position.addScaledVector(Cn,-e*.2),we.position.addScaledVector(Do,t*.2))});let pl=50;window.addEventListener("wheel",s=>{if(oi)pl=Math.max(5,Math.min(500,pl-s.deltaY*.05));else{const e=jf/innerWidth*2-1,t=-(Kf/innerHeight)*2+1,n=new I(e,t,.5).unproject(we).sub(we.position).normalize();we.position.addScaledVector(n,s.deltaY*.15)}},{passive:!0});window.addEventListener("resize",()=>{we.aspect=innerWidth/innerHeight,we.updateProjectionMatrix(),fn.setSize(innerWidth,innerHeight)});let Ls=!1,qo=0;const RM=-25,CM=1.8,Bt=new Um,ji=new I(0,-1,0),rc=new I,Uo=new I;new I;const $f=new Pl(.2,8,8),Zf=new ut($f,new In({color:16711680})),Jf=new ut($f,new In({color:255}));en.add(Zf);en.add(Jf);function PM(){Ls=!Ls,qo=0,Ar.textContent=Ls?"WALK":"FLY"}const IM=new Em,wr=new I;function Qf(){requestAnimationFrame(Qf);const s=Math.min(IM.getDelta(),.05);if(kf.uniforms.time.value+=s,MM(s),ll){ul+=s/AM;const e=Math.min(ul,1),t=e<.5?2*e*e:-1+(4-2*e)*e;we.position.lerpVectors(Xf,cl,t),we.quaternion.slerpQuaternions(qf,Yf,t),e>=1&&(ll=!1,ii=!0),fn.render(en,we);return}if(ii&&je){if(Et.has("KeyA")&&(wn+=.9*s),Et.has("KeyD")&&(wn-=.9*s),Uo.set(Math.sin(wn),0,Math.cos(wn)),Et.has("KeyW")&&(je.position.x+=Math.sin(wn)*5*s,je.position.z+=Math.cos(wn)*5*s),Et.has("KeyS")&&(je.position.x-=Math.sin(wn)*5*s,je.position.z-=Math.cos(wn)*5*s),Gt){const i=je.position.clone().addScaledVector(Uo,.8),r=je.position.clone().addScaledVector(Uo,-.8);i.y+=20,r.y+=20,Bt.set(i,ji);const o=Bt.intersectObject(Gt,!0);Bt.set(r,ji);const a=Bt.intersectObject(Gt,!0);if(o.length>0&&a.length>0){const c=o[0].point,l=a[0].point;Zf.position.copy(c),Jf.position.copy(l),je.position.y=(c.y+l.y)/2+.6;const u=Math.sqrt((c.x-l.x)**2+(c.z-l.z)**2)||.001,h=Math.atan2(l.y-c.y,u);je.rotation.set(0,wn+Math.PI/2,h,"YXZ")}}const n=je.position.clone().addScaledVector(Uo,-6).add(new I(0,2.5,0));if(Gt){Bt.set(new I(n.x,n.y+30,n.z),ji);const i=Bt.intersectObject(Gt,!0);i.length>0&&(n.y=Math.max(n.y,i[0].point.y+3));const r=je.position.clone().add(new I(0,1,0)),o=n.clone().sub(r),a=o.length();Bt.set(r,o.clone().normalize(),.3,a);const c=Bt.intersectObject(Gt,!0);if(c.length>0){const l=Math.min(a-c[0].distance+4,10);n.y=Math.max(n.y,je.position.y+l)}}if(we.position.lerp(n,.04),Gt){Bt.set(new I(we.position.x,we.position.y+30,we.position.z),ji);const i=Bt.intersectObject(Gt,!0);i.length>0&&we.position.y<i[0].point.y+1.5&&(we.position.y=i[0].point.y+1.5)}wr.lerp(new I(je.position.x,je.position.y+1.5,je.position.z),.08),we.lookAt(wr)}if(oi&&Br.isLocked){we.getWorldDirection(rn),Cn.crossVectors(rn,hl).normalize();const e=Et.has("ShiftLeft")||Et.has("ShiftRight")?4:1,t=pl*e*s;if(Ls){if(rc.set(rn.x,0,rn.z).normalize(),Et.has("KeyW")&&we.position.addScaledVector(rc,t),Et.has("KeyS")&&we.position.addScaledVector(rc,-t),Et.has("KeyD")&&we.position.addScaledVector(Cn,t),Et.has("KeyA")&&we.position.addScaledVector(Cn,-t),qo+=RM*s,we.position.y+=qo*s,Gt){Bt.set(we.position,ji);const n=Bt.intersectObject(Gt,!0);if(n.length>0){const i=n[0].point.y+CM;we.position.y<i&&(we.position.y=i,qo=0)}}}else Et.has("KeyW")&&we.position.addScaledVector(rn,t),Et.has("KeyS")&&we.position.addScaledVector(rn,-t),Et.has("KeyD")&&we.position.addScaledVector(Cn,t),Et.has("KeyA")&&we.position.addScaledVector(Cn,-t),Et.has("KeyE")&&(we.position.y+=t),Et.has("KeyQ")&&(we.position.y-=t)}fn.render(en,we)}Qf();
