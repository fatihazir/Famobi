
export interface SharedContextModel {
    showOverlay: boolean;
    setShowOverlay: (arg: boolean) => Function;
    showGlobalLoading: boolean;
    setShowGlobalLoading: (arg: boolean) => Function;
    showRightSideOfHeader: boolean;
    setShowRightSideOfHeader: (arg: boolean) => Function;
    showGoBackButton: boolean;
    setShowGoBackButton: (arg: boolean) => Function;
    platform: OptionModel;
    setPlatform: (arg: OptionModel) => Function;
    category: OptionModel;
    setCategory: (arg: OptionModel) => Function;
    sortby: OptionModel;
    setSortby: (arg: OptionModel) => Function;
    applyTrigger: number,
    setApplyTrigger: (arg: number) => Function;
}

export interface OptionModel {
    id: any,
    text: string
}