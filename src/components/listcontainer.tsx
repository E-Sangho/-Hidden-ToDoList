import styled from "styled-components";

interface IListBlock {
    children?: React.ReactNode;
}

const ListContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 100%;
    height: 80vh;
    max-height: 70%;
`;

function ListContainer({ children }: IListBlock) {
    return <ListContainerBlock>{children}</ListContainerBlock>;
}

export default ListContainer;
