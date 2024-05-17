import { Masonry } from "react-masonry";
export default function Gallery() {
  return (
    <div className="mb:p-10">
      <div></div>
      <div className="columns-1 gap-[5px] lg:gap-[8px] sm:columns-1 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 md:[&>img:not(:first-child)]:mt-8">
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/ztpUS4N1xhY"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/mPFSPqZ007s"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/uPEnxrdSKIw"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/hFKZ5-0T9Ys"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/xoTt2fjs7d0"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/Vc2dD4157og"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/hqnQWmIt3cY"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/NTGg2rtWDwg"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/uyX3qAQhZVA"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/LV-NvICA-Gg"
          alt=""
        />
        <img
          className="rounded-[10px] w-full"
          src="https://source.unsplash.com/0anRfqnZISI"
          alt=""
        />
      </div>
    </div>
  );
}
