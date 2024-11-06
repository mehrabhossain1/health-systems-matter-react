import App from "@/App";
import AboutHSM from "@/pages/about/AboutHSM";
import ActivitiesAndApproach from "@/pages/about/ActivitiesAndApproach";
import Testimonials from "@/pages/about/Testimonials";
import VisionMission from "@/pages/about/VisionMission";
import AboutSizear from "@/pages/aboutSizear/AboutSizear";
import AboutTheSiteOwner from "@/pages/aboutSizear/AboutTheSiteOwner";
import Career from "@/pages/aboutSizear/Career";
import ProfileSummary from "@/pages/aboutSizear/ProfileSummary";
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
import StayConnected from "@/pages/contact/StayConnected";
import Home from "@/pages/home";
import Allpreviousissues from "@/pages/newsletter/Allpreviousissues";
import NewsletterOverview from "@/pages/newsletter/NewsletterOverview";
import Subscribefornewsletter from "@/pages/newsletter/Subscribefornewsletter";
import Doyouknow from "@/pages/newsroom/Doyouknow";
import NewsroomOverview from "@/pages/newsroom/NewsroomOverview";
import UpcomingEvent from "@/pages/newsroom/UpcomingEvent";
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

      //! Newsroom
      {
        path: "/newsroom/overview",
        element: <NewsroomOverview />,
      },
      {
        path: "/newsroom/upcoming-events",
        element: <UpcomingEvent />,
      },
      {
        path: "/newsroom/do-you-know",
        element: <Doyouknow />,
      },

      // ! Newsletter
      {
        path: "/newsletter/overview",
        element: <NewsletterOverview />,
      },
      {
        path: "/newsletter/subscribe-for-newsletter",
        element: <Subscribefornewsletter />,
      },
      {
        path: "/newsletter/all-previous-issues",
        element: <Allpreviousissues />,
      },

      //! Contact
      {
        path: "/contact/stay-connected",
        element: <StayConnected />,
      },

      //! About Sizear
      {
        path: "/about-the-site-owner",
        element: <AboutTheSiteOwner />,
      },
      {
        path: "/about-sizear",
        element: <AboutSizear />,
      },
      {
        path: "/about-sizear/career-summary",
        element: <Career />,
      },
      {
        path: "/about-sizear/profile-summary",
        element: <ProfileSummary />,
      },
    ],
  },
]);

export default router;
