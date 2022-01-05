import styled from "styled-components";

interface IContainer {
    children?: React.ReactNode;
}

const Block = styled.div`
    width: 60%;
    height: 80vh;
    background-color: white;
    margin: 0 auto;
    margin-top: 72px;
    border-radius: 12px;
    display: flex;
`;

function Container({ children }: IContainer) {
    return <Block>{children}</Block>;
}

export default Container;
