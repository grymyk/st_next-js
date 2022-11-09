import ProductsItem from './ProductItem';

export default function Products() {

  const products = [{
      img: {
        src: "/img/small.jpg",
        title: "small scandinavian tree",
        alt: "small scandinavian tree",
        width: 410,
        height: 547,
      },

      title: 'small',
      params: {
          height: 'height: 22 sm',
          branch: 'branch: 5 peaces'
      },

      id: '1'
    }, {
      img: {
        src: "/img/big.jpg",
        title: "big scandinavian tree",
        alt: "big scandinavian tree",
        width: 410,
        height: 547,
      },

      title: 'big',
      params: {
          height: 'height: 1 m',
          branch: 'branch: 17 peaces'
      },

      id: '2'
  }] 

  const products_list = products.map( ( product ) => {
      return <ProductsItem
        key = { product.id }
        product = { product }
      />
  }) 

  const products_list_cls = `flex flex-col justify-center flex-wrap
      items-center lg:flex-row
  `

  return (
      <section>
        <h2>products</h2>
            <ul className = { products_list_cls } >
            { products_list }
            </ul>
      </section>
  );
}