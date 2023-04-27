import React from "react";
import { Link } from "react-router-dom";
import styles from "./All.module.css";

const Makehead = () => {
  return (
    <>
      <header>
        <div className={styles.headLogo}>
          <img src="../images/facebook-icon.png" alt="페이스북 아이콘" />
          <input type="text" placeholder="Facebook 검색" />
        </div>
        <div className={styles.headNav}>
          <nav>
            <div>
              <Link to="/Main">
                <span className={styles.btnBox}>
                  <img src="../images/home.png" alt="홈 바로가기" />
                  <span className={styles.btnLine}></span>
                </span>
              </Link>
            </div>

            <span className={styles.btnBox}>
              <img src="../images/youtube.png" alt="동영상 바로가기" />
              <span className={styles.btnLine}></span>
            </span>

            <div>
              <Link to="/">
                <span className={styles.btnBox}>
                  <img src="../images/people.png" alt="커뮤니티 바로가기" />
                  <span className={styles.btnLine}></span>
                </span>
              </Link>
            </div>

            <div>
              <Link to="/Game">
                <span className={styles.btnBox}>
                  <img src="../images/game.png" alt="게임 바로가기" />
                  <span className={styles.btnLine}></span>
                </span>
              </Link>
            </div>
          </nav>
        </div>
        <div className={styles.headSide}>
          <span className={styles.btnBox}>
            <img src="../images/menu.png" alt="메뉴" />
          </span>
          <span className={styles.btnBox}>
            <img src="../images/alarm.png" alt="알림" />
          </span>
          <span className={styles.btnBox}>
            <img src="../images/more.png" alt="더보기" />
          </span>
        </div>
      </header>
    </>
  );
};

export default Makehead;
