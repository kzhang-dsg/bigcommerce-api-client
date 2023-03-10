export type Error = {
    /**
     * HTTP status code
     */
    status: number;
    /**
     * Short summary describing the particular error
     */
    title: string;
    /**
     * Detailed summary describing the particular error
     */
    detail?: string;
    /**
     * Reference that identifies the particular error
     */
    type: string;
    /**
     * Code representing the particular error
     */
    code?: number;
};
