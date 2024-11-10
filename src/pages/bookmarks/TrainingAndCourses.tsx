import PageTitle from "@/components/shared/PageTitle";

const TrainingAndCourses = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Training and Courses" />
          <p className="w-3/4 mx-auto text-lg leading-relaxed text-gray-700">
            This list of online training and courses in global health and health
            systems can help you choose and enroll in programs to enhance your
            skills and expand your professional network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingAndCourses;
