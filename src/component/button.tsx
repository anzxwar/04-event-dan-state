import { text } from "stream/consumers";

export function Tombol_2({isiPesan, namaTombol}) {
    return (
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={() => alert(isiPesan)}>
        {namaTombol}
    </button>
    );
}

export default function Tombol_1 () {   
    function handleClick() {
        alert("Tombol telah ditekan!!!");
    }
}