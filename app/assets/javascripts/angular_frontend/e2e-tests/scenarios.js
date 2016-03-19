'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('makersBnb', function() {


  it('should automatically redirect to /spaces/index when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/spaces/index");
  });


  describe('spaces', function() {

    beforeEach(function() {
      browser.get('index.html#/spaces');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view]')).getText()).
        toMatch(/(No spaces yet!|House)/);
    });

  });


  // describe('view2', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#/view2');
  //   });


  //   it('should render view2 when user navigates to /view2', function() {
  //     expect(element.all(by.css('[ng-view] p')).first().getText()).
  //       toMatch(/partial for view 2/);
  //   });

  // });
});
