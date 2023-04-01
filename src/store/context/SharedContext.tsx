import React, { createContext, useState } from 'react';

export const SharedContextProvider = ({ children }: any) => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [showGlobalLoading, setShowGlobalLoading] = useState(false)
    const [showRightSideOfHeader, setShowRightSideOfHeader] = useState<boolean>(true)
    const [showGoBackButton, setShowGoBackButton] = useState(false)

    return (
        <SharedContext.Provider
            value={{
                showOverlay,
                setShowOverlay,
                showGlobalLoading,
                setShowGlobalLoading,
                showRightSideOfHeader,
                setShowRightSideOfHeader,
                showGoBackButton,
                setShowGoBackButton
            }}>
            {children}
        </SharedContext.Provider>
    );
};

export const SharedContext: any = createContext({});