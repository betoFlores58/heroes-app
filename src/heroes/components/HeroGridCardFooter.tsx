import type { Hero } from '../types/hero.interface';
import { CardFooter } from '@/components/ui/card';


interface Props {
    hero: Hero;
}

const HeroGridCardFooter = ({ hero }: Props) =>{
    return (
        <CardFooter className="text-xs text-gray-500 pt-2 border-t">
            Primera aparición: {hero.firstAppearance}
        </CardFooter>
    );
}

export default HeroGridCardFooter;