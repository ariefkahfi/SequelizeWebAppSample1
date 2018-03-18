const DatabaseModel = require("./models/db-model");
const dbModel = new DatabaseModel();

dbModel.syncAllTables(true)
.then(val=> console.log(val))
.catch(err=> console.error(err))