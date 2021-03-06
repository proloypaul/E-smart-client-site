import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useCourses from '../../../hooks/useCourses';
import './Courses.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SingleCourse from './SingleCourse/SingleCourse';

const Courses = () => {
   const { courses, loading } = useCourses();
   const fewCourses = courses.slice(0, 5);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <>
         <div className="courses">
            <Container>
               <div className="section_title text-center mb-5" data-aos="fade-up">
                  <h2 className='text-white'>Popular Online Courses</h2>
                  <p className='text-white'>
                     Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
                     facilisis vel mollis vitae, mollis nec ante. Quisque aliquam
                     dictum condim.
                  </p>
               </div>

               {
                  loading && <div className='text-center'>
                     <Spinner className='animate_loader' animation="grow" variant='info' />
                  </div>
               }

               <Slider {...settings}>
                  {fewCourses.map(course => <SingleCourse key={course?._id} course={course}></SingleCourse>)}
               </Slider>

            </Container>
         </div>
      </>
   );
};

export default Courses;