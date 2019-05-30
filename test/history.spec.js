describe('window.history', function () {
  it('history.length', () => {
    expect(window.history.length).toBe(1);
    window.history.pushState(null, null, 'url');
    expect(window.history.length).toBe(2);
    jest.spyOn(window, 'history', 'get').mockImplementation(() => []);
    expect(window.history.length).toBe(0);
    jest.restoreAllMocks();
    expect(window.history.length).toBe(2);
  });
});
