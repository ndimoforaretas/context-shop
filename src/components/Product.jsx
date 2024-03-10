const Product = ({ id, image, title, price, description, onAddToCart }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 hover:transition">
      <figure>
        <img src={image} alt={title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-fuchsia-800 text-2xl">{title}</h2>

        <p className="product-price text-rose-800 font-bold text-lg">
          ${price}
        </p>

        <p className="pb-3 text-slate-400">{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => onAddToCart(id)}
            className="btn bg-fuchsia-800 text-slate-200 hover:text-slate-900 hover:bg-green-400">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
