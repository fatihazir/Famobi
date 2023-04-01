
export interface SharedContextModel {
    showOverlay: boolean;
    setShowOverlay: (arg: boolean) => Function;
    showGlobalLoading: boolean;
    setShowGlobalLoading: (arg: boolean) => Function;
    showRightSideOfHeader: boolean;
    setShowRightSideOfHeader: (arg: boolean) => Function;
    showGoBackButton: boolean;
    setShowGoBackButton: (arg: boolean) => Function;
}