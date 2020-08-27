/*importar o arquivo mode -alias para a configuração do arquivo esteja disponivel*/
import './util/module-alias';
import { Server } from '@overnightjs/core'; // importando o core e os tipos do overnigth para disponibilizar o decorator disponibiliza o express overnight
import bodyParser from 'body-parser'; // importando o body-parser do overnight
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';
/* craindo o server
    quem for criar o servidor deve instanciar a classe SetupServer informar a porta,
    depois chamar o metodo init para que o servidor seja criado.
*/
export class SetupServer extends Server {
  // classe que define a criação do servidor
  constructor(private port = 3000) {
    // construtor da classe extendida herdando da classe super e criando uma propriedade nova port setando para 3000
    super();
  }
  public init(): void {
    // metodo da classe que faz chamada para inicia o servidor.
    this.superExpress(); // chama o metodo de inicialização do servidor expres
    this.setupControllers(); // chama o metodo que instancia os controles que atenderá os servicos disponibilizado pelo app servidor.ts
  }

  //metodo pra fazer setup do express
  private superExpress(): void {
    // inicia o express no servidor
    this.app.use(bodyParser.json()); // passo o metodo do body-parser importado do overnight para o metodo use da propriedade app herdada da plasse super(pai). aqui a appServer vai saber como decodificar requisicoes json.
  }

  private setupControllers(): void {
    // metodo que inicia os controles não retorna nada
    const forecastController = new ForecastController(); // instancia a classe de controlle que foi escrita no arquivo forecast.ts
    this.addControllers([forecastController]); // passa uma lista de controllers para o overnight e o obernight chama o express internamente.
  }
  public getApp(): Application {
    // metodo que retorna o app ou seja o server.ts
    return this.app;
  }
}
