let workOrder = (driver) => {
    let testSet = {};
    let itemCode = "SW-FNW-011/001";
    let givenWoTitle = "work order of automation testing";
    let givenTotalWoAmount = "13000";
    let givenWoID = "";
    let givenSubContractorName = "Gazipur Polish Store";
    let givenProjectName = "CDA";

    //With Code Entry Data
    let givenItemNameWithCode = "Fitting Fixing of PVC Door";
    let givenItemCodeWithCode = "SW-FNW-011/001";
    let givenItemQuantityWithCode = "200";
    let givenItemRateWithCode = "20";
    let givenItemTotalAmountWithCode = "4000";

    //Manual Entry Data
    let givenItemNameManual = "afasdf";
    let givenItemCodeManual = "N|A";
    let givenItemQuantityManual = "300";
    let givenItemRateManual = "30";
    let givenItemTotalAmountManual = "9000";

    testSet.clickWorkOrder = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//a[contains(.,'Work Order')]") === false){ return "Work Order Button not Clicked";}
    }

    testSet.clickCreateWorkOrder = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//a[contains(.,'Create Work Order')]") === false){ return "Create Work Order Button not Clicked";}
    }

    testSet.setBasicInformation = async () => {
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='workOrderTitle']", "work order of automation testing") === false){ return "Value Not Inserted Into Work Order Field";}
        if(await driver.waitClick("//input[@name='subContractorName']") === false){ return "Button Not Clicked Into SubContract Name Field";}
        if(await driver.waitClick("//li[contains(.,'Gazipur Polish Store')]") === false){ return "Button Not Clicked Into SubContract Name Gazipur Field";}

        if(await driver.waitClick("//select[@name='approverId']") === false){ return "Button Not Clicked Into Approver Dropdown Field";}
        if(await driver.waitClick("(//option[contains(.,'ERP Admin')])[1]") === false){ return "Button Not Clicked Into Approver Dropdown Selection Field";}

        if(await driver.waitClick("(//i[@class='glyphicon glyphicon-calendar'])[1]") === false){ return "Date Icon Not Clicked";}
        if(await driver.waitClick("(//td[@class='uib-day text-center ng-scope'])[15]") === false){ return "Date Not Selected";}

        if(await driver.waitClick("(//i[@class='glyphicon glyphicon-calendar'])[2]") === false){ return "Date Icon Not Clicked End";}
        if(await driver.waitClick("(//td[@class='uib-day text-center ng-scope'])[15]") === false){ return "Date Not Selected End";}

        await driver.scrollToHeight(400);
        await driver.sleep(500);
    }

    testSet.setWorkOrderItemDetails = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//i[@class='pull-right glyphicon ng-scope glyphicon-chevron-right'])[1]") === false){ return "Work Order Item Details Button Not Clicked";}
        if(await driver.waitClick("(//input[@name='ccName'])[1]") === false){ return "Cost Center name field Not Clicked";}
        await driver.sleep(500);
        //enter code item
        if(await driver.waitClick("//a[@id='3116_anchor']") === false){ return "Cost Center Not Clicked";}
        await driver.scrollToHeight(600);
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false){ return "Ok Button Not Clicked";}

        if(await driver.waitSendKeys("//input[@name='itemCode']", itemCode) === false){ return "Item Code Not Insert";}
        if(await driver.waitClick("//button[@class='btn default ng-scope']") === false){ return "Item Code Tick Button Not Clicked";}

        if(await driver.waitSendKeys("//input[@name='quantity']", "200") === false){ return "Quantity Not Insert";}

        if(await driver.waitSendKeys("//input[@name='rate']", "20") === false){ return "Rate Not Insert";}
        await driver.sleep(1000);
        await driver.scrollToElement("//button[contains(.,'Add Item')]");
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Add Item')]") === false){ return "Add Item Button Not Clicked";}
        await driver.sleep(2000);

        //manual
        await driver.scrollToElement("(//span[@class='ng-binding'])[4]");
        await driver.sleep(1000);
        if(await driver.waitClick("(//span[@class='ng-binding'])[4]") === false){ return "Manual Button Not Clicked";}
        await driver.sleep(1000);
        await driver.scrollToElement("//input[@name='itemName']");
        await driver.sleep(2000);
        if(await driver.waitClick("//input[@name='itemName']") === false){ return "Item Name Field Not Clicked";}
        await driver.sleep(2000);
        if(await driver.waitClick("(//i[@class='jstree-icon jstree-ocl'])[1]") === false){ return "Asset Button Not Clicked";}
        await driver.sleep(1000);
        if(await driver.waitClick("//a[@id='4950_anchor']") === false){ return "Item Not Select";}
        await driver.scrollToHeight(600);
        await driver.sleep(2000);

        if(await driver.waitClick("//button[contains(.,'OK')]") === false){ return "Ok Button Not Clicked";}

        if(await driver.waitSendKeys("(//input[@name='quantity'])[2]", "300") === false){ return "Quantity Not Insert";}

        if(await driver.waitSendKeys("(//input[@name='rate'])[2]", "30") === false){ return "Rate Not Insert";}

        if(await driver.waitClick("(//select[@ng-model='itemTempDetails.unitId'])[2]") === false){ return "Unit Field Not Clicked";}
        if(await driver.waitClick("(//option[contains(.,'PCs')])[2]") === false){ return "Unit Not Select";}
        //await driver.scrollToHeight(600);
        await driver.sleep(1000);
        await driver.scrollToElement("//button[contains(.,'Add Item')]");
        await driver.sleep(1000);
        if(await driver.waitClick("//button[contains(.,'Add Item')]") === false){ return "Add Item Button Not Clicked";}
        
        await driver.sleep(1000);
        await driver.scrollToHeight(1000);
        await driver.sleep(2000);
    }

    testSet.setAdditionalInformation = async () => {
        await driver.sleep(1000);
        await driver.scrollToElement("(//a[@ng-click='toggleOpen()'])[5]");
        await driver.sleep(1000);
        if(await driver.waitClick("(//a[@ng-click='toggleOpen()'])[5]") === false){ return "Additional Information Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='tdsAmount']", "2") === false){ return "TDS Not Insert";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='retentionAmount']", "0") === false){ return "Retention Not Insert";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='advancedAmount']", "5") === false){ return "Advance Not Insert";}
        await driver.sleep(500);
        if(await driver.waitClick("(//a[@ng-click='toggleOpen()'])[5]") === false){ return "Extra Click Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("//button[contains(.,'Submit')]") === false){ return "Submit Button Not Clicked";}
    }

    testSet.verifyInfo = async () => {
        await driver.sleep(1000);
        let actualWoTitle = await driver.waitGetText("(//td[@class='text-left ng-binding'])[2]");
        await driver.sleep(1000);
        let demoWoTitle = actualWoTitle.split(":");
        actualWoTitle = demoWoTitle[1].trim();
        let actualTotalWoAmount = await driver.waitGetText("(//td[@class='text-left ng-binding'])[8]");
        await driver.sleep(1000);
        let demoWoAmount = actualTotalWoAmount.split(":");
        actualTotalWoAmount = demoWoAmount[1].trim();

        await driver.sleep(2000);
        await driver.scrollToHeight(600);
        await driver.sleep(2000);

        //With Code Entry Data
        let actualItemNameWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[4]");
        await driver.sleep(500);
        let actualItemCodeWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[5]");
        await driver.sleep(500);
        let actualItemQuantityWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[8]");
        await driver.sleep(500);
        let actualItemRateWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[9]");
        await driver.sleep(500);
        let actualItemTotalAmountWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[10]");
        await driver.sleep(500);

        //Manual Entry Data
        let actualItemNameManual = await driver.waitGetText("(//tr[2]/td[@class='ng-binding'])[2]");
        await driver.sleep(500);
        let actualItemCodeManual = await driver.waitGetText("(//tr[2]/td[@class='ng-binding'])[3]");
        await driver.sleep(500);
        let actualItemQuantityManual = await driver.waitGetText("(//tr[2]/td[@class='ng-binding'])[6]");
        await driver.sleep(500);
        let actualItemRateManual = await driver.waitGetText("(//tr[2]/td[@class='ng-binding'])[7]");
        await driver.sleep(500);
        let actualItemTotalAmountManual = await driver.waitGetText("(//tr[2]/td[@class='ng-binding'])[8]");
        await driver.sleep(500);

        if(actualWoTitle != givenWoTitle){ return actualWoTitle+":Wo Title Don't Match:"+givenWoTitle; }
        if(actualTotalWoAmount != givenTotalWoAmount){ return actualTotalWoAmount+":Wo Amount Don't Match:"+givenTotalWoAmount; }

        if(actualItemNameWithCode != givenItemNameWithCode){ return actualItemNameWithCode+":Wo Item Name with code Don't Match:"+givenItemNameWithCode; }
        if(actualItemCodeWithCode != givenItemCodeWithCode){ return actualItemCodeWithCode+":Wo Item Code with code Don't Match:"+givenItemCodeWithCode; }
        if(actualItemQuantityWithCode != givenItemQuantityWithCode){ return actualItemQuantityWithCode+":Wo Quantity with code Don't Match:"+givenItemQuantityWithCode; }
        if(actualItemRateWithCode != givenItemRateWithCode){ return actualItemRateWithCode+":Wo Rate with code Don't Match:"+givenItemRateWithCode; }
        if(actualItemTotalAmountWithCode != givenItemTotalAmountWithCode){ return actualItemTotalAmountWithCode+":Wo Total Amount with code Don't Match:"+givenItemTotalAmountWithCode; }

        if(actualItemCodeManual != givenItemCodeManual){ return actualItemCodeManual+":Wo Code manual Don't Match:"+givenItemCodeManual; }
        if(actualItemNameManual != givenItemNameManual){ return actualItemNameManual+":Wo Name manual Don't Match:"+givenItemNameManual; }
        if(actualItemQuantityManual != givenItemQuantityManual){ return actualItemQuantityManual+":Wo Quantity manual Don't Match:"+givenItemQuantityManual; }
        if(actualItemRateManual != givenItemRateManual){ return actualItemRateManual+":Wo Rate manual Don't Match:"+givenItemRateManual; }
        if(actualItemTotalAmountManual != givenItemTotalAmountManual){ return actualItemTotalAmountManual+":Wo Total Amount manual Don't Match:"+givenItemTotalAmountManual; }
    
    }

    testSet.verifyInfoFromApproverDashboard = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//a[contains(.,'Dashboard')]") === false){ return "Dashboard Button Not Clicked";}
        await driver.sleep(1500);
        if(await driver.waitClick("(//th[contains(.,'SN')])[1]") === false){ return "SL Button Not Clicked";}
        await driver.sleep(2000);
        if(await driver.waitClick("(//button[contains(.,'Details')])[1]") === false){ return "Details Button Not Clicked";}
        await driver.sleep(2000);

        //
        await driver.sleep(1000);
        let actualWoTitle = await driver.waitGetText("(//td[@class='ng-binding'])[3]");
        await driver.sleep(1000);
        let actualTotalWoAmount = await driver.waitGetText("(//td[@class='text-center ng-binding'])[1]");
        await driver.sleep(1000);
        let actualSubContractorName = await driver.waitGetText("(//td[@class='ng-binding'])[5]");
        await driver.sleep(1000);
        let actualProjectName = await driver.waitGetText("(//td[@class='ng-binding'])[6]");
        await driver.sleep(1000);

        //With Code Entry Data
        let actualItemNameWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[8]");
        await driver.sleep(500);
        let actualItemCodeWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[9]");
        await driver.sleep(500);
        let actualItemQuantityWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[12]");
        await driver.sleep(500);
        let actualItemRateWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[13]");
        await driver.sleep(500);
        let actualItemTotalAmountWithCode = await driver.waitGetText("(//td[@class='ng-binding'])[14]");
        await driver.sleep(500);

        //Manual Entry Data
        let actualItemNameManual = await driver.waitGetText("(//td[@class='ng-binding'])[15]");
        await driver.sleep(500);
        let actualItemCodeManual = await driver.waitGetText("(//td[@class='ng-binding'])[16]");
        await driver.sleep(500);
        let actualItemQuantityManual = await driver.waitGetText("(//td[@class='ng-binding'])[19]");
        await driver.sleep(500);
        let actualItemRateManual = await driver.waitGetText("(//td[@class='ng-binding'])[20]");
        await driver.sleep(500);
        let actualItemTotalAmountManual = await driver.waitGetText("(//td[@class='ng-binding'])[21]");
        await driver.sleep(500);

        if(actualWoTitle != givenWoTitle){ return actualWoTitle+":Wo Title Don't Match:"+givenWoTitle; }
        if(actualTotalWoAmount != givenTotalWoAmount){ return actualTotalWoAmount+":Wo Amount Don't Match:"+givenTotalWoAmount; }
        if(actualSubContractorName != givenSubContractorName){ return actualSubContractorName+":SubContractor Name Don't Match:"+givenSubContractorName; }
        if(actualProjectName != givenProjectName){ return actualProjectName+":Project Name Don't Match:"+givenProjectName; }

        if(actualItemNameWithCode != givenItemNameWithCode){ return actualItemNameWithCode+":Wo Item Name with code Don't Match:"+givenItemNameWithCode; }
        if(actualItemCodeWithCode != givenItemCodeWithCode){ return actualItemCodeWithCode+":Wo Item Code with code Don't Match:"+givenItemCodeWithCode; }
        if(actualItemQuantityWithCode != givenItemQuantityWithCode){ return actualItemQuantityWithCode+":Wo Quantity with code Don't Match:"+givenItemQuantityWithCode; }
        if(actualItemRateWithCode != givenItemRateWithCode){ return actualItemRateWithCode+":Wo Rate with code Don't Match:"+givenItemRateWithCode; }
        if(actualItemTotalAmountWithCode != givenItemTotalAmountWithCode){ return actualItemTotalAmountWithCode+":Wo Total Amount with code Don't Match:"+givenItemTotalAmountWithCode; }

        if(actualItemCodeManual != givenItemCodeManual){ return actualItemCodeManual+":Wo Code manual Don't Match:"+givenItemCodeManual; }
        if(actualItemNameManual != givenItemNameManual){ return actualItemNameManual+":Wo Name manual Don't Match:"+givenItemNameManual; }
        if(actualItemQuantityManual != givenItemQuantityManual){ return actualItemQuantityManual+":Wo Quantity manual Don't Match:"+givenItemQuantityManual; }
        if(actualItemRateManual != givenItemRateManual){ return actualItemRateManual+":Wo Rate manual Don't Match:"+givenItemRateManual; }
        if(actualItemTotalAmountManual != givenItemTotalAmountManual){ return actualItemTotalAmountManual+":Wo Total Amount manual Don't Match:"+givenItemTotalAmountManual; }

    }

    testSet.approveWorkOrder = async () => {
        await driver.sleep(500);
        await driver.scrollToHeight(1000);
        await driver.sleep(500);
        if(await driver.waitClick("//a[contains(.,'Approve Work Order')]") === false){ return "Approve Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("//select[@ng-model='idAccountant']") === false){ return "Accountand Field Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("//option[contains(.,'ERP Admin (Central Accountant  )')]") === false){ return "Accountant Option Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("//select[@ng-model='idRequester']") === false){ return "Site Engineer Field Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("(//option[contains(.,'ERP Admin')])[3]") === false){ return "Site Engineer Option Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("//button[contains(.,'Confirm')]") === false){ return "Confirm Button Not Clicked";}
        await driver.sleep(500);

        await driver.sleep(1000);
        await driver.scrollToHeight(-1000);
        await driver.sleep(1000);

        givenWoID = await driver.waitGetText("(//td[@class='text-left ng-binding'])[1]");
        await driver.sleep(500);
        let demoWoID = givenWoID.split(":");
        givenWoID = demoWoID[1].trim();
        await driver.sleep(1000);
    }

    testSet.denyWorkOrderFromDashboard = async () => {
        if(await driver.waitClick("(//a[contains(.,'Deny Work order')])[1]") === false){ return "Deny Button Not Clicked";}
        await driver.sleep(500);
    }

    testSet.denyWorkOrder = async () => {
        await driver.sleep(500);
        await driver.scrollToHeight(1000);
        await driver.sleep(500);
        if(await driver.waitClick("//a[contains(.,'Deny Work Order')]") === false){ return "Deny Button Not Clicked";}
        await driver.sleep(500);
    }

    testSet.approveWorkOrderFromDashboard = async () => {

        if(await driver.waitClick("(//a[contains(.,'Approve Work Order')])[1]") === false){ return "Approve Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("//select[@ng-model='idAccountant']") === false){ return "Accountand Field Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("//option[contains(.,'ERP Admin (Central Accountant  )')]") === false){ return "Accountant Option Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("//select[@ng-model='idRequester']") === false){ return "Site Engineer Field Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("(//option[contains(.,'ERP Admin')])[3]") === false){ return "Site Engineer Option Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("//button[contains(.,'Approve')]") === false){ return "Confirm Button Not Clicked";}
        await driver.sleep(1000);
    }

    let totalCostCenterBudget = "99,999,999";
    let totalExpenceBudget = "";
    let totalRemainingBudget = "";

    testSet.getBudgetAmount = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//a[contains(.,'Fixed Budgets')]") === false){ return "Fixed Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("(//input[@ng-change='getallData(true)'])[3]", "cda") === false){ return "Value Not Set Into Project Search Field";}
        await driver.sleep(500);
        if(await driver.waitClick("(//a[contains(.,'Manage')])[3]") === false){ return "Manage Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@ng-model='treeSearchValue']", "10100.18") === false){ return "Value Not Set Into Cost Center Search Field";}
        await driver.sleep(2000);

        totalExpenceBudget = await driver.waitGetText("//div[@id='jstable_3116_col3']");
        await driver.sleep(4000);
        totalRemainingBudget  = await driver.waitGetText("//div[@id='jstable_3116_col4']");
        await driver.sleep(3000);
    }

    testSet.verifyBudgetAmount = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//a[contains(.,'Fixed Budgets')]") === false){ return "Fixed Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("(//input[@ng-change='getallData(true)'])[3]", "cda") === false){ return "Value Not Set Into Project Search Field";}
        await driver.sleep(500);
        if(await driver.waitClick("(//a[contains(.,'Manage')])[3]") === false){ return "Manage Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@ng-model='treeSearchValue']", "10100.18") === false){ return "Value Not Set Into Cost Center Search Field";}

        await driver.sleep(3000);
        let afterApproveTotalExpenceBudget = await driver.waitGetText("//div[@id='jstable_3116_col3']");
        await driver.sleep(4000);
        let afterApproveTotalRemainingBudget  = await driver.waitGetText("//div[@id='jstable_3116_col4']");
        await driver.sleep(4000);
        let afterApproveTotalCostCenterBudget  = await driver.waitGetText("//div[@id='jstable_3116_col2']");
        await driver.sleep(4000);

        if(totalExpenceBudget > afterApproveTotalExpenceBudget){ return totalExpenceBudget+":Total Expence Budget Don't Increase:"+afterApproveTotalExpenceBudget; }
        await driver.sleep(500);
        if(totalRemainingBudget < afterApproveTotalRemainingBudget){ return totalRemainingBudget+":Total Remaining Budget Don't Decrease:"+afterApproveTotalRemainingBudget; }
        await driver.sleep(500);
        if(totalCostCenterBudget != afterApproveTotalCostCenterBudget){ return totalCostCenterBudget+":Total Cost Center Budget Don't Equal:"+afterApproveTotalCostCenterBudget; }
        await driver.sleep(500);
    }

    testSet.addProgressReport = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//div[@class='mt-step-title uppercase font-grey-cascade'])[2]") === false){ return "Progress Reporting Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("(//span[@class='ng-scope'])[1]") === false){ return "Report Progress 1 Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("(//button[@ng-click='open1()'])[1]") === false){ return "Calender Button Not Clicked";}
        await driver.sleep(500);
        await driver.scrollToHeight(200);
        await driver.sleep(500);
        if(await driver.waitClick("(//button[@class='btn btn-sm btn-info uib-datepicker-current ng-binding'])[1]") === false){ return "Date Today Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitSendKeys("(//input[@name='quantityToReport'])[1]", givenItemQuantityWithCode) === false){ return "Report Ammount with Code Not Set";}
        await driver.sleep(1000);

        if(await driver.waitClick("(//button[contains(.,'Submit')])[1]") === false){ return "Submit 1 Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("(//span[@class='ng-scope'])[2]") === false){ return "Report Progress 2 Button Not Clicked";}
        await driver.sleep(500);
        //
        if(await driver.waitClick("(//button[@ng-click='open1()'])[2]") === false){ return "Calender Button Not Clicked";}
        await driver.sleep(500);
        await driver.scrollToHeight(300);
        await driver.sleep(500);
        if(await driver.waitClick("(//button[@class='btn btn-sm btn-info uib-datepicker-current ng-binding'])[2]") === false){ return "Date Today Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitSendKeys("(//input[@name='quantityToReport'])[2]", givenItemQuantityManual) === false){ return "Report Amount manual Not Set";}
        await driver.sleep(500);

        if(await driver.waitSendKeys("(//textarea[@name='attrs'])[4]", "Testing Automation") === false){ return "Component Field Not Set";}
        await driver.sleep(1000);

        await driver.sleep(500);
        await driver.scrollToHeight(500);
        await driver.sleep(500);

        if(await driver.waitClick("(//button[contains(.,'Submit')])[2]") === false){ return "Submit 2 Button Not Clicked";}
        await driver.sleep(500);

    }

    testSet.createProgressReportWithValidation = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//a[contains(.,'Work Order')]") === false){ return "Work Order Button not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("//a[contains(.,'All Work Order List')]") === false){ return "Work Order List Button not Clicked";}
        await driver.sleep(1000);
        if(await driver.waitClick("(//a[contains(.,'Details')])[1]") === false){ return "Work Order Details Button not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("(//div[@class='mt-step-title uppercase font-grey-cascade'])[2]") === false){ return "Progress Reporting Button Not Clicked";}
        await driver.sleep(500);
        if(await driver.waitClick("(//span[@class='ng-scope'])[1]") === false){ return "Report Progress 1 Button Not Clicked";}

        await driver.sleep(1000);
        await driver.scrollToElement("(//button[@ng-click='open1()'])[1]");
        await driver.sleep(1000);

        if(await driver.waitClick("(//button[@ng-click='open1()'])[1]") === false){ return "Calender Button Not Clicked";}
        await driver.sleep(500);
        await driver.scrollToHeight(200);
        await driver.sleep(2000);

        await driver.sleep(1000);
        await driver.scrollToElement("(//button[@class='btn btn-sm btn-info uib-datepicker-current ng-binding'])[1]");
        await driver.sleep(1000);

        if(await driver.waitClick("(//button[@class='btn btn-sm btn-info uib-datepicker-current ng-binding'])[1]") === false){ return "Date Today Button Not Clicked";}
        await driver.sleep(500);

        //submit extra qty validation ------------------------

        await driver.sleep(1000);
        await driver.scrollToElement("(//input[@name='quantityToReport'])[1]");
        await driver.sleep(1000);

        if(await driver.waitSendKeys("(//input[@name='quantityToReport'])[1]", parseInt(givenItemQuantityWithCode)+1) === false){ return "Report Ammount with Code Not Set";}
        await driver.sleep(2000);

        await driver.sleep(1000);
        await driver.scrollToElement("(//button[contains(.,'Submit')])[1]");
        await driver.sleep(1000);

        //var flag = await driver.waitGetValue("(//button[contains(.,'Submit')])[1]/disabled");
        var flagg = await driver.getAttrValue("(//button[@type='submit'])[1]","disabled");
        await driver.sleep(3000);
        //console.log("Flag 1 Value: "+flagg);
        if(flagg != "true") { return "Extra Qty is Accepted 1";}
        
        //submit extra qty validation END------------------------

        if(await driver.setValue("(//input[@name='quantityToReport'])[1]", parseInt(givenItemQuantityWithCode)/2) === false){ return "Report Ammount with Code Not Set";}
        await driver.sleep(2000);
        await driver.scrollToElement("(//button[contains(.,'Submit')])[1]");
        await driver.sleep(1000);
        if(await driver.waitClick("(//button[contains(.,'Submit')])[1]") === false){ return "Submit 1 Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitClick("(//span[@class='ng-scope'])[2]") === false){ return "Report Progress 2 Button Not Clicked";}
        
        //
        await driver.sleep(1000);
        await driver.scrollToElement("(//button[@ng-click='open1()'])[2]");
        await driver.sleep(1000);
        
        if(await driver.waitClick("(//button[@ng-click='open1()'])[2]") === false){ return "Calender Button Not Clicked";}
        await driver.sleep(500);
        await driver.scrollToHeight(500);
        
        await driver.sleep(1000);
        await driver.scrollToElement("(//button[@class='btn btn-sm btn-info uib-datepicker-current ng-binding'])[2]");
        await driver.sleep(1000);

        if(await driver.waitClick("(//button[@class='btn btn-sm btn-info uib-datepicker-current ng-binding'])[2]") === false){ return "Date Today Button Not Clicked";}
        await driver.sleep(1000);

        //submit extra qty validation ------------------------

        if(await driver.waitSendKeys("(//input[@name='quantityToReport'])[2]", parseInt(givenItemQuantityManual)+1) === false){ return "Report Amount manual Not Set";}
        await driver.sleep(2000);
        if(await driver.waitSendKeys("(//textarea[@name='attrs'])[4]", "Testing Automation") === false){ return "Component Field Not Set";}
        await driver.sleep(1000);

        await driver.sleep(1000);
        await driver.scrollToElement("(//button[contains(.,'Submit')])[2]");
        await driver.sleep(1000);
        
        var flagg2 = await driver.getAttrValue("(//button[@type='submit'])[2]","disabled");
        await driver.sleep(3000);
        //console.log("Flag 2 Value: "+flagg2);
        if(flagg2 != "true") { return "Extra Qty is Accepted 2";}
        //submit extra qty validation END------------------------

        if(await driver.setValue("(//input[@name='quantityToReport'])[2]", parseInt(givenItemQuantityManual)/2) === false){ return "Report Amount manual Not Set";}
        await driver.sleep(1000);

        await driver.sleep(1000);
        await driver.scrollToElement("(//button[contains(.,'Submit')])[2]");
        await driver.sleep(1000);

        if(await driver.waitClick("(//button[contains(.,'Submit')])[2]") === false){ return "Submit 2 Button Not Clicked";}
        await driver.sleep(500);

    }

    testSet.validateProgressReport = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("(//button[@class='btn btn-outline green btn-sm'])[1]") === false){ return "Validate Progress Report 1 Button Not Clicked";}
        await driver.sleep(500);

        if(await driver.waitSendKeys("//input[@name='validate_0']", parseInt(givenItemQuantityWithCode)/2) === false){ return "Validate 1 Value Not Add";}
        await driver.sleep(500);

        if(await driver.waitClick("(//button[contains(.,'Submit Validation')])[1]") === false){ return "Submit Validate 1 Button Not Clicked";}
        await driver.sleep(1000);
        //
        if(await driver.waitClick("(//button[@class='btn btn-outline green btn-sm'])[2]") === false){ return "Validate Progress Report 1 Button Not Clicked";}
        await driver.sleep(1000);

        if(await driver.waitSendKeys("//input[@name='validate_0']", parseInt(givenItemQuantityManual)/2) === false){ return "Validate 2 Value Not Add";}
        await driver.sleep(1000);

        if(await driver.waitClick("(//button[contains(.,'Submit Validation')])[2]") === false){ return "Submit Validate 2 Button Not Clicked";}
        await driver.sleep(1000);
    }

    testSet.validateProgressReportWithValidation = async () => {
        if(await driver.waitClick("(//button[@class='btn btn-outline green btn-sm'])[1]") === false){ return "Validate Progress Report 1 Button Not Clicked";}
        await driver.sleep(500);

        //submit extra qty validation ------------------------
        if(await driver.waitSendKeys("//input[@name='validate_0']", parseInt(givenItemQuantityWithCode)+1) === false){ return "Validate 1 Value Not Add  in Validation";}
        await driver.sleep(2000);

        await driver.scrollToElement("(//button[@type='submit'])[1]");
        await driver.sleep(1000);
        
        var flagg = await driver.getAttrValue("(//button[@type='submit'])[1]","disabled");
        await driver.sleep(3000);
        if(flagg != "true") { return "Extra Qty is Accepted 1 in Validation";}
        //submit extra qty validation END ------------------------

        if(await driver.setValue("//input[@name='validate_0']", parseInt(givenItemQuantityWithCode)/2) === false){ return "Validate 1 Value Not Add";}
        await driver.sleep(500);

        if(await driver.waitClick("(//button[contains(.,'Submit Validation')])[1]") === false){ return "Submit Validate 1 Button Not Clicked";}
        await driver.sleep(1000);
        //
        if(await driver.waitClick("(//button[@class='btn btn-outline green btn-sm'])[2]") === false){ return "Validate Progress Report 1 Button Not Clicked";}
        await driver.sleep(1000);

        //submit extra qty validation ------------------------
        if(await driver.waitSendKeys("//input[@name='validate_0']", parseInt(givenItemQuantityManual)+1) === false){ return "Validate 2 Value Not Add in validation";}
        await driver.sleep(2000);

        await driver.scrollToElement("(//button[@type='submit'])[2]");
        await driver.sleep(1000);

        var flagg = await driver.getAttrValue("(//button[@type='submit'])[2]","disabled");
        await driver.sleep(3000);
        if(flagg != "true") { return "Extra Qty is Accepted 2 in Validation";}
        //submit extra qty validation END ------------------------
        
        if(await driver.setValue("//input[@name='validate_0']", parseInt(givenItemQuantityManual)/2) === false){ return "Validate 2 Value Not Add";}
        await driver.sleep(1000);

        if(await driver.waitClick("(//button[contains(.,'Submit Validation')])[2]") === false){ return "Submit Validate 2 Button Not Clicked";}
        await driver.sleep(1000);

    }

    testSet.validateProgressReportWithValidationSecond = async () => {
        if(await driver.waitClick("(//button[@class='btn btn-outline green btn-sm'])[1]") === false){ return "Validate Progress Report 1 Button Not Clicked";}
        await driver.sleep(500);

        //submit extra qty validation ------------------------
        if(await driver.waitSendKeys("//input[@name='validate_1']", parseInt(givenItemQuantityWithCode)+1) === false){ return "Validate 1 Value Not Add  in Validation";}
        await driver.sleep(2000);

        await driver.scrollToElement("(//button[@type='submit'])[1]");
        await driver.sleep(1000);

        var flagg = await driver.getAttrValue("(//button[@type='submit'])[1]","disabled");
        await driver.sleep(3000);
        if(flagg != "true") { return "Extra Qty is Accepted 1 in Validation";}
        //submit extra qty validation END ------------------------

        if(await driver.setValue("//input[@name='validate_1']", parseInt(givenItemQuantityWithCode)/2) === false){ return "Validate 1 Value Not Add";}
        await driver.sleep(500);

        if(await driver.waitClick("(//button[contains(.,'Submit Validation')])[1]") === false){ return "Submit Validate 1 Button Not Clicked";}
        await driver.sleep(1000);
        //
        if(await driver.waitClick("(//button[@class='btn btn-outline green btn-sm'])[2]") === false){ return "Validate Progress Report 1 Button Not Clicked";}
        await driver.sleep(1000);

        //submit extra qty validation ------------------------
        if(await driver.waitSendKeys("//input[@name='validate_1']", parseInt(givenItemQuantityManual)+1) === false){ return "Validate 2 Value Not Add in validation";}
        await driver.sleep(2000);

        await driver.scrollToElement("(//button[@type='submit'])[2]");
        await driver.sleep(1000);

        var flagg = await driver.getAttrValue("(//button[@type='submit'])[2]","disabled");
        await driver.sleep(3000);
        if(flagg != "true") { return "Extra Qty is Accepted 2 in Validation";}
        //submit extra qty validation END ------------------------
        
        if(await driver.setValue("//input[@name='validate_1']", parseInt(givenItemQuantityManual)/2) === false){ return "Validate 2 Value Not Add";}
        await driver.sleep(1000);

        if(await driver.waitClick("(//button[contains(.,'Submit Validation')])[2]") === false){ return "Submit Validate 2 Button Not Clicked";}
        await driver.sleep(1000);

    }

    testSet.getWoID = () => {
        return givenWoID;
    }
    testSet.getWoTitle = () => {
        return givenWoTitle;
    }
    testSet.getWoTotalAmount = () => {
        return givenTotalWoAmount;
    }

    return testSet;
}
module.exports = workOrder;