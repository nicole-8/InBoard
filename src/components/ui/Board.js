import React, { PropTypes } from 'react';
import '../../../stylesheets/uikit/uikit.min.css';
import MemberRow from './MemberRow';

const Board = ({ title, members }) => (
  <div className="board">
    <h1 className="uk-heading-primary uk-text-center">{title}</h1>
    <div className="uk-card uk-card-body uk-margin-left">
      <table className="uk-table uk-table-justify uk-table-divider uk-margin">

        <thead>
          <tr>
            <th className="uk-width-small">Name</th>
            <th className="uk-text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            members.map((member, index) =>
              <MemberRow key={index} member={member} />)
          }
        </tbody>
      </table>
    </div>
  </div>
);

Board.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};

export default Board;
