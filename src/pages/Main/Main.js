import React from "react";
import styles from "./Main.module.css";
const Main = () => {
  const onClickNavigatePack = () => {
    window.location.href = "/pack";
  };
  const onClickNavigateMain = () => {
    window.location.href = "/main";
  };
  const onClickNavigateLogin = () => {
    window.location.href = "/";
  };
  const onClickNavigateGame = () => {
    window.location.href = "/Game";
  };
  console.log("한번만");
  return (
    <>
      <header>
        <div className={styles.headLogo}>
          <img src="../images/facebook-icon.png" alt="페이스북 아이콘" />
          <input type="text" placeholder="Facebook 검색" />
        </div>
        <div className={styles.headNav}>
          <nav>
            <span onClick={onClickNavigateMain} className={styles.btnBox}>
              <img src="../images/home.png" alt="홈 바로가기" />
              <span className={styles.btnLine}></span>
            </span>

            <span onClick={onClickNavigatePack} className={styles.btnBox}>
              <img src="../images/youtube.png" alt="동영상 바로가기" />
              <span className={styles.btnLine}></span>
            </span>

            <span onClick={onClickNavigateLogin} className={styles.btnBox}>
              <img src="../images/people.png" alt="커뮤니티 바로가기" />
              <span className={styles.btnLine}></span>
            </span>

            <span onClick={onClickNavigateGame} className={styles.btnBox}>
              <img src="../images/game.png" alt="게임 바로가기" />
              <span className={styles.btnLine}></span>
            </span>
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
      <main>
        <section className={styles.container}>
          <ul className={styles.list}>
            <li>
              <div className={styles.card}>
                <div className={styles.head}>
                  <img
                    className={styles.logo}
                    src="../images/edu_icon.png"
                    alt="광고아이콘"
                  />
                  <span className={styles.title}>에듀윌</span>
                  <img src="../images/more.png" alt="더보기 메뉴" />
                </div>
                <div className={styles.text}>
                  <p>🔥기간한정 특별 이벤트🔥</p>
                  <p>초시생 필수템, 만화입문서 무료배포!</p>
                  <p>#합격자수 1위 # 에듀윌 # 공인중개사</p>
                </div>
                <div className={styles.body}>
                  <img src="../images/sample-image.jpg" alt="광고이미지" />
                  <div className={styles.text}>
                    <p>EDUWILL.NET</p>
                    <p>입문교재 선착순 무료신청</p>
                    <p>합격자 수 1위 에듀윌 공인중개사</p>
                    <button>더 알아보기</button>
                  </div>
                </div>
                <div className={styles.foot}>
                  <div className={styles.btnBox}>
                    <img src="../images/happy.png" alt="좋아요" />
                    <span className={styles.btnText}>좋아요</span>
                  </div>
                  <div className={styles.btnBox}>
                    <img src="../images/youtube.png" alt="댓글달기" />
                    <span className={styles.btnText}>댓글달기</span>
                  </div>
                  <div className={styles.btnBox}>
                    <img src="../images/people.png" alt="공유하기" />
                    <span className={styles.btnText}>공유하기</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Main;
