import React, { FC } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background-color: white;
    box-shadow: 0 0 10px 1px black;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProductsWrap = styled.div`
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Product = styled.div`
    width: 250px;
    min-height: 250px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 0 10px 1px;
    margin: 20px;
`;

export const Products: FC = () => {
    return (
        <Section>
            <h1>Our products</h1>
            <ProductsWrap>
                <Product>
                    <img src="/images/prod.jpg" alt="" />
                    <h1>Lorem ipsum.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Product>
                <Product>
                    <img src="/images/prod.jpg" alt="" />
                    <h1>Lorem ipsum.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Product>
                <Product>
                    <img src="/images/prod.jpg" alt="" />
                    <h1>Lorem ipsum.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Product>
                <Product>
                    <img src="/images/prod.jpg" alt="" />
                    <h1>Lorem ipsum.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Product>
                <Product>
                    <img src="/images/prod.jpg" alt="" />
                    <h1>Lorem ipsum.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Product>
                <Product>
                    <img src="/images/prod.jpg" alt="" />
                    <h1>Lorem ipsum.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Product>
                <Product>
                    <img src="/images/prod.jpg" alt="" />
                    <h1>Lorem ipsum.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Product>
                <Product>
                    <img src="/images/prod.jpg" alt="" />
                    <h1>Lorem ipsum.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Product>
            </ProductsWrap>
        </Section>
    );
};
