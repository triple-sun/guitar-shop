import { ESocial } from "@guitar-shop/front/enums";
import { Link } from "react-router-dom";

const SocialToLink = {
  [ESocial.Pinterest]: 'https://www.pinterest.com/',
  [ESocial.Skype]: 'https://www.skype.com/',
  [ESocial.VSCO]: 'https://www.vsco.co/',
};

export const SocialElement = ({ social }: { social: ESocial }) => {
  return (
    <li className="socials-item">
      <Link
        className="socials__link"
        to={SocialToLink[social]}
        aria-label={`Мы в ${social}`}
      >
        <svg
          className="socials__icon"
          width="24"
          height="24"
          aria-hidden="true"
        ><use xlinkHref={`#icon-${social}`}></use></svg>
      </Link>
    </li>
  );
};

export default SocialElement;
