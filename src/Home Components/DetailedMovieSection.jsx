import DetailedMovie from './DetailedMovie'

export default function DetailedMovieSection({ slides }) {
    return (

        <div className='flex flex-col flex-shrink-0 lg:mt-0 '>
            <h2 className='text-white max-[470px]:ml-3 sm:ml-2 md:ml-0 sm:text-2xl font-bold mt-6 lg:mt-14  '>Recommendations</h2>
            <div className="w-sm flex flex-col overflow-hidden mt-2 bg-gradient-to-b  from-neutral-900 p-2 ">
                {slides.map((slide, index) => (
                    <DetailedMovie key={index} slide={slide} index={index} />
                ))}
            </div>
        </div>
    );
}