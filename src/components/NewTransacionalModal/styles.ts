
import styled from "styled-components";

interface RadioBoxProps{
    $isActive:boolean;
    $activeColor: `green` | `red`
}

const colors = {
    green: '#015F43',
    red: '#F75A68'
}

export const Container = styled.form`

    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: var(--input-background);
        color: #fff;
        font-weight: 400;
        font-size: 1rem;
        border: 0;

        &::placeholder{
            color: var(--text-body);
        }
        & + input{
            margin-top: 1rem;
        }
    }
    button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem; //16 * 0,25 = 16px
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }

`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

`;

export const RadioBox = styled.button<RadioBoxProps>`
        height: 4rem; // 4*166 = 64px
        border: 0;
        border-radius: 0.25rem; // 0.25 * 16 = 4px
        background: ${(props) => props.$isActive ? colors[props.$activeColor] : 'transparent'};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in-out;
        /* &:hover{
            background:rgb(35, 35, 39);
        } */
        img{
            width: 20px;
            height: 20px;
        }
        span{
            display:inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`