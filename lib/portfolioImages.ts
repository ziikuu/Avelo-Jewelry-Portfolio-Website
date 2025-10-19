export const portfolioCounts = {
    bracelet: 1,
    earring: 6,
    necklace: 13,
    ring: 2,
    set: 5,
}

export const getImagePath = (category: string, index: number) => 
    `/images/portfolio/cards/${category}/${category} (${index})-e.jpeg`;

export const getCategoryImages = (category: keyof typeof portfolioCounts) =>
    Array.from({ length: portfolioCounts[category]}, (_, i) =>
        getImagePath(category, i + 1)
    );
