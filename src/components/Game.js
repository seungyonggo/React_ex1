import React from "react";
import styles from "./All.module.css";
const Game = () => {
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
                    src="../images/pubglogo.png"
                    alt="광고아이콘"
                  />
                  <span className={styles.title}>빽다방</span>
                  <img src="../images/more.png" alt="더보기 메뉴" />
                </div>
                <p className={styles.text}>
                  <p>
                    김블루, 미르다요, 성장 등 파트너 인플루언서 vs 일반 참가자
                    vs 크래프톤 임직원이 붙으면 누가 이길까?!💥 인텐스
                    배틀로얄(IBR) 모드 이벤트 매치에서 확인하시고 시청자를 위한
                    G-Coin 이벤트까지 있으니 생중계 절대 놓치지 마세요!
                  </p>
                  <p>📌 일시: 2023/4/29(토) 14:00</p>
                  <p>
                    📺 생중계 채널: 배틀그라운드 KR 유튜브
                    https://pubg.info/PUBGKRYT
                  </p>
                  <p>👉 공지 바로 가기: https://pubg.info/2023IBRDay_KR</p>
                  <p>
                    #배틀그라운드 #배그 #펍지 #배그대회 #생중계 #인텐스배틀로얄
                    #김블루 #블랙워크 #임직원팀점심시간마다연습중
                  </p>
                </p>
                <div className={styles.body}>
                  <img src="../images/pubg.png" alt="광고이미지" />
                  <div className={styles.text}>
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

export default Game;
