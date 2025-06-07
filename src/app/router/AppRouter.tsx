import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';

export const AppRouter = () => (
    <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
    </Routes>
);