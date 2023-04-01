const images = [
  {
    id: 1,
    img: '../../images/apples-1.jpg',
    category: ['nature', 'fruits', 'apples', 'red', 'green'],
    mainCategory: 'fruits',
    description:
      '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 2,
    img: '../../images/apples-2.jpg',
    category: ['nature', 'fruits', 'apples', 'pink', 'green'],
    mainCategory: 'fruits',
    description:
      '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 3,
    img: '../../images/beetles.jpg',
    category: ['nature', 'insect', 'beetles', 'pink', 'green'],
    mainCategory: 'insect',
    description:
      '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 4,
    img: '../../images/bird-1.jpg',
    category: ['nature', 'birds', 'animal', 'yellow'],
    mainCategory: 'birds',
    description:
      '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 5,
    img: '../../images/bird-2.jpg',
    category: ['nature', 'birds', 'animal', 'yellow', 'pink'],
    mainCategory: 'birds',
    description:
      '5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 6,
    img: '../../images/butterfly.jpg',
    category: ['nature', 'insect', 'animal', 'butterfly', 'red', 'green'],
    mainCategory: 'insect',
    description:
      '6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 7,
    img: '../../images/cherry-1.jpg',
    category: ['nature', 'flowers', 'blossom', 'white', 'blue', 'insect'],
    mainCategory: 'flowers',
    description:
      '7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 8,
    img: '../../images/cherry-2.jpg',
    category: ['nature', 'flowers', 'blossom', 'pink'],
    mainCategory: 'flowers',
    description:
      '8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 9,
    img: '../../images/cherry-3.jpg',
    category: ['nature', 'flowers', 'blossom', 'pink'],
    mainCategory: 'flowers',
    description:
      '9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 10,
    img: '../../images/currants.jpg',
    category: ['nature', 'fruits', 'red', 'green'],
    mainCategory: 'fruits',
    description:
      '10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 11,
    img: '../../images/gemstone.jpg',
    category: ['nature', 'stones', 'gemstones', 'pink'],
    mainCategory: 'stones',
    description:
      '11. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 12,
    img: '../../images/insect-1.jpg',
    category: ['nature', 'insect', 'animal', 'green'],
    mainCategory: 'insect',
    description:
      '12. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 13,
    img: '../../images/insect-2.jpg',
    category: ['nature', 'insect', 'animal', 'pink'],
    mainCategory: 'insect',
    description:
      '13. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 14,
    img: '../../images/insect-3.jpg',
    category: ['nature', 'insect', 'animal', 'purple'],
    mainCategory: 'insect',
    description:
      '14. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 15,
    img: '../../images/kingfisher.jpg',
    category: ['nature', 'birds', 'animals', 'blue'],
    mainCategory: 'birds',
    description:
      '15. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 16,
    img: '../../images/ladybug.jpg',
    category: ['nature', 'insect', 'animal', 'ladybug', 'green'],
    mainCategory: 'insect',
    description:
      '16. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 17,
    img: '../../images/lavender.jpg',
    category: ['nature', 'flowers', 'blossom', 'purple'],
    mainCategory: 'flowers',
    description:
      '17. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 18,
    img: '../../images/lemon.jpg',
    category: ['nature', 'fruits', 'lemon', 'yellow', 'green'],
    mainCategory: 'fruits',
    description:
      '18. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 19,
    img: '../../images/oranges.jpg',
    category: ['nature', 'fruits', 'orange'],
    mainCategory: 'fruits',
    description:
      '19. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 20,
    img: '../../images/pebble.jpg',
    category: ['nature', 'stones', 'pebble', 'orange'],
    mainCategory: 'stones',
    description:
      '20. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 21,
    img: '../../images/pink.jpg',
    category: ['nature', 'flowers', 'blossom', 'pink'],
    mainCategory: 'flowers',
    description:
      '21. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 22,
    img: '../../images/pomegranate.jpg',
    category: ['nature', 'fruits', 'red'],
    mainCategory: 'fruits',
    description:
      '22. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 23,
    img: '../../images/poppies.jpg',
    category: ['nature', 'flowers', 'red', 'green'],
    mainCategory: 'flowers',
    description:
      '23. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 24,
    img: '../../images/spring.jpg',
    category: ['nature', 'flowers', 'pink', 'green'],
    mainCategory: 'flowers',
    description:
      '24. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 25,
    img: '../../images/stones-1.jpg',
    category: ['nature', 'stones', 'blue'],
    mainCategory: 'stones',
    description:
      '25. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 26,
    img: '../../images/stones-2.jpg',
    category: ['nature', 'stones', 'blue', 'red'],
    mainCategory: 'stones',
    description:
      '26. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
  {
    id: 27,
    img: '../../images/flamengo.jpg',
    category: ['nature', 'birds', 'pink', 'animals'],
    mainCategory: 'birds',
    description:
      '27. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta dui eget dui laoreet feugiat. Donec ut efficitur est, at volutpat arcu. In fermentum ultrices sapien, eget ullamcorper tortor pharetra nec. In non magna ut orci accumsan convallis vitae ut velit. Sed non erat quis nunc rhoncus luctus in in ante.',
  },
];
export default images;
