import React, { createContext, useState } from 'react';
import { OptionModel } from '../../models/typescript/sharedContext';

export const SharedContextProvider = ({ children }: any) => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [showGlobalLoading, setShowGlobalLoading] = useState(false)
    const [showRightSideOfHeader, setShowRightSideOfHeader] = useState<boolean>(true)
    const [showGoBackButton, setShowGoBackButton] = useState<boolean>(false)
    const [platform, setPlatform] = useState<OptionModel>({ id: "2", text: "All" })
    const [category, setCategory] = useState<OptionModel>()
    const [sortby, setSortby] = useState<OptionModel>()
    const [applyTrigger, setApplyTrigger] = useState<number>(0)

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
                setShowGoBackButton,
                platform,
                setPlatform,
                category,
                setCategory,
                sortby,
                setSortby,
                applyTrigger,
                setApplyTrigger
            }}>
            {children}
        </SharedContext.Provider>
    );
};

export const SharedContext: any = createContext({});