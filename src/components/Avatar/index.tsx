import styled from "styled-components";

type Proper = {
    userName: string;
}
const Avatar = (proper: Proper) => {
    return (
        <ImageContainer>
            <img src={`https:\\github.com\\${proper.userName}.png`} alt={proper.userName} />
        </ImageContainer>
    );
}
const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 0 auto;
    object-fit: cover;
`
export default Avatar;
