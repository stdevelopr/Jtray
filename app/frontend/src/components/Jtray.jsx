import React, { useState, useEffect } from "react";
import NavSideMenu from "./NavSideMenu.jsx";
import BoardHeader from "./BoardHeader.jsx";
import HeaderPublicSelect from "./HeaderPublicSelect.jsx";
import { TrayBoard } from "./TrayBoard.jsx";

const Jtray = ({
  userInfo,
  selectedPollTitle,
  selectedPollCreatedByUserId,

  mainPoll
}) => {
  // let [pollCreatedByUserId, setPollCreatedByUserId] = useState(
  //   selectedPollCreatedByUserId
  // );

  const userPolls = userInfo.polls;

  return (
    <div>
      <HeaderPublicSelect
        userId={userInfo.id}
        userInfo={userInfo}
        mainPoll={mainPoll}
      />
      <NavSideMenu
        userPolls={userPolls}
        selectedPollId={mainPoll.id}
        pollTitle={mainPoll.title}
        annotations={mainPoll.annotations}
        userId={userInfo.id}
        jiraInfo={userInfo.jiraInfo}
      >
        {/* <h1>{pollTitle}</h1> */}
        {/* <BoardHeader pollTitle={pollTitle} /> */}
        <TrayBoard
          pollId={mainPoll.id}
          userId={userInfo.id}
          admin={mainPoll.createdByUserId == userInfo.id}
          jiraInfo={userInfo.jiraInfo}
          visibility={mainPoll.visibility}
        />
      </NavSideMenu>
    </div>
  );
};

export default Jtray;
