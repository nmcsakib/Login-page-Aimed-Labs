import styled from "styled-components";

const LoginPage = () => {

    const Wrapper = styled.main`
    height: 90%;
    width: 90%;
    border-radius: 20px;
    /* border: 2px solid gray; */
    background-color: white;
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
    
    
   `;

    const ImageBox = styled.aside`
    
    grid-column: 1 / span 1;
    
   `;
   
    const LoginBox = styled.aside`
    border-radius: 12px;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
    grid-column: 2 / span 2;
    /* min-width: 200px;     */
`;
    return (
        <Wrapper>
            <ImageBox>

            </ImageBox>
            <LoginBox>

            </LoginBox>
        </Wrapper>
    );
};

export default LoginPage;