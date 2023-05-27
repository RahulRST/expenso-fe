const fetchNotifications = async () => {
    const notifications = await axios.get(import.meta.env.VITE_BACKEND_URL+"/track/notifications", {
    return [];
}

const fetchExpenses = async () => {
    return [];
}

const fetchUsers = async () => {
    return [];
}

const approveExpense = async (expenseID: any) => {
    return [expenseID];
}

export { fetchNotifications, fetchExpenses, fetchUsers, approveExpense };