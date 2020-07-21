const driver = require("../../core/driver");
const { step, title, subStep, complete } = require("../../core/log");

const bankLoginStepDef = require("../bank/bankLoginSetpDef")(driver);
const changeUser = require("../subContract/changeUser")(driver);
const workOrderStepDef = require("../subContract/workOrder")(driver);
const advanceBillStepDef = require("../subContract/advanceBill")(driver);
const nonRequisitionChequeStepDef = require("../bank/nonRequisitionCheque")(driver);
const runningBillStepDef = require("../subContract/runningBill")(driver);
const finalBillStepDef = require("../subContract/finalBill")(driver);

const subContractBaseUrl = "https://subcontract.jomakhata.com/";
const bankBaseUrl = "https://bank.jomakhata.com/";
const budgetBaseUrl = "https://budget.jomakhata.com/";


const subContractTest = async () => {
    await driver.get(subContractBaseUrl);
    await title("SubContract Module Test Start Here: ");

    await workOrder();

    await advanceBill();   //1st Iteration
    await advanceBill();   //2nd Iteration

    await runningBill();   //1st Iteration        
    await createProgressReport();   //create progress report with extra quantity validation
    await validateProgressReportUpdatedSecond();   //validate progress repoprt with extra quantity validation
    await runningBill();   //2nd Iteration
    await amendment();

    await finalBill();

    await title("SubContract Module Test End Here.");

    // complete({
    // 	moduleName: "Automation Testing of SubContract Module(Updated Requirement V-2)",
    //     emailReceiver: ["abuasif.nyk@gmail.com", "ashfaq.nyk@gmail.com",
    //                         "mohiuddin_nyk@hotmail.com", "adnan.nuruddin@gmail.com",
    //                         "mashiurfpi@gmail.com","ramim121@gmail.com","ashad.feni@gmail.com"
    //                     ]
    // });

    // complete({
    // 	moduleName: "Automation Testing of SubContract Module",
    //     emailReceiver: ["abuasif.nyk@gmail.com"]
    // });
}

const workOrder = async () => {
    //needed for update v-1 req ------------------------------------------
    await driver.sleep(1000);
    await login();   //old
    await driver.sleep(1000);
    await createWorkOrder();   //old
    await verifyWoFromApproverDashboard();
    await denyWoFromApproverDashboard();

    await createWorkOrder();
    await denyWorkOrderFromDetailsPage();
    await createWorkOrder();
    await verifyWoFromApproverDashboard();
    await approveWOFromApproverDashBoard();

    await createProgressReport();
    await validateProgressReportUpdated();
    //needed for update v-1 req----------------------------------------------------
}

const advanceBill = async () => {
    await driver.sleep(1000);
    await createAdvanceBill();  //old
    await verifyAdvanceBill();  //old
    await approveAdvanceBill();  //old
    await partialPayThroughCashAdvanceBill();  //old
    await fullPayThroughBankAdvanceBill();  //old
}

const runningBill = async () => {
    await driver.sleep(1000);
    await createRunningBill();  //old
    await verifyRunningBill();  //old  //verifying the information only, not quantity validation
    
    await approveRunningBill();  //old
    await modifyRunningBill();  //old
    await partialPayThroughCashRunningBill();  //old
    await fullPayThroughBankRunningBill();  //old
}

const amendment = async () => {
    await driver.sleep(1000);
    await createAmendment();     //1st Iteration
    await denyAmendment();
    await createAmendment();     //2nd Iteration
    await approveAmendment();

    await amendmentAddProgressReport();
    await amendmentValidateProgressReport();

    await amendmentFullPayRunningBill();
    
}

const finalBill = async () => {
    await driver.sleep(1000);
    await createFinalBill();  //old
    await verifyFinalBill();  //old
    await approveFinalBill();  //old
    await verifyCompleteWo();  //old
}

const createAmendment = async () => {
    step("Create Amendment");
    await subStep("Change User Role As Local Billing Engineer: ", changeUser.setUserAsLocalBillingEngineerAtCDA);
    await subStep("Click Work Order: ", workOrderStepDef.clickWorkOrder);
    await subStep("Click List of Work Order: ", advanceBillStepDef.clickAllWorkOrderList);
    await subStep("Search Order by WO ID: ", advanceBillStepDef.searchWorkOrder);
    await subStep("Click Details Button of That Work Order: ", advanceBillStepDef.clickDetailsWorkOrder);
    await subStep("Complete Amendment Creation of That Work Order: ", runningBillStepDef.amendmentCreate);
}

