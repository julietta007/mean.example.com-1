//Sitewide configuration
var config = {};
config.gitHub = {};
config.cookie = {};

//Establish a connection to the local database
//config.mongodb = 'mongodb://julietta007:857d61bb70c7ad01642be1d064@juliettahensgen-shard-00-00-aqh1y.mongodb.net:27017,juliettahensgen-shard-00-01-aqh1y.mongodb.net:27017,juliettahensgen-shard-00-02-aqh1y.mongodb.net:27017/test?ssl=true&replicaSet=juliettahensgen-shard-0&authSource=admin';
//config.secret = '.?Qn28B>s|A{Vz~(w;hX;8v3Us$\H;[)|8(KH(HUNaW<*;:AI@h{`&pA~o|&uAj',

config.mongodb = 'mongodb://localhost/mean-cms';
config.secret = '66aidan07';

config.gitHub.clientID='14f7dd2c2c6f812f7b91';
config.gitHub.clientSecret='f6da146eb9af20fea3919daee751c8176861b73c';
config.gitHub.callbackURL='https://juliettahensgen.com/auth/github/callback';

config.cookie.domain='juliettahensgen.com'

module.exports = config;

