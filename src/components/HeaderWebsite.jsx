import styles from '../styles/HeaderWebsite.module.css';

function HeaderWebsite() {
  return (
    <div className={styles.header}>
      <h1>МУРпицца</h1>
      <div className={styles.header__content}>
        <div className={styles.header__imeg}>
          <img
            src="https://placeit-ai-acid-production.s3.amazonaws.com/outputs/user_image_20240206_1518516663cc2aa4c.png"
            alt="icon"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.content__title}>Добро пожаловать!</div>
          <div className={styles.content__text}>
            На нашем сайте вы можете заказать вкусную пиццу по доступной цене
          </div>
        </div>
        <div className={styles.header__number_block}>
          <div className={styles.block}>
            <div className={styles.block__title}>Связаться с нами:</div>
            <ul className={styles.block_number_list}>
              <li>+38099378221</li>
              <li>+38066725678</li>
              <li>+38096784268</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderWebsite;
