import { createContext, useContext, useEffect, useState } from 'react';
import { usePagamentoContext } from './Pagamento';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos, valorTotal, setValorTotal}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos, valorTotal, setValorTotal} = useContext(CarrinhoContext);
    const{formaPagamento} = usePagamentoContext();

    function mudarQuantidade(id, quantidade){
      return carrinho.map(itemCarrinho => {
        if(itemCarrinho.id === id) itemCarrinho.quantidade += quantidade;
          return itemCarrinho;
      })
    };

    function adicionarProduto(novoProduto) {
        const temOProduto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id);
        if(!temOProduto){
          novoProduto.quantidade = 1;
          return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
        }
        setCarrinho(mudarQuantidade(novoProduto.id, 1))
      }

    function removerProduto(id){
      const produto = carrinho.find(itemCarrinho => itemCarrinho.id === id);
      const ehOUltimo = produto.quantidade ===1;
      if(ehOUltimo){
        return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemCarrinho => itemCarrinho.id !== id));
      }
      setCarrinho(mudarQuantidade(id, -1))
    }

    useEffect(() => {
      const {novaQuantidade, novoTotal} = carrinho.reduce((contador, produto) => ({novaQuantidade: contador.novaQuantidade + produto.quantidade, novoTotal: contador.novoTotal + (produto.valor * produto.quantidade)}), {novaQuantidade:0, novoTotal:0});
      setQuantidadeProdutos(novaQuantidade);
      setValorTotal(novoTotal * formaPagamento.juros);

    }, [carrinho, setQuantidadeProdutos, setValorTotal, formaPagamento]);

    return{
        carrinho,
        setCarrinho, 
        adicionarProduto,
        removerProduto,
        quantidadeProdutos, 
        valorTotal
        
    }
}