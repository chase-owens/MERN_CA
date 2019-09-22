const twoXtwo = [
  {
    title: `Understanding Excited Behavior`,
    alternatives: [
      {
        alternative: 'Excited Behaviors',
        consequences: [
          { outcome: 'certain interaction', value: 4 },
          { outcome: 'possible affection', value: 4 },
          { outcome: 'unlikely talked to nicely', value: 4 },
          { outcome: 'likely yelled at ', value: 4 }
        ]
      },
      {
        alternative: 'Calm Behaviors',
        consequences: [
          { outcome: 'likely ignored', value: 4 },
          { outcome: 'scratches unlikely', value: 4 },
          { outcome: 'possible people saying good dog', value: 4 },
          { outcome: 'possible smiles', value: 4 }
        ]
      }
    ]
  },
  {
    title: `Understanding Calm Behavior`,
    alternatives: [
      {
        alternative: 'Excited Behaviors',
        consequences: [
          { outcome: 'possible affection', value: 4 },
          { outcome: 'certain interaction', value: 4 },
          { outcome: 'unlikely talked to nicely', value: 4 },
          { outcome: 'likely yelled at', value: 4 }
        ]
      },
      {
        alternative: 'Calm Behaviors',
        consequences: [
          { outcome: 'certain interaction', value: 4 },
          { outcome: 'lots of scratches', value: 4 },
          { outcome: 'lots of smiles', value: 4 },
          { outcome: 'possible people saying good dog', value: 4 }
        ]
      }
    ]
  }
];

export default twoXtwo;
