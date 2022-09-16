import styled from "styled-components";

interface IProps {
  width?: string;
}

export const ButtonContainer = styled.div`
  padding: 5px;
`;

export const InputButton = styled.input<IProps>`
   {
    width: ${(props) => (props.width ? props.width : 0)}%;
    background-image: linear-gradient(#f7f8fa, #e7e9ec);
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    box-shadow: rgba(255, 255, 255, 0.6) 0 1px 0 inset;
    box-sizing: border-box;
    color: #0f1111;
    cursor: pointer;
    display: inline-block;
    font-family: "Amazon Ember", Arial, sans-serif;
    font-size: 14px;
    height: 29px;
    font-size: 13px;
    outline: 0;
    overflow: hidden;
    padding: 0 11px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
  }

  :active {
    border-bottom-color: #a2a6ac;
  }

  :active:hover {
    border-bottom-color: #a2a6ac;
  }

  :hover {
    border-color: #a2a6ac #979aa1 #82858a;
  }

  :focus {
    border-color: #e77600;
    box-shadow: rgba(228, 121, 17, 0.5) 0 0 3px 2px;
    outline: 0;
  }
`;
