import bg from "../../assets/youtube/bg.jpeg";

const YoutubeSection = () => {
  return (
    <section className="py-12 bg-[#0A2240]">
      <div className="flex flex-col items-center max-w-screen-xl py-20 mx-auto lg:flex-row">
        <div className="mb-8 lg:w-1/2 lg:mb-0 lg:pr-8">
          <div className="flex flex-row items-center gap-10 py-10 pb-20">
            <h2
              className="pl-10 text-6xl font-semibold text-white pe-10"
              style={{ fontFamily: "DynaPuff" }}
            >
              Youtube
            </h2>
            <div className="flex-1 ml-4 border-t border-white"></div>
          </div>
          <p className="text-lg text-slate-300">
            Health Systems Matter plans to launch a YouTube channel dedicated to
            exploring global health system issues and documenting expert
            knowledge through interviews. This initiative is currently in the
            planning phase and is scheduled for implementation next year. To
            stay informed about the channel's launch, please remain engaged with
            the site. Subscribe to our newsletter and follow our social media
            pages to receive updates.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={bg}
            alt="YouTube Channel"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
