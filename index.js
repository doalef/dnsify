var dns = require("dns");

/**
 * @function
 * @param  {String} host - The name of the host to resolve
 * @param  {String} phrase - The name of the TXT record to lookup
 * @param  {Function} cb - callback
 */
function lookup(host, phrase, cb) {
	dns.resolveTxt(host, function (err, addresses) {
		if (err) return cb(new Error(err), null);
		addresses = addresses.flat(1);
		let index = addresses.findIndex(function (item) {
			return item === phrase;
		});
		return cb(null, index > -1);
	});

	return null;
};

module.exports = {
	lookup,
};
