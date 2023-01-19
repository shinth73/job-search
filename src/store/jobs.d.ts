import type { Job } from "@/api/types";
export declare const FETCH_JOBS = "FETCH_JOBS";
export declare const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export declare const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export declare const FILTERED_JOBS = "FILTERED_JOBS";
export declare const FILTERED_JOBS_BY_ORGANIZATIONS = "FILTERED_JOBS_BY_ORGANIZATIONS";
export declare const FILTERED_JOBS_BY_JOB_TYPES = "FILTERED_JOBS_BY_JOB_TYPES";
export declare const INCLUDE_JOB_BY_ORGANIZATION = "INCLUDE_JOB_BY_ORGANIZATION";
export declare const INCLUDE_JOB_BY_JOB_TYPE = "INCLUDE_JOB_BY_JOB_TYPE";
export interface JobsState {
    jobs: Job[];
}
export declare const useJobsStore: import("pinia").StoreDefinition<"jobs", JobsState, {
    UNIQUE_ORGANIZATIONS(state: {
        jobs: {
            id: number;
            title: string;
            organization: string;
            degree: string;
            jobType: string;
            locations: string[];
            minimumQualifications: string[];
            preferredQualifications: string[];
            description: string[];
            dateAdded: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<JobsState>): Set<string>;
    UNIQUE_JOB_TYPES(state: {
        jobs: {
            id: number;
            title: string;
            organization: string;
            degree: string;
            jobType: string;
            locations: string[];
            minimumQualifications: string[];
            preferredQualifications: string[];
            description: string[];
            dateAdded: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<JobsState>): Set<string>;
    INCLUDE_JOB_BY_ORGANIZATION: () => (job: Job) => boolean;
    INCLUDE_JOB_BY_JOB_TYPE: () => (job: Job) => boolean;
    FILTERED_JOBS(state: {
        jobs: {
            id: number;
            title: string;
            organization: string;
            degree: string;
            jobType: string;
            locations: string[];
            minimumQualifications: string[];
            preferredQualifications: string[];
            description: string[];
            dateAdded: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<JobsState>): Job[];
}, {
    FETCH_JOBS(): Promise<void>;
}>;
