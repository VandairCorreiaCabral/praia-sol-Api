import { Controller, Get } from '@overnightjs/core'; // importa os controlers e metodo gets do overnight/core que foi instalado via yarn
import { Request, Response } from 'express';
//criando o controller
/* decorator disponibilizado pelo overnight, informamos que a classe é um controle que tem o nome 'forecast'. automaticamente vai ter uma rota 'api/forecast' muito parecido com controles do .net core.*/
@Controller('forecast')
export class ForecastController {
  // essa classe representa o controller forecast
  @Get('') // se for feito um 'forecast/' sem nada apenas a / será chamado esse get. pois esse get não tem paramentros.
  public getForecastForLoggedUser(_: Request, res: Response): void {
    // classe a ser udasda para usuario logados. possui o req e o res como no express, mas não vamos usar o req, entao vamos omiti-lo. essa função vai receber um objeto request e um objeto response e vai retornar void. pois o retorno vai ser send res.
    res.send([
      {
        // esse retorno foi colado para testar o test pra ver se o controller esta funcionando.
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
  }
}
