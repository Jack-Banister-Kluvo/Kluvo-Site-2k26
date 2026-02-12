import React from 'react';

export const KluvoLightBackground: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#fcfcfc]">
            {/* Placeholder background based on Hero style */}
            <div className="absolute top-[5%] left-[15%] w-[70%] h-[70%] bg-[#2e4841]/5 blur-[100px]" />
            <div className="absolute bottom-[0%] right-[0%] w-[60%] h-[60%] bg-[#9daaa6]/5 blur-[100px]" />
        </div>
    );
};
