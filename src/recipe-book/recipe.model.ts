import * as uuid from 'uuid/v4'



export class Recipe {

  id: string


  constructor(
    public name: string,
    public image: string | null,
    public ingredients: string[],
    public steps: string[],
  ) {
    this.id = uuid()
  }

}


export function makeSampleRecipeList(generatedCount: number = 0): Recipe[] {

  return [

    new Recipe(
      'Cheesy meatballs with spaghetti',
      'http://img.taste.com.au/kT7XmPww/w643-h428-cfill-q90/taste/2016/11/cheesy-meatballs-with-spaghetti-23057-1.jpeg',
      [
        '500g lean beef mince',
        '1 egg, lightly beaten',
        '1 cup grated tasty cheese',
        '1 onion, finely chopped',
        '1/4 cup chopped basil',
        '1 tablespoon olive oil',
        '570g jar tomato, onion & basil chunky sauce',
        '400g Barilla Spaghetti',
        'Basil leaves to serve',
      ],
      [
        'Combine mince, egg, cheese, onion and basil. Season and roll into balls.',
        'Heat oil in a large non-stick frying pan. Cook half the meatballs for 4-5 minutes. Remove and repeat.',
        'Return the meatballs to the pan and pour over sauce. Cover, cook over a medium heat for 20 minutes until cooked through.',
        'Cook spaghetti in a large pan of boiling water, as per packet directions. Drain and place in bowl.'
        + 'Spoon over meatballs and sauce. Serve with basil leaves.',
      ],
    ),

    new Recipe(
      'Baileys after-hours coffee',
      'http://img.taste.com.au/yiHhlX7p/w643-h428-cfill-q90/taste/2016/11/baileys-after-hours-coffee-109637-1.jpeg',
      [
        '50ml Baileys Original Irish Cream',
        '100ml brewed coffee',
        'Chocolate shavings',
      ],
      [
        'Brew coffee.',
        'Pour into a mug.',
        'Add Baileys and stir.',
        'Garnish with chocolate shavings.'
      ],
    ),

    ...generateRecipes(generatedCount),

  ]

}


function* generateRecipes(count: number): IterableIterator<Recipe> {
  for (let i = 0; i < count; i++) {
    yield new Recipe(
      `Generated recipe ${i}`,
      null,
      [],
      [],
    )
  }
}
