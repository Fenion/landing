import React, { FC } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`;
const Background = styled.div`
    background-image: url(/images/bg.jpg);
    width: 100%;
    min-height: 100%;
    top: 0;
    position: fixed;
    filter: blur(5px);
    z-index: -1;
`;
const Form = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1%;
    border-radius: 10px;
    box-shadow: 0 0 10px 1px black;
    p,
    h1,
    button {
        margin: 0;
        margin-top: 10px;
    }
    button {
        outline: none;
        border: none;
        background: black;
        color: white;
        padding: 10px;
        margin-top: 20px;
    }
    input {
        width: 300px;
        line-height: 2;
        outline: none;
        border: none;
        border-bottom: 1px solid;
    }
`;
const TextWrap = styled.div`
    width: 50%;
    color: white;
    text-shadow: 1px 1px 2px black;
`;

export const MainSection: FC = () => (
    <Section>
        <Background />
        <TextWrap>
            <h1 style={{ fontSize: 60 }}>Your logo</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TextWrap>
        <Form>
            <h1>Contact</h1>
            <label>
                <p>Name</p>
                <input type="text" required />
            </label>
            <label>
                <p>E-mail</p>
                <input type="email" required />
            </label>
            <button>Send</button>
        </Form>
    </Section>
);
