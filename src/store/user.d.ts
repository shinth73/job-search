export declare const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export declare const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export interface UserState {
    isLoggedIn: boolean;
    selectOrganization: string[];
    selectedJobTypes: string[];
}
export declare const useUserStore: import("pinia").StoreDefinition<"user", UserState, {}, {
    loginUser(): void;
    ADD_SELECTED_ORGANIZATION(organizations: string[]): void;
    ADD_SELECTED_JOB_TYPES(jobTypes: string[]): void;
}>;
