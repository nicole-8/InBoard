import React, { PropTypes } from 'react';
import { setStatus } from '../../actions';

const MemberRow = ({ member }) => {
  const changeStatus = () => {
    console.log(member);
    if (member.status === 'OUT') {
      setStatus({
        name: member.name,
        status: 'IN',
      });
    } else {
      setStatus({
        name: member.name,
        status: 'OUT',
      });
    }
  };

  return (
    <tr>
      <td className="uk-text-large">{member.name}</td>
      <td className="uk-table-expand uk-text-center uk-text-primary uk-text-bold">
        {member.status}
      </td>
      <td>
        <button
          className="uk-button uk-button-default uk-table-expand uk-margin"
          type="button"
          onClick={changeStatus}
        >
        Change
        </button>
      </td>
    </tr>
  );
};

MemberRow.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default MemberRow;
