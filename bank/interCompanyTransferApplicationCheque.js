let interCompanyTransferApplicationCheque = (driver) => {
    let testSet = {}

    let totalAmount = 20;
    let beneficiaryName = "Asad & Co";
    let bank = "Trust Bank , Mohakhali";
    let accountNumber = "0210589481";
    let chequeType = "Head Office to Project Office Transfer";
    let chequeReceipentType = "BEARER";

    let companyFrom = "MAX Infrastructure Limited";
    let businessUnitFrom = "CDA";
    let bankNameFrom = "Trust Bank";
    let accountNoFrom = "0210589481";

    let companyTo = "MAX Infrastructure Limited";
    let businessUnitTo = "CDA";
    let bankNameTo = "";
    let accountNoTo = "";

    testSet.clickTransferBtn = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//div[@class='tile-body'])[6]") === false){ return "Transfer Button not Clicked";}
        if(await driver.waitClick("//a[@ng-click='accordion1 = !accordion1']") === false){ return "Transfer Type Amount Selection Button not Clicked";}
    }

    testSet.setValuesIntoTransferTypeAmountSelection = async () => {
        await driver.sleep(500);
        await driver.scrollToHeight(-500);
        await driver.sleep(500);

        if(await driver.waitClick("//select[@name='transfer_type']") === false){ return "Transfer Type Field Not Clicked";}
        if(await driver.waitClick("//option[contains(.,'Head Office to Project Office Transfer')]") === false){ return "Transfer Type Not Clicked";}

        if(await driver.waitClick("//select[@name='transfer_payment_type']") === false){ return "Payment Type Field Not Clicked";}
        if(await driver.waitClick("//option[contains(.,'Transfer By Application')]") === false){ return "Payment Type Not Clicked";}

        if(await driver.waitClick("//th[contains(.,'Requisition Type')]") === false){ return "Requisition type Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Requested By')]") === false){ return "Requisted by Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Requisition Title')]") === false){ return "Requisition Title Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Item Name')]") === false){ return "Iten Name type Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Vendor')]") === false){ return "Vendor Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Requisition ID/(Purchase Order or Fund row ID)')]") === false){ return "Requisition ID/(Purchase Order or Fund row ID) Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Approved Amount in Purchase Order By Boss')]") === false){ return "Approved Amount in Purchase Order By Boss Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Total Approved Amount in Accounts Requisition By Central Accountant')]") === false){ return "Total Approved Amount in Accounts Requisition By Central Accountant Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Total Transfer Amount Payment')]") === false){ return "Total Transfer Amount Payment Field Not Clicked";}
        if(await driver.waitClick("//th[contains(.,'Remaining Transfer Amount')]") === false){ return "Remaining Transfer Amount Field Not Clicked";}
        if(await driver.waitClick("(//th[contains(.,'ID')])[1]") === false){ return "ID Field Not Clicked";}
        await driver.sleep(2000);
        if(await driver.waitSendKeys("//input[@name='transfer_0']", "20") === false){ return "Value Not Set into Amount field";}
        await driver.sleep(500);

        // //Reset All Amount Button Verification
        // if(await driver.waitClick("//button[contains(.,'Reset All Amount')]") === false){ return "Reset All Amount Button Not Clicked";}
        // await driver.scrollToHeight(900);
        // await driver.sleep(3000);
        // //let totalAmount = await driver.waitGetText("//input[@name='amount']/@value");
        // let totalAmount = await document.driver.getElementsByName('amount').values.toString();
        // if(totalAmount != 0){
        //     await driver.sleep(4000);
        //     await driver.scrollToHeight(-900);
        //     if(await driver.waitSendKeys("//input[@name='transfer_0']", "20") === false){
        //         return "Value Not Set into Amount field";
        //     }
        //     return "Reset Button Not Worked!";
        // }
    }

    testSet.bankInformation = async () => {
        await driver.sleep(1000);
        if(await driver.waitSendKeys("//input[@name='bank_name']", "Trust Bank") === false){ return "Value Not Set into Bank Name field";}
        if(await driver.waitClick("//li[contains(.,'Trust Bank')]") === false){ return "Bank Name Not Set";}
        await driver.sleep(500);

        if(await driver.waitSendKeys("//input[@name='account_no']", "0210589481") === false){ return "Value Not Set into Bank Account No field";}
        if(await driver.waitClick("//li[contains(.,'0210589481')]") === false){ return "Bank Account No Not Set";}
        await driver.sleep(500);

        if(await driver.waitClick("//select[@name='bank_to']") === false){ return "Bank Name To field Not Clicked";}
        if(await driver.waitClick("//*[@id='collapse_3_2']/div/div[3]/div[2]/select/option[2]") === false){ return "Bank Name To Not Set";}
        await driver.sleep(500);

        if(await driver.waitClick("//select[@name='account_to_no']") === false){ return "Value Not Set into Bank Account No field";}
        if(await driver.waitClick("//*[@id='collapse_3_2']/div/div[4]/div[2]/div/select/option[2]") === false){ return "Bank Account No Not Set";}
        await driver.sleep(500);

        bankNameTo = await driver.waitGetText("//*[@id='collapse_3_2']/div/div[3]/div[2]/select/option[2]");
        await driver.sleep(500);
        accountNoTo = await driver.waitGetText("//*[@id='collapse_3_2']/div/div[4]/div[2]/div/select/option[2]");
        await driver.sleep(500);
    }

    testSet.applicationInformation = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//select[@name='transfer_transaction_type']") === false){ return "Value Not Set into Transaction Type field";}
        if(await driver.waitClick("//option[contains(.,'Real Time Gross Settlement (RTGS)')]") === false){ return "Transaction Type Not Set";}
        await driver.sleep(500);

        if(await driver.waitSendKeys("//input[@name='check_auditor_name']","ERP Admin") === false){ return "Value Not Inserted into Cheque Auditor Field";}
        if(await driver.waitClick("(//li[contains(.,'ERP Admin')])[2]") === false){ return "Auditor Name Not Clicked";}

        if(await driver.waitSendKeys("//input[@name='sig_auth_name']","ERP Admin") === false){ return "Value Not Inserted into Signatory Authority Field";}
        if(await driver.waitClick("(//li[contains(.,'ERP Admin')])[2]") === false){ return "Signatory Authority Name Not Clicked";}

        if(await driver.waitClick("//button[contains(.,'Submit')]") === false){ return "Submit Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false){ return "Ok Button Not Clicked";}
    }

    testSet.verifyCreatedValuesOfInterCompanyTransferApplicationCheque = async () => {
        await driver.sleep(1000);
        let actualTotalAmount = await driver.waitGetText("(//td[@class='ng-binding'])[1]");
        await driver.sleep(500);
        let actualBank = await driver.waitGetText("(//td[@class='ng-binding'])[3]");
        await driver.sleep(500);
        let actualAccountNumber = await driver.waitGetText("(//td[@class='ng-binding'])[4]");
        await driver.sleep(500);
        let actualChequeType = await driver.waitGetText("(//td[@class='ng-binding'])[6]");
        await driver.sleep(500);
        let actualReceipentType = await driver.waitGetText("(//td[@class='uppercase ng-binding'])[2]");
        
        await driver.scrollToHeight(400);
        await driver.sleep(500);
        let actualCompanyFrom = await driver.waitGetText("(//td[@class='ng-binding'])[8]");
        await driver.sleep(500);
        let actualBusinessFrom = await driver.waitGetText("(//td[@class='ng-binding'])[9]");
        await driver.sleep(500);
        let actualBankNameFrom = await driver.waitGetText("(//td[@class='ng-binding'])[10]");
        await driver.sleep(500);
        let actualAccountNoFrom = await driver.waitGetText("(//td[@class='ng-binding'])[11]");

        await driver.sleep(500);
        let actualCompanyTo = await driver.waitGetText("(//td[@class='ng-binding'])[12]");
        await driver.sleep(500);
        let actualBusinessTo = await driver.waitGetText("(//td[@class='ng-binding'])[13]");
        await driver.sleep(500);
        let actualBankNameTo = await driver.waitGetText("(//td[@class='ng-binding'])[14]");
        await driver.sleep(500);
        let actualAccountNoTo = await driver.waitGetText("(//td[@class='ng-binding'])[15]");
        await driver.sleep(1000);

        //Verify Those Data
        if(actualTotalAmount != totalAmount){return "Total Amount Doesn't Match";}
        if(actualBank != bank){return "Bank Name Doesn't Match";}
        if(actualAccountNumber != accountNumber){return "Account Number Doesn't Match";}
        if(actualChequeType != chequeType){return "Cheque Type Doesn't Match";}
        if(actualReceipentType != chequeReceipentType){return "Cheque Receipent Type Doesn't Match";}
        await driver.sleep(1000);
        if(actualCompanyFrom != companyFrom){return "Company From Doesn't Match";}
        if(actualBusinessFrom != businessUnitFrom){return "Business From Doesn't Match";}
        if(actualBankNameFrom != bankNameFrom){return "Bank Name From Doesn't Match";}
        if(actualAccountNoFrom != accountNoFrom){return "Account No From Doesn't Match";}
        await driver.sleep(1000);
        if(actualCompanyTo != companyTo){return "Company To Doesn't Match";}
        if(actualBusinessTo != businessUnitTo){return "Business To Doesn't Match";}
        if(actualBankNameTo != bankNameTo){return actualBankNameTo+":Bank Name To Doesn't Match:"+bankNameTo;}
        if(actualAccountNoTo != accountNoTo){return "Account No To Doesn't Match";}
        await driver.sleep(1000);
    }

    testSet.completeInterCompanyTransferApplicationCheque = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Complete')]") === false){ return "Complete Button Not Clicked";}
        await driver.sleep(1000);
        if(await driver.waitSendKeys("//input[@name='transaction_date']","02252020") === false){ return "Value Not Inserted into Date Field";}
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Confirm Complete')]") === false){ return "Confirm Complete Button Not Clicked";}
    }

    return testSet;
}

module.exports = interCompanyTransferApplicationCheque;