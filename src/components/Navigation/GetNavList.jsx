// import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];


  NavList.push({ divider: true });

  NavList.push({
    primaryText: "Games",
    // LeftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/games/"
  },
  {
    primaryText: "Audio",
    // LeftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/audio/"
  },
  {
    primaryText: "About",
    // LeftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        // LeftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }



  return NavList;
}
export default GetNavList;
