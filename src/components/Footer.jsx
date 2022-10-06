import { Facebook, Instagram, MailOutline, Twitter, Room, Phone } from '@material-ui/icons';
import {mobile} from '../responsive';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 20px;
`;

const Centre = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#eee"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DAROGA.</Logo>
                <Description>
                    This is a ecommerce page
                </Description>

                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon> 

                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Centre>
                <Title>Useful Link</Title>

                <Link to="/" style={{textDecoration:"none"}}>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
                </Link>
            </Centre>

            <Right>
                <Title></Title>

                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 222 Collins Street, Melbourne CBD, 3000
                </ContactItem> 
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +61 123 12345
                </ContactItem>    
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contact@daroga.dev
                </ContactItem>  

            </Right> 
        </Container>
    )
}

export default Footer
