import styled from 'styled-components';

const SaveFormStyled = styled.div`
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0; 
    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.white};
    padding: 50px;
    .container {
        padding: 0;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }
    .form-group {
        margin-bottom: 1rem;
    }
    label {
        display: inline-block;
        margin-bottom: 0.5rem;
    }
    input,
    textarea {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    input[type="text"] {
        height: calc(1.5em + 0.75rem + 2px);
    }
    textarea {
        height: calc(3em + 0.75rem + 2px);
    }
    input:focus,
    textarea:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    input::placeholder,
    textarea::placeholder {
        color: #6c757d;
        opacity: 1;
    }
    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }
    input::-ms-input-placeholder,
    textarea::-ms-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }
    input:disabled,
    textarea:disabled {
        background-color: #e9ecef;
        opacity: 1;
    }
`;

export default SaveFormStyled;
