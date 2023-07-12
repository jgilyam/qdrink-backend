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
}