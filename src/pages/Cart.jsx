import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';
import pop_product from '../images/pop_product.jpg';
import buy_product from '../images/buy_product.jfif'
import { Remove, Add } from '@material-ui/icons';
import { mobile } from '../responsive';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" :  "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
    flex: 2;
    display:flex;
`;

const Image = styled.img`
    width: 200px;

`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px; 
    ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight:${props => props.type === 'total' && "500"}; 
    font-size:${props => props.type === 'total' && "24px"}; 
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: teal;
    color: white;
    font-weight: 600;
    cursor:pointer;
`;
 


const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
               <Wrapper>
                    <Title>YOUR CART</Title>

                    <Top>
                        <Link to="/">
                            <TopButton>CONTINUE SHOPPING</TopButton>
                        </Link>
                        
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist(0)</TopText>
                        </TopTexts>
                        
                        <Link to="/">
                            <TopButton type="filled">CHECKOUT NOW</TopButton>
                        </Link>
                       
                    </Top>

                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image src={pop_product} />
                                    <Details>
                                        <ProductName><b>Product:</b> WINTER RAINDEER SWEATER</ProductName>
                                        <ProductId><b>ID:</b> 912367345</ProductId>
                                        <ProductColor color="darkblue" />
                                        <ProductSize><b>Size:</b> M</ProductSize>
                                    </Details>
                                </ProductDetail>

                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove/>
                                        <ProductAmount>2</ProductAmount>
                                        <Add/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ 30</ProductPrice>
                                </PriceDetail>
                            </Product>

                            <Hr/>

                            <Product>
                                <ProductDetail>
                                    <Image src={buy_product} />
                                    <Details>
                                        <ProductName><b>Product:</b> WINTER BLACK SWEATER</ProductName>
                                        <ProductId><b>ID:</b> 912367350</ProductId>
                                        <ProductColor color="black" />
                                        <ProductSize><b>Size:</b> L</ProductSize>
                                    </Details>
                                </ProductDetail>

                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove/>
                                        <ProductAmount>2</ProductAmount>
                                        <Add/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ 30</ProductPrice>
                                </PriceDetail>
                            </Product>
                        </Info>
                        
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                          
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ 80</SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ 80</SummaryItemPrice>
                            </SummaryItem>

                            <Link to="/">
                                <Button>CHECKOUT NOW</Button>
                            </Link>
                            
                        </Summary>
                    
                    </Bottom>   
                </Wrapper> 
                <Footer />
        </Container>
    )
}

export default Cart;
