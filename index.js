const glob = require("glob")
const path = require('path')

class files_sync_loader {
    constructor(searching_path, ext) {
	
	const options = {
	    'nosort': true, // dont need to sort files
	    'strict': true, // mark an error if any readdir's problems happen
	    'nodir': true // we only need to load ext files
	}
	
	const files = glob.sync(searching_path, options)
	this._json = {};
	for (let i = 0; i < files.length; ++i)
	{
	    this._json[path.basename(files[i], ext)] = require(files[i]);
	}
    }

    get json() {
	return (this._json);
    }
}

module.exports = files_sync_loader;
