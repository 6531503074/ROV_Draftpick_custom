import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    background-color: #181A28;
`

export const Input = styled.input`
    height: 28px;
    width: 100%;
    padding: 4px 8px;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    color: #222;
    font-size: 13px;
    outline: none;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
    
    &:focus {
        box-shadow: 0 0 0 2px rgba(244, 138, 60, 0.7);
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4px 5px;
    align-items: stretch;
`;

export const Label = styled.label`
    color: rgba(255, 255, 255, 0.9);
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const BarContainer = styled.div`
    position: relative;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #1a1c29;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
    z-index: 10;
`;

export const TeamInfoContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 60%;
`;

export const TeamBar = styled.div`
    position: relative;
    top: 0;
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;

    ${({ team }) => team === 'blue' && (`
        left: 0px;
        background-color: #0e97a7;
    `)}

    ${({ team }) => team === 'red' && (`
        right: 0px;
        background-color: #c01f32;
    `)}

    & > ${InputGroup} {
        width: 30%;
    }
`;

export const GameInfoBar = styled.div`
    width: 30%;
    height: auto;
    margin: 0 auto;
    padding: 15px 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 15px;
    align-items: center;
    justify-content: center;
    
    ${InputGroup} {
        align-items: center;
        margin: 0;
    }
    
    ${Input} {
        text-align: center;
    }
`

export const PicksContainer = styled.div`
    width: 300px;
    height: 600px;
    display: flex;
    flex-direction: column;
`
export const BansContainer = styled.div`
    height: 80px;
    display: flex;
    flex-direction: row;
`

export const SelectionContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
`
export const Options = styled.div`
    width: 90%;
    color: white;
    background-color: black;
    display: flex;
`
export const UnorderedList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;

`

export const ListItem = styled.li`
  cursor: pointer;

  color: ${(props) => (props.$active ? "#F48A3C" : "inherit")};

  &:hover {
    color: #F48A3C;
  }
`;

export const ChampionsContainer = styled.div`
    width: 90%;
    height: 400px;
    background-color: #191919;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow: auto;
    box-shadow: inset 0 0 10px #000000;
`
export const Champion = styled.div`
    width: 60px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ChampionName = styled.span`
    color: white;
    font-size: 10px;
    text-align: center;
    margin-top: 5px;
    line-height: 1.2;
    word-break: break-word;
`

export const ChampionSplash = styled.div`
    width: 60px;
    height: 60px;
    background-size: cover;
`
export const Button = styled.button`
    border: none;
    color: white;
    padding: 20px 50px;
    margin: 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    ${props =>
        props.disabled ?
            `background-color: #9C6E4B;`
            :
            `background-color: #F48A3C;`
    }
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const BlueContainer = styled.div``

export const RedContainer = styled.div`
    & > ${BansContainer} {
        direction: rtl;
    }
`

export const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`