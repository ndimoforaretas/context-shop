import logo from "../assets/logo.svg";
import Cart from "./Cart.jsx";

const Header = ({ cart, onUpdateCartItemQuantity }) => {
  const cartQuantity = cart.items.length;

  function handleModalOpen() {
    document.getElementById("cart-modal").showModal();
  }

  return (
    <>
      <nav className="navbar py-3 lg:px-20 mb-10 bg-fuchsia-800 sticky top-0 z-50 bg-ta">
        <header className="lg:flex-row lg:gap-8 justify-between w-full flex-col">
          <div className="flex gap-3 items-center">
            <img
              src={logo}
              alt="Elegant model"
              className="rounded-full bg-fuchsia-300"
              height={100}
              width={70}
            />
            <h1 className=" text-4xl text-slate-200 font-bold">Context Shop</h1>
          </div>
          <div className="indicator">
            <button
              onClick={handleModalOpen}
              className="btn text-lg bg-fuchsia-300  font-bold">
              Cart
              {cartQuantity > 0 && (
                <span class="indicator-item badge badge-success text-white">
                  {cartQuantity}+
                </span>
              )}
            </button>
          </div>
        </header>
      </nav>

      {/* Modal */}

      <dialog id="cart-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-fuchsia-800 text-2xl mb-6">
            Your Cart
          </h3>
          <Cart
            items={cart.items}
            onUpdateItemQuantity={onUpdateCartItemQuantity}
          />
          <div className="modal-action">
            <form method="dialog" className="flex gap-5">
              {cartQuantity > 0 && (
                <button className="btn bg-fuchsia-800 text-slate-200 hover:text-slate-900 hover:bg-green-400">
                  Checkout
                </button>
              )}
              <button className="btn bg-rose-800 text-slate-200 hover:text-slate-900 hover:bg-fuchsia-400">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Header;
