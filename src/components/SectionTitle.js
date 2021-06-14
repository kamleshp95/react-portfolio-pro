import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
    text-align: center;
    p{
        font-family: "RobotoMono Regular";
        font-size: 2rem;
    }
    h2{
        font-family: "Montserrat Bold";
        font-size: 6rem;
        margin-top: 0.5rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px){
        p{
        font-size: 2rem;
        }
        h2{
        font-size: 4rem;
        }
    }
`;

export default function SectionTitle({
    subheading = 'This is subheading',
    heading = 'This is Heading',
}) {
    return (
        <SectionTitleStyle className="section-title">
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </SectionTitleStyle>
    );
}
