import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/colors'

export interface CheckboxProps {
    checked: boolean
}

const CheckboxWrapper = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    user-select: none;
    height: 1em;
    width: 1em;
    font-size: 30px;
    border: 4px solid ${PRIMARY_COLOR};
    
    input:checked ~ .chx__mark::after,
    input:checked ~ .chx__mark-rounded::after {
        display: block
    }
    
    > input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    
    &__mark,
    &__mark-rounded {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        margin: 0;
    }
    
    &__mark::after,
    &__mark-rounded::after {
        content: "";
        position: absolute;
        display: none;
    }
    
    &__mark::after {
        width: 0.2em;
        height: 0.6em;
        border: solid ${SECONDARY_COLOR};
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    
    &--small {
        font-size: 25px;
    }
    
    &--big {
        font-size: 35px;
    }
    
    &--rounded {
        border-radius: 50%;
    }
    
    &__mark-rounded {
        border-radius: 50%;
    }
    
    &__mark-rounded::after {
        border-radius: 50%;
        width: 0.3em;
        height: 0.3em;
        background-color: ${SECONDARY_COLOR};
    }
`

export const Checkbox: FunctionComponent<CheckboxProps> = (
    {
        checked,
    },
) => {
    return (
        <div>

        </div>
    )
}
