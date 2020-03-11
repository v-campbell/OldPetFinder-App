import React from 'react';
import PetIndexItem from './pet_index_item';

class PetIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPets();
        window.scrollTo(0,0);
    }

    
    render() {
        

        // const {pets} = this.props;
        return (
            <div className='pet-index'>
                {/* <div className='pet-index-header'>
                    All Pets
                </div>
                <div className='pet-index-subheader'>
                    look at them
                </div> */}
                <div className='container'>
                    {/* <div className='pet-index-banner'>
                        ⊷ ALL PETS ⊷
                    </div> */}
                    <label for="checkbox" className='all-pets-banner'>↓ ALL PETS ↓</label>
                    <input id="checkbox" type="checkbox"/>
                        <ul className="all-pets-grid">
                            <div className='petGrid'>
                                {this.props.pets.map(pet =>
                                    <PetIndexItem
                                        key={`pet${pet.id}`}
                                        pet={pet}
                                        id={pet.id}
                                        photoUrls={pet.photoUrls}
                                    // favoritePet={this.props.favoritePet}
                                    // unfavoritePet={this.props.unfavoritePet} 
                                    />
                                )}
                            </div>
                        </ul>

                </div>
            </div>
        )
    }
}

export default PetIndex;
