import exp from "constants";
import { useState } from "react";

export default function Form() {
    const [jawaban, setJawaban] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>yay....jawaban benar!</h1>
    }

    async function handleSubmit(e: {preventDefault: () => void; }) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(jawaban);
            setStatus('success');
        }catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setJawaban(e.target.value);
    }
    
    return (
        <>
        <div className="w-full max-w-xs">
            <h2>Tebak Nama Hewan</h2>
            <p>Hewan Apa Yang Ditakuti Doraemon?</p>
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
            onSubmit={handleSubmit}>
            <textarea value={jawaban} onChange={handleTextareaChange} disabled={status === 'submitting'}></textarea>
            <br />
            <button className="bg-blue-400 p-2 m-2 rounded text-sm text-white" disabled={jawaban.length === 0 || status === 'submitting'}>
                Submit
            </button>
            {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
            </form>
        </div>
        </>
    );
}

function submitForm(jawaban) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            let shouldError = jawaban.toLowerCase() !== 'tikus'
            if (shouldError){
                reject(new Error('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'));
            }else {
                resolve();
            }
        }, 500);
    });
}


export function Form_2() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
        <h2>Silahkan Isi Nama Lengkap Anda</h2>
        <label className="block w-full m-2">
            Nama Depan:
            <input className="text-sm text-black ml-2 rounded"
            value={firstName}
            onChange={handleFirstNameChange}
            />
        </label>
        <label className="block w-full m-2">
            Nama Belakang:
            <input className="text-sm text-black ml-2 rounded"
            value={lastName}
            onChange={handleLastNameChange}
             />
        </label>
        <p>Nama Lengkap Anda Adalah: <b className="text-blue-600">{fullName}</b></p>
        </>
    );
}