const driver = require("../../core/driver");
let attendanceObj = (driver) => {
    let testSet = {};
    let EID = "";
    
    testSet.clickAttendance = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Attendance')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Attendance')])[1]") === false){ return "Attendance Button Not Clicked"; }
    }

    testSet.clickCalenderEntry = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Calendar Entry')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Calendar Entry')])[1]") === false){ return "Calender Entry Button Not Clicked"; }
    }

    testSet.clickCalenderEntrySub = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Calendar Entry')])[2]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Calendar Entry')])[2]") === false){ return "Calender Entry Sub Button Not Clicked"; }
    }

    testSet.clickCalenderEntryList = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Attendance List')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Attendance List')])[1]") === false){ return "Calender Entry List Button Not Clicked"; }
    }

    testSet.clickExcelEntry = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Excel Entry')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Excel Entry')])[1]") === false){ return "Excel Entry Button Not Clicked"; }
    }

    testSet.clickExcelEntrySub = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Excel Entry')])[2]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Excel Entry')])[2]") === false){ return "Excel Entry Sub Button Not Clicked"; }
    }

    testSet.clickExcelEntryList = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Attendance List')])[2]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Attendance List')])[2]") === false){ return "Excel Entry List Button Not Clicked"; }
    }

    testSet.clickCalculation = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Calculation')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Calculation')])[1]") === false){ return "Calculation Button Not Clicked"; }
    }

    testSet.completeSingleAttendanceCalenderEntry1 = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//select[@formcontrolname='entryType']");
        await driver.sleep(2000);
        
        // single Entry
        if(await driver.waitClick("//select[@formcontrolname='entryType']") === false) {return "Entry Type Field not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'Single Entry')]") === false) {return "Single Entry Type Not Clicked"; }
        await driver.sleep(2000);

    }
    
    
    testSet.completeSingleAttendanceCalenderEntry2 = async () => {
        await driver.sleep(2000);
       
        if(await driver.waitClick("//select[@formcontrolname='year']") === false) {return "Calender Entry Year Field not Clicked"; }
        if(await driver.waitClick("(//option[contains(.,'2020')])[1]") === false) {return "Year Not Clicked"; }

        if(await driver.waitClick("//select[@formcontrolname='month']") === false) {return "Calender Entry Month Field not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'November')]") === false) {return "Month Not Clicked"; }

        await driver.sleep(3000);
        await driver.scrollToElement("//button[contains(.,'Save')]");
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Save')]") === false) {return "Save Button not Clicked"; }
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Yes')]") === false) {return "Yes Button is not Click"; }
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false) {return "Ok Button is not Click"; }

    }

    testSet.verifySingleAttendanceCalenderEntryGroup = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//input[@name='searchYear']");
        await driver.sleep(2000);

        if(await driver.waitSendKeys("//input[@name='searchYear']", "2020") === false) {return "Year is not input in search Year field"; }

        if(await driver.waitSendKeys("//input[@name='searchMonth']", "November") === false) {return "Year is not input in search Year field"; }

        // await driver.sleep(1000);
        // let employeeCount = await driver.waitGetText("//tr[1]/td[5]");
        // employeeCount = employeeCount.trim();
        // await driver.sleep(3000);

        // await driver.sleep(3000);
        // if(employeeCount != "1"){ return employeeCount+":Employee Count doesn't match:1"; }
    }

    testSet.verifySingleAttendanceCalenderEntryList = async () => {
        await driver.sleep(1000);
        let employeeID = await driver.waitGetText("(//tr[1]/td[1])[1]");
        employeeID = employeeID.trim();
        await driver.sleep(3000);
        EID = employeeID;

    }

    testSet.completeGroupAttendanceCalenderEntry = async () => {
        //all department entry
        await driver.sleep(2000);
        await driver.scrollToElement("//select[@formcontrolname='year']");
        await driver.sleep(2000);

        if(await driver.waitClick("//select[@formcontrolname='year']") === false) {return "Calender Entry Year Field not Clicked"; }
        if(await driver.waitClick("(//option[contains(.,'2020')])[1]") === false) {return "Year Not Clicked"; }

        if(await driver.waitClick("//select[@formcontrolname='month']") === false) {return "Calender Entry Month Field not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'December')]") === false) {return "Month Not Clicked"; }

        await driver.sleep(3000);
        await driver.scrollToElement("//button[contains(.,'Save')]");
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Save')]") === false) {return "Save Button not Clicked"; }
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Yes')]") === false) {return "Yes Button is not Click"; }
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false) {return "Ok Button is not Click"; }

    }

    let groupAttendanceCalenderEntryEmployeeCount = "";
    testSet.verifyGroupAttendanceCalenderEntry = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//input[@name='searchcity'])[1]");
        await driver.sleep(2000);

        if(await driver.waitSendKeys("(//input[@name='searchcity'])[1]", "December 2020") === false) {return "Month & Year is not input in search field"; }


        await driver.sleep(1000);
        let employeeCount = await driver.waitGetText("//div[6]/span");
        let demoEmployeeCount = employeeCount.split(" ");
        employeeCount = demoEmployeeCount[0].trim();
        groupAttendanceCalenderEntryEmployeeCount = employeeCount;

        await driver.sleep(3000);


        await driver.sleep(3000);
        if(employeeCount < "30"){ return employeeCount+":Employee Count Should be Grater than 30:"; }


    }

    testSet.delete_groupAttendanceCalenderEntryEmployee = async () => {
        let i = 0;
        let t = groupAttendanceCalenderEntryEmployeeCount;
        for (i = 0; i < t; i++) {
            await driver.sleep(1000);        
            if(await driver.waitClick("(//button[contains(.,'Delete')])[1]") === false){ return "Delete Button Not Clicked"; }
            await driver.sleep(300);
            if(await driver.waitClick("(//button[contains(.,'Yes')])[1]") === false){ return "Yes Button Not Clicked"; }
            await driver.sleep(300);
            if(await driver.waitClick("(//button[contains(.,'OK')])[1]") === false){ return "OK Button Not Clicked"; }
            await driver.sleep(200);

        }

    }

    testSet.completeAttendanceCalculation = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//select[@formcontrolname='selectedYear']");
        await driver.sleep(2000);

        if(await driver.waitClick("//select[@formcontrolname='selectedYear']") === false) {return "Attendance Calculation Year Field not Clicked"; }
        if(await driver.waitClick("(//option[contains(.,'2020')])[1]") === false) {return "Year Not Clicked"; }

        if(await driver.waitClick("//select[@formcontrolname='selectedMonth']") === false) {return "Attendance Calculation Month Field not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'December')]") === false) {return "Month Not Clicked"; }

        await driver.sleep(3000);
        await driver.scrollToElement("//button[contains(.,'Calculate')]");
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Calculate')]") === false) {return "Calculate Button not Clicked"; }
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Yes')]") === false) {return "Yes Button is not Click"; }
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false) {return "Ok Button is not Click"; }

    }

    testSet.verifyAttendanceCalculationEntry = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//input[@name='searchYear']");
        await driver.sleep(2000);

        if(await driver.waitSendKeys("//input[@name='searchYear']", "2020") === false) {return "Year is not input in search Year field"; }
        if(await driver.waitSendKeys("//input[@name='searchMonth']", "December") === false) {return "Year is not input in search Year field"; }

        await driver.sleep(1000);
        let employeeCount = await driver.waitGetText("(//div/div[2]/span)[2]");
        employeeCount = employeeCount.trim();
        await driver.sleep(3000);

        await driver.sleep(3000);
        if(employeeCount > "1"){ return employeeCount+" :Employee Count doesn't more than: 1"; }


    }

    testSet.deleteAttendanceEntryAndCalculation = async () => {
        await driver.sleep(1000);

        if(await driver.waitClick("//button[contains(.,'Delete')]") === false) {return "Attendance Calculation Delete Button not Click"; }
        await driver.sleep(1000);        
        if(await driver.waitClick("//button[contains(.,'Yes')]") === false){ return "Yes Button Not Clicked"; }
        await driver.sleep(300);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false){ return "OK Button Not Clicked"; }
        await driver.sleep(500);

        await testSet.clickCalenderEntry();
        await testSet.clickCalenderEntrySub();

        await driver.sleep(2000);
        await driver.scrollToElement("//input[@name='searchYear']");
        await driver.sleep(2000);

        if(await driver.waitSendKeys("//input[@name='searchYear']", "2020") === false) {return "Year is not input in search Year field"; }
        if(await driver.waitSendKeys("//input[@name='searchMonth']", "December") === false) {return "Year is not input in search Year field"; }

        await driver.sleep(2000);
        await driver.scrollToElement("//button[contains(.,'Delete')]");
        await driver.sleep(2000);

        if(await driver.waitClick("//button[contains(.,'Delete')]") === false) {return "Attendance Calender Group Delete Button not Click"; }
        await driver.sleep(1000);        
        if(await driver.waitClick("//button[contains(.,'Yes')]") === false){ return "Yes Button Not Clicked"; }
        await driver.sleep(300);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false){ return "OK Button Not Clicked"; }
        await driver.sleep(500);
    }

    



    return testSet;
}
module.exports = attendanceObj;