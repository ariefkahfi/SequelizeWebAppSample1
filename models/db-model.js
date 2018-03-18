const Sequelize = require("sequelize");
const sequelize = new Sequelize("s_orm6","arief","123",{
    dialect:"mysql",
    operatorsAliases:false
});

class DatabaseModel {
    constructor(){
        this.defineAllTables();
        this.doRelation();
    }

    syncAllTables(forceIt){
        return sequelize.sync({force: forceIt})
    }

    doRelation(){
        this.Driver.belongsTo(this.Bus,{
            foreignKey:"bus_id"
        });
        this.Bus.hasOne(this.Driver,{
            foreignKey:"bus_id"
        });
        this.Bus.hasMany(this.Passenger,{
            foreignKey:"bus_id"
        });
        this.Passenger.belongsTo(this.Bus,{
            foreignKey:"bus_id"
        });
    }
    defineAllTables(){
        this.Driver = sequelize.define("driver",{
            driver_id: {
                type:Sequelize.STRING(4),
                primaryKey:true
            },
            driver_name: {
                type:Sequelize.STRING
            }
        },{
            tableName:"driver",
            timestamps:false
        });
        this.Bus = sequelize.define("bus",{
            bus_id: {
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            bus_name: {
                type:Sequelize.STRING,
                unique:true
            },
            origin:{
                type:Sequelize.STRING
            },
            destination:{
                type:Sequelize.STRING
            }
        },{
            timestamps:false,
            tableName:"bus"
        });
        this.Passenger = sequelize.define("passenger",{
            passenger_id:{
                type:Sequelize.UUID,
                primaryKey:true
            },
            passenger_name:{
                type:Sequelize.STRING
            },
            passenger_address:{
                type:Sequelize.STRING
            },
            passenger_phone:{
                type:Sequelize.STRING(12)
            }
        },{
            tableName:"passenger",
            timestamps:false
        });
    }
}

module.exports = DatabaseModel;