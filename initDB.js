const DatabaseModel = require("./models/db-model");
const dbModel = new DatabaseModel();
const gSequelize = dbModel.getSequelize();


// gSequelize.query(
//     "select b.* from bus b " +
//     "left join driver d " +
//     "on b.bus_id = d.bus_id " +
//     "where d.bus_id is null "
// ).spread((result,metadata)=> {
//     console.log(JSON.stringify(result));
// });



