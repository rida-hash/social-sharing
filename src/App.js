import React from "react";
import {FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinIcon, LinkedinShareButton} from "react-share";

function App() {

  const mainStyling={
    display: "flex",
    alignItems: "center",
    justifyContent:"center"
  }
  return (
    <div style={ mainStyling }>
    <FacebookShareButton
      url={"http://www.camperstribe.com"}
      quote={"CampersTribe - World is yours to explore"}
      hashtag="#camperstribe">
      <FacebookIcon logoFillColor="white" round={true} size={36} style={{padding:"10px"}}
      />
    </FacebookShareButton>
    <WhatsappShareButton
      url={"http://www.camperstribe.com"}
      quote={"CampersTribe - World is yours to explore"}
      hashtag="#camperstribe">
      <WhatsappIcon logoFillColor="white" round={true} size={36} style={{padding:"10px"}} />
    </WhatsappShareButton>
    <LinkedinShareButton
      url={"http://www.camperstribe.com"}
      quote={"CampersTribe - World is yours to explore"}
      hashtag="#camperstribe">
      <LinkedinIcon logoFillColor="white" round={true} size={36} style={{padding:"10px"}} />
    </LinkedinShareButton>
    </div>
  );
}

export default App;
