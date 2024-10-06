import { useState } from "react";
import { getUser } from "../api";

function test() {
    const [dataDisplay, setDataDisplay] = useState("");

    const getUserFunc = async () => {
        try {
            const data = await getUser("mikey");
            setDataDisplay(JSON.stringify(data));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <button onClick={getUserFunc}>Get Users</button>
            <pre className="mt-4">{dataDisplay}</pre>
        </div>
    );
}

export default test;
