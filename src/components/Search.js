import React from 'react';

export function Search(props) {

    return (
        <div>
            <form className="from-inline">
                <input className="form-control mr-sm-2"
                    type="text"
                    placeholder="Buscar"
                    onChange={ (e) =>
                        props.callback(e.target.value) }>    
                </input>
            </form>
        </div>
    );
}