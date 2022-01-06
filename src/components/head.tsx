import styled from "styled-components";

const HeadBlock = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 24px;
    border-bottom: 1px solid #dfe6e9;
    flex-direction: column;
    border-radius: 12px 12px 0 0;
    h1 {
        font-size: 36px;
        font-weight: bold;
    }
    .head-day {
        width: 80%;
        display: flex;
        justify-content: right;
        margin-right: 40px;
        margin-bottom: 12px;
        font-size: 24px;
        color: #636e72;
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
