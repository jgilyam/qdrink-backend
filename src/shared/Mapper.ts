export interface Mapper<E, D> {
  entityToDto(raw: D): E;
  dtoToEntity(t: E): D;
}
