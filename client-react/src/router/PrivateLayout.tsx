import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export const PrivateLayout = () => {
    const authToken = useAuthStore((state: any) => state.authToken);

    if (!authToken) return <Navigate to='/login' />

    return <div><Outlet /></div>;
};