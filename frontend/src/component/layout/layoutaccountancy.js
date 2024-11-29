import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="z-[1]">
            <div className="text-center">
                <img src="../../assets/images/apps/LOGOTRUONG.png" className="w-[100px] h-[100px] inline-block mt-[20px]" />
                <h2 className="font-bold text-[20px] text-[#000] mt-[10px]">TRƯỜNG LONG TÂY</h2>
            </div>
            <div className="pt-[20px]">
                <Link
                    to='/testno'
                    onClick={() => handleLinkClick('/testno')}
                    className={`flex p-[15px] w-[95%] m-[6px] rounded-10 transition-all duration-300 
                    ${activeLink === '/testno' ? 'bg-[#96b9f1] bg-opacity-30 text-[#000000]' : 'hover:bg-[#96b9f1] hover:bg-opacity-30 hover:text-[#000000]'}`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-house" className="relative top-[10px] ml-[5px] text-[18px] text-[#719acf]" />
                    <p className="mr-[5px] text-[20px] m-[5px_0_0_10px] font-cursive">Trang chủ</p>
                </Link>
                <Link
                    to='/uniformmanage'
                    onClick={() => handleLinkClick('/uniformmanage')}
                    className={`flex p-[15px] w-[95%] m-[6px] rounded-10 transition-all duration-300 
                    ${activeLink === '/uniformmanage' ? 'bg-[#96b9f1] bg-opacity-30 text-[#000000]' : 'hover:bg-[#96b9f1] hover:bg-opacity-30 hover:text-[#000000]'}`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-user-tie" className="relative top-[8px] ml-[5px] text-[18px] text-[#ec6a52]" />
                    <p className="mr-[5px] text-[18px] m-[5px_0_0_10px] text-[#686767]">Đồng phục</p>
                </Link>
                <Link
                    to='/plan'
                    onClick={() => handleLinkClick('/plan')}
                    className={`flex p-[15px] w-[95%] m-[6px] rounded-10 transition-all duration-300 
                    ${activeLink === '/plan' ? 'bg-[#96b9f1] bg-opacity-30 text-[#000000]' : 'hover:bg-[#96b9f1] hover:bg-opacity-30 hover:text-[#000000]'}`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-clipboard-list" className="relative top-[9px] ml-[5px] text-[18px] text-[#51d6ff]" />
                    <p className="mr-[5px] text-[18px] m-[5px_0_0_10px] text-[#686767]">Kế hoạch</p>
                </Link>
                <Link
                    to='/order'
                    onClick={() => handleLinkClick('/order')}
                    className={`flex p-[15px] w-[95%] m-[6px] rounded-10 transition-all duration-300 
                    ${activeLink === '/order' ? 'bg-[#96b9f1] bg-opacity-30 text-[#000000]' : 'hover:bg-[#96b9f1] hover:bg-opacity-30 hover:text-[#000000]'}`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-calendar-check" className="relative top-[9px] ml-[5px] text-[18px] text-[#ec3f73]" />
                    <p className="mr-[5px] text-[18px] m-[5px_0_0_10px] text-[#686767]">Đơn hàng</p>
                </Link>
                <Link
                    to='/'
                    onClick={() => handleLinkClick('/')}
                    className={`flex p-[15px] w-[95%] m-[6px] rounded-10 transition-all duration-300 
                    ${activeLink === '/' ? 'bg-[#96b9f1] bg-opacity-30 text-[#000000]' : 'hover:bg-[#96b9f1] hover:bg-opacity-30 hover:text-[#000000]'}`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-coins" className="relative top-[9px] ml-[5px] text-[18px] text-[#f7ec5e]" />
                    <p className="mr-[5px] text-[18px] m-[5px_0_0_10px] text-[#686767]">Tài chính</p>
                </Link>
               
            </div>
        </div>
    );
};

const Header = () => {
    const teacherName = sessionStorage.getItem('teachername') || "Tên giáo viên";

    return (
        <>
            <div className="z-[1]">
                <div className="w-[100%] p-[20px]">
                    <div className="flex relative justify-end">
                        <div className="relative">
                            <input placeholder="Tìm Kiếm" className="h-[50px] w-[270px] bg-[#fff] rounded-10 p-[20px]" />
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="absolute top-[17px] right-[10px]" />
                        </div>
                        <div className='flex'>
                            <FontAwesomeIcon icon="fa-solid fa-user" className='text-[#fff] text-[18px] m-[18px_0_0_10px]' />
                            <p className="font-bold text-[18px] ml-[10px] mt-[15px] text-[#fff]">{teacherName}</p>
                        </div>
                        <FontAwesomeIcon icon="fa-solid fa-bell" className='text-[18px] text-[#fff] m-[18px_0_0_10px]' />
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className='text-[18px] text-[#fff] m-[18px_0_0_10px]' />
                    </div>
                </div>

            </div>
        </>
    );
}
export { Navbar, Header }