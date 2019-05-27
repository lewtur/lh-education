import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import items from './localAssets/testimonials.json';
import Testimonial from './Testimonial.jsx';

const TestimonialsStyles = styled.section`
    background-color: ${props => props.theme.primary};
    color: white;
    position: relative;
`;

const TestimonialLeftArrow = styled.div`
    visibility: hidden;
    position: absolute;
    left: 5%;
    top: 50%;
    &:hover {
        cursor: pointer
    }

    @media ${props => props.theme.breakpoints.md} {
        visibility: visible;
    }
`;

const TestimonialRightArrow = styled.div`
    visibility: hidden;
    position: absolute;
    left: 95%;
    top: 50%;
    &:hover {
        cursor: pointer
    }

    @media ${props => props.theme.breakpoints.md} {
        visibility: visible;
    }
`;

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const numberOfTestimonials = items.testimonials.length;

    const changeIndex = (increment) => {
        const newValue = index + increment;

        if (newValue > numberOfTestimonials - 1) {
            setIndex(0);
        } else if (newValue < 0) {
            setIndex(numberOfTestimonials - 1);
        } else {
            setIndex(newValue);
        }
    }

    return ( 
        <TestimonialsStyles>
            <h1>Our clients</h1>
            <TestimonialLeftArrow onClick={() => changeIndex(-1)}><FontAwesomeIcon icon='chevron-left' size="3x" /></TestimonialLeftArrow>
            <Testimonial {...items.testimonials[index]} />
            <TestimonialRightArrow onClick={() => changeIndex(1)}><FontAwesomeIcon icon='chevron-right' size="3x" /></TestimonialRightArrow>
        </TestimonialsStyles>
     );
}
 
export default Testimonials;