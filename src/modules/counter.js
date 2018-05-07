export const INCREMENT_REQUESTED = "counter/INCREMENT_REQUESTED";

const initialState = {
  count: 1,
  menu: [
    {
      title: "Starters",
      category: {
        subCategory: [
          {
            name: "VEGETARIAN APPETIZER",
            items: [
              {
                itemName: "Chilli Bajji",
                description: "Chilies battered and deep fried with desi style",
                price: "$5.95"
              },
              {
                itemName: "Curry Bowl Veg Platter",
                description:
                  "Combination of cut mirchi, cutlet, pakora, samosa and vada",
                price: "$8.95"
              },
              {
                itemName: "Cut Mirchi",
                description:
                  "Chillibajji refried and sprinkled with onions, chat masala",
                price: "$5.95"
              },
              {
                itemName: "Mixed Vegetable Pakora",
                description:
                  "Fresh mixed vegetables coated with chickpeas flour and deep fried",
                price: "$4.95"
              },
              {
                itemName: "Onion Pakora",
                description:
                  "Freshly sliced onions coated with chickpeas flour and deep fried",
                price: "$3.99"
              },
              {
                itemName: "Spinach Pakora",
                description:
                  "Fresh spinach coated with chickpeas flourand deep fried",
                price: "$3.95"
              },
              {
                itemName: "Vegetable Cutlet",
                description: "",
                price: "$5.95"
              },
              {
                itemName: "Vegetable Samosa",
                description:
                  "Crispy turnovers with seasoned potatoes and green peas",
                price: "$3.95"
              }
            ]
          },
          {
            name: "NON-VEGETARIAN APPETIZER",
            items: [
              {
                itemName: "Egg Pakora",
                description:
                  "Fresh boiled eggs coated with chickpea flour and deep fried",
                price: "$6.99"
              },
              {
                itemName: "Chicken Pakora",
                description:
                  "Succulent pieces of chicken marinated overnight in an exquisite blend of masalas, cooked in a tandoori oven, then dipped in batter and deep-fried",
                price: "$8.99"
              },
              {
                itemName: "Goat Sukka",
                description:
                  "The goat meat (mutton ) is cooked with spicy masala powders to lipsmacking dry fry.",
                price: "$13.99"
              },
              {
                itemName: "Tawa Fish (New)",
                description:
                  "Small pieces of fish seasoned in yogurt and fresh herbs skewered and grilled in tandoor",
                price: "$13.99"
              },
              {
                itemName: "Tandoori Chicken Half",
                description:
                  "Chicken marinated in exotically spiced yogurt and cooked to perfection in a tandoor oven",
                price: "$9.99"
              },
              {
                itemName: "Tandoori Chicken Full",
                description:
                  "Chicken marinated in exotically spiced yogurt and cooked to perfection in a tandoor oven",
                price: "$15.99"
              },
              {
                itemName: "Chicken Tikka",
                description:
                  "Succulent cubes of boneless white chicken marinated in yogurt and mild spices",
                price: "$12.99"
              },
              {
                itemName: "Chicken Malai Kabab",
                description:
                  "Tender boneless pieces of chicken breast marinated in sour cream and Curry Bowl special spices",
                price: "$12.99"
              },
              {
                itemName: "Curry Bowl (Sp*)",
                description:
                  "Tandoori Platter Combination of chicken malai kabab, chicken tikka, tandoori chicken and shrimp ",
                price: "$16.99"
              },
              {
                itemName: "Tandoori Shrimps",
                description:
                  "King-size shrimp marinated in mild spices & curry bowl special herbs",
                price: "$14.99"
              },
              {
                itemName: "Curry Bowl Tandoori Fish (Sp*)",
                description:
                  "Fish marinated in yogurt and exotic Indian spices then cooked on a skewer",
                price: "$13.99"
              }
            ]
          }
        ]
      }
    },
    {
      title: "Indo-Chinese",
      category: {
        subCategory: [
          {
            items: [
              {
                itemName: "Gobi Manchurian",
                description:
                  "Butter Fried cauliflower with ginger, garlic and onion",
                price: "$9.99"
              },
              {
                itemName: "Honey Chilli Cauliflower",
                description: "Butter fried cauliflower with honey and chilies",
                price: "$9.99"
              },
              {
                itemName: "Baby Corn Manchuria",
                description:
                  "Baby Corn coated with Chinese batter, deep fried and tossed with manchurian sauce",
                price: "$9.99"
              },
              {
                itemName: "Baby Corn Pepper Fry",
                description: "Batter fried baby corn sauteed in pepper sauce",
                price: "$9.99"
              },
              {
                itemName: "Paneer 65",
                description:
                  "Butter fried paneer cooked with ginger, garlic, yogurt and spices",
                price: "$10.99"
              },
              {
                itemName: "Chilli Paneer",
                description: "Butter fried pepper with ginger, garlic & onion",
                price: "$10.99"
              },
              {
                itemName: "Noodles Veg",
                description:
                  "Win tossed noodles with ginger, garlic and soya sauce",
                price: "$9.99"
              },
              {
                itemName: "Veg Fried Rice",
                description: "",
                price: "$9.99"
              }
            ]
          }
        ]
      }
    },
    {
      title: "South Indian",
      category: {
        subCategory: [
          {
            items: [
              {
                itemName: "Idly",
                description:
                  "Traditional steamed rice lentil cakes served with sambar and chutney",
                price: "$4.99"
              },
              {
                itemName: "Vada",
                description:
                  "Lentil doughnut shaped dumplings served with sambar and chutney",
                price: "$4.99"
              },
              {
                itemName: "Poonugulu",
                description:
                  "Indian hush puppies. Deep fried rice and until dumplings served with chutney",
                price: "$6.99"
              },
              {
                itemName: "Mysore Bajji",
                description: "Deep fried batter dumplings served with chutney",
                price: "$6.99"
              },
              {
                itemName: "Poori",
                description:
                  "Whole wheat deep fried puffed bread with potato and onion kurma",
                price: "$7.99"
              },
              {
                itemName: "Chole Bhatura",
                description:
                  "Combination of chole (spicy chick peas) and fried breads",
                price: "$7.99"
              },
              {
                itemName: "Upma",
                description:
                  "Semolina is cooked with onions, mixed vegetables and a delicious tempering of chillies",
                price: "$5.99"
              }
            ]
          }
        ]
      }
    },
    {
      title: "DOSA",
      category: {
        subCategory: [
          {
            items: [
              {
                itemName: "Plain Dosa",
                description: "Plain rice crispy crepe",
                price: "$7.99"
              },
              {
                itemName: "Cheese Dosa",
                description:
                  "comprises of crispy plain dosa topped with grated cheese.",
                price: "$8.99"
              },
              {
                itemName: "Masala Dosa",
                description: "Rice crepe with stuffed Potato",
                price: "$8.99"
              },
              {
                itemName: "Onion Dosa",
                description: "Thin Rice crepes with Onion topping",
                price: "$7.99"
              },
              {
                itemName: "Onion Masala Dosa",
                description:
                  "One large rice crepe sprinkled with finely chopped onions filled with potato & onion masala",
                price: "$8.99"
              },
              {
                itemName: "Mysore Masala Dosa",
                description:
                  "Thin rice crepe with layer of hot chutney filled with potatoes and onions",
                price: "$8.99"
              },
              {
                itemName: "Paneer Bujji Dosa",
                description:
                  "Thin rice crepe with layer of hot chutney filled with tomato, panner and onions",
                price: "$8.99"
              },
              {
                itemName: "Curry Bowl Special Spicy Dosa",
                description:
                  "Authentic thin rice crepe with curry bowl special sauce topping",
                price: "$8.99"
              },
              {
                itemName: "Plain Ravva Dosa",
                description: "Thin Wheat and Lentil crepes with no filling",
                price: "$8.99"
              },
              {
                itemName: "Ravva Masala Dosa",
                description:
                  "One large crepe made from cream of wheat sprinkled with cumin and coriander leaves sprinkled with finely chopped onions and filled with potato and onion masala",
                price: "$8.99"
              },
              {
                itemName: "Onion Ravva Dosa",
                description:
                  "Wheat and Lentil crepes with Onions and Chili with no filling",
                price: "$8.99"
              },
              {
                itemName: "Plain Pasarattu",
                description:
                  "Whole Moong dhal and Rice crepe topped with Onions, Chilies and Ginger",
                price: "$7.99"
              },
              {
                itemName: "Pasarattu And Upma",
                description:
                  "Whole Moong dhal and Rice crepe topped with Onions, Chilies, Ginger, and upma",
                price: "$8.99"
              },
              {
                itemName: "Plain Uthappam",
                description: "Indian thick pancake",
                price: "$7.99"
              },
              {
                itemName: "Masala Uthappam",
                description:
                  "Uttapam is a thick pancake, with toppings cooked right into the batter",
                price: "$8.99"
              },
              {
                itemName: "Onion And Hot Chilli Uthappam",
                description:
                  "Indian style pancakes with Onion and Chili toppings",
                price: "$8.99"
              },
              {
                itemName: "Onion Tomato Peas Uthappam",
                description:
                  "One thick pancake made in traditional style with a rice and lentil batter filled with onions, tomato, chillies or both",
                price: "$8.99"
              },
              {
                itemName: "Vegetable Uthappam",
                description: "Indian pancake topped fresh vegetables",
                price: "$8.99"
              },
              {
                itemName: "Masala Dosa + 1 Idly + 1 Vada (Combo)",
                description: "Rice crepe with potato stuffed and Idly Vada",
                price: "$9.99"
              }
            ]
          }
        ]
      }
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
