import axios from "axios";

const fetchNotifications = async () => {
    const notifications = await axios.get(import.meta.env.VITE_BACKEND_URL+"/fetch/notifications", {
        headers: {
            "Authorization": "Bearer " + sessionStorage.getItem("expenso_token")
        }
    })
    if(notifications.data.success){
        console.log("Notifications fetched successfully",notifications.data)
        return notifications.data.notifications
    }
    else{
        console.log("Error fetching notifications")
        return [];
    }
}

export { fetchNotifications };