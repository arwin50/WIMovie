export default function DetailedMovie({ slide, index }) {
    return <div key={index} className="max-w-full h-32 mb-2 flex flex-row">
        <img src={slide} className="max-w-24 h-full object-cover" />
        <h3 className="ml-4 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut officiis consequuntur alias! </h3>
    </div>
}