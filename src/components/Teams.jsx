import { teamData } from "../assets/assets";
import { motion } from "motion/react";

function Teams() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='flex flex-col items-center gap-7 pt-30 text-gray-800 dark:text-white px-4 sm:px-12 lg:px-24 xl:px-40'>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-3xl sm:text-5xl font-medium'>
                Meet the team
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
                A passionate team of digital experts dedicated to your brands success.
            </motion.p>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    teamData.map((team, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100
                            dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103
                            transition-all duration-400'>

                            <img src={team.image} alt="" className='w-12 h-12 rounded-full' />
                            <div className='flex-1'>
                                <h3 className='font-bold text-sm'>{team.name}</h3>
                                <p className="text-xs opacity-60">{team.title}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Teams;