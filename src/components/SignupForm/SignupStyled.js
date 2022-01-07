import styled from "styled-components";

export const FormWrap = styled.div`
  .row {
    display: flex;
    flex-direction: row;
    width: 75%;
    margin: auto;
  }
  .control {
    display: flex;
    flex-direction: column;
  }
  .label {
    margin-bottom: -3px;
    margin-left: -10px;
  }
  .input-error {
    border-color: $error-color;
    padding: 5px;
  }
  .input {
    padding: 5px;
    margin-bottom: 10px;
  }
  .input:focus {
    outline: 2px solid blue;
  }
  .error {
    color: red;
    font-size: 1rem;
    margin-top: -0.3rem;
  }

  .disabled-btn {
    cursor: not-allowed;
    background: #2636c3;
    opacity: 0.5;
    color: white;
    padding: 8px;
    margin: 10px auto 0 auto;
  }
  .button {
    background-color: #2636c3;
    color: white;
    padding: 8px;
    margin: 10px auto 0 auto;
  }
  @media screen and (max-width: 768px) {
    .row {
      width: 100%;
    }
  }
`;
