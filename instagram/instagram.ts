import { Selector } from 'testcafe';

fixture `Comment on Instagram`
  .page `https://www.instagram.com/p/CZ93nDzoNc1/`;

test('Submit a form', async t => {
  await t
    .setNativeDialogHandler(() => true)

    .typeText("//form[@method='POST']/textarea", 'Los campeones siguen jugando hasta que lo hacen bien.')
    .click("//form[@method='POST']/textarea")
});
