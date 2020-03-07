import { RECEIVE_PETS, RECEIVE_PET } from '../actions/pet_actions';

export default  (oldState = {}, action) => {
    Object.freeze(oldState);
    const pets = {};
    switch (action.type) {
        case RECEIVE_PETS:
            // action.pets.forEach((pet) => {
            //     pets[pet.id] = pet;
            // });
            return action.pets;
        case RECEIVE_PET:
            return Object.assign({}, oldState, { [action.pet.id]: action.pet });
        default:
            return oldState;
    }
};