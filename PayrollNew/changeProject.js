let changeProject = (driver) => {
    let testSet = {};

    testSet.setProjectCDAInitial = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//option[contains(.,'CDA')]") === false){ return "Initialy Role Button Not Set/Clicked in CDA"; }
        if(await driver.waitClick("//button[contains(.,'Proceed')]") === false){ return "Proceed Button Not Clicked"};
    }

    testSet.setProjectCDA = async () => {
        await driver.sleep(500);
        if(await driver.waitClick("//option[contains(.,'CDA')]") === false){ return "Role Button Not Set/Clicked in CDA"; }
    }

    return testSet;

}
module.exports = changeProject;