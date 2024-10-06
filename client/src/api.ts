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
