export interface SinaisVitais {
  temperatura: number;
  frequenciaCardiaca: number;
  frequenciaRespiratoria: number;
  pressaoArterialSistolica: number;
  pressaoArterialDiastolica: number;
  saturacaoOxigenio: number;
  nivelConsciencia: 'Alerta' | 'Responde a Voz' | 'Responde a Dor' | 'Não Responde';
  glicemiaCapilar?: number;
  nivelDor?: number;
  dataHora: string;
}

export interface ResultadoExame {
  tipo: string;
  valor: number;
  unidade: string;
  valorReferencia: string;
  dataHora: string;
}

export interface Paciente {
  id: string;
  nome: string;
  idade: number;
  sexo: 'M' | 'F' | 'Outro';
  numeroRegistro: string;
  setor: string;
  numeroLeito: string;
  dataInternacao: string;
  diagnostico: string;
  alergias: string[];
  sinaisVitais: SinaisVitais[];
  exames: ResultadoExame[];
}

export interface Setor {
  id: string;
  nome: string;
  capacidade: number;
  ocupacao: number;
}

export type NivelAcesso = 'admin' | 'medico' | 'enfermeiro';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  nivelAcesso: NivelAcesso;
  setor: string;
}