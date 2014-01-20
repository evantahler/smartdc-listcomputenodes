var common = require(__dirname + '/../node_modules/smartdc/lib/cli_common.js');

var createClient = function(callback){
  common.parseArguments({}, {}, function(parsed){
    var client = common.newClient(parsed);
    callback(null, client);
  });
};

var listMachines = function(callback){
  var client = createClient(function(err, client){
    client.listMachines({}, {}, function(err, hosts, done){
      callback(err, hosts);
    });
  });
};

exports.common = {
  listMachines: listMachines,
}