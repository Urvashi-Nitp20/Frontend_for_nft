import Navbar from './Navbar'
import CarouselHome from './CarouselHome';
import {styled,Box} from'@mui/material'
import { Fragment } from 'react';
const Compo = styled(Box)`
padding: 10px 10px;
background: #f2f2f2;
`


const Home=()=>{
    return(
        <Fragment>
            <Navbar/>
            <Compo>
            <CarouselHome/>
            </Compo>
           
        </Fragment>
    )
}
export default Home;