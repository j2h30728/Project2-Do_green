import React from 'react';

const SubscribeTab = () => {
  const tabCategories = { subscribed: ['뉴스', '푸드', '라이프스타일', '후원', '토픽'] };
  const tabCards = tabCategories.subscribed.map((card, index) => (
    <li className="w-56" key={index}>
      <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden " href="#penguin">
        <div className="card_content_img h-52 bg-gray-100"></div>
        <div className="card_content_text text-xl font-bold p-10 text-center">
          <h2>{card}</h2>
        </div>
      </a>
    </li>
  ));

  return (
    <div className="MyPage_Content_Wrapper py-5 flex-1">
      <div className="grid grid-cols-1 p-4 mt-12">
        <div className="flex flex-col w-full mx-0 px-0 lg:px-10 pt-10">
          <div className="text-3xl font-bold">구독중인 토픽</div>
          <div className="card_wrapper mt-20 mb-20 mx-0 flex">
            <ul className="flex justify-start place-items-stretch ml-0 lg:ml-16 flex-wrap gap-y-14 gap-x-8">
              {tabCards}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscribeTab;
