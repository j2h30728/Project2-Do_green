import React from 'react';
import MyPageTab from './MyPageTab';
import ChallengeInfo from './ChallengeInfo';

const MyChallenge = () => {
  return (
    <div>
      <div className="w-full min-h-screen">
        <div className="container flex min-h-screen mx-auto px-5 ">
          <div className="MyPage_Tab_Wrapper w-1/4 bg-gray-200">
            <MyPageTab />
          </div>
          <div className="MyPage_Content_Wrapper w-3/4 bg-slate-100">
            <ChallengeInfo />
            <ChallengeInfo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyChallenge;