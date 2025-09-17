function ServiceCard({ service, index }) {
    return (
        <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl
                shadow-gray-100 dark:shadow-white/10'>

            <div className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                    w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70'>

                <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white 
                        dark:bg-gray-900 z-10 relative'>

                </div>
            </div>
        </div>
    )
}

export default ServiceCard;