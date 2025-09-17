import assets from "../assets/assets";

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
        <div id="services"
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

            <h2 className='text-3xl sm:text-5xl font-medium'>How can we help?</h2>
            <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
                From strategy to execution, we craft digital solutions that move your business forward.
            </p>
        </div>
    )
}

export default Services;