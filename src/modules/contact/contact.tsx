import React, { FC } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-around;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    min-width: 90%;
    padding: 20px;
    align-items: stretch;
    justify-content: space-evenly;
`;

const HorizontalLine = styled.div`
    box-shadow: 0 0 0 1px;
    width: 20%;
`;

const InfoWrap = styled.div`
    width: calc(300px + 2%);
`;

const FormWrap = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    min-width: 40%;
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
export const Contact: FC = () => (
    <Section>
        <Head>
            <HorizontalLine />
            <h1>Contact us</h1>
            <HorizontalLine />
        </Head>
        <Content>
            <InfoWrap>
                <p>
                    Email:{' '}
                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                </p>
                <p>Phone: +1 0000-000-000</p>
                <p>Adress: Your adress</p>
            </InfoWrap>
            <h1 style={{ textAlign: 'center' }}>Or</h1>
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
        </Content>
    </Section>
);
