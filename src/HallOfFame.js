import React from 'react'
import PropTypes from 'prop-types'

import './HallOfFame.css'

const HallOfFame = ({entries}) => (
    <table className="hallOfFame">
        <tbody>
        <tr>
            <th>Date</th>
            <th>Tentatives</th>
            <th>Joueur</th>
        </tr>
        {entries.map(({id, date, guesses, player}) => (
            <tr key={id}>
                <td className="date">{date}</td>
                <td className="guesses">{guesses}</td>
                <td className="player">{player}</td>
            </tr>
        ))}
        </tbody>
    </table>
)

HallOfFame.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            guesses: PropTypes.number.isRequired,
            player: PropTypes.string.isRequired
        })
    ).isRequired
}

export default HallOfFame

// == Internal helpers ==============================================

export const FAKE_HOF = [
    {id: 3, guesses: 18, date: '10/10/2017', player: 'Jane'},
    {id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin'},
    {id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa'},
    {id: 0, guesses: 48, date: '14/10/2017', player: 'Marc'},
]