import { CalculationPage } from './app.po';

describe('calculation App', () => {
  let page: CalculationPage;

  beforeEach(() => {
    page = new CalculationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
