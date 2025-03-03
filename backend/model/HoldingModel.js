const{model}=require('mongoose');
const { Holdingschema } = require('../schemas/Holdingschema');
const HoldingsModel=new model("holding",Holdingschema);
module.export={Holdingschema};