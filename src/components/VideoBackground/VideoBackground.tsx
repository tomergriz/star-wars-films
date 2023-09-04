import React from "react";

const VideoBackground: React.FC = () => {
    return (
        <div className="video-background">
            <iframe
                title="background-video"
                src="https://www.youtube.com/embed/EadT6NRVbF4?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=EadT6NRVbF4"
                allowFullScreen
                allow="autoplay; muted"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
