import { Page, PageImpl } from "../../../common/page.response";
import { DrinkEntity } from "../domain/drink.entity";
import { IDrinkMapper } from "../domain/drink.mapper";
import { IDrinkRepository } from "../domain/drink.repository";
import { DrinkAddDTO } from "../domain/dtos/drink.add.dto";
import { DrinkOutDTO } from "../domain/dtos/drink.out.dto";
import { DrinkNotFoundException } from "../domain/errors/drink.notFound.exception";

export class DrinkService {
  constructor(
    private readonly drinkRepository: IDrinkRepository,
    private drinkMapper: IDrinkMapper
  ) {}

  add = async (drinkAddDTO: DrinkAddDTO): Promise<DrinkOutDTO | null> => {
    const drinkEntity = await this.drinkRepository.add(drinkAddDTO);
    
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drinkEntity);
  };

  findAllDrinks = async (): Promise<Page<DrinkOutDTO | null>> => {
    const drinks = await this.drinkRepository.findAll();
    const drinksOutDTO = drinks.map((drink) =>
      this.drinkMapper.drinkEntityToDrinkOutDTO(drink)
    );
    
    return new PageImpl(drinksOutDTO, drinksOutDTO.length);
  };

  edit = async (id: string, drinkAddDTO: DrinkAddDTO): Promise<DrinkOutDTO | null> =>{
    this.findDrinkEntityById(id);
    const drinkEdited = await this.drinkRepository.edit(id, drinkAddDTO);
    
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drinkEdited);
  }

  delete = async (id: string): Promise<DrinkOutDTO | null> =>{
    await this.findDrinkEntityById(id);
    const drink = await this.drinkRepository.deleteById(id);
    
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drink);
  }

  private findDrinkEntityById = async (id: string): Promise<DrinkEntity> =>{
    const drinkEntity = await this.drinkRepository.findById(id);
    if(!drinkEntity) throw new DrinkNotFoundException();
    
    return drinkEntity;
  }

  findById = async (id: string): Promise<DrinkOutDTO | null> =>{
    const drinkEntity = await this.findDrinkEntityById(id);    
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drinkEntity);
  }
}