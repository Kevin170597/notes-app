import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { AuthStore } from '../models';

export const PublicLayout = () => {
    const authToken = useAuthStore((state: AuthStore) => state.authToken);

    if (authToken) return <Navigate to='/' />

    return <div><Outlet /></div>;
};