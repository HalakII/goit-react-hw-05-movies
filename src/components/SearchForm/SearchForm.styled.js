import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchDiv = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px;
  z-index: 10;
  margin: 0 auto;
  background-color: #58b692;
`;
export const StyledSearchIcon = styled(IoSearchOutline)`
  color: #ffff;
  font-size: 30px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  max-width: 600px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-size: 40%;
    background: #964262;
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    padding: 3px;
  }

  button:hover {
    opacity: 1;
  }

  span {
    font-size: 30px;
  }

  button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 20px;
    padding-right: 4px;
    background: transparent;
    color: black;
  }

  input::placeholder {
    font: inherit;
    font-size: 18px;
    color: black;
  }
`;
