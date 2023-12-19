const DownloadedContent = ({ image, video, type }) => {

    // Download Handlers

    // For Video
    function handleDownloadVideo() {
        const videoURL = video.secure_url;
        const fileName = 'video.mp4';

        fetch(videoURL)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Error downloading video:', error);
            });
    }

    // For Photo
    function handleDownloadPhoto() {
        const imageURL = image.secure_url;
        const fileName = 'photo.jpg';

        fetch(imageURL)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Error downloading video:', error);
            });
    }

    // Check which handler to call
    const handleDownload = () => {
        if (type == 'photo') {
            handleDownloadPhoto();
        } else {
            handleDownloadVideo();
        }
    };

    return (
        // Download Card
        <div className="bg-white border rounded-md max-w-[400px] overflow-hidden">
            {/* Top Area */}
            <div className="flex gap-2 items-center p-2">
                <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
                    <img src="https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xOS8yODE0NDA1NzhfMTA4ODI2NTgzODcwMjY3NV82MjMzODU2MzM3OTA1ODI5NzE0X24uanBnP3N0cD1kc3QtanBnX3MxNTB4MTUwJl9uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MSZfbmNfb2hjPVlzUjFpbnc4VHNJQVgtRGg0OHQmZWRtPUFQczE3Q1VCQUFBQSZjY2I9Ny01Jm9oPTAwX0FmQlJEWDRibGtOdzVIbDNNbUMtSFJsSDJfb3FuUkQ0bXZSV3B4ODA3aldwSmcmb2U9NjU4NEI5MTgmX25jX3NpZD0xMGQxM2IiLCJmaWxlbmFtZSI6IlNuYXBpbnN0YS5hcHBfMjgxNDQwNTc4XzEwODgyNjU4Mzg3MDI2NzVfNjIzMzg1NjMzNzkwNTgyOTcxNF9uLmpwZyJ9.jPkPf4lE_xBLgIaAo1jsqqkpzamqMw3XFUob3QW9huA" alt="Instagram Logo" />
                </div>
                <p className="font-medium ">Instagram</p>
            </div>

            {/* Image and Download Button */}
            <div className="w-[400px] h-[400px] relative">
                <img className="w-full h-full object-cover" src={image.secure_url} alt="" />
                <div className="px-4 absolute bottom-2 w-full">
                    <button
                        type="button"
                        id="downlod-btn"
                        className="flex justify-center items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
                        onClick={handleDownload}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="#fff"
                                d="M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zM128 56v136H40.3c-17.8 0-26.7 21.5-14.1 34.1l152.2 152.2c7.5 7.5 19.8 7.5 27.3 0l152.2-152.2c12.6-12.6 3.7-34.1-14.1-34.1H256V56c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24z"
                            />
                        </svg>
                        <span className="ml-3">Download Now</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DownloadedContent;