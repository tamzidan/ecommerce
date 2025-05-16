import React from 'react';

const CategoryMenu = () => {
    const categories = [
        { id: 1, name: 'Electronics & Tech' },
        { id: 2, name: 'Fashion & Apparel' },
        { id: 3, name: 'Health & Beauty' },
        { id: 4, name: 'Home & Kitchen' },
        { id: 5, name: 'Groceries & Food' }
    ];

    return (
        <div className="my-6">
            <div className="grid grid-cols-5 gap-4">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex items-center justify-center p-4 border rounded-md cursor-pointer hover:bg-gray-50 hover:text-black"
                    >
                        <span className="text-center">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryMenu;