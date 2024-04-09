import { FerramentasDeDetalhe } from '../../shared/components/ferramentas-de-detalhe/FerramentasDeDetalhe';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {

    return (
        <LayoutBaseDePagina
            titulo='Página inicial'
            barraDeFerramentas={(
                <FerramentasDeDetalhe
                    mostrarBotaoNovo
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoSalvarEFecharCarregando
                    mostrarBotaoVoltar={false}
                />
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};