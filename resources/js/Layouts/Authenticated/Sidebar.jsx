import React from 'react'
import SubscriptionDetail from '@/Layouts/Authenticated/SubscriptionDetail'
import {Link} from '@inertiajs/react'
import MenuItem from './MenuItem'
import {UserMenu, UserOthers} from './MenuList'

export default function Sidebar({auth}) {
    return (
        <React.Fragment>
            <aside className="fixed z-50 w-[300px] h-full">

                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <Link href="/">
                        <img src="/images/swishflix-black.svg" alt=""/>
                        {/* <img src="/images/moonton.svg" alt=""/> */}

                    </Link>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

                        {/* <!-- Menu --> */}
                        <div>
                            <div className="text-gray-1 text-sm mb-4">Menu</div>
                            {UserMenu.map((menu, index) => (
                                <MenuItem
                                    key={`$(index)-$(menu.text)`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={menu.link === route().current()}
                                />
                            ))}
                        </div>
                        {/* <!-- ./Menu --> */}

                        {/* <!-- Others --> */}
                        <div>
                            <div className="text-gray-1 side-link mb-4">Others</div>
                            {UserOthers.map((menu, index) => (
                                <MenuItem
                                    key={`$(index)-$(menu.text)`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={menu.link === route().current()}
                                    method={menu.method}
                                />
                            ))}
                        </div>
                        {/* <!-- ./Others --> */}

                        {/* <!-- Subscription details --> */}
                        {/* <SubscriptionDetail isPremium /> */}
                        {auth.activePlan && (
                            <SubscriptionDetail
                                name={auth.activePlan.name}
                                isPremium={auth.activePlan.name === "Premium"}
                                remainingActiveDays={
                                    auth.activePlan.remainingActiveDays
                                }
                                activeDays={auth.activePlan.activeDays}
                            />
                        )}  
                        {/* <!-- ./Subscription details --> */}

                    </div>
                </div>
            </aside>
        </React.Fragment>
    )
}
