import React, { FC } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoWrap = styled.div`
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const TextWrap = styled.div`
    max-width: 60%;
    flex-grow: 1;
`;
const PicsWrap = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Image = styled.div`
    width: 200px;
    height: 200px;
    box-shadow: inset 0 0 0 1px black;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const About: FC = () => (
    <Section>
        <h1>About us</h1>
        <InfoWrap>
            <TextWrap>
                <h1>Company name</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </TextWrap>
            <PicsWrap>
                <Image>Your image</Image>
                <Image>Your image</Image>
            </PicsWrap>
        </InfoWrap>
    </Section>
);
