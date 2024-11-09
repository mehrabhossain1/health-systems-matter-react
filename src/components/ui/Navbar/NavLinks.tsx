import * as React from "react";
import { cn } from "@/lib/utils";
import "./NavLinks.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import ownerImg from "../../../assets/ownerImg.webp";

// Main Resources items
const resourcesSubLinks = [
  {
    title: "Overview",
    href: "/resources/overview",
  },
  {
    title: "Essential reading list",
    href: "/resources/essential-reading-list",
  },
  {
    title: "Reports",
    href: "/resources/reports",
    nestedLinks: [
      {
        title: "1. Topic Wise Reports",
        href: "/resources/reports/topic-wise-reports",
      },
      { title: "2. Major Reports", href: "/resources/reports/major-reports" },
    ],
  },
  {
    title: "Articles",
    href: "/resources/articles",
  },
  {
    title: "Policy primer and Presentations",
    href: "/resources/policy-primer-and-presentation",
  },
  {
    title: "Books",
    href: "/resources/books",
  },
  {
    title: "Interviews and insights",
    href: "/resources/interviews-insights",
  },
  {
    title: "Commentaries and blogs",
    href: "/resources/commentaries-blogs",
  },
  {
    title: "Tools and Resources",
    href: "/resources/tools-and-resources",
  },
];

// About sublinks
const aboutSubLinks: { title: string; href: string }[] = [
  {
    title: "About HSM",
    href: "/about/about-hsm",
  },
  {
    title: "Vision and mission",
    href: "/about/vision-mission",
  },
  {
    title: "Approach and activities",
    href: "/about/activities-approach",
  },
  {
    title: "Testimonials",
    href: "/about/testimonials",
  },
];

// Bookmarks sublinks
const BookmarksSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Overview",
    href: "/bookmarks/overview",
  },
  {
    title: "Key public health organizations",
    href: "/bookmarks/key-public-health-organizations",
  },
  {
    title: "Journals",
    href: "/bookmarks/journals",
  },
  {
    title: "Data and facts",
    href: "/bookmarks/data-and-facts",
  },
  {
    title: "Training and courses",
    href: "/bookmarks/training-and-courses",
  },
  {
    title: "Career scope",
    href: "/bookmarks/career-scope",
  },
  {
    title: "Scholarship",
    href: "/bookmarks/scholarship",
  },
  {
    title: "Newsletter",
    href: "/bookmarks/newsletter",
  },
  {
    title: "YouTube",
    href: "/bookmarks/youtube",
  },
  {
    title: "Podcast",
    href: "/bookmarks/podcast",
  },
  {
    title: "Useful sites",
    href: "/bookmarks/useful-sites",
  },
];

// Newsletter sublinks
const newsletterSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Overview",
    href: "/newsletter/overview",
  },
  {
    title: "Subscribe for newsletter",
    href: "/newsletter/subscribe-for-newsletter",
  },
  {
    title: "All previous issues",
    href: "/newsletter/all-previous-issues",
  },
];
const newsroomSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Overview",
    href: "/newsroom/overview",
  },
  {
    title: "Upcoming events",
    href: "/newsroom/upcoming-events",
  },
  {
    title: "Do you know?",
    href: "/newsroom/do-you-know",
  },
];
const contactSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Stay Connected",
    href: "/contact/stay-connected",
  },
  {
    title: "Subscribe",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Support",
    href: "/docs/primitives/progress",
  },
];

export default function NavLinks() {
  return (
    <div className="bg-[#01748D]">
      <NavigationMenu className="h-16 max-w-screen-xl gap-5 mx-auto border-b">
        <NavigationMenuList className="flex md:gap-20">
          <div className="flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger>ABOUT</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1280px] ">
                  {aboutSubLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Resources Section */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>RESOURCES</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1280px]">
                  {resourcesSubLinks.map((link) => (
                    <li key={link.title} className="relative group">
                      {/* Main Link */}
                      <ListItem title={link.title} to={link.href} />

                      {/* Nested Links */}
                      {link.nestedLinks && link.nestedLinks.length > 0 && (
                        <ul className="absolute top-0 z-10 hidden w-full bg-[#DBF4F5] text-gray-800 mt-1 border rounded-sm left-20 group-hover:block">
                          {link.nestedLinks.map((nestedLink) => (
                            <li key={nestedLink.title}>
                              <ListItem
                                title={nestedLink.title}
                                to={nestedLink.href}
                                className="p-3 m-1 transition-all duration-300 ease-in-out transform bg-[#DBF4F5]" // Add styles for nested items
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>BOOKMARKS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1280px] ">
                  {BookmarksSubLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>NEWSROOM</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1280px] ">
                  {newsroomSubLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                BLOG
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>NEWSLETTER</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1280px] ">
                  {newsletterSubLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                YOUTUBE
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}

            <NavigationMenuItem>
              <NavigationMenuTrigger>CONTACT</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1280px] ">
                  {contactSubLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>

          {/* About Sizear */}
          <div>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="p-2 text-xl font-semibold text-[#F18A00] hover:decoration-[#ffb452] hover:text-[#ffb452] transition duration-300 ease-in-out transform hover:scale-105 pulse-animation">
                <Link to="/about-sizear">About Sizear</Link>
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-100% lg:w-[1280px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex flex-col items-center justify-center w-full h-full p-6 no-underline rounded-md outline-none select-none from-muted/50 to-muted focus:shadow-md"
                        href="/about-sizear"
                      >
                        <div className="w-24 h-24 mt-4 mb-2">
                          <img src={ownerImg} className="rounded-full" alt="" />
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    to="/about-sizear/profile-summary"
                    title="Profile summary"
                  ></ListItem>
                  <ListItem
                    to="/about-sizear/education"
                    title="Education"
                  ></ListItem>
                  <ListItem
                    to="/about-sizear/career-summary"
                    title="Career"
                  ></ListItem>

                  <ListItem
                    to="/docs/primitives/typography"
                    title="Current Professional Affiliations"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem
                    to="/docs/primitives/typography"
                    title="Achievement and Awards"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem
                    to="/about-sizear/publications"
                    title="Publications"
                  ></ListItem>

                  <ListItem to="/docs/primitives/typography" title="Contact me">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem to="/docs/primitives/typography" title="Family">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem
                    to="/docs/primitives/typography"
                    title="Me in Numbers"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem to="/docs/primitives/typography" title="My Book">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem
                    to="/docs/primitives/typography"
                    title="Featured in media"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem
                    to="/docs/primitives/typography"
                    title="Travel history"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none decoration-[#F18A00] hover:text-[#F18A00] no-underline outline-none transition-transform transform hover:underline underline-offset-8",
            className
          )}
          {...props}
        >
          <div className="text-base font-light">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
