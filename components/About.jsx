import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';


import {
    User2, 
    MailIcon, 
    HomeIcon, 
    PhoneCall, 
    GraduationCap, 
    Calendar, 
    Briefcase
} from 'lucide-react';
// import { TabsList } from "@radix-ui/react-tabs";

const infoData = [ 
    {
        icon: <User2 size={20} />,
        text: 'Clavino Ourizqi Rachmadi',
        
    },
    {
        icon: <MailIcon size={20} />,
        text: 'clavinorach@gmail.com',
        
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 1 August, 2005',
        
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Depok, West Java, Indonesia',
        
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Mercu Buana University',
                role: 'Undergraduate Computer Science',
                years: '2023 -  2027',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Laboratory Assistant Computer Science Faculty Mercu Buana University',
                role: 'Back-End Learning Path',
                years: '2024 - Currently',
            },
            {
                company: 'Google Developer Student Club Mercu Buana University',
                role: 'Super Member',
                years: '2023 - Currently',
            },
        ]
    },
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-End Development',
            },
            {
                name: 'JavaScript',
            },
            {
                name: 'Back-End Development',
            },
            {
                name: 'Python',
            },

        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },

        ]
    },
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item)=> item.title === title);
    };

    return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                About Me
            </h2>
            <div className='flex flex-col xl:flex-row'>
                {/* image */}
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg 
                    containerStyles='bg_about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' 
                    imgSrc='/about/clavino.jpg' 
                    />
                </div>
                {/* tabs */}
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto'value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto'value='qualification'>Qualification</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto'value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* Tabs Content */}
                        <div className='text-lg mt-12 xl:mt-8'> 
                        <TabsContent value='personal'> 
                        <div className='text-center xl:text-left'>
                            <h3 className='h3 mb-4'> Unmatched Service Quality for over years</h3>
                            <p className='subtitle max-w-xl mx-auto xl:mx-0'> 
                            I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experience
                            </p>
                            {/* icons */}
                            <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                {infoData.map((item, index)=> {
                                    return( 
                                    <div 
                                    className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                    key={index}
                                    >
                                        <div className='text-primary'>{item.icon}</div>
                                        <div>{item.text}</div>
                                    </div>
                                    );
                                })}
                            </div>
                            {/* languages */}
                            <div className='flex flex-col gap-y-2'>
                                <div className='text-primary'>Language Skill</div>
                                <div className='border-b border-border'></div>
                                <div>English - Indonesian</div>
                            </div>
                        </div>
                        </TabsContent>
                        {/* Qualifications */}
                        <TabsContent value='qualification'> 
                            <div>
                                <h3 className='h3 mb-8 text-center xl:text-left'>
                                    My Awesome Journey
                                    </h3>
                                    {/* Education & experience wrapper */}
                                    <div>
                                        {/* experience */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <Briefcase />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'experience').data.map((item, index)=> { const {company, role, years} = item;
                                                    return(
                                                        <div
                                                        className='flex gap-x-8 group' 
                                                        key={index}
                                                        >
                                                            
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'> 
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{item.company}</div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{item.role}</div>
                                                            <div className='text-base font-medium'>{item.years}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div >
                                            </div>
                                        </div>
                                        {/* education */}
                                    </div>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value='skills'> Skills Info 
                        <div className='text-center xl:text-left'>
                            <h3 className='h3 mb-8'> Tools i use everyday </h3>
                            {/* skills */}
                            <div className='mb-16'>
                                <h4 className='text'>Skills</h4>
                                <div className='border-b border-border mb-4'></div>
                                {/* skills list */}
                                <div>
                                    {getData(skillData, 'skills').data.map(
                                        (item, index) => {
                                            const {name} = item;
                                            return (
                                             <div 
                                             className='w-2/4 text-center xl:text-left mx-auto xl mx-0' 
                                             key={index}
                                             >
                                                <div className='font-medium'>{name}</div>
                                             </div>
                                            );
                                        }
                                        )}
                                </div>
                            </div>
                            {/* tools */}
                            <div>
                                <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                                    Tools
                                </h4>
                                <div className='border-b border-border mb-4'></div>
                                {/* tools list */}
                                <div className='flex gap-x-8 justify-center xl:justify-start'>
                                    {getData(skillData, 'tools').data.map((item, index)=>{
                                        const {imgPath} = item;
                                        return (
                                        <div key={index}>
                                            <Image 
                                            src={imgPath} 
                                            width={48} 
                                            height={48} 
                                            alt='' 
                                            priority
                                            />
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;