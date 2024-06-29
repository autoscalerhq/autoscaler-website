
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import s from '@/components/Pricing/ComparePlansCards/ComparePlansCards.module.scss';
import { Button } from '@/components/ui/button';
import {PlanCard} from "@/components/pricing/ComparePlanCard";
import {LABELS, PLANS} from "@/components/pricing/PricingDataTable";

interface ComparePlansCardsProps {
    activeTier: string;
}
export default function ComparePlansCards({ activeTier }: ComparePlansCardsProps) {
    const [currentRow, setCurrentRow] = useState('');

    useEffect(() => {
        const cells = document.querySelectorAll(`[data-row-id]`);

        cells.forEach(cell => {
            const rowId = cell.getAttribute('data-row-id');

            cell.addEventListener('mouseenter', () => setCurrentRow(rowId as string));
            cell.addEventListener('mouseleave', () => setCurrentRow(''));
        });

        return () => {
            cells.forEach(cell => {
                const rowId = cell.getAttribute('data-row-id');

                cell.removeEventListener('mouseenter', () => setCurrentRow(rowId as string));
                cell.removeEventListener('mouseleave', () => setCurrentRow(''));
            });
        };
    }, []);

    return (
        <div className={'flex flex-col pt-4'}>
            <div className={'flex flex-col items-center'}>
                <h2 className={'bg-clip-text text-5xl'}>
                    <b>Compare our Plans</b>
                </h2>
                <div className={'text-md text-grey-500 pt-3'}>
                    Check out our
                    <Button variant={'link'} className={'text-grey-800 text-md px-1 py-0 underline'}>
                        <Link href={'https://csgrader.productlane.com/roadmap'}>Roadmap</Link>
                    </Button>
                    to upvote a feature
                </div>
            </div>
            <div className={s['compareplans-card']}>
                <div className={s['compareplans-grid']}>
                    <div className={s['compareplans-grid-column']}>
                        {LABELS.map(({ title, items }, index) => (
                            <div className={s['compareplans-grid-column-card']} key={index}>
                                <span className={s['compareplans-grid-column-card-title']}>{title}</span>
                                <ul className={s['compareplans-grid-column-card-item']}>
                                    {Object.keys(items).map((item, index) => {
                                        const isActive = `${item}-${index}` === currentRow;
                                        return (
                                            <li className={clsx(s['compareplans-items'], isActive)} data-row-id={`${item}-${index}`} key={index} style={item === 'support' ? { minHeight: 140 } : {}}>
                                                {
                                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                    // @ts-ignore
                                                    items[item]
                                                }
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {Object.keys(PLANS).map((plan, index) => (
                        <PlanCard activeTier={activeTier} currentRow={currentRow} key={index} {...PLANS[plan]} />
                    ))}
                </div>
            </div>
        </div>
    );
}
