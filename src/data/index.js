export const foods = [{
    id: 1,
    name: "Milkshake",
    image: "milkshake.png",
    price: 30,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    attr: [{
        mandatory: true,
        multiple: false,
        title: {
          value: "flavour",
          text: "Flavour"
        },
        item: [{
            value: "chocolate",
            text: "Chocolate"
          },
          {
            value: "vanilla",
            text: "Vanilla"
          },
          {
            value: "strawberry",
            text: "Strawberry"
          }
        ]
      },
      {
        mandatory: true,
        multiple: false,
        title: {
          value: "size",
          text: "Size"
        },
        item: [{
            value: "small",
            text: "Small"
          },
          {
            value: "medium",
            text: "Medium"
          },
          {
            value: "large",
            text: "Large"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Cake",
    image: "cake.png",
    price: 15,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    attr: [{
      mandatory: true,
      multiple: false,
      title: {
        value: "flavour",
        text: "Flavour"
      },
      item: [{
          value: "black-forest",
          text: "Black Forest"
        },
        {
          value: "mixed-fruit",
          text: "Mixed fruit"
        },
        {
          value: "marble-cheese",
          text: "Marble cheese"
        }
      ]
    }]
  },
  {
    id: 3,
    name: "Fries",
    image: "fries.png",
    price: 25,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    attr: [{
      mandatory: true,
      multiple: false,
      title: {
        value: "size",
        text: "Size"
      },
      item: [{
          value: "small",
          text: "Small"
        },
        {
          value: "medium",
          text: "Medium"
        },
        {
          value: "large",
          text: "Large"
        }
      ]
    }]
  },
  {
    id: 4,
    name: "Coffee",
    image: "coffee.png",
    price: 40,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    attr: [{
        mandatory: true,
        multiple: false,
        title: {
          value: "temp",
          text: "Temperature"
        },
        item: [{
            value: "hot",
            text: "Hot"
          },
          {
            value: "cold",
            text: "Cold"
          }
        ]
      },
      {
        mandatory: true,
        multiple: false,
        title: {
          value: "size",
          text: "Size"
        },
        item: [{
            value: "small",
            text: "Small"
          },
          {
            value: "medium",
            text: "Medium"
          },
          {
            value: "large",
            text: "Large"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Icecream",
    image: "icecream.png",
    price: 65,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    attr: [{
        mandatory: true,
        multiple: false,
        title: {
          value: "flavour",
          text: "Flavour"
        },
        item: [{
            value: "chocolate",
            text: "Chocolate"
          },
          {
            value: "vanilla",
            text: "Vanilla"
          },
          {
            value: "strawberry",
            text: "Strawberry"
          }
        ]
      },
      {
        mandatory: false,
        multiple: true,
        title: {
          value: "toppings",
          text: "Toppings"
        },
        item: [{
            value: "mochi",
            text: "Mochi"
          },
          {
            value: "oreos",
            text: "Oreos"
          },
          {
            value: "sprinkles",
            text: "Sprinkles"
          },
          {
            value: "hot-fudge",
            text: "Hot fudge"
          },
          {
            value: "caramel",
            text: "Caramel"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Fruit Juice",
    image: "juice.png",
    price: 30,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    attr: [{
      mandatory: true,
      multiple: true,
      title: {
        value: "fruit",
        text: "Fruit"
      },
      item: [{
          value: "apple",
          text: "Apple"
        },
        {
          value: "orange",
          text: "Orange"
        },
        {
          value: "carrot",
          text: "Carrot"
        },
        {
          value: "mango",
          text: "Mango"
        },
        {
          value: "Kiwi",
          text: "Kiwi"
        },
        {
          value: "banana",
          text: "Banana"
        }
      ]
    }]
  }
]