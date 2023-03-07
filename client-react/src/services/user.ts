export const register = async (name: string, password: string) => {
    try {
        const user = await fetch(`${process.env.REACT_APP_API}/users/register`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, password })
        });
        const res = await user.json();
        //console.log(res);
    } catch (error) { console.log(error); }
};