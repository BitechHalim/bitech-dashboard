import { useEffect, useState } from "react";

const useNotificationPermission = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // Check the current permission status on mount
    if (Notification.permission === "granted") {
      setNotificationsEnabled(true);
    }
  }, []);

  const toggleNotifications = async (enabled: boolean) => {
    if (enabled) {
      const permission = await Notification.requestPermission();
      setNotificationsEnabled(permission === "granted");
    } else {
      setNotificationsEnabled(false);
    }
  };

  return { notificationsEnabled, toggleNotifications };
};

export default useNotificationPermission;
