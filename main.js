function atualizarDataBrasilia() {
  const agora = new Date();
  const diasSemana = [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
    'Quinta-feira', 'Sexta-feira', 'Sábado'
  ];
  const optionsData = {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  const diaSemana = diasSemana[agora.getDay()];
  const dataFormatada = agora.toLocaleDateString('pt-BR', optionsData);
  document.getElementById('data-brasilia').textContent = `${diaSemana}, ${dataFormatada}`;
}

function atualizarHorarioBrasilia() {
  const agora = new Date();
  const optionsHora = {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  document.getElementById('horario-brasilia').textContent = agora.toLocaleTimeString('pt-BR', optionsHora);
}

function buscarTemperaturaGoiania() {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=-16.6864&longitude=-49.2643&current_weather=true')
    .then(response => response.json())
    .then(data => {
      const temp = data.current_weather.temperature;
      document.getElementById('temperatura-goiania').textContent = `${temp} °C`;
    })
    .catch(() => {
      document.getElementById('temperatura-goiania').textContent = 'Não disponível';
    });
}

atualizarDataBrasilia();
setInterval(atualizarDataBrasilia, 1000);

atualizarHorarioBrasilia();
setInterval(atualizarHorarioBrasilia, 1000);

buscarTemperaturaGoiania();
setInterval(buscarTemperaturaGoiania, 600000);