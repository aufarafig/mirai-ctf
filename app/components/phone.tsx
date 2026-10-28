import React from "react";

interface PhoneProps {
    children: React.ReactNode;
}


const Phone = ({ children }: PhoneProps) => {
    return(
    <div className="bg-[#6C6CA6] w-full pt-6 h-[110vh] rounded-[50px] z-1">
        {/* kamera */}
        <div className="bg-[#3C367A] w-1/3 h-14 rounded-[15px] absolute left-1/3 z-2" />
        {/* lapisan biru-biru hp */}
        <div className="bg-[#3C367A] relative w-full h-full rounded-[50px] p-6">
            {/* layar dan isi kontennya*/}
            <div className="bg-[#73709A] w-full h-full rounded-[50px] inset-shadow-sm flex-1 overflow-y-auto p-3 lg:p-15 [scrollbar-none] [&::-webkit-scrollbar]:hidden">
                {children}
            </div>
        </div>
    </div>
    )
}

export default Phone;