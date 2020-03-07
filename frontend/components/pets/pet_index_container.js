import { getPets, getPet, favoritePet, unfavoritePet } from '../../actions/pet_actions';
import PetIndex from './pet_index';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    pets: Object.values(state.entities.pets)
});

const mapDispatchToProps = (dispatch) => ({
    getPets: () => dispatch(getPets()),
    getPet: id => dispatch(getPet(id)),
    favoritePet: id => dispatch(favoritePet(id)),
    unfavoritePet: id => dispatch(unfavoritePet(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PetIndex);