
export default function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Se requiere un nombre'
    }
    if (input.name.length > 50) {
        errors.name = 'El nombre no puede tener mas de 50 caracteres'
    }
    if (input.price < 1 ) {
        errors.price = 'El precio debe ser mayor a 1'
    }
    if (input.description.length > 1000) {
        errors.description = 'La descripcion no puede tener mas de 1000 caracteres'
    } 
   
    return errors;
}