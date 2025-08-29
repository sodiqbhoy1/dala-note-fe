const ActivityCard = ({ title, time }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow border bg-yellow-100 ">
      <p className="font-medium">{title}</p>
      <span className="text-xs text-gray-600">{time}</span>
    </div>
  );
};

export default ActivityCard;
