'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const menuList = [
    { id:1, className:"", title:"일반문자", icon: false, href: "" },
    { id:2, className:"", title: "RCS", icon: false, href: "" },
    { id:3, className:"yellow", title: "친구톡", icon: true, href: "" },
    { id:4, className:"yellow", title: "알림톡", icon: true, href: "" },
    { id:5, className:"red", title: "모바일전단", icon: false, href: "" },
    { id:6, className:"red", title: "주문기능", icon: false, href: "" },
    { id:7, className:"red", title: "공동구매", icon: false, href: "" },
    { id:8, className:"red", title: "이미지클라우드", icon: false, href: "" },
];
const menuList2 = [
    { id:1, className:"bg-[#2c5aa7] text-white font-bold pt-2 rounded-t-sm", icon: false, title:"일반문자", href: "" },
    { id:2, className:"bg-[#2c5aa7] text-white font-bold pt-2 rounded-t-sm", icon: false, title: "RCS", href: "" },
    { id:3, className:"bg-[#fae100] text-amber-950 font-bold pt-2 rounded-t-sm", icon: true, title: "친구톡", href: "" },
    { id:4, className:"bg-[#fae100] text-amber-950 font-bold pt-2 rounded-t-sm", icon: true, title: "알림톡", href: "" },
    { id:5, className:"bg-red-700/75 text-white font-bold pt-2 rounded-t-sm", icon: false, title: "모바일전단", href: "" },
    { id:6, className:"bg-red-700/75 text-white font-bold pt-2 rounded-t-sm", icon: false, title: "주문기능", href: "" },
    { id:7, className:"bg-red-700/75 text-white font-bold pt-2 rounded-t-sm", icon: false, title: "공동구매", href: "" },
    { id:8, className:"bg-red-700/75 text-white font-bold pt-2 rounded-t-sm", icon: false, title: "이미지클라우드", href: "" },
];
export default function TopMenu(props) {

  const [activeMenu, setActiveMenu] = useState(1);


    return (
        <div className='flex flex-col gap-10'>
            <div id="ucTopMenu_UPTabOuter" className="relative">
                <div className="tab_menu" style={{position:'relative'}}>
                    <div className="tabouter">
                        <ul className=''>
                            {menuList.map(menu => (
                                <li key={menu.id} className={`${menu.className} ${activeMenu === menu.id ? "active" : ""}`}>
                                    <a onClick={e => {e.preventDefault(); setActiveMenu(menu.id)}} className="link_pagetitle" href={menu.href}>
                                        { menu.icon && 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{marginRight:'4px'}} viewBox="0 0 20 20" fill="none">
                                                <rect width="20" height="20" rx="1.76471" fill="#fae100"/>
                                                <ellipse cx="10" cy="9.11765" rx="6.76471" ry="5.58824" fill="#3C1E1E"/>
                                                <path d="M9.11765 14.1177L5.68235 17.4706L6.17647 15V13.5294L9.11765 10.1177Z" fill="#3C1E1E"/>
                                            </svg>
                                        }
                                        {menu.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tabside">
                        <ul className="">
                            <a id="ucTopMenu_linkReport" className="tabside__btn bg_dark" href="">무료체험신청</a>
                            <li><a className="tabside__btn" style={{letterSpacing:'-1px',width:'88px'}} href="#">온라인매뉴얼</a></li>
                            <li><a id="ucTopMenu_linkTS" className="tabside__btn" href="">충전안내</a></li>
                            <li><a id="ucTopMenu_linkReport" className="tabside__btn" href="">레포트</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Image src="./ms_next/img/4.png" alt="" width={1300} height={100} />
                </div>

            </div>

            <div id="" className=" hidden relative w-[1300px]">
                <div className="hidden flex mx-1 border-b-2 border-[#2c5aa7] text-[14px]">
                    <div className="flex">
                        <ul className='flex items-end divide-x divide-slate-800/30'>
                            {menuList2.map(menu => (
                                <li key={menu.id} className={activeMenu === menu.id ? menu.className : "flex justify-center items-center bg-slate-600/65 text-white rounded-t-sm"}>
                                    <a onClick={e => {e.preventDefault(); setActiveMenu(menu.id)}} className="flex justify-center items-center px-4 py-1" href={menu.href}>
                                        {menu.icon && <Image src={`/img/kakaotalk_sharing_btn_small_ov.png`} alt="카카오아이콘" width={20} height={20} className="aspect-square mr-1" />}
                                        {menu.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex ml-auto">
                        <div className="flex justify-center items-center gap-1  *:min-w-18 *:text-sm *:text-center *:text-sm *:border *:border-slate-400/50 *:px-2 *:py-1 *:rounded-sm **:hover:bg-slate-200">
                            <a id="ucTopMenu_linkReport" className="bg-slate-600 text-white border-0" href="">무료체험신청</a>
                            <a id="ucTopMenu_linkReport" className="" href="">레포트</a>
                            <a id="ucTopMenu_linkTS" className="" href="">충전안내</a>
                            <a className="" style={{letterSpacing:'-1px',width:'auto'}} href="#">온라인매뉴얼</a>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                /* 메인 탭 */
                #ucTopMenu_UPTabOuter {font-family:"Helvetica Neue", Helvetica, Arial, sans-serif; font-size:14px; line-height:1.5; list-style:none; margin:0; padding:0;}

                .tab_menu { overflow: hidden; display:flex; width: 1300px; margin: 5px 5px 0; border-bottom: 2px solid #2c5aa7; }

                .tab_menu .tabouter { position: relative; z-index: 2; }

                .tab_menu .tabouter ul {display: flex; align-items:flex-end;}

                .tab_menu .tabouter ul > li { border-right:1px solid rgba(0,0,0,.2); border-top-left-radius:4px; border-top-right-radius:4px; color: #fff; background:#8795a4;}
                
                .tab_menu .tabouter ul > li.active {padding-top:6px; font-weight:bold; background:#2c5aa7;}

                .tab_menu .tabouter ul > li:last-child {border-right: none;}

                .tab_menu .tabouter ul > li a { display: flex; align-items:center; height:32px; padding: 6px 16px; text-decoration: none; box-sizing: border-box; line-height:1 }
                
                /* 색상추가*/
                .tab_menu .tabouter ul li.yellow.active {background:#fae100; color:#333;}

                .tab_menu .tabouter ul li.red.active {background:#cb3342}

                /** Tab 버튼그룹 스타일 **/
                .tabside { display:flex; align-items:center; margin-left:auto; z-index: 3; text-align:right; }

                .tabside ul { display: flex; gap: 4px; }

                .tabside__btn { display: inline-block; min-width: 80px; padding: 2px 6px; border: 1px solid #9d9d9d; border-radius: 3px; text-align: center; }

                .tabside__btn:hover { text-decoration: none; background: #dfdfdf; }

                .tabside__btn.bg_dark {  background: #333; color: #fff; border: 0; }

            `}</style>

        </div>
    );
}