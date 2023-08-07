import React, {FC} from 'react';
// @ts-expect-error
import {another1} from './another1?inline';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <button onClick={() => {
            another1();
            console.log('### inline code:', another1);
        }}>Hello from inline
        </button>
    </div>;
}
