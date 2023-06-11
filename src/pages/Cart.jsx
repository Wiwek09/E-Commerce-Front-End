import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import { Announcement } from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {mobile} from '../responsive'


const Container = styled.div``

const SetMargin = styled.div`
  margin-bottom: 15px;
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:"10px"})};
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 30px;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ?"black" : "transparent" };
  color: ${props=>props.type === "filled" && "white" };
`
const TopTexts = styled.div`
  ${mobile({display:"none"})};
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    font-size: 20px;
    font-weight: 700;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})};
`

const Info = styled.span`
  flex:3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})};
`
const ProductDetail = styled.div`
 flex:2;
 display: flex;
 
`
const Image = styled.img`
  width: 200px;

`

const Details = styled.div`
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.h3``
const ProductId = styled.h4``
const ProductColor = styled.div`
  width:20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`
const ProductSize = styled.h4``

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({margin:"5px 15px"})};
`
const ProductPrices = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom:"20px"})};
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Hr = styled.hr`
  background-color: #eee;
  border:none;
  height: 1px;
`

const Summary = styled.span`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding:20px ;
  height:50vh;
  
`

const SummaryTitle = styled.h1`
  font-weight: 400;
`
const SummaryItem = styled.div`
  margin:30px 0px; 
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "600"};
  font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;

`





const Cart = () => {
  return (
    <Container>
    <SetMargin>
        <Navbar/>
    </SetMargin>
        <Announcement/>
        <Wrapper>
            <Title>Gucchi Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>Info
                <Product>
                    <ProductDetail>
                       <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                       <Details>
                          <ProductName><b>Product:</b> GoldStar Max Shoe</ProductName>
                          <ProductId><b>ID:</b> GLD301</ProductId>
                          <ProductColor color="black" />
                          <ProductSize><b>Size:</b>37.5</ProductSize>
                       </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>1</ProductAmount>
                        <Remove/>
                      </ProductAmountContainer>
                      <ProductPrices>$ 20</ProductPrices>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                       <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                       <Details>
                          <ProductName><b>Product:</b> Philz T-Shirt</ProductName>
                          <ProductId><b>ID:</b> LEV301</ProductId>
                          <ProductColor color="blue" />
                          <ProductSize><b>Size:</b>L</ProductSize>
                       </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>1</ProductAmount>
                        <Remove/>
                      </ProductAmountContainer>
                      <ProductPrices>$ 20</ProductPrices>
                    </PriceDetail>
                </Product>                
                </Info>
                <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subotal</SummaryItemText>
                    <SummaryItemPrice>$ 70</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.1</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Shippping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -4.0</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 500</SummaryItemPrice>
                  </SummaryItem>
                  <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart