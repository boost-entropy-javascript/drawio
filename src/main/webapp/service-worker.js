if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/extensions.min.js",revision:"3aca39653b85adf6b89ee4576e212b88"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"6d9cbaa1fd2b9bcf25465e5d64f6276e"},{url:"js/shapes-14-6-5.min.js",revision:"95f54e7999c9fba2a1d65b4fe4f634f3"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"b1216d112fc58d95498162c738503924"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"8a424e2b7d6054e0fe5657ebf7338948"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"fd2878ff29a6b68cb8dbfab17e32d649"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"84536445238a924838946319471e670c"},{url:"connect/jira/editor-1-3-3.html",revision:"a583c5c1dac9945f6f4087c880e26854"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"801fc4ef821f5a3986902998da85b53a"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b20590b5ba995880eb6778e092a3fd50"},{url:"connect/jira/viewerPanel.js",revision:"b70ea4d572fe9d07867d955c408f5c27"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"a109a49b6c8f23095fbc1a2a88912d3b"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"8eceb2fe587296dd11f9c8f6eae34c20"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"37a91b273d37d153949396832a6ef1c1"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"a6b8d7bd98f021580bbcf09aaca8c6af"},{url:"connect/new_common/cac.js",revision:"cf63bf9103bafb9f34cf3ff624b918e8"},{url:"connect/gdrive_common/gac.js",revision:"78f85e79f15f56b8b8d83c90f4a15679"},{url:"connect/onedrive_common/ac.js",revision:"d10d4603e86da7c9af277dac832e8e06"},{url:"connect/confluence/viewer-init.js",revision:"8aa8d02147def4535563bc65632a3e6d"},{url:"connect/confluence/viewer.js",revision:"74364ec5c7e72d9c199eb4d8ce992f0c"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"9b229d8f6a4c05b3cf69ce25b3984c22"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"c61c13a045c76a3fbb0c3ace53208657"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"e985d7b175fac93d48a14b9d109ae679"},{url:"resources/dia_am.txt",revision:"1153c43b9bb7cabc3b3382b298bf27b3"},{url:"resources/dia_ar.txt",revision:"ce2a1a5aed8a27a232184c0c514352fc"},{url:"resources/dia_bg.txt",revision:"6471bdada621bbd36a09ffec2d2b35c0"},{url:"resources/dia_bn.txt",revision:"cd73b465c041354165bb269ddeaac2dc"},{url:"resources/dia_bs.txt",revision:"06af4af5361dfce3a4330aad13a69bad"},{url:"resources/dia_ca.txt",revision:"f41397d62c2ded07694fb7b94d73ed1a"},{url:"resources/dia_cs.txt",revision:"a6419fed1485078cb7dd72dade3ba8fb"},{url:"resources/dia_da.txt",revision:"18798b233a053eadc5b6280296e000b4"},{url:"resources/dia_de.txt",revision:"b0191a3e94fb9f0188a7ae8096168d5b"},{url:"resources/dia_el.txt",revision:"259b4db2fc5096432ccfef4b770260ee"},{url:"resources/dia_eo.txt",revision:"f33fb2c2543e2b71fe6106122f134722"},{url:"resources/dia_es.txt",revision:"76da3b40c3159b1324f8ade8a569b404"},{url:"resources/dia_et.txt",revision:"ba362ad767709cc7cfdfbf825102cefa"},{url:"resources/dia_eu.txt",revision:"0b76f36dbe461ae6cd364b6acae3575c"},{url:"resources/dia_fa.txt",revision:"32786ad1bf51fc7e2a976764282324a4"},{url:"resources/dia_fi.txt",revision:"f6948c640c56d61c93a4cd874f24ca22"},{url:"resources/dia_fil.txt",revision:"d9964a7e906c88f9000eda2dc831f35a"},{url:"resources/dia_fr.txt",revision:"8f2c65c9bb2e5597c0836ff614b74be3"},{url:"resources/dia_gl.txt",revision:"13f55c70e4cf4414e9e21891b850f99a"},{url:"resources/dia_gu.txt",revision:"8d1ae134794739333be776137be88f71"},{url:"resources/dia_he.txt",revision:"41759f286da9de50206532dcdfa8d88f"},{url:"resources/dia_hi.txt",revision:"f640986166aa99ef4e79295bdc5f5c00"},{url:"resources/dia_hr.txt",revision:"a7f05cf79a58435222c7e37388a86282"},{url:"resources/dia_hu.txt",revision:"4fa550a7218e9c48b7091c41d9fbe999"},{url:"resources/dia_id.txt",revision:"26fe6d3dc2e98907ea63d7cc44f8e7eb"},{url:"resources/dia_it.txt",revision:"686bf2a1b9466693a247095c7aba63fa"},{url:"resources/dia_ja.txt",revision:"b703bf2b2ba5b698f332d12354b4868f"},{url:"resources/dia_kn.txt",revision:"dd772334bf8277e3d9898807e9744d63"},{url:"resources/dia_ko.txt",revision:"558c116b44f1290f81b5176648c7c4c6"},{url:"resources/dia_lt.txt",revision:"efd53e8222100b1e5bb9e4fd0755ce00"},{url:"resources/dia_lv.txt",revision:"b683efe0f8aeef794483e3e35ce82945"},{url:"resources/dia_ml.txt",revision:"b2fa6cddfd9fa92d9eb6a07c3c091830"},{url:"resources/dia_mr.txt",revision:"8a4bddb556f8bd7284086b43859859a1"},{url:"resources/dia_ms.txt",revision:"d05dcda7f13000407ea434e3be4a2937"},{url:"resources/dia_my.txt",revision:"e985d7b175fac93d48a14b9d109ae679"},{url:"resources/dia_nl.txt",revision:"8da1ffb11acc860bcc1cc39fd7e25bfd"},{url:"resources/dia_no.txt",revision:"bd279714eef32838886ef25016b39b29"},{url:"resources/dia_pl.txt",revision:"c337922fd2e0505df81fe7d0f8557894"},{url:"resources/dia_pt-br.txt",revision:"f8a2886926a77892786cf9b4ecb47888"},{url:"resources/dia_pt.txt",revision:"75a9c3fbe754ff3b8c2205c25cce17c6"},{url:"resources/dia_ro.txt",revision:"f30b39698ad7488bc16c06231f103e82"},{url:"resources/dia_ru.txt",revision:"13b5d0208c2ea39b4a71707a1f8e379c"},{url:"resources/dia_si.txt",revision:"e985d7b175fac93d48a14b9d109ae679"},{url:"resources/dia_sk.txt",revision:"4a23159630443f6de29e6b72d885c46c"},{url:"resources/dia_sl.txt",revision:"8b382e99055604a2fd8b2a8ba2bee657"},{url:"resources/dia_sr.txt",revision:"eaeeb431e0ff64999386e485cbe82292"},{url:"resources/dia_sv.txt",revision:"d39be8fb887d15cd3c6f6250fad8d017"},{url:"resources/dia_sw.txt",revision:"c700971e69efe97954f51667b12c01de"},{url:"resources/dia_ta.txt",revision:"9ff1996d7b2228cb6690075d5347bc79"},{url:"resources/dia_te.txt",revision:"24ea7b55be827c54fd304e7ae3711824"},{url:"resources/dia_th.txt",revision:"25cc395fdf269a0d9c1da5389136074a"},{url:"resources/dia_tr.txt",revision:"630419c00cc7068b30fc187f12be64d2"},{url:"resources/dia_uk.txt",revision:"78762ec812cc4df2e720986a72be6936"},{url:"resources/dia_vi.txt",revision:"340b9cfd3c63454b1e3a96fc23250731"},{url:"resources/dia_zh-tw.txt",revision:"1e9c141423c6afb2da2c5523a440e08a"},{url:"resources/dia_zh.txt",revision:"3ecc13183ea8b1b5fd14307389b9b170"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"389fa448cb99794bece27ffcb216abee"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"618b42f0bde0c7685e04811c25dc2b3e"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
