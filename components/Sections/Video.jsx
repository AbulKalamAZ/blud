const Video = () => {
  const vimeoUrl = "https://vimeo.com/1026516003/8d0397b442";

  return (
    <div className="overflow-hidden relative group cursor-pointer">
      <a
        href={vimeoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
      >
        <div className="w-20 h-20 bg-black bg-opacity-50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-10 h-10"
          >
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </div>
      </a>
      <div className="group-hover:opacity-75 transition-opacity duration-300">
        <iframe
          className="w-full aspect-video scale-[1.4]"
          src="https://player.vimeo.com/video/1026516003?h=8d0397b442&autoplay=1&muted=1"
          title="Vimeo video player"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
