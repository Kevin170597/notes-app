import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export const PublicLayout = () => {
    const authToken = useAuthStore((state: any) => state.authToken);

    if (authToken) return <Navigate to='/' />

    return <div><Outlet /></div>;
};