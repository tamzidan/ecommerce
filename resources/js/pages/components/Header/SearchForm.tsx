import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        < div className="flex-grow mx-4 max-w-3xl" >
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full border rounded-md py-2 px-4 pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
        </div >
    );
};

export default SearchBar;