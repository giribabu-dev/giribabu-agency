import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

function Services() {

    const servicesData = [
        {
            icon: assets.ads_icon,
            title: "Advertising",
            description: "We turn ideas into powerful digital solutions that connect, engage..."
        },
        {
            icon: assets.marketing_icon,
            title: "Content marketing",
            description: "We help you execute your plan and deliver results."
        },
        {
            icon: assets.content_icon,
            title: "Content writing",
            description: "We help you create a marketing strategy that drives results."
        },
        {
            icon: assets.social_icon,
            title: "Social media",
            description: "We help you build a strong social media presence and engage with your audience."
        }
    ]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id="services"
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-3xl sm:text-5xl font-medium'>
                How can we help?
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
                From strategy to execution, we craft digital solutions that move your business forward.
            </motion.p>

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </motion.div>
    )
}

export default Services;