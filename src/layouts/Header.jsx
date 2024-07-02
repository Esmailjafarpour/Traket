import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { listMenu, listMenuLog } from "constants/menu";
import { getCookie } from "utils/cookie";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const cookie = getCookie("accessToken");
  console.log("cookie", cookie);
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to="auth">
          <div className={styles.menu}>
            <span onClick={() => setShowMenu(!showMenu)}>
              <img src="profile.svg" />
              <p>دیوار من</p>
            </span>
            {showMenu ? (
              <div>
                {!cookie && <span><img src={`${listMenuLog[0].name}.svg`} />{listMenuLog[0].title}</span> }
                <ul>
                  {listMenu.map((i) => <li key={i.index}>
                        <img src={`${i.icon}.svg`} />
                        {i.title}
                      </li>
                  )}
                </ul>
                {cookie && <span> <img src={`${listMenuLog[1].name}.svg`} />{listMenuLog[1].title}</span> }
              </div>
            ) : null}
          </div>
        </Link>

        <Link to="dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
