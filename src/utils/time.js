export const formatNotificationTime = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
  
    const diffMs = now - date;
  
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
  
    // Now
    if (seconds < 60) return "Now";
  
    // Minutes
    if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""}`;
  
    // Hours
    if (hours < 24) return `${hours} hr${hours > 1 ? "s" : ""}`;
  
    // Days
    if (days < 7) return `${days} day${days > 1 ? "s" : ""}`;
  
    // Weeks
    if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""}`;
  
    // Full date
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };