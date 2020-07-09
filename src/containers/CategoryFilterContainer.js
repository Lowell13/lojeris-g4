import { connect } from 'react-redux';
import FilterCategory from '../components/FilterBuildingsList/Filter/FilterCategory';

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories.categories,
    districts: state.districts.districts
});

export default connect(
    mapStateToProps
)(FilterCategory);
