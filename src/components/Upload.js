import React, {useState} from 'react';
import {useRef} from "react";

function Upload() {

    const nameRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [getError, setError] = useState(" ")

//  vartotojo upload toDB

    function upload() {

        const data = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            email: emailRef.current.value,
            password:passwordRef.current.value
        }
        fetch('http://localhost:3001/upload', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    return setError(data.message)
                }
                if (!data.error) {
                    nameRef.current.value = ''
                    ageRef.current.value = ''
                    emailRef.current.value = ''
                    passwordRef.current.value = ''

                    return setError(data.message)
                }
            })
    }

    //vartotojo inputs
    return (
        <div className="wrapper">
            <div>
                <h4 className="warning">{getError}</h4>
                <div className='inputWrapper '>

                    <input type="text"
                           className='input'
                           ref={nameRef}
                           placeholder='Naujo vartotojo vardas'/>

                    <input type="number"
                           className='input'
                           ref={ageRef}
                           placeholder='Amžius'/>

                    <input type="text"
                           className='input'
                           ref={emailRef}
                           placeholder='El. paštas'/>

                    <input type="text"
                           className='input'
                           ref={passwordRef}
                           placeholder='Slaptažodis'/>

                </div>
                <div onClick={upload} className='btnY'>Įrašyti</div>
            </div>
        </div>
    );
}

export default Upload;