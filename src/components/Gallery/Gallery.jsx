import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useSelector } from 'react-redux';
export default function Gallery() {
  const { fieldsIdList, fieldsIdDetail } = useSelector((state) => state.fields);

  return (
    <>
      {fieldsIdDetail?.gallery_f_type?.length > 0 ? (
        <Box >
          <ImageList variant="masonry" cols={3} gap={8}>
            {fieldsIdDetail?.gallery_f_type?.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item?.img}`}
                  src={`${item?.img}`}
                  alt={''}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : (
        <div className='flex items-center justify-center my-[10%]'>
          <p className='text-[20px] font-[500] text-[#000]'>Изображения отсутствуют</p>
        </div>
      )}
    </>
  );
}