const denyAmendment = async () => {
    step("Deny Amendment");
    await subStep("Change User Role As Site Approver: ", changeUser.setUserAsSiteApproverAtCDA);
    await subStep("Deny Amendment: ", runningBillStepDef.amendmentDeny);
}

const approveAmendment = async () => {
    step("Approve Amendment");
    await subStep("Change User Role As Site Approver: ", changeUser.setUserAsSiteApproverAtCDA);
    await subStep("Approve Amendment: ", runningBillStepDef.amendmentApprove);
}

const amendmentAddProgressReport = async () => {
    step("Add Progress Report of the Amendment");
    await subStep("Change User Role As Site Engineer: ", changeUser.setUserAsSiteEngineerAtCDA);
    await subStep("Add Progress Report of the Amendment: ", runningBillStepDef.amendmentProgressReport);
}

const amendmentValidateProgressReport = async () => {
    step("Validate Progress Report of the Amendment");
    await subStep("Change User Role As Local Billing Engineer: ", changeUser.setUserAsLocalBillingEngineerAtCDA);
    await subStep("Validate Progress Report of the Amendment: ", runningBillStepDef.amendmentValidateProgressReport);
}

const amendmentFullPayRunningBill = async () => {
    await driver.sleep(1000);
    await createRunningBill();  //old
    await verifyRunningBill();  //old
    
    await approveRunningBill();  //old
    await amendmentFullPayThroughCashRunningBill();  //old
}

const amendmentFullPayThroughCashRunningBill = async () => {
    await driver.sleep(1000);
    step("Full Pay Through Cash in Running Bill For Amendment(Own Module): ");
    await subStep("Change User Role As Central Accountant at CDA: ", changeUser.setUserAsCentralAccountantAtCDA);
    await subStep("Make Payment(Amendment): ", runningBillStepDef.makePaymentAmendment);
}

const verifyCompleteWo = async () => {
    step("Verify Complete Work Order");
    await subStep("Change User Role As Local Billing Engineer: ", changeUser.setUserAsLocalBillingEngineerAtCDA);
    await subStep("Click Work Order: ", workOrderStepDef.clickWorkOrder);
    await subStep("Click Complete & Denied Work Order and Verify Full Details with Bill Amount: ", advanceBillStepDef.completeWoVerify);
}

const login = async () => {
    step("Subcontract Login");
    await subStep("Input Email: ", bankLoginStepDef.setEmail); 
    await subStep("Input Password: ", bankLoginStepDef.setPassword);
    await subStep("Click Login Btn: ", bankLoginStepDef.clickLogin);
}

const loginAfter = async () => {
    step("Subcontract Login");
    await subStep("Input Email: ", bankLoginStepDef.setEmail); 
    await subStep("Input Password: ", bankLoginStepDef.setPassword);
    await subStep("Click Login Btn: ", bankLoginStepDef.clickLogin);
    await subStep("Set User as Local Billing Engineer at CDA: ", changeUser.setUserAsLocalBillingEngineerAtCDAInitial);
}

const selectRoleAsCreatorCDA = async () => {
    step("Set User Role as Creator at CDA");
    await driver.sleep(1000);
    await subStep("User Click Creator at CDA: ", bankLoginStepDef.selectRoleCreatorCDA);
}

const selectRoleAsApproverCDA = async () => {
    step("Set User Role as Approver at CDA");
    await driver.sleep(1000);
    await subStep("User Click Approver at CDA: ", bankLoginStepDef.selectRoleApproverCDA);
}

const selectRoleAsAuditorCDA = async () => {
    step("Set User Role as Auditor at CDA");
    await driver.sleep(1000);
    await subStep("User Click Auditor at CDA: ", bankLoginStepDef.selectRoleAuditorCDA);
}

