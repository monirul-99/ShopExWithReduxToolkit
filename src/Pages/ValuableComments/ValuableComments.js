import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function CommentsCard() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="grid grid-cols-1">
          {[...Array(9)].map((item, inx) => (
            <SwiperSlide>
              <div
                key={inx}
                className="duration-300 transition-all p-6 bg-white hover:bg-[#949393]/40 rounded-lg md:p-8 cursor-default"
              >
                <p className="duration-300 transition-all leading-loose text-sm text-gray-500 hover:text-white">
                  “Once you have collected testimonials, be sure to get from
                  customers before using their feedback publicly. You can then
                  use, other marketing channels to showcase the positive of your
                  customers and build trust with potential customers collected
                  testimonials”.
                </p>

                <div className="flex items-center mt-6">
                  <img
                    className="object-cover rounded-full w-14 h-14"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="font-semibold text-blue-500">Robbert</h1>
                    <span className="text-sm text-gray-500">
                      CTO, Robert Consultency
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        {/* <SwiperSlide>
          <div className="p-6 bg-white rounded-lg md:p-8">
            <p className="leading-loose text-gray-500">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-white rounded-lg md:p-8">
            <p className="leading-loose text-gray-500">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-white rounded-lg md:p-8">
            <p className="leading-loose text-xs text-gray-500">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
