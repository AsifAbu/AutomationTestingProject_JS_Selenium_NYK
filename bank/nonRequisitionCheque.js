let nonRequisitionCheque = (driver) => {
    let testSet = {}

    let totalAmount = 200;
    let beneficiaryName = "Asad & Co";
    let bank = "Trust Bank , Mohakhali";
    let accountNumber = "0210589481";
    let chequeType = "Regular Business Operation (without requisition)";
    let chequeReceipentType = "BEARER";

    testSet.clickCreateChequeBtn = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//a[contains(.,'Cheques')]") === false){ return "Cheque Button not Clicked";}
        if(await driver.waitClick("(//a[contains(.,'Create Cheque')])[2]") === false){ return "Create Cheque Button Not Clicked";}
    }

    testSet.clickRegularBOBtn = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//div[@class='tile-body'])[1]") === false){ return "Regular BO Button Not Clicked";}
        if(await driver.waitClick("//a[@ng-click='accordion1 = !accordion1']") === false){ return "Vendor & Amount Selection Button not Clicked"}
    }

    testSet.setValuesIntoVendorAmountSelection = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//select[@name='vendor_type']") === false){ return "Requisition Field Click Error";}
        if(await driver.waitClick("//option[contains(.,'Non-requisition Entries (Manual)')]") === false){ return "Requisition Type Selection Error";}
        if(await driver.waitSendKeys("(//input[@name='amount'])[2]","200") === false){ return "Cheque Amount Not Set";}
    }

    testSet.setBankInformation = async () =>{
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='bank_name']","Trust Bank") === false){ return "Value Not Inserted into Bank Name Field";}
        if(await driver.waitClick("//li[contains(.,'Trust Bank')]") === false){ return "Bank Selection Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='account_no']","0210589481") === false){ return "Value Not Inserted into Account No Field";}
        if(await driver.waitClick("//li[contains(.,'0210589481')]") === false){ return "Account Number Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='checkbook_no']","1122") === false){ return "Value Not Inserted into Chequebook Field";}
        if(await driver.waitClick("(//li[contains(.,'1122')])[1]") === false){ return "Chequebook Not Clicked";}
    }

    testSet.setChequeInformation = async () => {
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='beneficiary_name']","Asad & Co") === false){ return "Value Not Inserted into Banefficiary Name Field";}
        if(await driver.waitClick("(//li[contains(.,'Asad & Co')])[1]") === false){ return "Beneficiary Name Selection Not Clicked";}

        if(await driver.waitClick("(//input[@name='check_cat'])[1]") === false){ return "Bearer Cheque Radio Button Not Clicked";}

        if(await driver.waitSendKeys("//input[@name='check_auditor_name']","ERP Admin") === false){ return "Value Not Inserted into Cheque Auditor Field";}
        if(await driver.waitClick("(//li[contains(.,'ERP Admin')])[2]") === false){ return "Auditor Name Not Clicked";}

        if(await driver.waitSendKeys("//input[@name='sig_auth_name']","ERP Admin") === false){ return "Value Not Inserted into Signatory Authority Field";}
        if(await driver.waitClick("(//li[contains(.,'ERP Admin')])[2]") === false){ return "Signatory Authority Name Not Clicked";}

        if(await driver.waitClick("//button[contains(.,'Submit')]") === false){ return "Submit Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false){ return "Ok Button Not Clicked";}
    }

    testSet.verifyCreatedValuesOfNonRequisitionCheque = async () => {
        await driver.sleep(1000);
        let actualTotalAmount = await driver.waitGetText("(//td[@class='ng-binding'])[1]");
        await driver.sleep(500);
        let actualBeneficiary = await driver.waitGetText("(//td[@class='ng-binding'])[2]");
        await driver.sleep(500);
        let actualBank = await driver.waitGetText("(//td[@class='ng-binding'])[3]");
        await driver.sleep(500);
        let actualAccountNumber = await driver.waitGetText("(//td[@class='ng-binding'])[4]");
        await driver.sleep(500);
        let actualChequeType = await driver.waitGetText("(//td[@class='ng-binding'])[6]");
        await driver.sleep(500);
        let actualReceipentType = await driver.waitGetText("(//td[@class='uppercase ng-binding'])[2]");
        await driver.sleep(1000);
        
        //Verify Those Data
        if(actualTotalAmount != totalAmount){return "Total Amount Doesn't Match";}
        if(actualBeneficiary != beneficiaryName){return "Beneficiary Name Doesn't Match";}
        if(actualBank != bank){return "Bank Name Doesn't Match";}
        if(actualAccountNumber != accountNumber){return "Account Number Doesn't Match";}
        if(actualChequeType != chequeType){return "Cheque Type Doesn't Match";}
        if(actualReceipentType != chequeReceipentType){return "Cheque Receipent Type Doesn't Match";}

    }

    testSet.reviewCheque = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Review')]") === false){ return "Review Button Not Clicked";}
    }

    testSet.printCheque = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Print')]") === false){ return "Print Button Not Clicked";}
    }

    testSet.verifyPrintChequeData = async () => {
        // await driver.sleep(5000);
        // if(await driver.waitClick("//p[7]") === false){ return "Print Cheque Page Not Clicked ? This feature is Postponed!";}
        // await driver.sleep(1000);
        // let actualTotalAmount = await driver.waitGetText("//p[7]");
        // let amountTest = actualTotalAmount.split("/");
        // actualTotalAmount = amountTest[0];
        // await driver.sleep(5000);
        // actualBeneficiary = await driver.waitGetText("//p[4]");
        // await driver.sleep(5000);

        // //Verify Those Data
        // if(actualTotalAmount != totalAmount){return "Total Amount Doesn't Match";}
        // if(actualBeneficiary != beneficiaryName){return "Beneficiary Name Doesn't Match";}
    }

    testSet.closeCurrentWindow = async () => {
        await driver.sleep(5000);
        //close Tab
		await driver.closeCurrentTab();
		await driver.sleep(2000);
    }

    testSet.confirmLeafNumber = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'CONFIRM')]") === false){ return "Confirm Cheque Leaf Number Button Not Clicked";}
    }
    
    testSet.approveCheque = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("(//button[contains(.,'Approve')])[2]") === false){ return "Approve Button Not Clicked";}
    }

    testSet.deliverCheque = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Deliver')]") === false){ return "Deliver Button Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='receiver_name']","Asif Testing") === false){ return "Value Not Inserted into Cheque Receiver Name Field";}
        if(await driver.waitSendKeys("//input[@name='receiver_phone']","01700000000") === false){ return "Value Not Inserted into Cheque Receiver Phone Number Field";}
        if(await driver.waitClick("//button[contains(.,'CONFIRM DELIVERY')]") === false){ return "Confirm Delivery Button Not Clicked";}


    }

    testSet.completeCheque = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Complete')]") === false){ return "Complete Button Not Clicked";}
    }







    return testSet;
}
module.exports = nonRequisitionCheque;