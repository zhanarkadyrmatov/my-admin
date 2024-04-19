import React from 'react';
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";
import Chart from 'react-apexcharts';

function Profil() {

  const options = {
    labels: ['A', 'B', 'C'],
    legend: {
      show: true,
      position: 'left'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 250
        },
        legend: {
          show: false
        }
      }
    }]
  };

  const series = [30, 50, 20];

  return (
    <div>
      <div className={'flex flex-col gap-[20px] lg:gap-[70px] w-[100%] mt-[40px]'}>
        <div className='relative w-[100%] h-[250px] xl:h-[350px] '>
          <div className={'w-[100%] h-[100%] absolute z-1 rounded-[20px] bg-[rgba(0,0,0,0.5)]'}></div>
          <img className={'w-[100%] h-[100%] object-cover rounded-[20px]'} src="https://jobick.dexignlab.com/xhtml/images/profile1.jpg" alt="" />
          <div className='absolute bottom-[20px] lg:bottom-[-40px] left-[50%] w-[95%]  translate-x-[-50%] z-5'>
            <div className={'flex lg:justify-between lg:items-center flex-col-reverse lg:flex-row gap-[100px]'}>
              <div className={'flex items-center xl:gap-4 gap-2'}>
                <div className={'lg:p-2 xl:p-3 rounded-[15px] bg-[#fff]'}>
                  <img className={'xl:w-[150px] lg:w-[100px] xl:h-[150px] lg:h-[100px] rounded-[15px] object-cover h-[80px] w-[80px]'} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <div className={'text-[#fff]'}>
                  <h3 className={'lg:text-lg xl:text-xl font-bold'} >Franklin Jr</h3>
                  <p className={'lg:text-sm xl:text-md'}>UI / UX Designer</p>
                  <p className={'xl:text-md lg:text-md'}>Medan, Sumatera Utara - ID</p>
                </div>
              </div>
              <div className='flex xl:gap-4 gap-2 text-[#fff]'>
                <div className='xl:text-md lg:text-sm xl:px-4 px-3 xl:py-2 py-1 bg-[#909090] xl:rounded-xl text-[12px] lg:rounded-md rounded-sm'>245 Following</div>
                <div className=" xl:text-md lg:text-sm text-[12px] xl:px-4 px-3 xl:py-2 py-1 bg-[#909090] xl:rounded-xl lg:rounded-md rounded-sm">555 Followers</div>
                <button className={'bg-[red] xl:text-md lg:text-sm xl:px-4 px-3 xl:py-2 py-1 xl:rounded-xl text-[12px] lg:rounded-md rounded-sm'}>Update Profile</button>
              </div>
            </div>
          </div>
        </div>
        <div className={'grid xl:grid-cols-3 lg:grid-cols-2 gap-4'}>
          <div className={'p-6 bg-white dark:bg-[#212130] rounded-xl shadow-lg h-max'}>
            <h3 className={'text-xl font-bold text-black dark:text-[#fff] '}>Skills</h3>
            <div className='flex flex-col gap-4'>
              <div className=''>
                <Chart series={series} type="donut" options={options} className={'w-[100%]'} />
              </div>
              <div className={'flex flex-col gap-2 '}>
                {['red', 'green', 'red'].map((color, index) => (
                  <div key={index} className={'flex flex-col gap-1'}>
                    <div className={'relative w-[100%] h-[8px] bg-[#f5f5f5] rounded-md'}>
                      <span className={`absolute top-0 left-0 w-[70%] h-[8px] bg-[${color}] rounded-md`} />
                    </div>
                    <div className={'flex justify-between items-center'}>
                      <p className={'text-sm font-bold dark:text-[#888888]'}>Figma</p>
                      <p className={'text-sm text-[#888888] dark:text-[#fff]'}>70%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={'xl:col-span-2'}>
            <div className={'flex flex-col xl:grid xl:grid-cols-3 gap-4'}>
              <div className={'col-span-2 p-6 bg-white dark:bg-[#212130] rounded-xl shadow-lg flex flex-col gap-4'}>
                <div className={'flex flex-col gap-2'}>
                  <h3 className={'text-xl font-bold text-black dark:text-[#fff] '}>About Me</h3>
                  <p className={'text-md text-[#888888] '}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className={'flex flex-col gap-2'}
                ><h3 className={'text-xl font-bold text-black dark:text-[#fff] '}>Contact</h3>
                  <div className={'flex gap-2 lg:flex-col xl:flex-row  xl:items-center xl:gap-10'}>
                    <div className={'flex items-center gap-2'}>
                      <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[red]'>
                        <FaPhoneFlip className='w-4 h-4 fill-[#fff]' />
                      </div>
                      <div className={'flex flex-col gap-0'}>
                        <span className='text-[#888888] text-sm'>Phone</span>
                        <p className={'text-[#000] font-bold text-[16px] dark:text-[#fff]'}>1234598765</p>
                      </div>
                    </div>
                    <div className={'flex items-center gap-2'}>
                      <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[red]'>
                        <FaEnvelopeOpen className='w-4 h-4 fill-[#fff]' />
                      </div>
                      <div className={'flex flex-col gap-0'}>
                        <span className='text-[#888888] text-sm'>Email</span>
                        <p className={'text-[#000] font-bold text-[16px] dark:text-[#fff]'} >demo@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 dark:bg-[#212130]'}>
                <h3 className={'text-xl font-bold text-black dark:text-[#fff] '}>Socials</h3>
                <div className={'flex flex-col gap-2'}>
                  <div className={'flex items-center gap-2 w-[100%] h-[30px] px-5 bg-[green] rounded-lg hover:bg-[#105910]  transition-all duration-150'}>
                    <FaWhatsappSquare className={'w-5 h-5 fill-[#fff]'} />
                    <div className={'w-[1.5px] h-[100%] bg-[#ffffff]'}></div>
                    <p className={'text-white text-lg'}>Whatsapp</p>
                  </div>
                  <div className={' flex items-center gap-2 w-[100%] h-[30px] px-5 bg-[#12a1cd] rounded-lg hover:bg-[#05627e]  transition-all duration-150'}>
                    <FaTelegram className={'w-5 h-5 fill-[#fff]'} />
                    <div className={'w-[1.5px] h-[100%] bg-[#ffffff]'}></div>
                    <p className={'text-white text-lg'} >Telegram</p>
                  </div>
                  <div className={' flex items-center gap-2 w-[100%] h-[30px] px-5 bg-[#12a1cd] rounded-lg hover:bg-[#05627e]  transition-all duration-150'}>
                    <FaPhoneFlip className={'w-5 h-5 fill-[#fff]'} />
                    <div className={'w-[1.5px] h-[100%] bg-[#ffffff]'}></div>
                    <p className={' text-white text-lg'}>Phone </p>
                  </div>
                  <div className={' flex items-center gap-2 w-[100%] h-[30px] px-5 bg-[#12a1cd] rounded-lg hover:bg-[#05627e]  transition-all duration-150'}>
                    <RiMessage2Fill className={'w-5 h-5 fill-[#fff]'} />
                    <div className={'w-[1.5px] h-[100%] bg-[#ffffff]'}></div>
                    <p className={'text-white text-lg'}>Message</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={'bg-[#6e6e6e] rounded-xl shadow-lg p-6 flex justify-between items-center gap-2 mt-4'}>
              <div className={'flex flex-col gap-2'}>
                <h3 className={'text-xl font-bold text-white'}>Upload Your Curriculum Vitae</h3>
                <p className={'text-[#888888] text-sm '}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
              </div>
              <div className={'bg-[#8b8b8b] min-w-[40px] min-h-[40px] rounded-full flex justify-center items-center '}>
                <FaArrowUp className={'w-5 h-5 fill-[#fff]'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil