import { GiCat } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import pizza_info from '../data-pizza';
import styles from '../styles/PizzaList.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function PizzaList() {
  const [activeButton, setActiveButton] = useState(false);
  const [complatePush, setComplatePush] = useState(false);
  const [newProduct, setNewProduct] = useState([]);

  const pushProduct = (elem) => {
    setComplatePush(!complatePush);
    setNewProduct([...newProduct, elem]);
  };

  const buttonBesketActivation = () => {
    setActiveButton(!activeButton);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Меню</div>
        <button
          className={styles.basket}
          title="Корзина"
          onClick={buttonBesketActivation}
        >
          <FaShoppingCart />
        </button>

        {activeButton && (
          <div className={styles.shop_cart}>
            <h2>Ваша корзина</h2>

            {newProduct.length !== 0 && (
              <>
                {newProduct.map((elem, index) => (
                  <div className={styles.product_basket} key={index}>
                    <img src={elem.imeg_pizza} alt="pizza" />
                    <p>{elem.name_pizza}</p>
                    <p>{elem.price_pizza}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      <div className={styles.body}>
        {pizza_info.map((elem) => (
          <div className={styles.container} key={elem.id}>
            <figure>
              <img src={elem.imeg_pizza} alt="pizza_img" />
              <figcaption>
                <Link to={elem.keyProducts}>{elem.name_pizza}</Link>
              </figcaption>
              <button className={styles.price}>
                {elem.price_pizza} <GiCat />
              </button>
              <button
                className={styles.push_shop}
                onClick={() => pushProduct(elem)}
              >
                В корзину <FaShoppingCart />
              </button>
            </figure>
          </div>
        ))}
      </div>
    </>
  );
}

export default PizzaList;
