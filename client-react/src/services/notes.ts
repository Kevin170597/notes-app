

export const getNote = async (id: string) => {
    const req = await fetch(`https://notes-app-production-fa30.up.railway.app/notes/${id}`);
    const res = await req.json();
    //console.log(res);
    return res[0];
};

export const createNote = async (note: any) => {
    const req = await fetch('https://notes-app-production-fa30.up.railway.app/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note)
    });
    const res = await req.json();
    //console.log(res);
    return res;
};

export const updateNote = async (id: string, note: any) => {
    const req = await fetch(`https://notes-app-production-fa30.up.railway.app/notes/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });
    const res = await req.json();
    // console.log(res);
    return res;
};