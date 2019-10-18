import React from 'react';

export default props => (
    <ul className="collection with-header">
        <li className="collection-header"> <h4> { props.liName } </h4> </li>

        {/* Produto 1 - lista para associação com categoria */}
        <li className="collection-item">
            <label>
                <input type="checkbox" className="filled-in" />
                <span> Nome do produto </span>
            </label>
        </li>
    </ul>
) 