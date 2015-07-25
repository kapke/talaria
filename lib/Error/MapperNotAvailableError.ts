function MapperNotAvailableError (name:string):Error {
    return new Error(`Mapper named ${name} is not resolved yet`);
}
export default MapperNotAvailableError;