import React, {useCallback, useState} from 'react';
import {View, TouchableHighlight, TouchableOpacity} from 'react-native';
import GLOBAL from '../../datalayer/global';

const FocusButton = props => {
    const [focus, setFocus] = useState(false);
    const onFocus = useCallback(() => {
        setFocus(true);
    }, []);
    const onBlur = useCallback(() => {
        setFocus(false);
    }, []);
    if (GLOBAL.Device_IsSmartTV) {
        return (
            <TouchableHighlight
                {...props}
                hasTVPreferredFocus={props.hasTVPreferredFocus}
                removeMoveResponder
                activeOpacity={1}
                onBlur={() => onBlur()}
                onFocus={() => onFocus()}
                style={[
                    props.style,
                    {backgroundColor: focus ? GLOBAL.Button_Color : null},
                ]}
            >
                {props.children}
            </TouchableHighlight>
        );
    } else {
        return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
    }
};
export default FocusButton;
