import { SinaisVitais } from '../types/paciente';

export const calcularNEWS = (sinais: SinaisVitais): number => {
  let pontuacao = 0;

  // Frequência Respiratória
  if (sinais.frequenciaRespiratoria <= 8) pontuacao += 3;
  else if (sinais.frequenciaRespiratoria >= 25) pontuacao += 3;
  else if (sinais.frequenciaRespiratoria >= 21) pontuacao += 2;
  else if (sinais.frequenciaRespiratoria <= 11) pontuacao += 1;

  // Saturação de Oxigênio
  if (sinais.saturacaoOxigenio <= 91) pontuacao += 3;
  else if (sinais.saturacaoOxigenio <= 93) pontuacao += 2;
  else if (sinais.saturacaoOxigenio <= 95) pontuacao += 1;

  // Temperatura
  if (sinais.temperatura <= 35.0) pontuacao += 3;
  else if (sinais.temperatura >= 39.1) pontuacao += 2;
  else if (sinais.temperatura >= 38.1 || sinais.temperatura <= 36.0) pontuacao += 1;

  // Pressão Arterial Sistólica
  if (sinais.pressaoArterialSistolica <= 90) pontuacao += 3;
  else if (sinais.pressaoArterialSistolica <= 100) pontuacao += 2;
  else if (sinais.pressaoArterialSistolica <= 110) pontuacao += 1;
  else if (sinais.pressaoArterialSistolica >= 220) pontuacao += 3;

  // Frequência Cardíaca
  if (sinais.frequenciaCardiaca <= 40) pontuacao += 3;
  else if (sinais.frequenciaCardiaca >= 131) pontuacao += 3;
  else if (sinais.frequenciaCardiaca >= 111) pontuacao += 2;
  else if (sinais.frequenciaCardiaca <= 50 || sinais.frequenciaCardiaca >= 91) pontuacao += 1;

  // Nível de Consciência
  if (sinais.nivelConsciencia !== 'Alerta') pontuacao += 3;

  return pontuacao;
};

export const obterClassificacaoNEWS = (pontuacao: number): {
  nivel: string;
  cor: string;
  frequenciaMonitoramento: string;
} => {
  if (pontuacao >= 7) {
    return {
      nivel: 'Crítico',
      cor: 'text-red-600',
      frequenciaMonitoramento: 'Monitoramento contínuo',
    };
  } else if (pontuacao >= 5) {
    return {
      nivel: 'Urgente',
      cor: 'text-orange-600',
      frequenciaMonitoramento: 'Mínimo a cada hora',
    };
  } else if (pontuacao >= 3) {
    return {
      nivel: 'Atenção',
      cor: 'text-yellow-600',
      frequenciaMonitoramento: 'Mínimo a cada 4-6 horas',
    };
  }
  return {
    nivel: 'Estável',
    cor: 'text-green-600',
    frequenciaMonitoramento: 'Mínimo a cada 12 horas',
  };
};