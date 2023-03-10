import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotesList, Login, Register, ReadUpdateNote, CreateNote } from './pages';
import { PrivateLayout, PublicLayout } from './router';
import { useAuthStore } from './store/useAuthStore';
import { useLoggedUserStore } from './store/useLoggedUserStore';
import { AuthStore, LoggedUserStore } from './models';

export const App = () => {
  const getAuth = useAuthStore((state: AuthStore) => state.getAuth);
  const getLoggedUser = useLoggedUserStore((state: LoggedUserStore) => state.getLoggedUser);

  useEffect(() => {
    getAuth();
    getLoggedUser();
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