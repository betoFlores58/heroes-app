import { use } from 'react';
import { Heart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Hero } from '../types/hero.interface';
import { FavoriteHeroContext } from '../context/FavoriteHeroContext';
import HeroGridCardBody from './HeroGridCardBody';
import HeroGridCardHeader from './HeroGridCardHeader';

interface Props {
    hero: Hero;
}

export const HeroGridCard = ({ hero }: Props) => {
    const navigate = useNavigate();
    const { isFavorite, toggleFavorite } = use(FavoriteHeroContext);

    const handleClick = () => {
        navigate(`/heroes/${hero.slug}`);
    };

    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
            <div className="relative h-64">
                <img
                    src={hero.image}
                    alt={hero.name}
                    className="object-cover transition-all duration-500 group-hover:scale-110 absolute top-[-30px] w-full h-[410px]"
                    onClick={handleClick}
                />

                {/* Status indicator */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div
                        className={`w-3 h-3 rounded-full ${
                        hero.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    />
                    <Badge
                        variant="secondary"
                        className="text-xs bg-white/90 text-gray-700"
                    >
                        {hero.status}
                    </Badge>
                </div>

                {/* Universe badge */}
                {hero.universe === 'DC' ? (
                <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
                    {hero.universe}
                </Badge>
                ) : (
                <Badge className="absolute top-3 right-3 text-xs bg-red-600 text-white">
                    {hero.universe}
                </Badge>
                )}

                {/* Favorite button */}
                <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
                onClick={() => toggleFavorite(hero)}
                >
                <Heart
                    className={`h-4 w-4 ${
                    isFavorite(hero) ? 'fill-red-500 text-red-500' : 'text-gray-500'
                    }`}
                />
                </Button>

                {/* View details button */}
                <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                <Eye className="h-4 w-4 text-gray-600" />
                </Button>
            </div>
            <HeroGridCardHeader hero={hero} />
            <HeroGridCardBody hero={hero} />
        </Card>
    );
};