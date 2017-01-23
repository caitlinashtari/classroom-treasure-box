import { ClassroomTreasureBoxPage } from './app.po';

describe('classroom-treasure-box App', function() {
  let page: ClassroomTreasureBoxPage;

  beforeEach(() => {
    page = new ClassroomTreasureBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
