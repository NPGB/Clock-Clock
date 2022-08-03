import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ClockWrapper = styled.div`
    width: 100%;
    max-width: 500px;
`

const ClockInner = styled.div`
    position: relative;
    padding-bottom: 100%;

    border: 2px solid red;
    border-radius: 50%;
`
const SecondHandWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
`

const MinuteHandWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg)
`
const HourHandWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg)
`

const SecondHand = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0) 100%);
`
const MinuteHand = styled.div`
    width: 80%;
    height: 6px;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0) 100%);
`
const HourHand = styled.div`
    width: 40%;
    height: 8px;
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 50%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0) 100%);
`

function Clock(props) {
    let date = new Date();
    const [seconds, setSeconds] = useState(date.getSeconds());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [hours, setHours] = useState(date.getHours());
    
    useEffect(() => {
        let timeInterval = setInterval(() => {
            date = new Date();
            setSeconds(date.getSeconds());
            setMinutes(date.getMinutes());
            setHours(date.getHours());
            console.log(hours);
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        }
    }, [])

    return (
        <ClockWrapper>
            <ClockInner>
                <SecondHandWrapper style={{ transform: `rotate(${seconds ? seconds * 6 + 90 : '90'}deg)` }}>
                    <SecondHand></SecondHand>
                </SecondHandWrapper>
                <MinuteHandWrapper style={{ transform: `rotate(${minutes ? minutes * 6 + 90 : '90'}deg)` }}>
                    <MinuteHand></MinuteHand>
                </MinuteHandWrapper>
                <HourHandWrapper style={{ transform: `rotate(${hours ? hours * 30 + 90 : '90'}deg)` }}>
                    <HourHand></HourHand>
                </HourHandWrapper>
                </ClockInner>
        </ClockWrapper>
    );
}


export default Clock;