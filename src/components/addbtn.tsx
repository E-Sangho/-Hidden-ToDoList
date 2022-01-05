import styled from "styled-components";

interface InputProps {
    bgColor: string;
}

const Input = styled.input<InputProps>`
    border:none;
    background-color: ${(props) => props.bgColor};
    width: 100px
    height: 40px;
    border-radius: 50%;
`;

function AddBtn({ bgColor }: InputProps) {
    return <Input bgColor={bgColor} />;
}

export default AddBtn;
