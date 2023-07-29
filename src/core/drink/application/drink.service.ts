import { Page, PageImpl } from "../../../common/page.response";
import { DrinkEntity,IDrinkMapper, IDrinkRepository, DrinkInDTO, DrinkOutDTO, DrinkNotFoundException } from "../domain";

export class DrinkService {
  constructor(
    private readonly drinkRepository: IDrinkRepository,
    private readonly drinkMapper: IDrinkMapper
  ) {}

  add = async (salePointId: string, drinkAddDTO: DrinkInDTO): Promise<DrinkOutDTO | null> => {
    const drinkEntity = await this.drinkRepository.add(salePointId, drinkAddDTO);
    
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drinkEntity);
  };

  findAllDrinks = async (salePointId: string): Promise<Page<DrinkOutDTO | null>> => {
    const drinks = await this.drinkRepository.findAll(salePointId);
    const drinksOutDTO = drinks.map((drink) =>
      this.drinkMapper.drinkEntityToDrinkOutDTO(drink)
    );
    
    return new PageImpl(drinksOutDTO, drinksOutDTO.length);
  };

  edit = async (drinkId: string, drinkAddDTO: DrinkInDTO): Promise<DrinkOutDTO | null> =>{
    await this.findDrinkEntityById(drinkId);
    const drinkEdited = await this.drinkRepository.edit(drinkId, drinkAddDTO);
    
    return this.drinkMapper.drinkEntityToDrinkOutDTO(drinkEdited);
  }

  delete = async (drinkId: string): Promise<DrinkOutDTO | null> =>{
    await this.findDrinkEntityById(drinkId);
    const drink = await this.drinkRepository.deleteById(drinkId);
    
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