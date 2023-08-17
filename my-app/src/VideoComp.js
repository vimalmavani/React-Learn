import React from "react";

class VideoComp extends React.Component{
    componentDidMount = () =>{
        console.log('test');
        const script = document.createElement("script");
        script.src = "https://players.brightcove.net/6165065566001/WkAEp4m5G_default/index.min.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render(){
        return(
            <>
                <video-js data-account="6165065566001" data-player="WkAEp4m5G" data-embed="default" controls="" data-video-id="6285539404001" data-playlist-id="" data-application-id="" className="vjs-fluid"></video-js>
                <h1>VideoComp</h1>
            </>
        )
    }
}
export default VideoComp;