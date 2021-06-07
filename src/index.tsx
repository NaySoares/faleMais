import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App }  from './App';

createServer({
  models: {
    plan: Model,
  },

  seeds(server) {
    server.db.loadData({
      plans: [
        {
          id: 1,
          origem: '011',
          destino: '017',
          tempo: 30,
          plano: 30,
          comPlano: 0,
          semPlano: 51
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/plans', () => {
      return this.schema.all('plan')
    })

    this.post('/plans', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('plan', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);