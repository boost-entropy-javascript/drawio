if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"7bbe15fda9109f88254d773211c22514"},{url:"js/extensions.min.js",revision:"fe4a5c6f94d51bdf9435f0aff1e7044f"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"20eea4066f98c03c460fdfbdaeed2383"},{url:"js/shapes-14-6-5.min.js",revision:"95f54e7999c9fba2a1d65b4fe4f634f3"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"5326787c69861a9a6db9b495bcf10afc"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"324a719341bb972cd6757ca3c3d01bb9"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"fd2878ff29a6b68cb8dbfab17e32d649"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"f72fc254597e35ca09d9f53d3edb1dd4"},{url:"connect/jira/editor-1-3-3.html",revision:"a583c5c1dac9945f6f4087c880e26854"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"801fc4ef821f5a3986902998da85b53a"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b20590b5ba995880eb6778e092a3fd50"},{url:"connect/jira/viewerPanel.js",revision:"b70ea4d572fe9d07867d955c408f5c27"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"a109a49b6c8f23095fbc1a2a88912d3b"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"8eceb2fe587296dd11f9c8f6eae34c20"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"91c04e236ba9dbdb26d8565b3354e00a"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"e7d873ca90809763face9aa4e93b4f47"},{url:"connect/new_common/cac.js",revision:"6d666b6789b51dabc5a1af53a9db5d3d"},{url:"connect/gdrive_common/gac.js",revision:"78f85e79f15f56b8b8d83c90f4a15679"},{url:"connect/onedrive_common/ac.js",revision:"d10d4603e86da7c9af277dac832e8e06"},{url:"connect/confluence/viewer-init.js",revision:"8aa8d02147def4535563bc65632a3e6d"},{url:"connect/confluence/viewer.js",revision:"4c227ecdbbb1c885de09fa3000676555"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"15e9329be12fedff08322548ae95b194"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"0bd745f0c23bba15ad1ff8e7b8e14987"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"18222afc37e96271d14098017a4bca4f"},{url:"resources/dia_am.txt",revision:"c27602e97dd135ab8016580811c37dae"},{url:"resources/dia_ar.txt",revision:"27ce5b13362fd91a835ad6d7275f69fb"},{url:"resources/dia_bg.txt",revision:"fe6f991cec4d740de5ed955a0052df51"},{url:"resources/dia_bn.txt",revision:"09801d42120399560d17df5ab6f10392"},{url:"resources/dia_bs.txt",revision:"11354392ab96d4518629e174cbdd6198"},{url:"resources/dia_ca.txt",revision:"252b30c399c21ecdd1d428c5c78d7819"},{url:"resources/dia_cs.txt",revision:"ad58eea9824e224a8686d173ed546f3c"},{url:"resources/dia_da.txt",revision:"2ccae4b9e4c457a2fb22afa0906c44ce"},{url:"resources/dia_de.txt",revision:"da95ac5e4ede664d9a855c842ca3b2b0"},{url:"resources/dia_el.txt",revision:"4fdaad205edf71d5dd1dad89bf4efb0a"},{url:"resources/dia_eo.txt",revision:"a038531c2af6b8cf4ebe089a1feee8d3"},{url:"resources/dia_es.txt",revision:"979b0193afde45f12a5defcd088c4120"},{url:"resources/dia_et.txt",revision:"56e48c84abc583419d699ebd1ae366dc"},{url:"resources/dia_eu.txt",revision:"62663d1d87d062cb932f78c24856d43d"},{url:"resources/dia_fa.txt",revision:"76dda29b0fc0d856cfe7a072ced08c41"},{url:"resources/dia_fi.txt",revision:"59f51c80794a5ac79f036e4aeeab748b"},{url:"resources/dia_fil.txt",revision:"15c1352c8f0b1aa361274ae7fa62748a"},{url:"resources/dia_fr.txt",revision:"66dad18ef944a6d9c7de31d123b99804"},{url:"resources/dia_gl.txt",revision:"2732b663500a00b1e01b582b35b9b32b"},{url:"resources/dia_gu.txt",revision:"39f00e189f04c6c3960546ed7738def6"},{url:"resources/dia_he.txt",revision:"ccc769e5e2ae6da86de64d8726a0a939"},{url:"resources/dia_hi.txt",revision:"b5305138b80566baf4b97023cc31eded"},{url:"resources/dia_hr.txt",revision:"3ff0b671dc522f03e3fe7a26019ad58e"},{url:"resources/dia_hu.txt",revision:"b436b4699d0323ea4b63a5d2688d4984"},{url:"resources/dia_id.txt",revision:"61fbc4e066f36ef5ca9852e0aace7ca6"},{url:"resources/dia_it.txt",revision:"8d18c5cbb0aef2eda6d2c61ce4805fb4"},{url:"resources/dia_ja.txt",revision:"7b77df6a0a9825a82fd771afb2a8a100"},{url:"resources/dia_kn.txt",revision:"f7aac3aaa2504c36378207875ea56855"},{url:"resources/dia_ko.txt",revision:"ac6da5206e9735a4fe21bc460d26af49"},{url:"resources/dia_lt.txt",revision:"32a4bceb0efc7c6f450e1b16022935c2"},{url:"resources/dia_lv.txt",revision:"4b2cbfe328186e01c0d708b64eddcaf4"},{url:"resources/dia_ml.txt",revision:"e5e9503510fd70b345f40e21a7eae789"},{url:"resources/dia_mr.txt",revision:"f4ea2a774535d6fc363225325081cba3"},{url:"resources/dia_ms.txt",revision:"d4ce2b7905545fcfd7859cba0f0dfda9"},{url:"resources/dia_my.txt",revision:"18222afc37e96271d14098017a4bca4f"},{url:"resources/dia_nl.txt",revision:"03a9135ab0b6d8b9acaaa191a2da9910"},{url:"resources/dia_no.txt",revision:"bbc8164d8d3d7b4e86f31155bdd073ae"},{url:"resources/dia_pl.txt",revision:"1f64d1bfd92c772667a7f69c7b128432"},{url:"resources/dia_pt-br.txt",revision:"596d9ce09953cabd0752ac607d125c53"},{url:"resources/dia_pt.txt",revision:"3b1e38c8850ba6ddaf394254934eb393"},{url:"resources/dia_ro.txt",revision:"eaa61f3defe4c3a81f5747584ae16edd"},{url:"resources/dia_ru.txt",revision:"51f9a282069af1679292b029703c24f8"},{url:"resources/dia_si.txt",revision:"18222afc37e96271d14098017a4bca4f"},{url:"resources/dia_sk.txt",revision:"b1e59a4b5f382b36da46500565985d66"},{url:"resources/dia_sl.txt",revision:"262e3add9d3694108fce69ba5bc4e939"},{url:"resources/dia_sr.txt",revision:"1f7ec3c913ccd091eab9c24bc306f894"},{url:"resources/dia_sv.txt",revision:"1c13afe99eeddf8d8abbce011d2e11e9"},{url:"resources/dia_sw.txt",revision:"b94d039f37627968bfe37e1b0d6ea81f"},{url:"resources/dia_ta.txt",revision:"2f8587978c69ae7cb36bfc41b7c07d7a"},{url:"resources/dia_te.txt",revision:"db69d9b293da6dbe0274a388dcf23a76"},{url:"resources/dia_th.txt",revision:"528791d2ec55e33374069a50aab86ad1"},{url:"resources/dia_tr.txt",revision:"d6960abb7ec5426e27f207b1dcaa6847"},{url:"resources/dia_uk.txt",revision:"8ad7fb5de8cff590d107e80cf6f9de83"},{url:"resources/dia_vi.txt",revision:"fc34cb0f9c8dc36c060d2c793e0fe52c"},{url:"resources/dia_zh-tw.txt",revision:"8deb2f0b084cdfb2f800c291fb4773de"},{url:"resources/dia_zh.txt",revision:"c8956cb07c75aa4255b437114c195230"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"389fa448cb99794bece27ffcb216abee"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"618b42f0bde0c7685e04811c25dc2b3e"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
