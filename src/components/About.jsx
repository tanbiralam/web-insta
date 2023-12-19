import download from "../assets/download.jpg";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="">
          <h2 className="text-4xl font-semibold text-gray-800">
            About SaveInsta
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            SaveInsta is an online Instagram Downloader. Support download
            Videos, Photos, Stories, Reels and IGTV from Instagram in few simple
            steps. SaveInsta.app is a website that allows you to download high
            quality Instagram content{" "}
            <span className="font-semibold">
              download Instagram videos in mp4 format, download Reels videos,
              download IGTV videos, download Photo, Download Story.
            </span>{" "}
            Just paste the Instagram link into the input box on the SaveInsta
            website to download any Instagram content. Instagram Video
            Downloader works on web browser, supports download Instagram videos
            on all devices{" "}
            <span className="font-semibold">PC, Mac, Android, iOS</span> without
            installing supporting software.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            How to Use SaveInsta
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Using SaveInsta to download Instagram videos is straightforward:
          </p>
          <ol className="list-decimal text-gray-700 ml-6 mt-2">
            <li>
              Paste the URL of the Instagram video you want to download in the
              input field.
            </li>

            <li>Select the quality and format options if available.</li>
            <li>
              Click the 	&quot;Download&quot; button, and SaveInsta will fetch and save the
              video for you.
            </li>
          </ol>
          <div className="mt-8">
            <img
              src={download}
              alt="How to Use"
              className="mx-auto max-w-full"
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-gray-800">FAQs</h2>
          <div className="mt-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
                What is Instagram Downloader?
              </h3>
              <p className="text-gray-600 mt-2">
                Instagram Downloader is a tool that allows to download Videos,
                Photos, Story, Reels and IGTV from Instagram. Supports download
                any photos and videos from Instagram (Insta) on all devices (PC,
                Mac, Android, iPhone, iPad).
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
                How to download videos and photos on Instagram?
              </h3>
              <p className="text-gray-600 mt-2">
                Step 1: Paste the Instagram url into the input box and press the
                Download button. Step 2: Photo and Video you want to download
                will appear, click Download Photo or Download Video button
                inside under a photo or video, then the file will be saved to
                your device. (SaveInsta.app works well on all devices (PC, Mac,
                Android, iOS).)
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
              How to download Instagram videos and photos on iPhone, iPad?

              </h3>
              <p className="text-gray-600 mt-2">
              For iPhone, you need to use Safari browser on iOS 13 or get Documents by Readdle app and go to SaveInsta.app → Paste Instagram video link → Download (see instructions here).
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
              Can I download Instagram Story?

              </h3>
              <p className="text-gray-600 mt-2">
              Yes, you can download any Instagram Story. Click on the (...) icon above the Story post and continue pressing the Copy Link option → Paste the copied link into SaveInsta → Download.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
              Can I download videos and photos directly on Instagram?

              </h3>
              <p className="text-gray-600 mt-2">
              Unfortunately, Instagram does not allow you to download any content. You can go to the SaveInsta.app website and follow the instructions to download any content on IG.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
              Do I have to pay to download Instagram videos and photos?

              </h3>
              <p className="text-gray-600 mt-2">
              SaveInsta.app is a free Instagram downloader. You can download any Instagram content (Videos, Photos, Reels, Story, IGTV) without any feature limitation.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
              Where are Instagram videos and photos saved after downloading?

              </h3>
              <p className="text-gray-600 mt-2">
              Please check the 	&quot;Downloads&quot; folder in your phone or the 	&quot;download history&quot; section of your browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
