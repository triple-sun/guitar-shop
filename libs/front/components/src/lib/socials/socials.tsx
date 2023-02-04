import { ESocial } from '@guitar-shop/front/enums';
import SocialElement from '../social-element/social-element';


const Socials = Object.values(ESocial);

export const SocialsComponent = () => (
      <ul className="socials__list">
        {Socials.map((social) => (
          <SocialElement key={social} social={social}/>
        ))}
      </ul>
);

export default SocialsComponent;
