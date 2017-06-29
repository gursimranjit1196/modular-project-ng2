import { ModularProPage } from './app.po';

describe('modular-pro App', () => {
  let page: ModularProPage;

  beforeEach(() => {
    page = new ModularProPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
