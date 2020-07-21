let bankLoginFunction = (driver) => {
    let testSet = {};

    testSet.setEmail = async () => {
		if(await driver.sendKeys("//input[@type='email']", "erp.maxgroup@gmail.com") === false){ return "Email Not Set"; }
	}

	testSet.setPassword = async () => {
		if(await driver.sendKeys("//input[@type='password']", "123") === false){ return "Password Not Set"; }
	}

	testSet.clickLogin = async () => {
		if(await driver.click("//button") === false){ return "Login Button Not Clicked"; }
    }
    
    testSet.clickRoleDropdown = async () => {
		if(await driver.waitClick("//select[@id='input']") === false){ return "Role Dropdown not Working"; }
	}

	testSet.selectRoleCreatorCDAI = async () => {
		if(await driver.waitClick("//option[contains(.,'Creator at CDA')]") === false){ return "Initialy Role Red Button Not Clicked"; }
	}
	
	testSet.selectRoleCreatorCDA = async () => {
		if(await driver.waitClick("/html/body/div[2]/div/div[3]/div[1]/div/button/span") === false){ return "Role Red Button Not Clicked"};
		if(await driver.waitSendKeys("//input[@ng-model='roleSearch']","cda") === false){ return "CDA inserted into Search Field in Role Selection"};
		if(await driver.waitClick("//li[contains(.,'Creator at CDA')]") === false){ return "Creator Role Not Selected"};
    }
    
    testSet.selectRoleApproverCDA = async () => {
		if(await driver.waitClick("/html/body/div[2]/div/div[3]/div[1]/div/button/span") === false){ return "Role Red Button Not Clicked"};
		if(await driver.waitSendKeys("//input[@ng-model='roleSearch']","cda") === false){ return "CDA inserted into Search Field in Role Selection"};
		if(await driver.waitClick("//li[contains(.,'Approver at CDA')]") === false){ return "Approver Role Not Selected"};
    }
    
    testSet.selectRoleAuditorCDA = async () => {
		if(await driver.waitClick("/html/body/div[2]/div/div[3]/div[1]/div/button/span") === false){ return "Role Red Button Not Clicked"};
		if(await driver.waitSendKeys("//input[@ng-model='roleSearch']","cda") === false){ return "CDA inserted into Search Field in Role Selection"};
		if(await driver.waitClick("//li[contains(.,'Auditor at CDA')]") === false){ return "Auditor Role Not Selected"};
	}

	testSet.clickRoleEnter = async () => {
		if(await driver.click("//button[contains(.,'Confirm')]") === false){ return "Role Confirm Button Not Working"; }
    }
    

	return testSet;
}
module.exports = bankLoginFunction;