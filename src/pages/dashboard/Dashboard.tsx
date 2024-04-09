
import { BarraDeFerramentas } from '../../shared/components/barra-de-ferramentas/BarraDeFerramentas';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {

    return (
        <LayoutBaseDePagina
            titulo='Página inicial'
            barraDeFerramentas={(
                <BarraDeFerramentas
                    mostrarInputBusca
                    textoBotaoNovo='Nova'
                />
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};