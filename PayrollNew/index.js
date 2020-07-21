const driver = require("../../core/driver");
const { step, title, subStep, complete } = require("../../core/log");

const bankLoginStepDef = require("../bank/bankLoginSetpDef")(driver);
const changeProjectStepDef = require("../PayrollNew/changeProject")(driver);
const employeeStepDef = require("../PayrollNew/employee")(driver);
const payStructureStepDef = require("../PayrollNew/payStructure")(driver);
const presentOffDayStepDef = require("../PayrollNew/presentOffDay")(driver);
const attendanceStepDef = require("../PayrollNew/attendance")(driver);
const leaveStepDef = require("../PayrollNew/leave")(driver);


const payrollBaseUrl = "https://payroll.jomakhata.com/";


const payrollTest = async () => {
    await driver.get(payrollBaseUrl);
    await title("Payroll Module Test Start Here: ");

    await payrollLogin();

    await setProjectAsCDAInitial();

    //await deleteEmployee();

    // await employeeCreation();

    // await payStructure();

    // await overtime();

    await presentOffDay();

    await attendance();

    await leave();


    await title("Payroll Module Test End Here.");

    // complete({
    // 	moduleName: "Automation Testing of Payroll Module",
    //     emailReceiver: ["abuasif.nyk@gmail.com", "ashfaq.nyk@gmail.com",
    //                         "mohiuddin_nyk@hotmail.com", "adnan.nuruddin@gmail.com",
    //                         "mashiurfpi@gmail.com","ramim121@gmail.com","ashad.feni@gmail.com"
    //                     ]
    // });

    // complete({
    // 	moduleName: "Automation Testing of Payroll Module",
    //     emailReceiver: ["abuasif.nyk@gmail.com"]
    // });
}

const deleteEmployee = async () => {
    await driver.sleep(500);

    step("Deleteing Employee");
    await subStep("Click Employee: ", employeeStepDef.clickEmployee);
    await subStep("Click Created Employee: ", employeeStepDef.clickCreateEmployee);
    await subStep("Click Employee List: ", employeeStepDef.clickEmployeeList);
    await subStep("Search Employee: ", employeeStepDef.searchEmployeeForDelete);
    
    await driver.sleep(1000);
    let t = 0;
    t = await driver.waitGetText("//div[5]/span");
    await driver.sleep(3000);
    let demoT = t.split(" ");
    t = demoT[0].trim();


    var i;
    for (i = 0; i < t; i++) {
        await subStep("Delete Employee: ", employeeStepDef.delete_EmployeeCleaning);
    }



}

const employeeCreation = async () => {
    await driver.sleep(500);
    await personalInfoEntry();
    await organizationalInfoEntry();
    await organizationUpdate();
} 

const payStructure = async () => {
    await driver.sleep(500);
    await payStructureSetup();
    await variableInput();
    await bonusEntry();
}

const overtime = async () => {
    await driver.sleep(500);
    await overtimeSetup();
    await overtimeEntry();
}

const presentOffDay = async () => {
    await driver.sleep(500);
    step("Generate EID Again");
    await subStep("Generating: ", employeeStepDef.generateEID); 
    await employeeCreation();
    await payStructure();
    await presentOffDaySetup();
    await presentOffDayEntry();
}

const attendance = async () => {
    await driver.sleep(500);
    await attendanceCalenderEntry();
    await driver.sleep(500);
    await attendanceExcelEntry();
    await attendanceCalculation();
}

const leave = async () => {
    await driver.sleep(500);
    await leaveApplication();
    await driver.sleep(500);
    await leaveEncashment();
}

const payrollLogin = async () => {
    step("Payroll Login");
    await subStep("Input Email: ", bankLoginStepDef.setEmail); 
    await subStep("Input Password: ", bankLoginStepDef.setPassword);
    await subStep("Click Login Btn: ", bankLoginStepDef.clickLogin);
}

const setProjectAsCDAInitial = async () => {
    step("Set Project As CDA");
    await subStep("Initial Project Select as CDA: ", changeProjectStepDef.setProjectCDAInitial); 
}

const personalInfoEntry = async () => {
    step("Set Personal Information of an Employee");
    await subStep("Setting Personal Information of an Employee: ", employeeStepDef.addPersonalInfo);
    await subStep("Search Recently Created Employee: ", employeeStepDef.searchEmployee);
    await subStep("Verify Employee: ", employeeStepDef.personVerify);
}

const organizationalInfoEntry = async () => {
    step("Set Organization Information of an Employee");
    await subStep("Setting Organization Information of an Employee: ", employeeStepDef.completeOrganizationSetup);
    await subStep("Verify Employee Organization: ", employeeStepDef.personOrganizationVerify);
}

const organizationUpdate = async () => {

    //after update UI then update part will be developed. Till this portion is postponed!

}

