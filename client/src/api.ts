const API_ENDPOINT = "https://hacksmu.mikz.dev";
// const API_ENDPOINT = "http://localhost:8000";

export async function newUser(username: string, name: string) {
    const res = await fetch(`${API_ENDPOINT}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: username,
            name,
        }),
    });

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to create user");
    }

    return res.json();
}

export async function getUser(username: string) {
    const res = await fetch(`${API_ENDPOINT}/user/${username}`);

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to get user");
    }

    return res.json();
}

export async function addDaily(username: string) {
    const res = await fetch(`${API_ENDPOINT}/user/${username}/daily`, {
        method: "POST",
        body: JSON.stringify({
            id: username,
        }),
    });

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to add daily task");
    }

    return res.json();
}

export async function addSteps(username: string, steps: number) {
    const res = await fetch(`${API_ENDPOINT}/user/${username}/steps`, {
        method: "POST",
        body: JSON.stringify({
            id: username,
            steps,
        }),
    });

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to add steps");
    }

    return res.json();
}

export async function sendFriendRequest(username: string, friend: string) {
    const res = await fetch(`${API_ENDPOINT}/friends/request`, {
        method: "POST",
        body: JSON.stringify({
            id: username,
            friend_id: friend,
        }),
    });

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to send friend request");
    }

    return res.json();
}

export async function acceptFriendRequest(username: string, friend: string) {
    const res = await fetch(`${API_ENDPOINT}/friends/accept`, {
        method: "POST",
        body: JSON.stringify({
            id: username,
            friend_id: friend,
        }),
    });

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to accept friend request");
    }

    return res.json();
}

export async function setToken(username: string, token: string) {
    const res = await fetch(`${API_ENDPOINT}/token`, {
        method: "POST",
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            id: username,
            token,
        }),
    });

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to set token");
    }

    return res.json();
}

export async function pokeFriend(username: string, friend: string) {
    const res = await fetch(`${API_ENDPOINT}/poke`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: username,
            friend_id: friend,
        }),
    });

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to poke friend");
    }

    return res.json();
}

export async function getPokes(username: string) {
    const res = await fetch(`${API_ENDPOINT}/poke/check`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: username,
        }),
    });

    if (!res.ok) {
        console.error(await res.json());
        throw new Error("Failed to get pokes");
    }

    return res.json();
}