const createWorkOrder = async () => {
    step("Create Work Order");
    await subStep("Set User as Local Billing Engineer at CDA: ", changeUser.setUserAsLocalBillingEngineerAtCDA);
    await subStep("Click Work Order: ", workOrderStepDef.clickWorkOrder);
    await subStep("Click Create Work Order: ", workOrderStepDef.clickCreateWorkOrder);
    await subStep("Input Basic Information: ", workOrderStepDef.setBasicInformation);
    await subStep("Input Work Oder Item Details: ", workOrderStepDef.setWorkOrderItemDetails);
    await subStep("Input Additional Information: ", workOrderStepDef.setAdditionalInformation);
}

const createAdvanceBill = async () => {
    await driver.sleep(1000);
    step("Create Advance Bill: ");
    await subStep("Change User Role As Local Billing Engineer: ", changeUser.setUserAsLocalBillingEngineerAtCDA);
    await subStep("Click Work Order: ", workOrderStepDef.clickWorkOrder);
    await subStep("Click List of Work Order: ", advanceBillStepDef.clickAllWorkOrderList);
    await subStep("Search Order by WO ID: ", advanceBillStepDef.searchWorkOrder);
    await subStep("Click Details Button of That Work Order: ", advanceBillStepDef.clickDetailsWorkOrder);
    await subStep("Complete Advance Bill Creation of That Work Order: ", advanceBillStepDef.advanceBillComplete);
}

const verifyAdvanceBill = async () => {
    await driver.sleep(1000);
    step("Verify Advance Bill: ");
    await subStep("Verify Advance bill info: ", advanceBillStepDef.verifyAdvanceBillInfo);
}

const approveAdvanceBill = async () => {
    await driver.sleep(1000);
    step("Approve Advance Bill: ");
    await subStep("Change User Role As Site Approver: ", changeUser.setUserAsSiteApproverAtCDA);
    await subStep("Approve Advance Bill: ", advanceBillStepDef.approveAdvanceBill);
}

const fullPayThroughBankAdvanceBill = async () => {
    await driver.sleep(1000);
    step("Full Pay Through Cash in Advance Bill(Own Module): ");
    await driver.get(bankBaseUrl);
    await bankSelectRoleAsCreatorCDAI();
    await subStep("Go To Create Cheque Page: ", nonRequisitionChequeStepDef.clickCreateChequeBtn);
    await subStep("Set SubContract Cheque Vendor & Amount Selection Information: ", advanceBillStepDef.setSubContractorVendorAndAmountSelectionInformation);
    await subStep("Set Bank Information: ", advanceBillStepDef.setBankInformation);
    await subStep("Set Cheque Information: ", nonRequisitionChequeStepDef.setChequeInformation);
    
    //
    await selectRoleAsAuditorCDA();
    await driver.sleep(1000);

    //scrollDown
    await driver.scrollToHeight(400);
    await driver.sleep(2000);
    await subStep("Click Review Button: ",nonRequisitionChequeStepDef.reviewCheque);

    await selectRoleAsCreatorCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(600);
    await driver.sleep(2000);
    await subStep("Click Print Button: ",nonRequisitionChequeStepDef.printCheque);

    await driver.sleep(1000);
    await subStep("Close Print Cheque Window: ",nonRequisitionChequeStepDef.closeCurrentWindow);

    await driver.sleep(2000);
    await subStep("Confirm Leaf Number: ",nonRequisitionChequeStepDef.confirmLeafNumber);

    await selectRoleAsApproverCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(400);
    await driver.sleep(2000);
    await subStep("Click Print Button: ",nonRequisitionChequeStepDef.approveCheque);

    await selectRoleAsCreatorCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(400);
    await driver.sleep(2000);
    await subStep("User Deliver Cheque: ",nonRequisitionChequeStepDef.deliverCheque);
    await driver.sleep(1000);
    await subStep("User Complete Cheque: ",nonRequisitionChequeStepDef.completeCheque);
    await driver.sleep(1000);  
    await driver.scrollToHeight(-500);
    await driver.sleep(2000);

    await subStep("Log Out From Bank: ", advanceBillStepDef.logOutBank);
    await driver.get(subContractBaseUrl);
    await driver.sleep(2000);
    await login();
}

const partialPayThroughCashAdvanceBill = async () => {
    await driver.sleep(1000);
    step("Partial Pay Through Cash in Advance Bill(Own Module): ");
    await subStep("Change User Role As Central Accountant at CDA: ", changeUser.setUserAsCentralAccountantAtCDA);

    await subStep("Make Payment: ", advanceBillStepDef.makePayment);
}

