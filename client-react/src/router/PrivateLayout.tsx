import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { AuthStore } from '../models';

export const PrivateLayout = () => {
    const authToken = useAuthStore((state: AuthStore) => state.authToken);

    if (!authToken) return <Navigate to='/login' />

    return <div><Outlet /></div>;
};