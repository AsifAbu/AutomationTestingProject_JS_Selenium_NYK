const driver = require("../../core/driver");
const { step, title, subStep, complete } = require("../../core/log");
const bankLoginStepDef = require("../bank/bankLoginSetpDef")(driver);
const nonRequisitionCheques = require("../bank/nonRequisitionCheque")(driver);
const interCompanyTransferApplicationCheque = require("../bank/interCompanyTransferApplicationCheque")(driver);
const bankBaseUrl = "https://bank.jomakhata.com/";

const bankTest = async function(){
    await driver.get(bankBaseUrl);
    await title("Bank Module Test Start Here: ");

    await driver.sleep(2000);
    await nonRequisitionCheque(); //Non Requisition Cheque Automation
    await driver.sleep(2000);

    await driver.sleep(2000);
    await interCompanyTransferApplication(); //Inter Company Transfer Cheque Automation
    await driver.sleep(2000);

    await title("Bank Module Test End Here.");

    // complete({
    // 	moduleName: "Automation Testing of Bank Module",
    //     emailReceiver: ["abuasif.nyk@gmail.com", "ashfaq.nyk@gmail.com",
    //                         "monmunni88@gmail.com", "adnan.nuruddin@gmail.com",
    //                         "mashiurfpi@gmail.com","ramim121@gmail.com","ashad.feni@gmail.com"
    //                     ]
    // });
}

const login = async () => {
    step("Bank Login");
    await subStep("Input Email: ", bankLoginStepDef.setEmail); 
    await subStep("Input Password: ", bankLoginStepDef.setPassword);
    await subStep("Click Login Btn: ", bankLoginStepDef.clickLogin);
}

const selectRoleAsCreatorCDAI = async () => {
    step("Set User Role as Creator at CDA");
    await subStep("User Click Role Field: ", bankLoginStepDef.clickRoleDropdown);
    await driver.sleep(1000);
    await subStep("User Click Creator at CDA: ", bankLoginStepDef.selectRoleCreatorCDAI);
    await driver.sleep(1000);
    await subStep("User Click Role Set Btn: ", bankLoginStepDef.clickRoleEnter);
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

const nonRequisitionCheque = async () => {
    login();
    await driver.sleep(2000);

    selectRoleAsCreatorCDAI();
    await driver.sleep(2000);

    step("Non Requisition Cheque Create");
    await driver.sleep(2000);
    await subStep("User Enter Create Cheque Page: ", nonRequisitionCheques.clickCreateChequeBtn);
    await driver.sleep(2000);
    await subStep("User Create Regular BO Cheque: ", nonRequisitionCheques.clickRegularBOBtn);
    await driver.sleep(2000);
    await subStep("User Set Values into Vendor Amount Selection Fields: ", nonRequisitionCheques.setValuesIntoVendorAmountSelection);
    await driver.sleep(2000);
    await subStep("User Set Bank Information Fields: ", nonRequisitionCheques.setBankInformation);
    await driver.sleep(2000);
    await subStep("User Set Cheque Information Fields", nonRequisitionCheques.setChequeInformation);
    await driver.sleep(2000);
    await subStep("Verify All The Value Which Created Previously: ",nonRequisitionCheques.verifyCreatedValuesOfNonRequisitionCheque);
    await driver.sleep(2000);

    selectRoleAsAuditorCDA();
    await driver.sleep(1000);

    //scrollDown
    await driver.scrollToHeight(400);
    await driver.sleep(500);
    await subStep("Click Review Button: ",nonRequisitionCheques.reviewCheque);

    selectRoleAsCreatorCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(600);
    await driver.sleep(500);
    await subStep("Click Print Button: ",nonRequisitionCheques.printCheque);

    // await driver.sleep(1000);
    // await subStep("Verify Printed Cheque Data: ",nonRequisitionCheques.verifyPrintChequeData);

    await driver.sleep(1000);
    await subStep("Close Print Cheque Window: ",nonRequisitionCheques.closeCurrentWindow);

    await driver.sleep(500);
    await subStep("Confirm Leaf Number: ",nonRequisitionCheques.confirmLeafNumber);

    selectRoleAsApproverCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(400);
    await driver.sleep(500);
    await subStep("Click Print Button: ",nonRequisitionCheques.approveCheque);

    selectRoleAsCreatorCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(400);
    await driver.sleep(500);
    await subStep("User Deliver Cheque: ",nonRequisitionCheques.deliverCheque);
    await driver.sleep(1000);
    await subStep("User Complete Cheque: ",nonRequisitionCheques.completeCheque);
    await driver.sleep(1000);  
    await driver.scrollToHeight(-500);
    await driver.sleep(1000);  
}

const interCompanyTransferApplication = async () => {
    await driver.sleep(2000);

    step("Inter Company Transfer Application Cheque Create");
    await driver.sleep(2000);
    await subStep("User Enter Create Cheque Page: ", nonRequisitionCheques.clickCreateChequeBtn);
    await driver.sleep(2000);
    await subStep("User Enter Transfer Cheque Page: ", interCompanyTransferApplicationCheque.clickTransferBtn);
    await driver.sleep(1000);
    await subStep("User Set Values Into Transfer Type & Amount Selection Fields: ", interCompanyTransferApplicationCheque.setValuesIntoTransferTypeAmountSelection);

    await driver.sleep(1000);
    await subStep("User Set Values Into Bank Information Fields: ", interCompanyTransferApplicationCheque.bankInformation);

    await driver.sleep(1000);
    await subStep("User Set Values Into Cheque Information Fields: ", interCompanyTransferApplicationCheque.applicationInformation);

    await driver.sleep(2000);
    await subStep("Verify New Inter Company Transfer Application Cheque: ", interCompanyTransferApplicationCheque.verifyCreatedValuesOfInterCompanyTransferApplicationCheque);

    selectRoleAsAuditorCDA();
    await driver.sleep(1000);

    //scrollDown
    await driver.scrollToHeight(400);
    await driver.sleep(500);
    await subStep("Click Review Button: ",nonRequisitionCheques.reviewCheque);

    selectRoleAsCreatorCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(600);
    await driver.sleep(2000);
    await subStep("Click Print Button: ",nonRequisitionCheques.printCheque);

    await driver.sleep(2000);
    await subStep("Close Print Cheque Window: ",nonRequisitionCheques.closeCurrentWindow);

    selectRoleAsApproverCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(400);
    await driver.sleep(500);
    await subStep("Click Print Button: ",nonRequisitionCheques.approveCheque);

    selectRoleAsCreatorCDA();
    await driver.sleep(1000);

    await driver.scrollToHeight(400);
    await driver.sleep(500);
    await subStep("User Deliver Cheque: ",nonRequisitionCheques.deliverCheque);
    await driver.sleep(1000);
    await subStep("User Complete Cheque: ",interCompanyTransferApplicationCheque.completeInterCompanyTransferApplicationCheque);
    await driver.sleep(1000);  
    await driver.scrollToHeight(-500);
    await driver.sleep(1000);
}

module.exports = bankTest;