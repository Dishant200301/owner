// src/components/OrderingSystemFeatureCard.tsx
import React from 'react';

const OrderingSystemFeatureCard: React.FC = () => {
  return (
    <div className="hp-tech_item cc-dark relative rounded-lg overflow-hidden p-8 flex flex-col justify-end bg-[#F9F7F5] aspect-square">
      <div className="hp-tech_visual cc-online-order absolute inset-0 flex items-center justify-center">
        {/* Images for online ordering visual */}
        <img
          src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ac00ceda9e2aacdd29_60fbfb1d32e666f5839f18017af20b6c_online-order_1.png"
          alt=""
          className="hp-tech_order-visual-2 absolute w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] top-[15%] left-[5%]"
        />
        <img
          src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ac0f3c32e29518e33f_6e9b0643992f8e1d70e5da807a105c95_online-order_2.png"
          alt=""
          sizes="100vw"
          srcSet="
            https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ac0f3c32e29518e33f_6e9b0643992f8e1d70e5da807a105c95_online-order_2-p-500.png 500w,
            https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ac0f3c32e29518e33f_6e9b0643992f8e1d70e5da807a105c95_online-order_2.png 634w
          "
          className="hp-tech_order-visual-1 absolute w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%]"
        />
        <img
          src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ace0c02cc025cc0ff3_5f9d5ca7e6dc349161dd244e2f18a7b3_online-order_3.png"
          alt=""
          className="hp-tech_order-visual-2 cc-bot absolute w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] bottom-[15%] right-[5%]"
        />
      </div>
      <div className="hp-tech_visual-inner relative z-10 text-center">
        <p className="text-xl md:text-2xl font-semibold leading-snug"> {/* h18 */}
          <span className="text-gray-600">Grow your sales with an </span>
          <span className="text-gray-900">online ordering system</span>
          <span className="text-gray-600"> modeled after the big brands.</span>
        </p>
      </div>
    </div>
  );
};

export default OrderingSystemFeatureCard;