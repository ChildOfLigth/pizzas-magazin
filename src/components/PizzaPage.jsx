import { GiCat } from 'react-icons/gi';
import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/PizzaPage.module.css';
import pizza_info from '../data-pizza';

const pizza_size = ['Маленькая', 'Средняя', 'Большая', 'Очень большая'];
const pizza_dough = ['Пышное', 'Тонкое'];

function PizzaPage() {
  const [activeButtonSize, setActiveButtonSize] = useState(null);
  const [activeButtonDough, setActiveButtonDough] = useState(null);
  const navigate = useNavigate();

  const params = useParams();
  const keyPizza = pizza_info.find(
    (prod) => prod.keyProducts === params.keyProduct
  );

  const handleSizeClick = (index) => {
    setActiveButtonSize(index);
  };

  const handleDoughClick = (index) => {
    setActiveButtonDough(index);
  };

  return (
    <>
      <div className={styles.pizza_page} key={keyPizza?.id}>
        <button
          onClick={() => navigate('/')}
          className={styles.button_navigator}
        >
          <SlArrowLeft />
        </button>
        <img src={keyPizza?.imeg_pizza} alt="pizza" />
        <div className={styles.pizza_info}>
          <h1>
            {keyPizza?.name_pizza} <GiCat />
          </h1>
          <h2>
            <span>{`Ингредиенты: `}</span> {`${keyPizza?.products}`}
          </h2>

          <h2>
            <span>Размер пиццы:</span>
          </h2>
          <div className={styles.data_selection}>
            {pizza_size.map((elem, index) => (
              <div key={index}>
                <button
                  className={
                    activeButtonSize === index
                      ? styles.button_active
                      : styles.button_
                  }
                  onClick={() => handleSizeClick(index)}
                >
                  {elem}
                </button>
              </div>
            ))}
          </div>

          <h2>
            <span>Толщина теста:</span>
          </h2>
          <div className={styles.data_selection}>
            {pizza_dough.map((elem, index) => (
              <div key={index}>
                <button
                  className={
                    activeButtonDough === index
                      ? styles.button_active
                      : styles.button_
                  }
                  onClick={() => handleDoughClick(index)}
                >
                  {elem}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PizzaPage;
