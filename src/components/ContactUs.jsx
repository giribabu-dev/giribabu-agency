import assets from "../assets/assets"

function ContactUs() {
    return (
        <div id="contact-us"
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <h2 className='text-3xl sm:text-5xl font-medium'>React out to us</h2>
            <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
                From strategy to execution, we craft digital solutions that move your business forward.
            </p>

            <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="" />
                        <input type="text" placeholder="Enter your name"
                            className='w-full p-3 text-sm outline-none' required
                        />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email id</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="" />
                        <input type="email" placeholder="Enter your email"
                            className='w-full p-3 text-sm outline-none' required
                        />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea rows={8} placeholder="Enter your message"
                        className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' />
                </div>

                <button type="submit" className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer
                    hover:scale-103 transition-all'>
                    Submit <img src={assets.arrow_icon} alt="" className='w-4' />
                </button>
            </form>
        </div>
    )
}

export default ContactUs;