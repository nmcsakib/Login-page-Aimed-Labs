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
    position: relative;

    @media (max-width: ${({theme}) => theme.responsive.mobile}) {
        display: flex;
        flex-direction: column;
}
    @media (max-width: ${({theme}) => theme.responsive.tablet}) {
     
}
   `;

    const ImageBox = styled.aside`
    
    grid-column: 1 / span 1;
    display: grid;
    place-items: center;
    img{
        height: 100%;
        width: 100%;
    };
   
    @media (min-width: ${({theme}) => theme.responsive.mobile}) and (max-width: ${({theme}) => theme.responsive.tablet}) {

        img{
        height: 40%;
        width: 100%;
    };
    }
    @media (min-width: ${({theme}) => theme.responsive.tablet}) and (max-width: ${({theme}) => theme.responsive.laptop}) {

        img{
        height: 50%;
        width: 100%;
    };
    }
   `;

    const LoginBox = styled.aside`
    display: grid;
    place-items: center;
    border-radius: 12px;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
    grid-column: 2 / span 2;
    padding: 15px 0;
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