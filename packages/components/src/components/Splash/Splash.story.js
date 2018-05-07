import React from 'react';
import { storiesOf } from '@storybook/react';

import Splash from './Splash';
import Title from '../Title/Title';

storiesOf('Splash', module)
    .add('with text', () => <Splash>Hello World!</Splash>)
    .add('with Title component', () => (
        <Splash>
            <Title>My fancy title</Title>
        </Splash>
    ));
