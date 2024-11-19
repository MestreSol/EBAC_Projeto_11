import styled from "styled-components";

type Props ={
    children: string;
    position: string;
    };

    const Titulo = (props: Props) => {
        if (props.position === "center") {
            return (
                <Title>
                    {props.children}
                </Title>
            );
        } else {
            return (
                <TitleLeft>
                    {props.children}
                </TitleLeft>
            );
        }
    };

const Title = styled.h1`
    font-size: 1.5rem;
    color: #cbb173;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    text-align: center;
    font-family: "Iceberg", sans-serif;
    `;

const TitleLeft = styled.h1`
    font-size: 1.5rem;
    color: #cbb173;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    text-align: left;
    font-family: "Iceberg", sans-serif;
    `
export default Titulo;
