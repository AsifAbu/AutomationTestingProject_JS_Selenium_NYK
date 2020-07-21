const driver = require("../../core/driver");
const workOrderStepDef = require("../subContract/workOrder")(driver);
let WoID = "";
let advanceBill = (driver) => {
    let testSet = {};
    let billNo = "";
    let WoId ="";
    let billAmount = "650";
    testSet.clickAllWorkOrderList = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//a[contains(.,'All Work Order List')]") === false){ return "Create Work Order Button not Clicked";}
    }

    testSet.searchWorkOrder = async () => {
        await driver.sleep(500);
        if(await driver.waitSendKeys("(//input[@ng-change='columnSearch()'])[2]", await WoID) === false){ return "Search WO Value Not Set";}
        await driver.sleep(500);
    }

    testSet.clickDetailsWorkOrder = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//a[@class='btn btn-sm btn-outline blue'])[1]") === false){ return "Work Order Details Button not Clicked";}
        await driver.sleep(1000);
    }
    
    testSet.advanceBillComplete = async () => {
        await driver.sleep(4000);
        let actualWoID = await driver.waitGetText("(//td[@class='text-left ng-binding'])[1]");
        await driver.sleep(1000);
        let demoWoID = actualWoID.split(":");
        actualWoID = demoWoID[1].trim();

        WoId = actualWoID;
        WoID = actualWoID;

        await driver.sleep(2000);
        await driver.scrollToElement("//a[contains(.,'Create Advance')]");
        await driver.sleep(2000);
        if(await driver.waitClick("//a[contains(.,'Create Advance')]") === false){ return "Advance Bill Button not Clicked";}
        if(await driver.waitClick("//select[@ng-model='billData.idApprover']") === false){ return "Approver field not click";}
        if(await driver.waitClick("(//option[contains(.,'ERP Admin')])[1]") === false){ return "Approver not Select";}
        if(await driver.waitSendKeys("//input[@ng-model='billData.billAmount']", parseInt(billAmount)/2) === false){ return "Advance Bill Button not Clicked";}
        await driver.sleep(1000);
        await driver.scrollToElement("//button[contains(.,'Submit')]");
        await driver.sleep(3000);
        billNo = await driver.waitGetValue("//input[@ng-model='billInfo.basicInfo.billId']");
        await driver.sleep(3000);
        
        if(await driver.waitClick("//button[contains(.,'Submit')]") === false){ return "Submit Button not Clicked";}
        await driver.sleep(1000);
    }

    testSet.verifyAdvanceBillInfo = async () => {
        await driver.sleep(4000);
        let actualWoID = await driver.waitGetText("(//td[@class='text-left ng-binding'])[1]");
        await driver.sleep(500);
        let demoWoID = actualWoID.split(":");
        actualWoID = demoWoID[1].trim();

        let actualWoTitle = await driver.waitGetText("(//td[@class='text-left ng-binding'])[2]");
        await driver.sleep(500);
        let demoWoTitle = actualWoTitle.split(":");
        actualWoTitle = demoWoTitle[1].trim();
        
        let actualTotalWoAmount = await driver.waitGetText("(//td[@class='text-left ng-binding'])[7]");
        await driver.sleep(500);
        let demoWoAmount = actualTotalWoAmount.split(":");
        actualTotalWoAmount = demoWoAmount[1].trim();
        actualTotalWoAmount = actualTotalWoAmount.replace(",", "");

        let actualBillNo = await driver.waitGetText("(//td[@class='text-left ng-binding'])[11]");
        await driver.sleep(2000);
        let demoBillNo = actualBillNo.split(":");
        actualBillNo = demoBillNo[1].trim();

        let actualBillAmount = await driver.waitGetText("(//td[@class='text-left ng-binding'])[15]");
        await driver.sleep(2000);
        let demoBillAmount = actualBillAmount.split(":");
        actualBillAmount = demoBillAmount[1].trim();

        await driver.sleep(1000);
        if(actualWoTitle != workOrderStepDef.getWoTitle()){ return actualWoTitle+":Wo Title Don't Match:"+workOrderStepDef.getWoTitle(); }
        await driver.sleep(1000);
        if(actualTotalWoAmount !=workOrderStepDef.getWoTotalAmount()){ return actualTotalWoAmount+":Wo Total Amount Don't Match:"+workOrderStepDef.getWoTotalAmount(); }
        await driver.sleep(1000);
        if(actualBillNo != billNo){ return actualBillNo+":Bill No Don't Match:"+billNo; }
        await driver.sleep(1000);
        if(actualBillAmount != parseInt(billAmount)/2){ return actualBillAmount+":Bill Amount Don't Match:"+parseInt(billAmount)/2; }
        await driver.sleep(1000);
    }

    testSet.approveAdvanceBill = async () => {
        await driver.sleep(1000);
        await driver.scrollToHeight(800);
        await driver.sleep(2000);
        if(await driver.waitClick("//a[contains(.,'Approve Bill')]") === false){ return "Approve Bill Button not Clicked";}
    }

    testSet.logOutBank = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("(//a[@class='dropdown-toggle'])[1]") === false){ return "ERP Admin Button not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("//a[@ng-click='logout()']") === false){ return "Log Out Button not Clicked";}
        await driver.sleep(1000);
    }

    testSet.logOutSubContract = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//a[@class='dropdown-toggle hover-initialized']") === false){ return "ERP Admin Button not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("//a[@id='logout']") === false){ return "Log Out Button not Clicked";}
        await driver.sleep(1000);
    }

    testSet.setSubContractorVendorAndAmountSelectionInformation = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//div[@class='tile-body'])[7]") === false){ return "SubContractor Bill Button Not Clicked";}
        if(await driver.waitClick("//a[@ng-click='accordion1 = !accordion1']") === false){ return "Vendor & Amount Selection Button not Clicked"}
        await driver.sleep(500);
        if(await driver.waitClick("//input[@name='vendor_name']") === false){ return "SubContract List Field Click Error";}
        if(await driver.waitClick("//li[contains(.,'Gazipur Polish Store')]") === false){ return "SubContract List Selection Error";}
        if(await driver.waitClick("//select[@name='bill_type']") === false){ return "SubContract List Field Click Error";}
        if(await driver.waitClick("//option[contains(.,'Advanced Bill')]") === false){ return "Bill Type Selection Error";}
        await driver.sleep(500);
        if(await driver.waitClick("(//th[@class='text-center'])[2]") === false){ return "Bill Sl. No Button Not Clicked";}
        await driver.sleep(1000);
        if(await driver.waitClick("(//span[@class='box'])[1]") === false){ return "Radio Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='bill_0']", "162.5") === false){ return "Value Not Set into Bill Amount";}
        await driver.sleep(1000);
    }

    testSet.setBankInformation = async () =>{
        await driver.sleep(500);
        if(await driver.waitClick("//a[@ng-click='accordion2 = !accordion2']") === false){ return "Bank Information Button Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='bank_name']","Trust Bank") === false){ return "Value Not Inserted into Bank Name Field";}
        if(await driver.waitClick("//li[contains(.,'Trust Bank')]") === false){ return "Bank Selection Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='account_no']","0210589481") === false){ return "Value Not Inserted into Account No Field";}
        if(await driver.waitClick("//li[contains(.,'0210589481')]") === false){ return "Account Number Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='checkbook_no']","1122") === false){ return "Value Not Inserted into Chequebook Field";}
        if(await driver.waitClick("(//li[contains(.,'1122')])[1]") === false){ return "Chequebook Not Clicked";}
    }

    testSet.makePayment = async () => {
        await driver.sleep(1000);
        await driver.scrollToElement("//a[contains(.,'Payment')]");
        await driver.sleep(1000);
        if(await driver.waitClick("//a[contains(.,'Payment')]") === false){ return "Payment Button Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='paymentAmount']","162.5") === false){ return "Payment Amount Not Set";}
        if(await driver.waitClick("//select[@id='payment_type']") === false){ return "Payment Type Not Clicked";}
        if(await driver.waitClick("//option[contains(.,'Cash')]") === false){ return "Payment Type Not Set";}
        if(await driver.waitClick("//select[@id='bank']") === false){ return "Cash Head Not Clicked";}
        if(await driver.waitClick("//option[contains(.,'ID:19600 Cash in Hand Site')]") === false){ return "Cash Head Not Set";}
        if(await driver.waitSendKeys("//input[@id='voucherDate']", "03042020") === false){ return "Payment Type Not Set";}
        if(await driver.waitClick("//button[contains(.,'Confirm Payment')]") === false){ return "Confirm Payment Button Not Clicked";}
        await driver.sleep(1000);

    }

    testSet.completeWoVerify = async () => {
        //gto to complete & denied list
        await driver.sleep(1000);
        if(await driver.waitClick("//a[contains(.,'Completed & Denied List')]") === false){ return "Complete & Denied List Work Order Button not Clicked";}
        await driver.sleep(3000);

        //search by WO
        await driver.sleep(500);
        if(await driver.waitSendKeys("(//input[@ng-change='columnSearch()'])[2]", await WoID) === false){ return "Search WO Value Not Set";}
        await driver.sleep(500);

        //get the compltete status of that specific WO & Compare it
        let actualWoStatus = await driver.waitGetText("(//tr[1]/td[@class='ng-binding'])[10]");
        actualWoStatus = actualWoStatus.trim();
        await driver.sleep(2000);
        if(actualWoStatus != "Work order Completed"){ return actualWoStatus +"Complete Status Not Match: Work order Completed"}

        //go to details page of that WO
        if(await driver.waitClick("(//a[@class='btn btn-sm btn-outline blue'])[1]") === false){ return "Work Order Details Button not Clicked";}
        await driver.sleep(1000);

        //go to bill history page
        await driver.sleep(500);
        if(await driver.waitClick("(//div[@class='mt-step-title uppercase font-grey-cascade'])[3]") === false){ return "Bill History Button Not Clicked";}
        await driver.sleep(500);
        
        //get all bill paid status
        await driver.sleep(1000);
        let AB1 = await driver.waitGetText("//tr[1]/td[@class='ng-binding'][13]");
        await driver.sleep(1000);
        let AB2 = await driver.waitGetText("//tr[2]/td[@class='ng-binding'][13]");
        await driver.sleep(1000);
        let RB1 = await driver.waitGetText("//tr[3]/td[@class='ng-binding'][13]");
        await driver.sleep(1000);
        let RB2 = await driver.waitGetText("//tr[4]/td[@class='ng-binding'][13]");
        await driver.sleep(1000);
        let RB3 = await driver.waitGetText("//tr[5]/td[@class='ng-binding'][13]");
        await driver.sleep(1000);
        let FB1 = await driver.waitGetText("//tr[6]/td[@class='ng-binding'][13]");
        await driver.sleep(1500);

        //compare those goted status with expected status of every single bill
        if(AB1.trim() != "Bill Paid"){ return AB1+":Advance Bill 1 Not Paid:"; }
        await driver.sleep(1000);
        if(AB2.trim() != "Bill Paid"){ return AB2+":Advance Bill 2 Not Paid:"; }
        await driver.sleep(1000);
        if(RB1.trim() != "Bill Paid"){ return RB1+":Running Bill 1 Not Paid:"; }
        await driver.sleep(1000);
        if(RB2.trim() != "Bill Paid"){ return RB2+":Running Bill 2 Not Paid:"; }
        await driver.sleep(1000);
        if(RB3.trim() != "Bill Paid"){ return RB3+":Running Bill 3 Not Paid:"; }
        await driver.sleep(1000);
        if(FB1.trim() != "Bill Approved"){ return FB1+":Final Bill 1 Not Approved:"; }
        await driver.sleep(2000);
        
        //get AB1 Amount
        await driver.sleep(2000);
        let AB1Amount = await driver.waitGetText("//tr[1]/td[@class='ng-binding'][7]");
        await driver.sleep(1000);

        //get AB2 Amount
        let AB2Amount = await driver.waitGetText("//tr[2]/td[@class='ng-binding'][7]");
        await driver.sleep(1000);

        //get RB1 amount and remove the comma
        let RB1Amount = await driver.waitGetText("//tr[3]/td[@class='ng-binding'][7]");
        await driver.sleep(1000);
        RB1Amount = RB1Amount.replace(",", "").trim();
        await driver.sleep(500);

        //get RB2 amount and remove the comma
        let RB2Amount = await driver.waitGetText("//tr[4]/td[@class='ng-binding'][7]");
        await driver.sleep(1000);
        RB2Amount = RB2Amount.replace(",", "").trim();
        await driver.sleep(500);

        //get RB3 amount and remove the comma
        let RB3Amount = await driver.waitGetText("//tr[5]/td[@class='ng-binding'][7]");
        await driver.sleep(1000);
        RB3Amount = RB3Amount.replace(",", "").trim();
        await driver.sleep(500);

        //get FB1 amount
        let FB1Amount = await driver.waitGetText("//tr[6]/td[@class='ng-binding'][7]");
        await driver.sleep(1500);

        //compare those goted amount with expected Amount of every single bill
        if(AB1Amount.trim() != "325.00"){ return AB1Amount+":Advance Bill 1 Amount Not Matched."; }
        await driver.sleep(1000);
        if(AB2Amount.trim() != "325.00"){ return AB2Amount+":Advance Bill 2 Amount Not Matched."; }
        await driver.sleep(1000);
        if(RB1Amount.trim() != "6175.00"){ return RB1Amount+":Running Bill 1 Amount Not Matched."; }
        await driver.sleep(1000);
        if(RB2Amount.trim() != "6175.00"){ return RB2Amount+":Running Bill 2 Amount Not Matched."; }
        await driver.sleep(1000);
        if(RB3Amount.trim() != "16000.00"){ return RB3Amount+":Running Bill 3 Amount Not Matched."; }
        await driver.sleep(1000);
        if(FB1Amount.trim() != "0.00"){ return FB1Amount+":Final Bill 1 Amount Not Matched."; }
        await driver.sleep(2000);

        //sum all the amount
        let totalAmount = parseInt(AB1Amount) + parseInt(AB2Amount) + parseInt(RB1Amount) + parseInt(RB2Amount) + parseInt(RB3Amount) + parseInt(FB1Amount);

        //compare total amount with expected total WO Amount
        await driver.sleep(1000);
        if(totalAmount.toString() != "29000"){ return totalAmount+":Total Amount Sum After Paid, Not Matched:29000"; }
        await driver.sleep(1000);
    }

    return testSet;
}
module.exports = advanceBill;