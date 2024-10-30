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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import ownerImg from "../../../assets/ownerImg.png";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Approach and activities",
    href: "/docs/primitives/progress",
  },
  {
    title: "Testimonials",
    href: "/docs/primitives/scroll-area",
  },
];

// Bookmarks sublinks
const BookmarksSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Overview",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Key public health organizations",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Major journals",
    href: "/docs/primitives/progress",
  },
  {
    title: "Data and facts",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Training and courses",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Career scope",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Scholarship",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Newsletter",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "YouTube",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Podcast",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Useful sites",
    href: "/docs/primitives/scroll-area",
  },
];

// Newsletter sublinks
const newsletterSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Overview",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Subscribe for newsletter",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "All previous issues",
    href: "/docs/primitives/progress",
  },
];
const newsroomSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Overview",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Upcoming events",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Do you know?",
    href: "/docs/primitives/progress",
  },
];
const contactSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Stay Connected",
    href: "/docs/primitives/alert-dialog",
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

// More sublinks
const moreSubLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Family",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Me in Numbers",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "My Book",
    href: "/docs/primitives/progress",
  },
  {
    title: "Featured in media",
    href: "/docs/primitives/progress",
  },
  {
    title: "Travel history",
    href: "/docs/primitives/progress",
  },
  {
    title: "Log in",
    href: "/docs/primitives/progress",
  },
];

export default function NavLinks() {
  return (
    <div className="bg-[#01748D] sticky top-0 z-50">
      <NavigationMenu className="h-20 max-w-screen-xl mx-auto border-b">
        <NavigationMenuList>
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
          <NavigationMenuItem>
            <NavigationMenuTrigger>RESOURCES</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1280px] ">
                {components.map((component) => (
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
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                BLOG
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
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
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                YOUTUBE
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

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

          {/* About Sizear */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl font-semibold italic text-orange-400 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#01748D] hover:text-white p-2 rounded-md shadow-lg pulse-animation">
              About Sizear
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-100% lg:w-[1280px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex flex-col items-center justify-center w-full h-full p-6 no-underline rounded-md rounded-full outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                      href="/"
                    >
                      <div className="w-24 h-24 mt-4 mb-2">
                        <img src={ownerImg} className="" alt="" />
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem to="/docs" title="Profile summary">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem to="/docs/installation" title="Education">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem to="/docs/primitives/typography" title="Career">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
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
                <ListItem to="/docs/primitives/typography" title="Publications">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
                <ListItem to="/docs/primitives/typography" title="Contact me">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* More */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>MORE</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1280px] ">
                {moreSubLinks.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-wide hover:underline">
            {title}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
