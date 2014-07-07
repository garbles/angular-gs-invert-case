describe('angular-gs-invert-case', function () {
  beforeEach(module('gs.invert-case'));

  var invertCase;

  beforeEach(inject(function (_invertCase_) {
    invertCase = _invertCase_;
  }));

  it('inverts camelCase to snakeCase', function () {
    var obj = { aeeBeeCee: 'gabe', deeEeeEff: 'chelsea', gee: 'doge' };

    expect(invertCase(obj, 'snake')).toEqual({ aee_bee_cee: 'gabe', dee_eee_eff: 'chelsea', gee: 'doge' });
  });

  it('inverts snakeCase to camelCase', function () {
    var obj = { run_dog_run: 'go', bigHat: 'bye' };

    expect(invertCase(obj, 'camel')).toEqual({ runDogRun: 'go', bigHat: 'bye' });
  });
});
