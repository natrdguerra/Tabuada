import express from 'express'; // Importa o Express

const app = express(); // Inicializa o app Express
const PORT = process.env.PORT || 3000; // Define a porta do servidor

// Rota principal que responde às requisições GET
app.get('/', (req, res) => {
  const numero = 3; // Tabuada do número 3
  const sequencia = parseInt(req.query.sequencia) || 10; // Padrão de 10 multiplicações

  // Construindo o HTML da tabuada
  let resultado = `<h1>Tabuada do ${numero}</h1><ul>`;
  for (let i = 0; i <= sequencia; i++) {
    resultado += `<li>${numero} x ${i} = ${numero * i}</li>`;
  }
  resultado += '</ul>';

  // Enviando a resposta HTML para o navegador
  res.send(resultado);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

