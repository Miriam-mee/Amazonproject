/// <reference types="cypress" />
import { HomePage } from "../../pages/homePage"

const homePage = new HomePage();

describe('Amazon Search Functionality', () => {
  //open Amazon app to access the homepage
  it('Pick the fifth item', () => {

    homePage.visitPage();
    homePage.searchItem();
    homePage.selectFifthItem();
  })

})