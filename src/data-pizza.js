import { v4 as uuidv4 } from 'uuid';

const pizza_info = [
  {
    id: uuidv4(),
    name_pizza: 'Римская пицца',
    imeg_pizza:
      'https://nonna.com.ua/image/cache/catalog/rolly/dscf0038-1200x800.jpeg',
    price_pizza: '320 грн',
    keyProducts: 'Римская',
    products:
      'колбаски боварские, сыр моцарелла, томаты Черри, лук крымский, перец болгарский, шампиньоны, кунжут, орегано, соус неаполитанский, соус песто.',
  },
  {
    id: uuidv4(),
    name_pizza: 'Цезарь',
    imeg_pizza:
      'https://nonna.com.ua/image/cache/catalog/rolly/dscf0030-1200x800.jpeg',
    price_pizza: '285 грн',
    keyProducts: 'Цезарь',
    products:
      'бекон, куриное филе, томаты черри, сыр моцарелла, сыр пармезан, салат зеленый, кунжут, перепелиное яйцо, соус',
  },
  {
    id: uuidv4(),
    name_pizza: 'Кальцоне',
    imeg_pizza:
      'https://nonna.com.ua/image/cache/catalog/menu2019/picca/dsc_7218_2-1200x800.jpg',
    price_pizza: '160 грн',
    keyProducts: 'Кальцоне',
    products:
      'шпинат, томаты чери, перец болгарский, лук порей, фреш лимона, оливковое масло, кунжут',
  },
  {
    id: uuidv4(),
    name_pizza: 'Пицца с мартаделлой',
    imeg_pizza:
      'https://nonna.com.ua/image/cache/catalog/rolly/1dcb4047-37f7-42a0-b6a4-181d8a1c0d4a-1200x800.jpeg',
    price_pizza: '310 грн',
    keyProducts: 'Пицца с мартаделлой',
    products:
      'Мартаделла[итальянская колбаска], сыр Моцарелла, томаты Черри, сыр Пармезан, руккола, каперсы, оливки, неаполитанский соус, кунжут',
  },
  {
    id: uuidv4(),
    name_pizza: 'Прошутто Di Pаrma',
    imeg_pizza:
      'https://nonna.com.ua/image/cache/catalog/rolly/dscf0008-1200x800.jpeg',
    price_pizza: '295 грн',
    keyProducts: 'Прошутто Di Pаrma',
    products:
      'прошутто, томаты черри, сыр моцарелла, сыр пармезан, кунжут, соус неаполитано, руккола, кунжут',
  },
  {
    id: uuidv4(),
    name_pizza: 'Шесть видов сыра',
    imeg_pizza:
      'https://nonna.com.ua/image/cache/catalog/rolly/img_6037-1200x800.jpeg',
    price_pizza: '210 грн',
    keyProducts: 'Шесть видов сыра',
    products:
      'моцарелла, дор блю, радомер, пармезан, Фета, моцарелла мини, томаты Черри, кунжут, соус сырный',
  },
];

export default pizza_info;
