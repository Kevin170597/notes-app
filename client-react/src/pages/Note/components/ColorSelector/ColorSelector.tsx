
import { useState } from 'react';
import { ArrowDownIcon } from '../../../../assets/icons/ArrowDown';
import './ColorSelector.css';

export const ColorSelector = ({ color, setNote, note }: any) => {
    const [colorSelector, setColorSelector] = useState<boolean>(false);

    return (
        <div>
            <button className='colorSelector' onClick={() => setColorSelector(!colorSelector)}>
                <div className='color' style={{ backgroundColor: color }}></div>
                <ArrowDownIcon />
            </button>
            {colorSelector &&
                <div className='colorSelectorModal'>
                    {['#ff9e9e', '#7fd57d', '#fff599', '#9effff', '#b69cff'].map((e) =>
                        <button
                            key={e}
                            onClick={() => setNote({ ...note, color: e })}
                            style={{ backgroundColor: e }}
                            className='colorOption'></button>
                    )}
                </div>
            }
        </div>
    )
};