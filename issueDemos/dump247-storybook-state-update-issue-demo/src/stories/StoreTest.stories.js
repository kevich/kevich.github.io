import React from 'react';
import StoreTest from '../StoreTest';
import { withState } from "@dump247/storybook-state";

export default {
    title: 'StoreTest',
};

export const TestWithJustButton = withState({})(
    ({ store }) => <StoreTest
        updateValue={value => store.set({ value })}
        value={store.state.value}
    />
);

export const TestWithDidMount = withState({})(
    ({ store }) => <StoreTest
        updateValue={value => store.set({ value })}
        value={store.state.value}
        updateInDidMount
    />
);

export const TestWithConstructor = withState({})(
    ({ store }) => <StoreTest
        updateValue={value => store.set({ value })}
        value={store.state.value}
        updateInConstructor
    />
);
