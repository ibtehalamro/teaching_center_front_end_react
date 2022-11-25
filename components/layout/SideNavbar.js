import Link from "next/link";
import { useRouter } from 'next/router'
import React from "react";
import sideNavbar from "../../styles/layout/SideNavbar.module.scss";
export const SideNavbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname.split('/')[1];

  const navBarLinks = [
    { link: "/student", name: "Student" },
    { link: "/courses", name: "Courses" },
    { link: "/sections", name: "Section" },
    { link: "/teacher", name: "Teacher" },
    { link: "/payments", name: "Payment" }
  ];

  return (
    <nav className={[sideNavbar.sideNav ,  "sideNavbar-container"].join(" ")}>
      <div className={sideNavbar.sideNav__links}>
        {navBarLinks.map(({ link, name }) => 
          <Link key={name} href={link}>
            <a className={[sideNavbar.link, "/"+currentRoute == link ? sideNavbar.active : ''].join(" ")}>{name}</a>
          </Link>
        )}
      </div>
    </nav>
  );
};
