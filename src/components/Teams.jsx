import { teamData } from "../assets/assets";

function Teams() {
    return (
        <div className='flex flex-col items-center gap-7 pt-30 text-gray-800 dark:text-white px-4 sm:px-12 lg:px-24 xl:px-40'>
            <h2 className='text-3xl sm:text-5xl font-medium'>Meet the team</h2>
            <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
                A passionate team of digital experts dedicated to your brands success.
            </p>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    teamData.map((team, index) => (
                        <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100
                            dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103
                            transition-all duration-400'>

                            <img src={team.image} alt="" className='w-12 h-12 rounded-full' />
                            <div className='flex-1'>
                                <h3 className='font-bold text-sm'>{team.name}</h3>
                                <p className="text-xs opacity-60">{team.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Teams;