/**
 * External dependencies
 */
import classes from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

/**
 * Internal dependencies
 */
import styles from "./style.module.scss";

type ActiveLinkType = {
  children: JSX.Element | JSX.Element[] | string;
  href: string;
};

const ActiveLink = ({ children, href }: ActiveLinkType) => {
  const { pathname } = useRouter();
  const anchorClasses = classes({
    [styles.active]: pathname === href
  });

  return (
    <Link href={href}>
      <a className={anchorClasses}>{children}</a>
    </Link>
  );
};

export function Navigation() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const navmenu = (
    <nav className={styles.navMenu}>
      <ul>
        <li>
          <ActiveLink href={"/"}>News</ActiveLink>
        </li>
        <li>
          <ActiveLink href={"/bookmarks"}>Bookmarks</ActiveLink>
        </li>
      </ul>
    </nav>
  );

  const hamburgerButtonClasses = classes(styles.hamburgerButton, {
    [styles.openNavMenu]: hamburgerOpen
  });

  return (
    <>
      <div className={styles.mobileNav}>
        <button className={hamburgerButtonClasses} onClick={() => setHamburgerOpen(!hamburgerOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {hamburgerOpen && navmenu}
      </div>
      <div className={styles.mainNav}>{navmenu}</div>
    </>
  );
}
