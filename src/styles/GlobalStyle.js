import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --background-color: #C9F0FF; 
    --secondary-color: #6B5E62; 
    --backgroud-dark-color: #002E3D; 
    --border-color: #2e344e;
    --background-light-color: #C9F0FF;
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color:#191D2B; 


}
*{
    padding: 0;
    margin: 0; 
    box-sizing: border-box; 
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif; 
    font-size: 1.2rem;
}
body{
    background-color: var(--backgroud-dark-color); 
    color: var(--font-light-color); 
}
a{
    font-family:inherit; 
    color:inherit;
    font-size: inherit; 
}

h1{
    font-size: 2rem;
    color: red;
    span{
        font-size: 2rem;
        color: black; 
    }
}

`;

export default GlobalStyle;
