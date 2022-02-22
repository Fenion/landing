import React, { FC } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-shadow: 1px 1px 2px black;
`;

const CardWrap = styled.div`
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Card = styled.div`
    width: 250px;
    color: white;
    text-shadow: none;
    min-height: 250px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin: 20px;
    img {
        width: 50%;
        box-shadow: 0 0 10px 1px black;
        padding: 30px;
        background: white;
        border-radius: 50%;
    }
    h1 {
        text-shadow: 1px 1px 2px black;
    }
`;

export const Advantages: FC = () => (
    <Section>
        <h1>Our advantages</h1>
        <CardWrap>
            <Card>
                <img src="/images/speed.png" />
                <h1>Speed</h1>
            </Card>
            <Card>
                <img src="/images/quality.png" />
                <h1>Quality</h1>
            </Card>
            <Card>
                <img src="/images/happy.png" />
                <h1>A lot of happy clients</h1>
            </Card>
        </CardWrap>
    </Section>
);
