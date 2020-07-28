import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState, useCallback } from 'react';
import { TextInputProperties } from 'react-native';

import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProperties {
    name: string;
    icon: string;
}

interface inputValueReference {
    value: string;
}

interface InputRef {
    focus(): void;
}

const Input: React.RefForwardingComponent<InputRef ,InputProps> = ({ name, icon, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const inputElementRef = useRef<any>(null);

    const { registerField, defaultValue, fieldName, error } = useField(name);
    const inputValueRef = useRef<inputValueReference>({ value: defaultValue });

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputValueRef.current.value);
    }, []);

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        }
    }));

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(value: string) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            }
        })
    }, [fieldName, registerField]);

    return (
      <Container isFocused={isFocused} isErrored={!!error}>
        <Icon name={icon} size={20} color={isFocused || isFilled ? '#6c63ef' : '#6e6e6e'} />

        <TextInput
          ref={inputElementRef}
          placeholderTextColor="#4E4E4E"
          {...rest}
          keyboardAppearance="light"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
              inputValueRef.current.value = value;
          }}
        /> 
      </Container>
    );
};

export default forwardRef(Input);