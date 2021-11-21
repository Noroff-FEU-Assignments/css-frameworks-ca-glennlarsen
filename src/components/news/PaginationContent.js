import React from 'react'
import Pagination from "react-bootstrap/Pagination";

function PaginationContent() {
    return (
        <Pagination>{items}</Pagination>
    )
}

let active = 1;
let items = [];
for (let number = 1; number <= 4; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

export default PaginationContent;
