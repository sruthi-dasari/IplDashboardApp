import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      //   id,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      //   matchStatus,
    } = latestMatchDetails

    return (
      <div className="latest-match-container">
        <div className="upper-container">
          <div className="details-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="values">{venue}</p>
            <p className="values">{result}</p>
          </div>
          <div className="team-logo-container-small-devices">
            <img
              className="competing-team-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
        </div>
        <div className="team-logo-container-large-devices">
          <img
            className="competing-team-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="seperator" />
        <div className="lower-container">
          <p className="heading">First Innings</p>
          <p className="values">{firstInnings}</p>
          <p className="heading">Second Innings</p>
          <p className="values">{secondInnings}</p>
          <p className="heading">Man of the Match</p>
          <p className="values">{manOfTheMatch}</p>
          <p className="heading">Umpires</p>
          <p className="values">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
