import { getUser } from "@/api";
import { Button, Text, View } from "react-native";

export default function Test() {
    const seeUser = async () => {
        // Fetch user data
        const data = await getUser("mikey");

        // Log the user data
        console.log(data);
    }
    return (
        // Basic view with text
        <View>
            <Text>Test</Text>
            <Button title="Log user mikey" onPress={seeUser} />
        </View>
    )
}
