import React from "react";

function FrontPage() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
            </h1>
            <p className="mb-8 leading-relaxed">
              Books, bookshops, and libraries are an extremely interesting
              subject for creatives all over the world. The reason is simple.
              When done right, these ads will show how creative you are.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Explore
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/720x600/?books,education"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FrontPage;
