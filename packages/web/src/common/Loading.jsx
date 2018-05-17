import React from 'react'
import styled from 'styled-components'

import { FadeIn } from '@nordea-prep/components'
import Message from 'common/Message'

const LoadingMessage = styled(Message)`
    background: darkblue;
`

const Loading = () => (
    <FadeIn>
        <LoadingMessage>Loading...</LoadingMessage>
    </FadeIn>
)

export default Loading
