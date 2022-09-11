import styled from 'styled-components';
import { AiOutlineCheckSquare, AiFillDelete } from 'react-icons/ai';

const CheckSquare = styled(AiOutlineCheckSquare)`
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
`;

const Delete = styled(AiFillDelete)`
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
`;

const Card = styled.div`
    width: 329px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 5px;
    display: flex;
    margin : 20px auto;
    flex-direction: column;
    justify-content: space-between;
    .card-title {
        font-size: 20px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 10px;
    }
    .card-text {
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.primary};
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        justify-content: space-between;
        .card-button-delete {
            background-color: ${({ theme }) => theme.colors.danger};
            color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.white};
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 16px;
            margin-left: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
                background-color: ${({ theme }) => theme.colors.dangerDark};
            }
        }
        .card-button-check {
            background-color: ${({ theme }) => theme.colors.success};
            color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.white};
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 16px;
            margin-left: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
                background-color: ${({ theme }) => theme.colors.successDark};
            }
        }
    }
    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card-footer-left {
            display: flex;
            align-items: center;
            .card-footer-left-text {
                font-size: 16px;
                font-weight: 400;
                color: ${({ theme }) => theme.colors.primary};
                margin-left: 10px;
            }
        }
        .card-footer-right {
            display: flex;
            align-items: center;
            .card-footer-right-text {
                font-size: 16px;
                font-weight: 400;
                color: ${({ theme }) => theme.colors.primary};
                margin-right: 10px;
            }
        }
    }
`;

export { Card, CheckSquare, Delete };
