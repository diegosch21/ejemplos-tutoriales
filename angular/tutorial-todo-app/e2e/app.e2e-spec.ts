import { TutorialTodoAppPage } from './app.po';

describe('tutorial-todo-app App', () => {
  let page: TutorialTodoAppPage;

  beforeEach(() => {
    page = new TutorialTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
