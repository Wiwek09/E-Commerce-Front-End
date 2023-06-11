import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import { Announcement } from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import {mobile} from '../responsive'

const Container = styled.div`

`

const SetMargin = styled.div`
  margin-bottom: 15px;
`
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({flexDirection:"column"})};
`

const ImgContainer = styled.div`
  flex:1;
`

const Image = styled.img`
  width:100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})};
`
const InfoContainer = styled.div`
  flex:1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})};
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin:30px 0px;
  width :50% ;
  ${mobile({width:"100%"})};
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200px;
`

const FilterColor = styled.div`
  width:20px;
  height:20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin:0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})};
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border:2px solid teal;
  background-color: white;
  font-weight: 500;
  cursor: pointer;

  &:hover{
    background-color: #f8f4f4;
  }

`

const Title = styled.h1`
  font-weight: 300;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 50px;
`
 
export const Product = () => {
  return (
    <Container>
    <SetMargin>
        <Navbar/>
    </SetMargin>
        <Announcement/>
        <Wrapper>
          <ImgContainer>
            <Image src = "https://i.ibb.co/S6qMxwr/jean.jpg" />
          </ImgContainer> 
        <InfoContainer>
            <Title>Jeans Paint</Title>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora itaque id quasi officia exercitationem illo voluptatum cupiditate ab, necessitatibus magnam recusandae maxime nemo deleniti eos et eveniet odio non. Temporibus?</Desc>
            <Price>$ 7</Price>
        <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
            </Filter>
        </FilterContainer>
        <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
        </AddContainer>
        </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}


export default Product
