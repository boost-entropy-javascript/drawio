if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const o=e=>r(e,s),f={module:{uri:s},exports:d,require:o};i[s]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(c(...e),d)))}}define(["./workbox-72a83b64"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"785154c13437a88b7832cdc1b7dfdad2"},{url:"js/extensions.min.js",revision:"3136b7d82b8c01e65b72a389b313a058"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"8cee15193146c9e9bf172bdf02f4f5c8"},{url:"js/shapes-14-6-5.min.js",revision:"2dc6301ea3e66f867235a922e92fca18"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"782203b0acbf2f702f7598cc36d1b598"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"376aa7e099fd452cdcf7f942e09d1d2e"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"fd2878ff29a6b68cb8dbfab17e32d649"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"ff0065748035ae1742b691b407fc6654"},{url:"connect/jira/editor-1-3-3.html",revision:"a583c5c1dac9945f6f4087c880e26854"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"801fc4ef821f5a3986902998da85b53a"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b20590b5ba995880eb6778e092a3fd50"},{url:"connect/jira/viewerPanel.js",revision:"3def6121aa291841a38320ebffc51457"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"b30113797d4498d3fbaad45ecded7a60"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"94804f65483a6e7eb51dee97d0ae9d88"},{url:"connect/jira/fullscreen-viewer.js",revision:"8eceb2fe587296dd11f9c8f6eae34c20"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"b0fca4f705a9cbc99c7baf3d3ed0122e"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"bbd5a7d2c1cf3245f83a5dceb84d4ba6"},{url:"connect/new_common/cac.js",revision:"cf63bf9103bafb9f34cf3ff624b918e8"},{url:"connect/gdrive_common/gac.js",revision:"78f85e79f15f56b8b8d83c90f4a15679"},{url:"connect/onedrive_common/ac.js",revision:"5fb6ff1a73f54a9086b7a7e1f613b8ed"},{url:"connect/confluence/viewer-init.js",revision:"84b1f6758f3c1a723b019c58af377027"},{url:"connect/confluence/viewer.js",revision:"914428f55ab375f7d9bd804f853a8c81"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"90d1612e10c3ed94f3b355fbaf262a95"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"483841927d33cc20d8912196f5be2047"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"6aeb29996949a1d056ce910aa937707b"},{url:"resources/dia_am.txt",revision:"14415da9277dd484b2a2b0a1ad0531dc"},{url:"resources/dia_ar.txt",revision:"53f3cc666e15aa6e20815126c88ed95c"},{url:"resources/dia_bg.txt",revision:"62a5e02145a4dc6f14481fcfa42dce70"},{url:"resources/dia_bn.txt",revision:"d9621f8b4f09db6eb0f79f8635eb1198"},{url:"resources/dia_bs.txt",revision:"010912e102dfa439329768b15b16d153"},{url:"resources/dia_ca.txt",revision:"589873e5bfbeceee09af0febeef95f08"},{url:"resources/dia_cs.txt",revision:"3acb7cdd56717ed9b40882094cf27900"},{url:"resources/dia_da.txt",revision:"83bc244f9ed202072ba1038f300ddf58"},{url:"resources/dia_de.txt",revision:"a9cb5ebf5634406de3bd576dbbd57d89"},{url:"resources/dia_el.txt",revision:"c3a317fe44e428f116914f7fb151453c"},{url:"resources/dia_eo.txt",revision:"a27f5b8fc4309b1e49637e537e635934"},{url:"resources/dia_es.txt",revision:"6bd16951c5188fe154bca73337684538"},{url:"resources/dia_et.txt",revision:"06b59e265931bfa242a883a3d49fe102"},{url:"resources/dia_eu.txt",revision:"e3f017ae5aff207129b62f28fcd44c1d"},{url:"resources/dia_fa.txt",revision:"96f7019cd124f91cfabce4e50d5a6589"},{url:"resources/dia_fi.txt",revision:"2c70456a514d0a647137f17dfd851540"},{url:"resources/dia_fil.txt",revision:"c8e35cf54dacb6e68b6a54d8f1ecb159"},{url:"resources/dia_fr.txt",revision:"d082beeb19a496719e12360d3ce9b275"},{url:"resources/dia_gl.txt",revision:"cf2947151ed6b9f52799481ba5af495a"},{url:"resources/dia_gu.txt",revision:"a9b661a24fef6859ba90a34f3131e055"},{url:"resources/dia_he.txt",revision:"b034b7fad1075c3fc24c393d906c1ff7"},{url:"resources/dia_hi.txt",revision:"41508f825062579f268d5483af3f1e9d"},{url:"resources/dia_hr.txt",revision:"7442067c6f173258878d292db6d6f47f"},{url:"resources/dia_hu.txt",revision:"1d848cffdb8e72c2bdaa5192e77a31fb"},{url:"resources/dia_id.txt",revision:"7acb3af1746da6e2b9296714185d00f5"},{url:"resources/dia_it.txt",revision:"604b3dd736fae4d14de878e2fd9728aa"},{url:"resources/dia_ja.txt",revision:"82dd81e1b350d44621e09f6459147568"},{url:"resources/dia_kn.txt",revision:"0a11e1a72db293575727206dc61cbdfd"},{url:"resources/dia_ko.txt",revision:"342bed6fd9d37bc4d58b1d16b7ac362b"},{url:"resources/dia_lt.txt",revision:"bf81713fedffdf38d2d6959dc7c423c8"},{url:"resources/dia_lv.txt",revision:"0be3658aa4bc6b3850b3e173b8ed7577"},{url:"resources/dia_ml.txt",revision:"eb8693b7dab23e258cb26bdb25edc3dd"},{url:"resources/dia_mr.txt",revision:"508b425ceb1dac246c5b64f283e3042f"},{url:"resources/dia_ms.txt",revision:"0c0291407bf4768a845028d1608bed4f"},{url:"resources/dia_my.txt",revision:"6aeb29996949a1d056ce910aa937707b"},{url:"resources/dia_nl.txt",revision:"10b33b74f2ec09b850d875026e7d7259"},{url:"resources/dia_no.txt",revision:"7f99b391ddd13b8a85a924275fd06410"},{url:"resources/dia_pl.txt",revision:"9cef2c35f145a6f2e5ed0bd5abb6b558"},{url:"resources/dia_pt-br.txt",revision:"88a58cd7d2a677e21e5728439387d894"},{url:"resources/dia_pt.txt",revision:"ae880c8b96ee22c3023d89c4aba73d97"},{url:"resources/dia_ro.txt",revision:"87d4433c0d74cee252c3c4fed1bc389c"},{url:"resources/dia_ru.txt",revision:"2528ca35110c37ad2a7259cc136c5c46"},{url:"resources/dia_si.txt",revision:"6aeb29996949a1d056ce910aa937707b"},{url:"resources/dia_sk.txt",revision:"31d60be42284233a1929a6c58b62a0ea"},{url:"resources/dia_sl.txt",revision:"e6cd3aaa474217c266168b0d7228da8f"},{url:"resources/dia_sr.txt",revision:"7337994669c61df09cf95f75cc84620d"},{url:"resources/dia_sv.txt",revision:"d62f6497731d44c42eca0f43bbca3a16"},{url:"resources/dia_sw.txt",revision:"483cfecf48137a004dd6a4a79d41a90a"},{url:"resources/dia_ta.txt",revision:"c862e1c0e3898233130bd84a7a59be87"},{url:"resources/dia_te.txt",revision:"c9bd60ac6c6e4dcac9647e8d3cf36023"},{url:"resources/dia_th.txt",revision:"e17ab26889a2c8566950a655d2a02ff6"},{url:"resources/dia_tr.txt",revision:"74d92ac264d126468980d6326bc76b67"},{url:"resources/dia_uk.txt",revision:"a28592438d81a1d44d59fb7082d148d2"},{url:"resources/dia_vi.txt",revision:"708f0fc9d76de177b86ccfc026052fef"},{url:"resources/dia_zh-tw.txt",revision:"ff5f254b5f38f7b419e011a45a6e9b2e"},{url:"resources/dia_zh.txt",revision:"c1417e2b29bd5ffc13a6494293d80ff0"},{url:"favicon.ico",revision:"83014b0f32b6c7b15b66cf3c6d6d7c16"},{url:"images/manifest.json",revision:"e77092f9f5912c39cd34024443c2299b"},{url:"images/logo.png",revision:"e4e0d092abdb1e668b5ec41a7fe0713c"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"732c29e21332a926318a7005d21ec450"},{url:"images/icon-192-maskable.png",revision:"47e006d0ce4a35eb5beaa97f0c2bfed0"},{url:"images/icon-192.png",revision:"d022403d52435d76afec82c4e24a17ef"},{url:"images/icon-512-maskable.png",revision:"cf152feeb01fb21f3148a71a3540266e"},{url:"images/icon-512.png",revision:"a3a0df7e7a385244b74073f81ecc45de"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"7985b4d1692766a7db52cbdd10893ad9"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
