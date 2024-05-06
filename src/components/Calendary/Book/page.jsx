import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function MainComponent({
  imageUrl,
  pricePerHour,
  eventName,
  eventLocation,
}) {

  return (
    <div className="bg-[#ffffff] text-[#000000] rounded-lg overflow-hidden shadow-lg w-fill cursor-pointer dark:bg-[#000000] dark:text-[#fff] ">
    <div     className="w-full h-[200px] "
    >
    <img 
        className='w-full h-full object-cover'
        src={imageUrl}
        alt="Stadium event display"
      />
    </div>
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 "  >{pricePerHour}</div>
        <p className="grid ">
          <span className="font-semibold">{eventName}{" "}</span> 
          <span>{eventLocation}</span>
        </p>
        </div>
      
    </div>
  );
}
function Book() {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div style={{marginTop:'66px'}} className=' text-[#000] grid gap-5 dark:text-[#fff] '  >
      <ul className='flex  flex-wrap  gap-3 w-full'>
      {[1,4,5,6,7,8,9,0,0,9,9,9,9].map((res, i  ) => (
        <li key={i} onClick={() => setPageIndex(i)} style={{whiteSpace:'nowrap'}} className={`bg-[#ffffff] text-[#000000] rounded-lg    p-2 cursor-pointer dark:bg-[#000000] dark:text-[#fff] hover:bg-[#000000] hover:text-[#fff]  ${
          pageIndex === i
            ? "border border-solid border-[#000] dark:border-[#fff]"
            : ""
        } `}> 
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        </li>
      ))}
      </ul>
    <div className='flex justify-center text-center items-center   dark:text-[#fff]'>
    <p className='text-2xl font-bold'>Забронировать</p>
    </div>

    <div className='grid justify-between xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1  flex-wrap gap-3  '>
    { [1, 2, 3, 4,10, 11,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item , i) => ( <Link to={`/calendary/book/${item}`} key={i} ><MainComponent
      imageUrl="https://s3-alpha-sig.figma.com/img/09fc/ad00/476fddffff8e8b0d0c4af1448be991d8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ox9SD-nOhq9WEHxyRD3qQhO89XOYLhMDtqs5QJaqdyLuOgrNSVAkdZFTNFigFmAsMqSY93IKnLPqDe7-iMmmw1EHzJM2kpgBSoYYgSgsZf8SyN63zkAguchItahZlBFX~oALRqC0hzM92FoZvEc7U9NPvfFdWLueJmy-xcAv4rxhU-XnDuQ9bH6zJIr9f4w3qyYm0CvksRVBjSAU6rhT6iZE47Jn3~NhmqHLc1sAJkd~V5Mc2wLuMgt1e91JKUdnU0RkZoJCpjzhw2XWOfqVE7lDschjY24t6aGEDZUEnxCyq2NHxuL98ONeKIvfWPJkSUrdF6VjMGOTmQ2GnXHO9g__"
      pricePerHour="1 000 сом / час"
      eventName="El Clasico"
      eventLocation="Спортивный комплекс"
      distance="26 KM"
      rating={3.0}
      totalReviews={2}
    />  </Link> ))}
    
    </div>
    </div>
  )
}

export default Book
