import PageTitle from "@/components/shared/PageTitle";
import { useEffect } from "react";

const ActivitiesAndApproach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white">
          <PageTitle children="Activities and Approach" />
          <h1 className="text-base leading-relaxed text-gray-700">
            In order to be aligned with the vision and mission of Health Systems
            Matter, the specific activities are as follows:
          </h1>
          <ul className="mt-4 space-y-2 text-xl text-gray-700 list-disc list-inside">
            <li>Showcasing health system and global health documents daily.</li>
            <li>Generating and regenerating demand for impactful documents.</li>
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
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            To carry out these activities, the site systematically documents and
            showcases resources, creatively posts on social media to reach
            users, and ensures proper credit to organizations. The focus is on
            topics rather than organizations, promoting news without bias or
            political agenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesAndApproach;
