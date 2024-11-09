import PageTitle from "@/components/shared/PageTitle";

import img from "../../assets/about/vision.jfif"; // Image for the right side

const AboutHSM = () => {
  return (
    <div className="font-sans text-gray-800">
      <div className="max-w-screen-xl p-8 mx-auto mb-12 ">
        {/* Hero Section */}
        <PageTitle children="About HSM" />

        {/* Content Section */}
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0">
          {/* Text Section */}
          <div className="w-full space-y-6 md:w-2/3">
            <p className="text-lg leading-relaxed ">
              “Information is power” and “Evidence lies at the heart of public
              health policy.” Inspired by the principles of valuing information
              and evidence, Health Systems Matter (HSM) offers essential
              resources on health systems, public health events, and career
              opportunities.
            </p>
            <p className="text-lg leading-relaxed">
              HSM serves as an independent, comprehensive global health
              resource, providing updates on public health issues and career
              opportunities. The site hunts crucial reports, current
              information, and impactful articles from global entities, ensuring
              proper referencing.
            </p>
            <p className="text-lg leading-relaxed ">
              By subscribing or visiting regularly, users can stay informed
              about a wide range of documents and news related to global health
              issues from various organizations and life changing career
              opportunities.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <img
              src={img}
              alt="About HSM"
              className="object-cover w-full h-auto p-8"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="p-8 mt-12 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold ">
            Why Choose Health Systems Matter?
          </h2>
          <ul className="pl-5 space-y-4 text-lg leading-relaxed list-decimal">
            <li>
              <strong>Comprehensive Content:</strong> The site offers extensive
              coverage of impactful global health issues, incorporating
              information from various organizations and platforms, as well as
              career opportunities worldwide.
            </li>
            <li>
              <strong>Consistent Updates:</strong> HSM ensures everyday social
              media updates, adhering to a committed agenda to keep its audience
              well-informed and engaged.
            </li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed">
            Health Systems Matter, launched on social media (LinkedIn,
            Instagram, and Facebook) on August 10, 2024. On the other hand, this
            website was launched on September 10, 2024, to systematically
            preserve all the posted resources of the initiative for its users.
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            The site, passionately maintained by a health system professional
            Monaemul Islam Sizear, hopes to enlighten many and foster impactful
            careers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHSM;
