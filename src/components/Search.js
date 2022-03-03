import React from 'react';

export function Search(props) {

    return (
        <div>
            <form className="from-inline">
                <input class="form-control mr-sm-2" type="text" placeHolder="Buscar" onChange={ (e) => props.callback(e.target.value) }></input>
            </form>
        </div>
    );
}