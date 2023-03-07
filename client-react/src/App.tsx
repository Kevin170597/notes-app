import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { NotesList, Login, Register, ReadUpdateNote, CreateNote } from "./pages";
import { PublicLayout } from './router/PublicLayout';
import { PrivateLayout } from './router/PrivateLayout';
import { useAuthStore } from './store/useAuthStore';

export const App = () => {
  const getAuth = useAuthStore((state: any) => state.getAuth);

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path='/' element={<NotesList />} />
        <Route path='/note/:id' element={<ReadUpdateNote />} />
        <Route path='/new' element={<CreateNote />} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  );
}