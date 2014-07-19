var fs = require('fs');
var path = require('path');

function CordovaUtils(project) {
  this.project = project;
  this.name = 'Ember CLI Cordova Utils';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

CordovaUtils.prototype.treeFor = function(name) {
  var treePath = path.join(__dirname, name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

module.exports = CordovaUtils;
