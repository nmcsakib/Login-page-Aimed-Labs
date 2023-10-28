import styled from "styled-components";
import LoginForm from "./LoginForm";

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
    display: grid;
    place-items: center;
    img{
        height: 95%;
        width: 100%;
    }
   `;

    const LoginBox = styled.aside`
    display: grid;
    place-items: center;
    border-radius: 12px;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
    grid-column: 2 / span 2;
`;
    return (
        <Wrapper>
            <ImageBox>
                <img src="https://img.freepik.com/premium-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg?w=740" alt="illustration-cartoon-female-user-entering-login" />
            </ImageBox>
            <LoginBox>
                <LoginForm />
            </LoginBox>
        </Wrapper>
    );
};

export default LoginPage;