import styled from "styled-components";

const LoginForm = () => {
    const Form = styled.section`
    height: 90%;
    width: 90%;
   display: flex;
   align-items: center;
   justify-content: center;

    `;

    const FormWrapper = styled.section`
    
        width: 90%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        

        
    h2{
        font-size: 3rem;
        text-align: center;
        color: ${({ theme }) => theme.color.titleTextColor};
        font-weight: 700;

    }
        
`;

    const InputBox = styled.section`
    width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

`;


    const Input = styled.input`
          width: 100%;
          outline: none;
            border-radius: 8px;
            border: 1px solid rgba(4, 7, 47, 0.40);
            padding: 10px;
            
            `;

    const ChangPass = styled.a`
        color: ${({theme}) => theme.color.secondary1};
        cursor: pointer;
        align-self: flex-end;
        &:active{
            color: ${({theme}) => theme.color.secondary2};
        }
    `;

    const CheckBoxWrapper = styled.section`
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 5px;
              align-items: center;     
            
                `;

    const CheckBox = styled.section`
                align-self: flex-start;
                display: flex;
                align-items: center;
                gap: 10px;
            
            `;

    const LoginButton = styled.button`
      width: 50%;
      padding: 12px 10px; 
      background-color: ${({theme}) => theme.color.primary1};
      border: none;
      border-radius: 12px; 
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      &:hover{
        background-color: ${({theme}) => theme.color.primary2};
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.16);
      }

      &:active{
        background-color: ${({theme}) => theme.color.primary1};
      }

      @media (max-width: ${({theme}) => theme.responsive.mobile}) {
      
    width: 80%;
    }
    `;

      const RegisterLink = styled.section`
      span{
        color: ${({theme}) => theme.color.secondary1};
        cursor: pointer;

        &:active{
            color: ${({theme}) => theme.color.secondary2};
        }
      }
      `;
    return (
        <Form>
            <FormWrapper>


                <h2>Login</h2>
                <InputBox>
                    <label htmlFor="loginID">Login ID</label>
                    <Input type="text" placeholder="Enter Login ID" id="loginID" />
                </InputBox>
                <InputBox>
                    <label htmlFor="Password">Password</label>
                    <Input type="password" placeholder="Enter your password" id="Password" />
                    <ChangPass>Change Password</ChangPass>
                </InputBox>
                <CheckBoxWrapper>
                    <CheckBox>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </CheckBox>
                    <CheckBox>
                        <input type="checkbox" id="terms&condition" />
                        <label htmlFor="terms&condition">Agree to <span>Terms & Conditions</span></label>
                    </CheckBox>
                </CheckBoxWrapper>
                <LoginButton>Login</LoginButton>
                <RegisterLink>Don&apos;t have any account? <span>Register now.</span></RegisterLink>
            </FormWrapper>

        </Form>
    );
};

export default LoginForm;