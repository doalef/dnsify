const { lookup } = require("../index");

test("Returns Error on resolve failure.", (Done) => {
	function callback(error, data) {
		expect(data).toBe(null);
		if (error) return Done();
		Done(new Error("didnt work"));
	}

	lookup("leanify.ir", "test", callback);
});

test("Find the given TXT record.", (Done) => {
	function callback(error, data) {
		expect(error).toBe(null);
		expect(data).toBe(true);
		Done();
	}

	lookup(
		"kondorliga.ir",
		"google-site-verification=lAt76TBw-pkytFsrdrXFtmT-4QgqaJVDpVFy0uJ94dk",
		callback
	);
});


test("Doesn't Find the given TXT record.", (Done) => {
	function callback(error, data) {
		expect(error).toBe(null);
		expect(data).toBe(false);
		Done();
	}

	lookup(
		"kondorliga.ir",
		"google-site-verification=lAt7",
		callback
	);
});