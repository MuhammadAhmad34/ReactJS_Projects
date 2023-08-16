import React from 'react'

function ListView(props) {
    return (
        <>
            <div className={`container mt-2 d-flex text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                
                <div>
                    <li className='list-item ' >
                        {props.listitem}
                        <button onClick={e => {
                            props.delItem(props.index);
                        }} className={`text-center btn text-${props.mode === 'light' ? 'dark' : 'light'}` }><i className="fa-solid fa-trash-can "></i></button>
                    </li></div>

            </div>

        </>
    )
}

export default ListView
