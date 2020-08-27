/* esse arquivo é responsavel por inicializar o servidor para todos os testes funcionais*/
import { SetupServer } from '@src/server'; // importa a classe SetupServer que esta no arquivo Server.ts
import supertest from 'supertest';

beforeAll((done) => {
  // essa funcao vai rodar anted de todos os testes da aplicação. será responsavel por inicalizar o server de teste ou seja a aplicação em modo de teste.
  const server = new SetupServer(); // instanciando a classe que inicializa o server
  server.init(); // chama a função que inicializa as chamadas dos metodos do servidor
  // setando globalmente o teste no jest.
  global.testRequest = supertest(server.getApp);
  done();
});