const bankSelectRoleAsCreatorCDAI = async () => {
    //step("Set User Role as Creator at CDA");
    await subStep("User Click Role Field: ", bankLoginStepDef.clickRoleDropdown);
    await driver.sleep(1000);
    await subStep("User Click Creator at CDA: ", bankLoginStepDef.selectRoleCreatorCDAI);
    await driver.sleep(1000);
    await subStep("User Click Role Set Btn: ", bankLoginStepDef.clickRoleEnter);
}

const createRunningBill = async () => {
    step("Creating Running Bill: ");
    await subStep("Change User Role As Local Billing Engineer: ", changeUser.setUserAsLocalBillingEngineerAtCDA);
    await subStep("Click Work Order: ", workOrderStepDef.clickWorkOrder);
    await subStep("User Click All Work Order List Button: ", advanceBillStepDef.clickAllWorkOrderList);
    await subStep("Search Order by WO ID: ", advanceBillStepDef.searchWorkOrder);
    await subStep("User Click Details Button: ", advanceBillStepDef.clickDetailsWorkOrder);
    await subStep("Create Running Bill: ", runningBillStepDef.createRunningBill);
}

const verifyRunningBill = async () => {
    await driver.sleep(1000);
    step("Verify Running Bill: ");
    await subStep("Verify Running bill info: ", runningBillStepDef.verifyRunningBillInfo);
}

const approveRunningBill = async () => {
    await driver.sleep(1000);
    step("Approve Running Bill: ");
    await subStep("Change User Role As Site Approver: ", changeUser.setUserAsSiteApproverAtCDA);
    await subStep("Approve Running Bill: ", runningBillStepDef.approveRunningBill);
}

const modifyRunningBill = async () => {
    step("Modify Bill To Adjust Advance Payment in Running Bill: ");
    await subStep("Change User Role As Central Accountant at CDA: ", changeUser.setUserAsCentralAccountantAtCDA);

    await subStep("Modify Bill: ", runningBillStepDef.modifyRunningBill);
}

const fullPayThroughBankRunningBill = async () => {
    await driver.sleep(1000);
    step("Full Pay Through Bank Management in Running Bill: ");
    await driver.get(bankBaseUrl);
    await bankSelectRoleAsCreatorCDAI();
    await subStep("Go To Create Cheque Page: ", nonRequisitionChequeStepDef.clickCreateChequeBtn);
    await subStep("Set SubContract Cheque Vendor & Amount Selection Information: ", runningBillStepDef.setSubContractorVendorAndAmountSelectionInformation);
    await subStep("Set Bank Information: ", advanceBillStepDef.setBankInformation);
    await subStep("Set Cheque Information: ", nonRequisitionChequeStepDef.setChequeInformation);
    //
    await selectRoleAsAuditorCDA();
    await driver.sleep(1000);

    //scrollDown
    await driver.scrollToHeight(400);
    await driver.sleep(500);
    await subStep("Click Review Button: ",nonRequisitionChequeStepDef.reviewCheque);

    await selectRoleAsCreatorCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(600);
    await driver.sleep(500);
    await subStep("Click Print Button: ",nonRequisitionChequeStepDef.printCheque);

    await driver.sleep(2000);
    await subStep("Close Print Cheque Window: ",nonRequisitionChequeStepDef.closeCurrentWindow);

    await driver.sleep(2000);
    await subStep("Confirm Leaf Number: ",nonRequisitionChequeStepDef.confirmLeafNumber);

    await selectRoleAsApproverCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(400);
    await driver.sleep(2000);
    await subStep("Click Print Button: ",nonRequisitionChequeStepDef.approveCheque);

    await selectRoleAsCreatorCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(400);
    await driver.sleep(2000);
    await subStep("User Deliver Cheque: ",nonRequisitionChequeStepDef.deliverCheque);
    await driver.sleep(1000);
    await subStep("User Complete Cheque: ",nonRequisitionChequeStepDef.completeCheque);
    await driver.sleep(1000);  
    await driver.scrollToHeight(-500);
    await driver.sleep(2000);

    await subStep("Log Out From Bank: ", advanceBillStepDef.logOutBank);
    await driver.get(subContractBaseUrl);
    await driver.sleep(2000);
    await loginAfter();
}

