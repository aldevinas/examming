import React from 'react';
import {useEffect, useState} from "react";
import './components.css'

function UserList() {
  const [trigger, setTrigger] = useState(false)
  const [getItems, setItems] = useState(null)
  const [getNewRow, setNewRow] = useState({gridTemplateRows: 0})



    useEffect(() => {
        fetch('http://localhost:3001/storage')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setNewRow({gridTemplateRows: `repeat(${data.length + 1}, 45px)`})
            })
    }, [trigger])

    function addItem(id) {
        fetch(`http://localhost:3001/add/${id}`)
            .then(res => res.json())
            .then(data => {
                setTrigger(!trigger)
            })
    }
    function removeItem(id) {
        fetch(`http://localhost:3001/remove/${id}`)
            .then(res => res.json())
            .then(data => {
                setTrigger(!trigger)
            })
    }
    function deleteItem(id) {
        fetch(`http://localhost:3001/delete/${id}`)
            .then(res => res.json())
            .then(data => {
                setTrigger(!trigger)
            })
    }
    return (!!getItems ?
            <div>
                <div style={getNewRow} className='frame'>
                    <div className="table">
                        <div className="rowAlign">
                            <h3>Vartotojo vardas</h3>
                        </div>

                        <div className="rowAlign">
                            <h3>Amžius</h3>
                        </div>

                        <div className="rowAlign">
                            <h3>El. paštas</h3>
                        </div>

                        <div className="rowAlign">
                            <h3>Slaptažodis</h3>
                        </div>
                    </div>



                    {getItems.map((item, index) => (
                        <div className="table" key={index}>
                            <div>
                                <p className="rowAlign">{item.name}</p>
                            </div>
                            <div className="rowAlign">

                                <p>{item.age}</p>

                                <h3 className='btnDel' onClick={() => deleteItem(item._id)}>Del</h3>
                            </div>
                            <div className="rowAlign">
                                <p>el.paštas: {item.email}</p>
                            </div>
                            <div className="rowAlign">
                                <p>{item.password}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> : null
    );
}

export default UserList;