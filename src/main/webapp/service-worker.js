if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,c,a)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}}))).then((e=>{const r=a(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-4768a546"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"37ed5245db400a3ba00c09ce91ebe3e3"},{url:"js/extensions.min.js",revision:"45df373f567b94c1dce78ba61b591983"},{url:"js/stencils.min.js",revision:"14fcdef05807b50867fdc5114da51484"},{url:"js/shapes-14-6-5.min.js",revision:"f0e1d4c09054df2f3ea3793491e9fe08"},{url:"js/math-print.js",revision:"acea91d5b3b68fdec3f02c08a087aeb0"},{url:"index.html",revision:"8b5b1cf07fc74454cf354717e9d18534"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"4f2c07c4585347249c95cd9158872fb2"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"3179f617dd02efd2cefeb8c06f965880"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"194226f6dd67b008d8470e30af6fa050"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"7bb9525fbd4504dd6855663605476f56"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"80d3c5ec6575b41d271eb6f7a6efe40b"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"c36b256237fa27ea379e30f7d5add825"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"d089f12446d443ca01752a5115456fcc"},{url:"connect/confluence/viewer-init.js",revision:"8aa8d02147def4535563bc65632a3e6d"},{url:"connect/confluence/viewer.js",revision:"7dc22c622b238536ea550815d1364d52"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4c58f3a1a4c99b1c4264593b6e05100b"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"7e198d0456c3075b4b305da188f09714"},{url:"connect/confluence/includeDiagram.html",revision:"99382f1af0419f116f056874ba17f0d7"},{url:"connect/confluence/macro-editor.js",revision:"412bc4b87e630b697a40f247c579d398"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"resources/dia.txt",revision:"c91b89abc160f19429c45dab2e01c91e"},{url:"resources/dia_am.txt",revision:"3925a4f0b9932bd49e2b42e749faebb6"},{url:"resources/dia_ar.txt",revision:"fb889574221d45bc1e6360e4f27d512c"},{url:"resources/dia_bg.txt",revision:"7019c9d8445f47be6b544e448f617d59"},{url:"resources/dia_bn.txt",revision:"8965007e4752e5ba762507944c154d1a"},{url:"resources/dia_bs.txt",revision:"eabde512c372e02c3c81413057b78621"},{url:"resources/dia_ca.txt",revision:"91b1a93d4c7289db0a08216d96fe8b0c"},{url:"resources/dia_cs.txt",revision:"50f1948afc0a1b6cd88f989226ac88e2"},{url:"resources/dia_da.txt",revision:"ceaf30a2fca80d487666663938ee8db9"},{url:"resources/dia_de.txt",revision:"94dbb234947835e93fc4ef591314e1c6"},{url:"resources/dia_el.txt",revision:"855642deb1ce593dec2c3e62d222f408"},{url:"resources/dia_eo.txt",revision:"60658c30eef759a91646972f94114238"},{url:"resources/dia_es.txt",revision:"312dc33703cb0d779ef6b1b8a389b92c"},{url:"resources/dia_et.txt",revision:"e5be1149e969cc46cccd30407e74f80a"},{url:"resources/dia_eu.txt",revision:"e55ea0117a2e8ef737e95b392dfe5386"},{url:"resources/dia_fa.txt",revision:"0c0d8d85fb06896daaa0a32357815250"},{url:"resources/dia_fi.txt",revision:"3c5156be415bbcdad8c33f8cf03f74b9"},{url:"resources/dia_fil.txt",revision:"7092e8a3bcfbf3b65f509fab69a4c4a4"},{url:"resources/dia_fr.txt",revision:"83639989d1fd1298e46e37b04601f5af"},{url:"resources/dia_gl.txt",revision:"9f72a5ba976d07ae696e30c37dd1b014"},{url:"resources/dia_gu.txt",revision:"098ebcb20c68df6a766f9cda78198b98"},{url:"resources/dia_he.txt",revision:"0637131019aef0c3ac9fcd2c6c082c28"},{url:"resources/dia_hi.txt",revision:"a08bba007eae9e32042aa4fb816db3b2"},{url:"resources/dia_hr.txt",revision:"e9a2805998fe45be4171979f483cfefc"},{url:"resources/dia_hu.txt",revision:"bce51af7c4c8f28496566ab55e211950"},{url:"resources/dia_id.txt",revision:"0745260139345027a816fecb423a7bfe"},{url:"resources/dia_it.txt",revision:"e83b72c0a331864201c42ffc6f32e5a8"},{url:"resources/dia_ja.txt",revision:"cfbb1a06dafa0ac58c094ef1f72fc89f"},{url:"resources/dia_kn.txt",revision:"c694e577060722eb1c057f49a305f63e"},{url:"resources/dia_ko.txt",revision:"2d52dca98056a0399d16cdca137fd0f9"},{url:"resources/dia_lt.txt",revision:"a2fa0e366cabda9ef02d1c90efc19e68"},{url:"resources/dia_lv.txt",revision:"61ba1c3714a5294e8772ba6b44a5f5fb"},{url:"resources/dia_ml.txt",revision:"5be59ed7ddbfb27b1c7ee33f49e129cf"},{url:"resources/dia_mr.txt",revision:"b1f9eb88c870718e7d50dc32fa8cbf3b"},{url:"resources/dia_ms.txt",revision:"d1916fa8915ef70802615a64d8daa35e"},{url:"resources/dia_my.txt",revision:"c91b89abc160f19429c45dab2e01c91e"},{url:"resources/dia_nl.txt",revision:"53831318099326a6d1b1df001fd912dc"},{url:"resources/dia_no.txt",revision:"3527cdb97ab6c4b6d95cbda09fd77a9a"},{url:"resources/dia_pl.txt",revision:"1326ac4fac8f2955d3cb069e2fc6fd2e"},{url:"resources/dia_pt-br.txt",revision:"a28c62ae4025458fb55a1cc7ea3c4396"},{url:"resources/dia_pt.txt",revision:"11e8537ec96f47ded9d71ab74709b64f"},{url:"resources/dia_ro.txt",revision:"0371dee3cefefc18907bd826893679fe"},{url:"resources/dia_ru.txt",revision:"c91b89abc160f19429c45dab2e01c91e"},{url:"resources/dia_si.txt",revision:"c91b89abc160f19429c45dab2e01c91e"},{url:"resources/dia_sk.txt",revision:"f9cfd6062c22133d285d320d138e6909"},{url:"resources/dia_sl.txt",revision:"799b45120cb2ff5ca27ab4c2cfe93d9e"},{url:"resources/dia_sr.txt",revision:"083c328b057bffabbb58693d1a1a4d61"},{url:"resources/dia_sv.txt",revision:"65c33fd79740e7aa1317f4f181a16dcd"},{url:"resources/dia_sw.txt",revision:"7e2c4a71dcde6a24db7cf4b70b81c3d5"},{url:"resources/dia_ta.txt",revision:"f359b3bcd5c04dfd3b142e2d31dadfea"},{url:"resources/dia_te.txt",revision:"820f045e1fe819d07fd9f075dd6e6d6e"},{url:"resources/dia_th.txt",revision:"a7f8019047a376cd917076fa11461589"},{url:"resources/dia_tr.txt",revision:"49d64601afed45e108833724145da88e"},{url:"resources/dia_uk.txt",revision:"cc4c56ecf831b51cb3a8a7875b9afe4f"},{url:"resources/dia_vi.txt",revision:"6fd9a78962b029e0373039d0b1cc22f6"},{url:"resources/dia_zh-tw.txt",revision:"76acaa2d13c7c67aa8e6cda08cca2d6d"},{url:"resources/dia_zh.txt",revision:"00c66978ccf9663be612a2644f878fe5"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
