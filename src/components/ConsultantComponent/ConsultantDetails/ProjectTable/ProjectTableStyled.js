import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    margin: 1px;
`

export const Select = styled.select`
    padding: 5px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    width: 300px;
    height: 50px;

    ::placeholder{
        background-color: yellow;
    }

    :focus {
        outline: none;

    }
`

export const Span = styled.span`
color: blue;
    .on{
        background-color: green;
    }
` 
export const SearchBar = styled.input`
    
    width: 300px;
    height: 50px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
   

    ::placeholder{
        padding:12px;
        
    }

    :focus {
        outline: none;

    }
     
` 