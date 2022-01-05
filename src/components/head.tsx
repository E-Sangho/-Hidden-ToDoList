import styled from "styled-components";

const HeadBlock = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 24px;
    border-bottom: 1px solid;
    flex-direction: column;
    background-color: #00cec9;
    border-radius: 12px 12px 0 0;
    h1 {
        font-size: 36px;
        color: #0984e3;
        font-weight: bold;
    }
    .head-day {
        width: 80%;
        display: flex;
        justify-content: right;
        margin-right: 40px;
        font-size: 24px;
    }
`;

function ToDoHead() {
    const week = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = week[today.getDay()];
    return (
        <HeadBlock>
            <h1>
                {year}년 {month}월 {date}일
            </h1>
            <div className="head-day">{day}</div>
        </HeadBlock>
    );
}

export default ToDoHead;
