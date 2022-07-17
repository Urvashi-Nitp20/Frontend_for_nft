import {Box, styled, Typography} from '@mui/material'
import { navData } from '../../Data/data';
const StyledBox= styled(Box)`
display:flex;
margin: 55px  130px 0 130px;
justify-content: space-between;
`
const Compo= styled(Box)`
padding :12 px 8px;
text-align: center;
`
const Text= styled(Typography)`
font-size:14px;
font-weight: 600;
font-family:inherit;


`
const Navbar =()=>{
    return(
       <StyledBox style={{}}>
       {
        navData.map(data=>(
            <Compo >
                <img src={data.url}></img>
                <Text>{data.text}</Text>

            </Compo>

        ))
       }
       </StyledBox>
    )
}
export default Navbar;