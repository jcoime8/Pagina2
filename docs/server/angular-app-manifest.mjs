
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Pagina2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Pagina2/home",
    "route": "/Program%20Files/Git/Pagina2"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Pagina2/home"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Pagina2/proyectos"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Pagina2/planes"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Pagina2/anosotros"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1305, hash: '8948d36bec5e6f759c0d8655f1dec0026c7b235fdb22f47a7b92477291170bb8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1818, hash: '397814f4b56f1f52423e3ca63aabb1070e62de89eff39c337d83e2822fadd91a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
