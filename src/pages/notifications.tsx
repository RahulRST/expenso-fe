import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../api'; // Assuming you have an API function to fetch the notifications
import axios from 'axios';

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {

    const fetchNotificationsData = async () => {
      const fetchedNotifications = await fetchNotifications();
      setNotifications(fetchedNotifications);
    };

    fetchNotificationsData();
  }, [message, date]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.valueAsDate!);
  };

  const handleNotificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const notification = await axios.post(import.meta.env.VITE_BACKEND_URL+"/track/addnotification", {
      message,
      date,
      },
      {
        headers: {
          "Authorization": "Bearer " + sessionStorage.getItem("expenso_token")
        }
      }
    )
    if(notification.data.success){
      console.log("Notification added successfully")
    }
    else{
      console.log("Error adding notification")
    }
    setMessage('');
    setDate(new Date());
  };

  return (
    <div className="flex items-center gap-x-6 justify-center h-screen bg-gray-900">
      <div className='bg-gray-800 rounded-lg shadow-lg w-96 p-6'>
        <h2 className='text-3xl font-bold mb-4 text-orange-500'>Add Notifications</h2>
        <form onSubmit={handleNotificationSubmit}>
          <div className='mb-4'>
            <label htmlFor='title' className='block mb-1 text-gray-200'>
              Message
            </label>
            <input
              type='text'
              id='message'
              value={message}
              onChange={handleMessageChange}
              className='w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white'
              placeholder='Enter message'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block mb-1 text-gray-200'>
              Date
            </label>
            <input
              type='date'
              id='date'
              value={date.toISOString().split('T')[0]}
              onChange={handleDateChange}
              className='w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Add Notification
          </button>
        </form> 
      </div>

      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Notifications and Announcements</h2>
        {notifications.length > 0 ? (
          <div className='flex flex-row flex-wrap gap-6'>
            {/* Render the notifications here */}
            {notifications.map(({ id, message, date }) => (
              <div key={id} className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-orange-500">{message}</h3>
                {/* Render additional notification information */}
                <p className="text-gray-400">{date.toString().slice(0,10)}</p>
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
