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
    padding: 20px;
    box-sizing: border-box;
`
export const Options = styled.div`
    width: 100%;
    color: white;
    background-color: #232736;
    display: flex;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    z-index: 2;
`
export const UnorderedList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
    padding: 15px 25px;
    margin: 0;
`

export const ListItem = styled.li`
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.2s ease;

  color: ${(props) => (props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.6)")};
  background-color: ${(props) => (props.$active ? "#F48A3C" : "transparent")};

  &:hover {
    color: #ffffff;
    background-color: ${(props) => (props.$active ? "#F48A3C" : "rgba(255, 255, 255, 0.1)")};
  }
`;

export const ChampionsContainer = styled.div`
    width: 100%;
    height: 480px;
    background-color: #1a1c29;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 15px;
    box-sizing: border-box;
    overflow: auto;
    box-shadow: inset 0 4px 10px rgba(0,0,0,0.5);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    /* Custom Scrollbar */
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #1a1c29;
        border-bottom-right-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: #3e445e;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #565e82;
    }
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
    padding: 15px 40px;
    margin: 20px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;

    ${props =>
        props.disabled ?
            `background-color: #6c7086;
             color: #a6adc8;
             cursor: not-allowed;
             box-shadow: none;`
            :
            `background-color: #F48A3C;
             &:hover {
                 background-color: #f7a063;
                 transform: translateY(-2px);
                 box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
             }
             &:active {
                 transform: translateY(0);
                 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
             }`
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