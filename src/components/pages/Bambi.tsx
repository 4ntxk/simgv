const Bambi = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Center the container
        width: "60vw", // Adjust size as needed
        height: "60vh", // Adjust size as needed
        overflow: "hidden", // Hide any overflow if necessary
        backgroundColor: "rgb(102, 102, 106)", // Set the background color
      }}
    >
      <video
        src="/bambi.mp4"
        autoPlay
        loop
        muted={false}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the video inside the container
          width: "100%", // Make the video fill the width
          height: "100%", // Make the video fill the height
          objectFit: "contain", // Ensure the video maintains its aspect ratio
        }}
      />
    </div>
  );
};

export default Bambi;
