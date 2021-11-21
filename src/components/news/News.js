import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import PaginationContent from './PaginationContent';
import CardGrid from './CardGrid';

function News() {
    return (
        <>
            <div className="wrapper">
                <Container>
                    <h1>News</h1>
                        <PaginationContent />
                        <CardGrid />
                        <PaginationContent />
                </Container>
            </div>
        </>
    )
}

export default News;




