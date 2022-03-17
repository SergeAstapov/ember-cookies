'use strict';

module.exports = {
  name: require('./package.json').name,

  treeForAddonTestSupport(tree) {
    return this.preprocessJs(tree, '/', this.name, {
      registry: this.registry,
    });
  },
};
