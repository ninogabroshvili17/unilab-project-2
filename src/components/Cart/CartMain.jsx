import { useCart } from "../../context/CartContext";
import Minus from "../../assets/icons/Minus.svg";
import Plus from "../../assets/icons/Plus.svg";
import trash from "../../assets/icons/trash.svg";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="font-Lato px-5 mb-10">
      <div className="max-w-[1440px] mx-auto ">
        {/* TOP NAV */}
        <div className="flex gap-16 justify-center text-sm font-bold text-[#9D9D9D] border-b border-[#D9D9D9] uppercase pt-10">
          <span className="text-[#262626] pb-4 cursor-pointer">
            Card({cart.length})
          </span>
          <span className="cursor-pointer">Customer info</span>
          <span className="cursor-pointer">Shipping & Payment</span>
          <span className="cursor-pointer">Product Confirmation</span>
        </div>

        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-[1fr_309px] gap-10 py-10">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-[20px] font-bold mb-8 text-[#262626]">
              Card {cart.length}
            </h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_80px_110px_80px_30px] items-center border-b py-6 gap-6"
              >
                {/* IMAGE + INFO */}
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[58px] h-[70px] rounded object-cover"
                  />

                  <div>
                    <p className="text-[16px] font-bold mb-1">{item.title}</p>
                    <p className="text-sm text-[#555] flex items-center gap-1">
                      <span className="font-semibold">Color:</span>
                      <span
                        className="w-3 h-3 inline-block rounded-full"
                        style={{ background: item.color || "#000" }}
                      ></span>
                    </p>
                  </div>
                </div>

                {/* PRICE */}
                <p className="font-medium text-[16px] text-right">
                  ${item.price}
                </p>

                {/* QUANTITY */}
                <div className="flex items-center border rounded px-3 py-2 gap-4 justify-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <img src={Minus} className="w-4" />
                  </button>

                  <span className="text-[16px] font-medium">
                    {item.quantity}
                  </span>

                  <button
                    className="cursor-pointer"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <img src={Plus} className="w-4" />
                  </button>
                </div>

                {/* ITEM TOTAL */}
                <p className="font-medium text-[16px] text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* TRASH */}
                <img
                  src={trash}
                  className="w-5 cursor-pointer mx-auto"
                  alt="delete"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-[#F5F5F5] p-6 rounded-lg h-fit">
            <h3 className="text-[20px] font-bold mb-5">Order Summary</h3>

            <div className="flex justify-between mb-3 text-sm">
              <p className="text-[#555]">Price</p>
              <p className="font-medium">${total}</p>
            </div>

            <div className="flex justify-between mb-3 text-sm">
              <p className="text-[#555]">Shipping</p>
              <p className="font-medium">$0</p>
            </div>

            <div className="flex justify-between mb-3 text-sm">
              <p className="text-[#555]">Tax</p>
              <p className="font-medium">$0</p>
            </div>

            <div className="flex justify-between mb-3 text-sm">
              <p className="text-[#555]">Discount price</p>
              <p className="font-medium">$47.10</p>
            </div>

            {/* GIFT BOX */}
            <div className="flex items-center mb-5 gap-2">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <label className="text-sm font-medium">Pack in a Gift Box</label>
              <span className="ml-auto font-medium">$10.90</span>
            </div>

            <div className="flex justify-between mb-6 text-[18px] font-bold">
              <p>Total Price</p>
              <p>${(parseFloat(total) + 10.9).toFixed(2)}</p>
            </div>

            <button className="w-full bg-[#D9D9D9] text-[#555] font-medium py-3 rounded-md cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* APPLY CODE */}
      <div className="max-w-[1440px] mx-auto mt-5 flex items-center gap-4 justify-end pr-10">
        <input
          type="text"
          className="border rounded w-[220px] h-[45px] px-3"
          placeholder="Enter code"
        />
        <button className="bg-[#4172DC] text-white px-6 h-[45px] rounded-md">
          Apply code
        </button>
      </div>
    </div>
  );
};

export default CartPage;
