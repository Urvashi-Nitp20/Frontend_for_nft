
import{InputBase, Box,styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
 const SearchCont= styled(Box)`
 background : #fff;
 width : 38%;
 border-radius: 2px;
 margin-left: 20px;
 font-size: unset;
 display: flex;

 `
 const InputSearchBar= styled(InputBase)`
 padding-left: 20px;
 width: 100%;
 
 `
 const SearchStyledIcon=styled(Box)`
 color:  blue;
 padding:5px;
 
 `

 
const Search =()=>{
    return(
        <SearchCont>
            <InputSearchBar
            placeholder='Search for products, brands and more'/>
            <SearchStyledIcon>
                <SearchIcon>

                </SearchIcon>
            </SearchStyledIcon>
        </SearchCont>
        
    )
        
    
}
export default Search;