const payStructureSetup = async () => {
    step("Pay Structure Setup");
    await subStep("Click Pay Structure: ", payStructureStepDef.clickPayStructure);
    await subStep("Click PS Setup: ", payStructureStepDef.clickPSSetup);
    await subStep("Click Setup: ", payStructureStepDef.clickPSSetupSub);
    await subStep("Select Employee: ", employeeStepDef.selectEmployee);
    await subStep("Complete PS Setup: ", payStructureStepDef.completePSSetup);
    await subStep("Click Setup List: ", payStructureStepDef.clickSetupList);
    await subStep("Search Employee: ", employeeStepDef.searchEmployeeIDInPsSetupList);
    await subStep("Verify Pay Structure: ", payStructureStepDef.verifyPS);
}

const variableInput = async () => {
    step("Variables Input");
    await subStep("Click Variable Inputes: ", payStructureStepDef.clickVariableInputs);
    await subStep("Click Variable Inpute Sub: ", payStructureStepDef.clickVariableInputSub);
    await subStep("Select Employee: ", employeeStepDef.selectEmployee);
    await subStep("Complete Variable Input: ", payStructureStepDef.completeVariableInput);
    await subStep("Click Entry List: ", payStructureStepDef.clickEntryList);
    await subStep("Search Employee: ", payStructureStepDef.searchEmployeeIDInVariableEntryList);
    await subStep("Verify Pay Structure Variable Input: ", payStructureStepDef.verifyVariableInput);
}

const bonusEntry = async () => {
    step("Bonus Entry");
    await subStep("Click Bonus: ", payStructureStepDef.clickBonus);
    await subStep("Click Bonus Entry: ", payStructureStepDef.clickBonusEntry);
    await subStep("Complete Bonus Entry: ", payStructureStepDef.completeBonusEntry);
    await subStep("Click Bonus List Project: ", payStructureStepDef.clickBonusListProject);
    await subStep("Verify Bonus Entry: ", payStructureStepDef.verifyBonusEntry);
    await subStep("Delete Bonus Entry: ", payStructureStepDef.deleteBonus);
}

const overtimeSetup = async () => {
    step("Overtime Setup");
    await subStep("Click Overtime: ", payStructureStepDef.clickOvertime);
    await subStep("Click Overtime Setup: ", payStructureStepDef.clickOvertimeSetup);
    await subStep("Click Overtime Setup sub: ", payStructureStepDef.clickOvertimeSetupSub);
    await subStep("Complete Overtime Setup: ", payStructureStepDef.completeOvertimeSetup);
    await subStep("Click Overtime Setup List: ", payStructureStepDef.clickOvertimeSetupList);
    await subStep("Overtime Setup Verify From List Page: ", payStructureStepDef.verifyOvertimeSetup);

}

const overtimeEntry = async () => {
    step("Overtime Entry");
    await subStep("Click Overtime Entry: ", payStructureStepDef.clickOvertimeEntry);
    await subStep("Click Overtime Day Wise Entry: ", payStructureStepDef.clickOvertimeDayWiseEntry);
    await subStep("Complete Day Wise Entry: ", payStructureStepDef.completeDayWiseEntry);
    await subStep("Click Overtime Entry List: ", payStructureStepDef.clickOvertimeEntryList);
    await subStep("Overtime Entry Verify From List Page: ", payStructureStepDef.verifyOvertimeEntry);

    await subStep("Click Overtime Month Wise Entry: ", payStructureStepDef.clickOvertimeMonthlyEntry);
    await subStep("Complete Month Wise Entry: ", payStructureStepDef.completeMonthWiseEntry);
    await subStep("Click Overtime Monthly Entry List: ", payStructureStepDef.clickOvertimeMonthlyEntryList);
    await subStep("Overtime Monthly Entry Verify From List Page: ", payStructureStepDef.verifyOvertimeMonthlyEntry);
}

const presentOffDaySetup = async () => {
    step("Present Off Day Setup");
    await subStep("Click Present Off-Day: ", presentOffDayStepDef.clickPresentOffDay);
    await subStep("Click Offday Setup: ", presentOffDayStepDef.clickOffDaySetup);
    await subStep("Click Offday Setup sub: ", presentOffDayStepDef.clickOffDaySetupSub);
    await subStep("Select Employee: ", employeeStepDef.selectEmployeeForPresentOffDay);
    
    await subStep("Complete Offday Setup: ", presentOffDayStepDef.completeOffDaySetup);
    await subStep("Click Offday Setup List: ", presentOffDayStepDef.clickOffDaySetupList);
    await subStep("Offday Setup Verify From List Page: ", presentOffDayStepDef.verifyOffDaySetup);

}

