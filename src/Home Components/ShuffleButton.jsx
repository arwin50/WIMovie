import { Shuffle } from "react-feather"

export default function ShuffleButton({ toggleShuffle }) {

    return (
        <div onClick={toggleShuffle} className="text-white cursor-pointer flex space-x-2 items-center justify-center 
        font-semibold bg-amber-300 w-40 rounded p-1 text-slate-800">
            <p className="text-lg">Shuffle Movies</p><Shuffle size={20} />
        </div>
    )
}