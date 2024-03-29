import React, { useState, useEffect } from 'react';
import { fetchNotifications } from '../api';
import { FiPlusSquare } from 'react-icons/fi';
import axios from 'axios';

const Notification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {

    const fetchNotificationsData = async () => {
      const fetchedNotifications = await fetchNotifications();
      setNotifications(fetchedNotifications);
    };

    fetchNotificationsData();
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="relative z-10 block rounded-md bg-gray-900 p-2 text-white hover:text-orange-500 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-gray-900">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >

      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-orange-500">Reminder Notifications</h2>
        {notifications.length > 0 ? (
          <div className='flex flex-row flex-wrap gap-6'>
            {notifications.map(({ id, message, date }) => (
              <div key={id} className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-orange-500">{message}</h3>
                <p className="text-gray-400">{date.toString().slice(0,10)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No notifications at the moment.</p>
        )}
      </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AddNotification = () => {
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [ info, setInfo ] = useState<any>();


  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.valueAsDate!);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNotificationSubmit = async (e: React.FormEvent) => {
    try
    {
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
        setInfo("Notification added successfully")
      }
      else{
        setInfo("Error adding notification")
      }
    }
    catch(err: any)
    {
      console.log(err)
      setInfo(err.response.data.message)
    }
    finally
    {
      setMessage('');
      setDate(new Date());
    }
  };
  return(
    <div className="relative">
    <button
      onClick={handleToggle}
      className="relative z-10 block rounded-md bg-gray-900 p-2 text-white hover:text-orange-500 focus:outline-none"
    >
        <FiPlusSquare />
    </button>
    {isOpen && (
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-900">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-orange-500">Add Reminder</h2>
          <div className='bg-gray-800 rounded-lg shadow-lg w-96 p-6'>
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
        <div className='mb-4'>
            <p className='text-red-500'>{info}</p>
        </div>
        <button
            type='submit'
            className='w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
            Add Notification
        </button>
        </form> 
        </div>
        </div>
        </div>
    </div>)}
  </div>
  )
}

export { Notification, AddNotification };
