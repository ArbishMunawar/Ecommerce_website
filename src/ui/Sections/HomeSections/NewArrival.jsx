import React,{useContext} from 'react';
import Card from '../../common/Card.jsx';
import UseFetch from '../../../hooks/UseFetch.jsx';
import { useSearchParams  } from 'react-router';
import { CartContext } from "../../../hooks/useContext/cartContext.jsx";
const NewArrival = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/products?${searchParams.toString()}`
  );
  const { addToCart } =useContext(CartContext);
  return (
    <section className="w-full xl:pl-68 mx-auto mt-10 px-4 my-[4rem]">
      <h2 className="text-2xl font-semibold my-4">New Arrivals</h2>

      <div className="overflow-x-auto scrollbar-thin pb-9">
        <div className="flex gap-10 w-max ">
          {isLoading ? (
            <p>Loading...</p>
          ) : data && data.length > 0 ? (
            data.map(({ id, ...home }) => (
              <Card {...home} key={id} id={id} addToCart={addToCart} />
            ))
          ) : (
            <p>No Products Found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
