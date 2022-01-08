/*
小米商城抢券
不会用加群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#小米商城抢券
0 0 10 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_xmscqj.js, tag=小米商城抢券, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 0 10 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_xmscqj.js,tag=小米商城抢券
===================================Surge================================
小米商城抢券 = type=cron,cronexp="0 0 10 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_xmscqj.js
====================================小火箭=============================
小米商城抢券 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_xmscqj.js, cronexpr="0 0 10 * * *", timeout=3600, enable=true
 */
const $ = new Env('小米商城抢券');
var _0xodK='jsjiami.com.v6',_0xodK_=['‮_0xodK'],_0x2287=[_0xodK,'Oip5w4cR','BMKoKw==','GCpDw78C','wotpRQ==','D3kY','ZBhZw53DvQ==','wp0xw6fCrVY=','Og9G','LMKAwpIn','WcObwqjDgsKqM8Kh','wqTDmcOAwo8=','w5B/w6DCq1DCrGzDunLCgcOAw7Y=','wqnDhcOgwoUIaw==','w6FDPA==','wrjDm8OdwokvYU7DozYL','LGrCqU3ChQwg','wpTCshDCkC9XYsO1DQs=','D8KiOCjDs23Dvw==','K8KSwrEtw5vDow==','TTkOw4Ixw7bCsxzDt3fCrgjCvMK0AsOY','Nz0CSsOHE8OMMMK+wqM=','bcOWwoHDkMK+','JxLDiMKEKQ==','w6pGI2vDlw==','BcK4w7g3EQ==','PcOMwo8=','w7sVwqs/Cg==','w718LFXDrw==','djhBw5vDkQ==','W8OgWUvCnA==','eXPDrlXDkARwWTHCs8Oxw7Rfw7jCow==','woHDusOBNMOO','Lk3DgcOmw53CrCvDtirCiw==','w5bDsgY6UgnDtQ==','wovCuhfCvgNWecO2','D8KiOATDvWzDrMOt','w5l5w7/DvcKT','P8O7wq/DjXk=','woAub8KRCw==','5a6a5Lib6LSI776i6ISZ5p+r5bWz6L+s5p+R772a6K2v5reF5Yikw4s557yP77ypwowZSXU6wqbCgsO9AuOCt8KZw7DCmFI2w6HDpAQNw6jojZfljK7mnaPmlo/ohoLmnaA=','E8Klb8OLwoB4wr0ND8OWNsOCw6vDolw9Zw3Du8OFwrh9w6vChA==','VUpyKHA=','FuOBvyUww5/lhYrmlrjploXmpqXnuJ3lj7fjgr4=','PitOw6Qv','I8KawoLDiWvCkAx7w4gs44Kt6I2Z5Yym5L2O5oCY5Yut5YmH6KCt44KMwrgBw7J2wqkDw6g7w7TCrws=','WXBnMUDDpcOvw6lVG1TDjGzCk8KKwqRlHgM3B3HDgVxZwpggKmfDkB4/Sg==','GUR1PcKaw7NFV0sZw6/CqMK1w7g=','wrsPQsKiEE9aNcKAwotmw6ZhwrfCgMKpw5TDnXA/AjcFU0XCrcO+D2DDrMKMwr7CgF3Dtl84ZMKGB1MXN8KuKXPCrMO4wqJtV8KyMXRAbzvDr8KjSHx8I00=','w7cdacKoFcK/YU1J','woMxJWHCkg==','wrzCtcKRJg==','IVzDgcObw4fDuHHCrSLDlmjCulTCmcOpw6TDpWMaOMOWeMO4woZuF8K/woZUHsOWesKYwonCksO8w5Z0w5YHT3LDuEtGwoJTw4LCt37CrcKjZ8OEw7wkw5DCrHIDb2w9wo4eF8Kme8KEFMOPM8OjNgwyB8KPwpQqccO5MCHDlcOkd3Fhw5zDv8KGw4lRwqBtZRpMfC5Ew7g=','w5DDtAYXRRTDpGzChsOSWm7CkMOTEGvCl8O6w7/DlcKkwrxSewrDojbCqcOBw4s+WjDClm1zGFTCncOlwqtPwrbDrcOMPMOoNwvDi0IZwpPDph8tDMKvcwnCn8Kjw5jDv0nDu8K6w5c5Wh7DrcOuwrrCncOnwqPDlsKGS3w+ScKsY37Cl8K1woc7c8OiwqfCkcKzw7PCtwrDrsOPdsKow5XDoXocGMO7GcKUVx3CvcKvwowvwoPContpb8KUwooBw5AyEsK5w6oFw6vCrMOGSHVdbRJtDcKlQXvCmibDjQccw7Y0ecOaw4dxw75wcnbDpMKnw6bDqhVIM8K8wrzChkfCu8OuEE4Zw69FE8O7w4PDlQMgw6AieC14wqvCh2V+IcKmwrhDwpUWw6Fnw6FJw4jChcK2NcOr','wrjDjjPCkw==','AAYewqRjw4AdXXvCsm3DhsOFa1fCkyBSwpDDnkHCuk8L','DcOZwpHDq8OpacKCw6bDhsO+w5IAwpLDoMK8w617wr8Fw4HClEo8FQ==','wowzw5fCuk/CuVvDkUfCn8Olw4IlworCrDrDp8Kvwq9VIcKLDMO0','e0YvKsOdwpp5wrlNwohxwo/DiAIuEgfCm8KSSMOWwqjCsAHDp1drwpg2wrptwofDlgvCm8Ouw5gO','w4LDowAXUAnCvXrCq8OYUmPCm8KNWlrCtcKjw6PCg8KUwrtUTWTDpHXCrsOcw5UG','E8Kywpgzw4U=','wpEfXxPDsA==','wobDucOPwp8r','F2FwQA==','wq3DhcOJ','citFWcK9','DVInw79Z','AMKxw4QhOQ==','w7fChMOT','OMKmSsKfw48=','woDDtRTCt8OkI25Gw5R2w6wLwqM7dFtqCcOAw7wbwqdxw5jCnX5qwoI2blVDwq9gwrTCvAJbwqnChArDisKyw7o=','YMOmckPCgw==','w5zCgi7Dq8O0','esOOw73CsAE=','Pik2w6Y6','w7bChx/Dt8O9','woMVBVbCjg==','EMKhNsO0wqJZw5FRFMOaMsOTwrLCnFl+MjLChsOnwo9TwqXDisOqwpY1wooww5TDjA==','wqvCssKGOw==','AsK0IyI=','JcOLwo3Djg==','w6diw6jDjsKq','wozDoBTCpg==','V8KOO8OxYsK7wo7Dv8OEw6I0w7ZL','Qm0mw5U=','GE4OworClMOIw7XCk3nCkuOAhOaKuuS+oeaDtuWIvOWJu+igs+OBmsKjw63DkDTCqcKOwoc5d2F5','wpvDn8K7aMKl','wqrDocK9SMKZ','wqTCkyXCshU=','csO+Ym/CoQ==','JsKOw6w3BsO0','TsKjCcOKRA==','biRHw7XDrw==','L8K6w5fDlnU=','PcKCw6vDhHI=','bkUvw5A3HcOtw4LCkMOzPEJzw4XDqCEgG8O4wpHChxRXw63DtsKZwop+w6zDsko8aMKbwoRHwqDDvmTDmCwFJsOZAcKCeT80OxnDtMOQHcOtw5TCl8O7w7PDkGXDtVbCow==','wrxdw7DDjMKsfcOUdmQ=','wonCshPChxU=','wpDDusO0wrIh','UX7DpMKswoU=','Y8OwZV3CrA==','B17Dk8KqPg==','EcKJPx3Duw==','wobDosOIMw==','URtWw5k=','wqrDtjPCqsOU','wpcNesKLFA==','w7oswoIBGA==','LXzCjlnCiQ==','BVvDpA==','wqnDqgrCrcOD','wrghL2fCr8Orw6AFw40MwqzDsjIKMGDCucKHw7jDr8OQw5MEWg==','KcKAw5ICNQ==','jsdbjiMFabmi.comh.vSMCdqT6wfW=='];if(function(_0x3cd7c1,_0x1c51b8,_0x443cf4){function _0x30c5a9(_0x2f7923,_0x23e66a,_0x561231,_0x3660bb,_0x267c0b,_0x107f9a){_0x23e66a=_0x23e66a>>0x8,_0x267c0b='po';var _0x4798a1='shift',_0x540944='push',_0x107f9a='‮';if(_0x23e66a<_0x2f7923){while(--_0x2f7923){_0x3660bb=_0x3cd7c1[_0x4798a1]();if(_0x23e66a===_0x2f7923&&_0x107f9a==='‮'&&_0x107f9a['length']===0x1){_0x23e66a=_0x3660bb,_0x561231=_0x3cd7c1[_0x267c0b+'p']();}else if(_0x23e66a&&_0x561231['replace'](/[dbMFbhSMCdqTwfW=]/g,'')===_0x23e66a){_0x3cd7c1[_0x540944](_0x3660bb);}}_0x3cd7c1[_0x540944](_0x3cd7c1[_0x4798a1]());}return 0xc8f3f;};return _0x30c5a9(++_0x1c51b8,_0x443cf4)>>_0x1c51b8^_0x443cf4;}(_0x2287,0x7b,0x7b00),_0x2287){_0xodK_=_0x2287['length']^0x7b;};function _0x3b0c(_0x40f1e5,_0xfb9f41){_0x40f1e5=~~'0x'['concat'](_0x40f1e5['slice'](0x1));var _0x476d23=_0x2287[_0x40f1e5];if(_0x3b0c['hDfTFn']===undefined){(function(){var _0x23a828=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2da7eb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x23a828['atob']||(_0x23a828['atob']=function(_0x963a28){var _0x3697ef=String(_0x963a28)['replace'](/=+$/,'');for(var _0x3b79c3=0x0,_0x273aa4,_0x25b818,_0x2ca279=0x0,_0x5c2472='';_0x25b818=_0x3697ef['charAt'](_0x2ca279++);~_0x25b818&&(_0x273aa4=_0x3b79c3%0x4?_0x273aa4*0x40+_0x25b818:_0x25b818,_0x3b79c3++%0x4)?_0x5c2472+=String['fromCharCode'](0xff&_0x273aa4>>(-0x2*_0x3b79c3&0x6)):0x0){_0x25b818=_0x2da7eb['indexOf'](_0x25b818);}return _0x5c2472;});}());function _0x3b6690(_0x5aae33,_0xfb9f41){var _0x561289=[],_0x4b1716=0x0,_0x2c966c,_0x3e5c31='',_0xe335eb='';_0x5aae33=atob(_0x5aae33);for(var _0x37560d=0x0,_0x26b892=_0x5aae33['length'];_0x37560d<_0x26b892;_0x37560d++){_0xe335eb+='%'+('00'+_0x5aae33['charCodeAt'](_0x37560d)['toString'](0x10))['slice'](-0x2);}_0x5aae33=decodeURIComponent(_0xe335eb);for(var _0x586db6=0x0;_0x586db6<0x100;_0x586db6++){_0x561289[_0x586db6]=_0x586db6;}for(_0x586db6=0x0;_0x586db6<0x100;_0x586db6++){_0x4b1716=(_0x4b1716+_0x561289[_0x586db6]+_0xfb9f41['charCodeAt'](_0x586db6%_0xfb9f41['length']))%0x100;_0x2c966c=_0x561289[_0x586db6];_0x561289[_0x586db6]=_0x561289[_0x4b1716];_0x561289[_0x4b1716]=_0x2c966c;}_0x586db6=0x0;_0x4b1716=0x0;for(var _0x1abe3e=0x0;_0x1abe3e<_0x5aae33['length'];_0x1abe3e++){_0x586db6=(_0x586db6+0x1)%0x100;_0x4b1716=(_0x4b1716+_0x561289[_0x586db6])%0x100;_0x2c966c=_0x561289[_0x586db6];_0x561289[_0x586db6]=_0x561289[_0x4b1716];_0x561289[_0x4b1716]=_0x2c966c;_0x3e5c31+=String['fromCharCode'](_0x5aae33['charCodeAt'](_0x1abe3e)^_0x561289[(_0x561289[_0x586db6]+_0x561289[_0x4b1716])%0x100]);}return _0x3e5c31;}_0x3b0c['LCGXSU']=_0x3b6690;_0x3b0c['WCNgiQ']={};_0x3b0c['hDfTFn']=!![];}var _0x2a06ea=_0x3b0c['WCNgiQ'][_0x40f1e5];if(_0x2a06ea===undefined){if(_0x3b0c['QAQwdu']===undefined){_0x3b0c['QAQwdu']=!![];}_0x476d23=_0x3b0c['LCGXSU'](_0x476d23,_0xfb9f41);_0x3b0c['WCNgiQ'][_0x40f1e5]=_0x476d23;}else{_0x476d23=_0x2a06ea;}return _0x476d23;};const notify=$['isNode']()?require(_0x3b0c('‫0','F9OC')):'';let xmscCookie=$[_0x3b0c('‮1','lYj3')]()?process['env']['xmscCookie']?process[_0x3b0c('‮2','6@qu')][_0x3b0c('‫3','lYj3')]:'':$[_0x3b0c('‮4','F^%P')](_0x3b0c('‮5','YJSX'))?$[_0x3b0c('‫6','&w)3')]('xmscCookie'):'';const qluid=$[_0x3b0c('‮7','d$C*')]()?require(_0x3b0c('‮8','kDQg')):'';const fetch=require(_0x3b0c('‮9','Qiw!'));let yhqlbArr=[];function formatZero(_0x22179d){var _0x3a570d={'nVIqs':'\x0a【888元无门槛红包】','SKrlx':function(_0x529025,_0x2fb868){return _0x529025>=_0x2fb868;},'kIiqZ':function(_0x12774d,_0x208141){return _0x12774d+_0x208141;},'OSzgc':_0x3b0c('‫a','1N)p'),'KqUYq':_0x3b0c('‫b','&GvM'),'UImTG':function(_0xe1073d,_0x2bc85d){return _0xe1073d+_0x2bc85d;},'WVPOs':function(_0x2941ee,_0x30c364){return _0x2941ee!==_0x30c364;},'yQfIA':_0x3b0c('‫c','6@qu')};if(_0x22179d>=0x0&&_0x22179d<=0x9){if(_0x3a570d[_0x3b0c('‮d','oYX0')]===_0x3a570d['KqUYq']){console[_0x3b0c('‮e','@4W&')](_0x3a570d['nVIqs']);}else{return _0x3a570d['UImTG']('0',_0x22179d);}}else{if(_0x3a570d[_0x3b0c('‮f','zX8f')](_0x3a570d['yQfIA'],_0x3a570d[_0x3b0c('‮10','6@qu')])){if(_0x3a570d[_0x3b0c('‫11','o^cX')](_0x22179d,0x0)&&_0x22179d<=0x9){return _0x3a570d[_0x3b0c('‮12','D@MI')]('0',_0x22179d);}else{return _0x22179d;}}else{return _0x22179d;}}}function getCurrentDateTime(){var _0x56de28={'zTIId':_0x3b0c('‮13','F^%P'),'aDOBj':function(_0x3c1dca,_0x56fc28){return _0x3c1dca+_0x56fc28;},'nXGmU':function(_0x455965,_0x219c07){return _0x455965(_0x219c07);},'UdoWz':function(_0x51e1ad,_0x23592e){return _0x51e1ad(_0x23592e);}};var _0x22f1c9=_0x56de28['zTIId'][_0x3b0c('‫14','vg8H')]('|'),_0x3bf448=0x0;while(!![]){switch(_0x22f1c9[_0x3bf448++]){case'0':var _0x57af79=_0xbcd6f4[_0x3b0c('‮15','0bYn')]();continue;case'1':var _0x1502fc=_0xbcd6f4[_0x3b0c('‮16','l1KK')]();continue;case'2':var _0xbcd6f4=new Date();continue;case'3':var _0x1f57b2=_0xbcd6f4['getFullYear']();continue;case'4':var _0x59bd1c=_0xbcd6f4[_0x3b0c('‫17','YJSX')]()+0x1;continue;case'5':var _0x2730cf=_0xbcd6f4['getSeconds']();continue;case'6':var _0x5b8704=_0xbcd6f4[_0x3b0c('‫18','&w)3')]();continue;case'7':return _0x56de28['aDOBj'](_0x56de28[_0x3b0c('‮19','7Ars')](_0x1f57b2,_0x56de28['nXGmU'](formatZero,_0x59bd1c))+_0x56de28[_0x3b0c('‮1a','@4W&')](formatZero,_0x1502fc),_0x56de28['UdoWz'](formatZero,_0x5b8704))+_0x56de28[_0x3b0c('‮1b','t&CZ')](formatZero,_0x57af79)+_0x56de28['UdoWz'](formatZero,_0x2730cf);}break;}}!(async()=>{var _0x2b25ae={'zFLcc':_0x3b0c('‫1c','kDQg'),'njPbz':function(_0x31fd99,_0xec9602){return _0x31fd99+_0xec9602;},'BwSmC':function(_0x1bb39c,_0x14f363){return _0x1bb39c===_0x14f363;},'BGzMe':'lFsZM','Voyqa':_0x3b0c('‮1d','BCRo'),'fsSpm':_0x3b0c('‫1e','[IQw'),'AkjjT':_0x3b0c('‮1f','uMyC'),'MxxQs':function(_0x249008,_0x3f8f41){return _0x249008==_0x3f8f41;},'dwkhI':function(_0x38924a,_0x4f934b){return _0x38924a!==_0x4f934b;},'ckPRG':'lqmFI','WHtGE':'\x0a【其他满减优惠券】','QSgqz':function(_0x21011c,_0x3c7744){return _0x21011c===_0x3c7744;},'pyGEj':_0x3b0c('‮20','AsmY'),'nDXQZ':'https://account.xiaomi.com/fe/service/login/password','JZFqK':function(_0x11d61b,_0x1d60a3){return _0x11d61b>_0x1d60a3;},'WdcFW':function(_0xc3584e){return _0xc3584e();},'XNjvw':_0x3b0c('‮21','vDm9'),'POByE':_0x3b0c('‮22','[IQw'),'zIkDD':_0x3b0c('‮23','ZQFI'),'bZWHc':'application/x-www-form-urlencoded','diBDW':_0x3b0c('‮24','AdpH'),'yBIiq':_0x3b0c('‫25','t&CZ'),'rLWYy':_0x3b0c('‫26','yF]('),'PLZXM':_0x3b0c('‮27','GtB@'),'eIPCe':_0x3b0c('‮28','0bYn'),'evMWn':_0x3b0c('‮29','l1KK'),'yNsQi':_0x3b0c('‮2a','cB@e'),'ilMxl':_0x3b0c('‮2b','AsmY'),'XRKXP':'0quXC2kTrwMInn23kp1icw==','HLFAy':_0x3b0c('‫2c','1N)p'),'lsxfN':_0x3b0c('‫2d','F9OC'),'BWRUg':function(_0x149758,_0x22b545){return _0x149758<_0x22b545;},'xNFRP':function(_0x43b833,_0x18a8dc){return _0x43b833===_0x18a8dc;},'SqXJn':function(_0x5f5287,_0x4e9070,_0x194bd9){return _0x5f5287(_0x4e9070,_0x194bd9);},'pbkZd':_0x3b0c('‮2e','F@1n'),'SYUgj':_0x3b0c('‮2f','l1KK')};if(xmscCookie==''){if(_0x2b25ae[_0x3b0c('‫30','d$C*')](_0x2b25ae[_0x3b0c('‫31','zWbq')],_0x3b0c('‮32','lYj3'))){$[_0x3b0c('‫33','njwv')]();}else{$[_0x3b0c('‮34','lYj3')]($['name'],'【提示】请先获取小米商城一cookie,获取后添加至环境变量\x20xmscCookie\x20',_0x2b25ae[_0x3b0c('‮35','uMyC')],{'open-url':_0x2b25ae[_0x3b0c('‮36','kDQg')]});return;}}if(_0x2b25ae[_0x3b0c('‫37','oYX0')](_0x2b25ae['WdcFW'](getCurrentDateTime),0x1263dc7c46ff)){console[_0x3b0c('‫38','WqkZ')](_0x2b25ae[_0x3b0c('‫39','jYTc')]);return;}console['log'](_0x2b25ae['XNjvw']);await fetch(_0x3b0c('‫3a','cB@e'),{'headers':{'accept':_0x2b25ae[_0x3b0c('‮3b','D@MI')],'accept-language':_0x2b25ae[_0x3b0c('‫3c','LB5B')],'content-type':_0x2b25ae['bZWHc'],'sec-ch-ua':_0x2b25ae[_0x3b0c('‮3d','vDm9')],'sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x2b25ae['yBIiq'],'sec-fetch-dest':_0x2b25ae[_0x3b0c('‮3e','FdOA')],'sec-fetch-mode':_0x2b25ae[_0x3b0c('‫3f','LB5B')],'sec-fetch-site':'same-origin','cookie':xmscCookie,'Referer':_0x2b25ae[_0x3b0c('‫40','yF](')],'Referrer-Policy':_0x3b0c('‫41','BCRo')},'body':_0x2b25ae['evMWn'],'method':_0x2b25ae['yNsQi']})[_0x3b0c('‮42','GtB@')](_0x984111=>_0x984111[_0x3b0c('‮43','&w)3')]())[_0x3b0c('‮44','@4W&')](_0xac4de3=>{$[_0x3b0c('‫45','U8TI')]=_0xac4de3[_0x3b0c('‫46','cB@e')][_0x3b0c('‮47','#tTT')];console['log'](_0xac4de3[_0x3b0c('‮48','qIa8')]);});$['yhqlb']='';console['log'](_0x3b0c('‮49','o^cX'));let _0x55513b=[_0x2b25ae['Voyqa'],_0x2b25ae[_0x3b0c('‫4a','Y[BQ')],_0x2b25ae[_0x3b0c('‮4b','Y[BQ')],_0x2b25ae[_0x3b0c('‫4c','YJSX')],'hRUf04hEb1DsUxoKJt9C7Q==',_0x2b25ae['lsxfN']];for(let _0x4ff982=0x0;_0x2b25ae[_0x3b0c('‫4d','D@MI')](_0x4ff982,_0x55513b[_0x3b0c('‫4e','oYX0')]);_0x4ff982++){if(_0x2b25ae[_0x3b0c('‮4f','#tTT')](_0x3b0c('‫50','o^cX'),'KWtBF')){await _0x2b25ae['SqXJn'](fetch,_0x2b25ae[_0x3b0c('‫51','ky3E')],{'headers':{'accept':'application/json,\x20text/plain,\x20*/*','accept-language':'zh-CN,zh;q=0.9','content-type':_0x2b25ae[_0x3b0c('‮52','ky3E')],'sec-ch-ua':_0x3b0c('‮53','FdOA'),'sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x3b0c('‮54','U8TI'),'sec-fetch-dest':_0x3b0c('‮55','YJSX'),'sec-fetch-mode':_0x2b25ae[_0x3b0c('‮56','lYj3')],'sec-fetch-site':'same-origin','cookie':xmscCookie,'Referer':_0x2b25ae[_0x3b0c('‫57','qRR4')],'Referrer-Policy':_0x2b25ae[_0x3b0c('‮58','D@MI')]},'body':_0x2b25ae[_0x3b0c('‫59','(m0Y')]('activity_code=',_0x55513b[_0x4ff982]),'method':_0x2b25ae[_0x3b0c('‫5a','&w)3')]})[_0x3b0c('‫5b','vg8H')](_0x4117c1=>_0x4117c1['json']())[_0x3b0c('‮5c','o^cX')](_0x49ee68=>{if(_0x2b25ae[_0x3b0c('‮5d','cB@e')](_0x2b25ae[_0x3b0c('‮5e','t&CZ')],_0x2b25ae['BGzMe'])){if(_0x55513b[_0x4ff982]==_0x2b25ae[_0x3b0c('‫5f','zX8f')]){if(_0x2b25ae[_0x3b0c('‮60','F^%P')]!=='CKTNh'){console[_0x3b0c('‫61','(m0Y')](_0x2b25ae[_0x3b0c('‮62','cB@e')]);}else{console['log'](_0x2b25ae['zFLcc']);return;}}else if(_0x2b25ae['MxxQs'](_0x55513b[_0x4ff982],_0x3b0c('‮63','zWbq'))){if(_0x2b25ae['dwkhI'](_0x2b25ae[_0x3b0c('‫64','oYX0')],_0x2b25ae[_0x3b0c('‮65','AsmY')])){return _0x2b25ae['njPbz']('0',n);}else{console[_0x3b0c('‫66','&w)3')](_0x2b25ae[_0x3b0c('‮67','AsmY')]);}}else{console[_0x3b0c('‫68','1&BJ')](_0x2b25ae['WHtGE']);}console[_0x3b0c('‮69','kDQg')](_0x49ee68);}else{return n;}});}else{console['log'](_0x2b25ae[_0x3b0c('‫6a','o^cX')]);}}})()[_0x3b0c('‫6b','F9OC')](_0x367631=>{$[_0x3b0c('‮6c','tR]P')]('','❌\x20'+$[_0x3b0c('‮6d','d$C*')]+',\x20失败!\x20原因:\x20'+_0x367631+'!','');})[_0x3b0c('‫6e','1N)p')](()=>{$[_0x3b0c('‮6f','lYj3')]();});;_0xodK='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}