'use strict';

describe('my app', function() {
  it('should automatically redirect to /spaces when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/spaces");
  });

  describe('spaces/index', function() {
    beforeEach(function() {
      browser.get('index.html#/spaces');
    });

    it('should render spaces/index partial when user navigates to /spaces', function() {
      expect(element.all(by.css('[ng-view]')).getText()).
        toMatch(/(No spaces yet!|Spaces)/);
    });
  });

  describe('spaces/new', function() {
    beforeEach(function() {
      browser.get('index.html#/spaces/new');
    });

    it('should render spaces/new partial when user navigates to /spaces/new', function() {
      expect(element.all(by.css('[ng-view]')).getText()).
        toMatch(/Add Space/);
    });

    it('should accept a name, price and description', function() {
      var nameInput = element(by.model('name'));
      nameInput.sendKeys('barryshouse');
      var descriptionInput = element(by.model('description'));
      descriptionInput.sendKeys('four big rooms');
      var priceInput = element(by.model('price'));
      priceInput.sendKeys(50);
      element(by.css('#submit')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/spaces/index");
      var space = element.all(by.css('.individual-space')).last();
      expect(space.getText()).toMatch("barryshouse\n£50 / night\nfour big rooms");
    });
  });
});
