 // choose icons you need

const ActionCard = ({ title, subtitle, Icon }) => {
  return (
    <div className="bg-yellow-100 rounded-xl p-6 shadow hover:shadow-md cursor-pointer transition flex flex-col">
      {/* Icon on its own line, top-left */}
      {Icon && <Icon className="w-6 h-6 text-blue-600 mb-3" />}

      {/* Title + Subtitle */}
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};

export default ActionCard;
