import React from 'react';

const HomePageBanner = () => {
    return (
        <div className="w-full py-8">
            <div className="mx-auto max-w-7xl px-4">
                <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-2">Special Promotion</h2>
                        <p className="text-lg text-gray-600 mb-4">Diskon hingga 50% untuk semua produk terbaru</p>
                        <button className="px-6 py-2 bg-black text-white rounded-md cursor-pointer hover:bg-gray-400 hover:text-black">
                            Lihat Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;
