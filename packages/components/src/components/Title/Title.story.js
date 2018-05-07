import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from './Title';

const TestComp = () => <div>TestComp</div>;

storiesOf('Title', module)
    .add('with text', () => <Title>Hello World!</Title>)
    .add('with some emoji', () => <Title>😀 😎 👍 💯</Title>);
