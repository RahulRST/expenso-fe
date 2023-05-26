import React, { useEffect, useState } from 'react';

const Reminder: React.FC = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Fetch reminders from the backend API
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    try {
      // Make an API request to fetch reminders
      const response = await fetch('/api/reminders');
      const data = await response.json();
      setReminders(data.reminders);
    } catch (error) {
      console.error('Error fetching reminders:', error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">Payment Reminders</h1>
        {reminders.length === 0 ? (
          <p className="text-white">No reminders found.</p>
        ) : (
          <ul>
            {reminders.map((reminder: any) => (
              <li key={reminder.id} className="bg-gray-800 p-4 mb-4 rounded">
                <div className="text-white">
                  <strong>{reminder.residentName}</strong>
                </div>
                <div className="text-gray-300">Payment Due: {reminder.dueDate}</div>
                <div className="text-gray-300">Amount: {reminder.amount}</div>
                <div className="text-gray-300">Status: {reminder.status}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reminder;
