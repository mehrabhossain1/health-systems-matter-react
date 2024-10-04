import activityImage1 from "../../assets/hero1.webp";
import activityImage2 from "../../assets/hero2.webp";
import activityImage3 from "../../assets/hero3.webp";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ActivitiesAndApproach = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="p-6 py-20 bg-gray-100 md:p-10 dark:bg-gray-900"
    >
      <div className="max-w-screen-xl w-full px-[20px] mx-auto py-20">
        <h2 className="mb-20 text-5xl font-light text-center text-gray-800 underline decoration-[#01748D] dark:text-gray-300">
          Activities and Approach
        </h2>

        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side Images */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <img
              src={activityImage1}
              alt="Activity 1"
              className="object-cover w-full h-48 rounded-lg shadow-lg"
            />
            <img
              src={activityImage2}
              alt="Activity 2"
              className="object-cover w-full h-48 rounded-lg shadow-lg"
            />
            <img
              src={activityImage3}
              alt="Activity 3"
              className="object-cover w-full h-48 rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="space-y-4 text-gray-700 dark:text-gray-300"
          >
            <p>
              In order to be aligned with the vision and mission of Health
              Systems Matter, the specific activities are as follows:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Showcasing health system and global health documents daily.
              </li>
              <li>
                Generating and regenerating demand for impactful documents.
              </li>
              <li>Disseminating major public health events and milestones.</li>
              <li>
                Promoting pages and events focused on health systems and global
                health.
              </li>
              <li>
                Introducing individuals in the health system field dedicated to
                enhancing global health.
              </li>
              <li>
                Highlighting organizations working on public health agendas.
              </li>
            </ul>
            <p>
              To carry out these activities, the site systematically documents
              and showcases resources, creatively posts on social media, and
              ensures proper credit to organizations. The focus is on topics
              rather than organizations, promoting news without bias or
              political agenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesAndApproach;
