'use client'

import Image from 'next/image'

import { 
    Card, 
    CardDescription, 
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required components
import { Pagination } from 'swiper/modules';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Naura Zahira',
        job: 'Student',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Nanda Garin Raditya',
        job: 'Student',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Achmad Ardani',
        job: 'Software Engineer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Naura Zahira',
        job: 'Data Scientist',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Naura Zahira',
        job: 'Data Scientist',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Naura Zahira',
        job: 'Data Scientist',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
            {/* slider */}
            <Swiper 
                slidesPerView={1} 
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className='h-[360px]'
            >
                {reviewsData.map((person, index) => (
                    <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-10'>
                                <div className='flex items-center gap-x-4'>
                                    {/* image */}
                                    <Image 
                                        src={person.avatar}
                                        width={70}
                                        height={70}
                                        alt={person.name} // Adding alt text for accessibility
                                        priority
                                    />
                                    {/* name */}
                                    <div>
                                        <CardTitle className='flex flex-col'>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardTitle className='text-xl font-semibold'>{person.name}</CardTitle> {/* Added CardTitle */}
                            <CardDescription className='text-sm text-muted-foreground mb-4'>{person.job}</CardDescription> {/* Added job title */}
                            <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews
