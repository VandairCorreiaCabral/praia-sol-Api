//describe descreve o bloco de teste mais externo todos testes estarao dentro do describe

describe('Beach forecast functional tests', () => {
  //jest.setTimeout(10000);
  beforeAll((done /* call it or remove it*/) => {
    done(); // calling itdone(); // calling it
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should return a forecast with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/forecast');
    expect(status).toBe(200);
    // Make sure we use toEqual to check value not the object and array itself
    expect(body).toEqual([
      {
        time: '2020-04-26T00:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 64.26,
            swellHeight: 0.15,
            swellPeriod: 3.89,
            time: '2020-04-26T00:00:00+00:00',
            waveDirection: 231.38,
            waveHeight: 0.47,
            windDirection: 299.45,
          },
        ],
      },
      {
        time: '2020-04-26T01:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 123.41,
            swellHeight: 0.21,
            swellPeriod: 3.67,
            time: '2020-04-26T01:00:00+00:00',
            waveDirection: 232.12,
            waveHeight: 0.46,
            windDirection: 310.48,
          },
        ],
      },
    ]);
  });
});
