import assets from "../assets/assets";
import { motion } from "motion/react";

function Works() {

    const worksData = [
        {
            title: "Mobile app marketing",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            image: assets.work_mobile_app
        },
        {
            title: "Dashboard management",
            description: "We help you execute your plan and deliver results.",
            image: assets.work_dashboard_management
        },
        {
            title: "Fitness app promotion",
            description: "We help you create a marketing strategy that drives results.",
            image: assets.work_fitness_app
        }
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id="our-work" className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-3xl sm:text-5xl font-medium'>
                Our latest work
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
                From strategy to execution, we craft digital solutions that move your business forward.
            </motion.p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {
                    worksData.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                            <img src={work.image} alt="" className='w-full rounded-xl' />
                            <h3 className='text-lg font-semibold my-2'>{work.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Works;