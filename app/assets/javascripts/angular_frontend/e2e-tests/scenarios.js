'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('makersBnb', function() {


  it('should automatically redirect to /spaces/index when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/spaces/index");
  });


  describe('spaces/index', function() {

    beforeEach(function() {
      browser.get('index.html#/spaces');
    });


    it('should render spaces/index partial when user navigates to /spaces', function() {
      expect(element.all(by.css('[ng-view]')).getText()).
        toMatch(/(No spaces yet!|House)/);
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

  });
});
