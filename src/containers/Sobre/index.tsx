import styled from "styled-components";
import Titulo from "../../components/Titulo"

const Sobre = () => {
    return (
        <section>
            <SectionTitle>
                <Titulo position="left">Sobre</Titulo>
            </SectionTitle>
        <Paragraph>
        It is an honor to have you view my profile. Im João, Fullstack developer and Computer Engineer from Campinas, São Paulo. Im passionate about creating solutions that make technology accessible and effective for everyone
        </Paragraph>
        </section>
    )
}

const Paragraph = styled.p`
    font-size: 1rem;
    color: #c7696c;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0;
    text-align: justify;
    font-family: "Iceberg", sans-serif;
    `;

const SectionTitle = styled.div`
    font-size: 1.5rem;
    color: #c7696c;
    margin: 0;
    margin-top: 50px;
    padding: 0;
    text-align: left;
    font-family: "Iceberg", sans-serif;
    `;

export default Sobre
