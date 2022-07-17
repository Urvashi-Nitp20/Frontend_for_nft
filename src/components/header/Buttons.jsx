
import{Box, Button, Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const Wrap= styled(Box)`
display: flex;
margin: 0 3% 0 auto;
justify-content: center;
& >button,&>p,&>div{
    margin-right:60px;
    font-size: 16px;
    align-items: center;
    

}
`
const LoginButton= styled(Button)`
color:#2874f0;
background:  #ffffff;
text-transform: none;
padding : 5px 40px;
border-radius: 2px;
box-shadow: none;
font-weight: 600;
height:12 px;
`
    

const Buttons =()=>{
 return (
   < Wrap>
    <LoginButton variant='contained'>
        Login
    </LoginButton>
    <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
    <Typography style={{marginTop: 3}}> More</Typography>
    <Box style={{display:"flex"}}>
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
    </Box>
   </Wrap>
    
 )
}
export default Buttons;