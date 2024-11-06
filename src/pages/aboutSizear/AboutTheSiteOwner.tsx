import PageTitle from "@/components/shared/PageTitle";
import { Link } from "react-router-dom";

const AboutTheSiteOwner = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="About the Site Owner" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            The <span className="font-bold">“Health Systems Matter”</span>{" "}
            website and page in social media created and maintained by{" "}
            <span className="font-bold underline">Monaemul Islam Sizear.</span>{" "}
            He is an enthusiastic public health professional with more than 10
            years of experience with the government and development partners in
            the health system, health financing, public financial management,
            environmental health, behavior change, business model, and WASH to
            achieve SDGs and UHC. Currently, Sizear works as a Technical Advisor
            at Open Development (an international organization based in the USA)
            to contribute to a global project called “Health System for
            Tuberculosis (HS4TB),” funded by USAID. In addition, Sizear
            contributes as an Organizing Secretary in the Public Health
            Foundation of Bangladesh (A key entity that promote evidence-based
            public health knowledge at the national level). Academically
            Sizear’s knowledge generation foundation is based on diverse
            disciplines that started with Anthropology. Later, he attained a
            second master’s degree in public health from James P Grant School of
            Public Health. Lately, Sizear accomplished MSc in Urban Policy &
            Development from Erasmus University Rotterdam in the Netherlands.
            Sizear also received advanced professional training from Sweden and
            Cambodia, making him skilled and confident in ensuring optimum
            professional performance. Sizear has authored several publications
            as a lead and co-author in peer-reviewed, reputed scientific
            journals. The Health Systems Matter page indicate the passion and
            dedication of Sizear to explore the global health and knowledge
            dissemination in greater arena. Click here to know more about{" "}
            <Link to="/about-sizear" className="text-blue-500 underline ">
              Sizear.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTheSiteOwner;
