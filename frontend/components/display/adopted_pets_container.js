import { getUserPets, getPets } from '../../actions/pet_actions';
import AdoptedPets from './adopted_pets';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        // pets_ids: Object.values(state.entities.users.pet_ids)
        pets: Object.values(state.entities.pets).filter(pet => pet.adopted_by == state.session.id),
        currentUserId: state.session.id 
    }   
};

const mapDispatchToProps = (dispatch) => ({
    getUserPets: (id) => dispatch(getUserPets(id))
    // getPets: (maxId) => dispatch(getPets(maxId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdoptedPets);