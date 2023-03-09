import { useState } from 'react';
import './ColorSelector.css';
// Assets
import { ArrowDownIcon } from '../../../../assets/icons';

export const ColorSelector = ({ color, setNote, note }: any) => {
    const [colorSelector, setColorSelector] = useState<boolean>(false);

    const handleSelectColor = (color: string) => {
        setNote({...note, color});
        setColorSelector(false);
    }

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
                            onClick={() => handleSelectColor(e)}
                            style={{ backgroundColor: e }}
                            className='colorOption'></button>
                    )}
                </div>
            }
        </div>
    )
};