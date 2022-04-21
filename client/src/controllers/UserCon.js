const base = 'http://localhost:5000';

export const login_user = async(obj) =>{
    const res = await fetch(`${base}/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers : {
            "Content-Type": "application/json"
        },
    });
    const ans = await res.json();
    return ans;
}


export const signup_user = async(obj) => {
    const res = await fetch(`${base}/api/user/signup`,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers : {"Content-Type": "application/json"}
    });

    const ans  = await res.json();
    return ans;

}


export const auth_user = async(obj) => {
    const res = await fetch(`${base}/api/user/auth`,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {'Content-Type': 'application/json'}
    })

    const ans = await res.json();
    return ans;
}

export const create_post = async(obj) => {
    const res = await fetch(`${base}/api/user/itempost`,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {'Content-Type': 'application/json'}
    });

    const ans = await res.json();
    return ans;
}

export const get_all_items = async() =>{
    const res = await fetch(`${base}/api/user/allitems`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},

    });

    const ans = await res.json();
    return ans;
}

