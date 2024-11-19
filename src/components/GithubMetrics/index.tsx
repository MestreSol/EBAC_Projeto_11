import styled from 'styled-components';

type Props = {
    trophy?: boolean;
    gitHubStatus?: boolean;
    gitHubStreak?: boolean;
};

const Titulo = ({ trophy = false, gitHubStatus = false, gitHubStreak = false }: Props) => {
    return (
        <Title>
            <CardArea>

            {trophy &&
                    <img src="https://github-profile-trophy.vercel.app/?username=MestreSol&theme=onedark" alt="trophy" />
                }
            </CardArea>
            <CardArea>
            {gitHubStatus &&
                    <img src="https://github-readme-stats.vercel.app/api?username=MestreSol&show_icons=true&theme=onedark" alt="github status" />
                }
            {gitHubStreak &&
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=MestreSol&theme=dracula&hide_border=true" alt="github streak" />
                }
                </CardArea>
        </Title>
    );
};

const CardArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 100%;
    height: auto;
`;
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