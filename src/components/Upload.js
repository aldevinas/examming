import React, {useState} from 'react';
import {useRef} from "react";

function Upload(props) {

    const nameRef = useRef()
    const quantityRef = useRef()
    const priceRef = useRef()
    const [getError, setError] = useState(" ")


    function upload() {
        const data = {
            name: nameRef.current.value,
            quantity: quantityRef.current.value,
            price: priceRef.current.value
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
                    quantityRef.current.value = ''
                    priceRef.current.value = ''

                    return setError(data.message)
                }
            })
    }


    return (
        <div className="wrapper">
            <div>
                <h4 className="warning">{getError}</h4>
                <div className='inputWrapper '>

                    <input type="text"
                           className='input'
                           ref={nameRef}
                           placeholder='New Inventory name'/>

                    <input type="number"
                           className='input'
                           ref={quantityRef}
                           placeholder='Quantity'/>

                    <input type="number"
                           className='input'
                           ref={priceRef}
                           placeholder='Price'/>

                </div>
                <div onClick={upload} className='btnY'>Upload</div>
            </div>
        </div>
    );
}

export default Upload;