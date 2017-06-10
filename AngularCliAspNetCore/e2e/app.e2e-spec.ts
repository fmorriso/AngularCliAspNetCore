import { AatempPage } from './app.po';

describe('aatemp App', () => {
  let page: AatempPage;

  beforeEach(() => {
    page = new AatempPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
