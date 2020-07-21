const driver = require("../../core/driver");
const employeeStepDef = require("../PayrollNew/employee")(driver);

let leaveObj = (driver) => {
    let testSet = {};
    let EID = "";
    
    testSet.clickLeave = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Leave')])[2]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Leave')])[2]") === false){ return "Leave Button Not Clicked"; }
    }

    testSet.clickLeaveApplication = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Leave Application')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Leave Application')])[1]") === false){ return "Leave Application Button Not Clicked"; }
    }

    testSet.clickLeaveApplicationForm = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Application Form')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Application Form')])[1]") === false){ return "Leave Application Form Button Not Clicked"; }
    }

    testSet.clickLeaveEncashment = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Leave Encashment')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Leave Encashment')])[1]") === false){ return "Leave Encashment Button Not Clicked"; }
    }

    testSet.clickLeaveApplicationList = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Application List')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Application List')])[1]") === false){ return "Application List Button Not Clicked"; }
    }

    testSet.completeLeaveApplicationEntry = async () => {
        await driver.sleep(2000);
        let EmployeeID = await driver.waitGetValue("//input[@class='select2-search__field']");
        await driver.sleep(3000);
        EID = EmployeeID.trim();
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row is not Select"; }

        
        if(await driver.waitClick("//select[@formcontrolname='idLeavePolicy']") === false) {return "Leave Type Field not Click"; }
        if(await driver.waitClick("//option[contains(.,'Automation Leave Setup Testing')]") === false) {return "Leave Type Not Select"; }
        
        if(await driver.waitClick("//select[@formcontrolname='leaveCategory']") === false) {return "Leave Category Field not Click"; }
        if(await driver.waitClick("//option[contains(.,'Without Pay')]") === false) {return "Leave Category Not Select"; }

        if(await driver.waitSendKeys("//input[@formcontrolname='dateFrom']","07202020") === false) {return "Date From is not inserted"; }

        if(await driver.waitSendKeys("//input[@formcontrolname='dateTo']","07212020") === false) {return "Date To is not inserted"; }

        if(await driver.waitSendKeys("//textarea[@formcontrolname='addressDuringLeave']","testing automation") === false) {return "Address during leave not inserted"; }
        
        if(await driver.waitSendKeys("//input[@formcontrolname='phoneNoDuringLeave']","01700000001") === false) {return "Contact Number during leave not inserted"; }

        if(await driver.waitSendKeys("//input[@formcontrolname='applicationDate']","07202020") === false) {return "Application Date is not inserted"; }
        
        await driver.sleep(3000);
        await driver.scrollToElement("(//label[@class='m-radio'])[1]");
        await driver.sleep(2000);

        if(await driver.waitClick("(//label[@class='m-radio'])[1]") === false) {return "Leave Casual Reason Not Click"; }
        
        await driver.sleep(3000);
        await driver.scrollToElement("//button[contains(.,'Save')]");
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Save')]") === false) {return "Save Button not Clicked"; }
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Yes')]") === false) {return "Yes Button is not Click"; }
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false) {return "Ok Button is not Click"; }

    }

    testSet.verifyLeaveApplicationEntry = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//input[@name='searchunit']");
        await driver.sleep(2000);

        if(await driver.waitSendKeys("//input[@name='searchunit']", EID) === false) {return "EID is not input in Employee ID field"; }
        if(await driver.waitSendKeys("(//input[@name='searchcity'])[3]", "20-Jul-2020") === false) {return "From Date is not input in search Start Date field"; }
        if(await driver.waitSendKeys("(//input[@name='searchcontact_person_name'])[1]", "21-Jul-2020") === false) {return "To Date is not input in search End Date field"; }

        await driver.sleep(1000);
        let leaveType = await driver.waitGetText("//tr[1]/td[3]");
        leaveType = leaveType.trim();
        await driver.sleep(3000);

        await driver.sleep(1000);
        let leaveCategory = await driver.waitGetText("//tr[1]/td[4]");
        leaveCategory = leaveCategory.trim();
        await driver.sleep(3000);

        await driver.sleep(1000);
        let startDate = await driver.waitGetText("//tr[1]/td[5]");
        startDate = startDate.trim();
        await driver.sleep(3000);

        await driver.sleep(1000);
        let endDate = await driver.waitGetText("//tr[1]/td[6]");
        endDate = endDate.trim();
        await driver.sleep(3000);

        await driver.sleep(1000);
        let days = await driver.waitGetText("//tr[1]/td[7]");
        days = days.trim();
        await driver.sleep(3000);


        await driver.sleep(1000);
        if(leaveType != "Automation Leave Setup Testing"){ return leaveType+" :Employee Leave Type doesn't Match: Automation Leave Setup Testing"; }
        if(leaveCategory != "Regular"){ return leaveCategory+" :Employee Leave Category doesn't Match: Regular"; }
        if(startDate != "20-Jul-2020"){ return startDate+" :Leave Start Date doesn't Match: 20-Jul-2020"; }
        if(endDate != "21-Jul-2020"){ return endDate+" :Leave End Date doesn't Match: 21-Jul-2020"; }
        if(days != "2"){ return days+" :Leave Day Count doesn't Match with: 2"; }
    }





    return testSet;
}
module.exports = leaveObj;