import { useEffect } from "react";
import PageTitle from "@/components/shared/PageTitle";

const AboutHSM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl p-8 mx-auto mb-12 ">
        {/* Hero Section */}
        <PageTitle children="About HSM" />

        {/* Content Section */}

        <div className="w-3/4 mx-auto space-y-6">
          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
            “Information is power” and “Evidence lies at the heart of public
            health policy.” Inspired by the principles of valuing information
            and evidence, Health Systems Matter (HSM) offers essential resources
            on health systems, public health events, and career opportunities.
          </p>
          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
            HSM serves as an independent, comprehensive global health resource,
            providing updates on public health issues and career opportunities.
            The site hunts crucial reports, current information, and impactful
            articles from global entities, ensuring proper referencing.
          </p>
          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
            By subscribing or visiting regularly, users can stay informed about
            a wide range of documents and news related to global health issues
            from various organizations and life changing career opportunities.
          </p>
        </div>

        {/* Features Section */}
        <div className="p-8 mt-12 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Why Choose Health Systems Matter?
          </h2>
          <ul className="pl-5 space-y-4 text-lg leading-relaxed list-decimal md:text-xl">
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
          <p className="mt-6 text-lg leading-relaxed md:text-xl">
            Health Systems Matter, launched on social media (LinkedIn,
            Instagram, and Facebook) on August 10, 2024. On the other hand, this
            website was launched on September 10, 2024, to systematically
            preserve all the posted resources of the initiative for its users.
          </p>
          <p className="mt-6 text-lg leading-relaxed md:text-xl">
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
