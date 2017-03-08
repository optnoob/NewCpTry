jest.dontMock('../const.js');

describe('Const setting test', () => {
  /*
  it('No WIT_TOKEN test',  () => {
    require('../const.js');
   expect(config.WIT_TOKEN).toThrow(new Error('missing WIT_TOKEN'));
  	});*/

  it('WIT_TOKEN test', () => {
    process.env.WIT_TOKEN = 'ZINFV5S22TEAX6FBAWCZWO4GRL7TM3QD';
    var config = require('../const.js');
    expect(config.WIT_TOKEN).toEqual('ZINFV5S22TEAX6FBAWCZWO4GRL7TM3QD');
  });

  it('No FB_PAGE_TOKEN test', () => {
    var config = require('../const.js');
    expect(config.FB_PAGE_TOKEN).toEqual(null);
  });

  it('No FB_PAGE_TOKEN test', () => {
    process.env.FB_PAGE_TOKEN = 'EAAKrN9UwgGQBACwEdfPnsJq32sbX1KVZAv2W8DLZA7BkZB8mNZATk10LlgjRPKk3LWthRXVIWFBvCjZB18hswlPsIr6e1QKJfmkgnQsh7xYcwrZBdGrLup5o9idZBgSph4ZAZAmwvuXsJyUqJQMmVEsFhCZBNk0VHgYjD9uEEq0P2eawZDZD';
    var config = require('../const.js');
    expect(config.FB_PAGE_TOKEN).toEqual('EAAKrN9UwgGQBACwEdfPnsJq32sbX1KVZAv2W8DLZA7BkZB8mNZATk10LlgjRPKk3LWthRXVIWFBvCjZB18hswlPsIr6e1QKJfmkgnQsh7xYcwrZBdGrLup5o9idZBgSph4ZAZAmwvuXsJyUqJQMmVEsFhCZBNk0VHgYjD9uEEq0P2eawZDZD');
  });

  it('No FB_VERIFY_TOKEN test', () => {
    var config = require('../const.js');
    expect(config.FB_VERIFY_TOKEN).toEqual('changge_isnot_god');
  });

  it('No FB_VERIFY_TOKEN test', () => {
    process.env.FB_VERIFY_TOKEN = 'changge_isnot_god';
    var config = require('../const.js');
    expect(config.FB_VERIFY_TOKEN).toEqual('changge_isnot_god');
  });
});