const partialPayThroughCashRunningBill  = async () => {
    await driver.sleep(1000);
    step("Partial Pay Through Cash in Running Bill(Own Module): ");
    
    await subStep("Make Payment: ", runningBillStepDef.makePayment);
}

const createFinalBill = async () => {
    step("Creating Final Bill: ");
    await subStep("Change User Role As Local Billing Engineer: ", changeUser.setUserAsLocalBillingEngineerAtCDA);
    await subStep("Click Work Order: ", workOrderStepDef.clickWorkOrder);
    await subStep("User Click All Work Order List Button: ", advanceBillStepDef.clickAllWorkOrderList);
    await subStep("Search Order by WO ID: ", advanceBillStepDef.searchWorkOrder);
    await subStep("User Click Details Button: ", advanceBillStepDef.clickDetailsWorkOrder);
    await subStep("Create Final Bill: ", finalBillStepDef.createFinalBill);
}

const verifyFinalBill = async () => {
    await driver.sleep(1000);
    step("Verify Final Bill: ");
    await subStep("Verify Final bill info: ", finalBillStepDef.verifyFinalBillInfo);
}

const approveFinalBill = async () => {
    await driver.sleep(1000);
    step("Approve Final Bill: ");
    await subStep("Change User Role As Site Approver: ", changeUser.setUserAsSiteApproverAtCDA);
    await subStep("Approve Final Bill: ", finalBillStepDef.approveFinalBill);
}

const verifyWoFromApproverDashboard = async () => {
    step("Verify Created Work Order From Approver Dashboard");
    await subStep("Change User Role As Site Approver: ", changeUser.setUserAsSiteApproverAtCDA);
    await subStep("Verify Work Order: ", workOrderStepDef.verifyInfoFromApproverDashboard);
}

const denyWoFromApproverDashboard = async () => {
    step("Deny Work Order From Approver Dashboard");
    await subStep("Deny Work Order From Approver Dashboard: ", workOrderStepDef.denyWorkOrderFromDashboard);

}

const approveWOFromApproverDashBoard = async () => {
    step("Approve Work Order From Approver Dashboard");
    await driver.get(budgetBaseUrl);
    //await login();    //auto navigate to the page
    await subStep("Get Budget Amount: ", workOrderStepDef.getBudgetAmount);
    await driver.get(subContractBaseUrl);
    //await login();    //auto navigate to the page
    await verifyWoFromApproverDashboard();
    await subStep("Approve Work Order From Approver Dashboard: ", workOrderStepDef.approveWorkOrderFromDashboard);
    await driver.get(budgetBaseUrl);
    //await login();    //auto nevigate to the page
    await subStep("Verify Budget Amount: ", workOrderStepDef.verifyBudgetAmount);
    
}

const denyWorkOrderFromDetailsPage = async () => {
    step("Deny Work Order From Details Page");
    await subStep("Change User Role As Site Approver: ", changeUser.setUserAsSiteApproverAtCDA);
    await subStep("Deny Work Order From Details Page: ", workOrderStepDef.denyWorkOrder);
}

const createProgressReport = async () => {
    step("Create Progress Report With Quantity Validation");
    await driver.get(subContractBaseUrl);
    await subStep("Change User Role As Site Engineer: ", changeUser.setUserAsSiteEngineerAtCDA);

    await subStep("Create Progress Report and Verify With Extra Qty: ", workOrderStepDef.createProgressReportWithValidation);
    
}

const validateProgressReportUpdated = async () => {
    step("Validate Progress Report");
    await subStep("Change User Role As Local Billing Engineer: ", changeUser.setUserAsLocalBillingEngineerAtCDA);

    await subStep("Validate Progress Report and Verify With Extra Qty: ", workOrderStepDef.validateProgressReportWithValidation);
    
}

const validateProgressReportUpdatedSecond = async () => {
    step("Validate Progress Report");
    await subStep("Change User Role As Local Billing Engineer: ", changeUser.setUserAsLocalBillingEngineerAtCDA);

    await subStep("Validate Progress Report and Verify With Extra Qty: ", workOrderStepDef.validateProgressReportWithValidationSecond);
    
}

module.exports = subContractTest;