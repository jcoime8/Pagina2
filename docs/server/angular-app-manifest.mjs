
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/jcoime8/Pagina2.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/jcoime8/Pagina2.git/home",
    "route": "/jcoime8/Pagina2.git"
  },
  {
    "renderMode": 2,
    "route": "/jcoime8/Pagina2.git/home"
  },
  {
    "renderMode": 2,
    "route": "/jcoime8/Pagina2.git/proyectos"
  },
  {
    "renderMode": 2,
    "route": "/jcoime8/Pagina2.git/planes"
  },
  {
    "renderMode": 2,
    "route": "/jcoime8/Pagina2.git/anosotros"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1314, hash: 'd0806f8f11bdb119103dbd287212fb5bb6a8e5239a5228a242dc504fb958d3c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1827, hash: 'cee40195dce8f68089337d88954691a9c035f58a7be3f74600ce3040d2dbb826', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 5680, hash: '44d54aaa48a35fb0335a90097257419b3ed60ee43f7319fe81da6f0cb07909f0', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'anosotros/index.html': {size: 5704, hash: 'd213d5fdcb79c6ea3ea509e7da1e0d234b03efb79d1950093f6085ce524b58f3', text: () => import('./assets-chunks/anosotros_index_html.mjs').then(m => m.default)},
    'planes/index.html': {size: 5896, hash: '8a6978b203a5d7e30089e373303e415ec66ca50dec2d7d77e83322d9b384d9f9', text: () => import('./assets-chunks/planes_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5054, hash: '23ae98f29ed082977ac3ff373b2ed8367d08a121c2d275f1f19f4a2b5ef1526f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
