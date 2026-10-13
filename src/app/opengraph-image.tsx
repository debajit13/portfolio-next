import { renderSocialCard } from '@/lib/socialCard';
import { SOCIAL_CARD_SIZE, socialCardAlt } from '@/lib/site';

export const alt = socialCardAlt;
export const size = SOCIAL_CARD_SIZE;
export const contentType = 'image/png';

const OpenGraphImage = () => renderSocialCard();

export default OpenGraphImage;
