export type User = {
    /**
     * Unique identifier for the given user.
     */
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth?: string;
    /**
     * Set to true if the user's email has been verified.
     */
    emailVerified: boolean;
    /**
     * The date that the user was created.
     */
    createDate?: string;
};
