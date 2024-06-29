'use client';
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import sweeeper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required components
import {Pagination} from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = 
[
    {
        image: '/work/1.png',
        category: 'Web Design',
        name: 'Project Name',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link : '/',
        github: '/',        
    },
    {
        image: '/work/2.png',
        category: 'Web Development',
        name: 'Project Name',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link : '/',
        github: '/',        
    },
    {
        image: '/work/3.png',
        category: 'Backend Development',
        name: 'Project Name',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link : '/',
        github: '/',        
    },
    {
        image: '/work/4.png',
        category: 'UI/UX Design',
        name: 'Project Name',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link : '/',
        github: '/',        
    },

]


const Work = () => {
    return (
      <section className='relative mb-12 xl:mb-48'>
        <div className="container mx-auto">
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Latest Projects</h2>
                <p className='subtitle mb-8'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>
            {/* slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper 
                className='h-[510px]' 
                slidesPerView={1} 
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                }} 
                spaceBetween={30} 
                modules={[Pagination]}
                pagination={{ clickable: true }}
                >
                    {/* Show only the first 4 projects for the slides */}
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <div className='group'>
                                <ProjectCard project={project} />
                            </div>
                        </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
      </section>
    )
  };

export default Work