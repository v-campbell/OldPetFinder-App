export const fetchPets = (maxId) => $.ajax({
    url: '/api/pets',
    data: { maxId }
});

export const fetchPet = id => $.ajax({
    method: 'GET',
    url: `/api/pets/${id}`
});

export const addFavoriteToPet = id => $.ajax({
    url: '/api/favorites',
    method: 'POST',
    data: { id }
});

export const removeFavoriteFromPet = id => $.ajax({
    url: `/api/favorites`,
    method: 'DELETE',
    data: { id }
});

export const addAdoptToPet = id => $.ajax({
    url: `/api/pets/adopt/${id}`,
    method: 'PATCH',
    data: { id }
});

export const removeAdoptFromPet = id => $.ajax({
    url: `/api/pets/unadopt/${id}`,
    method: 'DELETE',
    data: { id }
});