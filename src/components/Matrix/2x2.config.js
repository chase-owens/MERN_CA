const twoXtwo = [
  {
    title: `Contingencies that maintain excited patterns`,
    alternatives: [
      {
        alternative: "Excited Behaviors",
        consequences: [
          { outcome: "certain interaction", value: 4 },
          { outcome: "possible affection", value: 3 },
          { outcome: "possible sweet talk", value: 2 },
          { outcome: "possible touch to keep away", value: 2 },
          { outcome: "possible scolding", value: -1 },
        ],
        totalValue: 10,
      },
      {
        alternative: "Calm Behaviors",
        consequences: [{ outcome: "no change", value: 0 }],
        totalValue: 0,
      },
    ],
  },
  {
    title: `Contingencies that maintain calm patterns`,
    alternatives: [
      {
        alternative: "Excited Behaviors",
        consequences: [
          { outcome: "no change", value: 0 },
          { outcome: "possible touch to keep away", value: 2 },
        ],
        totalValue: 2,
      },
      {
        alternative: "Calm Behaviors",
        consequences: [
          { outcome: "certain interaction", value: 4 },
          { outcome: "lots of scratches", value: 4 },
          { outcome: "lots of smiles", value: 4 },
          { outcome: "possible people saying good dog", value: 4 },
        ],
        totalValue: 16,
      },
    ],
  },
];

export default twoXtwo;
