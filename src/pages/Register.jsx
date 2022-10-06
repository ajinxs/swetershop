import styled from "styled-components";
import { mobile } from "../responsive";
import register_photo from '../images/register_page_photo.jpg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    // // background: linear-gradient(
    // //     rgba(255,255,255,0.5), 
    // //     rgba(255,255,255,0.5)
    // // ), 
    background:url(${register_photo})
    center;
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;     
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    pading: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    
                    <Agreement>
                        By creating the account I contest to the processing of my personal 
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>

                    <Button>CREATE</Button>
                </Form>    
            </Wrapper>          
        </Container>
    )
}

export default Register
