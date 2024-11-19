import styled from "styled-components"
import Titulo from "../../components/Titulo"
import Avatar from "../../components/Avatar"

const Sidebar: React.FC = () => {
  return (
    <AvatarArea>
        <Avatar userName="MestreSol"/>
        <Titulo>Mestre Sol</Titulo>
    </AvatarArea>
  )
}

const AvatarArea = styled.div`
  margin:10px;
  content-align: center;
  justify-content: center;

`

export default Sidebar
