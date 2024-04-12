import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import '../cam.css'
const Room = () => {
  const myMeetingRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      const roomID = new URLSearchParams(window.location.search).get('roomID') || randomID(5);
      const userID = randomID(5);
      const userName = "priyanshu";

      const { token } = await generateToken(
        'https://nextjs-token.vercel.app/api',
        userID
      );

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
        1484647939,
        token,
        roomID,
        userID,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.origin}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    if (myMeetingRef.current) {
      myMeeting(myMeetingRef.current);
    }
  }, []);

  const randomID = (len) => {
    let result = '';
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  };

  const generateToken = async (tokenServerUrl, userID) => {
    return fetch(
      `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200`,
      {
        method: 'GET',
      }
    ).then((res) => res.json());
  };

  return (
    <div
      className="myCall"
      ref={myMeetingRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
};

export default Room;
