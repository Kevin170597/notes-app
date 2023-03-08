const API = 'https://notes-app-production-fa30.up.railway.app';

export const login = async (email: string, password: string) => {
    const user = await fetch(`${API}/users/login`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
    const res = await user.json();
    //console.log(res);
    return res;
};

export const registerUser = async (name: string, email: string, password: string) => {
    const user = await fetch(`${API}/users/register`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
    const res = await user.json();
    //console.log(res);
    return res;
};