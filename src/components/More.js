import React from 'react';
import { Link } from "react-router-dom";


export function More(props) {

    return (
        <div className="d-grid gap-2">
                <Link
                    className="btn btn-secondary"
                    to={ `/:${ props.category }` }>More
                </Link>
            
        </div>
    );
}
