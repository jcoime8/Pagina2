
export default {
  basePath: 'https://github.com/jcoime8/Pagina2.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
