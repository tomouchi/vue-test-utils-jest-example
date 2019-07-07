describe('window.history', function () {
  it('window.history.lengthが0であること', () => {

    // 履歴を確認
    console.log(window.history.length);

    // 履歴を追加
    window.history.pushState(null, null, null);

    // 履歴が追加されていることを確認
    console.log(window.history.length);

    // window.history を Mockする
    jest.spyOn(window, 'history', 'get').mockImplementation(() => []);

    // window.history.lengthが 0 であることを確認
    console.log(window.history.length);
    expect(window.history.length).toBe(0);

    // Mockを解除する
    jest.restoreAllMocks();

    // Mockが解除されたことを確認
    console.log(window.history.length);
  });
});
