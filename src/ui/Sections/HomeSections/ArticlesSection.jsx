import React from 'react';
import article1 from '../../../assets/Images/article1.png';
import article2 from '../../../assets/Images/article2.png';
import article3 from '../../../assets/Images/article3.png';
import SingleArrow from '../../../assets/icons/SingleArrow.jsx';

const Articles = [
  {
    image: article1,
    title: '7 ways to decor your home',
  },
  {
    image: article2,
    title: 'Kitchen organization',
  },
  {
    image: article3,
    title: 'Decor your bedroom',
  },
];

const ArticlesSection = () => {
  return (
    <section className="p-6 lg:max-w-[1120px] mx-auto lg:pt-[3rem]">
        <div className='py-5 flex justify-between '>
      <h2 className="text-4xl font-semibold mb-6"> Articles</h2>
      <button className=" underline mt-2 font-semibold flex items-center justify-center gap-2" >More Articles <SingleArrow/></button>
      </div>
      <div className="flex flex-wrap gap-6 md:grid md:grid-cols-3 lg:grid-cols-3">
        {Articles.map((article, index) => (
          <div key={index} className="w-full">
            <img src={article.image} alt={article.title} className="w-full " />
            <h3 className="mt-4 text-xl font-medium ">{article.title}</h3>
            <button
              className=" underline mt-2 font-semibold flex items-center justify-center gap-2"
              onClick={() => alert(`Read more about: ${article.title}`)} 
            >
              Read More<SingleArrow/>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
