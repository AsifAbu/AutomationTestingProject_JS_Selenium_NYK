const { Key } = require("selenium-webdriver");

let runningBill = (driver) => {
    let testSet = {};
    let billNo = "";

    testSet.createRunningBill = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//a[contains(.,'Create Running Bill')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//a[contains(.,'Create Running Bill')]") === false){ return "Running Bill Button not Clicked";}
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

    testSet.verifyRunningBillInfo = async () => {
        await driver.sleep(2000);

        let actualBillNo = await driver.waitGetText("(//td[@class='text-left ng-binding'])[11]");
        await driver.sleep(2000);
        let demoBillNo = actualBillNo.split(":");
        actualBillNo = demoBillNo[1].trim();
        await driver.sleep(1000);

        // let actualBillAmount = await driver.waitGetText("(//td[@class='text-left ng-binding'])[15]");
        // await driver.sleep(2000);
        // let demoBillAmount = actualBillAmount.split(":");
        // actualBillAmount = demoBillAmount[1].trim();
        // actualBillAmount = actualBillAmount.replace(",", "");
        // await driver.sleep(1000);

        if(actualBillNo != billNo){ return actualBillNo+":Running Bill No Don't Match:"+billNo; }
        await driver.sleep(1000);

        // if(actualBillAmount != billAmount){ return actualBillAmount+":Running Bill Amount Don't Match:"+billAmount; }
        await driver.sleep(1000);

    }

    testSet.approveRunningBill = async () => {
        await driver.sleep(1000);
        await driver.scrollToElement("//a[contains(.,'Approve Bill')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//a[contains(.,'Approve Bill')]") === false){ return "Approve Bill Button not Clicked";}
        await driver.sleep(500);
    }

    testSet.modifyRunningBill = async () => {
        await driver.sleep(1000);
        await driver.scrollToElement("//a[contains(.,'Modify Bill')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//a[contains(.,'Modify Bill')]") === false){ return "Modify Bill Button Not Clicked";}
        await driver.sleep(1000);
        if(await driver.setValue("//input[@name='input_0']","162.5") === false){ return "Amount Not Set in Adjust Amount Field";}

        await driver.sleep(1000);
        if(await driver.setValue("//input[@name='input_1']","162.5") === false){ return "Amount Not Set in Adjust Amount Field";}

        await driver.sleep(1000);
        await driver.scrollToElement("//button[contains(.,'Save Bill Data')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//button[contains(.,'Save Bill Data')]") === false){ return "Save Bill Button Not Clicked";}
        await driver.sleep(1000);
    }

    testSet.makePayment = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//a[contains(.,'Payment')]") === false){ return "Payment Button Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='paymentAmount']","3087.5") === false){ return "Payment Amount Not Set";}
        if(await driver.waitClick("//select[@id='payment_type']") === false){ return "Payment Type Not Clicked";}
        if(await driver.waitClick("//option[contains(.,'Cash')]") === false){ return "Payment Type Not Set";}
        if(await driver.waitClick("//select[@id='bank']") === false){ return "Cash Head Not Clicked";}
        if(await driver.waitClick("//option[contains(.,'ID:19600 Cash in Hand Site')]") === false){ return "Cash Head Not Set";}
        if(await driver.waitSendKeys("//input[@id='voucherDate']", "03082020") === false){ return "Payment Type Not Set";}
        if(await driver.waitClick("//button[contains(.,'Confirm Payment')]") === false){ return "Confirm Payment Button Not Clicked";}
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
        if(await driver.waitClick("//option[contains(.,'Running Bill')]") === false){ return "Bill Type Selection Error";}
        await driver.sleep(500);
        if(await driver.waitClick("(//th[@class='text-center'])[2]") === false){ return "Bill Sl. No Button Not Clicked";}
        await driver.sleep(1000);
        if(await driver.waitClick("(//span[@class='box'])[1]") === false){ return "Radio Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='bill_0']", "3087.5") === false){ return "Value Not Set into Bill Amount";}
        await driver.sleep(1000);
    }

    testSet.amendmentCreate = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//a[contains(.,'Create Amendment')]");
        await driver.sleep(3000);

        if(await driver.waitClick("//a[contains(.,'Create Amendment')]") === false){ return "Amendment Button Not Clicked";}
        await driver.sleep(1000);

        if(await driver.waitClick("//button[contains(.,'Add Scope')]") === false){ return "Add Scope Button Not Clicked";}
        await driver.sleep(1000);

        await driver.sleep(1000);
        await driver.scrollToElement("//input[@name='ccName']");
        await driver.sleep(2000);

        if(await driver.waitClick("//input[@name='ccName']") === false){ return "Cost Center Name Field Not Clicked";}
        await driver.sleep(1000);

        await driver.sleep(1000);
        await driver.scrollToElement("//a[contains(.,'10100.18 Test Ashad Costcenter  9')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//a[contains(.,'10100.18 Test Ashad Costcenter  9')]") === false){ return "Cost Center Not Select";}
        await driver.sleep(1000);

        await driver.sleep(1000);
        await driver.scrollToElement("//button[contains(.,'Ok')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//button[contains(.,'Ok')]") === false){ return "Ok Button Not Clicked";}
        await driver.sleep(1000);

        if(await driver.waitSendKeys("//input[@name='itemCode']", "SW-FNW-011/001") === false){ return "Item Code Not Insert";}
        if(await driver.waitClick("//button[@class='btn default ng-scope']") === false){ return "Item Code Tick Button Not Clicked";}

        if(await driver.waitSendKeys("(//input[@name='quantity'])[1]", "400") === false){ return "Quantity Not Insert";}

        if(await driver.waitSendKeys("(//input[@name='rate'])[1]", "40") === false){ return "Rate Not Insert";}
        await driver.sleep(1000);
        await driver.scrollToElement("//button[contains(.,'Add Item')]");
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Add Item')]") === false){ return "Add Item Button Not Clicked";}
        await driver.sleep(2000);

        await driver.scrollToElement("//button[contains(.,'Submit')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//button[contains(.,'Submit')]") === false){ return "Submit Button Not Clicked";}
    }

    testSet.amendmentDeny = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//span[@class='box']");
        await driver.sleep(2000);

        if(await driver.waitClick("//span[@class='box']") === false){ return "Check Box Button Not Clicked";}

        await driver.sleep(1000);
        await driver.scrollToElement("//a[contains(.,'Deny Amendment')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//a[contains(.,'Deny Amendment')]") === false){ return "Deny Button Not Clicked";}
        await driver.sleep(1000);
    }

    testSet.amendmentApprove = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//span[@class='box']");
        await driver.sleep(2000);

        if(await driver.waitClick("//span[@class='box']") === false){ return "Check Box Button Not Clicked";}

        await driver.sleep(1000);
        await driver.scrollToElement("//a[contains(.,'Approve Amendment')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//a[contains(.,'Approve Amendment')]") === false){ return "Aprove Button Not Clicked";}
        await driver.sleep(1000);

    }

    testSet.amendmentProgressReport = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//div[@class='mt-step-title uppercase font-grey-cascade'])[2]") === false){ return "Progress Reporting Button Not Clicked";}
        await driver.sleep(500);

        await driver.sleep(1000);
        await driver.scrollToElement("(//span[@class='ng-scope'])[3]");
        await driver.sleep(2000);

        await driver.sleep(1000);
        await driver.scrollToHeight(500);
        await driver.sleep(3000);

        if(await driver.waitClick("(//span[@class='ng-scope'])[3]") === false){ return "Report Progress 3 Button Not Clicked";}
        await driver.sleep(500);

        await driver.sleep(1000);
        await driver.scrollToElement("(//button[@ng-click='open1()'])[3]");
        await driver.sleep(2000);

        if(await driver.waitClick("(//button[@ng-click='open1()'])[3]") === false){ return "Calender Button Not Clicked";}
        await driver.sleep(1000);
        await driver.scrollToElement("(//button[@class='btn btn-sm btn-info uib-datepicker-current ng-binding'])[3]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//button[@class='btn btn-sm btn-info uib-datepicker-current ng-binding'])[3]") === false){ return "Date Today Button Not Clicked";}
        await driver.sleep(500);

        await driver.sleep(1000);
        await driver.scrollToElement("(//input[@name='quantityToReport'])[3]");
        await driver.sleep(2000);

        if(await driver.waitSendKeys("(//input[@name='quantityToReport'])[3]", "400") === false){ return "Report Ammount with Code Not Set";}
        await driver.sleep(1000);

        await driver.sleep(1000);
        await driver.scrollToElement("(//button[contains(.,'Submit')])[3]");
        await driver.sleep(2000);

        if(await driver.waitClick("(//button[contains(.,'Submit')])[3]") === false){ return "Submit 3 Button Not Clicked";}
        await driver.sleep(500);
    }

    testSet.amendmentValidateProgressReport = async () => {
        await driver.sleep(1000);
        await driver.scrollToElement("(//button[@class='btn btn-outline green btn-sm'])[3]");
        await driver.sleep(2000);

        if(await driver.waitClick("(//button[@class='btn btn-outline green btn-sm'])[3]") === false){ return "Validate Progress Report 1 Button Not Clicked";}
        await driver.sleep(500);

        await driver.sleep(1000);
        await driver.scrollToElement("//input[@name='validate_0']");
        await driver.sleep(2000);

        if(await driver.waitSendKeys("//input[@name='validate_0']", "400") === false){ return "Validate 3 Value Not Add";}
        await driver.sleep(500);

        await driver.sleep(1000);
        await driver.scrollToElement("(//button[contains(.,'Submit Validation')])[3]");
        await driver.sleep(2000);

        if(await driver.waitClick("(//button[contains(.,'Submit Validation')])[3]") === false){ return "Submit Validate 1 Button Not Clicked";}
        await driver.sleep(1000);
    }

    testSet.makePaymentAmendment = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//a[contains(.,'Payment')]");
        await driver.sleep(3000);

        if(await driver.waitClick("//a[contains(.,'Payment')]") === false){ return "Payment Button Not Clicked";}
        if(await driver.waitSendKeys("//input[@name='paymentAmount']","16000") === false){ return "Payment Amount Not Set";}
        if(await driver.waitClick("//select[@id='payment_type']") === false){ return "Payment Type Not Clicked";}
        if(await driver.waitClick("//option[contains(.,'Cash')]") === false){ return "Payment Type Not Set";}
        if(await driver.waitClick("//select[@id='bank']") === false){ return "Cash Head Not Clicked";}
        if(await driver.waitClick("//option[contains(.,'ID:19600 Cash in Hand Site')]") === false){ return "Cash Head Not Set";}
        if(await driver.waitSendKeys("//input[@id='voucherDate']", "03082020") === false){ return "Payment Type Not Set";}
        if(await driver.waitClick("//button[contains(.,'Confirm Payment')]") === false){ return "Confirm Payment Button Not Clicked";}
        await driver.sleep(1000);
    }

    return testSet;
}
module.exports = runningBill;