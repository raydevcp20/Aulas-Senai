export interface Produto{
  nome: string;
  valor: number;
  codigo: number;
  quantidade: number;
  emEstoque: boolean;

  comprar?(codigo: Produto, quantidade: number);
}