let finalBill = (driver) => {
    let testSet = {};
    let billNo = "";

    testSet.createFinalBill = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//a[contains(.,'Create Final Bill')]");
        await driver.sleep(3000);

        if(await driver.waitClick("//a[contains(.,'Create Final Bill')]") === false){ return "Final Bill Button not Clicked";}
        if(await driver.waitClick("//select[@ng-model='billData.idApprover']") === false){ return "Approver field not click";}
        if(await driver.waitClick("(//option[contains(.,'ERP Admin')])[1]") === false){ return "Approver not Select";}

        await driver.sleep(3000);
        await driver.scrollToHeight(1000);
        await driver.sleep(2000);
        billNo =await driver.waitGetValue("//input[@ng-model='billInfo.basicInfo.billId']");
        await driver.sleep(2000);
        if(await driver.waitClick("(//a[@ng-click='toggleOpen()'])[3]") === false){ return "Other Info Button not Clicked";}
        await driver.sleep(1000);
        await driver.scrollToHeight(800);
        await driver.sleep(2000);

        if(await driver.waitClick("//button[contains(.,'Submit')]") === false){ return "Submit Button not Clicked";}
        await driver.sleep(1000);
    }

    testSet.verifyFinalBillInfo = async () => {
        await driver.sleep(2000);

        let actualBillNo = await driver.waitGetText("(//td[@class='text-left ng-binding'])[11]");
        await driver.sleep(2000);
        let demoBillNo = actualBillNo.split(":");
        actualBillNo = demoBillNo[1].trim();
        await driver.sleep(1000);

        if(actualBillNo != billNo){ return actualBillNo+":Final Bill No Don't Match:"+billNo; }
        await driver.sleep(1000);
    }

    testSet.approveFinalBill = async () => {
        await driver.sleep(1000);
        await driver.scrollToHeight(1000);
        await driver.sleep(2000);
        if(await driver.waitClick("//a[contains(.,'Approve Bill')]") === false){ return "Approve Bill Button not Clicked";}
        await driver.sleep(500);
    }

    testSet.setSubContractorVendorAndAmountSelectionInformation = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//div[@class='tile-body'])[7]") === false){ return "SubContractor Bill Button Not Clicked";}
        if(await driver.waitClick("//a[@ng-click='accordion1 = !accordion1']") === false){ return "Vendor & Amount Selection Button not Clicked"}
        await driver.sleep(500);
        if(await driver.waitClick("//input[@name='vendor_name']") === false){ return "SubContract List Field Click Error";}
        if(await driver.waitClick("//li[contains(.,'Gazipur Polish Store')]") === false){ return "SubContract List Selection Error";}
        if(await driver.waitClick("//select[@name='bill_type']") === false){ return "SubContract List Field Click Error";}
        if(await driver.waitClick("//option[contains(.,'Final Bill')]") === false){ return "Bill Type Selection Error";}
        await driver.sleep(500);
        if(await driver.waitClick("(//th[@class='text-center'])[2]") === false){ return "Bill Sl. No Button Not Clicked";}
        await driver.sleep(1000);
        if(await driver.waitClick("(//span[@class='box'])[1]") === false){ return "Radio Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='bill_0']", "2166") === false){ return "Value Not Set into Bill Amount";}
        await driver.sleep(1000);
    }
    
    return testSet;
}
module.exports = finalBill;