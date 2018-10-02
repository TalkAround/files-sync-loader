const files_sync_loader = require("../")

const files = new files_sync_loader("./jsons/*.json", '.json');

console.log(files.json);
