import Button from "@components/Button";
import Logos from "@components/Logos";
import classNames from "classnames";
import Link from "next/link";
import {
  BookBookmark,
  CaretDown,
  Checks,
  CurrencyCircleDollar,
  HouseLine,
  IconContext,
  List,
  Phone,
  UserCirclePlus,
  UserList,
  X,
} from "phosphor-react";
import { FC, useState } from "react";
import { Media } from "utils/media";
import styles from "./Header.module.scss";

type pageIds = "home" | "about" | "s-ks" | "s-au" | "s-zk" | "s-dok";
interface Props {
  activeMenuItem: pageIds;
}

const Header: FC<Props> = ({ activeMenuItem }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened((s) => !s);
  const closeMenu = () => setMenuOpened(false);

  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <Logos />
      </Link>
      <Media at="xs">
        <button
          aria-label="Otwórz menu"
          className={classNames(styles.hamburger, { [styles["hamburger--close"]]: menuOpened })}
          onClick={toggleMenu}
        >
          {menuOpened ? <X weight="bold" size={20} /> : <List weight="bold" size={20} />}
        </button>
      </Media>

      <IconContext.Provider
        value={{
          color: "currentColor",
          size: 28,
        }}
      >
        <nav className={classNames(styles.nav, { [styles["nav--opened"]]: menuOpened })}>
          <ul className={styles.nav__list}>
            <li data-active={activeMenuItem === "home"} className={styles.nav__item}>
              <Link href="/">
                <Media at="xs">
                  <HouseLine />
                </Media>
                <span>Strona główna</span>
              </Link>
            </li>
            <li className={styles.nav__item} data-active={activeMenuItem === "about"}>
              <Link href="/about">
                <Media at="xs">
                  <UserList />
                </Media>
                <span>O Nas</span>
              </Link>
            </li>
            <li
              tabIndex={-1}
              data-active={(["s-au", "s-ks", "s-zk", "s-dok"] as pageIds[]).includes(activeMenuItem)}
              className={classNames(styles.nav__item, styles["nav__item--dropdown"])}
            >
              <Media greaterThan="xs">
                Usługi <CaretDown color="currentColor" weight="bold" size={16} />
              </Media>
              <div className={styles.dropdown}>
                <Media greaterThan="xs">
                  <div className={styles.dropdown__tick}></div>
                </Media>
                <ul className={styles.dropdown__list}>
                  <li className={styles.dropdown__item} data-active={activeMenuItem === "s-ks"}>
                    <Link href="/uslugi-ksiegowe">
                      <BookBookmark />
                      <div>
                        <span>Usługi Księgowe</span>
                        <Media greaterThan="xs">
                          <div>Prowadzenia ksiąg rachunkowych, ewidencji podatkowej oraz obsługi kadrowej.</div>
                        </Media>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.dropdown__item} data-active={activeMenuItem === "s-au"}>
                    <Link href="/uslugi-audytorskie">
                      <Checks />
                      <div>
                        <span>Usługi Audytorskie</span>
                        <Media greaterThan="xs">
                          <div>
                            Świadczymy usługi w zakresie: Badań sprawozdań finansowych, Badań planów przekształcenia,
                            Badań planów połączenia, Audyt projektów unijnych, Analizy finansowe.
                          </div>
                        </Media>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.dropdown__item} data-active={activeMenuItem === "s-zk"}>
                    <Link href="/zakladanie-spolek">
                      <UserCirclePlus />
                      <div>
                        <span>Zakładanie spółek</span>
                        <Media greaterThan="xs">
                          <div>
                            Dla klientów naszego biura rachunkowego nieodpłatnie służymy wiedzą i pomocą w założeniu
                            spółki w portalu S24.
                          </div>
                        </Media>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.dropdown__item} data-active={activeMenuItem === "s-dok"}>
                    <Link href="/dokumentacja-cen-transferowych">
                      <CurrencyCircleDollar />
                      <div>
                        <span>Dokumentacja cen transferowych</span>
                        <Media greaterThan="xs">
                          <div>
                            Posiadamy wieloletnie w zakresie sporządzania lokalnej dokumentacji cen transferowych oraz
                            analiz porównawczych (benchmarkingów).
                          </div>
                        </Media>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ display: "flex" }}>
              <Button
                linkTo="/#contact"
                onClick={closeMenu}
                icon={Phone}
                fillIcon
                className={styles.contact}
                size="small"
              >
                Kontakt
              </Button>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </header>
  );
};

export default Header;
