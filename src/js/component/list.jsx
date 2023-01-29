import React, { useState } from "react";
import PropTypes from "prop-types";

const List = (props) => {

    return (
        <>
            {props.items.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between rounded border-top mt-1" key={index}>
                    {item}
                    <i className="fas fa-trash-alt align-self-center rounded border-top border-bottom"
                        onClick={(e) => props.onRemoveItem(e, index)}
                    ></i>
                </li>
            ))}
        </>
    );
};

List.propType = {
    items: PropTypes.array.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};

export default List;
