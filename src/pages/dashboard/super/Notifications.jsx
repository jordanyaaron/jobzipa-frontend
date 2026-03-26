export default function NotificationSuper() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-lg hover:bg-gray-200"
      >
        <BellIcon className="h-6 w-6 text-gray-700" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <h3 className="px-4 py-2 font-semibold border-b border-gray-200">
            Notifications
          </h3>
          <ul>
            {notifications.length === 0 ? (
              <li className="px-4 py-3 text-sm text-gray-500">No notifications</li>
            ) : (
              notifications.map((n) => (
                <li
                  key={n.id}
                  className={`px-4 py-3 text-sm border-b border-gray-200 hover:bg-gray-100 cursor-pointer ${
                    !n.read ? "font-semibold bg-gray-50" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{n.message}</span>
                    <span className="text-xs text-gray-400">{n.date}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
          <button
            className="w-full px-4 py-2 text-center text-sm text-blue-600 hover:bg-gray-100"
            onClick={() => alert("Mark all as read")}
          >
            Mark all as read
          </button>
        </div>
      )}
    </div>
  );
}