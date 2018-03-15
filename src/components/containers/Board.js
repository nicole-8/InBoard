import { connect } from 'react-redux';
import Board from '../ui/Board';

const mapStateToProps = state => (
  {
    title: state.title,
    members: state.members,
  });


export default connect(mapStateToProps)(Board);
