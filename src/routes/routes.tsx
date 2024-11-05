import App from "@/App";
import AboutHSM from "@/pages/about/AboutHSM";
import ActivitiesAndApproach from "@/pages/about/ActivitiesAndApproach";
import Testimonials from "@/pages/about/Testimonials";
import VisionMission from "@/pages/about/VisionMission";
import BookmarksNewsletter from "@/pages/bookmarks/BookmarksNewsletter";
import BookmarksOverview from "@/pages/bookmarks/BookmarksOverview";
import BookmarksYouTube from "@/pages/bookmarks/BookmarksYouTube";
import CareerScope from "@/pages/bookmarks/CareerScope";
import DataandFacts from "@/pages/bookmarks/DataandFacts";
import Journals from "@/pages/bookmarks/Journals";
import Podcast from "@/pages/bookmarks/Podcast";
import PublicHealthOrganizations from "@/pages/bookmarks/PublicHealthOrganizations";
import Scholarship from "@/pages/bookmarks/Scholarship";
import TrainingAndCourses from "@/pages/bookmarks/TrainingAndCourses";
import UsefulSites from "@/pages/bookmarks/UsefulSites";
import Home from "@/pages/home";
import Articles from "@/pages/resources/Articles";
import Books from "@/pages/resources/Books";
import CommentariesBlogs from "@/pages/resources/CommentariesBlogs";
import EssentialReadingList from "@/pages/resources/EssentialReadingList";
import InterviewInsights from "@/pages/resources/InterviewInsights";
import Overview from "@/pages/resources/Overview";
import PolicyPrimerPresentation from "@/pages/resources/PolicyPrimerPresentation";
import MajorReports from "@/pages/resources/reports/MajorReports";
import Reports from "@/pages/resources/reports/Reports";
import TopicWiseReports from "@/pages/resources/reports/TopicWiseReports";
import ToolsResources from "@/pages/resources/ToolsResources";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      //! about routes
      {
        path: "/about/about-hsm",
        element: <AboutHSM />,
      },
      {
        path: "/about/vision-mission",
        element: <VisionMission />,
      },
      {
        path: "/about/activities-approach",
        element: <ActivitiesAndApproach />,
      },
      {
        path: "/about/testimonials",
        element: <Testimonials />,
      },

      //! resources routes
      {
        path: "/resources/overview",
        element: <Overview />,
      },
      {
        path: "/resources/essential-reading-list",
        element: <EssentialReadingList />,
      },

      // Reports
      {
        path: "/resources/reports",
        element: <Reports />,
      },
      {
        path: "/resources/reports/topic-wise-reports",
        element: <TopicWiseReports />,
      },
      {
        path: "/resources/reports/major-reports",
        element: <MajorReports />,
      },
      // Reports
      {
        path: "/resources/articles",
        element: <Articles />,
      },
      {
        path: "/resources/policy-primer-and-presentation",
        element: <PolicyPrimerPresentation />,
      },
      {
        path: "/resources/books",
        element: <Books />,
      },
      {
        path: "/resources/interviews-insights",
        element: <InterviewInsights />,
      },
      {
        path: "/resources/commentaries-blogs",
        element: <CommentariesBlogs />,
      },
      {
        path: "/resources/tools-and-resources",
        element: <ToolsResources />,
      },

      //! Bookmarks
      {
        path: "/bookmarks/overview",
        element: <BookmarksOverview />,
      },
      {
        path: "/bookmarks/key-public-health-organizations",
        element: <PublicHealthOrganizations />,
      },
      {
        path: "/bookmarks/journals",
        element: <Journals />,
      },
      {
        path: "/bookmarks/data-and-facts",
        element: <DataandFacts />,
      },
      {
        path: "/bookmarks/training-and-courses",
        element: <TrainingAndCourses />,
      },
      {
        path: "/bookmarks/career-scope",
        element: <CareerScope />,
      },
      {
        path: "/bookmarks/scholarship",
        element: <Scholarship />,
      },
      {
        path: "/bookmarks/newsletter",
        element: <BookmarksNewsletter />,
      },
      {
        path: "/bookmarks/youtube",
        element: <BookmarksYouTube />,
      },
      {
        path: "/bookmarks/podcast",
        element: <Podcast />,
      },
      {
        path: "/bookmarks/useful-sites",
        element: <UsefulSites />,
      },
    ],
  },
]);

export default router;
