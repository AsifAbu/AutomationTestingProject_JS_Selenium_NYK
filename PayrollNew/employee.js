let employee = (driver) => {
    let testSet = {};
    let EID = Math.floor(Math.random()*999999999);
    let EID3 = '';

    testSet.generateEID = async () => {
        let EID2 = Math.floor(Math.random()*999999999);
        EID=EID2;
    }

    testSet.searchEmployeeForDelete = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//input[@name='searchFullName']");
        await driver.sleep(3000);

        if(await driver.waitSendKeys("//input[@name='searchFullName']", "Automation Test Ting") === false){ return "Employee Not Search"; }
    
    }

    // testSet.getcountRoot = () => {
    //     await driver.sleep(1000);
    //     let t = 0;
    //     t = driver.waitGetText("//div[5]/span");
    //     driver.sleep(3000);
    //     let demoT = t.split(" ");
    //     t = demoT[0].trim();
        
    //     return t;
    // }

    testSet.delete_EmployeeCleaning = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("(//button[contains(.,'Action')])[1]") === false){ return "Action Button Not Clicked"; }
        
        if(await driver.waitClick("(//a[contains(.,'Delete')])[1]") === false){ return "Delete Button Not Clicked"; }
        await driver.sleep(300);
        if(await driver.waitClick("(//button[contains(.,'Yes')])[1]") === false){ return "Yes Button Not Clicked"; }
        await driver.sleep(300);
        if(await driver.waitClick("(//button[contains(.,'OK')])[1]") === false){ return "OK Button Not Clicked"; }
        await driver.sleep(200);
    }

    testSet.clickEmployee = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Employee')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Employee')])[1]") === false){ return "Employee Button Not Clicked"; }
    }
    
    testSet.clickCreateEmployee = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("//span[contains(.,'Create Employee')]");
        await driver.sleep(2000);
        if(await driver.waitClick("//span[contains(.,'Create Employee')]") === false){ return "Create Employee Button Not Clicked"; }
    }

    testSet.clickPersonalInfo = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Personal')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Personal')])[1]") === false){ return "Personal Button Not Clicked"; }
    }

    testSet.clickOrganizationSetupSub = async () => {
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Organization Setup')])[2]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Organization Setup')])[2]") === false){ return "Organization Setup Sub Button Not Clicked"; }
    }

    testSet.addPersonalInfo = async () => {
        await driver.sleep(500);
        await testSet.clickEmployee();
        await testSet.clickCreateEmployee();
        await testSet.clickPersonalInfo();
        console.log(EID);
        EID3 = EID;
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@id='employee_custom_id']", EID) === false) {return "Employee Id is not Insert"; }
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@formcontrolname='start_title']","QA") === false) {return "Start Title is not inserted"; }
        if(await driver.waitSendKeys("//input[@placeholder='First name']","Automation") === false) {return "First Name is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='middle_name']","Test") === false) {return "Middle Name is not inserted"; }
        if(await driver.waitSendKeys("//input[@placeholder='Last name']","Ting") === false) {return "Last Name is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='end_title']",".") === false) {return "End Title is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='email']","testing"+EID+"@gmail.com") === false) {return "Email is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='phone_number']","01780000000") === false) {return "Phone Number is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='emergency_phone_number']","01781111111") === false) {return "Emergency Phone Number is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='telephone_number']","1122") === false) {return "Telephone Number is not inserted"; }
        if(await driver.waitClick("//select[@formcontrolname='gender']") === false) {return "Gender Field is not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'Male')]") === false) {return "Gender is not Set"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='dob']","04222020") === false) {return "Date is not inserted"; }
        
        await driver.sleep(2000);
        await driver.scrollToElement("//select[@formcontrolname='marital_status']");
        await driver.sleep(2000);
        if(await driver.waitClick("//select[@formcontrolname='marital_status']") === false) {return "Marital Field is not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'Unmarried')]") === false) {return "Marital Status is not inserted"; }
        if(await driver.waitClick("//select[@formcontrolname='home_district']") === false) {return "Home District Field is not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'Rajshahi')]") === false) {return "Home District is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='father_name']","TestingFatherName") === false) {return "Father Name is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='mother_name']","TestingMotherName") === false) {return "Mother Name is not inserted"; }
        if(await driver.waitSendKeys("//textarea[@formcontrolname='present_address']","testing present address") === false) {return "Present Address is not inserted"; }
        if(await driver.waitSendKeys("//textarea[@formcontrolname='permanant_address']","testing permanent address") === false) {return "Permanent Address is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='driving_liscence']","DK0405837C00000") === false) {return "Driving Lisence is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='nid']","9876543210") === false) {return "NID is not inserted"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='birth_certificate_number']", "12121212121212121") === false) {return "Birth Cirtificate is not Inserted"; }
        if(await driver.waitClick("//select[@formcontrolname='blood_group']") === false) {return "Blood Group Field is not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'A+')]") === false) {return "Blood Group is not Select"; }
        if(await driver.waitClick("//select[@formcontrolname='religion']") === false) {return "Religion Field is not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'Islam')]") === false) {return "Rreligion is not Select"; }
        if(await driver.waitSendKeys("//input[@formcontrolname='passport']","BE0000000") === false) {return "Passport Number is not inserted"; }
        
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[@class='select2-selection__placeholder'])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Employee Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","Md Hafiz") === false) {return "Employee id is not input in select employee field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/Employee is not Select"; }


        await driver.sleep(2000);
        await driver.scrollToElement("//button[contains(.,'Save')]");
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Save')]") === false) {return "Save Button is not Click"; }
        if(await driver.waitClick("//button[contains(.,'Yes')]") === false) {return "Yes Button is not Click"; }
        if(await driver.waitClick("//button[contains(.,'OK')]") === false) {return "Ok Button is not Click"; }
    }

    testSet.clickEmployeeList = async()=>{
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Employee List')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Employee List')])[1]") === false) {return "Employee List is not Click in Sideber"; }
    }

    testSet.clickOrganizationList = async()=>{
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Setup List')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Setup List')])[1]") === false) {return "Setup List is not Click in Sideber"; }
    }

    testSet.clickOrganizationSetup = async()=>{
        await driver.sleep(2000);
        await driver.scrollToElement("(//span[contains(.,'Organization Setup')])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[contains(.,'Organization Setup')])[1]") === false) {return "Organization Setup is not Click in Sideber"; }
    }

    testSet.searchEmployee = async()=>{
        await driver.sleep(2000);
        await testSet.clickEmployeeList();
        await driver.sleep(2000);
        if(await driver.waitSendKeys("(//input[@name='searchEmployeeCustomId'])[1]",EID) === false) {return "Employee id is not input"; }
    }

    testSet.searchEmployeeIDInPsSetupList = async()=>{
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='searchOfficeId']",EID) === false) {return "Employee id is not input in Setup List Page"; }
    }



    testSet.personVerify = async () =>{
        await driver.sleep(2000);
        let EmployeeID = await driver.waitGetValue("//tr[1]/td[6]/input");
        await driver.sleep(5000);
        if(EID != EmployeeID.trim()){ return EID+":Employee ID doesn't match:"+EmployeeID; }

    }

    testSet.personOrganizationVerify = async () =>{
        await driver.sleep(2000);
        await testSet.clickOrganizationList();
        await driver.sleep(2000);
        if(await driver.waitSendKeys("//input[@name='searcOfficeId']",EID) === false) {return "Employee id is not input"; }
    
        await driver.sleep(2000);
        let EmployeeID = await driver.waitGetText("//tr[1]/td[3]");
        await driver.sleep(5000);
        if(EID != EmployeeID.trim()){ return EID+":Employee ID doesn't match in setup page:"+EmployeeID; }

    }

    testSet.completeOrganizationSetup = async () => {
        await driver.sleep(500);
        await testSet.clickOrganizationSetup();
        await testSet.clickOrganizationSetupSub();

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Employee Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']",EID) === false) {return "Employee id is not input in select employee field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/Employee is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Company Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","MAX.nyk") === false) {return "Company Name is not input in search company field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/Company is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Department Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","AsifTesting Department") === false) {return "Department Name is not input in search Department field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/Department is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Designation Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","AsifTestingDesignation") === false) {return "Designation Name is not input in search Designation field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/Designation is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Shift Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","InternShift") === false) {return "Shift Name is not input in search Shift field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/Shift is not Select"; }

        if(await driver.waitSendKeys("//input[@formcontrolname='joiningDate']","04222020") === false) {return "Joining Date is not inserted"; }

        await driver.sleep(2000);
        await driver.scrollToElement("//input[@formcontrolname='effectiveDate']");
        await driver.sleep(2000);
        if(await driver.waitSendKeys("//input[@formcontrolname='effectiveDate']","04252020") === false) {return "Effective Date is not inserted"; }

        await driver.sleep(2000);
        await driver.scrollToElement("(//span[@class='select2-selection__placeholder'])[1]");
        await driver.sleep(2000);

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Empoyee Nature Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","Asif Testing Not Permanent") === false) {return "Employee Nature is not input in search Employee nature field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/EmployeeNature is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Work Station Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","AsifTestingNYK") === false) {return "Employee Work Station is not input in search Employee work station field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/WorkStation is not Select"; }

        if(await driver.waitClick("//select[@formcontrolname='managementType']") === false) {return "Select Management Type Field not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'Non Management')]") === false) {return "Non Management is not Select"; }

        if(await driver.waitClick("//select[@formcontrolname='workingStatus']") === false) {return "Working Stataus Field not Clicked"; }
        if(await driver.waitClick("//option[contains(.,'Working')]") === false) {return "Working Status is not Select"; }

        await driver.sleep(2000);
        await driver.scrollToElement("(//span[@class='select2-selection__placeholder'])[1]");
        await driver.sleep(2000);
        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Sub Designation Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","subAsifTestingDesignation") === false) {return "Employee Sub Designation is not input in search Employee Sub Designation field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/SubDesignation is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Salary Grade Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","Automation Grade 1") === false) {return "Employee Salary Grade is not input in search Employee Salary Grade field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/SalaryGrade is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[1]") === false) {return "Select Line Supervisor Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","Md  Hafiz") === false) {return "Employee Line Supervisor is not input in search Employee Line Supervisor field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/LineSupervisor is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[2]") === false) {return "Select Reporting Supervisor Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","Ramin  Hossin") === false) {return "Employee Reporting Supervisor is not input in search Employee Reporting Supervisor field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/ReportingSupervisor is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[3]") === false) {return "Select Head of the Department Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","Ramin  Hossin") === false) {return "Employee Head of the Department Supervisor is not input in search Head Department field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/HeadDepartment is not Select"; }

        if(await driver.waitSendKeys("//input[@formcontrolname='offNumber']","017"+Math.floor(Math.random()*99999999)) === false) {return "Employee Official Phone Number is not insert"; }
        
        if(await driver.waitSendKeys("//input[@formcontrolname='offEmail']","testing"+EID+"@gmail.com") === false) {return "Employee Official Email is not insert"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[3]") === false) {return "Select Bank Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","Trust Bank Limited") === false) {return "Bank Supervisor is not input in search Head Department field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/Bank is not Select"; }

        if(await driver.waitClick("(//span[@class='select2-selection__placeholder'])[3]") === false) {return "Select Branch Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']","Dhaka") === false) {return "Employee Branch Supervisor is not input in search Head Department field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row/Branch is not Select"; }

        if(await driver.waitSendKeys("//input[@formcontrolname='offAccNumber']","1122"+EID) === false) {return "Employee Official Account Number is not insert"; }

        await driver.sleep(2000);
        await driver.scrollToElement("//button[contains(.,'Save')]");
        await driver.sleep(2000);
        if(await driver.waitClick("//button[contains(.,'Save')]") === false) {return "Save Button Not Clicked"; }
        await driver.sleep(300);
        if(await driver.waitClick("//button[contains(.,'Yes')]") === false) {return "Yes Button is not Click"; }
        await driver.sleep(300);
        if(await driver.waitClick("//button[contains(.,'OK')]") === false) {return "Ok Button is not Click"; }
    }

    testSet.selectEmployee = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//span[@class='select2-selection__placeholder']") === false) {return "Select Employee Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']",EID) === false) {return "Employee ID is not Inserted into search field"; }
        await driver.sleep(1000);
        if(await driver.waitClick("(//li[@role='treeitem'])[1]") === false) {return "Search Result Row is not Select"; }
    }

    testSet.selectEmployeeForPresentOffDay = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//span[@class='select2-selection__placeholder']") === false) {return "Select Employee Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']", EID) === false) {return "Employee ID is not Inserted into search field"; }
    }

    testSet.searchEmployeeForAttendance = async () => {
        await driver.sleep(500);
        if(await driver.waitSendKeys("//input[@name='searchunit']", EID) === false) {return "Search Employee not Success"; }
        await driver.sleep(500);
    }

    testSet.searchEmployeeIDInLeaveApplication = async () => {
        await driver.sleep(1000);
        if(await driver.waitClick("//span[@class='select2-selection__placeholder']") === false) {return "Select Employee Field not Clicked"; }
        if(await driver.waitSendKeys("//input[@class='select2-search__field']", EID) === false) {return "Employee ID is not Inserted into search field"; }
        await driver.sleep(1000);
    }

    







    return testSet;
}
module.exports = employee;