const presentOffDayEntry = async () => {
    step("Present Off Day Entry");
    await subStep("Click Off Day Entry: ", presentOffDayStepDef.clickOffDayEntry);
    await subStep("Click Monthly Entry: ", presentOffDayStepDef.clickMonthlyEntry);
    await subStep("Complete Monthly Entry: ", presentOffDayStepDef.completeMonthlyEntry);
    
    await subStep("Click Monthly Entry List: ", presentOffDayStepDef.clickMonthlyEntryList);
    await subStep("Monthly Entry Verify From List Page: ", presentOffDayStepDef.verifyMonthlyEntry);

    await subStep("Click Off Day CPL Entry: ", presentOffDayStepDef.clickOffDayCPLEntry);
    await subStep("Complete Off Day CPL Entry: ", presentOffDayStepDef.completeOffDayCPLEntry);
    await subStep("Click Off Day CPL Entry List: ", presentOffDayStepDef.clickOffDayCPLEntryList);
    await subStep("Overtime Off Day CPL Verify From List Page: ", presentOffDayStepDef.verifyOffDayCPLEntry);
}

const attendanceCalenderEntry = async () => {
    step("Attendance Calender Entry");
    await subStep("Click Attendance: ", attendanceStepDef.clickAttendance);
    await subStep("Click Attendance Calender Entry: ", attendanceStepDef.clickCalenderEntry);
    await subStep("Click Attendance Calender Entry Sub: ", attendanceStepDef.clickCalenderEntrySub);
    await subStep("Complete Attendance Calender(Monthly) Single Entry 1: ", attendanceStepDef.completeSingleAttendanceCalenderEntry1);
    await subStep("Select Employee: ", employeeStepDef.selectEmployee);
    await subStep("Complete Attendance Calender(Monthly) Single Entry 2: ", attendanceStepDef.completeSingleAttendanceCalenderEntry2);

    await subStep("Verify Single Entry Group: ", attendanceStepDef.verifySingleAttendanceCalenderEntryGroup);
    await subStep("Click Attendance Calender List: ", attendanceStepDef.clickCalenderEntryList);
    await subStep("Search Employee: ", employeeStepDef.searchEmployeeForAttendance);
    await subStep("Verify Single Entry List Page: ", attendanceStepDef.verifySingleAttendanceCalenderEntryList);

    await subStep("Click Attendance Calender Entry Sub Second Time: ", attendanceStepDef.clickCalenderEntrySub);
    await subStep("Complete Attendance Calender(Monthly) Group Entry: ", attendanceStepDef.completeGroupAttendanceCalenderEntry);
    await subStep("Click Attendance Calender List Second Time: ", attendanceStepDef.clickCalenderEntryList);
    await subStep("Verify Group Entry: ", attendanceStepDef.verifyGroupAttendanceCalenderEntry);
    //await subStep("Delete Group Entry: ", attendanceStepDef.delete_groupAttendanceCalenderEntryEmployee);

}

const attendanceExcelEntry = async () => {
    step("Attendance Excel Entry");
    
    //Excel Entry not working

    // await subStep("Click Attendance: ", attendanceStepDef.clickAttendance);
    // await subStep("Click Attendance Calender Entry: ", attendanceStepDef.clickCalenderEntry);
    // await subStep("Click Attendance Calender Entry Sub: ", attendanceStepDef.clickCalenderEntrySub);
    // await subStep("Complete Attendance Calender(Monthly) Entry: ", attendanceStepDef.completeAttendanceCalenderEntry);
    // await subStep("Verify Attendance Calender Entry: ", attendanceStepDef.verifyAttendanceCalenderEntry);

}

const attendanceCalculation = async () => {
    step("Attendance Calculation");
    await subStep("Click Attendance Calculation: ", attendanceStepDef.clickCalculation);
    await subStep("Complete Attendance Calculation Entry: ", attendanceStepDef.completeAttendanceCalculation);
    await subStep("Verify Attendance Calculation Entry: ", attendanceStepDef.verifyAttendanceCalculationEntry);
    await subStep("Delete Attendance Entry and Calculation: ", attendanceStepDef.deleteAttendanceEntryAndCalculation);
}

const leaveApplication = async () => {
    step("Leave Application");
    await subStep("Click Leave: ", leaveStepDef.clickLeave);
    await subStep("Click Leave Application: ", leaveStepDef.clickLeaveApplication);
    await subStep("Click Leave Application Form: ", leaveStepDef.clickLeaveApplicationForm);
    await subStep("Search Employee In Leave Application Form: ", employeeStepDef.searchEmployeeIDInLeaveApplication);
    await subStep("Complete Leave Application Form Entry: ", leaveStepDef.completeLeaveApplicationEntry);
    await subStep("Click Leave Application List Page: ", leaveStepDef.clickLeaveApplicationList);
    await subStep("Verify Leave Application Entry: ", leaveStepDef.verifyLeaveApplicationEntry);   
}

const leaveEncashment = async () => {
    step("Leave Encashment");
    // await subStep("Click Leave: ", leaveStepDef.clickCalculation);
    // await subStep("Click Leave Application: ", leaveStepDef.completeAttendanceCalculation);
    // await subStep("Click Leave Application Form: ", leaveStepDef.verifyAttendanceCalculationEntry);
    // await subStep("Complete Leave Application Form: ", leaveStepDef.deleteAttendanceEntryAndCalculation);
}






module.exports = payrollTest;