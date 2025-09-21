import assets from "../assets/assets";

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
        <div id="our-work" className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <h2 className='text-3xl sm:text-5xl font-medium'>Our latest work</h2>
            <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
                From strategy to execution, we craft digital solutions that move your business forward.
            </p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {
                    worksData.map((work, index) => (
                        <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                            <img src={work.image} alt="" className='w-full rounded-xl' />
                            <h3 className='text-lg font-semibold my-2'>{work.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Works;