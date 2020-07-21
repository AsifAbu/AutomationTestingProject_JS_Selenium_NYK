const process = require("process");
//for automatically adding chromedriver to path
if (process.platform === 'win32') {
    process.env.PATH += ";" + __dirname + '\\chromedriver;'
}

//const requisitionTest = require("./modules/requisition");
//const inventoryModuleTest = require("./modules/Inventory");
//const lcModuleTest = require("./modules/lc");
//const bankModuleTest = require("./modules/bank"); //Asif
//const subContract = require("./modules/subContract"); //Asif
//const budget = require("./modules/Budget")
const payrollNew = require("./modules/PayrollNew");

//requisitionTest();
//inventoryModuleTest();
//lcModuleTest();
//bankModuleTest();  //Asif
//subContract();       //Asif
//budget();
payrollNew();

