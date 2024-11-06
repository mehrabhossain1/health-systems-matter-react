import PageTitle from "@/components/shared/PageTitle";
import contentImage from "../../assets/ownerImg.webp";

const AboutSizear = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* About Section */}
        <div className="flex gap-4 bg-white flex-colp-8 md:flex-row">
          {/* Text Section */}
          <div className="w-full text-center md:w-2/3 md:text-left">
            <PageTitle children="About Sizear" />
            <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
              I am Monaemul Islam Sizear, known as Sizear. I am a dedicated
              public health professional, driven by both profession and passion.
              To support this commitment, I have initiated the "Health Systems
              Matter" page, utilizing a website and social media platforms to
              promote and disseminate public health issues. Additionally, I
              contribute public health columns to national newspapers and
              various blogs and have published work in peer-reviewed journals.
              <p className="mt-4">
                My academic background spans diverse disciplines, combining
                Anthropology, Public Health, and Urban Development Policy, with
                studies completed in both Bangladesh and the Netherlands.{" "}
              </p>
              <p className="mt-4">
                Beyond my professional pursuits, I enjoy writing non-fiction
                articles and have published a book. I love traveling, especially
                with my wife and two daughters. I am also an avid reader and
                street photographer. As a coffee enthusiast, I start my day with
                a cup of black coffee.
              </p>
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full mt-8 md:w-1/3 md:mt-0">
            <img
              src={contentImage}
              alt="Sizear's photo"
              className="object-cover w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSizear;
