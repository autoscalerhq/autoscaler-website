import clsx from 'clsx';
import React from 'react';

import s from './FeatureList.module.scss';
import {Check} from "lucide-react";

interface FeatureListProps {
    features: Record<string, boolean>;
    currentRow: string;
}
const presentFeature = <Check className={s['checkmark']} />;

const missingFeature = <Check className={s['checkmarkHidden']} />;
const renderFeature = (feature: boolean) => {
    if (feature) return presentFeature;
    if (!feature) return missingFeature;
    return feature;
};

export const FeatureList = ({ features, currentRow }: FeatureListProps) => (
    <div className={s['list-container']}>
        {Object.keys(features).map((item, index) => {
            const isActive = index === (currentRow as unknown as number); // @todo fix this
            return (
                <span className={clsx(s['list-item'], isActive)} data-row-id={`${item}-${index}`} key={index} style={item === 'support' ? { minHeight: 140 } : {}}>
          {renderFeature(features[item])}
        </span>
            );
        })}
    </div>
);
