import styled from "styled-components";

const ChampionPickSplash = styled.div`
    height: 100%;
    width: 100%;

    transition: background-color 0.5s ease, opacity 0.75s;

    border-width: 0px;

    ${({ blank }) => blank ?
        `
        background-size: 15%;
        background-color: #141414;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    `
        :
        `
        background-size: 100%;
        background-position: 20% 25%;
    `}

    ${({ active }) => active === true &&
        `
        animation: pick-shadow 3s infinite;
        
        @keyframes pick-shadow {
            50% {box-shadow: inset 0px 0px 40px white;}
        }
    `}
`;

const ChampionName = styled.div`
    color: white;
    font-weight: 500;
    position: absolute;
    left: 10px;
    bottom: 35px;
`;

export const PlayerName = styled.div`
    color: white;
    font-weight: 700;
    font-type: italic;
    font-size: 30px;
    position: absolute;
    left: 10px;
    bottom: 0;
`;

const Pick = styled.div`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #141414;
    flex-grow: 1;
    overflow: hidden;

    & > input {
        position: absolute;
        bottom: 5px;
        width: 90%;
        height: 24px;
        padding: 4px 8px;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.9);
        color: #222;
        font-size: 11px;
        outline: none;
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
        
        &:focus {
            box-shadow: 0 0 0 2px rgba(244, 138, 60, 0.7);
        }
    }

    & > ${ChampionName} {
        bottom: 35px;
    }

    & > ${ChampionName}, input {
        ${({ team }) => team === "blue" ?
        `
            right: 5%;
            text-align: right;
        ` :
        `
            left: 5%;
            text-align: left;
        `}
    }
`;

var roles = ["top", "jungle", "middle", "bottom", "utility"];

const PickComponent = ({ team, idx, slot, champion, currentSlot, handlePlayerIGNs, onDragStart, onDragOver, onDrop }) => {
    var urlBG = champion === "" ? require(`../../../images/role-${roles[idx]}.png`).default : require(`../../../images/cache/11.21.1/champion/${champion.replace(/[^A-Z0-9]/ig, "")}_centered_splash.jpg`).default;
    var pickID = `"pick_${team}_${idx}"`;

    return (
        <Pick team={team} id={pickID} key={slot} slot={slot} draggable="true" onDragStart={onDragStart(pickID)} onDragOver={onDragOver(pickID)} onDrop={onDrop(pickID, team)}>
            <ChampionPickSplash
                blank={champion === "" ? true : false}
                active={slot === currentSlot ? true : false}
                style={{ backgroundImage: `url(${urlBG})` }}
                id={`"pick_${team}_splash_${idx}"`}
            />
            <ChampionName id={`"pick_${team}_champ_${idx}"`}>{champion}</ChampionName>
            <input id={`"pick_${team}_ign_${idx}"`} placeholder={`Player ${team === "blue" ? idx : idx + 5}'s IGN`} onBlur={(e) => handlePlayerIGNs(e, team === "blue" ? idx : idx + 5)}></input>
        </Pick>
    );
};

export default PickComponent;