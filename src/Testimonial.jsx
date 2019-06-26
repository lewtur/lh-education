import React, { useState } from 'react';
import styled from 'styled-components';

const TestimonialStyle = styled.div`
    transition: all 0.5s ease;
`;

const Title = styled.div`
    font-size: 1.5rem;
`;

const Workplace = styled.div`
    font-size: 1.5rem;
`;

const Headline = styled.div`
    text-align: center;

    font-size: 2rem;
    padding-top: 5rem;
        padding-bottom: 4rem;

    @media ${props => props.theme.breakpoints.md} {
        font-size: 2.4rem;        
    }
`;

const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media ${props => props.theme.breakpoints.md} {
        flex-direction: row; 
    }

    .right {
        display: flex;
        align-items: center;
        padding-top: 2.5rem;

        @media ${props => props.theme.breakpoints.md} {
            padding-top: 0;
        }
    }
`;

const ReadFull = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    border: 1px solid white;
    border-right: none;
    border-left: none;
    padding: 1rem;
    

    &:hover {
        cursor: pointer;
    }
`;

const FullText = styled.div`
    max-height: 0;
    overflow: hidden;

    transition: max-height 0.3s ease-in-out;

    &.show {
        max-height: 1000px;
    }

    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;

    p {
        line-height: 1.4rem;
        font-size: 0.9rem;
    }
`;

const Testimonial = ({ title, workplace, headline, fullText }) => {
    const [expand, setExpand] = useState(false);

    console.log(workplace)

    return (
        <TestimonialStyle>
            <Headline>"{headline}"</Headline>
            <DetailsContainer>
                <div className="left">
                    <Title>{title}</Title>
                    <Workplace>{workplace}</Workplace>
                </div>
                <div className="right">
                    <ReadFull onClick={() => setExpand(!expand)}>Read full</ReadFull>
                </div>
            </DetailsContainer>
            <FullText className={expand ? 'show' : ''}>
                {fullText.map(paragraph => <p>{paragraph}</p>)}
            </FullText>
        </TestimonialStyle>
    );
}

export default Testimonial;