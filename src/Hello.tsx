import React, {FC} from 'react';
// @ts-expect-error
import raw from './another1?raw';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <button onClick={() => {
            console.log('### raw code:', raw);
        }}>Hello from inline
        </button>
        <div>{raw}</div>
    </div>;
}
