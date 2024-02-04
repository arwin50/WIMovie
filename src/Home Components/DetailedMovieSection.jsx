import DetailedMovie from './DetailedMovie'

export default function DetailedMovieSection({ slides }) {
    return (
        <div className="max-w-sm flex flex-col overflow-hidden mt-24 bg-slate-800 p-4">
            {slides.map((slide, index) => {
                return <DetailedMovie slide={slide} index={index} />
            })}
        </div>
    )
}