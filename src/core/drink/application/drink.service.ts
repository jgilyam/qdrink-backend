import { Page, PageImpl } from "../../../common/page.response";
import { DrinkEntity } from "../domain/drink.entity";
import { IDrinkMapper } from "../domain/drink.mapper";
import { IDrinkRepository } from "../domain/drink.repository";
import { DrinkAddDTO } from "../domain/dtos/drink.add.dto";
import { DrinkOutDTO } from "../domain/dtos/drink.out.dto";

export class DrinkService {
  constructor(
    private readonly drinkRepository: IDrinkRepository,
    private drinkMapper: IDrinkMapper
  ) {}

  add = async (drinkAddDTO: DrinkAddDTO): Promise<DrinkOutDTO> => {
    const drinkEntity = await this.drinkRepository.add(drinkAddDTO);
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drinkEntity);
  };

  findAllDrinks = async (): Promise<Page<DrinkOutDTO>> => {
    const drinks = await this.drinkRepository.findAll();
    const drinksOutDTO = drinks.map((drink) =>
      this.drinkMapper.drinkEntityToDrinkOutDTO(drink)
    );
    return new PageImpl(drinksOutDTO, drinksOutDTO.length);
  };

  edit = async (id: string, drinkAddDTO: DrinkAddDTO): Promise<DrinkOutDTO> =>{
    //const drinkToEdit = this.drinkRepository.findById(id);
    console.log(id);
    const drinkEdited = await this.drinkRepository.edit(id, drinkAddDTO);
    
    if(!drinkEdited) throw new Error("Drink Not found");
    
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drinkEdited);
  }

  delete = async (id: string): Promise<DrinkOutDTO> =>{
    const drink = await this.drinkRepository.deleteById(id);
    
    if(!drink) throw new Error("Drink Not found");
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drink);
  }
}