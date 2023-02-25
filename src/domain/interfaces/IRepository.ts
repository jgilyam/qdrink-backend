export interface IRepository<T> {
  save(customer: T): Promise<T | null>;
  findAll(): Promise<T[] | null>;
  findById(customerId: number): Promise<T | null>;
  deleteById(customerId: number): Promise<T | null>;
}
