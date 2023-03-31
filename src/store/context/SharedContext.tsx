import React, { createContext, useState } from 'react';

export const SharedContextProvider = ({ children }: any) => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [showGlobalLoading, setShowGlobalLoading] = useState(false)
    const [showRightSideOfHeader, setShowRightSideOfHeader] = useState<boolean>(true)

    return (
        <SharedContext.Provider
            value={{
                showOverlay,
                setShowOverlay,
                showGlobalLoading,
                setShowGlobalLoading,
                showRightSideOfHeader,
                setShowRightSideOfHeader
            }}>
            {children}
        </SharedContext.Provider>
    );
};

export const SharedContext: any = createContext({});