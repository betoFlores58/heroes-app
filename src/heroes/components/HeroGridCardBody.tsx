import type { Hero } from '../types/hero.interface';
import {CardContent, CardDescription } from '@/components/ui/card';
import { Zap, Brain, Gauge, Shield } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import HeroGridCardFooter from './HeroGridCardFooter';

interface Props {
    hero: Hero;
}

const HeroGridCardBody = ({ hero }: Props) =>{
    return (
        <CardContent className="space-y-4">
            <CardDescription className="text-sm text-gray-600 line-clamp-2">{hero.description}</CardDescription>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                    <div className="flex items-center gap-1">
                        <Zap className="h-3 w-3 text-orange-500" />
                        <span className="text-xs font-medium">Strength</span>
                    </div>
                    <Progress
                        value={hero.strength * 10}
                        className="h-2"
                    />
                </div>
                <div className="space-y-1">
                    <div className="flex items-center gap-1">
                        <Brain className="h-3 w-3 text-blue-500" />
                        <span className="text-xs font-medium">Intelligence</span>
                    </div>
                    <Progress
                        value={hero.intelligence * 10}
                        className="h-2"
                    />
                </div>
                <div className="space-y-1">
                    <div className="flex items-center gap-1">
                        <Gauge className="h-3 w-3 text-green-500" />
                        <span className="text-xs font-medium">Speed</span>
                    </div>
                    <Progress
                        value={hero.speed * 10}
                        className="h-2"
                    />
                </div>
                <div className="space-y-1">
                    <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3 text-purple-500" />
                        <span className="text-xs font-medium">Durability</span>
                    </div>
                    <Progress
                        value={hero.durability * 10}
                        className="h-2"
                    />
                </div>
            </div>

            {/* Powers */}
            <div className="space-y-2">
                <h4 className="font-medium text-sm">Powers:</h4>
                <div className="flex flex-wrap gap-1">
                    {hero.powers.slice(0, 3).map((power) => (
                    <Badge variant="outline" className="text-xs" key={power}>
                        {power}
                    </Badge>
                    ))}

                    {hero.powers.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-gray-100">
                        +{hero.powers.length - 3} more
                    </Badge>
                    )}
                </div>
            </div>

            <HeroGridCardFooter hero={hero} />
        </CardContent>
    );
}

export default HeroGridCardBody;