exports.config = {
  bundles: [
    {
      components: [
        'st-card',
        'st-card-header',
        'st-card-content',
        'st-card-bottom'
      ]
    }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
