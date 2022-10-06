import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import styled from 'styled-components';


const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 20px;
`;


const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
    fonst-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`;

const Option = styled.option`

`;

const ProductList = () => {
    return (
        <Container>       
            <Announcement />
            <Navbar />

            <Title>Sweaters</Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                       <Option disabled selected>Color</Option>
                       <Option>Red</Option> 
                       <Option>Black</Option> 
                       <Option>Green</Option>
                       <Option>Yellow</Option>   
                    </Select>

                    <Select>
                       <Option disabled selected>Size</Option>
                       <Option>XS</Option> 
                       <Option>S</Option>
                       <Option>M</Option> 
                       <Option>L</Option>
                       <Option>XL</Option>   
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Products:</FilterText>

                    <Select>
                       <Option selected>Newest</Option>
                       <Option>Price (asc)</Option> 
                       <Option>Price (desc)</Option> 
                    </Select>
                 
                </Filter>
            </FilterContainer>

            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList
