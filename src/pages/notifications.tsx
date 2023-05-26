import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../api'; // Assuming you have an API function to fetch the notifications

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the notifications from the API
    const fetchNotificationsData = async () => {
      const fetchedNotifications = await fetchNotifications();
      setNotifications(fetchedNotifications);
    };

    fetchNotificationsData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Notifications and Announcements</h2>
        {notifications.length > 0 ? (
          <div>
            {/* Render the notifications here */}
            {notifications.map((notification) => (
              <div key={notification.id} className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-orange-500">{notification.title}</h3>
                {/* Render the notification details */}
                <p className="text-gray-300">{notification.message}</p>
                {/* Render additional notification information */}
                <p className="text-gray-400">{notification.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No notifications at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
