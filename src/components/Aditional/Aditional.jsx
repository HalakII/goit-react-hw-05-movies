import { useLocation } from 'react-router-dom';
import { List, AdditionalWrp, LinkInfo, LineDiv } from './Aditional.stayled';
import { animateScroll as scroll } from 'react-scroll';

export const AdditionalInfo = () => {
  const location = useLocation();

  const scrollPage = () => {
    const halfPageHeight = window.innerHeight / 2;
    scroll.scrollMore(halfPageHeight, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <AdditionalWrp>
      <LineDiv>
        <h3>Additional information</h3>
        <List>
          <li>
            <LinkInfo to="cast" state={{ from: location }} onClick={scrollPage}>
              Cast
            </LinkInfo>
          </li>
          <li>
            <LinkInfo
              to="reviews"
              state={{ from: location }}
              onClick={scrollPage}
            >
              Reviews
            </LinkInfo>
          </li>
        </List>
      </LineDiv>
    </AdditionalWrp>
  );
};
