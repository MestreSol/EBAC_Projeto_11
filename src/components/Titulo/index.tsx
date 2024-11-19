import styled from "styled-components";

type Props ={
    children: string;
    };

    const Titulo = (props: Props) => {
    return (
        <Title>
            {props.children}
        </Title>
    )
    };

const Title = styled.h1`
    font-size: 1.5rem;
    color: #21130d;
    margin: 0;
    margin-top: 10px;
    padding: 0;
    text-align: center;
    font-family: "Iceberg", sans-serif;
    `;
export default Titulo;
