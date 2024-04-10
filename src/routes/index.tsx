import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';
import {
    Dashboard
} from '../pages';
import { ListagemDePessoas } from '../pages/pessoas/ListagemDePessoas';

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página inicial',
            },
            {
                icon: 'people',
                path: '/pessoas',
                label: 'Pessoas',
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />

            <Route path="/pessoas" element={<ListagemDePessoas />} />
            {/* <Route path="/pessoas/detalhe/:id" element={<Dashboard />} /> */}

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};