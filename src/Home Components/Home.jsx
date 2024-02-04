import Carousel from './Carousel'
import DetailedMovieSection from './DetailedMovieSection'

const slides = ["https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1585020430145-2a6b034f7729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"]


export default function Home() {
    return (
        <main>
            <section className='flex flex-col md:flex-row  justify-center items-center columns-2 md:space-x-8 md:mt-4'>
                <Carousel slides={slides} />
                <DetailedMovieSection slides={slides} />
            </section>
        </main>

    )
}