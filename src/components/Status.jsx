import React from 'react'

const Status = props => {
    const {winner, nextPlayer } = props;
    const status = winner ? `You're Winner ${winner} !!!` : `Next Player: ${nextPlayer}`; 
    return <div className="status">{status}</div> 
}

export default Status;