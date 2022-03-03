import React from 'react';

export function CategoryTitle(props) {

    return (
        <div className="card bg-primary text-center">
            <h2 className="card-title">
                { props.title }
            </h2>
        </div>
    );
}
