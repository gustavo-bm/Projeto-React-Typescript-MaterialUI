import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página inicial',
            },
            {
                // opção teste
                icon: 'star',
                path: '/star',
                label: 'Estrela',
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="/star" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};
