let changeUser = (driver) => {
    let testSet = {};

    testSet.setUserAsLocalBillingEngineerAtCDAInitial = async () => {
        if(await driver.waitClick("//option[contains(.,'Local Billing Engineer at CDA')]") === false){ return "Initialy Role Red Button Not Clicked"; }
        await confirmClick();
    }
    
    testSet.setUserAsLocalBillingEngineerAtCDA = async () => {
        await driver.sleep(1000);
		if(await driver.waitClick("//button[@class='btn btn-circle green dropdown-toggle']") === false){ return "Role Top Button Not Clicked"};
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@ng-model='roleSearch']","cda") === false){ return "CDA inserted into Search Field in Role Selection"};
        await driver.sleep(500);
        if(await driver.waitClick("//li[contains(.,'Local Billing Engineer at CDA')]") === false){ return "Local Billing Engineer at CDA Role Not Selected"};
        await driver.sleep(500);
        await confirmClick();
        await driver.sleep(1000);
    }

    testSet.setUserAsSiteApproverAtCDA = async () => {
		if(await driver.waitClick("//button[@class='btn btn-circle green dropdown-toggle']") === false){ return "Role Top Button Not Clicked"};
		if(await driver.waitSendKeys("//input[@ng-model='roleSearch']","cda") === false){ return "CDA inserted into Search Field in Role Selection"};
        if(await driver.waitClick("//li[contains(.,'Site Approver at CDA')]") === false){ return "Site Approver at CDA Role Not Selected"};
        await confirmClick();
    }

    testSet.setUserAsSiteEngineerAtCDA = async () => {
		if(await driver.waitClick("//button[@class='btn btn-circle green dropdown-toggle']") === false){ return "Role Top Button Not Clicked"};
		if(await driver.waitSendKeys("//input[@ng-model='roleSearch']","cda") === false){ return "CDA inserted into Search Field in Role Selection"};
        if(await driver.waitClick("//li[contains(.,'Site Engineer at CDA')]") === false){ return "Site Engineer at CDA Role Not Selected"};
        await confirmClick();
    }

    testSet.setUserAsCentralAccountantAtCDA = async () => {
        if(await driver.waitClick("//button[@class='btn btn-circle green dropdown-toggle']") === false){ return "Role Top Button Not Clicked"};
		if(await driver.waitSendKeys("//input[@ng-model='roleSearch']","cda") === false){ return "CDA inserted into Search Field in Role Selection"};
        if(await driver.waitClick("//li[contains(.,'Central Accountant  at CDA')]") === false){ return "Central Accountant at CDA Role Not Selected"};
        await confirmClick();
    }

    const confirmClick = async () => {
        if(await driver.waitClick("//button[contains(.,'Confirm')]") === false){ return "Confirm Button Not Clicked"};
    }

    return testSet;
}
module.exports = changeUser;