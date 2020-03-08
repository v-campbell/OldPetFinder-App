# json.array! @pets do |pet|
#     json.partial! 'api/pets/pet', pet: pet
# end

@pets.each do |pet|
    json.set! pet.id do
        json.extract! pet, :id, :name, :breed, :age, :sex, :size, :about, :adopted_by
    end
end