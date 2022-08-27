// [Partial] :: makes the rest of the properties optional.
interface Starship {
    name: string;
    jump: boolean;

}

const updateStarShip = (id: number, star: Partial<Starship>) => { return { id, star } }

updateStarShip(123, { name: "Name" })

// [Pick] ::  the typess
const updateStarShipPick = (id: number, star: Pick<Starship, 'name'>) => { return { id, star } }


// [Omit] :: Inherit eveything except
const updateStarShipOmit = (id: number, star: Omit<Starship, 'name'>) => { return { id, star } }


// [Exclude] :: Excludes the type example undefined.

type AvailableDrinks = "coffee" | "tea" | "orange juice";

let johnsDrink: AvailableDrinks;

type DrinksJaneDoesntLike = 'coffee' | "tea" | "Mohito"
type JanesDrinkCanHave = Exclude<AvailableDrinks, DrinksJaneDoesntLike>


type JanesPrefers = 'coffee' | "tea" | "Mohito"
type JanesDrinkLikes = Extract<AvailableDrinks, JanesPrefers>


// 