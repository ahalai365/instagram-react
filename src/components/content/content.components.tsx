import React from 'react';
import './content.styles.css';

// const c1: number = 1;

// function sum(a: number, b: number): number {
//     return a + b
// }

// const foo: (arg: any) => any = (a: any): any => {
//     return a
// }
// /**
//  * any
//  * number, string, boolean, null, undefined, object
//  */

// const count: Record<string, number> = {
//     apple: 2,
//     orange: 1
// }

// const fruits: Array<string> = ['foo', 'bar'];
// fruits.push(1);
// fruits.map((el: number) => {});

type TContainerProps = {
    children: React.ReactNode;
};

export function Content(props: TContainerProps) {
    return <div className='content'>{props.children}</div>
}