const nextMonday = () => {
  var date = new Date();
  date.setDate(date.getDate() + ((1 + 7 - date.getDay()) % 7 || 7));
  return date.toLocaleDateString();
};

export default nextMonday;
