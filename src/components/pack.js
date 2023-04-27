import React from "react";
import styles from "./All.module.css";
import Makehead from "./makehead";
const Pack = () => {
  return (
    <>
      <Makehead />
      <main>
        <section className={styles.container}>
          <ul className={styles.list}>
            <li>
              <div className={styles.card}>
                <div className={styles.head}>
                  <img
                    className={styles.logo}
                    src="../images/plogo.png"
                    alt="광고아이콘"
                  />
                  <span className={styles.title}>빽다방</span>
                  <img src="../images/more.png" alt="더보기 메뉴" />
                </div>
                <div className={styles.text}>
                  <p>커피말고 다른 거 먹고 싶을 때?🤔</p>
                  <p>지금 날씨에 제격인 빽다방 티 추천 ❣</p>
                  <p>얼죽아 vs 뜨죽따 </p>
                  <p>다투지 말아요! </p>
                  <p>빽다방 티는 둘다 맛있으니까요 ღ'ᴗ'ღ</p>
                  <p>#합리적인커피문화 #빽다방</p>
                </div>
                <div className={styles.body}>
                  <img src="../images/pack.png" alt="광고이미지" />
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

export default Pack;
