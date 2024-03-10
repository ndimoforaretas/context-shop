export default function Cart({ items, onUpdateItemQuantity }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div>
      {items.length === 0 && (
        <p className="text-lg pt-4 text-rose-800">No items in cart!</p>
      )}
      {items.length > 0 && (
        <ul className="list-none mt-3 flex flex-col gap-2 ">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="flex justify-between items-center bg-fuchsia-200  rounded-lg p-3">
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    className="btn btn-sm bg-fuchsia-800 text-slate-100 text-lg font-bold hover:text-slate-900 hover:bg-fuchsia-400"
                    onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="btn btn-sm text-slate-100 bg-fuchsia-800 text-lg font-bold hover:text-slate-900 hover:bg-green-400"
                    onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="mt-4 flex gap-1 justify-end items-center">
        <p>Cart Total:</p>
        <p className="font-bold text-lg underline underline-offset-4 text-fuchsia-700">
          {formattedTotalPrice}
        </p>
      </div>
    </div>
  );
}
