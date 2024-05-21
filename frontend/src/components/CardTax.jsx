function CardTax({
  recipient = "N/A",
  taxedValue,
  img = "https://via.placeholder.com/40x40",
}) {
  return (
    <div className="p-4 bg-zinc-800 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="grid gap-2">
          <p className="text-body font-semibold text-white uppercase">
            {recipient}
          </p>
          {taxedValue && (
            <p className="text-small text-white font-regular">
              - ₱ <span>{taxedValue}</span>
            </p>
          )}
        </div>
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={img}
          alt="Government Logo"
        />
      </div>
    </div>
  );
}

export default CardTax;
