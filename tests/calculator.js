let homepage = require('../pages/homepage');
describe("calculator demo", function(){

    it('this is a additional test', function(){

            //browser.get('https://juliemr.github.io/protractor-demo/');
            homepage.get('https://juliemr.github.io/protractor-demo/');
            //element(by.model('first')).sendKeys('2')
            homepage.enterFirstNumber('4');
            //element(by.model('second')).sendKeys('4')
            homepage.enterSecondNumber('6')
           // element(by.css('[ng-click="doAddition()"]')).click();
            homepage.clickGo();
           //let result = element(by.cssContainingText('.ng-binding', '6')); 

           //expect(result.getText()).toEqual('6');
           homepage.verifyResult('10');
            browser.sleep(3000)

    })

    it('this is a additional test', function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('2')
        homepage.enterFirstNumber('4');
        //element(by.model('second')).sendKeys('4')
        homepage.enterSecondNumber('6')
       // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo1();
       //let result = element(by.cssContainingText('.ng-binding', '6')); 

       //expect(result.getText()).toEqual('6');
       homepage.verifyResult('10');
        browser.sleep(3000)

})

});