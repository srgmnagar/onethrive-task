"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CalendarDays, Users, MapPin, Gift, Phone, Menu } from "lucide-react";
import Link from "next/link";
import ReviewsSection from "@/components/ReviewSection";


export default function Home() {

  return (
    <div>
      <div className=" h-screen inconsolata bg-[linear-gradient(to_bottom,_rgba(0,_0,_0,_0)_10%,_rgba(0,_255,_162,_0)_30%,_rgba(0,_255,_162,_0.66)_90%)]">
       
        <div className="relative h-full">
          <header className="border-b border-white/10 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 hover:translate-x-1 transition-all ease-in duration-200"
                  >
                    <CalendarDays className="h-8 w-8 text-[#00ffa3]" />
                    <span className="text-3xl hover:text-[#00ffa3] transition-all ease-in duration-200 font-bold text-white">
                      OneThrive
                    </span>
                  </Link>
                </div>

                <NavigationMenu className="hidden md:block">
                  <NavigationMenuList className="space-x-2">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#00ffa3]/10 hover:text-[#00ffa3]">
                        <span className="flex items-center text-xl">
                          <CalendarDays className="w-4 h-4 mr-2" />
                          Events
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 w-[400px] bg-black">
                          <div className="grid grid-cols-2 gap-4">
                            <Link
                              href="/corporate"
                              className="group block space-y-2 p-3 rounded-lg hover:bg-[#00ffa3]/10"
                            >
                              <div className="flex items-center text-[#00ffa3]">
                                <Users className="w-4 h-4 mr-2" />
                                <h3 className="font-medium">Corporate Events</h3>
                              </div>
                              <p className="text-sm text-gray-400">
                                Conferences, seminars, and team building events
                              </p>
                            </Link>
                            <Link
                              href="/social"
                              className="group block space-y-2 p-3 rounded-lg hover:bg-[#00ffa3]/10"
                            >
                              <div className="flex items-center text-[#00ffa3]">
                                <Gift className="w-4 h-4 mr-2" />
                                <h3 className="font-medium text-xl">Social Events</h3>
                              </div>
                              <p className="text-sm text-gray-400">
                                Weddings, parties, and celebrations
                              </p>
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#00ffa3]/10 hover:text-[#00ffa3]">
                        <span className="flex items-center text-xl">
                          <MapPin className="w-4 h-4 mr-2" />
                          Venues
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 w-[400px] bg-black">
                          <div className="space-y-4">
                            <Link
                              href="/indoor"
                              className="block p-3 rounded-lg hover:bg-[#00ffa3]/10"
                            >
                              <h3 className="font-medium text-[#00ffa3]">Indoor Venues</h3>
                              <p className="text-sm text-gray-400">Elegant halls and modern spaces</p>
                            </Link>
                            <Link
                              href="/outdoor"
                              className="block p-3 rounded-lg hover:bg-[#00ffa3]/10"
                            >
                              <h3 className="font-medium text-[#00ffa3]">Outdoor Venues</h3>
                              <p className="text-sm text-gray-400">Gardens, beaches, and scenic locations</p>
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </header>

          <main className="mx-auto pt-12">
            <div className="px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center gap-5 font-Sora">
              <h1 className="head1 text-6xl font-bold text-white hover:text-[#00ffa3] transition-all ease-in duration-200 hover:translate-x-1">
                Think Big,
              </h1>
              <h1 className="head2 text-6xl font-bold text-white hover:text-[#00ffa3] transition-all ease-in duration-200 hover:translate-x-1">
                Event Bigger
              </h1>

              <h2 className="head3 text-xl text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis iure officia veritat
              </h2>
            </div>

            <section className=" head4 mt-10  w-full">
              <h3 className="text-3xl pl-9 font-semibold text-white mb-4">Featured Events</h3>
              <div className="flex pl-5 gap-6 overflow-x-auto pb-4 scroll-h">
              {Array.from({ length: 8 }).map((_, idx) => (
  <div
    key={`event-${idx}`} 
    className="min-w-[250px] cursor-pointer border rounded-2xl p-4 shadow-lg hover:scale-95 transition-transform"
  >
                    <div className="rounded-xl mb-3 object-cover w-full p-10 py-22 bg-green-300">
                      Image*
                    </div>
                    <h4 className="text-lg font-bold text-black mb-1">Event Title</h4>
                    <p className="text-sm text-gray-100">Brief description of this amazing event goes here.</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
  <div
    style={{ lineHeight: "1.8" }}
    className="start relative inconsolata w-[85%] sm:w-[80%] sm:px-24 sm:pt-16 px-12 pt-7 mx-auto mt-16 rounded-3xl text-white inter sm:text-2xl text-lg font-extralight border border-[#00ffa3]"
  >
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi unde et doloribus totam fuga obcaecati Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores similique ullam harum ab, saepe itaque quo repudiandae quasi omnis voluptatibus, architecto dolor aliquam iure vitae mollitia numquam totam voluptatem corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio impedit quasi deleniti nulla alias voluptatibus!
    </div>

    <div className="mt-10 mb-10 relative w-fit mx-auto hover:translate-y-1 transition-all">
      <div className="absolute inset-0 bg-[#00ffa3] blur-xl opacity-70 rounded-full z-0 w-full h-full" />

      
      <Link
        href="/"
        className="font-Orbitron relative z-10 px-3 sm:px-8 py-2 text-white text-lg sm:text-xl font-normal rounded-full bg-transparent border-none cursor-pointer hover:translate-y-1 transition-all"
      >
        Connect with us!
      </Link>
    </div>
  </div>
  <div className="flex flex-col justify-center items-center gap-5 my-10 inconsolata">

   <h2 className=' font-medium font-Orbitron flex flex-col'>
                    <span className='bg-gradient-to-r xl:text-4xl md:text-8xl text-xl from-[#ffffff] to-[#00ffa3] text-transparent bg-clip-text'>
                        Why Us?
                    </span>
                </h2>
                <div
                    
                    className='bg-gradient-to-r from-[#8bffd4] to-[#00ffa3] text-black font-Exo w-full  py-10 flex justify-evenly '>
                        <div className='flex flex-col items-center justify-center gap-2 text-center'>
                            <h2 className='text-2xl sm:text-4xl lg:text-7xl font-bold'>80+</h2>
                            <p className='text-lg align-middle sm:text-xl lg:text-3xl font-light'>trusted companies</p>
                        </div>
                        <div className='flex flex-col items-center gap-2 text-center'>
                            <h2 className='text-2xl sm:text-4xl lg:text-7xl font-bold'>1 lakh+</h2>
                            <p className='text-lg align-middle sm:text-xl lg:text-3xl font-light'>satisfied candidates</p>
                        </div>
                        <div className='flex flex-col items-center gap-2 text-center'>
                            <h2 className='text-2xl sm:text-4xl lg:text-7xl font-bold'>440+</h2>
                            <p className='text-lg align-middle sm:text-xl lg:text-3xl font-light'>positive reviews</p>
                        </div>
                </div>
                <ReviewsSection  />
  </div>
</div>

    </div>
    
  );
}
