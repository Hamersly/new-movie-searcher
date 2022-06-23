import * as React from 'react';
import {FC} from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import {ScrollBox} from "./ScrollTop.styled";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export const ScrollTop: FC<Props> = ({children, window}) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('Scroll!!!!')
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <ScrollBox
        onClick={handleClick}
        role="presentation"
      >
        {children}
      </ScrollBox>
    </Fade>
  );
}