import styled from "styled-components";

const LoginPage = () => {

    let primaryColor = "hotpink";

    const Span = styled.span`
    background-color: ${({bg}) => bg};
    color: blue;
    font-size: 30px;
    span{
        background-color: black;
        font-size: 20px;
        color: ${primaryColor}
    }
    `;
    return (
        <div>
            <Span>This is login page.</Span>
            <Span bg="lightgreen">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, culpa tenetur rerum facere cumque deleniti quaerat repellendus consequatur debitis quo, hic <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, sed.
                </span> maiores ea perspiciatis. Nesciunt vitae consequuntur architecto tempora, corrupti ea in, facilis nostrum veritatis aut debitis modi unde molestias sunt accusantium ex corporis aliquid ratione nisi explicabo expedita soluta.</Span>
        </div>
    );
};

export default LoginPage;