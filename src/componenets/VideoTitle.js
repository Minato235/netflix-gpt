const VideoTitle = ({ title, overview }) => {
    return (
        <div className="aspect-video pt-[21%] px-24 absolute text-white bg-gradient-to-r from-black to-transparent">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4 px-2 font-sans text-white">{overview}</p>
            <div>
                <button 
                    className="bg-white text-xl p-4 px-12 text-black rounded-md" 
                    aria-label="Play Video"
                > 
                    ▶️ Play
                </button>
                <button 
                    className="mx-2 bg-gray-500 text-xl p-4 px-12 text-white rounded-md" 
                    aria-label="More Information"
                >
                    More Info ✨
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
