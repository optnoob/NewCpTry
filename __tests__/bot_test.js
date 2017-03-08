jest
  .dontMock('../bot.js');

process.env.WIT_TOKEN = 'ZINFV5S22TEAX6FBAWCZWO4GRL7TM3QD';
const bot = require('../bot.js');

describe('Bot tests', () => {

  it('Bot creation', () => {
    const client = bot.getWit(); // Just testing the creation  
    expect(client).not.toBeNull();
  });
});